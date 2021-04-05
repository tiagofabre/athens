goog.provide('athens.views.settings_page');
var module$node_modules$$material_ui$icons$ToggleOff=shadow.js.require("module$node_modules$$material_ui$icons$ToggleOff", {});
var module$node_modules$$material_ui$icons$ToggleOn=shadow.js.require("module$node_modules$$material_ui$icons$ToggleOn", {});
athens.views.settings_page.opt_out = (function athens$views$settings_page$opt_out(opted_out_QMARK_){
posthog.capture("opt-out");

window.posthog.opt_out_capturing();

localStorage.setItem("sentry","off");

return cljs.core.reset_BANG_(opted_out_QMARK_,true);
});
athens.views.settings_page.opt_in = (function athens$views$settings_page$opt_in(opted_out_QMARK_){
window.posthog.opt_in_capturing();

posthog.capture("opt-in");

localStorage.setItem("sentry","on");

return cljs.core.reset_BANG_(opted_out_QMARK_,false);
});
athens.views.settings_page.handle_click = (function athens$views$settings_page$handle_click(opted_out_QMARK_){
if(cljs.core.truth_(cljs.core.deref(opted_out_QMARK_))){
return athens.views.settings_page.opt_in(opted_out_QMARK_);
} else {
return athens.views.settings_page.opt_out(opted_out_QMARK_);
}
});
athens.views.settings_page.handle_debounce_save_input = (function athens$views$settings_page$handle_debounce_save_input(value,debounce_time){
if(((((0) <= value)) && ((value <= (1000))))){
cljs.core.reset_BANG_(debounce_time,value);

(athens.electron.debounce_write_db = goog.functions.debounce(athens.electron.write_db,((1000) * value)));

return localStorage.setItem("debounce-save-time",value);
} else {
return null;
}
});
athens.views.settings_page.handle_change_email = (function athens$views$settings_page$handle_change_email(email,value){
return cljs.core.reset_BANG_(email,value);
});
athens.views.settings_page.handle_click_email = (function athens$views$settings_page$handle_click_email(email,authed_QMARK_,sending_request){
var api = "https://dhx9n94ty5.execute-api.us-east-1.amazonaws.com/Prod/hello";
var email_qs = "?email=";
var query_url = [api,email_qs,cljs.core.str.cljs$core$IFn$_invoke$arity$1(email)].join('');
cljs.core.reset_BANG_(sending_request,true);

var c__56877__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56878__auto__ = (function (){var switch__56774__auto__ = (function (state_91517){
var state_val_91518 = (state_91517[(1)]);
if((state_val_91518 === (7))){
var inst_91490 = (state_91517[(7)]);
var inst_91470 = (state_91517[(8)]);
var inst_91490__$1 = new cljs.core.Keyword(null,"success","success",1890645906).cljs$core$IFn$_invoke$arity$1(inst_91470);
var state_91517__$1 = (function (){var statearr_91520 = state_91517;
(statearr_91520[(7)] = inst_91490__$1);

return statearr_91520;
})();
if(cljs.core.truth_(inst_91490__$1)){
var statearr_91521_91588 = state_91517__$1;
(statearr_91521_91588[(1)] = (9));

} else {
var statearr_91522_91589 = state_91517__$1;
(statearr_91522_91589[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91518 === (1))){
var inst_91468 = cljs_http.client.get(query_url);
var state_91517__$1 = state_91517;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_91517__$1,(2),inst_91468);
} else {
if((state_val_91518 === (4))){
var inst_91472 = (state_91517[(9)]);
var state_91517__$1 = state_91517;
var statearr_91527_91591 = state_91517__$1;
(statearr_91527_91591[(2)] = inst_91472);

(statearr_91527_91591[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91518 === (15))){
var inst_91470 = (state_91517[(8)]);
var inst_91506 = ["Unexpected error",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_91470)].join('');
var inst_91507 = alert(inst_91506);
var state_91517__$1 = state_91517;
var statearr_91528_91595 = state_91517__$1;
(statearr_91528_91595[(2)] = inst_91507);

(statearr_91528_91595[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91518 === (13))){
var state_91517__$1 = state_91517;
var statearr_91533_91596 = state_91517__$1;
(statearr_91533_91596[(1)] = (15));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91518 === (6))){
var inst_91481 = localStorage.setItem("auth/email",email);
var inst_91482 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(true);
var inst_91483 = localStorage.setItem("auth/authed?",inst_91482);
var inst_91484 = cljs.core.reset_BANG_(authed_QMARK_,true);
var state_91517__$1 = (function (){var statearr_91536 = state_91517;
(statearr_91536[(10)] = inst_91483);

(statearr_91536[(11)] = inst_91481);

return statearr_91536;
})();
var statearr_91537_91597 = state_91517__$1;
(statearr_91537_91597[(2)] = inst_91484);

(statearr_91537_91597[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91518 === (17))){
var inst_91510 = (state_91517[(2)]);
var state_91517__$1 = state_91517;
var statearr_91538_91598 = state_91517__$1;
(statearr_91538_91598[(2)] = inst_91510);

(statearr_91538_91598[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91518 === (3))){
var inst_91470 = (state_91517[(8)]);
var inst_91474 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_91470);
var inst_91475 = new cljs.core.Keyword(null,"email_exists","email_exists",-1713774167).cljs$core$IFn$_invoke$arity$1(inst_91474);
var inst_91476 = inst_91475 === true;
var state_91517__$1 = state_91517;
var statearr_91539_91599 = state_91517__$1;
(statearr_91539_91599[(2)] = inst_91476);

(statearr_91539_91599[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91518 === (12))){
var inst_91499 = localStorage.setItem("auth/email",null);
var inst_91500 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(false);
var inst_91501 = localStorage.setItem("auth/authed?",inst_91500);
var inst_91502 = cljs.core.reset_BANG_(authed_QMARK_,false);
var inst_91503 = alert("No OpenCollective account was found with this email address.");
var state_91517__$1 = (function (){var statearr_91540 = state_91517;
(statearr_91540[(12)] = inst_91499);

(statearr_91540[(13)] = inst_91501);

(statearr_91540[(14)] = inst_91502);

return statearr_91540;
})();
var statearr_91541_91601 = state_91517__$1;
(statearr_91541_91601[(2)] = inst_91503);

(statearr_91541_91601[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91518 === (2))){
var inst_91470 = (state_91517[(8)]);
var inst_91472 = (state_91517[(9)]);
var inst_91470__$1 = (state_91517[(2)]);
var inst_91472__$1 = new cljs.core.Keyword(null,"success","success",1890645906).cljs$core$IFn$_invoke$arity$1(inst_91470__$1);
var state_91517__$1 = (function (){var statearr_91546 = state_91517;
(statearr_91546[(8)] = inst_91470__$1);

(statearr_91546[(9)] = inst_91472__$1);

return statearr_91546;
})();
if(cljs.core.truth_(inst_91472__$1)){
var statearr_91549_91606 = state_91517__$1;
(statearr_91549_91606[(1)] = (3));

} else {
var statearr_91550_91607 = state_91517__$1;
(statearr_91550_91607[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91518 === (11))){
var inst_91497 = (state_91517[(2)]);
var state_91517__$1 = state_91517;
if(cljs.core.truth_(inst_91497)){
var statearr_91552_91608 = state_91517__$1;
(statearr_91552_91608[(1)] = (12));

} else {
var statearr_91553_91609 = state_91517__$1;
(statearr_91553_91609[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91518 === (9))){
var inst_91470 = (state_91517[(8)]);
var inst_91492 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_91470);
var inst_91493 = new cljs.core.Keyword(null,"email_exists","email_exists",-1713774167).cljs$core$IFn$_invoke$arity$1(inst_91492);
var inst_91494 = inst_91493 === false;
var state_91517__$1 = state_91517;
var statearr_91558_91610 = state_91517__$1;
(statearr_91558_91610[(2)] = inst_91494);

(statearr_91558_91610[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91518 === (5))){
var inst_91479 = (state_91517[(2)]);
var state_91517__$1 = state_91517;
if(cljs.core.truth_(inst_91479)){
var statearr_91559_91611 = state_91517__$1;
(statearr_91559_91611[(1)] = (6));

} else {
var statearr_91560_91613 = state_91517__$1;
(statearr_91560_91613[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91518 === (14))){
var inst_91512 = (state_91517[(2)]);
var state_91517__$1 = state_91517;
var statearr_91561_91617 = state_91517__$1;
(statearr_91561_91617[(2)] = inst_91512);

(statearr_91561_91617[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91518 === (16))){
var state_91517__$1 = state_91517;
var statearr_91566_91618 = state_91517__$1;
(statearr_91566_91618[(2)] = null);

(statearr_91566_91618[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91518 === (10))){
var inst_91490 = (state_91517[(7)]);
var state_91517__$1 = state_91517;
var statearr_91567_91619 = state_91517__$1;
(statearr_91567_91619[(2)] = inst_91490);

(statearr_91567_91619[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91518 === (8))){
var inst_91514 = (state_91517[(2)]);
var inst_91515 = cljs.core.reset_BANG_(sending_request,false);
var state_91517__$1 = (function (){var statearr_91568 = state_91517;
(statearr_91568[(15)] = inst_91514);

return statearr_91568;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_91517__$1,inst_91515);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var athens$views$settings_page$handle_click_email_$_state_machine__56775__auto__ = null;
var athens$views$settings_page$handle_click_email_$_state_machine__56775__auto____0 = (function (){
var statearr_91569 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_91569[(0)] = athens$views$settings_page$handle_click_email_$_state_machine__56775__auto__);

(statearr_91569[(1)] = (1));

return statearr_91569;
});
var athens$views$settings_page$handle_click_email_$_state_machine__56775__auto____1 = (function (state_91517){
while(true){
var ret_value__56776__auto__ = (function (){try{while(true){
var result__56777__auto__ = switch__56774__auto__(state_91517);
if(cljs.core.keyword_identical_QMARK_(result__56777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__56777__auto__;
}
break;
}
}catch (e91570){var ex__56778__auto__ = e91570;
var statearr_91571_91620 = state_91517;
(statearr_91571_91620[(2)] = ex__56778__auto__);


if(cljs.core.seq((state_91517[(4)]))){
var statearr_91572_91621 = state_91517;
(statearr_91572_91621[(1)] = cljs.core.first((state_91517[(4)])));

} else {
throw ex__56778__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__56776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__91623 = state_91517;
state_91517 = G__91623;
continue;
} else {
return ret_value__56776__auto__;
}
break;
}
});
athens$views$settings_page$handle_click_email_$_state_machine__56775__auto__ = function(state_91517){
switch(arguments.length){
case 0:
return athens$views$settings_page$handle_click_email_$_state_machine__56775__auto____0.call(this);
case 1:
return athens$views$settings_page$handle_click_email_$_state_machine__56775__auto____1.call(this,state_91517);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
athens$views$settings_page$handle_click_email_$_state_machine__56775__auto__.cljs$core$IFn$_invoke$arity$0 = athens$views$settings_page$handle_click_email_$_state_machine__56775__auto____0;
athens$views$settings_page$handle_click_email_$_state_machine__56775__auto__.cljs$core$IFn$_invoke$arity$1 = athens$views$settings_page$handle_click_email_$_state_machine__56775__auto____1;
return athens$views$settings_page$handle_click_email_$_state_machine__56775__auto__;
})()
})();
var state__56879__auto__ = (function (){var statearr_91577 = f__56878__auto__();
(statearr_91577[(6)] = c__56877__auto__);

return statearr_91577;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56879__auto__);
}));

return c__56877__auto__;
});
athens.views.settings_page.init_email = (function athens$views$settings_page$init_email(){
var email = localStorage.getItem("auth/email");
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(email,"null")){
return "";
} else {
return email;
}
});
athens.views.settings_page.settings_page = (function athens$views$settings_page$settings_page(){
var opted_out_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(window.posthog.has_opted_out_capturing());
var authed_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(localStorage.getItem("auth/authed?"),"true"));
var email = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(athens.views.settings_page.init_email());
var sending_request = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var debounce_save_time_BANG_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(Number(localStorage.getItem("debounce-save-time")));
return (function (){
var submit_disabled = (function (){var or__4126__auto__ = cljs.core.deref(sending_request);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.deref(authed_QMARK_);
}
})();
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"margin","margin",-995903681),"0vh 5vw",new cljs.core.Keyword(null,"width","width",-384071477),"90vw",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Settings"], null),(cljs.core.truth_(cljs.core.deref(authed_QMARK_))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),["Thank you for using and backing us, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(email))," \u2764\uFE0F"].join('')], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"You are using the free version of Athens. You are hosting your own data. Please be careful!"], null)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),"10px 0"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5","h5",-1829156625),"Email"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"margin","margin",-995903681),"5px 0",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"space-between"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"15em"], null),new cljs.core.Keyword(null,"type","type",1174270348),"email",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(email),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Open Collective Email",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__91578_SHARP_){
return athens.views.settings_page.handle_change_email(email,p1__91578_SHARP_.target.value);
})], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.buttons.button,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return athens.views.settings_page.handle_click_email(cljs.core.deref(email),authed_QMARK_,sending_request);
}),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),submit_disabled,new cljs.core.Keyword(null,"primary","primary",817773892),true], null),"Submit"], null)], null)], null),(cljs.core.truth_(cljs.core.deref(opted_out_QMARK_))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5","h5",-1829156625),"Opted Out of Product Usage and Error Monitoring"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5","h5",-1829156625),"Opted Into Product Usage and Error Monitoring"], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),"10px 0"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.buttons.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"primary","primary",817773892),cljs.core.deref(opted_out_QMARK_) === false,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return athens.views.settings_page.handle_click(opted_out_QMARK_);
})], null),(cljs.core.truth_(cljs.core.deref(opted_out_QMARK_))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"flex"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$icons$ToggleOn.default], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"\uD83D\uDE41 Opting out makes it harder to improve Athens, and for us to become sustainable."], null)], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"flex"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$icons$ToggleOff.default], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"\uD83D\uDD12 Athens will never sell your data. Athens has never and will never look at the contents of your database and what you are writing."], null)], null))], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"15px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5","h5",-1829156625),"Remote Backups"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"margin","margin",-995903681),"5px 0",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"space-between"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.buttons.button,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true], null),"Backup my DB to the cloud"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Coming soon to ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"https://opencollective.com/athens",new cljs.core.Keyword(null,"target","target",253001721),"_blank"], null),"paid Users and Sponsors"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),"20px 0"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5","h5",-1829156625),"Auto-save"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"space-between",new cljs.core.Keyword(null,"margin","margin",-995903681),"10px 0"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"4em"], null),new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(debounce_save_time_BANG_),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__91579_SHARP_){
return athens.views.settings_page.handle_debounce_save_input(Number(p1__91579_SHARP_.target.value),debounce_save_time_BANG_);
})], null)], null),(function (){var G__91583 = cljs.core.deref(debounce_save_time_BANG_);
switch (G__91583) {
case (0):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Athens will save and create a local backup after each edit."], null);

break;
case (1):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),["Athens will save and create a local backup ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(debounce_save_time_BANG_))," second after your last edit."].join('')], null);

break;
default:
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),["Athens will save and create a local backup ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(debounce_save_time_BANG_))," seconds after your last edit."].join('')], null);

}
})()], null)], null)], null);
});
});

//# sourceMappingURL=athens.views.settings_page.js.map
