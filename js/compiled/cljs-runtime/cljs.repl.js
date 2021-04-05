goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__79101){
var map__79102 = p__79101;
var map__79102__$1 = (((((!((map__79102 == null))))?(((((map__79102.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__79102.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__79102):map__79102);
var m = map__79102__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79102__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79102__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4126__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__79110_79254 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__79111_79255 = null;
var count__79112_79256 = (0);
var i__79113_79257 = (0);
while(true){
if((i__79113_79257 < count__79112_79256)){
var f_79258 = chunk__79111_79255.cljs$core$IIndexed$_nth$arity$2(null,i__79113_79257);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_79258], 0));


var G__79259 = seq__79110_79254;
var G__79260 = chunk__79111_79255;
var G__79261 = count__79112_79256;
var G__79262 = (i__79113_79257 + (1));
seq__79110_79254 = G__79259;
chunk__79111_79255 = G__79260;
count__79112_79256 = G__79261;
i__79113_79257 = G__79262;
continue;
} else {
var temp__5735__auto___79263 = cljs.core.seq(seq__79110_79254);
if(temp__5735__auto___79263){
var seq__79110_79264__$1 = temp__5735__auto___79263;
if(cljs.core.chunked_seq_QMARK_(seq__79110_79264__$1)){
var c__4556__auto___79265 = cljs.core.chunk_first(seq__79110_79264__$1);
var G__79266 = cljs.core.chunk_rest(seq__79110_79264__$1);
var G__79267 = c__4556__auto___79265;
var G__79268 = cljs.core.count(c__4556__auto___79265);
var G__79269 = (0);
seq__79110_79254 = G__79266;
chunk__79111_79255 = G__79267;
count__79112_79256 = G__79268;
i__79113_79257 = G__79269;
continue;
} else {
var f_79270 = cljs.core.first(seq__79110_79264__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_79270], 0));


var G__79271 = cljs.core.next(seq__79110_79264__$1);
var G__79272 = null;
var G__79273 = (0);
var G__79274 = (0);
seq__79110_79254 = G__79271;
chunk__79111_79255 = G__79272;
count__79112_79256 = G__79273;
i__79113_79257 = G__79274;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_79275 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_79275], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_79275)))?cljs.core.second(arglists_79275):arglists_79275)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__79114_79280 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__79115_79281 = null;
var count__79116_79282 = (0);
var i__79117_79283 = (0);
while(true){
if((i__79117_79283 < count__79116_79282)){
var vec__79130_79285 = chunk__79115_79281.cljs$core$IIndexed$_nth$arity$2(null,i__79117_79283);
var name_79286 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79130_79285,(0),null);
var map__79133_79287 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79130_79285,(1),null);
var map__79133_79288__$1 = (((((!((map__79133_79287 == null))))?(((((map__79133_79287.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__79133_79287.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__79133_79287):map__79133_79287);
var doc_79289 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79133_79288__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_79290 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79133_79288__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_79286], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_79290], 0));

if(cljs.core.truth_(doc_79289)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_79289], 0));
} else {
}


var G__79291 = seq__79114_79280;
var G__79292 = chunk__79115_79281;
var G__79293 = count__79116_79282;
var G__79294 = (i__79117_79283 + (1));
seq__79114_79280 = G__79291;
chunk__79115_79281 = G__79292;
count__79116_79282 = G__79293;
i__79117_79283 = G__79294;
continue;
} else {
var temp__5735__auto___79295 = cljs.core.seq(seq__79114_79280);
if(temp__5735__auto___79295){
var seq__79114_79296__$1 = temp__5735__auto___79295;
if(cljs.core.chunked_seq_QMARK_(seq__79114_79296__$1)){
var c__4556__auto___79297 = cljs.core.chunk_first(seq__79114_79296__$1);
var G__79298 = cljs.core.chunk_rest(seq__79114_79296__$1);
var G__79299 = c__4556__auto___79297;
var G__79300 = cljs.core.count(c__4556__auto___79297);
var G__79301 = (0);
seq__79114_79280 = G__79298;
chunk__79115_79281 = G__79299;
count__79116_79282 = G__79300;
i__79117_79283 = G__79301;
continue;
} else {
var vec__79137_79302 = cljs.core.first(seq__79114_79296__$1);
var name_79303 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79137_79302,(0),null);
var map__79140_79304 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79137_79302,(1),null);
var map__79140_79305__$1 = (((((!((map__79140_79304 == null))))?(((((map__79140_79304.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__79140_79304.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__79140_79304):map__79140_79304);
var doc_79306 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79140_79305__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_79307 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79140_79305__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_79303], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_79307], 0));

if(cljs.core.truth_(doc_79306)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_79306], 0));
} else {
}


var G__79308 = cljs.core.next(seq__79114_79296__$1);
var G__79309 = null;
var G__79310 = (0);
var G__79311 = (0);
seq__79114_79280 = G__79308;
chunk__79115_79281 = G__79309;
count__79116_79282 = G__79310;
i__79117_79283 = G__79311;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__79144 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__79145 = null;
var count__79146 = (0);
var i__79147 = (0);
while(true){
if((i__79147 < count__79146)){
var role = chunk__79145.cljs$core$IIndexed$_nth$arity$2(null,i__79147);
var temp__5735__auto___79313__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___79313__$1)){
var spec_79314 = temp__5735__auto___79313__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_79314)], 0));
} else {
}


var G__79315 = seq__79144;
var G__79316 = chunk__79145;
var G__79317 = count__79146;
var G__79318 = (i__79147 + (1));
seq__79144 = G__79315;
chunk__79145 = G__79316;
count__79146 = G__79317;
i__79147 = G__79318;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__79144);
if(temp__5735__auto____$1){
var seq__79144__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__79144__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__79144__$1);
var G__79319 = cljs.core.chunk_rest(seq__79144__$1);
var G__79320 = c__4556__auto__;
var G__79321 = cljs.core.count(c__4556__auto__);
var G__79322 = (0);
seq__79144 = G__79319;
chunk__79145 = G__79320;
count__79146 = G__79321;
i__79147 = G__79322;
continue;
} else {
var role = cljs.core.first(seq__79144__$1);
var temp__5735__auto___79323__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___79323__$2)){
var spec_79324 = temp__5735__auto___79323__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_79324)], 0));
} else {
}


var G__79325 = cljs.core.next(seq__79144__$1);
var G__79326 = null;
var G__79327 = (0);
var G__79328 = (0);
seq__79144 = G__79325;
chunk__79145 = G__79326;
count__79146 = G__79327;
i__79147 = G__79328;
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
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__79331 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__79332 = cljs.core.ex_cause(t);
via = G__79331;
t = G__79332;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__79156 = datafied_throwable;
var map__79156__$1 = (((((!((map__79156 == null))))?(((((map__79156.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__79156.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__79156):map__79156);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79156__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79156__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__79156__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__79157 = cljs.core.last(via);
var map__79157__$1 = (((((!((map__79157 == null))))?(((((map__79157.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__79157.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__79157):map__79157);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79157__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79157__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79157__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__79158 = data;
var map__79158__$1 = (((((!((map__79158 == null))))?(((((map__79158.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__79158.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__79158):map__79158);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79158__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79158__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79158__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__79159 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__79159__$1 = (((((!((map__79159 == null))))?(((((map__79159.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__79159.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__79159):map__79159);
var top_data = map__79159__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79159__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__79168 = phase;
var G__79168__$1 = (((G__79168 instanceof cljs.core.Keyword))?G__79168.fqn:null);
switch (G__79168__$1) {
case "read-source":
var map__79169 = data;
var map__79169__$1 = (((((!((map__79169 == null))))?(((((map__79169.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__79169.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__79169):map__79169);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79169__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79169__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__79172 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__79172__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__79172,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__79172);
var G__79172__$2 = (cljs.core.truth_((function (){var fexpr__79173 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__79173.cljs$core$IFn$_invoke$arity$1 ? fexpr__79173.cljs$core$IFn$_invoke$arity$1(source) : fexpr__79173.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__79172__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__79172__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__79172__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__79172__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__79175 = top_data;
var G__79175__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__79175,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__79175);
var G__79175__$2 = (cljs.core.truth_((function (){var fexpr__79176 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__79176.cljs$core$IFn$_invoke$arity$1 ? fexpr__79176.cljs$core$IFn$_invoke$arity$1(source) : fexpr__79176.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__79175__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__79175__$1);
var G__79175__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__79175__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__79175__$2);
var G__79175__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__79175__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__79175__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__79175__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__79175__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__79179 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79179,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79179,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79179,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79179,(3),null);
var G__79182 = top_data;
var G__79182__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__79182,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__79182);
var G__79182__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__79182__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__79182__$1);
var G__79182__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__79182__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__79182__$2);
var G__79182__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__79182__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__79182__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__79182__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__79182__$4;
}

break;
case "execution":
var vec__79184 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79184,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79184,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79184,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79184,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__79155_SHARP_){
var or__4126__auto__ = (p1__79155_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var fexpr__79189 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__79189.cljs$core$IFn$_invoke$arity$1 ? fexpr__79189.cljs$core$IFn$_invoke$arity$1(p1__79155_SHARP_) : fexpr__79189.call(null,p1__79155_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__79192 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__79192__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__79192,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__79192);
var G__79192__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__79192__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__79192__$1);
var G__79192__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__79192__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__79192__$2);
var G__79192__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__79192__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__79192__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__79192__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__79192__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__79168__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__79197){
var map__79198 = p__79197;
var map__79198__$1 = (((((!((map__79198 == null))))?(((((map__79198.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__79198.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__79198):map__79198);
var triage_data = map__79198__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79198__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79198__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79198__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79198__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79198__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79198__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79198__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79198__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = source;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = line;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4126__auto__ = class$;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__79203 = phase;
var G__79203__$1 = (((G__79203 instanceof cljs.core.Keyword))?G__79203.fqn:null);
switch (G__79203__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__79205 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__79206 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__79207 = loc;
var G__79208 = (cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__79209_79347 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__79210_79348 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__79211_79349 = true;
var _STAR_print_fn_STAR__temp_val__79212_79350 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__79211_79349);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__79212_79350);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__79195_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__79195_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__79210_79348);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__79209_79347);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__79205,G__79206,G__79207,G__79208) : format.call(null,G__79205,G__79206,G__79207,G__79208));

break;
case "macroexpansion":
var G__79213 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__79214 = cause_type;
var G__79215 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__79216 = loc;
var G__79217 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__79213,G__79214,G__79215,G__79216,G__79217) : format.call(null,G__79213,G__79214,G__79215,G__79216,G__79217));

break;
case "compile-syntax-check":
var G__79218 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__79219 = cause_type;
var G__79220 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__79221 = loc;
var G__79222 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__79218,G__79219,G__79220,G__79221,G__79222) : format.call(null,G__79218,G__79219,G__79220,G__79221,G__79222));

break;
case "compilation":
var G__79223 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__79224 = cause_type;
var G__79225 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__79226 = loc;
var G__79227 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__79223,G__79224,G__79225,G__79226,G__79227) : format.call(null,G__79223,G__79224,G__79225,G__79226,G__79227));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__79228 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__79229 = symbol;
var G__79230 = loc;
var G__79231 = (function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__79233_79352 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__79234_79353 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__79236_79354 = true;
var _STAR_print_fn_STAR__temp_val__79237_79355 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__79236_79354);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__79237_79355);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__79196_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__79196_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__79234_79353);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__79233_79352);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__79228,G__79229,G__79230,G__79231) : format.call(null,G__79228,G__79229,G__79230,G__79231));
} else {
var G__79240 = "Execution error%s at %s(%s).\n%s\n";
var G__79241 = cause_type;
var G__79242 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__79243 = loc;
var G__79244 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__79240,G__79241,G__79242,G__79243,G__79244) : format.call(null,G__79240,G__79241,G__79242,G__79243,G__79244));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__79203__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
