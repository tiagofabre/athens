goog.provide('re_frame.fx');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
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
 *   You cannot rely on the ordering in which effects are executed, other than that
 *   `:db` is guaranteed to be executed first.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__53207 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__53208 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__53208);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5735__auto___53343 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5735__auto___53343)){
var new_db_53344 = temp__5735__auto___53343;
var fexpr__53210_53345 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__53210_53345.cljs$core$IFn$_invoke$arity$1 ? fexpr__53210_53345.cljs$core$IFn$_invoke$arity$1(new_db_53344) : fexpr__53210_53345.call(null,new_db_53344));
} else {
}

var seq__53211 = cljs.core.seq(effects_without_db);
var chunk__53212 = null;
var count__53213 = (0);
var i__53214 = (0);
while(true){
if((i__53214 < count__53213)){
var vec__53224 = chunk__53212.cljs$core$IIndexed$_nth$arity$2(null,i__53214);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53224,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53224,(1),null);
var temp__5733__auto___53350 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___53350)){
var effect_fn_53351 = temp__5733__auto___53350;
(effect_fn_53351.cljs$core$IFn$_invoke$arity$1 ? effect_fn_53351.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_53351.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__53352 = seq__53211;
var G__53353 = chunk__53212;
var G__53354 = count__53213;
var G__53355 = (i__53214 + (1));
seq__53211 = G__53352;
chunk__53212 = G__53353;
count__53213 = G__53354;
i__53214 = G__53355;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__53211);
if(temp__5735__auto__){
var seq__53211__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__53211__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__53211__$1);
var G__53356 = cljs.core.chunk_rest(seq__53211__$1);
var G__53357 = c__4556__auto__;
var G__53358 = cljs.core.count(c__4556__auto__);
var G__53359 = (0);
seq__53211 = G__53356;
chunk__53212 = G__53357;
count__53213 = G__53358;
i__53214 = G__53359;
continue;
} else {
var vec__53235 = cljs.core.first(seq__53211__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53235,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53235,(1),null);
var temp__5733__auto___53360 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___53360)){
var effect_fn_53364 = temp__5733__auto___53360;
(effect_fn_53364.cljs$core$IFn$_invoke$arity$1 ? effect_fn_53364.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_53364.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__53365 = cljs.core.next(seq__53211__$1);
var G__53366 = null;
var G__53367 = (0);
var G__53368 = (0);
seq__53211 = G__53365;
chunk__53212 = G__53366;
count__53213 = G__53367;
i__53214 = G__53368;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__52656__auto___53369 = re_frame.interop.now();
var duration__52657__auto___53370 = (end__52656__auto___53369 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__52657__auto___53370,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__52656__auto___53369);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__53207);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5735__auto___53374 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5735__auto___53374)){
var new_db_53375 = temp__5735__auto___53374;
var fexpr__53240_53376 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__53240_53376.cljs$core$IFn$_invoke$arity$1 ? fexpr__53240_53376.cljs$core$IFn$_invoke$arity$1(new_db_53375) : fexpr__53240_53376.call(null,new_db_53375));
} else {
}

var seq__53247 = cljs.core.seq(effects_without_db);
var chunk__53248 = null;
var count__53249 = (0);
var i__53250 = (0);
while(true){
if((i__53250 < count__53249)){
var vec__53263 = chunk__53248.cljs$core$IIndexed$_nth$arity$2(null,i__53250);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53263,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53263,(1),null);
var temp__5733__auto___53377 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___53377)){
var effect_fn_53378 = temp__5733__auto___53377;
(effect_fn_53378.cljs$core$IFn$_invoke$arity$1 ? effect_fn_53378.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_53378.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__53384 = seq__53247;
var G__53385 = chunk__53248;
var G__53386 = count__53249;
var G__53387 = (i__53250 + (1));
seq__53247 = G__53384;
chunk__53248 = G__53385;
count__53249 = G__53386;
i__53250 = G__53387;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__53247);
if(temp__5735__auto__){
var seq__53247__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__53247__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__53247__$1);
var G__53389 = cljs.core.chunk_rest(seq__53247__$1);
var G__53390 = c__4556__auto__;
var G__53391 = cljs.core.count(c__4556__auto__);
var G__53392 = (0);
seq__53247 = G__53389;
chunk__53248 = G__53390;
count__53249 = G__53391;
i__53250 = G__53392;
continue;
} else {
var vec__53269 = cljs.core.first(seq__53247__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53269,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53269,(1),null);
var temp__5733__auto___53393 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___53393)){
var effect_fn_53394 = temp__5733__auto___53393;
(effect_fn_53394.cljs$core$IFn$_invoke$arity$1 ? effect_fn_53394.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_53394.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__53395 = cljs.core.next(seq__53247__$1);
var G__53396 = null;
var G__53397 = (0);
var G__53398 = (0);
seq__53247 = G__53395;
chunk__53248 = G__53396;
count__53249 = G__53397;
i__53250 = G__53398;
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
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__53273 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__53274 = null;
var count__53275 = (0);
var i__53276 = (0);
while(true){
if((i__53276 < count__53275)){
var map__53288 = chunk__53274.cljs$core$IIndexed$_nth$arity$2(null,i__53276);
var map__53288__$1 = (((((!((map__53288 == null))))?(((((map__53288.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53288.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53288):map__53288);
var effect = map__53288__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53288__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53288__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__53273,chunk__53274,count__53275,i__53276,map__53288,map__53288__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__53273,chunk__53274,count__53275,i__53276,map__53288,map__53288__$1,effect,ms,dispatch))
,ms);
}


var G__53410 = seq__53273;
var G__53411 = chunk__53274;
var G__53412 = count__53275;
var G__53413 = (i__53276 + (1));
seq__53273 = G__53410;
chunk__53274 = G__53411;
count__53275 = G__53412;
i__53276 = G__53413;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__53273);
if(temp__5735__auto__){
var seq__53273__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__53273__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__53273__$1);
var G__53414 = cljs.core.chunk_rest(seq__53273__$1);
var G__53415 = c__4556__auto__;
var G__53416 = cljs.core.count(c__4556__auto__);
var G__53417 = (0);
seq__53273 = G__53414;
chunk__53274 = G__53415;
count__53275 = G__53416;
i__53276 = G__53417;
continue;
} else {
var map__53291 = cljs.core.first(seq__53273__$1);
var map__53291__$1 = (((((!((map__53291 == null))))?(((((map__53291.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53291.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53291):map__53291);
var effect = map__53291__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53291__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53291__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__53273,chunk__53274,count__53275,i__53276,map__53291,map__53291__$1,effect,ms,dispatch,seq__53273__$1,temp__5735__auto__){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__53273,chunk__53274,count__53275,i__53276,map__53291,map__53291__$1,effect,ms,dispatch,seq__53273__$1,temp__5735__auto__))
,ms);
}


var G__53420 = cljs.core.next(seq__53273__$1);
var G__53421 = null;
var G__53422 = (0);
var G__53423 = (0);
seq__53273 = G__53420;
chunk__53274 = G__53421;
count__53275 = G__53422;
i__53276 = G__53423;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_(seq_of_effects)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type(seq_of_effects)], 0));
} else {
var seq__53299 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__53300 = null;
var count__53301 = (0);
var i__53302 = (0);
while(true){
if((i__53302 < count__53301)){
var vec__53324 = chunk__53300.cljs$core$IIndexed$_nth$arity$2(null,i__53302);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53324,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53324,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5733__auto___53433 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___53433)){
var effect_fn_53435 = temp__5733__auto___53433;
(effect_fn_53435.cljs$core$IFn$_invoke$arity$1 ? effect_fn_53435.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_53435.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__53436 = seq__53299;
var G__53437 = chunk__53300;
var G__53438 = count__53301;
var G__53439 = (i__53302 + (1));
seq__53299 = G__53436;
chunk__53300 = G__53437;
count__53301 = G__53438;
i__53302 = G__53439;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__53299);
if(temp__5735__auto__){
var seq__53299__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__53299__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__53299__$1);
var G__53440 = cljs.core.chunk_rest(seq__53299__$1);
var G__53441 = c__4556__auto__;
var G__53442 = cljs.core.count(c__4556__auto__);
var G__53443 = (0);
seq__53299 = G__53440;
chunk__53300 = G__53441;
count__53301 = G__53442;
i__53302 = G__53443;
continue;
} else {
var vec__53327 = cljs.core.first(seq__53299__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53327,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53327,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5733__auto___53444 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___53444)){
var effect_fn_53445 = temp__5733__auto___53444;
(effect_fn_53445.cljs$core$IFn$_invoke$arity$1 ? effect_fn_53445.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_53445.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__53446 = cljs.core.next(seq__53299__$1);
var G__53447 = null;
var G__53448 = (0);
var G__53449 = (0);
seq__53299 = G__53446;
chunk__53300 = G__53447;
count__53301 = G__53448;
i__53302 = G__53449;
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
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__53330 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__53331 = null;
var count__53332 = (0);
var i__53333 = (0);
while(true){
if((i__53333 < count__53332)){
var event = chunk__53331.cljs$core$IIndexed$_nth$arity$2(null,i__53333);
re_frame.router.dispatch(event);


var G__53451 = seq__53330;
var G__53452 = chunk__53331;
var G__53453 = count__53332;
var G__53454 = (i__53333 + (1));
seq__53330 = G__53451;
chunk__53331 = G__53452;
count__53332 = G__53453;
i__53333 = G__53454;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__53330);
if(temp__5735__auto__){
var seq__53330__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__53330__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__53330__$1);
var G__53457 = cljs.core.chunk_rest(seq__53330__$1);
var G__53458 = c__4556__auto__;
var G__53459 = cljs.core.count(c__4556__auto__);
var G__53460 = (0);
seq__53330 = G__53457;
chunk__53331 = G__53458;
count__53332 = G__53459;
i__53333 = G__53460;
continue;
} else {
var event = cljs.core.first(seq__53330__$1);
re_frame.router.dispatch(event);


var G__53461 = cljs.core.next(seq__53330__$1);
var G__53462 = null;
var G__53463 = (0);
var G__53464 = (0);
seq__53330 = G__53461;
chunk__53331 = G__53462;
count__53332 = G__53463;
i__53333 = G__53464;
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
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__53339 = cljs.core.seq(value);
var chunk__53340 = null;
var count__53341 = (0);
var i__53342 = (0);
while(true){
if((i__53342 < count__53341)){
var event = chunk__53340.cljs$core$IIndexed$_nth$arity$2(null,i__53342);
clear_event(event);


var G__53465 = seq__53339;
var G__53466 = chunk__53340;
var G__53467 = count__53341;
var G__53468 = (i__53342 + (1));
seq__53339 = G__53465;
chunk__53340 = G__53466;
count__53341 = G__53467;
i__53342 = G__53468;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__53339);
if(temp__5735__auto__){
var seq__53339__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__53339__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__53339__$1);
var G__53469 = cljs.core.chunk_rest(seq__53339__$1);
var G__53470 = c__4556__auto__;
var G__53471 = cljs.core.count(c__4556__auto__);
var G__53472 = (0);
seq__53339 = G__53469;
chunk__53340 = G__53470;
count__53341 = G__53471;
i__53342 = G__53472;
continue;
} else {
var event = cljs.core.first(seq__53339__$1);
clear_event(event);


var G__53473 = cljs.core.next(seq__53339__$1);
var G__53474 = null;
var G__53475 = (0);
var G__53476 = (0);
seq__53339 = G__53473;
chunk__53340 = G__53474;
count__53341 = G__53475;
i__53342 = G__53476;
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
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=re_frame.fx.js.map
