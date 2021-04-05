goog.provide('day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx');
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx.kind) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.registrar.kinds.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
/**
 * Register the given effect `handler` for the given `id`.
 * 
 *   `id` is keyword, often namespaced.
 *   `handler` is a side-effecting function which takes a single argument and whose return
 *   value is ignored.
 * 
 *   Example Use
 *   -----------
 * 
 *   First, registration ... associate `:effect2` with a handler.
 * 
 *   (reg-fx
 *   :effect2
 *   (fn [value]
 *      ... do something side-effect-y))
 * 
 *   Then, later, if an event handler were to return this effects map ...
 * 
 *   {...
 * :effect2  [1 2]}
 * 
 * ... then the `handler` `fn` we registered previously, using `reg-fx`, will be
 * called with an argument of `[1 2]`.
 */
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx.reg_fx = (function day8$re_frame_10x$inlined_deps$re_frame$v0v11v0$re_frame$fx$reg_fx(id,handler){
return day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.registrar.register_handler(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed.
 */
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx.do_fx = day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function day8$re_frame_10x$inlined_deps$re_frame$v0v11v0$re_frame$fx$do_fx_after(context){
if(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__49194 = day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__49195 = day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__49195);

try{try{var seq__49198 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__49199 = null;
var count__49200 = (0);
var i__49201 = (0);
while(true){
if((i__49201 < count__49200)){
var vec__49219 = chunk__49199.cljs$core$IIndexed$_nth$arity$2(null,i__49201);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49219,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49219,(1),null);
var temp__5733__auto___49306 = day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___49306)){
var effect_fn_49307 = temp__5733__auto___49306;
(effect_fn_49307.cljs$core$IFn$_invoke$arity$1 ? effect_fn_49307.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_49307.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__49312 = seq__49198;
var G__49313 = chunk__49199;
var G__49314 = count__49200;
var G__49315 = (i__49201 + (1));
seq__49198 = G__49312;
chunk__49199 = G__49313;
count__49200 = G__49314;
i__49201 = G__49315;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__49198);
if(temp__5735__auto__){
var seq__49198__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49198__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__49198__$1);
var G__49320 = cljs.core.chunk_rest(seq__49198__$1);
var G__49321 = c__4556__auto__;
var G__49322 = cljs.core.count(c__4556__auto__);
var G__49323 = (0);
seq__49198 = G__49320;
chunk__49199 = G__49321;
count__49200 = G__49322;
i__49201 = G__49323;
continue;
} else {
var vec__49227 = cljs.core.first(seq__49198__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49227,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49227,(1),null);
var temp__5733__auto___49324 = day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___49324)){
var effect_fn_49325 = temp__5733__auto___49324;
(effect_fn_49325.cljs$core$IFn$_invoke$arity$1 ? effect_fn_49325.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_49325.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__49326 = cljs.core.next(seq__49198__$1);
var G__49327 = null;
var G__49328 = (0);
var G__49329 = (0);
seq__49198 = G__49326;
chunk__49199 = G__49327;
count__49200 = G__49328;
i__49201 = G__49329;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace.is_trace_enabled_QMARK_()){
var end__48843__auto___49330 = day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.interop.now();
var duration__48844__auto___49331 = (end__48843__auto___49330 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__48844__auto___49331,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.interop.now()], 0)));

day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace.run_tracing_callbacks_BANG_(end__48843__auto___49330);
} else {
}
}}finally {(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__49194);
}} else {
var seq__49231 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__49232 = null;
var count__49233 = (0);
var i__49234 = (0);
while(true){
if((i__49234 < count__49233)){
var vec__49248 = chunk__49232.cljs$core$IIndexed$_nth$arity$2(null,i__49234);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49248,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49248,(1),null);
var temp__5733__auto___49338 = day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___49338)){
var effect_fn_49339 = temp__5733__auto___49338;
(effect_fn_49339.cljs$core$IFn$_invoke$arity$1 ? effect_fn_49339.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_49339.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__49343 = seq__49231;
var G__49344 = chunk__49232;
var G__49345 = count__49233;
var G__49346 = (i__49234 + (1));
seq__49231 = G__49343;
chunk__49232 = G__49344;
count__49233 = G__49345;
i__49234 = G__49346;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__49231);
if(temp__5735__auto__){
var seq__49231__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49231__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__49231__$1);
var G__49347 = cljs.core.chunk_rest(seq__49231__$1);
var G__49348 = c__4556__auto__;
var G__49349 = cljs.core.count(c__4556__auto__);
var G__49350 = (0);
seq__49231 = G__49347;
chunk__49232 = G__49348;
count__49233 = G__49349;
i__49234 = G__49350;
continue;
} else {
var vec__49255 = cljs.core.first(seq__49231__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49255,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49255,(1),null);
var temp__5733__auto___49351 = day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___49351)){
var effect_fn_49352 = temp__5733__auto___49351;
(effect_fn_49352.cljs$core$IFn$_invoke$arity$1 ? effect_fn_49352.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_49352.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__49354 = cljs.core.next(seq__49231__$1);
var G__49355 = null;
var G__49356 = (0);
var G__49357 = (0);
seq__49231 = G__49354;
chunk__49232 = G__49355;
count__49233 = G__49356;
i__49234 = G__49357;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__49260 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__49261 = null;
var count__49262 = (0);
var i__49263 = (0);
while(true){
if((i__49263 < count__49262)){
var map__49276 = chunk__49261.cljs$core$IIndexed$_nth$arity$2(null,i__49263);
var map__49276__$1 = (((((!((map__49276 == null))))?(((((map__49276.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49276.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49276):map__49276);
var effect = map__49276__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49276__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49276__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.interop.set_timeout_BANG_(((function (seq__49260,chunk__49261,count__49262,i__49263,map__49276,map__49276__$1,effect,ms,dispatch){
return (function (){
return day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.router.dispatch(dispatch);
});})(seq__49260,chunk__49261,count__49262,i__49263,map__49276,map__49276__$1,effect,ms,dispatch))
,ms);
}


var G__49363 = seq__49260;
var G__49364 = chunk__49261;
var G__49365 = count__49262;
var G__49366 = (i__49263 + (1));
seq__49260 = G__49363;
chunk__49261 = G__49364;
count__49262 = G__49365;
i__49263 = G__49366;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__49260);
if(temp__5735__auto__){
var seq__49260__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49260__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__49260__$1);
var G__49368 = cljs.core.chunk_rest(seq__49260__$1);
var G__49369 = c__4556__auto__;
var G__49370 = cljs.core.count(c__4556__auto__);
var G__49371 = (0);
seq__49260 = G__49368;
chunk__49261 = G__49369;
count__49262 = G__49370;
i__49263 = G__49371;
continue;
} else {
var map__49278 = cljs.core.first(seq__49260__$1);
var map__49278__$1 = (((((!((map__49278 == null))))?(((((map__49278.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49278.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49278):map__49278);
var effect = map__49278__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49278__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49278__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.interop.set_timeout_BANG_(((function (seq__49260,chunk__49261,count__49262,i__49263,map__49278,map__49278__$1,effect,ms,dispatch,seq__49260__$1,temp__5735__auto__){
return (function (){
return day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.router.dispatch(dispatch);
});})(seq__49260,chunk__49261,count__49262,i__49263,map__49278,map__49278__$1,effect,ms,dispatch,seq__49260__$1,temp__5735__auto__))
,ms);
}


var G__49377 = cljs.core.next(seq__49260__$1);
var G__49378 = null;
var G__49379 = (0);
var G__49380 = (0);
seq__49260 = G__49377;
chunk__49261 = G__49378;
count__49262 = G__49379;
i__49263 = G__49380;
continue;
}
} else {
return null;
}
}
break;
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.router.dispatch(value);
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__49281 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__49282 = null;
var count__49283 = (0);
var i__49284 = (0);
while(true){
if((i__49284 < count__49283)){
var event = chunk__49282.cljs$core$IIndexed$_nth$arity$2(null,i__49284);
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.router.dispatch(event);


var G__49385 = seq__49281;
var G__49386 = chunk__49282;
var G__49387 = count__49283;
var G__49388 = (i__49284 + (1));
seq__49281 = G__49385;
chunk__49282 = G__49386;
count__49283 = G__49387;
i__49284 = G__49388;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__49281);
if(temp__5735__auto__){
var seq__49281__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49281__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__49281__$1);
var G__49389 = cljs.core.chunk_rest(seq__49281__$1);
var G__49390 = c__4556__auto__;
var G__49391 = cljs.core.count(c__4556__auto__);
var G__49392 = (0);
seq__49281 = G__49389;
chunk__49282 = G__49390;
count__49283 = G__49391;
i__49284 = G__49392;
continue;
} else {
var event = cljs.core.first(seq__49281__$1);
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.router.dispatch(event);


var G__49393 = cljs.core.next(seq__49281__$1);
var G__49394 = null;
var G__49395 = (0);
var G__49396 = (0);
seq__49281 = G__49393;
chunk__49282 = G__49394;
count__49283 = G__49395;
i__49284 = G__49396;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.registrar.clear_handlers,day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__49293 = cljs.core.seq(value);
var chunk__49294 = null;
var count__49295 = (0);
var i__49296 = (0);
while(true){
if((i__49296 < count__49295)){
var event = chunk__49294.cljs$core$IIndexed$_nth$arity$2(null,i__49296);
clear_event(event);


var G__49398 = seq__49293;
var G__49399 = chunk__49294;
var G__49400 = count__49295;
var G__49401 = (i__49296 + (1));
seq__49293 = G__49398;
chunk__49294 = G__49399;
count__49295 = G__49400;
i__49296 = G__49401;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__49293);
if(temp__5735__auto__){
var seq__49293__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49293__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__49293__$1);
var G__49402 = cljs.core.chunk_rest(seq__49293__$1);
var G__49403 = c__4556__auto__;
var G__49404 = cljs.core.count(c__4556__auto__);
var G__49405 = (0);
seq__49293 = G__49402;
chunk__49294 = G__49403;
count__49295 = G__49404;
i__49296 = G__49405;
continue;
} else {
var event = cljs.core.first(seq__49293__$1);
clear_event(event);


var G__49410 = cljs.core.next(seq__49293__$1);
var G__49411 = null;
var G__49412 = (0);
var G__49413 = (0);
seq__49293 = G__49410;
chunk__49294 = G__49411;
count__49295 = G__49412;
i__49296 = G__49413;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event(value);
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx.js.map
