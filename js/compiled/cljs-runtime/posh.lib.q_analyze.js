goog.provide('posh.lib.q_analyze');
posh.lib.q_analyze.take_until = (function posh$lib$q_analyze$take_until(stop_at_QMARK_,ls){
if(cljs.core.truth_((function (){var or__4126__auto__ = cljs.core.empty_QMARK_(ls);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var G__64125 = cljs.core.first(ls);
return (stop_at_QMARK_.cljs$core$IFn$_invoke$arity$1 ? stop_at_QMARK_.cljs$core$IFn$_invoke$arity$1(G__64125) : stop_at_QMARK_.call(null,G__64125));
}
})())){
return cljs.core.PersistentVector.EMPTY;
} else {
return cljs.core.cons(cljs.core.first(ls),(function (){var G__64126 = stop_at_QMARK_;
var G__64127 = cljs.core.rest(ls);
return (posh.lib.q_analyze.take_until.cljs$core$IFn$_invoke$arity$2 ? posh.lib.q_analyze.take_until.cljs$core$IFn$_invoke$arity$2(G__64126,G__64127) : posh.lib.q_analyze.take_until.call(null,G__64126,G__64127));
})());
}
});
posh.lib.q_analyze.rest_at = (function posh$lib$q_analyze$rest_at(rest_at_QMARK_,ls){
while(true){
if(cljs.core.truth_((function (){var or__4126__auto__ = cljs.core.empty_QMARK_(ls);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var G__64131 = cljs.core.first(ls);
return (rest_at_QMARK_.cljs$core$IFn$_invoke$arity$1 ? rest_at_QMARK_.cljs$core$IFn$_invoke$arity$1(G__64131) : rest_at_QMARK_.call(null,G__64131));
}
})())){
return ls;
} else {
var G__65360 = rest_at_QMARK_;
var G__65361 = cljs.core.rest(ls);
rest_at_QMARK_ = G__65360;
ls = G__65361;
continue;
}
break;
}
});
posh.lib.q_analyze.split_list_at = (function posh$lib$q_analyze$split_list_at(split_at_QMARK_,ls){
if(cljs.core.empty_QMARK_(ls)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first(ls),posh.lib.q_analyze.take_until(split_at_QMARK_,posh.lib.q_analyze.take_until(split_at_QMARK_,cljs.core.rest(ls)))]),(function (){var G__64134 = split_at_QMARK_;
var G__64135 = posh.lib.q_analyze.rest_at(split_at_QMARK_,cljs.core.rest(ls));
return (posh.lib.q_analyze.split_list_at.cljs$core$IFn$_invoke$arity$2 ? posh.lib.q_analyze.split_list_at.cljs$core$IFn$_invoke$arity$2(G__64134,G__64135) : posh.lib.q_analyze.split_list_at.call(null,G__64134,G__64135));
})()], 0));
}
});
posh.lib.q_analyze.query_to_map = (function posh$lib$q_analyze$query_to_map(query){
if((!(cljs.core.map_QMARK_(query)))){
return posh.lib.q_analyze.split_list_at(cljs.core.keyword_QMARK_,query);
} else {
return query;
}
});
posh.lib.q_analyze.dbvar_QMARK_ = (function posh$lib$q_analyze$dbvar_QMARK_(x){
return (((x instanceof cljs.core.Symbol)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)),"$")));
});
posh.lib.q_analyze.qvar_QMARK_ = (function posh$lib$q_analyze$qvar_QMARK_(x){
return (((x instanceof cljs.core.Symbol)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)),"?")));
});
posh.lib.q_analyze.get_all_vars = (function posh$lib$q_analyze$get_all_vars(query){
if(cljs.core.empty_QMARK_(query)){
return cljs.core.PersistentHashSet.EMPTY;
} else {
if(cljs.core.coll_QMARK_(cljs.core.first(query))){
return clojure.set.union.cljs$core$IFn$_invoke$arity$2((function (){var G__64154 = cljs.core.first(query);
return (posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1(G__64154) : posh.lib.q_analyze.get_all_vars.call(null,G__64154));
})(),(function (){var G__64155 = cljs.core.rest(query);
return (posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1(G__64155) : posh.lib.q_analyze.get_all_vars.call(null,G__64155));
})());
} else {
if(posh.lib.q_analyze.qvar_QMARK_(cljs.core.first(query))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var G__64156 = cljs.core.rest(query);
return (posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1(G__64156) : posh.lib.q_analyze.get_all_vars.call(null,G__64156));
})(),cljs.core.first(query));
} else {
var G__64157 = cljs.core.rest(query);
return (posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1(G__64157) : posh.lib.q_analyze.get_all_vars.call(null,G__64157));

}
}
}
});
posh.lib.q_analyze.qvar_gen = (function (){var qvar_count = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((3284832));
return (function (){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(["?var",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(qvar_count,cljs.core.inc))].join(''));
});
})();
posh.lib.q_analyze.eav_QMARK_ = (function posh$lib$q_analyze$eav_QMARK_(v){
return ((cljs.core.vector_QMARK_(v)) && ((!(((cljs.core.coll_QMARK_(cljs.core.first(v))) || (cljs.core.coll_QMARK_(cljs.core.second(v))))))));
});
posh.lib.q_analyze.wildcard_QMARK_ = (function posh$lib$q_analyze$wildcard_QMARK_(s){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(s,new cljs.core.Symbol(null,"_","_",-1201019570,null));
});
posh.lib.q_analyze.normalize_eav_helper = (function posh$lib$q_analyze$normalize_eav_helper(eav,n,neweav,vars){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,(0))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"eav","eav",-1118737308),neweav,new cljs.core.Keyword(null,"vars","vars",-2046957217),vars], null);
} else {
if(cljs.core.truth_((function (){var and__4115__auto__ = cljs.core.first(eav);
if(cljs.core.truth_(and__4115__auto__)){
return (!(posh.lib.q_analyze.wildcard_QMARK_(cljs.core.first(eav))));
} else {
return and__4115__auto__;
}
})())){
var G__64165 = cljs.core.rest(eav);
var G__64166 = (n - (1));
var G__64167 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(neweav,cljs.core.first(eav));
var G__64168 = vars;
return (posh.lib.q_analyze.normalize_eav_helper.cljs$core$IFn$_invoke$arity$4 ? posh.lib.q_analyze.normalize_eav_helper.cljs$core$IFn$_invoke$arity$4(G__64165,G__64166,G__64167,G__64168) : posh.lib.q_analyze.normalize_eav_helper.call(null,G__64165,G__64166,G__64167,G__64168));
} else {
var var$ = posh.lib.q_analyze.qvar_gen();
var G__64170 = cljs.core.rest(eav);
var G__64171 = (n - (1));
var G__64172 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(neweav,var$);
var G__64173 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vars,var$);
return (posh.lib.q_analyze.normalize_eav_helper.cljs$core$IFn$_invoke$arity$4 ? posh.lib.q_analyze.normalize_eav_helper.cljs$core$IFn$_invoke$arity$4(G__64170,G__64171,G__64172,G__64173) : posh.lib.q_analyze.normalize_eav_helper.call(null,G__64170,G__64171,G__64172,G__64173));
}
}
});
posh.lib.q_analyze.normalize_eav = (function posh$lib$q_analyze$normalize_eav(eav){
var dbeav = ((posh.lib.q_analyze.dbvar_QMARK_(cljs.core.first(eav)))?eav:cljs.core.cons(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1("$"),eav));
return cljs.core.vec(cljs.core.cons(cljs.core.first(dbeav),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"eav","eav",-1118737308).cljs$core$IFn$_invoke$arity$1(posh.lib.q_analyze.normalize_eav_helper(cljs.core.rest(dbeav),(3),cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY)),cljs.core.drop.cljs$core$IFn$_invoke$arity$2((4),dbeav))));
});
posh.lib.q_analyze.normalize_all_eavs = (function posh$lib$q_analyze$normalize_all_eavs(where){
if(cljs.core.empty_QMARK_(where)){
return cljs.core.PersistentVector.EMPTY;
} else {
if(cljs.core.list_QMARK_(where)){
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.first(where)]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"or-join","or-join",591375469,null),new cljs.core.Symbol(null,"not-join","not-join",-645515756,null)], null)))){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(where),cljs.core.second(where)], null),(function (){var G__64179 = cljs.core.vec(cljs.core.drop.cljs$core$IFn$_invoke$arity$2((2),where));
return (posh.lib.q_analyze.normalize_all_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.normalize_all_eavs.cljs$core$IFn$_invoke$arity$1(G__64179) : posh.lib.q_analyze.normalize_all_eavs.call(null,G__64179));
})());
} else {
return cljs.core.cons(cljs.core.first(where),(function (){var G__64180 = cljs.core.vec(cljs.core.rest(where));
return (posh.lib.q_analyze.normalize_all_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.normalize_all_eavs.cljs$core$IFn$_invoke$arity$1(G__64180) : posh.lib.q_analyze.normalize_all_eavs.call(null,G__64180));
})());
}
} else {
if(posh.lib.q_analyze.eav_QMARK_(where)){
return posh.lib.q_analyze.normalize_eav(where);
} else {
if(((cljs.core.vector_QMARK_(where)) && (cljs.core.list_QMARK_(cljs.core.first(where))))){
return where;
} else {
if(cljs.core.coll_QMARK_(where)){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(posh.lib.q_analyze.normalize_all_eavs,where));
} else {
return where;

}
}
}
}
}
});
posh.lib.q_analyze.get_eavs = (function posh$lib$q_analyze$get_eavs(where){
if(cljs.core.empty_QMARK_(where)){
return cljs.core.PersistentVector.EMPTY;
} else {
var item = cljs.core.first(where);
if(cljs.core.seq_QMARK_(item)){
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.first(item)]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"or-join","or-join",591375469,null),new cljs.core.Symbol(null,"not-join","not-join",-645515756,null)], null)))){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var G__64186 = cljs.core.vec(cljs.core.rest(where));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__64186) : posh.lib.q_analyze.get_eavs.call(null,G__64186));
})(),(function (){var G__64187 = cljs.core.vec(cljs.core.drop.cljs$core$IFn$_invoke$arity$2((2),item));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__64187) : posh.lib.q_analyze.get_eavs.call(null,G__64187));
})());
} else {
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var G__64188 = cljs.core.vec(cljs.core.rest(where));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__64188) : posh.lib.q_analyze.get_eavs.call(null,G__64188));
})(),(function (){var G__64189 = cljs.core.vec(cljs.core.rest(item));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__64189) : posh.lib.q_analyze.get_eavs.call(null,G__64189));
})());
}
} else {
if(posh.lib.q_analyze.eav_QMARK_(item)){
return cljs.core.cons(item,(function (){var G__64190 = cljs.core.rest(where);
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__64190) : posh.lib.q_analyze.get_eavs.call(null,G__64190));
})());
} else {
if(((cljs.core.vector_QMARK_(item)) && (cljs.core.seq_QMARK_(cljs.core.first(item))))){
var ocr_64194 = cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vec(cljs.core.first(item))], null),cljs.core.rest(item)));
try{if(((cljs.core.vector_QMARK_(ocr_64194)) && ((cljs.core.count(ocr_64194) === 2)))){
try{var ocr_64194_0__64217 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_64194,(0));
if(((cljs.core.vector_QMARK_(ocr_64194_0__64217)) && ((cljs.core.count(ocr_64194_0__64217) === 5)))){
try{var ocr_64194_0__64217_0__64222 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_64194_0__64217,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_64194_0__64217_0__64222,new cljs.core.Symbol(null,"get-else","get-else",1312024065,null))){
var db = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_64194_0__64217,(1));
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_64194_0__64217,(2));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_64194_0__64217,(3));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_64194,(1));
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [db,e,a,v], null)], null),(function (){var G__64242 = cljs.core.vec(cljs.core.rest(where));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__64242) : posh.lib.q_analyze.get_eavs.call(null,G__64242));
})());
} else {
throw cljs.core.match.backtrack;

}
}catch (e64238){if((e64238 instanceof Error)){
var e__62581__auto__ = e64238;
if((e__62581__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__62581__auto__;
}
} else {
throw e64238;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e64237){if((e64237 instanceof Error)){
var e__62581__auto__ = e64237;
if((e__62581__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__62581__auto__;
}
} else {
throw e64237;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e64235){if((e64235 instanceof Error)){
var e__62581__auto__ = e64235;
if((e__62581__auto__ === cljs.core.match.backtrack)){
var G__64236 = cljs.core.vec(cljs.core.rest(where));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__64236) : posh.lib.q_analyze.get_eavs.call(null,G__64236));
} else {
throw e__62581__auto__;
}
} else {
throw e64235;

}
}} else {
var G__64243 = cljs.core.vec(cljs.core.rest(where));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__64243) : posh.lib.q_analyze.get_eavs.call(null,G__64243));

}
}
}
}
});
posh.lib.q_analyze.qm_to_query = (function posh$lib$q_analyze$qm_to_query(qm){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (xs,p__64244){
var vec__64245 = p__64244;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64245,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64245,(1),null);
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(xs,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0));
}),cljs.core.PersistentVector.EMPTY,qm);
});
posh.lib.q_analyze.create_q_datoms = (function posh$lib$q_analyze$create_q_datoms(results,eavs,vars){
return cljs.core.set(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (r){
var vs = cljs.core.zipmap(vars,r);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (eav){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__64248_SHARP_){
if(posh.lib.q_analyze.qvar_QMARK_(p1__64248_SHARP_)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(vs,p1__64248_SHARP_);
} else {
return p1__64248_SHARP_;
}
}),eav));
}),eavs);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([results], 0)));
});
posh.lib.q_analyze.count_qvars = (function posh$lib$q_analyze$count_qvars(xs){
if(cljs.core.empty_QMARK_(xs)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
if(cljs.core.coll_QMARK_(cljs.core.first(xs))){
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core._PLUS_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__64259 = cljs.core.first(xs);
return (posh.lib.q_analyze.count_qvars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.count_qvars.cljs$core$IFn$_invoke$arity$1(G__64259) : posh.lib.q_analyze.count_qvars.call(null,G__64259));
})(),(function (){var G__64260 = cljs.core.rest(xs);
return (posh.lib.q_analyze.count_qvars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.count_qvars.cljs$core$IFn$_invoke$arity$1(G__64260) : posh.lib.q_analyze.count_qvars.call(null,G__64260));
})()], 0));
} else {
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core._PLUS_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((posh.lib.q_analyze.qvar_QMARK_(cljs.core.first(xs)))?cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first(xs),(1)]):null),(function (){var G__64264 = cljs.core.rest(xs);
return (posh.lib.q_analyze.count_qvars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.count_qvars.cljs$core$IFn$_invoke$arity$1(G__64264) : posh.lib.q_analyze.count_qvars.call(null,G__64264));
})()], 0));

}
}
});
posh.lib.q_analyze.fill_qvar_set = (function posh$lib$q_analyze$fill_qvar_set(qvar,results,where){
var iter__4529__auto__ = (function posh$lib$q_analyze$fill_qvar_set_$_iter__64267(s__64268){
return (new cljs.core.LazySeq(null,(function (){
var s__64268__$1 = s__64268;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__64268__$1);
if(temp__5735__auto__){
var s__64268__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__64268__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__64268__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__64270 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__64269 = (0);
while(true){
if((i__64269 < size__4528__auto__)){
var r = cljs.core._nth(c__4527__auto__,i__64269);
cljs.core.chunk_append(b__64270,(function (){var vars = cljs.core.zipmap(where,r);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(vars,qvar);
})());

var G__65509 = (i__64269 + (1));
i__64269 = G__65509;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__64270),posh$lib$q_analyze$fill_qvar_set_$_iter__64267(cljs.core.chunk_rest(s__64268__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__64270),null);
}
} else {
var r = cljs.core.first(s__64268__$2);
return cljs.core.cons((function (){var vars = cljs.core.zipmap(where,r);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(vars,qvar);
})(),posh$lib$q_analyze$fill_qvar_set_$_iter__64267(cljs.core.rest(s__64268__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(results);
});
posh.lib.q_analyze.seq_merge_with = (function posh$lib$q_analyze$seq_merge_with(f,seq1,seq2){
if(cljs.core.empty_QMARK_(seq1)){
return cljs.core.PersistentVector.EMPTY;
} else {
return cljs.core.cons((function (){var G__64276 = cljs.core.first(seq1);
var G__64277 = cljs.core.first(seq2);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__64276,G__64277) : f.call(null,G__64276,G__64277));
})(),(function (){var G__64278 = f;
var G__64279 = cljs.core.rest(seq1);
var G__64280 = cljs.core.rest(seq2);
return (posh.lib.q_analyze.seq_merge_with.cljs$core$IFn$_invoke$arity$3 ? posh.lib.q_analyze.seq_merge_with.cljs$core$IFn$_invoke$arity$3(G__64278,G__64279,G__64280) : posh.lib.q_analyze.seq_merge_with.call(null,G__64278,G__64279,G__64280));
})());
}
});
posh.lib.q_analyze.stack_vectors = (function posh$lib$q_analyze$stack_vectors(vs){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (stacked,eav){
return posh.lib.q_analyze.seq_merge_with(cljs.core.conj,stacked,eav);
}),cljs.core.take.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.first(vs)),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY)),vs);
});
posh.lib.q_analyze.pattern_from_eav__old = (function posh$lib$q_analyze$pattern_from_eav__old(vars,p__64287){
var vec__64288 = p__64287;
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64288,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64288,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64288,(2),null);
var eav = vec__64288;
var vec__64294 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(posh.lib.q_analyze.qvar_QMARK_,eav);
var qe = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64294,(0),null);
var qa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64294,(1),null);
var qv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64294,(2),null);
var iter__4529__auto__ = (function posh$lib$q_analyze$pattern_from_eav__old_$_iter__64297(s__64298){
return (new cljs.core.LazySeq(null,(function (){
var s__64298__$1 = s__64298;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__64298__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var ee = cljs.core.first(xs__6292__auto__);
var iterys__4525__auto__ = ((function (s__64298__$1,ee,xs__6292__auto__,temp__5735__auto__,vec__64294,qe,qa,qv,vec__64288,e,a,v,eav){
return (function posh$lib$q_analyze$pattern_from_eav__old_$_iter__64297_$_iter__64299(s__64300){
return (new cljs.core.LazySeq(null,((function (s__64298__$1,ee,xs__6292__auto__,temp__5735__auto__,vec__64294,qe,qa,qv,vec__64288,e,a,v,eav){
return (function (){
var s__64300__$1 = s__64300;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__64300__$1);
if(temp__5735__auto____$1){
var xs__6292__auto____$1 = temp__5735__auto____$1;
var aa = cljs.core.first(xs__6292__auto____$1);
var iterys__4525__auto__ = ((function (s__64300__$1,s__64298__$1,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__64294,qe,qa,qv,vec__64288,e,a,v,eav){
return (function posh$lib$q_analyze$pattern_from_eav__old_$_iter__64297_$_iter__64299_$_iter__64301(s__64302){
return (new cljs.core.LazySeq(null,((function (s__64300__$1,s__64298__$1,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__64294,qe,qa,qv,vec__64288,e,a,v,eav){
return (function (){
var s__64302__$1 = s__64302;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__64302__$1);
if(temp__5735__auto____$2){
var s__64302__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__64302__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__64302__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__64304 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__64303 = (0);
while(true){
if((i__64303 < size__4528__auto__)){
var vv = cljs.core._nth(c__4527__auto__,i__64303);
if((function (){var wildcard_count = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__64303,s__64302__$1,s__64300__$1,s__64298__$1,vv,c__4527__auto__,size__4528__auto__,b__64304,s__64302__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__64294,qe,qa,qv,vec__64288,e,a,v,eav){
return (function (p1__64281_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"_","_",-1201019570,null),p1__64281_SHARP_)){
return (1);
} else {
return (0);
}
});})(i__64303,s__64302__$1,s__64300__$1,s__64298__$1,vv,c__4527__auto__,size__4528__auto__,b__64304,s__64302__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__64294,qe,qa,qv,vec__64288,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ee,aa,vv], null)));
var exposed_qvars = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__64303,s__64302__$1,s__64300__$1,s__64298__$1,wildcard_count,vv,c__4527__auto__,size__4528__auto__,b__64304,s__64302__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__64294,qe,qa,qv,vec__64288,e,a,v,eav){
return (function (p__64313){
var vec__64314 = p__64313;
var var_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64314,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64314,(1),null);
if(cljs.core.truth_((function (){var and__4115__auto__ = var_QMARK_;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(val,new cljs.core.Symbol(null,"_","_",-1201019570,null));
} else {
return and__4115__auto__;
}
})())){
return (1);
} else {
return (0);
}
});})(i__64303,s__64302__$1,s__64300__$1,s__64298__$1,wildcard_count,vv,c__4527__auto__,size__4528__auto__,b__64304,s__64302__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__64294,qe,qa,qv,vec__64288,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qe,ee], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qa,aa], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qv,vv], null)], null)));
var qvar_count = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__64303,s__64302__$1,s__64300__$1,s__64298__$1,wildcard_count,exposed_qvars,vv,c__4527__auto__,size__4528__auto__,b__64304,s__64302__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__64294,qe,qa,qv,vec__64288,e,a,v,eav){
return (function (p1__64282_SHARP_){
if(cljs.core.truth_(p1__64282_SHARP_)){
return (1);
} else {
return (0);
}
});})(i__64303,s__64302__$1,s__64300__$1,s__64298__$1,wildcard_count,exposed_qvars,vv,c__4527__auto__,size__4528__auto__,b__64304,s__64302__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__64294,qe,qa,qv,vec__64288,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [qe,qa,qv], null)));
return (((wildcard_count >= (1))) && ((((((qvar_count > (1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),exposed_qvars)))) || ((qvar_count <= (1))))) && ((wildcard_count <= qvar_count)));
})()){
cljs.core.chunk_append(b__64304,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ee,aa,vv], null));

var G__65570 = (i__64303 + (1));
i__64303 = G__65570;
continue;
} else {
var G__65571 = (i__64303 + (1));
i__64303 = G__65571;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__64304),posh$lib$q_analyze$pattern_from_eav__old_$_iter__64297_$_iter__64299_$_iter__64301(cljs.core.chunk_rest(s__64302__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__64304),null);
}
} else {
var vv = cljs.core.first(s__64302__$2);
if((function (){var wildcard_count = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (s__64302__$1,s__64300__$1,s__64298__$1,vv,s__64302__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__64294,qe,qa,qv,vec__64288,e,a,v,eav){
return (function (p1__64281_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"_","_",-1201019570,null),p1__64281_SHARP_)){
return (1);
} else {
return (0);
}
});})(s__64302__$1,s__64300__$1,s__64298__$1,vv,s__64302__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__64294,qe,qa,qv,vec__64288,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ee,aa,vv], null)));
var exposed_qvars = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (s__64302__$1,s__64300__$1,s__64298__$1,wildcard_count,vv,s__64302__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__64294,qe,qa,qv,vec__64288,e,a,v,eav){
return (function (p__64324){
var vec__64325 = p__64324;
var var_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64325,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64325,(1),null);
if(cljs.core.truth_((function (){var and__4115__auto__ = var_QMARK_;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(val,new cljs.core.Symbol(null,"_","_",-1201019570,null));
} else {
return and__4115__auto__;
}
})())){
return (1);
} else {
return (0);
}
});})(s__64302__$1,s__64300__$1,s__64298__$1,wildcard_count,vv,s__64302__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__64294,qe,qa,qv,vec__64288,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qe,ee], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qa,aa], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qv,vv], null)], null)));
var qvar_count = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (s__64302__$1,s__64300__$1,s__64298__$1,wildcard_count,exposed_qvars,vv,s__64302__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__64294,qe,qa,qv,vec__64288,e,a,v,eav){
return (function (p1__64282_SHARP_){
if(cljs.core.truth_(p1__64282_SHARP_)){
return (1);
} else {
return (0);
}
});})(s__64302__$1,s__64300__$1,s__64298__$1,wildcard_count,exposed_qvars,vv,s__64302__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__64294,qe,qa,qv,vec__64288,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [qe,qa,qv], null)));
return (((wildcard_count >= (1))) && ((((((qvar_count > (1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),exposed_qvars)))) || ((qvar_count <= (1))))) && ((wildcard_count <= qvar_count)));
})()){
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ee,aa,vv], null),posh$lib$q_analyze$pattern_from_eav__old_$_iter__64297_$_iter__64299_$_iter__64301(cljs.core.rest(s__64302__$2)));
} else {
var G__65580 = cljs.core.rest(s__64302__$2);
s__64302__$1 = G__65580;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__64300__$1,s__64298__$1,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__64294,qe,qa,qv,vec__64288,e,a,v,eav))
,null,null));
});})(s__64300__$1,s__64298__$1,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__64294,qe,qa,qv,vec__64288,e,a,v,eav))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__((cljs.core.truth_(qv)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),cljs.core.get.cljs$core$IFn$_invoke$arity$2(vars,v)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v], null))));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,posh$lib$q_analyze$pattern_from_eav__old_$_iter__64297_$_iter__64299(cljs.core.rest(s__64300__$1)));
} else {
var G__65581 = cljs.core.rest(s__64300__$1);
s__64300__$1 = G__65581;
continue;
}
} else {
return null;
}
break;
}
});})(s__64298__$1,ee,xs__6292__auto__,temp__5735__auto__,vec__64294,qe,qa,qv,vec__64288,e,a,v,eav))
,null,null));
});})(s__64298__$1,ee,xs__6292__auto__,temp__5735__auto__,vec__64294,qe,qa,qv,vec__64288,e,a,v,eav))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__((cljs.core.truth_(qa)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),cljs.core.get.cljs$core$IFn$_invoke$arity$2(vars,a)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [a], null))));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,posh$lib$q_analyze$pattern_from_eav__old_$_iter__64297(cljs.core.rest(s__64298__$1)));
} else {
var G__65584 = cljs.core.rest(s__64298__$1);
s__64298__$1 = G__65584;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__((cljs.core.truth_(qe)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),cljs.core.get.cljs$core$IFn$_invoke$arity$2(vars,e)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [e], null)));
});
posh.lib.q_analyze.get_ = (function posh$lib$q_analyze$get_(m,k){

var or__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Symbol(null,"_","_",-1201019570,null);
}
});
posh.lib.q_analyze.pattern_from_eav = (function posh$lib$q_analyze$pattern_from_eav(vars,eav){
var ocr_64341 = cljs.core.vec(eav);
var ocr_64342 = cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(posh.lib.q_analyze.qvar_QMARK_,eav));
try{if(((cljs.core.vector_QMARK_(ocr_64341)) && ((cljs.core.count(ocr_64341) === 3)))){
try{var ocr_64341_0__64386 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_64341,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_64341_0__64386,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_64341_1__64387 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_64341,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_64341_1__64387,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_64341_2__64388 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_64341,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_64341_2__64388,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e64713){if((e64713 instanceof Error)){
var e__62581__auto__ = e64713;
if((e__62581__auto__ === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(ocr_64342)) && ((cljs.core.count(ocr_64342) === 3)))){
try{var ocr_64342_2__64413 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_64342,(2));
if((ocr_64342_2__64413 === false)){
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_64341,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e64724){if((e64724 instanceof Error)){
var e__62581__auto____$1 = e64724;
if((e__62581__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_64342_2__64413 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_64342,(2));
if((ocr_64342_2__64413 === true)){
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_64341,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,v)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e64725){if((e64725 instanceof Error)){
var e__62581__auto____$2 = e64725;
if((e__62581__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__62581__auto____$2;
}
} else {
throw e64725;

}
}} else {
throw e__62581__auto____$1;
}
} else {
throw e64724;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e64714){if((e64714 instanceof Error)){
var e__62581__auto____$1 = e64714;
if((e__62581__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__62581__auto____$1;
}
} else {
throw e64714;

}
}} else {
throw e__62581__auto__;
}
} else {
throw e64713;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e64696){if((e64696 instanceof Error)){
var e__62581__auto__ = e64696;
if((e__62581__auto__ === cljs.core.match.backtrack)){
try{var ocr_64341_2__64388 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_64341,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_64341_2__64388,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{if(((cljs.core.vector_QMARK_(ocr_64342)) && ((cljs.core.count(ocr_64342) === 3)))){
try{var ocr_64342_1__64421 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_64342,(1));
if((ocr_64342_1__64421 === false)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_64341,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e64706){if((e64706 instanceof Error)){
var e__62581__auto____$1 = e64706;
if((e__62581__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_64342_1__64421 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_64342,(1));
if((ocr_64342_1__64421 === true)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_64341,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e64708){if((e64708 instanceof Error)){
var e__62581__auto____$2 = e64708;
if((e__62581__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__62581__auto____$2;
}
} else {
throw e64708;

}
}} else {
throw e__62581__auto____$1;
}
} else {
throw e64706;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e64701){if((e64701 instanceof Error)){
var e__62581__auto____$1 = e64701;
if((e__62581__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__62581__auto____$1;
}
} else {
throw e64701;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e64698){if((e64698 instanceof Error)){
var e__62581__auto____$1 = e64698;
if((e__62581__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__62581__auto____$1;
}
} else {
throw e64698;

}
}} else {
throw e__62581__auto__;
}
} else {
throw e64696;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e64514){if((e64514 instanceof Error)){
var e__62581__auto__ = e64514;
if((e__62581__auto__ === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(ocr_64342)) && ((cljs.core.count(ocr_64342) === 3)))){
try{var ocr_64342_0__64425 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_64342,(0));
if((ocr_64342_0__64425 === false)){
try{var ocr_64341_1__64387 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_64341,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_64341_1__64387,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_64341_2__64388 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_64341,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_64341_2__64388,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_64341,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e64694){if((e64694 instanceof Error)){
var e__62581__auto____$1 = e64694;
if((e__62581__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__62581__auto____$1;
}
} else {
throw e64694;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e64692){if((e64692 instanceof Error)){
var e__62581__auto____$1 = e64692;
if((e__62581__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__62581__auto____$1;
}
} else {
throw e64692;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e64523){if((e64523 instanceof Error)){
var e__62581__auto____$1 = e64523;
if((e__62581__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_64342_0__64425 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_64342,(0));
if((ocr_64342_0__64425 === true)){
try{var ocr_64341_2__64388 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_64341,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_64341_2__64388,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_64341_1__64387 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_64341,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_64341_1__64387,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_64341,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e64681){if((e64681 instanceof Error)){
var e__62581__auto____$2 = e64681;
if((e__62581__auto____$2 === cljs.core.match.backtrack)){
try{var ocr_64342_1__64426 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_64342,(1));
if((ocr_64342_1__64426 === true)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_64341,(1));
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_64341,(0));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e64682){if((e64682 instanceof Error)){
var e__62581__auto____$3 = e64682;
if((e__62581__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_64342_1__64426 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_64342,(1));
if((ocr_64342_1__64426 === false)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_64341,(1));
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_64341,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e64683){if((e64683 instanceof Error)){
var e__62581__auto____$4 = e64683;
if((e__62581__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__62581__auto____$4;
}
} else {
throw e64683;

}
}} else {
throw e__62581__auto____$3;
}
} else {
throw e64682;

}
}} else {
throw e__62581__auto____$2;
}
} else {
throw e64681;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e64680){if((e64680 instanceof Error)){
var e__62581__auto____$2 = e64680;
if((e__62581__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__62581__auto____$2;
}
} else {
throw e64680;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e64524){if((e64524 instanceof Error)){
var e__62581__auto____$2 = e64524;
if((e__62581__auto____$2 === cljs.core.match.backtrack)){
try{var ocr_64342_0__64425 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_64342,(0));
if((ocr_64342_0__64425 === false)){
try{var ocr_64342_1__64426 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_64342,(1));
if((ocr_64342_1__64426 === true)){
try{var ocr_64341_2__64388 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_64341,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_64341_2__64388,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_64341,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_64341,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,posh.lib.q_analyze.get_(vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e64676){if((e64676 instanceof Error)){
var e__62581__auto____$3 = e64676;
if((e__62581__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__62581__auto____$3;
}
} else {
throw e64676;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e64671){if((e64671 instanceof Error)){
var e__62581__auto____$3 = e64671;
if((e__62581__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_64342_1__64426 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_64342,(1));
if((ocr_64342_1__64426 === false)){
try{var ocr_64341_2__64388 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_64341,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_64341_2__64388,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_64341,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_64341,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e64673){if((e64673 instanceof Error)){
var e__62581__auto____$4 = e64673;
if((e__62581__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__62581__auto____$4;
}
} else {
throw e64673;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e64672){if((e64672 instanceof Error)){
var e__62581__auto____$4 = e64672;
if((e__62581__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__62581__auto____$4;
}
} else {
throw e64672;

}
}} else {
throw e__62581__auto____$3;
}
} else {
throw e64671;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e64525){if((e64525 instanceof Error)){
var e__62581__auto____$3 = e64525;
if((e__62581__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_64342_2__64427 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_64342,(2));
if((ocr_64342_2__64427 === true)){
try{var ocr_64342_0__64425 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_64342,(0));
if((ocr_64342_0__64425 === true)){
try{var ocr_64341_1__64387 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_64341,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_64341_1__64387,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_64341,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_64341,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,v)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e64666){if((e64666 instanceof Error)){
var e__62581__auto____$4 = e64666;
if((e__62581__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__62581__auto____$4;
}
} else {
throw e64666;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e64662){if((e64662 instanceof Error)){
var e__62581__auto____$4 = e64662;
if((e__62581__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__62581__auto____$4;
}
} else {
throw e64662;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e64527){if((e64527 instanceof Error)){
var e__62581__auto____$4 = e64527;
if((e__62581__auto____$4 === cljs.core.match.backtrack)){
try{var ocr_64342_2__64427 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_64342,(2));
if((ocr_64342_2__64427 === false)){
try{var ocr_64342_0__64425 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_64342,(0));
if((ocr_64342_0__64425 === true)){
try{var ocr_64341_1__64387 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_64341,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_64341_1__64387,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_64341,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_64341,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e64660){if((e64660 instanceof Error)){
var e__62581__auto____$5 = e64660;
if((e__62581__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__62581__auto____$5;
}
} else {
throw e64660;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e64653){if((e64653 instanceof Error)){
var e__62581__auto____$5 = e64653;
if((e__62581__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__62581__auto____$5;
}
} else {
throw e64653;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e64531){if((e64531 instanceof Error)){
var e__62581__auto____$5 = e64531;
if((e__62581__auto____$5 === cljs.core.match.backtrack)){
try{var ocr_64342_2__64427 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_64342,(2));
if((ocr_64342_2__64427 === true)){
try{var ocr_64342_0__64425 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_64342,(0));
if((ocr_64342_0__64425 === false)){
try{var ocr_64341_1__64387 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_64341,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_64341_1__64387,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_64341,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_64341,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,v)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e64636){if((e64636 instanceof Error)){
var e__62581__auto____$6 = e64636;
if((e__62581__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__62581__auto____$6;
}
} else {
throw e64636;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e64635){if((e64635 instanceof Error)){
var e__62581__auto____$6 = e64635;
if((e__62581__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__62581__auto____$6;
}
} else {
throw e64635;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e64532){if((e64532 instanceof Error)){
var e__62581__auto____$6 = e64532;
if((e__62581__auto____$6 === cljs.core.match.backtrack)){
try{var ocr_64342_2__64427 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_64342,(2));
if((ocr_64342_2__64427 === false)){
try{var ocr_64342_0__64425 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_64342,(0));
if((ocr_64342_0__64425 === false)){
try{var ocr_64341_1__64387 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_64341,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_64341_1__64387,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_64341,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_64341,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e64627){if((e64627 instanceof Error)){
var e__62581__auto____$7 = e64627;
if((e__62581__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__62581__auto____$7;
}
} else {
throw e64627;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e64626){if((e64626 instanceof Error)){
var e__62581__auto____$7 = e64626;
if((e__62581__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__62581__auto____$7;
}
} else {
throw e64626;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e64535){if((e64535 instanceof Error)){
var e__62581__auto____$7 = e64535;
if((e__62581__auto____$7 === cljs.core.match.backtrack)){
try{var ocr_64342_2__64427 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_64342,(2));
if((ocr_64342_2__64427 === true)){
try{var ocr_64342_1__64426 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_64342,(1));
if((ocr_64342_1__64426 === true)){
try{var ocr_64341_0__64386 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_64341,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_64341_0__64386,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_64341,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_64341,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,v)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e64617){if((e64617 instanceof Error)){
var e__62581__auto____$8 = e64617;
if((e__62581__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__62581__auto____$8;
}
} else {
throw e64617;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e64615){if((e64615 instanceof Error)){
var e__62581__auto____$8 = e64615;
if((e__62581__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__62581__auto____$8;
}
} else {
throw e64615;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e64536){if((e64536 instanceof Error)){
var e__62581__auto____$8 = e64536;
if((e__62581__auto____$8 === cljs.core.match.backtrack)){
try{var ocr_64342_2__64427 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_64342,(2));
if((ocr_64342_2__64427 === false)){
try{var ocr_64342_1__64426 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_64342,(1));
if((ocr_64342_1__64426 === true)){
try{var ocr_64341_0__64386 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_64341,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_64341_0__64386,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_64341,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_64341,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,a),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e64606){if((e64606 instanceof Error)){
var e__62581__auto____$9 = e64606;
if((e__62581__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__62581__auto____$9;
}
} else {
throw e64606;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e64603){if((e64603 instanceof Error)){
var e__62581__auto____$9 = e64603;
if((e__62581__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__62581__auto____$9;
}
} else {
throw e64603;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e64537){if((e64537 instanceof Error)){
var e__62581__auto____$9 = e64537;
if((e__62581__auto____$9 === cljs.core.match.backtrack)){
try{var ocr_64342_2__64427 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_64342,(2));
if((ocr_64342_2__64427 === true)){
try{var ocr_64342_1__64426 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_64342,(1));
if((ocr_64342_1__64426 === false)){
try{var ocr_64341_0__64386 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_64341,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_64341_0__64386,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_64341,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_64341,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,posh.lib.q_analyze.get_(vars,v)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e64600){if((e64600 instanceof Error)){
var e__62581__auto____$10 = e64600;
if((e__62581__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__62581__auto____$10;
}
} else {
throw e64600;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e64598){if((e64598 instanceof Error)){
var e__62581__auto____$10 = e64598;
if((e__62581__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__62581__auto____$10;
}
} else {
throw e64598;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e64538){if((e64538 instanceof Error)){
var e__62581__auto____$10 = e64538;
if((e__62581__auto____$10 === cljs.core.match.backtrack)){
try{var ocr_64342_2__64427 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_64342,(2));
if((ocr_64342_2__64427 === false)){
try{var ocr_64342_1__64426 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_64342,(1));
if((ocr_64342_1__64426 === false)){
try{var ocr_64341_0__64386 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_64341,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_64341_0__64386,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_64341,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_64341,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e64593){if((e64593 instanceof Error)){
var e__62581__auto____$11 = e64593;
if((e__62581__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__62581__auto____$11;
}
} else {
throw e64593;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e64592){if((e64592 instanceof Error)){
var e__62581__auto____$11 = e64592;
if((e__62581__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__62581__auto____$11;
}
} else {
throw e64592;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e64539){if((e64539 instanceof Error)){
var e__62581__auto____$11 = e64539;
if((e__62581__auto____$11 === cljs.core.match.backtrack)){
try{var ocr_64342_2__64427 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_64342,(2));
if((ocr_64342_2__64427 === true)){
try{var ocr_64342_0__64425 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_64342,(0));
if((ocr_64342_0__64425 === true)){
try{var ocr_64342_1__64426 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_64342,(1));
if((ocr_64342_1__64426 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_64341,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_64341,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_64341,(2));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,v)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e64588){if((e64588 instanceof Error)){
var e__62581__auto____$12 = e64588;
if((e__62581__auto____$12 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__62581__auto____$12;
}
} else {
throw e64588;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e64574){if((e64574 instanceof Error)){
var e__62581__auto____$12 = e64574;
if((e__62581__auto____$12 === cljs.core.match.backtrack)){
try{var ocr_64342_0__64425 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_64342,(0));
if((ocr_64342_0__64425 === false)){
try{var ocr_64342_1__64426 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_64342,(1));
if((ocr_64342_1__64426 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_64341,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_64341,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_64341,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,v)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,posh.lib.q_analyze.get_(vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e64585){if((e64585 instanceof Error)){
var e__62581__auto____$13 = e64585;
if((e__62581__auto____$13 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__62581__auto____$13;
}
} else {
throw e64585;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e64575){if((e64575 instanceof Error)){
var e__62581__auto____$13 = e64575;
if((e__62581__auto____$13 === cljs.core.match.backtrack)){
try{var ocr_64342_0__64425 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_64342,(0));
if((ocr_64342_0__64425 === true)){
try{var ocr_64342_1__64426 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_64342,(1));
if((ocr_64342_1__64426 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_64341,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_64341,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_64341,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,posh.lib.q_analyze.get_(vars,v)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e64579){if((e64579 instanceof Error)){
var e__62581__auto____$14 = e64579;
if((e__62581__auto____$14 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__62581__auto____$14;
}
} else {
throw e64579;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e64577){if((e64577 instanceof Error)){
var e__62581__auto____$14 = e64577;
if((e__62581__auto____$14 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__62581__auto____$14;
}
} else {
throw e64577;

}
}} else {
throw e__62581__auto____$13;
}
} else {
throw e64575;

}
}} else {
throw e__62581__auto____$12;
}
} else {
throw e64574;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e64545){if((e64545 instanceof Error)){
var e__62581__auto____$12 = e64545;
if((e__62581__auto____$12 === cljs.core.match.backtrack)){
try{var ocr_64342_2__64427 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_64342,(2));
if((ocr_64342_2__64427 === false)){
try{var ocr_64342_0__64425 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_64342,(0));
if((ocr_64342_0__64425 === true)){
try{var ocr_64342_1__64426 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_64342,(1));
if((ocr_64342_1__64426 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_64341,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_64341,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_64341,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,a),v], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e64572){if((e64572 instanceof Error)){
var e__62581__auto____$13 = e64572;
if((e__62581__auto____$13 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__62581__auto____$13;
}
} else {
throw e64572;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e64570){if((e64570 instanceof Error)){
var e__62581__auto____$13 = e64570;
if((e__62581__auto____$13 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__62581__auto____$13;
}
} else {
throw e64570;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e64546){if((e64546 instanceof Error)){
var e__62581__auto____$13 = e64546;
if((e__62581__auto____$13 === cljs.core.match.backtrack)){
try{var ocr_64342_2__64427 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_64342,(2));
if((ocr_64342_2__64427 === true)){
try{var ocr_64342_0__64425 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_64342,(0));
if((ocr_64342_0__64425 === false)){
try{var ocr_64342_1__64426 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_64342,(1));
if((ocr_64342_1__64426 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_64341,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_64341,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_64341,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e64565){if((e64565 instanceof Error)){
var e__62581__auto____$14 = e64565;
if((e__62581__auto____$14 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__62581__auto____$14;
}
} else {
throw e64565;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e64562){if((e64562 instanceof Error)){
var e__62581__auto____$14 = e64562;
if((e__62581__auto____$14 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__62581__auto____$14;
}
} else {
throw e64562;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e64547){if((e64547 instanceof Error)){
var e__62581__auto____$14 = e64547;
if((e__62581__auto____$14 === cljs.core.match.backtrack)){
try{var ocr_64342_2__64427 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_64342,(2));
if((ocr_64342_2__64427 === false)){
try{var ocr_64342_0__64425 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_64342,(0));
if((ocr_64342_0__64425 === true)){
try{var ocr_64342_1__64426 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_64342,(1));
if((ocr_64342_1__64426 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_64341,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_64341,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_64341,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e64558){if((e64558 instanceof Error)){
var e__62581__auto____$15 = e64558;
if((e__62581__auto____$15 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__62581__auto____$15;
}
} else {
throw e64558;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e64552){if((e64552 instanceof Error)){
var e__62581__auto____$15 = e64552;
if((e__62581__auto____$15 === cljs.core.match.backtrack)){
try{var ocr_64342_0__64425 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_64342,(0));
if((ocr_64342_0__64425 === false)){
try{var ocr_64342_1__64426 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_64342,(1));
if((ocr_64342_1__64426 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_64341,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_64341,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_64341,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e64556){if((e64556 instanceof Error)){
var e__62581__auto____$16 = e64556;
if((e__62581__auto____$16 === cljs.core.match.backtrack)){
try{var ocr_64342_1__64426 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_64342,(1));
if((ocr_64342_1__64426 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_64341,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_64341,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_64341,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a,v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e64557){if((e64557 instanceof Error)){
var e__62581__auto____$17 = e64557;
if((e__62581__auto____$17 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__62581__auto____$17;
}
} else {
throw e64557;

}
}} else {
throw e__62581__auto____$16;
}
} else {
throw e64556;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e64555){if((e64555 instanceof Error)){
var e__62581__auto____$16 = e64555;
if((e__62581__auto____$16 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__62581__auto____$16;
}
} else {
throw e64555;

}
}} else {
throw e__62581__auto____$15;
}
} else {
throw e64552;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e64548){if((e64548 instanceof Error)){
var e__62581__auto____$15 = e64548;
if((e__62581__auto____$15 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__62581__auto____$15;
}
} else {
throw e64548;

}
}} else {
throw e__62581__auto____$14;
}
} else {
throw e64547;

}
}} else {
throw e__62581__auto____$13;
}
} else {
throw e64546;

}
}} else {
throw e__62581__auto____$12;
}
} else {
throw e64545;

}
}} else {
throw e__62581__auto____$11;
}
} else {
throw e64539;

}
}} else {
throw e__62581__auto____$10;
}
} else {
throw e64538;

}
}} else {
throw e__62581__auto____$9;
}
} else {
throw e64537;

}
}} else {
throw e__62581__auto____$8;
}
} else {
throw e64536;

}
}} else {
throw e__62581__auto____$7;
}
} else {
throw e64535;

}
}} else {
throw e__62581__auto____$6;
}
} else {
throw e64532;

}
}} else {
throw e__62581__auto____$5;
}
} else {
throw e64531;

}
}} else {
throw e__62581__auto____$4;
}
} else {
throw e64527;

}
}} else {
throw e__62581__auto____$3;
}
} else {
throw e64525;

}
}} else {
throw e__62581__auto____$2;
}
} else {
throw e64524;

}
}} else {
throw e__62581__auto____$1;
}
} else {
throw e64523;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e64517){if((e64517 instanceof Error)){
var e__62581__auto____$1 = e64517;
if((e__62581__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__62581__auto____$1;
}
} else {
throw e64517;

}
}} else {
throw e__62581__auto__;
}
} else {
throw e64514;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e64506){if((e64506 instanceof Error)){
var e__62581__auto__ = e64506;
if((e__62581__auto__ === cljs.core.match.backtrack)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null);
} else {
throw e__62581__auto__;
}
} else {
throw e64506;

}
}});
posh.lib.q_analyze.filter_pattern_from_eav = (function posh$lib$q_analyze$filter_pattern_from_eav(vars,eav){
var ocr_64743 = cljs.core.vec(eav);
var ocr_64744 = cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(posh.lib.q_analyze.qvar_QMARK_,eav));
try{if(((cljs.core.vector_QMARK_(ocr_64743)) && ((cljs.core.count(ocr_64743) === 3)))){
try{var ocr_64743_0__64782 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_64743,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_64743_0__64782,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_64743_1__64784 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_64743,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_64743_1__64784,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_64743_2__64785 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_64743,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_64743_2__64785,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
return cljs.core.PersistentVector.EMPTY;
} else {
throw cljs.core.match.backtrack;

}
}catch (e65075){if((e65075 instanceof Error)){
var e__62581__auto__ = e65075;
if((e__62581__auto__ === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(ocr_64744)) && ((cljs.core.count(ocr_64744) === 3)))){
try{var ocr_64744_2__64791 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_64744,(2));
if((ocr_64744_2__64791 === false)){
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_64743,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65079){if((e65079 instanceof Error)){
var e__62581__auto____$1 = e65079;
if((e__62581__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_64744_2__64791 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_64744,(2));
if((ocr_64744_2__64791 === true)){
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_64743,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65081){if((e65081 instanceof Error)){
var e__62581__auto____$2 = e65081;
if((e__62581__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__62581__auto____$2;
}
} else {
throw e65081;

}
}} else {
throw e__62581__auto____$1;
}
} else {
throw e65079;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65078){if((e65078 instanceof Error)){
var e__62581__auto____$1 = e65078;
if((e__62581__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__62581__auto____$1;
}
} else {
throw e65078;

}
}} else {
throw e__62581__auto__;
}
} else {
throw e65075;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65049){if((e65049 instanceof Error)){
var e__62581__auto__ = e65049;
if((e__62581__auto__ === cljs.core.match.backtrack)){
try{var ocr_64743_2__64785 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_64743,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_64743_2__64785,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{if(((cljs.core.vector_QMARK_(ocr_64744)) && ((cljs.core.count(ocr_64744) === 3)))){
try{var ocr_64744_1__64793 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_64744,(1));
if((ocr_64744_1__64793 === false)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_64743,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65060){if((e65060 instanceof Error)){
var e__62581__auto____$1 = e65060;
if((e__62581__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_64744_1__64793 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_64744,(1));
if((ocr_64744_1__64793 === true)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_64743,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65061){if((e65061 instanceof Error)){
var e__62581__auto____$2 = e65061;
if((e__62581__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__62581__auto____$2;
}
} else {
throw e65061;

}
}} else {
throw e__62581__auto____$1;
}
} else {
throw e65060;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65059){if((e65059 instanceof Error)){
var e__62581__auto____$1 = e65059;
if((e__62581__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__62581__auto____$1;
}
} else {
throw e65059;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65052){if((e65052 instanceof Error)){
var e__62581__auto____$1 = e65052;
if((e__62581__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__62581__auto____$1;
}
} else {
throw e65052;

}
}} else {
throw e__62581__auto__;
}
} else {
throw e65049;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e64867){if((e64867 instanceof Error)){
var e__62581__auto__ = e64867;
if((e__62581__auto__ === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(ocr_64744)) && ((cljs.core.count(ocr_64744) === 3)))){
try{var ocr_64744_0__64806 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_64744,(0));
if((ocr_64744_0__64806 === false)){
try{var ocr_64743_1__64784 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_64743,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_64743_1__64784,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_64743_2__64785 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_64743,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_64743_2__64785,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_64743,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65039){if((e65039 instanceof Error)){
var e__62581__auto____$1 = e65039;
if((e__62581__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__62581__auto____$1;
}
} else {
throw e65039;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65038){if((e65038 instanceof Error)){
var e__62581__auto____$1 = e65038;
if((e__62581__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__62581__auto____$1;
}
} else {
throw e65038;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e64870){if((e64870 instanceof Error)){
var e__62581__auto____$1 = e64870;
if((e__62581__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_64744_0__64806 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_64744,(0));
if((ocr_64744_0__64806 === true)){
try{var ocr_64743_2__64785 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_64743,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_64743_2__64785,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_64743_1__64784 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_64743,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_64743_1__64784,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_64743,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65025){if((e65025 instanceof Error)){
var e__62581__auto____$2 = e65025;
if((e__62581__auto____$2 === cljs.core.match.backtrack)){
try{var ocr_64744_1__64807 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_64744,(1));
if((ocr_64744_1__64807 === true)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_64743,(1));
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_64743,(0));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65026){if((e65026 instanceof Error)){
var e__62581__auto____$3 = e65026;
if((e__62581__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_64744_1__64807 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_64744,(1));
if((ocr_64744_1__64807 === false)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_64743,(1));
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_64743,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65029){if((e65029 instanceof Error)){
var e__62581__auto____$4 = e65029;
if((e__62581__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__62581__auto____$4;
}
} else {
throw e65029;

}
}} else {
throw e__62581__auto____$3;
}
} else {
throw e65026;

}
}} else {
throw e__62581__auto____$2;
}
} else {
throw e65025;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65023){if((e65023 instanceof Error)){
var e__62581__auto____$2 = e65023;
if((e__62581__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__62581__auto____$2;
}
} else {
throw e65023;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e64871){if((e64871 instanceof Error)){
var e__62581__auto____$2 = e64871;
if((e__62581__auto____$2 === cljs.core.match.backtrack)){
try{var ocr_64744_0__64806 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_64744,(0));
if((ocr_64744_0__64806 === false)){
try{var ocr_64744_1__64807 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_64744,(1));
if((ocr_64744_1__64807 === true)){
try{var ocr_64743_2__64785 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_64743,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_64743_2__64785,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_64743,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_64743,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65016){if((e65016 instanceof Error)){
var e__62581__auto____$3 = e65016;
if((e__62581__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__62581__auto____$3;
}
} else {
throw e65016;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65014){if((e65014 instanceof Error)){
var e__62581__auto____$3 = e65014;
if((e__62581__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__62581__auto____$3;
}
} else {
throw e65014;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e64872){if((e64872 instanceof Error)){
var e__62581__auto____$3 = e64872;
if((e__62581__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_64744_2__64808 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_64744,(2));
if((ocr_64744_2__64808 === true)){
try{var ocr_64744_0__64806 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_64744,(0));
if((ocr_64744_0__64806 === true)){
try{var ocr_64743_1__64784 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_64743,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_64743_1__64784,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_64743,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_64743,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65011){if((e65011 instanceof Error)){
var e__62581__auto____$4 = e65011;
if((e__62581__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__62581__auto____$4;
}
} else {
throw e65011;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65006){if((e65006 instanceof Error)){
var e__62581__auto____$4 = e65006;
if((e__62581__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__62581__auto____$4;
}
} else {
throw e65006;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e64873){if((e64873 instanceof Error)){
var e__62581__auto____$4 = e64873;
if((e__62581__auto____$4 === cljs.core.match.backtrack)){
try{var ocr_64744_2__64808 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_64744,(2));
if((ocr_64744_2__64808 === false)){
try{var ocr_64744_0__64806 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_64744,(0));
if((ocr_64744_0__64806 === true)){
try{var ocr_64743_1__64784 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_64743,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_64743_1__64784,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_64743,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_64743,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65005){if((e65005 instanceof Error)){
var e__62581__auto____$5 = e65005;
if((e__62581__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__62581__auto____$5;
}
} else {
throw e65005;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e64998){if((e64998 instanceof Error)){
var e__62581__auto____$5 = e64998;
if((e__62581__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__62581__auto____$5;
}
} else {
throw e64998;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e64874){if((e64874 instanceof Error)){
var e__62581__auto____$5 = e64874;
if((e__62581__auto____$5 === cljs.core.match.backtrack)){
try{var ocr_64744_2__64808 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_64744,(2));
if((ocr_64744_2__64808 === true)){
try{var ocr_64744_0__64806 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_64744,(0));
if((ocr_64744_0__64806 === false)){
try{var ocr_64743_1__64784 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_64743,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_64743_1__64784,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_64743,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_64743,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e64984){if((e64984 instanceof Error)){
var e__62581__auto____$6 = e64984;
if((e__62581__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__62581__auto____$6;
}
} else {
throw e64984;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e64960){if((e64960 instanceof Error)){
var e__62581__auto____$6 = e64960;
if((e__62581__auto____$6 === cljs.core.match.backtrack)){
try{var ocr_64744_1__64807 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_64744,(1));
if((ocr_64744_1__64807 === true)){
try{var ocr_64743_0__64782 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_64743,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_64743_0__64782,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_64743,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_64743,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e64969){if((e64969 instanceof Error)){
var e__62581__auto____$7 = e64969;
if((e__62581__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__62581__auto____$7;
}
} else {
throw e64969;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e64961){if((e64961 instanceof Error)){
var e__62581__auto____$7 = e64961;
if((e__62581__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__62581__auto____$7;
}
} else {
throw e64961;

}
}} else {
throw e__62581__auto____$6;
}
} else {
throw e64960;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e64879){if((e64879 instanceof Error)){
var e__62581__auto____$6 = e64879;
if((e__62581__auto____$6 === cljs.core.match.backtrack)){
try{var ocr_64744_2__64808 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_64744,(2));
if((ocr_64744_2__64808 === false)){
try{var ocr_64744_1__64807 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_64744,(1));
if((ocr_64744_1__64807 === true)){
try{var ocr_64743_0__64782 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_64743,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_64743_0__64782,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_64743,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_64743,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e64947){if((e64947 instanceof Error)){
var e__62581__auto____$7 = e64947;
if((e__62581__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__62581__auto____$7;
}
} else {
throw e64947;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e64946){if((e64946 instanceof Error)){
var e__62581__auto____$7 = e64946;
if((e__62581__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__62581__auto____$7;
}
} else {
throw e64946;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e64880){if((e64880 instanceof Error)){
var e__62581__auto____$7 = e64880;
if((e__62581__auto____$7 === cljs.core.match.backtrack)){
try{var ocr_64744_2__64808 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_64744,(2));
if((ocr_64744_2__64808 === true)){
try{var ocr_64744_1__64807 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_64744,(1));
if((ocr_64744_1__64807 === false)){
try{var ocr_64743_0__64782 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_64743,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_64743_0__64782,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_64743,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_64743,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e64937){if((e64937 instanceof Error)){
var e__62581__auto____$8 = e64937;
if((e__62581__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__62581__auto____$8;
}
} else {
throw e64937;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e64916){if((e64916 instanceof Error)){
var e__62581__auto____$8 = e64916;
if((e__62581__auto____$8 === cljs.core.match.backtrack)){
try{var ocr_64744_1__64807 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_64744,(1));
if((ocr_64744_1__64807 === true)){
try{var ocr_64744_0__64806 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_64744,(0));
if((ocr_64744_0__64806 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_64743,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_64743,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_64743,(2));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e64927){if((e64927 instanceof Error)){
var e__62581__auto____$9 = e64927;
if((e__62581__auto____$9 === cljs.core.match.backtrack)){
try{var ocr_64744_0__64806 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_64744,(0));
if((ocr_64744_0__64806 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_64743,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_64743,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_64743,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e64928){if((e64928 instanceof Error)){
var e__62581__auto____$10 = e64928;
if((e__62581__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__62581__auto____$10;
}
} else {
throw e64928;

}
}} else {
throw e__62581__auto____$9;
}
} else {
throw e64927;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e64918){if((e64918 instanceof Error)){
var e__62581__auto____$9 = e64918;
if((e__62581__auto____$9 === cljs.core.match.backtrack)){
try{var ocr_64744_1__64807 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_64744,(1));
if((ocr_64744_1__64807 === false)){
try{var ocr_64744_0__64806 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_64744,(0));
if((ocr_64744_0__64806 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_64743,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_64743,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_64743,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e64922){if((e64922 instanceof Error)){
var e__62581__auto____$10 = e64922;
if((e__62581__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__62581__auto____$10;
}
} else {
throw e64922;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e64919){if((e64919 instanceof Error)){
var e__62581__auto____$10 = e64919;
if((e__62581__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__62581__auto____$10;
}
} else {
throw e64919;

}
}} else {
throw e__62581__auto____$9;
}
} else {
throw e64918;

}
}} else {
throw e__62581__auto____$8;
}
} else {
throw e64916;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e64882){if((e64882 instanceof Error)){
var e__62581__auto____$8 = e64882;
if((e__62581__auto____$8 === cljs.core.match.backtrack)){
try{var ocr_64744_2__64808 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_64744,(2));
if((ocr_64744_2__64808 === false)){
try{var ocr_64744_0__64806 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_64744,(0));
if((ocr_64744_0__64806 === true)){
try{var ocr_64744_1__64807 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_64744,(1));
if((ocr_64744_1__64807 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_64743,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_64743,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_64743,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),v], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e64913){if((e64913 instanceof Error)){
var e__62581__auto____$9 = e64913;
if((e__62581__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__62581__auto____$9;
}
} else {
throw e64913;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e64911){if((e64911 instanceof Error)){
var e__62581__auto____$9 = e64911;
if((e__62581__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__62581__auto____$9;
}
} else {
throw e64911;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e64885){if((e64885 instanceof Error)){
var e__62581__auto____$9 = e64885;
if((e__62581__auto____$9 === cljs.core.match.backtrack)){
try{var ocr_64744_2__64808 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_64744,(2));
if((ocr_64744_2__64808 === true)){
try{var ocr_64744_0__64806 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_64744,(0));
if((ocr_64744_0__64806 === false)){
try{var ocr_64744_1__64807 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_64744,(1));
if((ocr_64744_1__64807 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_64743,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_64743,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_64743,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e64908){if((e64908 instanceof Error)){
var e__62581__auto____$10 = e64908;
if((e__62581__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__62581__auto____$10;
}
} else {
throw e64908;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e64907){if((e64907 instanceof Error)){
var e__62581__auto____$10 = e64907;
if((e__62581__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__62581__auto____$10;
}
} else {
throw e64907;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e64887){if((e64887 instanceof Error)){
var e__62581__auto____$10 = e64887;
if((e__62581__auto____$10 === cljs.core.match.backtrack)){
try{var ocr_64744_2__64808 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_64744,(2));
if((ocr_64744_2__64808 === false)){
try{var ocr_64744_0__64806 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_64744,(0));
if((ocr_64744_0__64806 === true)){
try{var ocr_64744_1__64807 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_64744,(1));
if((ocr_64744_1__64807 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_64743,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_64743,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_64743,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e64902){if((e64902 instanceof Error)){
var e__62581__auto____$11 = e64902;
if((e__62581__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__62581__auto____$11;
}
} else {
throw e64902;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e64892){if((e64892 instanceof Error)){
var e__62581__auto____$11 = e64892;
if((e__62581__auto____$11 === cljs.core.match.backtrack)){
try{var ocr_64744_0__64806 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_64744,(0));
if((ocr_64744_0__64806 === false)){
try{var ocr_64744_1__64807 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_64744,(1));
if((ocr_64744_1__64807 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_64743,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_64743,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_64743,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e64895){if((e64895 instanceof Error)){
var e__62581__auto____$12 = e64895;
if((e__62581__auto____$12 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__62581__auto____$12;
}
} else {
throw e64895;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e64893){if((e64893 instanceof Error)){
var e__62581__auto____$12 = e64893;
if((e__62581__auto____$12 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__62581__auto____$12;
}
} else {
throw e64893;

}
}} else {
throw e__62581__auto____$11;
}
} else {
throw e64892;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e64889){if((e64889 instanceof Error)){
var e__62581__auto____$11 = e64889;
if((e__62581__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__62581__auto____$11;
}
} else {
throw e64889;

}
}} else {
throw e__62581__auto____$10;
}
} else {
throw e64887;

}
}} else {
throw e__62581__auto____$9;
}
} else {
throw e64885;

}
}} else {
throw e__62581__auto____$8;
}
} else {
throw e64882;

}
}} else {
throw e__62581__auto____$7;
}
} else {
throw e64880;

}
}} else {
throw e__62581__auto____$6;
}
} else {
throw e64879;

}
}} else {
throw e__62581__auto____$5;
}
} else {
throw e64874;

}
}} else {
throw e__62581__auto____$4;
}
} else {
throw e64873;

}
}} else {
throw e__62581__auto____$3;
}
} else {
throw e64872;

}
}} else {
throw e__62581__auto____$2;
}
} else {
throw e64871;

}
}} else {
throw e__62581__auto____$1;
}
} else {
throw e64870;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e64868){if((e64868 instanceof Error)){
var e__62581__auto____$1 = e64868;
if((e__62581__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__62581__auto____$1;
}
} else {
throw e64868;

}
}} else {
throw e__62581__auto__;
}
} else {
throw e64867;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e64866){if((e64866 instanceof Error)){
var e__62581__auto__ = e64866;
if((e__62581__auto__ === cljs.core.match.backtrack)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null);
} else {
throw e__62581__auto__;
}
} else {
throw e64866;

}
}});
posh.lib.q_analyze.patterns_from_eavs = (function posh$lib$q_analyze$patterns_from_eavs(dbvarmap,vars,patterns){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__65094){
var vec__65095 = p__65094;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65095,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65095,(1),null);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"db-id","db-id",747248515).cljs$core$IFn$_invoke$arity$1((dbvarmap.cljs$core$IFn$_invoke$arity$1 ? dbvarmap.cljs$core$IFn$_invoke$arity$1(k) : dbvarmap.call(null,k))),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__65092_SHARP_){
return posh.lib.q_analyze.pattern_from_eav(vars,cljs.core.rest(p1__65092_SHARP_));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0))]);
}),cljs.core.group_by(cljs.core.first,patterns)));
});
posh.lib.q_analyze.filter_patterns_from_eavs = (function posh$lib$q_analyze$filter_patterns_from_eavs(dbvarmap,vars,patterns){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__65102){
var vec__65103 = p__65102;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65103,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65103,(1),null);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"db-id","db-id",747248515).cljs$core$IFn$_invoke$arity$1((dbvarmap.cljs$core$IFn$_invoke$arity$1 ? dbvarmap.cljs$core$IFn$_invoke$arity$1(k) : dbvarmap.call(null,k))),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__65098_SHARP_){
return posh.lib.q_analyze.filter_pattern_from_eav(vars,cljs.core.rest(p1__65098_SHARP_));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0))]);
}),cljs.core.group_by(cljs.core.first,patterns)));
});
posh.lib.q_analyze.just_qvars = (function posh$lib$q_analyze$just_qvars(ins,args){
if(cljs.core.empty_QMARK_(ins)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(((((cljs.core.first(ins) instanceof cljs.core.Symbol)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(ins))),"$"))))?null:cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first(ins),cljs.core.first(args)])),(function (){var G__65112 = cljs.core.rest(ins);
var G__65113 = cljs.core.rest(args);
return (posh.lib.q_analyze.just_qvars.cljs$core$IFn$_invoke$arity$2 ? posh.lib.q_analyze.just_qvars.cljs$core$IFn$_invoke$arity$2(G__65112,G__65113) : posh.lib.q_analyze.just_qvars.call(null,G__65112,G__65113));
})()], 0));
}
});
posh.lib.q_analyze.get_input_sets = (function posh$lib$q_analyze$get_input_sets(q_fn,ins,args){
var varmap = posh.lib.q_analyze.just_qvars(ins,args);
if((!(cljs.core.empty_QMARK_(varmap)))){
var qvars = cljs.core.vec(posh.lib.q_analyze.get_all_vars(cljs.core.keys(varmap)));
var varvals = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(q_fn,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"find","find",496279456),qvars,new cljs.core.Keyword(null,"in","in",-1531184865),cljs.core.keys(varmap)], null)),cljs.core.vals(varmap));
var varsets = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.conj),cljs.core.zipmap(qvars,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__65114_SHARP_){
return cljs.core.zipmap(qvars,p1__65114_SHARP_);
}),varvals));
return varsets;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
posh.lib.q_analyze.pull_pattern_QMARK_ = (function posh$lib$q_analyze$pull_pattern_QMARK_(x){
return ((cljs.core.coll_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(x),new cljs.core.Symbol(null,"pull","pull",779986722,null))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((3),cljs.core.count(x))));
});
posh.lib.q_analyze.replace_find_pulls = (function posh$lib$q_analyze$replace_find_pulls(qfind){

return clojure.walk.postwalk((function (x){
if(posh.lib.q_analyze.pull_pattern_QMARK_(x)){
return cljs.core.second(x);
} else {
return x;
}
}),qfind);
});
posh.lib.q_analyze.get_pull_var_pairs = (function posh$lib$q_analyze$get_pull_var_pairs(qfind){

if(cljs.core.coll_QMARK_(qfind)){
if(cljs.core.empty_QMARK_(qfind)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
if(posh.lib.q_analyze.pull_pattern_QMARK_(qfind)){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.second(qfind),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(qfind,(2))]);
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2(posh.lib.q_analyze.get_pull_var_pairs,qfind));

}
}
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
posh.lib.q_analyze.match_var_to_db = (function posh$lib$q_analyze$match_var_to_db(var$,dbvarmap,dbeavs){
while(true){
if(cljs.core.empty_QMARK_(dbeavs)){
return null;
} else {
var vec__65129 = cljs.core.first(dbeavs);
var db = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65129,(0),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65129,(1),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65129,(2),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65129,(3),null);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(var$,e)) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(var$,v)) && (posh.lib.pull_analyze.ref_QMARK_(new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1((dbvarmap.cljs$core$IFn$_invoke$arity$1 ? dbvarmap.cljs$core$IFn$_invoke$arity$1(db) : dbvarmap.call(null,db))),a)))))){
return (dbvarmap.cljs$core$IFn$_invoke$arity$1 ? dbvarmap.cljs$core$IFn$_invoke$arity$1(db) : dbvarmap.call(null,db));
} else {
var G__65841 = var$;
var G__65842 = dbvarmap;
var G__65843 = cljs.core.rest(dbeavs);
var$ = G__65841;
dbvarmap = G__65842;
dbeavs = G__65843;
continue;
}
}
break;
}
});
posh.lib.q_analyze.match_vars_to_dbs = (function posh$lib$q_analyze$match_vars_to_dbs(vars,dbvarmap,dbeavs){
if(cljs.core.empty_QMARK_(vars)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first(vars),posh.lib.q_analyze.match_var_to_db(cljs.core.first(vars),dbvarmap,dbeavs)]),(function (){var G__65134 = cljs.core.rest(vars);
var G__65135 = dbvarmap;
var G__65136 = dbeavs;
return (posh.lib.q_analyze.match_vars_to_dbs.cljs$core$IFn$_invoke$arity$3 ? posh.lib.q_analyze.match_vars_to_dbs.cljs$core$IFn$_invoke$arity$3(G__65134,G__65135,G__65136) : posh.lib.q_analyze.match_vars_to_dbs.call(null,G__65134,G__65135,G__65136));
})()], 0));
}
});
posh.lib.q_analyze.index_of = (function posh$lib$q_analyze$index_of(xs,x){
var n = (0);
var xs__$1 = xs;
while(true){
if(cljs.core.empty_QMARK_(xs__$1)){
return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(xs__$1),x)){
return n;
} else {
var G__65845 = (n + (1));
var G__65846 = cljs.core.rest(xs__$1);
n = G__65845;
xs__$1 = G__65846;
continue;

}
}
break;
}
});
posh.lib.q_analyze.db_arg_QMARK_ = (function posh$lib$q_analyze$db_arg_QMARK_(arg){
if(cljs.core.map_QMARK_(arg)){
var and__4115__auto__ = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(arg);
if(cljs.core.truth_(and__4115__auto__)){
return new cljs.core.Keyword(null,"conn","conn",278309663).cljs$core$IFn$_invoke$arity$1(arg);
} else {
return and__4115__auto__;
}
} else {
return false;
}
});
posh.lib.q_analyze.convert_args_to = (function posh$lib$q_analyze$convert_args_to(type,args){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__65140_SHARP_){
if(cljs.core.truth_(posh.lib.q_analyze.db_arg_QMARK_(p1__65140_SHARP_))){
return (type.cljs$core$IFn$_invoke$arity$1 ? type.cljs$core$IFn$_invoke$arity$1(p1__65140_SHARP_) : type.call(null,p1__65140_SHARP_));
} else {
return p1__65140_SHARP_;
}
}),args);
});
posh.lib.q_analyze.make_dbarg_map = (function posh$lib$q_analyze$make_dbarg_map(ins,args){
if(cljs.core.empty_QMARK_(ins)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((posh.lib.q_analyze.dbvar_QMARK_(cljs.core.first(ins)))?cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first(ins),cljs.core.first(args)]):null),(function (){var G__65144 = cljs.core.rest(ins);
var G__65145 = cljs.core.rest(args);
return (posh.lib.q_analyze.make_dbarg_map.cljs$core$IFn$_invoke$arity$2 ? posh.lib.q_analyze.make_dbarg_map.cljs$core$IFn$_invoke$arity$2(G__65144,G__65145) : posh.lib.q_analyze.make_dbarg_map.call(null,G__65144,G__65145));
})()], 0));
}
});
posh.lib.q_analyze.split_datoms = (function posh$lib$q_analyze$split_datoms(datoms){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__65150){
var vec__65151 = p__65150;
var db_sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65151,(0),null);
var db_datoms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65151,(1),null);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([db_sym,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,cljs.core.rest),db_datoms)]);
}),cljs.core.group_by(cljs.core.first,datoms)));
});
/**
 * Returns whether attribute identified by k is of :db/valueType :db.type/ref
 */
posh.lib.q_analyze.schema_ref_QMARK_ = (function posh$lib$q_analyze$schema_ref_QMARK_(schema,k){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079),new cljs.core.Keyword("db","valueType","db/valueType",1827971944).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(schema,k)));
});
posh.lib.q_analyze.indexes_of = (function posh$lib$q_analyze$indexes_of(e,coll){
return cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__65161_SHARP_,p2__65160_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e,p2__65160_SHARP_)){
return p1__65161_SHARP_;
} else {
return null;
}
}),coll);
});
/**
 * Returns whether var-name is used as lookup-ref inside of query's :where clauses.
 *   var-name - the symbolic variable name
 *   where - coll of where clauses
 *   schema - map of schemas with attribute names as keys
 *   Returns boolean true or false
 */
posh.lib.q_analyze.lookup_ref_QMARK_ = (function posh$lib$q_analyze$lookup_ref_QMARK_(schema,where,var_name,var_value){
if((!(cljs.core.coll_QMARK_(var_value)))){
return false;
} else {
var clause = cljs.core.first(where);
var remaining = cljs.core.rest(where);
while(true){
var pred__65177 = cljs.core._EQ_;
var expr__65178 = cljs.core.first(posh.lib.q_analyze.indexes_of(var_name,clause));
if(cljs.core.truth_((pred__65177.cljs$core$IFn$_invoke$arity$2 ? pred__65177.cljs$core$IFn$_invoke$arity$2((1),expr__65178) : pred__65177.call(null,(1),expr__65178)))){
return true;
} else {
if(cljs.core.truth_((pred__65177.cljs$core$IFn$_invoke$arity$2 ? pred__65177.cljs$core$IFn$_invoke$arity$2((3),expr__65178) : pred__65177.call(null,(3),expr__65178)))){
if(posh.lib.q_analyze.schema_ref_QMARK_(schema,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(clause,(2)))){
return true;
} else {
if(cljs.core.seq(remaining)){
var G__65851 = cljs.core.first(remaining);
var G__65852 = cljs.core.rest(remaining);
clause = G__65851;
remaining = G__65852;
continue;
} else {
return false;
}
}
} else {
if(cljs.core.seq(remaining)){
var G__65854 = cljs.core.first(remaining);
var G__65855 = cljs.core.rest(remaining);
clause = G__65854;
remaining = G__65855;
continue;
} else {
return false;
}
}
}
break;
}
}
});
/**
 * Given input-set from query, resolves any lookup-refs
 *   Inputs:
 *   entid-fn - Datomic/DS function to take lookup-ref & returns entid
 *   db - value of DB
 *   schemas - map with keys matching known schema attributes
 *   where - where clauses of query
 *   input-set - value from query :in
 */
posh.lib.q_analyze.resolve_any_idents = (function posh$lib$q_analyze$resolve_any_idents(entid_fn,db,schema,where,var_name,input_set){
return cljs.core.set((function (){var iter__4529__auto__ = (function posh$lib$q_analyze$resolve_any_idents_$_iter__65188(s__65189){
return (new cljs.core.LazySeq(null,(function (){
var s__65189__$1 = s__65189;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__65189__$1);
if(temp__5735__auto__){
var s__65189__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__65189__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__65189__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__65191 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__65190 = (0);
while(true){
if((i__65190 < size__4528__auto__)){
var var_value = cljs.core._nth(c__4527__auto__,i__65190);
cljs.core.chunk_append(b__65191,((posh.lib.q_analyze.lookup_ref_QMARK_(schema,where,var_name,var_value))?(entid_fn.cljs$core$IFn$_invoke$arity$2 ? entid_fn.cljs$core$IFn$_invoke$arity$2(db,var_value) : entid_fn.call(null,db,var_value)):var_value));

var G__65861 = (i__65190 + (1));
i__65190 = G__65861;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__65191),posh$lib$q_analyze$resolve_any_idents_$_iter__65188(cljs.core.chunk_rest(s__65189__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__65191),null);
}
} else {
var var_value = cljs.core.first(s__65189__$2);
return cljs.core.cons(((posh.lib.q_analyze.lookup_ref_QMARK_(schema,where,var_name,var_value))?(entid_fn.cljs$core$IFn$_invoke$arity$2 ? entid_fn.cljs$core$IFn$_invoke$arity$2(db,var_value) : entid_fn.call(null,db,var_value)):var_value),posh$lib$q_analyze$resolve_any_idents_$_iter__65188(cljs.core.rest(s__65189__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(input_set);
})());
});
posh.lib.q_analyze.q_analyze = (function posh$lib$q_analyze$q_analyze(dcfg,retrieve,query,args){
var qm = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1580747756,null)], null)], null),posh.lib.q_analyze.query_to_map(query)], 0));
var where = posh.lib.q_analyze.normalize_all_eavs(cljs.core.vec(new cljs.core.Keyword(null,"where","where",-2044795965).cljs$core$IFn$_invoke$arity$1(qm)));
var eavs = posh.lib.q_analyze.get_eavs(where);
var vars = cljs.core.vec(posh.lib.q_analyze.get_all_vars(eavs));
var newqm = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([qm,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"find","find",496279456),vars,new cljs.core.Keyword(null,"where","where",-2044795965),where], null)], 0));
var dbvarmap = posh.lib.q_analyze.make_dbarg_map(new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(qm),args);
var fixed_args = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__65265){
var vec__65266 = p__65265;
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65266,(0),null);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65266,(1),null);
var or__4126__auto__ = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(dbvarmap,sym));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return arg;
}
}),cljs.core.zipmap(new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(qm),args));
var r = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"q","q",689001697).cljs$core$IFn$_invoke$arity$1(dcfg),newqm),fixed_args);
var lookup_ref_patterns = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__65272){
var vec__65273 = p__65272;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65273,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65273,(1),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),a,v], null);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.every_pred.cljs$core$IFn$_invoke$arity$3(cljs.core.vector_QMARK_,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword_QMARK_,cljs.core.first),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,(2)),cljs.core.count)),args));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"datoms-t","datoms-t",1641690868),null,new cljs.core.Keyword(null,"datoms","datoms",-290874434),null], null), null),retrieve))?(function (){var datoms = posh.lib.q_analyze.split_datoms(posh.lib.q_analyze.create_q_datoms(r,eavs,vars));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"datoms","datoms",-290874434),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"datoms","datoms",-290874434),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__65278){
var vec__65279 = p__65278;
var db_sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65279,(0),null);
var db_datoms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65279,(1),null);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"db-id","db-id",747248515).cljs$core$IFn$_invoke$arity$1((dbvarmap.cljs$core$IFn$_invoke$arity$1 ? dbvarmap.cljs$core$IFn$_invoke$arity$1(db_sym) : dbvarmap.call(null,db_sym))),db_datoms]);
}),datoms))], null):null),(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"datoms-t","datoms-t",1641690868),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"datoms-t","datoms-t",1641690868),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__65284){
var vec__65288 = p__65284;
var db_sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65288,(0),null);
var db_datoms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65288,(1),null);
var db = (dbvarmap.cljs$core$IFn$_invoke$arity$1 ? dbvarmap.cljs$core$IFn$_invoke$arity$1(db_sym) : dbvarmap.call(null,db_sym));
return cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"db-id","db-id",747248515).cljs$core$IFn$_invoke$arity$1(db),posh.lib.util.t_for_datoms(new cljs.core.Keyword(null,"q","q",689001697).cljs$core$IFn$_invoke$arity$1(dcfg),new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(db),db_datoms)]);
}),datoms))], null):null)], 0));
})():null),(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"results","results",-1134170113),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"results","results",-1134170113),(function (){var G__65293 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"find","find",496279456),cljs.core.vec(new cljs.core.Keyword(null,"find","find",496279456).cljs$core$IFn$_invoke$arity$1(qm)),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [vars,new cljs.core.Symbol(null,"...","...",-1926939749,null)], null)], null)], null);
var G__65294 = cljs.core.vec(r);
var fexpr__65292 = new cljs.core.Keyword(null,"q","q",689001697).cljs$core$IFn$_invoke$arity$1(dcfg);
return (fexpr__65292.cljs$core$IFn$_invoke$arity$2 ? fexpr__65292.cljs$core$IFn$_invoke$arity$2(G__65293,G__65294) : fexpr__65292.call(null,G__65293,G__65294));
})()], null):null),(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"filter-patterns","filter-patterns",-1388353466),null,new cljs.core.Keyword(null,"patterns","patterns",1164082024),null,new cljs.core.Keyword(null,"simple-patterns","simple-patterns",788142763),null], null), null),retrieve))?(function (){var in_vars = posh.lib.q_analyze.get_input_sets(new cljs.core.Keyword(null,"q","q",689001697).cljs$core$IFn$_invoke$arity$1(dcfg),new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(qm),args);
var eavs_ins = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__65298){
var vec__65300 = p__65298;
var seq__65301 = cljs.core.seq(vec__65300);
var first__65302 = cljs.core.first(seq__65301);
var seq__65301__$1 = cljs.core.next(seq__65301);
var db = first__65302;
var eav = seq__65301__$1;
return cljs.core.vec(cljs.core.cons(db,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (var_name){
var temp__5733__auto__ = (in_vars.cljs$core$IFn$_invoke$arity$1 ? in_vars.cljs$core$IFn$_invoke$arity$1(var_name) : in_vars.call(null,var_name));
if(cljs.core.truth_(temp__5733__auto__)){
var var_value = temp__5733__auto__;
return posh.lib.q_analyze.resolve_any_idents(new cljs.core.Keyword(null,"entid","entid",1720688982).cljs$core$IFn$_invoke$arity$1(dcfg),new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(dbvarmap,db)),new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(dbvarmap,db)),where,var_name,var_value);
} else {
return var_name;
}
}),eav)));
}),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(lookup_ref_patterns,eavs));
var qvar_count = posh.lib.q_analyze.count_qvars(eavs_ins);
var linked_qvars = cljs.core.set(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__65313){
var vec__65316 = p__65313;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65316,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65316,(1),null);
if((v > (1))){
return k;
} else {
return null;
}
}),qvar_count)));
var rvars = cljs.core.zipmap(vars,posh.lib.q_analyze.stack_vectors(r));
var prepped_eavs = clojure.walk.postwalk((function (p1__65255_SHARP_){
if(((posh.lib.q_analyze.qvar_QMARK_(p1__65255_SHARP_)) && (cljs.core.not((linked_qvars.cljs$core$IFn$_invoke$arity$1 ? linked_qvars.cljs$core$IFn$_invoke$arity$1(p1__65255_SHARP_) : linked_qvars.call(null,p1__65255_SHARP_)))))){
return new cljs.core.Symbol(null,"_","_",-1201019570,null);
} else {
return p1__65255_SHARP_;
}
}),eavs_ins);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"simple-patterns","simple-patterns",788142763),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"patterns","patterns",1164082024),posh.lib.q_analyze.patterns_from_eavs(dbvarmap,rvars,clojure.walk.postwalk((function (p1__65257_SHARP_){
if(posh.lib.q_analyze.qvar_QMARK_(p1__65257_SHARP_)){
return new cljs.core.Symbol(null,"_","_",-1201019570,null);
} else {
return p1__65257_SHARP_;
}
}),eavs_ins))], null):null),(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"patterns","patterns",1164082024),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"patterns","patterns",1164082024),posh.lib.q_analyze.patterns_from_eavs(dbvarmap,rvars,prepped_eavs),new cljs.core.Keyword(null,"linked","linked",-1703156372),linked_qvars], null):null),(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"filter-patterns","filter-patterns",-1388353466),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"filter-patterns","filter-patterns",-1388353466),posh.lib.q_analyze.filter_patterns_from_eavs(dbvarmap,rvars,prepped_eavs)], null):null)], 0));
})():null)], 0));
});

//# sourceMappingURL=posh.lib.q_analyze.js.map
