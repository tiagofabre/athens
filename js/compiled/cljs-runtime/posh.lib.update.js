goog.provide('posh.lib.update');
posh.lib.update.update_pull = (function posh$lib$update$update_pull(p__66875,storage_key){
var map__66876 = p__66875;
var map__66876__$1 = (((((!((map__66876 == null))))?(((((map__66876.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66876.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66876):map__66876);
var posh_tree = map__66876__$1;
var dcfg = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66876__$1,new cljs.core.Keyword(null,"dcfg","dcfg",-880371016));
var retrieve = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66876__$1,new cljs.core.Keyword(null,"retrieve","retrieve",-657129560));
var vec__66879 = storage_key;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66879,(0),null);
var poshdb = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66879,(1),null);
var pull_pattern = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66879,(2),null);
var eid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66879,(3),null);
var analysis = posh.lib.pull_analyze.pull_analyze(dcfg,cljs.core.cons(new cljs.core.Keyword(null,"patterns","patterns",1164082024),retrieve),posh.lib.db.poshdb__GT_analyze_db(posh_tree,poshdb),pull_pattern,eid);
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([analysis,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reload-patterns","reload-patterns",-1261746666),new cljs.core.Keyword(null,"patterns","patterns",1164082024).cljs$core$IFn$_invoke$arity$1(analysis),new cljs.core.Keyword(null,"reload-fn","reload-fn",-1150160860),posh.lib.update.update_pull], null)], 0)),new cljs.core.Keyword(null,"patterns","patterns",1164082024));
});
posh.lib.update.update_filter_pull = (function posh$lib$update$update_filter_pull(p__66882,storage_key){
var map__66885 = p__66882;
var map__66885__$1 = (((((!((map__66885 == null))))?(((((map__66885.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66885.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66885):map__66885);
var posh_tree = map__66885__$1;
var dcfg = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66885__$1,new cljs.core.Keyword(null,"dcfg","dcfg",-880371016));
var retrieve = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66885__$1,new cljs.core.Keyword(null,"retrieve","retrieve",-657129560));
var vec__66890 = storage_key;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66890,(0),null);
var poshdb = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66890,(1),null);
var pull_pattern = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66890,(2),null);
var eid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66890,(3),null);
var analysis = posh.lib.pull_analyze.pull_analyze(dcfg,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"patterns","patterns",1164082024),new cljs.core.Keyword(null,"ref-patterns","ref-patterns",77228294)], null),retrieve),posh.lib.db.poshdb__GT_analyze_db(posh_tree,poshdb),pull_pattern,eid);
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([analysis,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pass-patterns","pass-patterns",1090887263),cljs.core.first(cljs.core.vals(new cljs.core.Keyword(null,"patterns","patterns",1164082024).cljs$core$IFn$_invoke$arity$1(analysis))),new cljs.core.Keyword(null,"reload-patterns","reload-patterns",-1261746666),new cljs.core.Keyword(null,"ref-patterns","ref-patterns",77228294).cljs$core$IFn$_invoke$arity$1(analysis),new cljs.core.Keyword(null,"reload-fn","reload-fn",-1150160860),posh.lib.update.update_filter_pull], null)], 0)),new cljs.core.Keyword(null,"patterns","patterns",1164082024),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"ref-patterns","ref-patterns",77228294)], 0));
});
posh.lib.update.update_pull_many = (function posh$lib$update$update_pull_many(p__66893,storage_key){
var map__66894 = p__66893;
var map__66894__$1 = (((((!((map__66894 == null))))?(((((map__66894.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66894.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66894):map__66894);
var posh_tree = map__66894__$1;
var dcfg = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66894__$1,new cljs.core.Keyword(null,"dcfg","dcfg",-880371016));
var retrieve = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66894__$1,new cljs.core.Keyword(null,"retrieve","retrieve",-657129560));
var vec__66897 = storage_key;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66897,(0),null);
var poshdb = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66897,(1),null);
var pull_pattern = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66897,(2),null);
var eids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66897,(3),null);
var analysis = posh.lib.pull_analyze.pull_many_analyze(dcfg,cljs.core.cons(new cljs.core.Keyword(null,"patterns","patterns",1164082024),retrieve),posh.lib.db.poshdb__GT_analyze_db(posh_tree,poshdb),pull_pattern,eids);
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([analysis,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reload-patterns","reload-patterns",-1261746666),new cljs.core.Keyword(null,"patterns","patterns",1164082024).cljs$core$IFn$_invoke$arity$1(analysis),new cljs.core.Keyword(null,"reload-fn","reload-fn",-1150160860),posh.lib.update.update_pull_many], null)], 0)),new cljs.core.Keyword(null,"patterns","patterns",1164082024));
});
posh.lib.update.update_q_with_dbvarmap = (function posh$lib$update$update_q_with_dbvarmap(p__66909,storage_key){
var map__66913 = p__66909;
var map__66913__$1 = (((((!((map__66913 == null))))?(((((map__66913.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66913.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66913):map__66913);
var posh_tree = map__66913__$1;
var dcfg = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66913__$1,new cljs.core.Keyword(null,"dcfg","dcfg",-880371016));
var retrieve = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66913__$1,new cljs.core.Keyword(null,"retrieve","retrieve",-657129560));

var vec__66918 = storage_key;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66918,(0),null);
var query = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66918,(1),null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66918,(2),null);
var retrieve__$1 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"results","results",-1134170113),new cljs.core.Keyword(null,"simple-patterns","simple-patterns",788142763)], null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"patterns","patterns",1164082024),null], null), null),retrieve));
var qm = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1580747756,null)], null)], null),posh.lib.q_analyze.query_to_map(query)], 0));
var dbvarmap = posh.lib.q_analyze.make_dbarg_map(new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(qm),args);
var poshdbmap = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__66925){
var vec__66929 = p__66925;
var db_sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66929,(0),null);
var poshdb = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66929,(1),null);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([db_sym,posh.lib.db.poshdb__GT_analyze_db(posh_tree,poshdb)]);
}),dbvarmap));
var fixed_args = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__66932){
var vec__66933 = p__66932;
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66933,(0),null);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66933,(1),null);
var or__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(poshdbmap,sym);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return arg;
}
}),cljs.core.zipmap(new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(qm),args));
var analysis = posh.lib.q_analyze.q_analyze(dcfg,retrieve__$1,query,fixed_args);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dbvarmap","dbvarmap",491069137),dbvarmap,new cljs.core.Keyword(null,"analysis","analysis",-1362593389),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([analysis,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reload-patterns","reload-patterns",-1261746666),new cljs.core.Keyword(null,"patterns","patterns",1164082024).cljs$core$IFn$_invoke$arity$1(analysis),new cljs.core.Keyword(null,"reload-fn","reload-fn",-1150160860),posh.lib.update.update_q], null)], 0)),new cljs.core.Keyword(null,"patterns","patterns",1164082024))], null);
});
posh.lib.update.update_q = (function posh$lib$update$update_q(posh_tree,storage_key){
return new cljs.core.Keyword(null,"analysis","analysis",-1362593389).cljs$core$IFn$_invoke$arity$1(posh.lib.update.update_q_with_dbvarmap(posh_tree,storage_key));
});
posh.lib.update.reduce_entities = (function posh$lib$update$reduce_entities(r){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,xs){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc__$1,x){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc__$1,x);
}),acc,xs);
}),cljs.core.PersistentHashSet.EMPTY,r);
});
posh.lib.update.filter_q_transform_analysis = (function posh$lib$update$filter_q_transform_analysis(analysis){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([analysis,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pass-patterns","pass-patterns",1090887263),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.update.reduce_entities(new cljs.core.Keyword(null,"results","results",-1134170113).cljs$core$IFn$_invoke$arity$1(analysis))], null)], null),new cljs.core.Keyword(null,"reload-patterns","reload-patterns",-1261746666),new cljs.core.Keyword(null,"patterns","patterns",1164082024).cljs$core$IFn$_invoke$arity$1(analysis),new cljs.core.Keyword(null,"reload-fn","reload-fn",-1150160860),posh.lib.update.update_filter_q], null)], 0)),new cljs.core.Keyword(null,"results","results",-1134170113),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"patterns","patterns",1164082024)], 0));
});
posh.lib.update.update_filter_q = (function posh$lib$update$update_filter_q(posh_tree,storage_key){
return posh.lib.update.filter_q_transform_analysis(new cljs.core.Keyword(null,"analysis","analysis",-1362593389).cljs$core$IFn$_invoke$arity$1(posh.lib.update.update_q_with_dbvarmap(posh_tree,storage_key)));
});
posh.lib.update.update_posh_item = (function posh$lib$update$update_posh_item(posh_tree,storage_key){
var G__66941 = cljs.core.first(storage_key);
var G__66941__$1 = (((G__66941 instanceof cljs.core.Keyword))?G__66941.fqn:null);
switch (G__66941__$1) {
case "pull":
return posh.lib.update.update_pull(posh_tree,storage_key);

break;
case "q":
return new cljs.core.Keyword(null,"analysis","analysis",-1362593389).cljs$core$IFn$_invoke$arity$1(posh.lib.update.update_q(posh_tree,storage_key));

break;
case "filter-pull":
return posh.lib.update.update_filter_pull(posh_tree,storage_key);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__66941__$1)].join('')));

}
});

//# sourceMappingURL=posh.lib.update.js.map
