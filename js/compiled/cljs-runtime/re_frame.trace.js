goog.provide('re_frame.trace');
re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(re_frame.trace.id,(0));
});
/**
 * @define {boolean}
 */
re_frame.trace.trace_enabled_QMARK_ = goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/day8/re-frame-10x#installation."], 0));
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__52702){
var map__52703 = p__52702;
var map__52703__$1 = (((((!((map__52703 == null))))?(((((map__52703.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52703.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52703):map__52703);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52703__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52703__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52703__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52703__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id(),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__4126__auto__ = child_of;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now()], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce((function re_frame$trace$tracing_cb_debounced(){
var seq__52708_52758 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__52709_52759 = null;
var count__52710_52760 = (0);
var i__52711_52761 = (0);
while(true){
if((i__52711_52761 < count__52710_52760)){
var vec__52725_52762 = chunk__52709_52759.cljs$core$IIndexed$_nth$arity$2(null,i__52711_52761);
var k_52763 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52725_52762,(0),null);
var cb_52764 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52725_52762,(1),null);
try{var G__52729_52765 = cljs.core.deref(re_frame.trace.traces);
(cb_52764.cljs$core$IFn$_invoke$arity$1 ? cb_52764.cljs$core$IFn$_invoke$arity$1(G__52729_52765) : cb_52764.call(null,G__52729_52765));
}catch (e52728){var e_52770 = e52728;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_52763,"while storing",cljs.core.deref(re_frame.trace.traces),e_52770], 0));
}

var G__52771 = seq__52708_52758;
var G__52772 = chunk__52709_52759;
var G__52773 = count__52710_52760;
var G__52774 = (i__52711_52761 + (1));
seq__52708_52758 = G__52771;
chunk__52709_52759 = G__52772;
count__52710_52760 = G__52773;
i__52711_52761 = G__52774;
continue;
} else {
var temp__5735__auto___52775 = cljs.core.seq(seq__52708_52758);
if(temp__5735__auto___52775){
var seq__52708_52779__$1 = temp__5735__auto___52775;
if(cljs.core.chunked_seq_QMARK_(seq__52708_52779__$1)){
var c__4556__auto___52780 = cljs.core.chunk_first(seq__52708_52779__$1);
var G__52781 = cljs.core.chunk_rest(seq__52708_52779__$1);
var G__52782 = c__4556__auto___52780;
var G__52783 = cljs.core.count(c__4556__auto___52780);
var G__52784 = (0);
seq__52708_52758 = G__52781;
chunk__52709_52759 = G__52782;
count__52710_52760 = G__52783;
i__52711_52761 = G__52784;
continue;
} else {
var vec__52730_52785 = cljs.core.first(seq__52708_52779__$1);
var k_52786 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52730_52785,(0),null);
var cb_52787 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52730_52785,(1),null);
try{var G__52734_52788 = cljs.core.deref(re_frame.trace.traces);
(cb_52787.cljs$core$IFn$_invoke$arity$1 ? cb_52787.cljs$core$IFn$_invoke$arity$1(G__52734_52788) : cb_52787.call(null,G__52734_52788));
}catch (e52733){var e_52789 = e52733;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_52786,"while storing",cljs.core.deref(re_frame.trace.traces),e_52789], 0));
}

var G__52793 = cljs.core.next(seq__52708_52779__$1);
var G__52794 = null;
var G__52795 = (0);
var G__52796 = (0);
seq__52708_52758 = G__52793;
chunk__52709_52759 = G__52794;
count__52710_52760 = G__52795;
i__52711_52761 = G__52796;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(re_frame.trace.next_delivery) - (25)) < now)){
(re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : re_frame.trace.schedule_debounce.call(null));

return cljs.core.reset_BANG_(re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=re_frame.trace.js.map
