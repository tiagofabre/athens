(ns athens.views.settings-page
  (:require
    ["@material-ui/icons/ToggleOff" :default ToggleOff]
    ["@material-ui/icons/ToggleOn" :default ToggleOn]
    [athens.electron :as electron]
    [athens.views.buttons :refer [button]]
    [cljs-http.client :as http]
    [cljs.core.async :refer [<!]]
    [goog.functions :as goog-functions]
    [reagent.core :as r])
  (:require-macros
    [cljs.core.async.macros :refer [go]]))


(defn opt-out
  [opted-out?]
  (.. js/posthog (capture "opt-out"))
  (.. js/window -posthog opt_out_capturing)
  (js/localStorage.setItem "sentry" "off")
  (reset! opted-out? true))


(defn opt-in
  [opted-out?]
  (.. js/window -posthog opt_in_capturing)
  (.. js/posthog (capture "opt-in"))
  (js/localStorage.setItem "sentry" "on")
  (reset! opted-out? false))


(defn handle-click
  [opted-out?]
  (if @opted-out?
    (opt-in opted-out?)
    (opt-out opted-out?)))


(defn handle-debounce-save-input
  [value debounce-time]
  (when (and (<= 0 value) (<= value 1000))
    (reset! debounce-time value)
    (set! electron/debounce-write-db (goog-functions/debounce electron/write-db (* 1000 value)))
    (js/localStorage.setItem "debounce-save-time" value)))


(defn handle-change-email
  [email value]
  (reset! email value))


(defn handle-click-email
  [email authed? sending-request]
  (let [api       "https://dhx9n94ty5.execute-api.us-east-1.amazonaws.com/Prod/hello"
        email-qs  "?email="
        query-url (str api email-qs email)]
    (reset! sending-request true)
    (go (let [resp (<! (http/get query-url))]
          (cond

            ;; Open Collective Lambda finds email associated with Athens
            (and (:success resp) (true? (:email_exists (:body resp))))
            (do
              (js/localStorage.setItem "auth/email" email)
              (js/localStorage.setItem "auth/authed?" (str true))
              (reset! authed? true))

            ;; Open Collective Lambda doesn't find email
            (and (:success resp) (false? (:email_exists (:body resp))))
            (do
              (js/localStorage.setItem "auth/email" nil)
              (js/localStorage.setItem "auth/authed?" (str false))
              (reset! authed? false)
              (js/alert "No OpenCollective account was found with this email address."))

            ;; Something else, e.g. networking error
            :else
            (js/alert (str "Unexpected error" resp)))
          (reset! sending-request false)))))


(defn init-email
  []
  (let [email (js/localStorage.getItem "auth/email")]
    (if (= email "null")
      ""
      email)))


(defn settings-page
  []
  (let [opted-out?          (r/atom (.. js/window -posthog has_opted_out_capturing))
        ;; pretty easy to get around this auth. Lol
        authed?             (r/atom (= (js/localStorage.getItem "auth/authed?") "true"))
        email               (r/atom (init-email))
        sending-request     (r/atom false)
        debounce-save-time! (r/atom (js/Number (js/localStorage.getItem "debounce-save-time")))]

    (fn []
      (let [submit-disabled     (or @sending-request @authed?)]

        [:div {:style {:display        "flex"
                       :margin         "0vh 5vw"
                       :width          "90vw"
                       :flex-direction "column"}}
         [:h2 "Settings"]

         (if @authed?
           [:span (str "Thank you for using and backing us, " @email " ❤️")]
           [:span "You are using the free version of Athens. You are hosting your own data. Please be careful!"])

         [:div {:style {:margin "10px 0"}}
          [:h5 "Email"]
          [:div {:style {:margin "5px 0" :display "flex" :justify-content "space-between"}}
           [:input {:style {:width "15em"} :type "email" :value @email :placeholder "Open Collective Email"
                    :on-change #(handle-change-email email (.. % -target -value))}]
           [button {:on-click #(handle-click-email @email authed? sending-request)
                    :disabled submit-disabled
                    :primary  true} "Submit"]]]

         ;; Analytics

         (if @opted-out?
           [:h5 "Opted Out of Product Usage and Error Monitoring"]
           [:h5 "Opted Into Product Usage and Error Monitoring"])
         [:div {:style {:margin "10px 0"}}
          [button {:primary  (false? @opted-out?)
                   :on-click #(handle-click opted-out?)}
           (if @opted-out?
             [:div {:style {:display "flex"}}
              [:> ToggleOn]
              [:span "\uD83D\uDE41 Opting out makes it harder to improve Athens, and for us to become sustainable."]]
             [:div {:style {:display "flex"}}
              [:> ToggleOff]
              [:span "\uD83D\uDD12 Athens will never sell your data. Athens has never and will never look at the contents of your database and what you are writing."]])]]
         [:div {:style {:margin-top "15px"}}
          [:h5 "Remote Backups"]
          [:div {:style {:margin "5px 0" :display "flex" :justify-content "space-between"}}
           [button {:disabled true}
            "Backup my DB to the cloud"]
           [:span "Coming soon to " [:a {:href "https://opencollective.com/athens" :target "_blank"}
                                     "paid Users and Sponsors"]]]]

         ;; Auto-save
         [:div {:style {:margin "20px 0"}}
          [:h5 "Auto-save"]
          [:div {:style {:display "flex" :justify-content "space-between"
                         :margin "10px 0"}}
           [:input {:style {:width "4em"}
                    :type  "number" :value @debounce-save-time! :on-change #(handle-debounce-save-input (js/Number (.. % -target -value)) debounce-save-time!)}]
           (case @debounce-save-time!
             0 [:span (str "Athens will save and create a local backup after each edit.")]
             1 [:span (str "Athens will save and create a local backup " @debounce-save-time! " second after your last edit.")]
             [:span (str "Athens will save and create a local backup " @debounce-save-time! " seconds after your last edit.")])]]]))))

