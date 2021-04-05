goog.provide('dommy.core');
/**
 * Returns a selector in string format.
 * Accepts string, keyword, or collection.
 */
dommy.core.selector = (function dommy$core$selector(data){
if(cljs.core.coll_QMARK_(data)){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(dommy.core.selector,data));
} else {
if(((typeof data === 'string') || ((data instanceof cljs.core.Keyword)))){
return cljs.core.name(data);
} else {
return null;
}
}
});
dommy.core.text = (function dommy$core$text(elem){
var or__4126__auto__ = elem.textContent;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return elem.innerText;
}
});
dommy.core.html = (function dommy$core$html(elem){
return elem.innerHTML;
});
dommy.core.value = (function dommy$core$value(elem){
return elem.value;
});
dommy.core.class$ = (function dommy$core$class(elem){
return elem.className;
});
dommy.core.attr = (function dommy$core$attr(elem,k){
if(cljs.core.truth_(k)){
return elem.getAttribute(dommy.utils.as_str(k));
} else {
return null;
}
});
/**
 * The computed style of `elem`, optionally specifying the key of
 * a particular style to return
 */
dommy.core.style = (function dommy$core$style(var_args){
var G__87066 = arguments.length;
switch (G__87066) {
case 1:
return dommy.core.style.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.style.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.style.cljs$core$IFn$_invoke$arity$1 = (function (elem){
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(window.getComputedStyle(elem));
}));

(dommy.core.style.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return (window.getComputedStyle(elem)[dommy.utils.as_str(k)]);
}));

(dommy.core.style.cljs$lang$maxFixedArity = 2);

dommy.core.px = (function dommy$core$px(elem,k){

var pixels = dommy.core.style.cljs$core$IFn$_invoke$arity$2(elem,k);
if(cljs.core.seq(pixels)){
return parseInt(pixels);
} else {
return null;
}
});
/**
 * Does `elem` contain `c` in its class list
 */
dommy.core.has_class_QMARK_ = (function dommy$core$has_class_QMARK_(elem,c){
var c__$1 = dommy.utils.as_str(c);
var temp__5733__auto__ = elem.classList;
if(cljs.core.truth_(temp__5733__auto__)){
var class_list = temp__5733__auto__;
return class_list.contains(c__$1);
} else {
var temp__5735__auto__ = dommy.core.class$(elem);
if(cljs.core.truth_(temp__5735__auto__)){
var class_name = temp__5735__auto__;
var temp__5735__auto____$1 = dommy.utils.class_index(class_name,c__$1);
if(cljs.core.truth_(temp__5735__auto____$1)){
var i = temp__5735__auto____$1;
return (i >= (0));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Is `elem` hidden (as associated with hide!/show!/toggle!, using display: none)
 */
dommy.core.hidden_QMARK_ = (function dommy$core$hidden_QMARK_(elem){
return (dommy.core.style.cljs$core$IFn$_invoke$arity$2(elem,new cljs.core.Keyword(null,"display","display",242065432)) === "none");
});
/**
 * Returns a map of the bounding client rect of `elem`
 * as a map with [:top :left :right :bottom :width :height]
 */
dommy.core.bounding_client_rect = (function dommy$core$bounding_client_rect(elem){
var r = elem.getBoundingClientRect();
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"top","top",-1856271961),r.top,new cljs.core.Keyword(null,"bottom","bottom",-1550509018),r.bottom,new cljs.core.Keyword(null,"left","left",-399115937),r.left,new cljs.core.Keyword(null,"right","right",-452581833),r.right,new cljs.core.Keyword(null,"width","width",-384071477),r.width,new cljs.core.Keyword(null,"height","height",1025178622),r.height], null);
});
dommy.core.parent = (function dommy$core$parent(elem){
return elem.parentNode;
});
dommy.core.children = (function dommy$core$children(elem){
return elem.children;
});
/**
 * Lazy seq of the ancestors of `elem`
 */
dommy.core.ancestors = (function dommy$core$ancestors(elem){
return cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.iterate(dommy.core.parent,elem));
});
dommy.core.ancestor_nodes = dommy.core.ancestors;
/**
 * Returns a predicate on nodes that match `selector` at the
 * time of this `matches-pred` call (may return outdated results
 * if you fuck with the DOM)
 */
dommy.core.matches_pred = (function dommy$core$matches_pred(var_args){
var G__87079 = arguments.length;
switch (G__87079) {
case 2:
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2 = (function (base,selector){
var matches = dommy.utils.__GT_Array(base.querySelectorAll(dommy.core.selector(selector)));
return (function (elem){
return (matches.indexOf(elem) >= (0));
});
}));

(dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$1 = (function (selector){
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2(document,selector);
}));

(dommy.core.matches_pred.cljs$lang$maxFixedArity = 2);

/**
 * Closest ancestor of `elem` (up to `base`, if provided)
 * that matches `selector`
 */
dommy.core.closest = (function dommy$core$closest(var_args){
var G__87093 = arguments.length;
switch (G__87093) {
case 3:
return dommy.core.closest.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return dommy.core.closest.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.closest.cljs$core$IFn$_invoke$arity$3 = (function (base,elem,selector){
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2(base,selector),cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__87086_SHARP_){
return (!((p1__87086_SHARP_ === base)));
}),dommy.core.ancestors(elem))));
}));

(dommy.core.closest.cljs$core$IFn$_invoke$arity$2 = (function (elem,selector){
return dommy.core.closest.cljs$core$IFn$_invoke$arity$3(document.body,elem,selector);
}));

(dommy.core.closest.cljs$lang$maxFixedArity = 3);

/**
 * Is `descendant` a descendant of `ancestor`?
 * (http://goo.gl/T8pgCX)
 */
dommy.core.descendant_QMARK_ = (function dommy$core$descendant_QMARK_(descendant,ancestor){
if(cljs.core.truth_(ancestor.contains)){
return ancestor.contains(descendant);
} else {
if(cljs.core.truth_(ancestor.compareDocumentPosition)){
return ((ancestor.compareDocumentPosition(descendant) & (1 << (4))) != 0);
} else {
return null;
}
}
});
/**
 * Set the textContent of `elem` to `text`, fall back to innerText
 */
dommy.core.set_text_BANG_ = (function dommy$core$set_text_BANG_(elem,text){
if((!((void 0 === elem.textContent)))){
(elem.textContent = text);
} else {
(elem.innerText = text);
}

return elem;
});
/**
 * Set the innerHTML of `elem` to `html`
 */
dommy.core.set_html_BANG_ = (function dommy$core$set_html_BANG_(elem,html){
(elem.innerHTML = html);

return elem;
});
/**
 * Set the value of `elem` to `value`
 */
dommy.core.set_value_BANG_ = (function dommy$core$set_value_BANG_(elem,value){
(elem.value = value);

return elem;
});
/**
 * Set the css class of `elem` to `elem`
 */
dommy.core.set_class_BANG_ = (function dommy$core$set_class_BANG_(elem,c){
return (elem.className = c);
});
/**
 * Set the style of `elem` using key-value pairs:
 * 
 *    (set-style! elem :display "block" :color "red")
 */
dommy.core.set_style_BANG_ = (function dommy$core$set_style_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___87873 = arguments.length;
var i__4737__auto___87874 = (0);
while(true){
if((i__4737__auto___87874 < len__4736__auto___87873)){
args__4742__auto__.push((arguments[i__4737__auto___87874]));

var G__87875 = (i__4737__auto___87874 + (1));
i__4737__auto___87874 = G__87875;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,kvs){
if(cljs.core.even_QMARK_(cljs.core.count(kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var style = elem.style;
var seq__87104_87881 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__87105_87882 = null;
var count__87106_87883 = (0);
var i__87107_87884 = (0);
while(true){
if((i__87107_87884 < count__87106_87883)){
var vec__87116_87887 = chunk__87105_87882.cljs$core$IIndexed$_nth$arity$2(null,i__87107_87884);
var k_87888 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__87116_87887,(0),null);
var v_87889 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__87116_87887,(1),null);
style.setProperty(dommy.utils.as_str(k_87888),v_87889);


var G__87890 = seq__87104_87881;
var G__87891 = chunk__87105_87882;
var G__87892 = count__87106_87883;
var G__87893 = (i__87107_87884 + (1));
seq__87104_87881 = G__87890;
chunk__87105_87882 = G__87891;
count__87106_87883 = G__87892;
i__87107_87884 = G__87893;
continue;
} else {
var temp__5735__auto___87894 = cljs.core.seq(seq__87104_87881);
if(temp__5735__auto___87894){
var seq__87104_87895__$1 = temp__5735__auto___87894;
if(cljs.core.chunked_seq_QMARK_(seq__87104_87895__$1)){
var c__4556__auto___87896 = cljs.core.chunk_first(seq__87104_87895__$1);
var G__87897 = cljs.core.chunk_rest(seq__87104_87895__$1);
var G__87898 = c__4556__auto___87896;
var G__87899 = cljs.core.count(c__4556__auto___87896);
var G__87900 = (0);
seq__87104_87881 = G__87897;
chunk__87105_87882 = G__87898;
count__87106_87883 = G__87899;
i__87107_87884 = G__87900;
continue;
} else {
var vec__87119_87901 = cljs.core.first(seq__87104_87895__$1);
var k_87902 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__87119_87901,(0),null);
var v_87903 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__87119_87901,(1),null);
style.setProperty(dommy.utils.as_str(k_87902),v_87903);


var G__87905 = cljs.core.next(seq__87104_87895__$1);
var G__87906 = null;
var G__87907 = (0);
var G__87908 = (0);
seq__87104_87881 = G__87905;
chunk__87105_87882 = G__87906;
count__87106_87883 = G__87907;
i__87107_87884 = G__87908;
continue;
}
} else {
}
}
break;
}

return elem;
}));

(dommy.core.set_style_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(dommy.core.set_style_BANG_.cljs$lang$applyTo = (function (seq87102){
var G__87103 = cljs.core.first(seq87102);
var seq87102__$1 = cljs.core.next(seq87102);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__87103,seq87102__$1);
}));

/**
 * Remove the style of `elem` using keywords:
 *   
 *    (remove-style! elem :display :color)
 */
dommy.core.remove_style_BANG_ = (function dommy$core$remove_style_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___87909 = arguments.length;
var i__4737__auto___87910 = (0);
while(true){
if((i__4737__auto___87910 < len__4736__auto___87909)){
args__4742__auto__.push((arguments[i__4737__auto___87910]));

var G__87911 = (i__4737__auto___87910 + (1));
i__4737__auto___87910 = G__87911;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,keywords){
var style = elem.style;
var seq__87125_87912 = cljs.core.seq(keywords);
var chunk__87126_87913 = null;
var count__87127_87914 = (0);
var i__87128_87915 = (0);
while(true){
if((i__87128_87915 < count__87127_87914)){
var kw_87920 = chunk__87126_87913.cljs$core$IIndexed$_nth$arity$2(null,i__87128_87915);
style.removeProperty(dommy.utils.as_str(kw_87920));


var G__87922 = seq__87125_87912;
var G__87923 = chunk__87126_87913;
var G__87924 = count__87127_87914;
var G__87925 = (i__87128_87915 + (1));
seq__87125_87912 = G__87922;
chunk__87126_87913 = G__87923;
count__87127_87914 = G__87924;
i__87128_87915 = G__87925;
continue;
} else {
var temp__5735__auto___87926 = cljs.core.seq(seq__87125_87912);
if(temp__5735__auto___87926){
var seq__87125_87928__$1 = temp__5735__auto___87926;
if(cljs.core.chunked_seq_QMARK_(seq__87125_87928__$1)){
var c__4556__auto___87929 = cljs.core.chunk_first(seq__87125_87928__$1);
var G__87930 = cljs.core.chunk_rest(seq__87125_87928__$1);
var G__87931 = c__4556__auto___87929;
var G__87932 = cljs.core.count(c__4556__auto___87929);
var G__87933 = (0);
seq__87125_87912 = G__87930;
chunk__87126_87913 = G__87931;
count__87127_87914 = G__87932;
i__87128_87915 = G__87933;
continue;
} else {
var kw_87934 = cljs.core.first(seq__87125_87928__$1);
style.removeProperty(dommy.utils.as_str(kw_87934));


var G__87935 = cljs.core.next(seq__87125_87928__$1);
var G__87936 = null;
var G__87937 = (0);
var G__87938 = (0);
seq__87125_87912 = G__87935;
chunk__87126_87913 = G__87936;
count__87127_87914 = G__87937;
i__87128_87915 = G__87938;
continue;
}
} else {
}
}
break;
}

return elem;
}));

(dommy.core.remove_style_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(dommy.core.remove_style_BANG_.cljs$lang$applyTo = (function (seq87122){
var G__87123 = cljs.core.first(seq87122);
var seq87122__$1 = cljs.core.next(seq87122);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__87123,seq87122__$1);
}));

dommy.core.set_px_BANG_ = (function dommy$core$set_px_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___87941 = arguments.length;
var i__4737__auto___87942 = (0);
while(true){
if((i__4737__auto___87942 < len__4736__auto___87941)){
args__4742__auto__.push((arguments[i__4737__auto___87942]));

var G__87943 = (i__4737__auto___87942 + (1));
i__4737__auto___87942 = G__87943;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,kvs){

if(cljs.core.even_QMARK_(cljs.core.count(kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var seq__87137_87944 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__87138_87945 = null;
var count__87139_87946 = (0);
var i__87140_87947 = (0);
while(true){
if((i__87140_87947 < count__87139_87946)){
var vec__87150_87948 = chunk__87138_87945.cljs$core$IIndexed$_nth$arity$2(null,i__87140_87947);
var k_87949 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__87150_87948,(0),null);
var v_87950 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__87150_87948,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_87949,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_87950),"px"].join('')], 0));


var G__87952 = seq__87137_87944;
var G__87953 = chunk__87138_87945;
var G__87954 = count__87139_87946;
var G__87955 = (i__87140_87947 + (1));
seq__87137_87944 = G__87952;
chunk__87138_87945 = G__87953;
count__87139_87946 = G__87954;
i__87140_87947 = G__87955;
continue;
} else {
var temp__5735__auto___87956 = cljs.core.seq(seq__87137_87944);
if(temp__5735__auto___87956){
var seq__87137_87957__$1 = temp__5735__auto___87956;
if(cljs.core.chunked_seq_QMARK_(seq__87137_87957__$1)){
var c__4556__auto___87958 = cljs.core.chunk_first(seq__87137_87957__$1);
var G__87959 = cljs.core.chunk_rest(seq__87137_87957__$1);
var G__87960 = c__4556__auto___87958;
var G__87961 = cljs.core.count(c__4556__auto___87958);
var G__87962 = (0);
seq__87137_87944 = G__87959;
chunk__87138_87945 = G__87960;
count__87139_87946 = G__87961;
i__87140_87947 = G__87962;
continue;
} else {
var vec__87153_87963 = cljs.core.first(seq__87137_87957__$1);
var k_87964 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__87153_87963,(0),null);
var v_87965 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__87153_87963,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_87964,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_87965),"px"].join('')], 0));


var G__87967 = cljs.core.next(seq__87137_87957__$1);
var G__87968 = null;
var G__87969 = (0);
var G__87970 = (0);
seq__87137_87944 = G__87967;
chunk__87138_87945 = G__87968;
count__87139_87946 = G__87969;
i__87140_87947 = G__87970;
continue;
}
} else {
}
}
break;
}

return elem;
}));

(dommy.core.set_px_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(dommy.core.set_px_BANG_.cljs$lang$applyTo = (function (seq87133){
var G__87134 = cljs.core.first(seq87133);
var seq87133__$1 = cljs.core.next(seq87133);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__87134,seq87133__$1);
}));

/**
 * Sets dom attributes on and returns `elem`.
 * Attributes without values will be set to their name:
 * 
 *     (set-attr! elem :disabled)
 * 
 * With values, the function takes variadic kv pairs:
 * 
 *     (set-attr! elem :id "some-id"
 *                     :name "some-name")
 */
dommy.core.set_attr_BANG_ = (function dommy$core$set_attr_BANG_(var_args){
var G__87163 = arguments.length;
switch (G__87163) {
case 2:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___87973 = arguments.length;
var i__4737__auto___87974 = (0);
while(true){
if((i__4737__auto___87974 < len__4736__auto___87973)){
args_arr__4757__auto__.push((arguments[i__4737__auto___87974]));

var G__87978 = (i__4737__auto___87974 + (1));
i__4737__auto___87974 = G__87978;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((3)),(0),null));
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4758__auto__);

}
});

(dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k,dommy.utils.as_str(k));
}));

(dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,k,v){
var k__$1 = dommy.utils.as_str(k);
if(cljs.core.truth_(v)){
if(cljs.core.fn_QMARK_(v)){
var G__87164 = elem;
(G__87164[k__$1] = v);

return G__87164;
} else {
var G__87165 = elem;
G__87165.setAttribute(k__$1,v);

return G__87165;
}
} else {
return null;
}
}));

(dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,v,kvs){
if(cljs.core.even_QMARK_(cljs.core.count(kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var seq__87167_87981 = cljs.core.seq(cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs)));
var chunk__87168_87982 = null;
var count__87169_87983 = (0);
var i__87170_87984 = (0);
while(true){
if((i__87170_87984 < count__87169_87983)){
var vec__87180_87986 = chunk__87168_87982.cljs$core$IIndexed$_nth$arity$2(null,i__87170_87984);
var k_87987__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__87180_87986,(0),null);
var v_87988__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__87180_87986,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_87987__$1,v_87988__$1);


var G__87992 = seq__87167_87981;
var G__87993 = chunk__87168_87982;
var G__87995 = count__87169_87983;
var G__87996 = (i__87170_87984 + (1));
seq__87167_87981 = G__87992;
chunk__87168_87982 = G__87993;
count__87169_87983 = G__87995;
i__87170_87984 = G__87996;
continue;
} else {
var temp__5735__auto___87999 = cljs.core.seq(seq__87167_87981);
if(temp__5735__auto___87999){
var seq__87167_88000__$1 = temp__5735__auto___87999;
if(cljs.core.chunked_seq_QMARK_(seq__87167_88000__$1)){
var c__4556__auto___88002 = cljs.core.chunk_first(seq__87167_88000__$1);
var G__88003 = cljs.core.chunk_rest(seq__87167_88000__$1);
var G__88004 = c__4556__auto___88002;
var G__88005 = cljs.core.count(c__4556__auto___88002);
var G__88006 = (0);
seq__87167_87981 = G__88003;
chunk__87168_87982 = G__88004;
count__87169_87983 = G__88005;
i__87170_87984 = G__88006;
continue;
} else {
var vec__87184_88008 = cljs.core.first(seq__87167_88000__$1);
var k_88009__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__87184_88008,(0),null);
var v_88010__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__87184_88008,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_88009__$1,v_88010__$1);


var G__88011 = cljs.core.next(seq__87167_88000__$1);
var G__88012 = null;
var G__88013 = (0);
var G__88014 = (0);
seq__87167_87981 = G__88011;
chunk__87168_87982 = G__88012;
count__87169_87983 = G__88013;
i__87170_87984 = G__88014;
continue;
}
} else {
}
}
break;
}

return elem;
}));

/** @this {Function} */
(dommy.core.set_attr_BANG_.cljs$lang$applyTo = (function (seq87159){
var G__87160 = cljs.core.first(seq87159);
var seq87159__$1 = cljs.core.next(seq87159);
var G__87161 = cljs.core.first(seq87159__$1);
var seq87159__$2 = cljs.core.next(seq87159__$1);
var G__87162 = cljs.core.first(seq87159__$2);
var seq87159__$3 = cljs.core.next(seq87159__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__87160,G__87161,G__87162,seq87159__$3);
}));

(dommy.core.set_attr_BANG_.cljs$lang$maxFixedArity = (3));

/**
 * Removes dom attributes on and returns `elem`.
 * `class` and `classes` are special cases which clear
 * out the class name on removal.
 */
dommy.core.remove_attr_BANG_ = (function dommy$core$remove_attr_BANG_(var_args){
var G__87192 = arguments.length;
switch (G__87192) {
case 2:
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___88017 = arguments.length;
var i__4737__auto___88018 = (0);
while(true){
if((i__4737__auto___88018 < len__4736__auto___88017)){
args_arr__4757__auto__.push((arguments[i__4737__auto___88018]));

var G__88019 = (i__4737__auto___88018 + (1));
i__4737__auto___88018 = G__88019;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((2)),(0),null));
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4758__auto__);

}
});

(dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
var k_88020__$1 = dommy.utils.as_str(k);
if(cljs.core.truth_((function (){var fexpr__87195 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["class",null,"classes",null], null), null);
return (fexpr__87195.cljs$core$IFn$_invoke$arity$1 ? fexpr__87195.cljs$core$IFn$_invoke$arity$1(k_88020__$1) : fexpr__87195.call(null,k_88020__$1));
})())){
dommy.core.set_class_BANG_(elem,"");
} else {
elem.removeAttribute(k_88020__$1);
}

return elem;
}));

(dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,ks){
var seq__87196_88029 = cljs.core.seq(cljs.core.cons(k,ks));
var chunk__87197_88030 = null;
var count__87198_88031 = (0);
var i__87199_88032 = (0);
while(true){
if((i__87199_88032 < count__87198_88031)){
var k_88034__$1 = chunk__87197_88030.cljs$core$IIndexed$_nth$arity$2(null,i__87199_88032);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_88034__$1);


var G__88035 = seq__87196_88029;
var G__88036 = chunk__87197_88030;
var G__88037 = count__87198_88031;
var G__88038 = (i__87199_88032 + (1));
seq__87196_88029 = G__88035;
chunk__87197_88030 = G__88036;
count__87198_88031 = G__88037;
i__87199_88032 = G__88038;
continue;
} else {
var temp__5735__auto___88039 = cljs.core.seq(seq__87196_88029);
if(temp__5735__auto___88039){
var seq__87196_88040__$1 = temp__5735__auto___88039;
if(cljs.core.chunked_seq_QMARK_(seq__87196_88040__$1)){
var c__4556__auto___88041 = cljs.core.chunk_first(seq__87196_88040__$1);
var G__88042 = cljs.core.chunk_rest(seq__87196_88040__$1);
var G__88043 = c__4556__auto___88041;
var G__88044 = cljs.core.count(c__4556__auto___88041);
var G__88045 = (0);
seq__87196_88029 = G__88042;
chunk__87197_88030 = G__88043;
count__87198_88031 = G__88044;
i__87199_88032 = G__88045;
continue;
} else {
var k_88046__$1 = cljs.core.first(seq__87196_88040__$1);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_88046__$1);


var G__88047 = cljs.core.next(seq__87196_88040__$1);
var G__88048 = null;
var G__88049 = (0);
var G__88050 = (0);
seq__87196_88029 = G__88047;
chunk__87197_88030 = G__88048;
count__87198_88031 = G__88049;
i__87199_88032 = G__88050;
continue;
}
} else {
}
}
break;
}

return elem;
}));

/** @this {Function} */
(dommy.core.remove_attr_BANG_.cljs$lang$applyTo = (function (seq87189){
var G__87190 = cljs.core.first(seq87189);
var seq87189__$1 = cljs.core.next(seq87189);
var G__87191 = cljs.core.first(seq87189__$1);
var seq87189__$2 = cljs.core.next(seq87189__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__87190,G__87191,seq87189__$2);
}));

(dommy.core.remove_attr_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Toggles a dom attribute `k` on `elem`, optionally specifying
 * the boolean value with `add?`
 */
dommy.core.toggle_attr_BANG_ = (function dommy$core$toggle_attr_BANG_(var_args){
var G__87215 = arguments.length;
switch (G__87215) {
case 2:
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k,cljs.core.boolean$(dommy.core.attr(elem,k)));
}));

(dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,k,add_QMARK_){
if(add_QMARK_){
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k);
} else {
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k);
}
}));

(dommy.core.toggle_attr_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Add `classes` to `elem`, trying to use Element::classList, and
 * falling back to fast string parsing/manipulation
 */
dommy.core.add_class_BANG_ = (function dommy$core$add_class_BANG_(var_args){
var G__87227 = arguments.length;
switch (G__87227) {
case 2:
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___88055 = arguments.length;
var i__4737__auto___88057 = (0);
while(true){
if((i__4737__auto___88057 < len__4736__auto___88055)){
args_arr__4757__auto__.push((arguments[i__4737__auto___88057]));

var G__88058 = (i__4737__auto___88057 + (1));
i__4737__auto___88057 = G__88058;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((2)),(0),null));
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4758__auto__);

}
});

(dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,classes){
var classes__$1 = clojure.string.trim(dommy.utils.as_str(classes)).split(/\s+/);
if(cljs.core.seq(classes__$1)){
var temp__5733__auto___88059 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___88059)){
var class_list_88060 = temp__5733__auto___88059;
var seq__87232_88061 = cljs.core.seq(classes__$1);
var chunk__87233_88062 = null;
var count__87234_88063 = (0);
var i__87235_88064 = (0);
while(true){
if((i__87235_88064 < count__87234_88063)){
var c_88065 = chunk__87233_88062.cljs$core$IIndexed$_nth$arity$2(null,i__87235_88064);
class_list_88060.add(c_88065);


var G__88066 = seq__87232_88061;
var G__88067 = chunk__87233_88062;
var G__88068 = count__87234_88063;
var G__88069 = (i__87235_88064 + (1));
seq__87232_88061 = G__88066;
chunk__87233_88062 = G__88067;
count__87234_88063 = G__88068;
i__87235_88064 = G__88069;
continue;
} else {
var temp__5735__auto___88070 = cljs.core.seq(seq__87232_88061);
if(temp__5735__auto___88070){
var seq__87232_88072__$1 = temp__5735__auto___88070;
if(cljs.core.chunked_seq_QMARK_(seq__87232_88072__$1)){
var c__4556__auto___88073 = cljs.core.chunk_first(seq__87232_88072__$1);
var G__88074 = cljs.core.chunk_rest(seq__87232_88072__$1);
var G__88075 = c__4556__auto___88073;
var G__88076 = cljs.core.count(c__4556__auto___88073);
var G__88077 = (0);
seq__87232_88061 = G__88074;
chunk__87233_88062 = G__88075;
count__87234_88063 = G__88076;
i__87235_88064 = G__88077;
continue;
} else {
var c_88079 = cljs.core.first(seq__87232_88072__$1);
class_list_88060.add(c_88079);


var G__88080 = cljs.core.next(seq__87232_88072__$1);
var G__88081 = null;
var G__88082 = (0);
var G__88083 = (0);
seq__87232_88061 = G__88080;
chunk__87233_88062 = G__88081;
count__87234_88063 = G__88082;
i__87235_88064 = G__88083;
continue;
}
} else {
}
}
break;
}
} else {
var seq__87241_88084 = cljs.core.seq(classes__$1);
var chunk__87242_88085 = null;
var count__87243_88086 = (0);
var i__87244_88087 = (0);
while(true){
if((i__87244_88087 < count__87243_88086)){
var c_88088 = chunk__87242_88085.cljs$core$IIndexed$_nth$arity$2(null,i__87244_88087);
var class_name_88089 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_88089,c_88088))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_88089 === ""))?c_88088:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_88089)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_88088)].join('')));
}


var G__88090 = seq__87241_88084;
var G__88091 = chunk__87242_88085;
var G__88092 = count__87243_88086;
var G__88093 = (i__87244_88087 + (1));
seq__87241_88084 = G__88090;
chunk__87242_88085 = G__88091;
count__87243_88086 = G__88092;
i__87244_88087 = G__88093;
continue;
} else {
var temp__5735__auto___88094 = cljs.core.seq(seq__87241_88084);
if(temp__5735__auto___88094){
var seq__87241_88095__$1 = temp__5735__auto___88094;
if(cljs.core.chunked_seq_QMARK_(seq__87241_88095__$1)){
var c__4556__auto___88096 = cljs.core.chunk_first(seq__87241_88095__$1);
var G__88097 = cljs.core.chunk_rest(seq__87241_88095__$1);
var G__88098 = c__4556__auto___88096;
var G__88099 = cljs.core.count(c__4556__auto___88096);
var G__88100 = (0);
seq__87241_88084 = G__88097;
chunk__87242_88085 = G__88098;
count__87243_88086 = G__88099;
i__87244_88087 = G__88100;
continue;
} else {
var c_88105 = cljs.core.first(seq__87241_88095__$1);
var class_name_88106 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_88106,c_88105))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_88106 === ""))?c_88105:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_88106)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_88105)].join('')));
}


var G__88108 = cljs.core.next(seq__87241_88095__$1);
var G__88109 = null;
var G__88110 = (0);
var G__88111 = (0);
seq__87241_88084 = G__88108;
chunk__87242_88085 = G__88109;
count__87243_88086 = G__88110;
i__87244_88087 = G__88111;
continue;
}
} else {
}
}
break;
}
}
} else {
}

return elem;
}));

(dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,classes,more_classes){
var seq__87268_88113 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(more_classes,classes));
var chunk__87269_88114 = null;
var count__87270_88115 = (0);
var i__87271_88116 = (0);
while(true){
if((i__87271_88116 < count__87270_88115)){
var c_88117 = chunk__87269_88114.cljs$core$IIndexed$_nth$arity$2(null,i__87271_88116);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_88117);


var G__88118 = seq__87268_88113;
var G__88119 = chunk__87269_88114;
var G__88120 = count__87270_88115;
var G__88121 = (i__87271_88116 + (1));
seq__87268_88113 = G__88118;
chunk__87269_88114 = G__88119;
count__87270_88115 = G__88120;
i__87271_88116 = G__88121;
continue;
} else {
var temp__5735__auto___88122 = cljs.core.seq(seq__87268_88113);
if(temp__5735__auto___88122){
var seq__87268_88123__$1 = temp__5735__auto___88122;
if(cljs.core.chunked_seq_QMARK_(seq__87268_88123__$1)){
var c__4556__auto___88125 = cljs.core.chunk_first(seq__87268_88123__$1);
var G__88126 = cljs.core.chunk_rest(seq__87268_88123__$1);
var G__88127 = c__4556__auto___88125;
var G__88128 = cljs.core.count(c__4556__auto___88125);
var G__88129 = (0);
seq__87268_88113 = G__88126;
chunk__87269_88114 = G__88127;
count__87270_88115 = G__88128;
i__87271_88116 = G__88129;
continue;
} else {
var c_88133 = cljs.core.first(seq__87268_88123__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_88133);


var G__88134 = cljs.core.next(seq__87268_88123__$1);
var G__88135 = null;
var G__88136 = (0);
var G__88137 = (0);
seq__87268_88113 = G__88134;
chunk__87269_88114 = G__88135;
count__87270_88115 = G__88136;
i__87271_88116 = G__88137;
continue;
}
} else {
}
}
break;
}

return elem;
}));

/** @this {Function} */
(dommy.core.add_class_BANG_.cljs$lang$applyTo = (function (seq87223){
var G__87224 = cljs.core.first(seq87223);
var seq87223__$1 = cljs.core.next(seq87223);
var G__87225 = cljs.core.first(seq87223__$1);
var seq87223__$2 = cljs.core.next(seq87223__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__87224,G__87225,seq87223__$2);
}));

(dommy.core.add_class_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Remove `c` from `elem` class list
 */
dommy.core.remove_class_BANG_ = (function dommy$core$remove_class_BANG_(var_args){
var G__87293 = arguments.length;
switch (G__87293) {
case 2:
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___88140 = arguments.length;
var i__4737__auto___88141 = (0);
while(true){
if((i__4737__auto___88141 < len__4736__auto___88140)){
args_arr__4757__auto__.push((arguments[i__4737__auto___88141]));

var G__88142 = (i__4737__auto___88141 + (1));
i__4737__auto___88141 = G__88142;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((2)),(0),null));
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4758__auto__);

}
});

(dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,c){
var c__$1 = dommy.utils.as_str(c);
var temp__5733__auto___88146 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___88146)){
var class_list_88147 = temp__5733__auto___88146;
class_list_88147.remove(c__$1);
} else {
var class_name_88148 = dommy.core.class$(elem);
var new_class_name_88149 = dommy.utils.remove_class_str(class_name_88148,c__$1);
if((class_name_88148 === new_class_name_88149)){
} else {
dommy.core.set_class_BANG_(elem,new_class_name_88149);
}
}

return elem;
}));

(dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,class$,classes){
var seq__87299 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(classes,class$));
var chunk__87300 = null;
var count__87301 = (0);
var i__87302 = (0);
while(true){
if((i__87302 < count__87301)){
var c = chunk__87300.cljs$core$IIndexed$_nth$arity$2(null,i__87302);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);


var G__88151 = seq__87299;
var G__88152 = chunk__87300;
var G__88153 = count__87301;
var G__88154 = (i__87302 + (1));
seq__87299 = G__88151;
chunk__87300 = G__88152;
count__87301 = G__88153;
i__87302 = G__88154;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__87299);
if(temp__5735__auto__){
var seq__87299__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__87299__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__87299__$1);
var G__88157 = cljs.core.chunk_rest(seq__87299__$1);
var G__88158 = c__4556__auto__;
var G__88159 = cljs.core.count(c__4556__auto__);
var G__88160 = (0);
seq__87299 = G__88157;
chunk__87300 = G__88158;
count__87301 = G__88159;
i__87302 = G__88160;
continue;
} else {
var c = cljs.core.first(seq__87299__$1);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);


var G__88162 = cljs.core.next(seq__87299__$1);
var G__88164 = null;
var G__88165 = (0);
var G__88166 = (0);
seq__87299 = G__88162;
chunk__87300 = G__88164;
count__87301 = G__88165;
i__87302 = G__88166;
continue;
}
} else {
return null;
}
}
break;
}
}));

/** @this {Function} */
(dommy.core.remove_class_BANG_.cljs$lang$applyTo = (function (seq87290){
var G__87291 = cljs.core.first(seq87290);
var seq87290__$1 = cljs.core.next(seq87290);
var G__87292 = cljs.core.first(seq87290__$1);
var seq87290__$2 = cljs.core.next(seq87290__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__87291,G__87292,seq87290__$2);
}));

(dommy.core.remove_class_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * (toggle-class! elem class) will add-class! if elem does not have class
 * and remove-class! otherwise.
 * (toggle-class! elem class add?) will add-class! if add? is truthy,
 * otherwise it will remove-class!
 */
dommy.core.toggle_class_BANG_ = (function dommy$core$toggle_class_BANG_(var_args){
var G__87311 = arguments.length;
switch (G__87311) {
case 2:
return dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,c){
var c__$1 = dommy.utils.as_str(c);
var temp__5733__auto___88170 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___88170)){
var class_list_88171 = temp__5733__auto___88170;
class_list_88171.toggle(c__$1);
} else {
dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3(elem,c__$1,(!(dommy.core.has_class_QMARK_(elem,c__$1))));
}

return elem;
}));

(dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,class$,add_QMARK_){
if(add_QMARK_){
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,class$);
} else {
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,class$);
}

return elem;
}));

(dommy.core.toggle_class_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Display or hide the given `elem` (using display: none).
 * Takes an optional boolean `show?`
 */
dommy.core.toggle_BANG_ = (function dommy$core$toggle_BANG_(var_args){
var G__87318 = arguments.length;
switch (G__87318) {
case 2:
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,show_QMARK_){
return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"display","display",242065432),((show_QMARK_)?"":"none")], 0));
}));

(dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (elem){
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2(elem,dommy.core.hidden_QMARK_(elem));
}));

(dommy.core.toggle_BANG_.cljs$lang$maxFixedArity = 2);

dommy.core.hide_BANG_ = (function dommy$core$hide_BANG_(elem){
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2(elem,false);
});
dommy.core.show_BANG_ = (function dommy$core$show_BANG_(elem){
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2(elem,true);
});
dommy.core.scroll_into_view = (function dommy$core$scroll_into_view(elem,align_with_top_QMARK_){
var top = new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(dommy.core.bounding_client_rect(elem));
if((window.innerHeight < (top + elem.offsetHeight))){
return elem.scrollIntoView(align_with_top_QMARK_);
} else {
return null;
}
});
dommy.core.create_element = (function dommy$core$create_element(var_args){
var G__87337 = arguments.length;
switch (G__87337) {
case 1:
return dommy.core.create_element.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.create_element.cljs$core$IFn$_invoke$arity$1 = (function (tag){
return document.createElement(dommy.utils.as_str(tag));
}));

(dommy.core.create_element.cljs$core$IFn$_invoke$arity$2 = (function (tag_ns,tag){
return document.createElementNS(dommy.utils.as_str(tag_ns),dommy.utils.as_str(tag));
}));

(dommy.core.create_element.cljs$lang$maxFixedArity = 2);

dommy.core.create_text_node = (function dommy$core$create_text_node(text){
return document.createTextNode(text);
});
/**
 * Clears all children from `elem`
 */
dommy.core.clear_BANG_ = (function dommy$core$clear_BANG_(elem){
return dommy.core.set_html_BANG_(elem,"");
});
/**
 * Append `child` to `parent`
 */
dommy.core.append_BANG_ = (function dommy$core$append_BANG_(var_args){
var G__87348 = arguments.length;
switch (G__87348) {
case 2:
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___88187 = arguments.length;
var i__4737__auto___88188 = (0);
while(true){
if((i__4737__auto___88188 < len__4736__auto___88187)){
args_arr__4757__auto__.push((arguments[i__4737__auto___88188]));

var G__88189 = (i__4737__auto___88188 + (1));
i__4737__auto___88188 = G__88189;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((2)),(0),null));
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4758__auto__);

}
});

(dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
var G__87351 = parent;
G__87351.appendChild(child);

return G__87351;
}));

(dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__87352_88190 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__87353_88191 = null;
var count__87354_88192 = (0);
var i__87355_88193 = (0);
while(true){
if((i__87355_88193 < count__87354_88192)){
var c_88194 = chunk__87353_88191.cljs$core$IIndexed$_nth$arity$2(null,i__87355_88193);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_88194);


var G__88195 = seq__87352_88190;
var G__88196 = chunk__87353_88191;
var G__88197 = count__87354_88192;
var G__88198 = (i__87355_88193 + (1));
seq__87352_88190 = G__88195;
chunk__87353_88191 = G__88196;
count__87354_88192 = G__88197;
i__87355_88193 = G__88198;
continue;
} else {
var temp__5735__auto___88199 = cljs.core.seq(seq__87352_88190);
if(temp__5735__auto___88199){
var seq__87352_88200__$1 = temp__5735__auto___88199;
if(cljs.core.chunked_seq_QMARK_(seq__87352_88200__$1)){
var c__4556__auto___88201 = cljs.core.chunk_first(seq__87352_88200__$1);
var G__88202 = cljs.core.chunk_rest(seq__87352_88200__$1);
var G__88203 = c__4556__auto___88201;
var G__88204 = cljs.core.count(c__4556__auto___88201);
var G__88205 = (0);
seq__87352_88190 = G__88202;
chunk__87353_88191 = G__88203;
count__87354_88192 = G__88204;
i__87355_88193 = G__88205;
continue;
} else {
var c_88206 = cljs.core.first(seq__87352_88200__$1);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_88206);


var G__88208 = cljs.core.next(seq__87352_88200__$1);
var G__88209 = null;
var G__88210 = (0);
var G__88211 = (0);
seq__87352_88190 = G__88208;
chunk__87353_88191 = G__88209;
count__87354_88192 = G__88210;
i__87355_88193 = G__88211;
continue;
}
} else {
}
}
break;
}

return parent;
}));

/** @this {Function} */
(dommy.core.append_BANG_.cljs$lang$applyTo = (function (seq87345){
var G__87346 = cljs.core.first(seq87345);
var seq87345__$1 = cljs.core.next(seq87345);
var G__87347 = cljs.core.first(seq87345__$1);
var seq87345__$2 = cljs.core.next(seq87345__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__87346,G__87347,seq87345__$2);
}));

(dommy.core.append_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Prepend `child` to `parent`
 */
dommy.core.prepend_BANG_ = (function dommy$core$prepend_BANG_(var_args){
var G__87366 = arguments.length;
switch (G__87366) {
case 2:
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___88216 = arguments.length;
var i__4737__auto___88217 = (0);
while(true){
if((i__4737__auto___88217 < len__4736__auto___88216)){
args_arr__4757__auto__.push((arguments[i__4737__auto___88217]));

var G__88218 = (i__4737__auto___88217 + (1));
i__4737__auto___88217 = G__88218;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((2)),(0),null));
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4758__auto__);

}
});

(dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
var G__87367 = parent;
G__87367.insertBefore(child,parent.firstChild);

return G__87367;
}));

(dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__87368_88221 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__87369_88222 = null;
var count__87370_88223 = (0);
var i__87371_88224 = (0);
while(true){
if((i__87371_88224 < count__87370_88223)){
var c_88225 = chunk__87369_88222.cljs$core$IIndexed$_nth$arity$2(null,i__87371_88224);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_88225);


var G__88226 = seq__87368_88221;
var G__88227 = chunk__87369_88222;
var G__88228 = count__87370_88223;
var G__88229 = (i__87371_88224 + (1));
seq__87368_88221 = G__88226;
chunk__87369_88222 = G__88227;
count__87370_88223 = G__88228;
i__87371_88224 = G__88229;
continue;
} else {
var temp__5735__auto___88231 = cljs.core.seq(seq__87368_88221);
if(temp__5735__auto___88231){
var seq__87368_88232__$1 = temp__5735__auto___88231;
if(cljs.core.chunked_seq_QMARK_(seq__87368_88232__$1)){
var c__4556__auto___88233 = cljs.core.chunk_first(seq__87368_88232__$1);
var G__88234 = cljs.core.chunk_rest(seq__87368_88232__$1);
var G__88235 = c__4556__auto___88233;
var G__88236 = cljs.core.count(c__4556__auto___88233);
var G__88237 = (0);
seq__87368_88221 = G__88234;
chunk__87369_88222 = G__88235;
count__87370_88223 = G__88236;
i__87371_88224 = G__88237;
continue;
} else {
var c_88238 = cljs.core.first(seq__87368_88232__$1);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_88238);


var G__88239 = cljs.core.next(seq__87368_88232__$1);
var G__88240 = null;
var G__88241 = (0);
var G__88242 = (0);
seq__87368_88221 = G__88239;
chunk__87369_88222 = G__88240;
count__87370_88223 = G__88241;
i__87371_88224 = G__88242;
continue;
}
} else {
}
}
break;
}

return parent;
}));

/** @this {Function} */
(dommy.core.prepend_BANG_.cljs$lang$applyTo = (function (seq87363){
var G__87364 = cljs.core.first(seq87363);
var seq87363__$1 = cljs.core.next(seq87363);
var G__87365 = cljs.core.first(seq87363__$1);
var seq87363__$2 = cljs.core.next(seq87363__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__87364,G__87365,seq87363__$2);
}));

(dommy.core.prepend_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Insert `elem` before `other`, `other` must have a parent
 */
dommy.core.insert_before_BANG_ = (function dommy$core$insert_before_BANG_(elem,other){
var p = dommy.core.parent(other);
if(cljs.core.truth_(p)){
} else {
throw (new Error(["Assert failed: ","Target element must have a parent","\n","p"].join('')));
}

p.insertBefore(elem,other);

return elem;
});
/**
 * Insert `elem` after `other`, `other` must have a parent
 */
dommy.core.insert_after_BANG_ = (function dommy$core$insert_after_BANG_(elem,other){
var temp__5733__auto___88247 = other.nextSibling;
if(cljs.core.truth_(temp__5733__auto___88247)){
var next_88248 = temp__5733__auto___88247;
dommy.core.insert_before_BANG_(elem,next_88248);
} else {
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(dommy.core.parent(other),elem);
}

return elem;
});
/**
 * Replace `elem` with `new`, return `new`
 */
dommy.core.replace_BANG_ = (function dommy$core$replace_BANG_(elem,new$){
var p = dommy.core.parent(elem);
if(cljs.core.truth_(p)){
} else {
throw (new Error(["Assert failed: ","Target element must have a parent","\n","p"].join('')));
}

p.replaceChild(new$,elem);

return new$;
});
/**
 * Replace children of `elem` with `child`
 */
dommy.core.replace_contents_BANG_ = (function dommy$core$replace_contents_BANG_(p,child){
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(dommy.core.clear_BANG_(p),child);
});
/**
 * Remove `elem` from `parent`, return `parent`
 */
dommy.core.remove_BANG_ = (function dommy$core$remove_BANG_(var_args){
var G__87387 = arguments.length;
switch (G__87387) {
case 1:
return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (elem){
var p = dommy.core.parent(elem);
if(cljs.core.truth_(p)){
} else {
throw (new Error(["Assert failed: ","Target element must have a parent","\n","p"].join('')));
}

return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$2(p,elem);
}));

(dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (p,elem){
var G__87395 = p;
G__87395.removeChild(elem);

return G__87395;
}));

(dommy.core.remove_BANG_.cljs$lang$maxFixedArity = 2);

dommy.core.special_listener_makers = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__87399){
var vec__87401 = p__87399;
var special_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__87401,(0),null);
var real_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__87401,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,cljs.core.PersistentArrayMap.createAsIfByAssoc([real_mouse_event,(function (f){
return (function (event){
var related_target = event.relatedTarget;
var listener_target = (function (){var or__4126__auto__ = event.selectedTarget;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return event.currentTarget;
}
})();
if(cljs.core.truth_((function (){var and__4115__auto__ = related_target;
if(cljs.core.truth_(and__4115__auto__)){
return dommy.core.descendant_QMARK_(related_target,listener_target);
} else {
return and__4115__auto__;
}
})())){
return null;
} else {
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(event) : f.call(null,event));
}
});
})])], null);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mouseenter","mouseenter",-1792413560),new cljs.core.Keyword(null,"mouseover","mouseover",-484272303),new cljs.core.Keyword(null,"mouseleave","mouseleave",531566580),new cljs.core.Keyword(null,"mouseout","mouseout",2049446890)], null)));
/**
 * fires f if event.target is found with `selector`
 */
dommy.core.live_listener = (function dommy$core$live_listener(elem,selector,f){
return (function (event){
var selected_target = dommy.core.closest.cljs$core$IFn$_invoke$arity$3(elem,event.target,selector);
if(cljs.core.truth_((function (){var and__4115__auto__ = selected_target;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(dommy.core.attr(selected_target,new cljs.core.Keyword(null,"disabled","disabled",-1529784218)));
} else {
return and__4115__auto__;
}
})())){
(event.selectedTarget = selected_target);

return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(event) : f.call(null,event));
} else {
return null;
}
});
});
/**
 * Returns a nested map of event listeners on `elem`
 */
dommy.core.event_listeners = (function dommy$core$event_listeners(elem){
var or__4126__auto__ = elem.dommyEventListeners;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
dommy.core.update_event_listeners_BANG_ = (function dommy$core$update_event_listeners_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___88261 = arguments.length;
var i__4737__auto___88262 = (0);
while(true){
if((i__4737__auto___88262 < len__4736__auto___88261)){
args__4742__auto__.push((arguments[i__4737__auto___88262]));

var G__88263 = (i__4737__auto___88262 + (1));
i__4737__auto___88262 = G__88263;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,f,args){
var elem__$1 = elem;
return (elem__$1.dommyEventListeners = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,dommy.core.event_listeners(elem__$1),args));
}));

(dommy.core.update_event_listeners_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(dommy.core.update_event_listeners_BANG_.cljs$lang$applyTo = (function (seq87413){
var G__87414 = cljs.core.first(seq87413);
var seq87413__$1 = cljs.core.next(seq87413);
var G__87415 = cljs.core.first(seq87413__$1);
var seq87413__$2 = cljs.core.next(seq87413__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__87414,G__87415,seq87413__$2);
}));

dommy.core.elem_and_selector = (function dommy$core$elem_and_selector(elem_sel){
if(cljs.core.sequential_QMARK_(elem_sel)){
return cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.rest)(elem_sel);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [elem_sel,null], null);
}
});
/**
 * Adds `f` as a listener for events of type `event-type` on
 * `elem-sel`, which must either be a DOM node, or a sequence
 * whose first item is a DOM node.
 * 
 * In other words, the call to `listen!` can take two forms:
 * 
 * If `elem-sel` is a DOM node, i.e., you're doing something like:
 * 
 *     (listen! elem :click click-handler)
 * 
 * then `click-handler` will be set as a listener for `click` events
 * on the `elem`.
 * 
 * If `elem-sel` is a sequence:
 * 
 *     (listen! [elem :.selector.for :.some.descendants] :click click-handler)
 * 
 * then `click-handler` will be set as a listener for `click` events
 * on descendants of `elem` that match the selector
 * 
 * Also accepts any number of event-type and handler pairs for setting
 * multiple listeners at once:
 * 
 *     (listen! some-elem :click click-handler :hover hover-handler)
 */
dommy.core.listen_BANG_ = (function dommy$core$listen_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___88269 = arguments.length;
var i__4737__auto___88271 = (0);
while(true){
if((i__4737__auto___88271 < len__4736__auto___88269)){
args__4742__auto__.push((arguments[i__4737__auto___88271]));

var G__88273 = (i__4737__auto___88271 + (1));
i__4737__auto___88271 = G__88273;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_(cljs.core.count(type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__87427_88275 = dommy.core.elem_and_selector(elem_sel);
var elem_88276 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__87427_88275,(0),null);
var selector_88277 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__87427_88275,(1),null);
var seq__87431_88278 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__87438_88279 = null;
var count__87439_88280 = (0);
var i__87440_88281 = (0);
while(true){
if((i__87440_88281 < count__87439_88280)){
var vec__87556_88284 = chunk__87438_88279.cljs$core$IIndexed$_nth$arity$2(null,i__87440_88281);
var orig_type_88285 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__87556_88284,(0),null);
var f_88286 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__87556_88284,(1),null);
var seq__87441_88289 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_88285,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_88285,cljs.core.identity])));
var chunk__87443_88290 = null;
var count__87444_88291 = (0);
var i__87445_88292 = (0);
while(true){
if((i__87445_88292 < count__87444_88291)){
var vec__87583_88293 = chunk__87443_88290.cljs$core$IIndexed$_nth$arity$2(null,i__87445_88292);
var actual_type_88294 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__87583_88293,(0),null);
var factory_88295 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__87583_88293,(1),null);
var canonical_f_88296 = (function (){var G__87591 = (factory_88295.cljs$core$IFn$_invoke$arity$1 ? factory_88295.cljs$core$IFn$_invoke$arity$1(f_88286) : factory_88295.call(null,f_88286));
var fexpr__87590 = (cljs.core.truth_(selector_88277)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_88276,selector_88277):cljs.core.identity);
return (fexpr__87590.cljs$core$IFn$_invoke$arity$1 ? fexpr__87590.cljs$core$IFn$_invoke$arity$1(G__87591) : fexpr__87590.call(null,G__87591));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_88276,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_88277,actual_type_88294,f_88286], null),canonical_f_88296], 0));

if(cljs.core.truth_(elem_88276.addEventListener)){
elem_88276.addEventListener(cljs.core.name(actual_type_88294),canonical_f_88296);
} else {
elem_88276.attachEvent(cljs.core.name(actual_type_88294),canonical_f_88296);
}


var G__88301 = seq__87441_88289;
var G__88302 = chunk__87443_88290;
var G__88303 = count__87444_88291;
var G__88304 = (i__87445_88292 + (1));
seq__87441_88289 = G__88301;
chunk__87443_88290 = G__88302;
count__87444_88291 = G__88303;
i__87445_88292 = G__88304;
continue;
} else {
var temp__5735__auto___88305 = cljs.core.seq(seq__87441_88289);
if(temp__5735__auto___88305){
var seq__87441_88306__$1 = temp__5735__auto___88305;
if(cljs.core.chunked_seq_QMARK_(seq__87441_88306__$1)){
var c__4556__auto___88307 = cljs.core.chunk_first(seq__87441_88306__$1);
var G__88308 = cljs.core.chunk_rest(seq__87441_88306__$1);
var G__88309 = c__4556__auto___88307;
var G__88310 = cljs.core.count(c__4556__auto___88307);
var G__88311 = (0);
seq__87441_88289 = G__88308;
chunk__87443_88290 = G__88309;
count__87444_88291 = G__88310;
i__87445_88292 = G__88311;
continue;
} else {
var vec__87595_88312 = cljs.core.first(seq__87441_88306__$1);
var actual_type_88313 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__87595_88312,(0),null);
var factory_88314 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__87595_88312,(1),null);
var canonical_f_88316 = (function (){var G__87602 = (factory_88314.cljs$core$IFn$_invoke$arity$1 ? factory_88314.cljs$core$IFn$_invoke$arity$1(f_88286) : factory_88314.call(null,f_88286));
var fexpr__87601 = (cljs.core.truth_(selector_88277)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_88276,selector_88277):cljs.core.identity);
return (fexpr__87601.cljs$core$IFn$_invoke$arity$1 ? fexpr__87601.cljs$core$IFn$_invoke$arity$1(G__87602) : fexpr__87601.call(null,G__87602));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_88276,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_88277,actual_type_88313,f_88286], null),canonical_f_88316], 0));

if(cljs.core.truth_(elem_88276.addEventListener)){
elem_88276.addEventListener(cljs.core.name(actual_type_88313),canonical_f_88316);
} else {
elem_88276.attachEvent(cljs.core.name(actual_type_88313),canonical_f_88316);
}


var G__88320 = cljs.core.next(seq__87441_88306__$1);
var G__88321 = null;
var G__88322 = (0);
var G__88323 = (0);
seq__87441_88289 = G__88320;
chunk__87443_88290 = G__88321;
count__87444_88291 = G__88322;
i__87445_88292 = G__88323;
continue;
}
} else {
}
}
break;
}

var G__88324 = seq__87431_88278;
var G__88325 = chunk__87438_88279;
var G__88326 = count__87439_88280;
var G__88327 = (i__87440_88281 + (1));
seq__87431_88278 = G__88324;
chunk__87438_88279 = G__88325;
count__87439_88280 = G__88326;
i__87440_88281 = G__88327;
continue;
} else {
var temp__5735__auto___88328 = cljs.core.seq(seq__87431_88278);
if(temp__5735__auto___88328){
var seq__87431_88330__$1 = temp__5735__auto___88328;
if(cljs.core.chunked_seq_QMARK_(seq__87431_88330__$1)){
var c__4556__auto___88331 = cljs.core.chunk_first(seq__87431_88330__$1);
var G__88334 = cljs.core.chunk_rest(seq__87431_88330__$1);
var G__88335 = c__4556__auto___88331;
var G__88336 = cljs.core.count(c__4556__auto___88331);
var G__88337 = (0);
seq__87431_88278 = G__88334;
chunk__87438_88279 = G__88335;
count__87439_88280 = G__88336;
i__87440_88281 = G__88337;
continue;
} else {
var vec__87603_88338 = cljs.core.first(seq__87431_88330__$1);
var orig_type_88339 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__87603_88338,(0),null);
var f_88340 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__87603_88338,(1),null);
var seq__87432_88342 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_88339,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_88339,cljs.core.identity])));
var chunk__87434_88343 = null;
var count__87435_88344 = (0);
var i__87436_88345 = (0);
while(true){
if((i__87436_88345 < count__87435_88344)){
var vec__87633_88346 = chunk__87434_88343.cljs$core$IIndexed$_nth$arity$2(null,i__87436_88345);
var actual_type_88347 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__87633_88346,(0),null);
var factory_88348 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__87633_88346,(1),null);
var canonical_f_88349 = (function (){var G__87637 = (factory_88348.cljs$core$IFn$_invoke$arity$1 ? factory_88348.cljs$core$IFn$_invoke$arity$1(f_88340) : factory_88348.call(null,f_88340));
var fexpr__87636 = (cljs.core.truth_(selector_88277)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_88276,selector_88277):cljs.core.identity);
return (fexpr__87636.cljs$core$IFn$_invoke$arity$1 ? fexpr__87636.cljs$core$IFn$_invoke$arity$1(G__87637) : fexpr__87636.call(null,G__87637));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_88276,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_88277,actual_type_88347,f_88340], null),canonical_f_88349], 0));

if(cljs.core.truth_(elem_88276.addEventListener)){
elem_88276.addEventListener(cljs.core.name(actual_type_88347),canonical_f_88349);
} else {
elem_88276.attachEvent(cljs.core.name(actual_type_88347),canonical_f_88349);
}


var G__88354 = seq__87432_88342;
var G__88355 = chunk__87434_88343;
var G__88356 = count__87435_88344;
var G__88357 = (i__87436_88345 + (1));
seq__87432_88342 = G__88354;
chunk__87434_88343 = G__88355;
count__87435_88344 = G__88356;
i__87436_88345 = G__88357;
continue;
} else {
var temp__5735__auto___88358__$1 = cljs.core.seq(seq__87432_88342);
if(temp__5735__auto___88358__$1){
var seq__87432_88359__$1 = temp__5735__auto___88358__$1;
if(cljs.core.chunked_seq_QMARK_(seq__87432_88359__$1)){
var c__4556__auto___88360 = cljs.core.chunk_first(seq__87432_88359__$1);
var G__88361 = cljs.core.chunk_rest(seq__87432_88359__$1);
var G__88362 = c__4556__auto___88360;
var G__88363 = cljs.core.count(c__4556__auto___88360);
var G__88364 = (0);
seq__87432_88342 = G__88361;
chunk__87434_88343 = G__88362;
count__87435_88344 = G__88363;
i__87436_88345 = G__88364;
continue;
} else {
var vec__87640_88365 = cljs.core.first(seq__87432_88359__$1);
var actual_type_88366 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__87640_88365,(0),null);
var factory_88367 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__87640_88365,(1),null);
var canonical_f_88369 = (function (){var G__87645 = (factory_88367.cljs$core$IFn$_invoke$arity$1 ? factory_88367.cljs$core$IFn$_invoke$arity$1(f_88340) : factory_88367.call(null,f_88340));
var fexpr__87644 = (cljs.core.truth_(selector_88277)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_88276,selector_88277):cljs.core.identity);
return (fexpr__87644.cljs$core$IFn$_invoke$arity$1 ? fexpr__87644.cljs$core$IFn$_invoke$arity$1(G__87645) : fexpr__87644.call(null,G__87645));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_88276,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_88277,actual_type_88366,f_88340], null),canonical_f_88369], 0));

if(cljs.core.truth_(elem_88276.addEventListener)){
elem_88276.addEventListener(cljs.core.name(actual_type_88366),canonical_f_88369);
} else {
elem_88276.attachEvent(cljs.core.name(actual_type_88366),canonical_f_88369);
}


var G__88373 = cljs.core.next(seq__87432_88359__$1);
var G__88374 = null;
var G__88375 = (0);
var G__88376 = (0);
seq__87432_88342 = G__88373;
chunk__87434_88343 = G__88374;
count__87435_88344 = G__88375;
i__87436_88345 = G__88376;
continue;
}
} else {
}
}
break;
}

var G__88377 = cljs.core.next(seq__87431_88330__$1);
var G__88378 = null;
var G__88379 = (0);
var G__88380 = (0);
seq__87431_88278 = G__88377;
chunk__87438_88279 = G__88378;
count__87439_88280 = G__88379;
i__87440_88281 = G__88380;
continue;
}
} else {
}
}
break;
}

return elem_sel;
}));

(dommy.core.listen_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(dommy.core.listen_BANG_.cljs$lang$applyTo = (function (seq87419){
var G__87420 = cljs.core.first(seq87419);
var seq87419__$1 = cljs.core.next(seq87419);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__87420,seq87419__$1);
}));

/**
 * Removes event listener for the element defined in `elem-sel`,
 * which is the same format as listen!.
 * 
 *   The following forms are allowed, and will remove all handlers
 *   that match the parameters passed in:
 * 
 *    (unlisten! [elem :.selector] :click event-listener)
 * 
 *    (unlisten! [elem :.selector]
 *      :click event-listener
 *      :mouseover other-event-listener)
 */
dommy.core.unlisten_BANG_ = (function dommy$core$unlisten_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___88385 = arguments.length;
var i__4737__auto___88386 = (0);
while(true){
if((i__4737__auto___88386 < len__4736__auto___88385)){
args__4742__auto__.push((arguments[i__4737__auto___88386]));

var G__88387 = (i__4737__auto___88386 + (1));
i__4737__auto___88386 = G__88387;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_(cljs.core.count(type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__87659_88388 = dommy.core.elem_and_selector(elem_sel);
var elem_88389 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__87659_88388,(0),null);
var selector_88390 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__87659_88388,(1),null);
var seq__87662_88391 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__87669_88392 = null;
var count__87670_88393 = (0);
var i__87671_88394 = (0);
while(true){
if((i__87671_88394 < count__87670_88393)){
var vec__87737_88396 = chunk__87669_88392.cljs$core$IIndexed$_nth$arity$2(null,i__87671_88394);
var orig_type_88397 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__87737_88396,(0),null);
var f_88398 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__87737_88396,(1),null);
var seq__87672_88399 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_88397,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_88397,cljs.core.identity])));
var chunk__87674_88400 = null;
var count__87675_88401 = (0);
var i__87676_88402 = (0);
while(true){
if((i__87676_88402 < count__87675_88401)){
var vec__87754_88403 = chunk__87674_88400.cljs$core$IIndexed$_nth$arity$2(null,i__87676_88402);
var actual_type_88404 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__87754_88403,(0),null);
var __88405 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__87754_88403,(1),null);
var keys_88406 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_88390,actual_type_88404,f_88398], null);
var canonical_f_88407 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_88389),keys_88406);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_88389,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_88406], 0));

if(cljs.core.truth_(elem_88389.removeEventListener)){
elem_88389.removeEventListener(cljs.core.name(actual_type_88404),canonical_f_88407);
} else {
elem_88389.detachEvent(cljs.core.name(actual_type_88404),canonical_f_88407);
}


var G__88409 = seq__87672_88399;
var G__88410 = chunk__87674_88400;
var G__88411 = count__87675_88401;
var G__88412 = (i__87676_88402 + (1));
seq__87672_88399 = G__88409;
chunk__87674_88400 = G__88410;
count__87675_88401 = G__88411;
i__87676_88402 = G__88412;
continue;
} else {
var temp__5735__auto___88413 = cljs.core.seq(seq__87672_88399);
if(temp__5735__auto___88413){
var seq__87672_88414__$1 = temp__5735__auto___88413;
if(cljs.core.chunked_seq_QMARK_(seq__87672_88414__$1)){
var c__4556__auto___88415 = cljs.core.chunk_first(seq__87672_88414__$1);
var G__88416 = cljs.core.chunk_rest(seq__87672_88414__$1);
var G__88417 = c__4556__auto___88415;
var G__88418 = cljs.core.count(c__4556__auto___88415);
var G__88419 = (0);
seq__87672_88399 = G__88416;
chunk__87674_88400 = G__88417;
count__87675_88401 = G__88418;
i__87676_88402 = G__88419;
continue;
} else {
var vec__87761_88420 = cljs.core.first(seq__87672_88414__$1);
var actual_type_88421 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__87761_88420,(0),null);
var __88422 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__87761_88420,(1),null);
var keys_88423 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_88390,actual_type_88421,f_88398], null);
var canonical_f_88424 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_88389),keys_88423);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_88389,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_88423], 0));

if(cljs.core.truth_(elem_88389.removeEventListener)){
elem_88389.removeEventListener(cljs.core.name(actual_type_88421),canonical_f_88424);
} else {
elem_88389.detachEvent(cljs.core.name(actual_type_88421),canonical_f_88424);
}


var G__88427 = cljs.core.next(seq__87672_88414__$1);
var G__88428 = null;
var G__88429 = (0);
var G__88430 = (0);
seq__87672_88399 = G__88427;
chunk__87674_88400 = G__88428;
count__87675_88401 = G__88429;
i__87676_88402 = G__88430;
continue;
}
} else {
}
}
break;
}

var G__88432 = seq__87662_88391;
var G__88433 = chunk__87669_88392;
var G__88434 = count__87670_88393;
var G__88435 = (i__87671_88394 + (1));
seq__87662_88391 = G__88432;
chunk__87669_88392 = G__88433;
count__87670_88393 = G__88434;
i__87671_88394 = G__88435;
continue;
} else {
var temp__5735__auto___88436 = cljs.core.seq(seq__87662_88391);
if(temp__5735__auto___88436){
var seq__87662_88437__$1 = temp__5735__auto___88436;
if(cljs.core.chunked_seq_QMARK_(seq__87662_88437__$1)){
var c__4556__auto___88438 = cljs.core.chunk_first(seq__87662_88437__$1);
var G__88439 = cljs.core.chunk_rest(seq__87662_88437__$1);
var G__88440 = c__4556__auto___88438;
var G__88441 = cljs.core.count(c__4556__auto___88438);
var G__88442 = (0);
seq__87662_88391 = G__88439;
chunk__87669_88392 = G__88440;
count__87670_88393 = G__88441;
i__87671_88394 = G__88442;
continue;
} else {
var vec__87768_88443 = cljs.core.first(seq__87662_88437__$1);
var orig_type_88444 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__87768_88443,(0),null);
var f_88445 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__87768_88443,(1),null);
var seq__87663_88446 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_88444,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_88444,cljs.core.identity])));
var chunk__87665_88447 = null;
var count__87666_88448 = (0);
var i__87667_88449 = (0);
while(true){
if((i__87667_88449 < count__87666_88448)){
var vec__87786_88452 = chunk__87665_88447.cljs$core$IIndexed$_nth$arity$2(null,i__87667_88449);
var actual_type_88453 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__87786_88452,(0),null);
var __88454 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__87786_88452,(1),null);
var keys_88455 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_88390,actual_type_88453,f_88445], null);
var canonical_f_88456 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_88389),keys_88455);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_88389,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_88455], 0));

if(cljs.core.truth_(elem_88389.removeEventListener)){
elem_88389.removeEventListener(cljs.core.name(actual_type_88453),canonical_f_88456);
} else {
elem_88389.detachEvent(cljs.core.name(actual_type_88453),canonical_f_88456);
}


var G__88459 = seq__87663_88446;
var G__88460 = chunk__87665_88447;
var G__88461 = count__87666_88448;
var G__88462 = (i__87667_88449 + (1));
seq__87663_88446 = G__88459;
chunk__87665_88447 = G__88460;
count__87666_88448 = G__88461;
i__87667_88449 = G__88462;
continue;
} else {
var temp__5735__auto___88463__$1 = cljs.core.seq(seq__87663_88446);
if(temp__5735__auto___88463__$1){
var seq__87663_88464__$1 = temp__5735__auto___88463__$1;
if(cljs.core.chunked_seq_QMARK_(seq__87663_88464__$1)){
var c__4556__auto___88465 = cljs.core.chunk_first(seq__87663_88464__$1);
var G__88466 = cljs.core.chunk_rest(seq__87663_88464__$1);
var G__88467 = c__4556__auto___88465;
var G__88468 = cljs.core.count(c__4556__auto___88465);
var G__88469 = (0);
seq__87663_88446 = G__88466;
chunk__87665_88447 = G__88467;
count__87666_88448 = G__88468;
i__87667_88449 = G__88469;
continue;
} else {
var vec__87801_88470 = cljs.core.first(seq__87663_88464__$1);
var actual_type_88471 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__87801_88470,(0),null);
var __88472 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__87801_88470,(1),null);
var keys_88473 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_88390,actual_type_88471,f_88445], null);
var canonical_f_88474 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_88389),keys_88473);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_88389,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_88473], 0));

if(cljs.core.truth_(elem_88389.removeEventListener)){
elem_88389.removeEventListener(cljs.core.name(actual_type_88471),canonical_f_88474);
} else {
elem_88389.detachEvent(cljs.core.name(actual_type_88471),canonical_f_88474);
}


var G__88478 = cljs.core.next(seq__87663_88464__$1);
var G__88479 = null;
var G__88480 = (0);
var G__88481 = (0);
seq__87663_88446 = G__88478;
chunk__87665_88447 = G__88479;
count__87666_88448 = G__88480;
i__87667_88449 = G__88481;
continue;
}
} else {
}
}
break;
}

var G__88482 = cljs.core.next(seq__87662_88437__$1);
var G__88483 = null;
var G__88484 = (0);
var G__88485 = (0);
seq__87662_88391 = G__88482;
chunk__87669_88392 = G__88483;
count__87670_88393 = G__88484;
i__87671_88394 = G__88485;
continue;
}
} else {
}
}
break;
}

return elem_sel;
}));

(dommy.core.unlisten_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(dommy.core.unlisten_BANG_.cljs$lang$applyTo = (function (seq87653){
var G__87654 = cljs.core.first(seq87653);
var seq87653__$1 = cljs.core.next(seq87653);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__87654,seq87653__$1);
}));

/**
 * Behaves like `listen!`, but removes the listener after the first event occurs.
 */
dommy.core.listen_once_BANG_ = (function dommy$core$listen_once_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___88486 = arguments.length;
var i__4737__auto___88487 = (0);
while(true){
if((i__4737__auto___88487 < len__4736__auto___88486)){
args__4742__auto__.push((arguments[i__4737__auto___88487]));

var G__88488 = (i__4737__auto___88487 + (1));
i__4737__auto___88487 = G__88488;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_(cljs.core.count(type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__87809_88494 = dommy.core.elem_and_selector(elem_sel);
var elem_88495 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__87809_88494,(0),null);
var selector_88496 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__87809_88494,(1),null);
var seq__87814_88497 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__87815_88498 = null;
var count__87816_88499 = (0);
var i__87817_88500 = (0);
while(true){
if((i__87817_88500 < count__87816_88499)){
var vec__87825_88501 = chunk__87815_88498.cljs$core$IIndexed$_nth$arity$2(null,i__87817_88500);
var type_88502 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__87825_88501,(0),null);
var f_88503 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__87825_88501,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_88502,((function (seq__87814_88497,chunk__87815_88498,count__87816_88499,i__87817_88500,vec__87825_88501,type_88502,f_88503,vec__87809_88494,elem_88495,selector_88496){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_88502,dommy$core$this_fn], 0));

return (f_88503.cljs$core$IFn$_invoke$arity$1 ? f_88503.cljs$core$IFn$_invoke$arity$1(e) : f_88503.call(null,e));
});})(seq__87814_88497,chunk__87815_88498,count__87816_88499,i__87817_88500,vec__87825_88501,type_88502,f_88503,vec__87809_88494,elem_88495,selector_88496))
], 0));


var G__88504 = seq__87814_88497;
var G__88505 = chunk__87815_88498;
var G__88506 = count__87816_88499;
var G__88507 = (i__87817_88500 + (1));
seq__87814_88497 = G__88504;
chunk__87815_88498 = G__88505;
count__87816_88499 = G__88506;
i__87817_88500 = G__88507;
continue;
} else {
var temp__5735__auto___88508 = cljs.core.seq(seq__87814_88497);
if(temp__5735__auto___88508){
var seq__87814_88509__$1 = temp__5735__auto___88508;
if(cljs.core.chunked_seq_QMARK_(seq__87814_88509__$1)){
var c__4556__auto___88510 = cljs.core.chunk_first(seq__87814_88509__$1);
var G__88511 = cljs.core.chunk_rest(seq__87814_88509__$1);
var G__88512 = c__4556__auto___88510;
var G__88513 = cljs.core.count(c__4556__auto___88510);
var G__88514 = (0);
seq__87814_88497 = G__88511;
chunk__87815_88498 = G__88512;
count__87816_88499 = G__88513;
i__87817_88500 = G__88514;
continue;
} else {
var vec__87834_88515 = cljs.core.first(seq__87814_88509__$1);
var type_88516 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__87834_88515,(0),null);
var f_88517 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__87834_88515,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_88516,((function (seq__87814_88497,chunk__87815_88498,count__87816_88499,i__87817_88500,vec__87834_88515,type_88516,f_88517,seq__87814_88509__$1,temp__5735__auto___88508,vec__87809_88494,elem_88495,selector_88496){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_88516,dommy$core$this_fn], 0));

return (f_88517.cljs$core$IFn$_invoke$arity$1 ? f_88517.cljs$core$IFn$_invoke$arity$1(e) : f_88517.call(null,e));
});})(seq__87814_88497,chunk__87815_88498,count__87816_88499,i__87817_88500,vec__87834_88515,type_88516,f_88517,seq__87814_88509__$1,temp__5735__auto___88508,vec__87809_88494,elem_88495,selector_88496))
], 0));


var G__88518 = cljs.core.next(seq__87814_88509__$1);
var G__88519 = null;
var G__88520 = (0);
var G__88521 = (0);
seq__87814_88497 = G__88518;
chunk__87815_88498 = G__88519;
count__87816_88499 = G__88520;
i__87817_88500 = G__88521;
continue;
}
} else {
}
}
break;
}

return elem_sel;
}));

(dommy.core.listen_once_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(dommy.core.listen_once_BANG_.cljs$lang$applyTo = (function (seq87805){
var G__87806 = cljs.core.first(seq87805);
var seq87805__$1 = cljs.core.next(seq87805);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__87806,seq87805__$1);
}));


//# sourceMappingURL=dommy.core.js.map
