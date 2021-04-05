goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_62220 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_62220(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_62222 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_62222(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__61107 = coll;
var G__61108 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__61107,G__61108) : shadow.dom.lazy_native_coll_seq.call(null,G__61107,G__61108));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4126__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__61123 = arguments.length;
switch (G__61123) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__61125 = arguments.length;
switch (G__61125) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__61129 = arguments.length;
switch (G__61129) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__61134 = arguments.length;
switch (G__61134) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__61153 = arguments.length;
switch (G__61153) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__61155 = arguments.length;
switch (G__61155) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4126__auto__ = (!((typeof document !== 'undefined')));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e61156){if((e61156 instanceof Object)){
var e = e61156;
return console.log("didnt support attachEvent",el,e);
} else {
throw e61156;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4126__auto__ = (!((typeof document !== 'undefined')));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__61158 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__61159 = null;
var count__61160 = (0);
var i__61161 = (0);
while(true){
if((i__61161 < count__61160)){
var el = chunk__61159.cljs$core$IIndexed$_nth$arity$2(null,i__61161);
var handler_62245__$1 = ((function (seq__61158,chunk__61159,count__61160,i__61161,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__61158,chunk__61159,count__61160,i__61161,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_62245__$1);


var G__62252 = seq__61158;
var G__62253 = chunk__61159;
var G__62254 = count__61160;
var G__62255 = (i__61161 + (1));
seq__61158 = G__62252;
chunk__61159 = G__62253;
count__61160 = G__62254;
i__61161 = G__62255;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__61158);
if(temp__5735__auto__){
var seq__61158__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__61158__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__61158__$1);
var G__62257 = cljs.core.chunk_rest(seq__61158__$1);
var G__62258 = c__4556__auto__;
var G__62259 = cljs.core.count(c__4556__auto__);
var G__62260 = (0);
seq__61158 = G__62257;
chunk__61159 = G__62258;
count__61160 = G__62259;
i__61161 = G__62260;
continue;
} else {
var el = cljs.core.first(seq__61158__$1);
var handler_62265__$1 = ((function (seq__61158,chunk__61159,count__61160,i__61161,el,seq__61158__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__61158,chunk__61159,count__61160,i__61161,el,seq__61158__$1,temp__5735__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_62265__$1);


var G__62270 = cljs.core.next(seq__61158__$1);
var G__62271 = null;
var G__62272 = (0);
var G__62273 = (0);
seq__61158 = G__62270;
chunk__61159 = G__62271;
count__61160 = G__62272;
i__61161 = G__62273;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__61171 = arguments.length;
switch (G__61171) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__61194 = cljs.core.seq(events);
var chunk__61195 = null;
var count__61196 = (0);
var i__61197 = (0);
while(true){
if((i__61197 < count__61196)){
var vec__61210 = chunk__61195.cljs$core$IIndexed$_nth$arity$2(null,i__61197);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61210,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61210,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__62285 = seq__61194;
var G__62286 = chunk__61195;
var G__62287 = count__61196;
var G__62288 = (i__61197 + (1));
seq__61194 = G__62285;
chunk__61195 = G__62286;
count__61196 = G__62287;
i__61197 = G__62288;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__61194);
if(temp__5735__auto__){
var seq__61194__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__61194__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__61194__$1);
var G__62290 = cljs.core.chunk_rest(seq__61194__$1);
var G__62291 = c__4556__auto__;
var G__62292 = cljs.core.count(c__4556__auto__);
var G__62293 = (0);
seq__61194 = G__62290;
chunk__61195 = G__62291;
count__61196 = G__62292;
i__61197 = G__62293;
continue;
} else {
var vec__61218 = cljs.core.first(seq__61194__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61218,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61218,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__62295 = cljs.core.next(seq__61194__$1);
var G__62296 = null;
var G__62297 = (0);
var G__62298 = (0);
seq__61194 = G__62295;
chunk__61195 = G__62296;
count__61196 = G__62297;
i__61197 = G__62298;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__61225 = cljs.core.seq(styles);
var chunk__61226 = null;
var count__61227 = (0);
var i__61228 = (0);
while(true){
if((i__61228 < count__61227)){
var vec__61239 = chunk__61226.cljs$core$IIndexed$_nth$arity$2(null,i__61228);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61239,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61239,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__62300 = seq__61225;
var G__62301 = chunk__61226;
var G__62302 = count__61227;
var G__62303 = (i__61228 + (1));
seq__61225 = G__62300;
chunk__61226 = G__62301;
count__61227 = G__62302;
i__61228 = G__62303;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__61225);
if(temp__5735__auto__){
var seq__61225__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__61225__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__61225__$1);
var G__62304 = cljs.core.chunk_rest(seq__61225__$1);
var G__62305 = c__4556__auto__;
var G__62306 = cljs.core.count(c__4556__auto__);
var G__62307 = (0);
seq__61225 = G__62304;
chunk__61226 = G__62305;
count__61227 = G__62306;
i__61228 = G__62307;
continue;
} else {
var vec__61249 = cljs.core.first(seq__61225__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61249,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61249,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__62308 = cljs.core.next(seq__61225__$1);
var G__62309 = null;
var G__62310 = (0);
var G__62311 = (0);
seq__61225 = G__62308;
chunk__61226 = G__62309;
count__61227 = G__62310;
i__61228 = G__62311;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__61254_62312 = key;
var G__61254_62313__$1 = (((G__61254_62312 instanceof cljs.core.Keyword))?G__61254_62312.fqn:null);
switch (G__61254_62313__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_62323 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4126__auto__ = goog.string.startsWith(ks_62323,"data-");
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return goog.string.startsWith(ks_62323,"aria-");
}
})())){
el.setAttribute(ks_62323,value);
} else {
(el[ks_62323] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__61298){
var map__61301 = p__61298;
var map__61301__$1 = (((((!((map__61301 == null))))?(((((map__61301.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61301.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61301):map__61301);
var props = map__61301__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61301__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__61309 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61309,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61309,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61309,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__61313 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__61313,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__61313;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__61317 = arguments.length;
switch (G__61317) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__61329){
var vec__61330 = p__61329;
var seq__61331 = cljs.core.seq(vec__61330);
var first__61332 = cljs.core.first(seq__61331);
var seq__61331__$1 = cljs.core.next(seq__61331);
var nn = first__61332;
var first__61332__$1 = cljs.core.first(seq__61331__$1);
var seq__61331__$2 = cljs.core.next(seq__61331__$1);
var np = first__61332__$1;
var nc = seq__61331__$2;
var node = vec__61330;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__61336 = nn;
var G__61337 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__61336,G__61337) : create_fn.call(null,G__61336,G__61337));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__61341 = nn;
var G__61342 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__61341,G__61342) : create_fn.call(null,G__61341,G__61342));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__61350 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61350,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61350,(1),null);
var seq__61353_62346 = cljs.core.seq(node_children);
var chunk__61354_62347 = null;
var count__61355_62348 = (0);
var i__61356_62349 = (0);
while(true){
if((i__61356_62349 < count__61355_62348)){
var child_struct_62350 = chunk__61354_62347.cljs$core$IIndexed$_nth$arity$2(null,i__61356_62349);
var children_62352 = shadow.dom.dom_node(child_struct_62350);
if(cljs.core.seq_QMARK_(children_62352)){
var seq__61402_62353 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_62352));
var chunk__61404_62354 = null;
var count__61405_62355 = (0);
var i__61406_62356 = (0);
while(true){
if((i__61406_62356 < count__61405_62355)){
var child_62357 = chunk__61404_62354.cljs$core$IIndexed$_nth$arity$2(null,i__61406_62356);
if(cljs.core.truth_(child_62357)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_62357);


var G__62358 = seq__61402_62353;
var G__62359 = chunk__61404_62354;
var G__62360 = count__61405_62355;
var G__62361 = (i__61406_62356 + (1));
seq__61402_62353 = G__62358;
chunk__61404_62354 = G__62359;
count__61405_62355 = G__62360;
i__61406_62356 = G__62361;
continue;
} else {
var G__62362 = seq__61402_62353;
var G__62363 = chunk__61404_62354;
var G__62364 = count__61405_62355;
var G__62365 = (i__61406_62356 + (1));
seq__61402_62353 = G__62362;
chunk__61404_62354 = G__62363;
count__61405_62355 = G__62364;
i__61406_62356 = G__62365;
continue;
}
} else {
var temp__5735__auto___62366 = cljs.core.seq(seq__61402_62353);
if(temp__5735__auto___62366){
var seq__61402_62367__$1 = temp__5735__auto___62366;
if(cljs.core.chunked_seq_QMARK_(seq__61402_62367__$1)){
var c__4556__auto___62369 = cljs.core.chunk_first(seq__61402_62367__$1);
var G__62370 = cljs.core.chunk_rest(seq__61402_62367__$1);
var G__62371 = c__4556__auto___62369;
var G__62372 = cljs.core.count(c__4556__auto___62369);
var G__62373 = (0);
seq__61402_62353 = G__62370;
chunk__61404_62354 = G__62371;
count__61405_62355 = G__62372;
i__61406_62356 = G__62373;
continue;
} else {
var child_62374 = cljs.core.first(seq__61402_62367__$1);
if(cljs.core.truth_(child_62374)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_62374);


var G__62376 = cljs.core.next(seq__61402_62367__$1);
var G__62377 = null;
var G__62378 = (0);
var G__62379 = (0);
seq__61402_62353 = G__62376;
chunk__61404_62354 = G__62377;
count__61405_62355 = G__62378;
i__61406_62356 = G__62379;
continue;
} else {
var G__62380 = cljs.core.next(seq__61402_62367__$1);
var G__62381 = null;
var G__62382 = (0);
var G__62383 = (0);
seq__61402_62353 = G__62380;
chunk__61404_62354 = G__62381;
count__61405_62355 = G__62382;
i__61406_62356 = G__62383;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_62352);
}


var G__62384 = seq__61353_62346;
var G__62385 = chunk__61354_62347;
var G__62386 = count__61355_62348;
var G__62387 = (i__61356_62349 + (1));
seq__61353_62346 = G__62384;
chunk__61354_62347 = G__62385;
count__61355_62348 = G__62386;
i__61356_62349 = G__62387;
continue;
} else {
var temp__5735__auto___62389 = cljs.core.seq(seq__61353_62346);
if(temp__5735__auto___62389){
var seq__61353_62390__$1 = temp__5735__auto___62389;
if(cljs.core.chunked_seq_QMARK_(seq__61353_62390__$1)){
var c__4556__auto___62391 = cljs.core.chunk_first(seq__61353_62390__$1);
var G__62392 = cljs.core.chunk_rest(seq__61353_62390__$1);
var G__62393 = c__4556__auto___62391;
var G__62394 = cljs.core.count(c__4556__auto___62391);
var G__62395 = (0);
seq__61353_62346 = G__62392;
chunk__61354_62347 = G__62393;
count__61355_62348 = G__62394;
i__61356_62349 = G__62395;
continue;
} else {
var child_struct_62396 = cljs.core.first(seq__61353_62390__$1);
var children_62397 = shadow.dom.dom_node(child_struct_62396);
if(cljs.core.seq_QMARK_(children_62397)){
var seq__61421_62398 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_62397));
var chunk__61423_62399 = null;
var count__61424_62400 = (0);
var i__61425_62401 = (0);
while(true){
if((i__61425_62401 < count__61424_62400)){
var child_62402 = chunk__61423_62399.cljs$core$IIndexed$_nth$arity$2(null,i__61425_62401);
if(cljs.core.truth_(child_62402)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_62402);


var G__62403 = seq__61421_62398;
var G__62404 = chunk__61423_62399;
var G__62405 = count__61424_62400;
var G__62406 = (i__61425_62401 + (1));
seq__61421_62398 = G__62403;
chunk__61423_62399 = G__62404;
count__61424_62400 = G__62405;
i__61425_62401 = G__62406;
continue;
} else {
var G__62408 = seq__61421_62398;
var G__62409 = chunk__61423_62399;
var G__62410 = count__61424_62400;
var G__62411 = (i__61425_62401 + (1));
seq__61421_62398 = G__62408;
chunk__61423_62399 = G__62409;
count__61424_62400 = G__62410;
i__61425_62401 = G__62411;
continue;
}
} else {
var temp__5735__auto___62412__$1 = cljs.core.seq(seq__61421_62398);
if(temp__5735__auto___62412__$1){
var seq__61421_62413__$1 = temp__5735__auto___62412__$1;
if(cljs.core.chunked_seq_QMARK_(seq__61421_62413__$1)){
var c__4556__auto___62414 = cljs.core.chunk_first(seq__61421_62413__$1);
var G__62415 = cljs.core.chunk_rest(seq__61421_62413__$1);
var G__62416 = c__4556__auto___62414;
var G__62417 = cljs.core.count(c__4556__auto___62414);
var G__62418 = (0);
seq__61421_62398 = G__62415;
chunk__61423_62399 = G__62416;
count__61424_62400 = G__62417;
i__61425_62401 = G__62418;
continue;
} else {
var child_62419 = cljs.core.first(seq__61421_62413__$1);
if(cljs.core.truth_(child_62419)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_62419);


var G__62422 = cljs.core.next(seq__61421_62413__$1);
var G__62423 = null;
var G__62424 = (0);
var G__62425 = (0);
seq__61421_62398 = G__62422;
chunk__61423_62399 = G__62423;
count__61424_62400 = G__62424;
i__61425_62401 = G__62425;
continue;
} else {
var G__62428 = cljs.core.next(seq__61421_62413__$1);
var G__62429 = null;
var G__62430 = (0);
var G__62431 = (0);
seq__61421_62398 = G__62428;
chunk__61423_62399 = G__62429;
count__61424_62400 = G__62430;
i__61425_62401 = G__62431;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_62397);
}


var G__62433 = cljs.core.next(seq__61353_62390__$1);
var G__62434 = null;
var G__62435 = (0);
var G__62436 = (0);
seq__61353_62346 = G__62433;
chunk__61354_62347 = G__62434;
count__61355_62348 = G__62435;
i__61356_62349 = G__62436;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__61471 = cljs.core.seq(node);
var chunk__61472 = null;
var count__61473 = (0);
var i__61474 = (0);
while(true){
if((i__61474 < count__61473)){
var n = chunk__61472.cljs$core$IIndexed$_nth$arity$2(null,i__61474);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__62445 = seq__61471;
var G__62446 = chunk__61472;
var G__62447 = count__61473;
var G__62448 = (i__61474 + (1));
seq__61471 = G__62445;
chunk__61472 = G__62446;
count__61473 = G__62447;
i__61474 = G__62448;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__61471);
if(temp__5735__auto__){
var seq__61471__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__61471__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__61471__$1);
var G__62451 = cljs.core.chunk_rest(seq__61471__$1);
var G__62452 = c__4556__auto__;
var G__62453 = cljs.core.count(c__4556__auto__);
var G__62454 = (0);
seq__61471 = G__62451;
chunk__61472 = G__62452;
count__61473 = G__62453;
i__61474 = G__62454;
continue;
} else {
var n = cljs.core.first(seq__61471__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__62455 = cljs.core.next(seq__61471__$1);
var G__62456 = null;
var G__62457 = (0);
var G__62458 = (0);
seq__61471 = G__62455;
chunk__61472 = G__62456;
count__61473 = G__62457;
i__61474 = G__62458;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__61486 = arguments.length;
switch (G__61486) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__61500 = arguments.length;
switch (G__61500) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__61521 = arguments.length;
switch (G__61521) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4126__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4742__auto__ = [];
var len__4736__auto___62473 = arguments.length;
var i__4737__auto___62474 = (0);
while(true){
if((i__4737__auto___62474 < len__4736__auto___62473)){
args__4742__auto__.push((arguments[i__4737__auto___62474]));

var G__62475 = (i__4737__auto___62474 + (1));
i__4737__auto___62474 = G__62475;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__61559_62477 = cljs.core.seq(nodes);
var chunk__61561_62478 = null;
var count__61562_62479 = (0);
var i__61563_62480 = (0);
while(true){
if((i__61563_62480 < count__61562_62479)){
var node_62482 = chunk__61561_62478.cljs$core$IIndexed$_nth$arity$2(null,i__61563_62480);
fragment.appendChild(shadow.dom._to_dom(node_62482));


var G__62484 = seq__61559_62477;
var G__62485 = chunk__61561_62478;
var G__62486 = count__61562_62479;
var G__62487 = (i__61563_62480 + (1));
seq__61559_62477 = G__62484;
chunk__61561_62478 = G__62485;
count__61562_62479 = G__62486;
i__61563_62480 = G__62487;
continue;
} else {
var temp__5735__auto___62489 = cljs.core.seq(seq__61559_62477);
if(temp__5735__auto___62489){
var seq__61559_62490__$1 = temp__5735__auto___62489;
if(cljs.core.chunked_seq_QMARK_(seq__61559_62490__$1)){
var c__4556__auto___62494 = cljs.core.chunk_first(seq__61559_62490__$1);
var G__62495 = cljs.core.chunk_rest(seq__61559_62490__$1);
var G__62496 = c__4556__auto___62494;
var G__62497 = cljs.core.count(c__4556__auto___62494);
var G__62498 = (0);
seq__61559_62477 = G__62495;
chunk__61561_62478 = G__62496;
count__61562_62479 = G__62497;
i__61563_62480 = G__62498;
continue;
} else {
var node_62499 = cljs.core.first(seq__61559_62490__$1);
fragment.appendChild(shadow.dom._to_dom(node_62499));


var G__62500 = cljs.core.next(seq__61559_62490__$1);
var G__62501 = null;
var G__62502 = (0);
var G__62503 = (0);
seq__61559_62477 = G__62500;
chunk__61561_62478 = G__62501;
count__61562_62479 = G__62502;
i__61563_62480 = G__62503;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq61548){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61548));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__61583_62504 = cljs.core.seq(scripts);
var chunk__61584_62505 = null;
var count__61585_62506 = (0);
var i__61586_62507 = (0);
while(true){
if((i__61586_62507 < count__61585_62506)){
var vec__61605_62508 = chunk__61584_62505.cljs$core$IIndexed$_nth$arity$2(null,i__61586_62507);
var script_tag_62509 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61605_62508,(0),null);
var script_body_62510 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61605_62508,(1),null);
eval(script_body_62510);


var G__62513 = seq__61583_62504;
var G__62514 = chunk__61584_62505;
var G__62515 = count__61585_62506;
var G__62516 = (i__61586_62507 + (1));
seq__61583_62504 = G__62513;
chunk__61584_62505 = G__62514;
count__61585_62506 = G__62515;
i__61586_62507 = G__62516;
continue;
} else {
var temp__5735__auto___62517 = cljs.core.seq(seq__61583_62504);
if(temp__5735__auto___62517){
var seq__61583_62518__$1 = temp__5735__auto___62517;
if(cljs.core.chunked_seq_QMARK_(seq__61583_62518__$1)){
var c__4556__auto___62519 = cljs.core.chunk_first(seq__61583_62518__$1);
var G__62520 = cljs.core.chunk_rest(seq__61583_62518__$1);
var G__62521 = c__4556__auto___62519;
var G__62522 = cljs.core.count(c__4556__auto___62519);
var G__62523 = (0);
seq__61583_62504 = G__62520;
chunk__61584_62505 = G__62521;
count__61585_62506 = G__62522;
i__61586_62507 = G__62523;
continue;
} else {
var vec__61610_62524 = cljs.core.first(seq__61583_62518__$1);
var script_tag_62525 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61610_62524,(0),null);
var script_body_62526 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61610_62524,(1),null);
eval(script_body_62526);


var G__62527 = cljs.core.next(seq__61583_62518__$1);
var G__62528 = null;
var G__62529 = (0);
var G__62530 = (0);
seq__61583_62504 = G__62527;
chunk__61584_62505 = G__62528;
count__61585_62506 = G__62529;
i__61586_62507 = G__62530;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__61616){
var vec__61617 = p__61616;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61617,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61617,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__61640 = arguments.length;
switch (G__61640) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__61653 = cljs.core.seq(style_keys);
var chunk__61654 = null;
var count__61655 = (0);
var i__61656 = (0);
while(true){
if((i__61656 < count__61655)){
var it = chunk__61654.cljs$core$IIndexed$_nth$arity$2(null,i__61656);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__62539 = seq__61653;
var G__62540 = chunk__61654;
var G__62541 = count__61655;
var G__62542 = (i__61656 + (1));
seq__61653 = G__62539;
chunk__61654 = G__62540;
count__61655 = G__62541;
i__61656 = G__62542;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__61653);
if(temp__5735__auto__){
var seq__61653__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__61653__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__61653__$1);
var G__62550 = cljs.core.chunk_rest(seq__61653__$1);
var G__62551 = c__4556__auto__;
var G__62552 = cljs.core.count(c__4556__auto__);
var G__62553 = (0);
seq__61653 = G__62550;
chunk__61654 = G__62551;
count__61655 = G__62552;
i__61656 = G__62553;
continue;
} else {
var it = cljs.core.first(seq__61653__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__62558 = cljs.core.next(seq__61653__$1);
var G__62559 = null;
var G__62560 = (0);
var G__62561 = (0);
seq__61653 = G__62558;
chunk__61654 = G__62559;
count__61655 = G__62560;
i__61656 = G__62561;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k61663,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__61677 = k61663;
var G__61677__$1 = (((G__61677 instanceof cljs.core.Keyword))?G__61677.fqn:null);
switch (G__61677__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k61663,else__4383__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__61682){
var vec__61685 = p__61682;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61685,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61685,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__61662){
var self__ = this;
var G__61662__$1 = this;
return (new cljs.core.RecordIter((0),G__61662__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this61664,other61665){
var self__ = this;
var this61664__$1 = this;
return (((!((other61665 == null)))) && ((this61664__$1.constructor === other61665.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this61664__$1.x,other61665.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this61664__$1.y,other61665.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this61664__$1.__extmap,other61665.__extmap)));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__61662){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__61701 = cljs.core.keyword_identical_QMARK_;
var expr__61702 = k__4388__auto__;
if(cljs.core.truth_((pred__61701.cljs$core$IFn$_invoke$arity$2 ? pred__61701.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__61702) : pred__61701.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__61702)))){
return (new shadow.dom.Coordinate(G__61662,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__61701.cljs$core$IFn$_invoke$arity$2 ? pred__61701.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__61702) : pred__61701.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__61702)))){
return (new shadow.dom.Coordinate(self__.x,G__61662,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__61662),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__61662){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__61662,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__61666){
var extmap__4419__auto__ = (function (){var G__61713 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__61666,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__61666)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__61713);
} else {
return G__61713;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__61666),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__61666),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k61725,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__61738 = k61725;
var G__61738__$1 = (((G__61738 instanceof cljs.core.Keyword))?G__61738.fqn:null);
switch (G__61738__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k61725,else__4383__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__61743){
var vec__61744 = p__61743;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61744,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61744,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#shadow.dom.Size{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__61724){
var self__ = this;
var G__61724__$1 = this;
return (new cljs.core.RecordIter((0),G__61724__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this61726,other61727){
var self__ = this;
var this61726__$1 = this;
return (((!((other61727 == null)))) && ((this61726__$1.constructor === other61727.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this61726__$1.w,other61727.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this61726__$1.h,other61727.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this61726__$1.__extmap,other61727.__extmap)));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__61724){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__61758 = cljs.core.keyword_identical_QMARK_;
var expr__61759 = k__4388__auto__;
if(cljs.core.truth_((pred__61758.cljs$core$IFn$_invoke$arity$2 ? pred__61758.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__61759) : pred__61758.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__61759)))){
return (new shadow.dom.Size(G__61724,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__61758.cljs$core$IFn$_invoke$arity$2 ? pred__61758.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__61759) : pred__61758.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__61759)))){
return (new shadow.dom.Size(self__.w,G__61724,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__61724),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__61724){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__61724,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__61730){
var extmap__4419__auto__ = (function (){var G__61776 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__61730,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__61730)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__61776);
} else {
return G__61776;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__61730),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__61730),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4610__auto__ = opts;
var l__4611__auto__ = a__4610__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4611__auto__)){
var G__62611 = (i + (1));
var G__62612 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__62611;
ret = G__62612;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__61802){
var vec__61803 = p__61802;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61803,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61803,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__61810 = arguments.length;
switch (G__61810) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5733__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5733__auto__)){
var child = temp__5733__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__62642 = ps;
var G__62643 = (i + (1));
el__$1 = G__62642;
i = G__62643;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__61838 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61838,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61838,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61838,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__61842_62646 = cljs.core.seq(props);
var chunk__61843_62647 = null;
var count__61844_62648 = (0);
var i__61845_62649 = (0);
while(true){
if((i__61845_62649 < count__61844_62648)){
var vec__61857_62650 = chunk__61843_62647.cljs$core$IIndexed$_nth$arity$2(null,i__61845_62649);
var k_62651 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61857_62650,(0),null);
var v_62652 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61857_62650,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_62651);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_62651),v_62652);


var G__62657 = seq__61842_62646;
var G__62658 = chunk__61843_62647;
var G__62659 = count__61844_62648;
var G__62660 = (i__61845_62649 + (1));
seq__61842_62646 = G__62657;
chunk__61843_62647 = G__62658;
count__61844_62648 = G__62659;
i__61845_62649 = G__62660;
continue;
} else {
var temp__5735__auto___62661 = cljs.core.seq(seq__61842_62646);
if(temp__5735__auto___62661){
var seq__61842_62662__$1 = temp__5735__auto___62661;
if(cljs.core.chunked_seq_QMARK_(seq__61842_62662__$1)){
var c__4556__auto___62663 = cljs.core.chunk_first(seq__61842_62662__$1);
var G__62664 = cljs.core.chunk_rest(seq__61842_62662__$1);
var G__62665 = c__4556__auto___62663;
var G__62666 = cljs.core.count(c__4556__auto___62663);
var G__62667 = (0);
seq__61842_62646 = G__62664;
chunk__61843_62647 = G__62665;
count__61844_62648 = G__62666;
i__61845_62649 = G__62667;
continue;
} else {
var vec__61865_62669 = cljs.core.first(seq__61842_62662__$1);
var k_62670 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61865_62669,(0),null);
var v_62671 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61865_62669,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_62670);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_62670),v_62671);


var G__62673 = cljs.core.next(seq__61842_62662__$1);
var G__62674 = null;
var G__62675 = (0);
var G__62676 = (0);
seq__61842_62646 = G__62673;
chunk__61843_62647 = G__62674;
count__61844_62648 = G__62675;
i__61845_62649 = G__62676;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__61873 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61873,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61873,(1),null);
var seq__61876_62677 = cljs.core.seq(node_children);
var chunk__61878_62678 = null;
var count__61879_62679 = (0);
var i__61880_62680 = (0);
while(true){
if((i__61880_62680 < count__61879_62679)){
var child_struct_62681 = chunk__61878_62678.cljs$core$IIndexed$_nth$arity$2(null,i__61880_62680);
if((!((child_struct_62681 == null)))){
if(typeof child_struct_62681 === 'string'){
var text_62682 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_62682),child_struct_62681].join(''));
} else {
var children_62683 = shadow.dom.svg_node(child_struct_62681);
if(cljs.core.seq_QMARK_(children_62683)){
var seq__61920_62684 = cljs.core.seq(children_62683);
var chunk__61922_62685 = null;
var count__61923_62686 = (0);
var i__61924_62687 = (0);
while(true){
if((i__61924_62687 < count__61923_62686)){
var child_62688 = chunk__61922_62685.cljs$core$IIndexed$_nth$arity$2(null,i__61924_62687);
if(cljs.core.truth_(child_62688)){
node.appendChild(child_62688);


var G__62690 = seq__61920_62684;
var G__62691 = chunk__61922_62685;
var G__62692 = count__61923_62686;
var G__62693 = (i__61924_62687 + (1));
seq__61920_62684 = G__62690;
chunk__61922_62685 = G__62691;
count__61923_62686 = G__62692;
i__61924_62687 = G__62693;
continue;
} else {
var G__62694 = seq__61920_62684;
var G__62695 = chunk__61922_62685;
var G__62696 = count__61923_62686;
var G__62697 = (i__61924_62687 + (1));
seq__61920_62684 = G__62694;
chunk__61922_62685 = G__62695;
count__61923_62686 = G__62696;
i__61924_62687 = G__62697;
continue;
}
} else {
var temp__5735__auto___62698 = cljs.core.seq(seq__61920_62684);
if(temp__5735__auto___62698){
var seq__61920_62699__$1 = temp__5735__auto___62698;
if(cljs.core.chunked_seq_QMARK_(seq__61920_62699__$1)){
var c__4556__auto___62700 = cljs.core.chunk_first(seq__61920_62699__$1);
var G__62701 = cljs.core.chunk_rest(seq__61920_62699__$1);
var G__62702 = c__4556__auto___62700;
var G__62703 = cljs.core.count(c__4556__auto___62700);
var G__62704 = (0);
seq__61920_62684 = G__62701;
chunk__61922_62685 = G__62702;
count__61923_62686 = G__62703;
i__61924_62687 = G__62704;
continue;
} else {
var child_62705 = cljs.core.first(seq__61920_62699__$1);
if(cljs.core.truth_(child_62705)){
node.appendChild(child_62705);


var G__62708 = cljs.core.next(seq__61920_62699__$1);
var G__62709 = null;
var G__62710 = (0);
var G__62711 = (0);
seq__61920_62684 = G__62708;
chunk__61922_62685 = G__62709;
count__61923_62686 = G__62710;
i__61924_62687 = G__62711;
continue;
} else {
var G__62712 = cljs.core.next(seq__61920_62699__$1);
var G__62713 = null;
var G__62714 = (0);
var G__62715 = (0);
seq__61920_62684 = G__62712;
chunk__61922_62685 = G__62713;
count__61923_62686 = G__62714;
i__61924_62687 = G__62715;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_62683);
}
}


var G__62716 = seq__61876_62677;
var G__62717 = chunk__61878_62678;
var G__62718 = count__61879_62679;
var G__62719 = (i__61880_62680 + (1));
seq__61876_62677 = G__62716;
chunk__61878_62678 = G__62717;
count__61879_62679 = G__62718;
i__61880_62680 = G__62719;
continue;
} else {
var G__62720 = seq__61876_62677;
var G__62721 = chunk__61878_62678;
var G__62722 = count__61879_62679;
var G__62723 = (i__61880_62680 + (1));
seq__61876_62677 = G__62720;
chunk__61878_62678 = G__62721;
count__61879_62679 = G__62722;
i__61880_62680 = G__62723;
continue;
}
} else {
var temp__5735__auto___62724 = cljs.core.seq(seq__61876_62677);
if(temp__5735__auto___62724){
var seq__61876_62725__$1 = temp__5735__auto___62724;
if(cljs.core.chunked_seq_QMARK_(seq__61876_62725__$1)){
var c__4556__auto___62726 = cljs.core.chunk_first(seq__61876_62725__$1);
var G__62727 = cljs.core.chunk_rest(seq__61876_62725__$1);
var G__62728 = c__4556__auto___62726;
var G__62729 = cljs.core.count(c__4556__auto___62726);
var G__62730 = (0);
seq__61876_62677 = G__62727;
chunk__61878_62678 = G__62728;
count__61879_62679 = G__62729;
i__61880_62680 = G__62730;
continue;
} else {
var child_struct_62731 = cljs.core.first(seq__61876_62725__$1);
if((!((child_struct_62731 == null)))){
if(typeof child_struct_62731 === 'string'){
var text_62732 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_62732),child_struct_62731].join(''));
} else {
var children_62733 = shadow.dom.svg_node(child_struct_62731);
if(cljs.core.seq_QMARK_(children_62733)){
var seq__61940_62734 = cljs.core.seq(children_62733);
var chunk__61942_62735 = null;
var count__61943_62736 = (0);
var i__61944_62737 = (0);
while(true){
if((i__61944_62737 < count__61943_62736)){
var child_62739 = chunk__61942_62735.cljs$core$IIndexed$_nth$arity$2(null,i__61944_62737);
if(cljs.core.truth_(child_62739)){
node.appendChild(child_62739);


var G__62743 = seq__61940_62734;
var G__62744 = chunk__61942_62735;
var G__62745 = count__61943_62736;
var G__62746 = (i__61944_62737 + (1));
seq__61940_62734 = G__62743;
chunk__61942_62735 = G__62744;
count__61943_62736 = G__62745;
i__61944_62737 = G__62746;
continue;
} else {
var G__62747 = seq__61940_62734;
var G__62748 = chunk__61942_62735;
var G__62749 = count__61943_62736;
var G__62750 = (i__61944_62737 + (1));
seq__61940_62734 = G__62747;
chunk__61942_62735 = G__62748;
count__61943_62736 = G__62749;
i__61944_62737 = G__62750;
continue;
}
} else {
var temp__5735__auto___62751__$1 = cljs.core.seq(seq__61940_62734);
if(temp__5735__auto___62751__$1){
var seq__61940_62752__$1 = temp__5735__auto___62751__$1;
if(cljs.core.chunked_seq_QMARK_(seq__61940_62752__$1)){
var c__4556__auto___62753 = cljs.core.chunk_first(seq__61940_62752__$1);
var G__62755 = cljs.core.chunk_rest(seq__61940_62752__$1);
var G__62756 = c__4556__auto___62753;
var G__62757 = cljs.core.count(c__4556__auto___62753);
var G__62758 = (0);
seq__61940_62734 = G__62755;
chunk__61942_62735 = G__62756;
count__61943_62736 = G__62757;
i__61944_62737 = G__62758;
continue;
} else {
var child_62760 = cljs.core.first(seq__61940_62752__$1);
if(cljs.core.truth_(child_62760)){
node.appendChild(child_62760);


var G__62761 = cljs.core.next(seq__61940_62752__$1);
var G__62762 = null;
var G__62763 = (0);
var G__62764 = (0);
seq__61940_62734 = G__62761;
chunk__61942_62735 = G__62762;
count__61943_62736 = G__62763;
i__61944_62737 = G__62764;
continue;
} else {
var G__62766 = cljs.core.next(seq__61940_62752__$1);
var G__62767 = null;
var G__62768 = (0);
var G__62769 = (0);
seq__61940_62734 = G__62766;
chunk__61942_62735 = G__62767;
count__61943_62736 = G__62768;
i__61944_62737 = G__62769;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_62733);
}
}


var G__62770 = cljs.core.next(seq__61876_62725__$1);
var G__62771 = null;
var G__62772 = (0);
var G__62773 = (0);
seq__61876_62677 = G__62770;
chunk__61878_62678 = G__62771;
count__61879_62679 = G__62772;
i__61880_62680 = G__62773;
continue;
} else {
var G__62774 = cljs.core.next(seq__61876_62725__$1);
var G__62775 = null;
var G__62776 = (0);
var G__62777 = (0);
seq__61876_62677 = G__62774;
chunk__61878_62678 = G__62775;
count__61879_62679 = G__62776;
i__61880_62680 = G__62777;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

goog.object.set(shadow.dom._to_svg,"string",(function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

goog.object.set(shadow.dom._to_svg,"null",(function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___62781 = arguments.length;
var i__4737__auto___62783 = (0);
while(true){
if((i__4737__auto___62783 < len__4736__auto___62781)){
args__4742__auto__.push((arguments[i__4737__auto___62783]));

var G__62784 = (i__4737__auto___62783 + (1));
i__4737__auto___62783 = G__62784;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq62162){
var G__62163 = cljs.core.first(seq62162);
var seq62162__$1 = cljs.core.next(seq62162);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__62163,seq62162__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__62172 = arguments.length;
switch (G__62172) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4115__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4115__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4115__auto__;
}
})())){
var c__56877__auto___62800 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56878__auto__ = (function (){var switch__56774__auto__ = (function (state_62203){
var state_val_62204 = (state_62203[(1)]);
if((state_val_62204 === (1))){
var state_62203__$1 = state_62203;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_62203__$1,(2),once_or_cleanup);
} else {
if((state_val_62204 === (2))){
var inst_62200 = (state_62203[(2)]);
var inst_62201 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_62203__$1 = (function (){var statearr_62205 = state_62203;
(statearr_62205[(7)] = inst_62200);

return statearr_62205;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_62203__$1,inst_62201);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__56775__auto__ = null;
var shadow$dom$state_machine__56775__auto____0 = (function (){
var statearr_62207 = [null,null,null,null,null,null,null,null];
(statearr_62207[(0)] = shadow$dom$state_machine__56775__auto__);

(statearr_62207[(1)] = (1));

return statearr_62207;
});
var shadow$dom$state_machine__56775__auto____1 = (function (state_62203){
while(true){
var ret_value__56776__auto__ = (function (){try{while(true){
var result__56777__auto__ = switch__56774__auto__(state_62203);
if(cljs.core.keyword_identical_QMARK_(result__56777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__56777__auto__;
}
break;
}
}catch (e62208){var ex__56778__auto__ = e62208;
var statearr_62210_62809 = state_62203;
(statearr_62210_62809[(2)] = ex__56778__auto__);


if(cljs.core.seq((state_62203[(4)]))){
var statearr_62211_62812 = state_62203;
(statearr_62211_62812[(1)] = cljs.core.first((state_62203[(4)])));

} else {
throw ex__56778__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__56776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__62815 = state_62203;
state_62203 = G__62815;
continue;
} else {
return ret_value__56776__auto__;
}
break;
}
});
shadow$dom$state_machine__56775__auto__ = function(state_62203){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__56775__auto____0.call(this);
case 1:
return shadow$dom$state_machine__56775__auto____1.call(this,state_62203);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__56775__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__56775__auto____0;
shadow$dom$state_machine__56775__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__56775__auto____1;
return shadow$dom$state_machine__56775__auto__;
})()
})();
var state__56879__auto__ = (function (){var statearr_62216 = f__56878__auto__();
(statearr_62216[(6)] = c__56877__auto___62800);

return statearr_62216;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56879__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
