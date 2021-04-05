goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__58691,p__58692){
var map__58693 = p__58691;
var map__58693__$1 = (((((!((map__58693 == null))))?(((((map__58693.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58693.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58693):map__58693);
var svc = map__58693__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58693__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58693__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58693__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__58694 = p__58692;
var map__58694__$1 = (((((!((map__58694 == null))))?(((((map__58694.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58694.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58694):map__58694);
var msg = map__58694__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58694__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58694__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58694__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__58694__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__58716,p__58717){
var map__58718 = p__58716;
var map__58718__$1 = (((((!((map__58718 == null))))?(((((map__58718.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58718.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58718):map__58718);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58718__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__58719 = p__58717;
var map__58719__$1 = (((((!((map__58719 == null))))?(((((map__58719.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58719.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58719):map__58719);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58719__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__58756,p__58758){
var map__58765 = p__58756;
var map__58765__$1 = (((((!((map__58765 == null))))?(((((map__58765.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58765.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58765):map__58765);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58765__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58765__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__58766 = p__58758;
var map__58766__$1 = (((((!((map__58766 == null))))?(((((map__58766.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58766.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58766):map__58766);
var msg = map__58766__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__58766__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__58776,tid){
var map__58778 = p__58776;
var map__58778__$1 = (((((!((map__58778 == null))))?(((((map__58778.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58778.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58778):map__58778);
var svc = map__58778__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58778__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__58791 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__58792 = null;
var count__58793 = (0);
var i__58794 = (0);
while(true){
if((i__58794 < count__58793)){
var vec__58805 = chunk__58792.cljs$core$IIndexed$_nth$arity$2(null,i__58794);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58805,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58805,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__58844 = seq__58791;
var G__58845 = chunk__58792;
var G__58846 = count__58793;
var G__58847 = (i__58794 + (1));
seq__58791 = G__58844;
chunk__58792 = G__58845;
count__58793 = G__58846;
i__58794 = G__58847;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__58791);
if(temp__5735__auto__){
var seq__58791__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__58791__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__58791__$1);
var G__58848 = cljs.core.chunk_rest(seq__58791__$1);
var G__58849 = c__4556__auto__;
var G__58850 = cljs.core.count(c__4556__auto__);
var G__58851 = (0);
seq__58791 = G__58848;
chunk__58792 = G__58849;
count__58793 = G__58850;
i__58794 = G__58851;
continue;
} else {
var vec__58813 = cljs.core.first(seq__58791__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58813,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58813,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__58854 = cljs.core.next(seq__58791__$1);
var G__58855 = null;
var G__58856 = (0);
var G__58857 = (0);
seq__58791 = G__58854;
chunk__58792 = G__58855;
count__58793 = G__58856;
i__58794 = G__58857;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__58784_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__58784_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__58785_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__58785_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__58786_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__58786_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__58787_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__58787_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__58819){
var map__58820 = p__58819;
var map__58820__$1 = (((((!((map__58820 == null))))?(((((map__58820.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58820.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58820):map__58820);
var svc = map__58820__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58820__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58820__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
