goog.provide('sci.impl.interpreter');

sci.impl.interpreter.macros = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 19, [new cljs.core.Symbol(null,"macroexpand","macroexpand",1509933344,null),"null",new cljs.core.Symbol(null,"try","try",-1273693247,null),"null",new cljs.core.Symbol(null,"lazy-seq","lazy-seq",489632906,null),"null",new cljs.core.Symbol(null,"let","let",358118826,null),"null",new cljs.core.Symbol(null,"fn","fn",465265323,null),"null",new cljs.core.Symbol(null,"do","do",1686842252,null),"null",new cljs.core.Symbol(null,"in-ns","in-ns",-2089468466,null),"null",new cljs.core.Symbol(null,"defn","defn",-126010802,null),"null",new cljs.core.Symbol(null,"if","if",1181717262,null),"null",new cljs.core.Symbol(null,"or","or",1876275696,null),"null",new cljs.core.Symbol(null,"macroexpand-1","macroexpand-1",659241329,null),"null",new cljs.core.Symbol(null,"require","require",1172530194,null),"null",new cljs.core.Symbol(null,"syntax-quote","syntax-quote",407366680,null),"null",new cljs.core.Symbol(null,"set!","set!",250714521,null),"null",new cljs.core.Symbol(null,".",".",1975675962,null),"null",new cljs.core.Symbol(null,"quote","quote",1377916282,null),"null",new cljs.core.Symbol(null,"case","case",-1510733573,null),"null",new cljs.core.Symbol(null,"and","and",668631710,null),"null",new cljs.core.Symbol(null,"def","def",597100991,null),"null"], null), null);
/**
 * The and macro from clojure.core.
 */
sci.impl.interpreter.eval_and = (function sci$impl$interpreter$eval_and(ctx,args){
var args__$1 = cljs.core.seq(args);
var args__$2 = args__$1;
while(true){
if(args__$2){
var x = cljs.core.first(args__$2);
var xs = cljs.core.next(args__$2);
var v = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,x) : sci.impl.interpreter.interpret.call(null,ctx,x));
if(cljs.core.truth_(v)){
if(xs){
var G__92617 = xs;
args__$2 = G__92617;
continue;
} else {
return v;
}
} else {
return v;
}
} else {
return true;
}
break;
}
});
/**
 * The or macro from clojure.core.
 */
sci.impl.interpreter.eval_or = (function sci$impl$interpreter$eval_or(ctx,args){
var args__$1 = cljs.core.seq(args);
var args__$2 = args__$1;
while(true){
if(args__$2){
var x = cljs.core.first(args__$2);
var xs = cljs.core.next(args__$2);
var v = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,x) : sci.impl.interpreter.interpret.call(null,ctx,x));
if(cljs.core.truth_(v)){
return v;
} else {
if(xs){
var G__92618 = xs;
args__$2 = G__92618;
continue;
} else {
return v;
}
}
} else {
return null;
}
break;
}
});
/**
 * The let macro from clojure.core
 */
sci.impl.interpreter.eval_let = (function sci$impl$interpreter$eval_let(var_args){
var args__4742__auto__ = [];
var len__4736__auto___92619 = arguments.length;
var i__4737__auto___92620 = (0);
while(true){
if((i__4737__auto___92620 < len__4736__auto___92619)){
args__4742__auto__.push((arguments[i__4737__auto___92620]));

var G__92621 = (i__4737__auto___92620 + (1));
i__4737__auto___92620 = G__92621;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return sci.impl.interpreter.eval_let.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(sci.impl.interpreter.eval_let.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,let_bindings,exprs){
var ctx__$1 = (function (){var ctx__$1 = ctx;
var let_bindings__$1 = let_bindings;
while(true){
var let_name = cljs.core.first(let_bindings__$1);
var let_bindings__$2 = cljs.core.rest(let_bindings__$1);
var let_val = cljs.core.first(let_bindings__$2);
var rest_let_bindings = cljs.core.next(let_bindings__$2);
var val_tag = (function (){var temp__5735__auto__ = cljs.core.meta(let_val);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(m);
} else {
return null;
}
})();
var let_name__$1 = (cljs.core.truth_(val_tag)?cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(let_name,cljs.core.update,new cljs.core.Keyword(null,"tag","tag",-1290361223),((function (ctx__$1,let_bindings__$1,let_name,let_bindings__$2,let_val,rest_let_bindings,val_tag){
return (function (t){
if(cljs.core.truth_(t)){
return t;
} else {
return val_tag;
}
});})(ctx__$1,let_bindings__$1,let_name,let_bindings__$2,let_val,rest_let_bindings,val_tag))
):let_name);
var v = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx__$1,let_val) : sci.impl.interpreter.interpret.call(null,ctx__$1,let_val));
var ctx__$2 = cljs.core.assoc_in(ctx__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),let_name__$1], null),v);
if(cljs.core.not(rest_let_bindings)){
return ctx__$2;
} else {
var G__92622 = ctx__$2;
var G__92623 = rest_let_bindings;
ctx__$1 = G__92622;
let_bindings__$1 = G__92623;
continue;
}
break;
}
})();
if(cljs.core.truth_(exprs)){
var exprs__$1 = exprs;
while(true){
var e = cljs.core.first(exprs__$1);
var ret = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx__$1,e) : sci.impl.interpreter.interpret.call(null,ctx__$1,e));
var nexprs = cljs.core.next(exprs__$1);
if(nexprs){
var G__92624 = nexprs;
exprs__$1 = G__92624;
continue;
} else {
return ret;
}
break;
}
} else {
return null;
}
}));

(sci.impl.interpreter.eval_let.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sci.impl.interpreter.eval_let.cljs$lang$applyTo = (function (seq91857){
var G__91858 = cljs.core.first(seq91857);
var seq91857__$1 = cljs.core.next(seq91857);
var G__91859 = cljs.core.first(seq91857__$1);
var seq91857__$2 = cljs.core.next(seq91857__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__91858,G__91859,seq91857__$2);
}));

sci.impl.interpreter.eval_if = (function sci$impl$interpreter$eval_if(ctx,expr){
var cond = cljs.core.first(expr);
var expr__$1 = cljs.core.rest(expr);
var then = cljs.core.first(expr__$1);
var expr__$2 = cljs.core.rest(expr__$1);
var else$ = cljs.core.first(expr__$2);
if(cljs.core.truth_((sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,cond) : sci.impl.interpreter.interpret.call(null,ctx,cond)))){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,then) : sci.impl.interpreter.interpret.call(null,ctx,then));
} else {
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,else$) : sci.impl.interpreter.interpret.call(null,ctx,else$));
}
});
sci.impl.interpreter.eval_def = (function sci$impl$interpreter$eval_def(ctx,p__91866){
var vec__91867 = p__91866;
var _def = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91867,(0),null);
var var_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91867,(1),null);
var _QMARK_docstring = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91867,(2),null);
var _QMARK_init = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91867,(3),null);
var docstring = (cljs.core.truth_(_QMARK_init)?_QMARK_docstring:null);
var init = (cljs.core.truth_(docstring)?_QMARK_init:_QMARK_docstring);
var init__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,init) : sci.impl.interpreter.interpret.call(null,ctx,init));
var m = cljs.core.meta(var_name);
var m__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,m) : sci.impl.interpreter.interpret.call(null,ctx,m));
var cnn = sci.impl.vars.getName(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m__$1));
var assoc_in_env = (function (env){
var the_current_ns = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn], null));
var prev = cljs.core.get.cljs$core$IFn$_invoke$arity$2(the_current_ns,var_name);
var prev__$1 = (((!(sci.impl.vars.var_QMARK_(prev))))?sci.impl.vars.__GT_SciVar(prev,cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cnn),cljs.core.str.cljs$core$IFn$_invoke$arity$1(var_name)),cljs.core.meta(prev)):prev);
var v = (cljs.core.truth_((sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("sci.impl","var.unbound","sci.impl/var.unbound",-1824207647),init__$1) : sci.impl.utils.kw_identical_QMARK_.call(null,new cljs.core.Keyword("sci.impl","var.unbound","sci.impl/var.unbound",-1824207647),init__$1)))?(function (){var G__91870 = prev__$1;
cljs.core.alter_meta_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__91870,cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m__$1], 0));

return G__91870;
})():(function (){
sci.impl.vars.bindRoot(prev__$1,init__$1);

cljs.core.alter_meta_BANG_.cljs$core$IFn$_invoke$arity$variadic(prev__$1,cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m__$1], 0));

return prev__$1;
})()
);
var the_current_ns__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(the_current_ns,var_name,v);
return cljs.core.assoc_in(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn], null),the_current_ns__$1);
});
var env = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx),assoc_in_env);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn,var_name], null));
});
sci.impl.interpreter.resolve_symbol = (function sci$impl$interpreter$resolve_symbol(ctx,sym){
var bindings = ctx.get(new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var temp__5733__auto__ = cljs.core.find(bindings,sym);
if(cljs.core.truth_(temp__5733__auto__)){
var v = temp__5733__auto__;
return cljs.core.second(v);
} else {
return sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2(["Could not resolve symbol: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym),"\nks:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.keys(new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(ctx)))].join(''),sym);
}
});
sci.impl.interpreter.parse_libspec = (function sci$impl$interpreter$parse_libspec(libspec){
if(cljs.core.sequential_QMARK_(libspec)){
var vec__91871 = libspec;
var seq__91872 = cljs.core.seq(vec__91871);
var first__91873 = cljs.core.first(seq__91872);
var seq__91872__$1 = cljs.core.next(seq__91872);
var lib_name = first__91873;
var opts = seq__91872__$1;
var ret = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lib-name","lib-name",1158024282),lib_name], null);
var G__91877 = opts;
var vec__91878 = G__91877;
var seq__91879 = cljs.core.seq(vec__91878);
var first__91880 = cljs.core.first(seq__91879);
var seq__91879__$1 = cljs.core.next(seq__91879);
var opt_name = first__91880;
var first__91880__$1 = cljs.core.first(seq__91879__$1);
var seq__91879__$2 = cljs.core.next(seq__91879__$1);
var fst_opt = first__91880__$1;
var rst_opts = seq__91879__$2;
var ret__$1 = ret;
var G__91877__$1 = G__91877;
while(true){
var ret__$2 = ret__$1;
var vec__91888 = G__91877__$1;
var seq__91889 = cljs.core.seq(vec__91888);
var first__91890 = cljs.core.first(seq__91889);
var seq__91889__$1 = cljs.core.next(seq__91889);
var opt_name__$1 = first__91890;
var first__91890__$1 = cljs.core.first(seq__91889__$1);
var seq__91889__$2 = cljs.core.next(seq__91889__$1);
var fst_opt__$1 = first__91890__$1;
var rst_opts__$1 = seq__91889__$2;
if(cljs.core.not(opt_name__$1)){
return ret__$2;
} else {
var G__91891 = opt_name__$1;
var G__91891__$1 = (((G__91891 instanceof cljs.core.Keyword))?G__91891.fqn:null);
switch (G__91891__$1) {
case "as":
var G__92626 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret__$2,new cljs.core.Keyword(null,"as","as",1148689641),fst_opt__$1);
var G__92627 = rst_opts__$1;
ret__$1 = G__92626;
G__91877__$1 = G__92627;
continue;

break;
case "reload":
case "reload-all":
case "verbose":
var G__92628 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret__$2,new cljs.core.Keyword(null,"reload","reload",863702807),true);
var G__92629 = cljs.core.cons(fst_opt__$1,rst_opts__$1);
ret__$1 = G__92628;
G__91877__$1 = G__92629;
continue;

break;
case "refer":
case "rename":
case "exclude":
case "only":
var G__92630 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret__$2,opt_name__$1,fst_opt__$1);
var G__92631 = rst_opts__$1;
ret__$1 = G__92630;
G__91877__$1 = G__92631;
continue;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__91891__$1)].join('')));

}
}
break;
}
} else {
if((libspec instanceof cljs.core.Symbol)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lib-name","lib-name",1158024282),libspec], null);
} else {
throw (new Error(["Invalid libspec: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(libspec)].join('')));

}
}
});
sci.impl.interpreter.handle_refer_all = (function sci$impl$interpreter$handle_refer_all(the_current_ns,the_loaded_ns,include_sym_QMARK_,rename_sym,only){
var only__$1 = (cljs.core.truth_(only)?cljs.core.set(only):null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ns,p__91896){
var vec__91897 = p__91896;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91897,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91897,(1),null);
if(cljs.core.truth_((((k instanceof cljs.core.Symbol))?(function (){var and__4115__auto__ = (include_sym_QMARK_.cljs$core$IFn$_invoke$arity$1 ? include_sym_QMARK_.cljs$core$IFn$_invoke$arity$1(k) : include_sym_QMARK_.call(null,k));
if(cljs.core.truth_(and__4115__auto__)){
return ((cljs.core.not(only__$1)) || (cljs.core.contains_QMARK_(only__$1,k)));
} else {
return and__4115__auto__;
}
})():false))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ns,(rename_sym.cljs$core$IFn$_invoke$arity$1 ? rename_sym.cljs$core$IFn$_invoke$arity$1(k) : rename_sym.call(null,k)),v);
} else {
return ns;
}
}),the_current_ns,the_loaded_ns);
});
sci.impl.interpreter.handle_require_libspec_env = (function sci$impl$interpreter$handle_require_libspec_env(env,use_QMARK_,current_ns,the_loaded_ns,lib_name,p__91900){
var map__91901 = p__91900;
var map__91901__$1 = (((((!((map__91901 == null))))?(((((map__91901.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__91901.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__91901):map__91901);
var _parsed_libspec = map__91901__$1;
var as = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91901__$1,new cljs.core.Keyword(null,"as","as",1148689641));
var refer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91901__$1,new cljs.core.Keyword(null,"refer","refer",-964295553));
var rename = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91901__$1,new cljs.core.Keyword(null,"rename","rename",1508157613));
var exclude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91901__$1,new cljs.core.Keyword(null,"exclude","exclude",-1230250334));
var only = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91901__$1,new cljs.core.Keyword(null,"only","only",1907811652));
var the_current_ns = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),current_ns], null));
var the_current_ns__$1 = (cljs.core.truth_(as)?cljs.core.assoc_in(the_current_ns,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"aliases","aliases",1346874714),as], null),lib_name):the_current_ns);
var rename_sym = (cljs.core.truth_(rename)?(function (sym){
var or__4126__auto__ = (rename.cljs$core$IFn$_invoke$arity$1 ? rename.cljs$core$IFn$_invoke$arity$1(sym) : rename.call(null,sym));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return sym;
}
}):cljs.core.identity);
var include_sym_QMARK_ = (cljs.core.truth_(exclude)?(function (){var excludes = cljs.core.set(exclude);
return (function (sym){
return (!(cljs.core.contains_QMARK_(excludes,sym)));
});
})():cljs.core.constantly(true));
var the_current_ns__$2 = (cljs.core.truth_(refer)?(cljs.core.truth_((function (){var or__4126__auto__ = (sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"all","all",892129742),refer) : sci.impl.utils.kw_identical_QMARK_.call(null,new cljs.core.Keyword(null,"all","all",892129742),refer));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return use_QMARK_;
}
})())?sci.impl.interpreter.handle_refer_all(the_current_ns__$1,the_loaded_ns,include_sym_QMARK_,rename_sym,null):((cljs.core.sequential_QMARK_(refer))?cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ns,sym){
if(cljs.core.truth_(include_sym_QMARK_(sym))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ns,(rename_sym.cljs$core$IFn$_invoke$arity$1 ? rename_sym.cljs$core$IFn$_invoke$arity$1(sym) : rename_sym.call(null,sym)),(function (){var temp__5733__auto__ = cljs.core.find(the_loaded_ns,sym);
if(cljs.core.truth_(temp__5733__auto__)){
var vec__91903 = temp__5733__auto__;
var _k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91903,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91903,(1),null);
return v;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)," does not exist"].join('')));
}
})());
} else {
return ns;
}
}),the_current_ns__$1,refer):(function(){throw (new Error(":refer value must be a sequential collection of symbols"))})()
)):(cljs.core.truth_(use_QMARK_)?sci.impl.interpreter.handle_refer_all(the_current_ns__$1,the_loaded_ns,include_sym_QMARK_,rename_sym,only):the_current_ns__$1
));
var env__$1 = cljs.core.assoc_in(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),current_ns], null),the_current_ns__$2);
return env__$1;
});
sci.impl.interpreter.handle_require_libspec = (function sci$impl$interpreter$handle_require_libspec(ctx,libspec){
var map__91906 = sci.impl.interpreter.parse_libspec(libspec);
var map__91906__$1 = (((((!((map__91906 == null))))?(((((map__91906.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__91906.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__91906):map__91906);
var parsed_libspec = map__91906__$1;
var lib_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91906__$1,new cljs.core.Keyword(null,"lib-name","lib-name",1158024282));
var reload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91906__$1,new cljs.core.Keyword(null,"reload","reload",863702807));
var env_STAR_ = new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx);
var env = cljs.core.deref(env_STAR_);
var cnn = sci.impl.vars.current_ns_name();
var namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469));
var use_QMARK_ = new cljs.core.Keyword("sci.impl","use","sci.impl/use",1724565881).cljs$core$IFn$_invoke$arity$1(ctx);
var temp__5733__auto__ = (cljs.core.truth_(reload)?null:cljs.core.get.cljs$core$IFn$_invoke$arity$2(namespaces,lib_name));
if(cljs.core.truth_(temp__5733__auto__)){
var the_loaded_ns = temp__5733__auto__;
return cljs.core.reset_BANG_(env_STAR_,sci.impl.interpreter.handle_require_libspec_env(env,use_QMARK_,cnn,the_loaded_ns,lib_name,parsed_libspec));
} else {
var temp__5733__auto____$1 = new cljs.core.Keyword(null,"load-fn","load-fn",-2121144334).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(temp__5733__auto____$1)){
var load_fn = temp__5733__auto____$1;
var temp__5733__auto____$2 = (function (){var G__91909 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),lib_name], null);
return (load_fn.cljs$core$IFn$_invoke$arity$1 ? load_fn.cljs$core$IFn$_invoke$arity$1(G__91909) : load_fn.call(null,G__91909));
})();
if(cljs.core.truth_(temp__5733__auto____$2)){
var map__91910 = temp__5733__auto____$2;
var map__91910__$1 = (((((!((map__91910 == null))))?(((((map__91910.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__91910.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__91910):map__91910);
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91910__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91910__$1,new cljs.core.Keyword(null,"source","source",-433931539));
try{sci.impl.vars.push_thread_bindings(cljs.core.PersistentArrayMap.createAsIfByAssoc([sci.impl.vars.current_ns,cljs.core.deref(sci.impl.vars.current_ns),sci.impl.vars.current_file,file]));

try{var G__91913_92632 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),cljs.core.PersistentArrayMap.EMPTY);
var G__91914_92633 = source;
(sci.impl.interpreter.eval_string_STAR_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.eval_string_STAR_.cljs$core$IFn$_invoke$arity$2(G__91913_92632,G__91914_92633) : sci.impl.interpreter.eval_string_STAR_.call(null,G__91913_92632,G__91914_92633));
}finally {sci.impl.vars.pop_thread_bindings();
}}catch (e91912){if((e91912 instanceof Error)){
var e_92635 = e91912;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(env_STAR_,cljs.core.update,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lib_name], 0));

throw e_92635;
} else {
throw e91912;

}
}
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(env_STAR_,(function (env__$1){
var namespaces__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(env__$1,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469));
var the_loaded_ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(namespaces__$1,lib_name);
return sci.impl.interpreter.handle_require_libspec_env(env__$1,use_QMARK_,cnn,the_loaded_ns,lib_name,parsed_libspec);
}));
} else {
var or__4126__auto__ = (cljs.core.truth_(reload)?(function (){var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(namespaces,lib_name);
if(cljs.core.truth_(temp__5735__auto__)){
var the_loaded_ns = temp__5735__auto__;
return cljs.core.reset_BANG_(env_STAR_,sci.impl.interpreter.handle_require_libspec_env(env,use_QMARK_,cnn,the_loaded_ns,lib_name,parsed_libspec));
} else {
return null;
}
})():null);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
throw (new Error(["Could not require ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib_name),"."].join('')));
}
}
} else {
throw (new Error(["Could not require ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib_name),"."].join('')));
}
}
});
sci.impl.interpreter.eval_require = (function sci$impl$interpreter$eval_require(var_args){
var args__4742__auto__ = [];
var len__4736__auto___92638 = arguments.length;
var i__4737__auto___92639 = (0);
while(true){
if((i__4737__auto___92639 < len__4736__auto___92638)){
args__4742__auto__.push((arguments[i__4737__auto___92639]));

var G__92640 = (i__4737__auto___92639 + (1));
i__4737__auto___92639 = G__92640;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return sci.impl.interpreter.eval_require.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(sci.impl.interpreter.eval_require.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,args){
var libspecs = cljs.core.PersistentVector.EMPTY;
var current_libspec = null;
var args__$1 = args;
while(true){
if(cljs.core.truth_(args__$1)){
var ret = (function (){var G__91931 = ctx;
var G__91932 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__91931,G__91932) : sci.impl.interpreter.interpret.call(null,G__91931,G__91932));
})();
if((ret instanceof cljs.core.Symbol)){
var G__92641 = (function (){var G__91933 = libspecs;
if(cljs.core.truth_(current_libspec)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__91933,current_libspec);
} else {
return G__91933;
}
})();
var G__92642 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ret], null);
var G__92643 = cljs.core.next(args__$1);
libspecs = G__92641;
current_libspec = G__92642;
args__$1 = G__92643;
continue;
} else {
if((ret instanceof cljs.core.Keyword)){
var G__92646 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(libspecs,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current_libspec,ret));
var G__92647 = null;
var G__92648 = cljs.core.next(args__$1);
libspecs = G__92646;
current_libspec = G__92647;
args__$1 = G__92648;
continue;
} else {
var G__92649 = (function (){var G__91934 = libspecs;
if(cljs.core.truth_(current_libspec)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__91934,current_libspec);
} else {
return G__91934;
}
})();
var G__92650 = ret;
var G__92651 = cljs.core.next(args__$1);
libspecs = G__92649;
current_libspec = G__92650;
args__$1 = G__92651;
continue;

}
}
} else {
var libspecs__$1 = (function (){var G__91937 = libspecs;
if(cljs.core.truth_(current_libspec)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__91937,current_libspec);
} else {
return G__91937;
}
})();
return cljs.core.run_BANG_(((function (libspecs,current_libspec,args__$1,libspecs__$1){
return (function (p1__91919_SHARP_){
return sci.impl.interpreter.handle_require_libspec(ctx,p1__91919_SHARP_);
});})(libspecs,current_libspec,args__$1,libspecs__$1))
,libspecs__$1);
}
break;
}
}));

(sci.impl.interpreter.eval_require.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sci.impl.interpreter.eval_require.cljs$lang$applyTo = (function (seq91920){
var G__91921 = cljs.core.first(seq91920);
var seq91920__$1 = cljs.core.next(seq91920);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__91921,seq91920__$1);
}));

cljs.core.vreset_BANG_(sci.impl.utils.eval_require_state,sci.impl.interpreter.eval_require);
sci.impl.interpreter.eval_use = (function sci$impl$interpreter$eval_use(var_args){
var args__4742__auto__ = [];
var len__4736__auto___92653 = arguments.length;
var i__4737__auto___92654 = (0);
while(true){
if((i__4737__auto___92654 < len__4736__auto___92653)){
args__4742__auto__.push((arguments[i__4737__auto___92654]));

var G__92655 = (i__4737__auto___92654 + (1));
i__4737__auto___92654 = G__92655;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return sci.impl.interpreter.eval_use.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(sci.impl.interpreter.eval_use.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sci.impl.interpreter.eval_require,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword("sci.impl","use","sci.impl/use",1724565881),true),args);
}));

(sci.impl.interpreter.eval_use.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sci.impl.interpreter.eval_use.cljs$lang$applyTo = (function (seq91939){
var G__91940 = cljs.core.first(seq91939);
var seq91939__$1 = cljs.core.next(seq91939);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__91940,seq91939__$1);
}));

cljs.core.vreset_BANG_(sci.impl.utils.eval_use_state,sci.impl.interpreter.eval_use);
sci.impl.interpreter.eval_case = (function sci$impl$interpreter$eval_case(ctx,p__91949){
var vec__91954 = p__91949;
var _case = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91954,(0),null);
var map__91957 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91954,(1),null);
var map__91957__$1 = (((((!((map__91957 == null))))?(((((map__91957.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__91957.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__91957):map__91957);
var case_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91957__$1,new cljs.core.Keyword(null,"case-map","case-map",955082964));
var case_val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91957__$1,new cljs.core.Keyword(null,"case-val","case-val",880926521));
var case_default = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91957__$1,new cljs.core.Keyword(null,"case-default","case-default",1140470708));
var v = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,case_val) : sci.impl.interpreter.interpret.call(null,ctx,case_val));
var temp__5733__auto__ = cljs.core.find(case_map,v);
if(cljs.core.truth_(temp__5733__auto__)){
var vec__91962 = temp__5733__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91962,(0),null);
var found = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91962,(1),null);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,found) : sci.impl.interpreter.interpret.call(null,ctx,found));
} else {
if(cljs.core.vector_QMARK_(case_default)){
var G__91965 = ctx;
var G__91966 = cljs.core.second(case_default);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__91965,G__91966) : sci.impl.interpreter.interpret.call(null,G__91965,G__91966));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('')));
}
}
});
sci.impl.interpreter.eval_try = (function sci$impl$interpreter$eval_try(ctx,expr){
var map__91967 = new cljs.core.Keyword("sci.impl","try","sci.impl/try",2142624741).cljs$core$IFn$_invoke$arity$1(expr);
var map__91967__$1 = (((((!((map__91967 == null))))?(((((map__91967.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__91967.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__91967):map__91967);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91967__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var catches = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91967__$1,new cljs.core.Keyword(null,"catches","catches",-1478797617));
var finally$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91967__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
try{var _STAR_in_try_STAR__orig_val__91975 = sci.impl.utils._STAR_in_try_STAR_;
var _STAR_in_try_STAR__temp_val__91976 = true;
(sci.impl.utils._STAR_in_try_STAR_ = _STAR_in_try_STAR__temp_val__91976);

try{return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,body) : sci.impl.interpreter.interpret.call(null,ctx,body));
}finally {(sci.impl.utils._STAR_in_try_STAR_ = _STAR_in_try_STAR__orig_val__91975);
}}catch (e91969){if((e91969 instanceof Error)){
var e = e91969;
var temp__5733__auto__ = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (_,c){
var clazz = new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(c);
if((e instanceof clazz)){
return cljs.core.reduced(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sci.impl.interpreter","try-result","sci.impl.interpreter/try-result",1789456125),(function (){var G__91970 = cljs.core.assoc_in(ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),new cljs.core.Keyword(null,"binding","binding",539932593).cljs$core$IFn$_invoke$arity$1(c)], null),e);
var G__91971 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(c);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__91970,G__91971) : sci.impl.interpreter.interpret.call(null,G__91970,G__91971));
})()], null));
} else {
return null;
}
}),null,catches);
if(cljs.core.truth_(temp__5733__auto__)){
var vec__91972 = temp__5733__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91972,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91972,(1),null);
return r;
} else {
return sci.impl.utils.rethrow_with_location_of_node(ctx,e,body);
}
} else {
throw e91969;

}
}finally {(sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,finally$) : sci.impl.interpreter.interpret.call(null,ctx,finally$));
}});
sci.impl.interpreter.eval_throw = (function sci$impl$interpreter$eval_throw(ctx,p__91977){
var vec__91978 = p__91977;
var _throw = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91978,(0),null);
var ex = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91978,(1),null);
var ex__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,ex) : sci.impl.interpreter.interpret.call(null,ctx,ex));
throw ex__$1;
});
sci.impl.interpreter.eval_static_method_invocation = (function sci$impl$interpreter$eval_static_method_invocation(ctx,expr){
return sci.impl.interop.invoke_static_method(cljs.core.first(expr),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__91981_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__91981_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__91981_SHARP_));
}),cljs.core.rest(expr)));
});
sci.impl.interpreter.eval_constructor_invocation = (function sci$impl$interpreter$eval_constructor_invocation(ctx,p__91983){
var vec__91984 = p__91983;
var _new = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91984,(0),null);
var constructor$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91984,(1),null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91984,(2),null);
var args__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__91982_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__91982_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__91982_SHARP_));
}),args);
return sci.impl.interop.invoke_constructor(constructor$,args__$1);
});
sci.impl.interpreter.eval_instance_method_invocation = (function sci$impl$interpreter$eval_instance_method_invocation(p__91989,p__91990){
var map__91991 = p__91989;
var map__91991__$1 = (((((!((map__91991 == null))))?(((((map__91991.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__91991.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__91991):map__91991);
var ctx = map__91991__$1;
var class__GT_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91991__$1,new cljs.core.Keyword(null,"class->opts","class->opts",2061906477));
var vec__91992 = p__91990;
var _dot = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91992,(0),null);
var instance_expr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91992,(1),null);
var method_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91992,(2),null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91992,(3),null);
var instance_meta = cljs.core.meta(instance_expr);
var tag_class = new cljs.core.Keyword(null,"tag-class","tag-class",714967874).cljs$core$IFn$_invoke$arity$1(instance_meta);
var instance_expr_STAR_ = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,instance_expr) : sci.impl.interpreter.interpret.call(null,ctx,instance_expr));
var instance_class = (function (){var or__4126__auto__ = tag_class;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.type(instance_expr_STAR_);
}
})();
var instance_class_name = instance_class.name;
var instance_class_symbol = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(instance_class_name);
var allowed_QMARK_ = (function (){var or__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(class__GT_opts,new cljs.core.Keyword(null,"allow","allow",-1857325745));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(class__GT_opts,instance_class_symbol);
}
})();
var target_class = (cljs.core.truth_(allowed_QMARK_)?instance_class:(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"public-class","public-class",1127293019).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(temp__5735__auto__)){
var f = temp__5735__auto__;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(instance_expr_STAR_) : f.call(null,instance_expr_STAR_));
} else {
return null;
}
})());
if(cljs.core.truth_(target_class)){
} else {
sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2(["Method ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(method_str)," on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(instance_class)," not allowed!"].join(''),instance_expr);
}

var args__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__91988_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__91988_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__91988_SHARP_));
}),args);
return sci.impl.interop.invoke_instance_method(instance_expr_STAR_,target_class,method_str,args__$1);
});
sci.impl.interpreter.eval_in_ns = (function sci$impl$interpreter$eval_in_ns(ctx,p__91996){
var vec__91997 = p__91996;
var _in_ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91997,(0),null);
var ns_expr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91997,(1),null);
var ns_sym = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,ns_expr) : sci.impl.interpreter.interpret.call(null,ctx,ns_expr));
sci.impl.utils.set_namespace_BANG_(ctx,ns_sym,null);

return null;
});
sci.impl.interpreter.eval_refer = (function sci$impl$interpreter$eval_refer(ctx,p__92000){
var vec__92001 = p__92000;
var seq__92002 = cljs.core.seq(vec__92001);
var first__92003 = cljs.core.first(seq__92002);
var seq__92002__$1 = cljs.core.next(seq__92002);
var _ = first__92003;
var first__92003__$1 = cljs.core.first(seq__92002__$1);
var seq__92002__$2 = cljs.core.next(seq__92002__$1);
var ns_sym = first__92003__$1;
var exprs = seq__92002__$2;
var ns_sym__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,ns_sym) : sci.impl.interpreter.interpret.call(null,ctx,ns_sym));
var exprs__$1 = exprs;
while(true){
if(exprs__$1){
var vec__92004 = exprs__$1;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__92004,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__92004,(1),null);
var G__92007_92679 = k;
var G__92007_92680__$1 = (((G__92007_92679 instanceof cljs.core.Keyword))?G__92007_92679.fqn:null);
switch (G__92007_92680__$1) {
case "exclude":
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx),((function (exprs__$1,G__92007_92679,G__92007_92680__$1,vec__92004,k,v,ns_sym__$1,vec__92001,seq__92002,first__92003,seq__92002__$1,_,first__92003__$1,seq__92002__$2,ns_sym,exprs){
return (function (env){
var cnn = sci.impl.vars.current_ns_name();
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(env,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn,new cljs.core.Keyword(null,"refer","refer",-964295553),ns_sym__$1,new cljs.core.Keyword(null,"exclude","exclude",-1230250334)], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.into,cljs.core.PersistentHashSet.EMPTY),v);
});})(exprs__$1,G__92007_92679,G__92007_92680__$1,vec__92004,k,v,ns_sym__$1,vec__92001,seq__92002,first__92003,seq__92002__$1,_,first__92003__$1,seq__92002__$2,ns_sym,exprs))
);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__92007_92680__$1)].join('')));

}

var G__92683 = cljs.core.nnext(exprs__$1);
exprs__$1 = G__92683;
continue;
} else {
return null;
}
break;
}
});
sci.impl.interpreter.eval_resolve = (function sci$impl$interpreter$eval_resolve(ctx,sym){
var sym__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,sym) : sci.impl.interpreter.interpret.call(null,ctx,sym));
return cljs.core.second(sci.impl.analyzer.lookup(ctx,sym__$1,false));
});
cljs.core.vreset_BANG_(sci.impl.utils.eval_resolve_state,sci.impl.interpreter.eval_resolve);
sci.impl.interpreter.macroexpand_1 = (function sci$impl$interpreter$macroexpand_1(ctx,expr){
var original_expr = expr;
if(cljs.core.seq_QMARK_(expr)){
var op = cljs.core.first(expr);
if((op instanceof cljs.core.Symbol)){
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(sci.impl.analyzer.special_syms,op))){
return expr;
} else {
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"for","for",316745208,null),null], null), null),op)){
return sci.impl.analyzer.analyze(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword("sci.impl","macroexpanding","sci.impl/macroexpanding",2113471825),true),expr);
} else {
var f = sci.impl.analyzer.resolve_symbol.cljs$core$IFn$_invoke$arity$3(ctx,op,true);
var f__$1 = (cljs.core.truth_(((sci.impl.vars.var_QMARK_(f))?sci.impl.vars.isMacro(f):false))?cljs.core.deref(f):f);
if(cljs.core.truth_(sci.impl.analyzer.macro_QMARK_(f__$1))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(f__$1,original_expr,new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(ctx),cljs.core.rest(expr));
} else {
return expr;
}

}
}
} else {
return expr;
}
} else {
return expr;
}
});
sci.impl.interpreter.macroexpand = (function sci$impl$interpreter$macroexpand(ctx,form){
var ex = sci.impl.interpreter.macroexpand_1(ctx,form);
if((ex === form)){
return form;
} else {
return (sci.impl.interpreter.macroexpand.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.macroexpand.cljs$core$IFn$_invoke$arity$2(ctx,ex) : sci.impl.interpreter.macroexpand.call(null,ctx,ex));
}
});
sci.impl.interpreter.eval_set_BANG_ = (function sci$impl$interpreter$eval_set_BANG_(ctx,p__92008){
var vec__92009 = p__92008;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__92009,(0),null);
var obj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__92009,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__92009,(2),null);
var obj__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,obj) : sci.impl.interpreter.interpret.call(null,ctx,obj));
var v__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,v) : sci.impl.interpreter.interpret.call(null,ctx,v));
if(sci.impl.vars.var_QMARK_(obj__$1)){
return sci.impl.types.setVal(obj__$1,v__$1);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Cannot set ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(obj__$1)," to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v__$1)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"obj","obj",981763962),obj__$1,new cljs.core.Keyword(null,"v","v",21465059),v__$1], null));
}
});
sci.impl.interpreter.eval_do_STAR_ = (function sci$impl$interpreter$eval_do_STAR_(ctx,exprs){
var G__92015 = exprs;
var vec__92016 = G__92015;
var seq__92017 = cljs.core.seq(vec__92016);
var first__92018 = cljs.core.first(seq__92017);
var seq__92017__$1 = cljs.core.next(seq__92017);
var expr = first__92018;
var exprs__$1 = seq__92017__$1;
var G__92015__$1 = G__92015;
while(true){
var vec__92019 = G__92015__$1;
var seq__92020 = cljs.core.seq(vec__92019);
var first__92021 = cljs.core.first(seq__92020);
var seq__92020__$1 = cljs.core.next(seq__92020);
var expr__$1 = first__92021;
var exprs__$2 = seq__92020__$1;
var ret = (function (){try{return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,expr__$1) : sci.impl.interpreter.interpret.call(null,ctx,expr__$1));
}catch (e92022){if((e92022 instanceof Error)){
var e = e92022;
return sci.impl.utils.rethrow_with_location_of_node(ctx,e,expr__$1);
} else {
throw e92022;

}
}})();
var temp__5733__auto__ = cljs.core.seq(exprs__$2);
if(temp__5733__auto__){
var exprs__$3 = temp__5733__auto__;
var G__92690 = exprs__$3;
G__92015__$1 = G__92690;
continue;
} else {
return ret;
}
break;
}
});
sci.impl.interpreter.eval_do = (function sci$impl$interpreter$eval_do(ctx,expr){
var temp__5735__auto__ = cljs.core.next(expr);
if(temp__5735__auto__){
var exprs = temp__5735__auto__;
return sci.impl.interpreter.eval_do_STAR_(ctx,exprs);
} else {
return null;
}
});
sci.impl.interpreter.fn_call = (function sci$impl$interpreter$fn_call(ctx,f,args){
var G__92215 = cljs.core.count(args);
switch (G__92215) {
case (0):
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

break;
case (1):
var arg92025 = (function (){var G__92216 = ctx;
var G__92217 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__92216,G__92217) : sci.impl.interpreter.interpret.call(null,G__92216,G__92217));
})();
var args__$1 = cljs.core.rest(args);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(arg92025) : f.call(null,arg92025));

break;
case (2):
var arg92026 = (function (){var G__92218 = ctx;
var G__92219 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__92218,G__92219) : sci.impl.interpreter.interpret.call(null,G__92218,G__92219));
})();
var args__$1 = cljs.core.rest(args);
var arg92027 = (function (){var G__92220 = ctx;
var G__92221 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__92220,G__92221) : sci.impl.interpreter.interpret.call(null,G__92220,G__92221));
})();
var args__$2 = cljs.core.rest(args__$1);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(arg92026,arg92027) : f.call(null,arg92026,arg92027));

break;
case (3):
var arg92028 = (function (){var G__92222 = ctx;
var G__92223 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__92222,G__92223) : sci.impl.interpreter.interpret.call(null,G__92222,G__92223));
})();
var args__$1 = cljs.core.rest(args);
var arg92029 = (function (){var G__92224 = ctx;
var G__92225 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__92224,G__92225) : sci.impl.interpreter.interpret.call(null,G__92224,G__92225));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg92030 = (function (){var G__92226 = ctx;
var G__92227 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__92226,G__92227) : sci.impl.interpreter.interpret.call(null,G__92226,G__92227));
})();
var args__$3 = cljs.core.rest(args__$2);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(arg92028,arg92029,arg92030) : f.call(null,arg92028,arg92029,arg92030));

break;
case (4):
var arg92031 = (function (){var G__92228 = ctx;
var G__92229 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__92228,G__92229) : sci.impl.interpreter.interpret.call(null,G__92228,G__92229));
})();
var args__$1 = cljs.core.rest(args);
var arg92032 = (function (){var G__92230 = ctx;
var G__92231 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__92230,G__92231) : sci.impl.interpreter.interpret.call(null,G__92230,G__92231));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg92033 = (function (){var G__92232 = ctx;
var G__92233 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__92232,G__92233) : sci.impl.interpreter.interpret.call(null,G__92232,G__92233));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg92034 = (function (){var G__92234 = ctx;
var G__92235 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__92234,G__92235) : sci.impl.interpreter.interpret.call(null,G__92234,G__92235));
})();
var args__$4 = cljs.core.rest(args__$3);
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(arg92031,arg92032,arg92033,arg92034) : f.call(null,arg92031,arg92032,arg92033,arg92034));

break;
case (5):
var arg92035 = (function (){var G__92236 = ctx;
var G__92237 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__92236,G__92237) : sci.impl.interpreter.interpret.call(null,G__92236,G__92237));
})();
var args__$1 = cljs.core.rest(args);
var arg92036 = (function (){var G__92238 = ctx;
var G__92239 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__92238,G__92239) : sci.impl.interpreter.interpret.call(null,G__92238,G__92239));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg92037 = (function (){var G__92240 = ctx;
var G__92241 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__92240,G__92241) : sci.impl.interpreter.interpret.call(null,G__92240,G__92241));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg92038 = (function (){var G__92242 = ctx;
var G__92243 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__92242,G__92243) : sci.impl.interpreter.interpret.call(null,G__92242,G__92243));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg92039 = (function (){var G__92244 = ctx;
var G__92245 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__92244,G__92245) : sci.impl.interpreter.interpret.call(null,G__92244,G__92245));
})();
var args__$5 = cljs.core.rest(args__$4);
return (f.cljs$core$IFn$_invoke$arity$5 ? f.cljs$core$IFn$_invoke$arity$5(arg92035,arg92036,arg92037,arg92038,arg92039) : f.call(null,arg92035,arg92036,arg92037,arg92038,arg92039));

break;
case (6):
var arg92040 = (function (){var G__92246 = ctx;
var G__92247 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__92246,G__92247) : sci.impl.interpreter.interpret.call(null,G__92246,G__92247));
})();
var args__$1 = cljs.core.rest(args);
var arg92041 = (function (){var G__92248 = ctx;
var G__92249 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__92248,G__92249) : sci.impl.interpreter.interpret.call(null,G__92248,G__92249));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg92042 = (function (){var G__92250 = ctx;
var G__92251 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__92250,G__92251) : sci.impl.interpreter.interpret.call(null,G__92250,G__92251));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg92043 = (function (){var G__92252 = ctx;
var G__92253 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__92252,G__92253) : sci.impl.interpreter.interpret.call(null,G__92252,G__92253));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg92044 = (function (){var G__92254 = ctx;
var G__92255 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__92254,G__92255) : sci.impl.interpreter.interpret.call(null,G__92254,G__92255));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg92045 = (function (){var G__92256 = ctx;
var G__92257 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__92256,G__92257) : sci.impl.interpreter.interpret.call(null,G__92256,G__92257));
})();
var args__$6 = cljs.core.rest(args__$5);
return (f.cljs$core$IFn$_invoke$arity$6 ? f.cljs$core$IFn$_invoke$arity$6(arg92040,arg92041,arg92042,arg92043,arg92044,arg92045) : f.call(null,arg92040,arg92041,arg92042,arg92043,arg92044,arg92045));

break;
case (7):
var arg92046 = (function (){var G__92258 = ctx;
var G__92259 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__92258,G__92259) : sci.impl.interpreter.interpret.call(null,G__92258,G__92259));
})();
var args__$1 = cljs.core.rest(args);
var arg92047 = (function (){var G__92260 = ctx;
var G__92261 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__92260,G__92261) : sci.impl.interpreter.interpret.call(null,G__92260,G__92261));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg92048 = (function (){var G__92262 = ctx;
var G__92263 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__92262,G__92263) : sci.impl.interpreter.interpret.call(null,G__92262,G__92263));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg92049 = (function (){var G__92264 = ctx;
var G__92265 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__92264,G__92265) : sci.impl.interpreter.interpret.call(null,G__92264,G__92265));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg92050 = (function (){var G__92266 = ctx;
var G__92267 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__92266,G__92267) : sci.impl.interpreter.interpret.call(null,G__92266,G__92267));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg92051 = (function (){var G__92268 = ctx;
var G__92269 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__92268,G__92269) : sci.impl.interpreter.interpret.call(null,G__92268,G__92269));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg92052 = (function (){var G__92270 = ctx;
var G__92271 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__92270,G__92271) : sci.impl.interpreter.interpret.call(null,G__92270,G__92271));
})();
var args__$7 = cljs.core.rest(args__$6);
return (f.cljs$core$IFn$_invoke$arity$7 ? f.cljs$core$IFn$_invoke$arity$7(arg92046,arg92047,arg92048,arg92049,arg92050,arg92051,arg92052) : f.call(null,arg92046,arg92047,arg92048,arg92049,arg92050,arg92051,arg92052));

break;
case (8):
var arg92053 = (function (){var G__92272 = ctx;
var G__92273 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__92272,G__92273) : sci.impl.interpreter.interpret.call(null,G__92272,G__92273));
})();
var args__$1 = cljs.core.rest(args);
var arg92054 = (function (){var G__92274 = ctx;
var G__92275 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__92274,G__92275) : sci.impl.interpreter.interpret.call(null,G__92274,G__92275));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg92055 = (function (){var G__92276 = ctx;
var G__92277 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__92276,G__92277) : sci.impl.interpreter.interpret.call(null,G__92276,G__92277));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg92056 = (function (){var G__92278 = ctx;
var G__92279 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__92278,G__92279) : sci.impl.interpreter.interpret.call(null,G__92278,G__92279));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg92057 = (function (){var G__92280 = ctx;
var G__92281 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__92280,G__92281) : sci.impl.interpreter.interpret.call(null,G__92280,G__92281));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg92058 = (function (){var G__92282 = ctx;
var G__92283 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__92282,G__92283) : sci.impl.interpreter.interpret.call(null,G__92282,G__92283));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg92059 = (function (){var G__92284 = ctx;
var G__92285 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__92284,G__92285) : sci.impl.interpreter.interpret.call(null,G__92284,G__92285));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg92060 = (function (){var G__92286 = ctx;
var G__92287 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__92286,G__92287) : sci.impl.interpreter.interpret.call(null,G__92286,G__92287));
})();
var args__$8 = cljs.core.rest(args__$7);
return (f.cljs$core$IFn$_invoke$arity$8 ? f.cljs$core$IFn$_invoke$arity$8(arg92053,arg92054,arg92055,arg92056,arg92057,arg92058,arg92059,arg92060) : f.call(null,arg92053,arg92054,arg92055,arg92056,arg92057,arg92058,arg92059,arg92060));

break;
case (9):
var arg92061 = (function (){var G__92288 = ctx;
var G__92289 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__92288,G__92289) : sci.impl.interpreter.interpret.call(null,G__92288,G__92289));
})();
var args__$1 = cljs.core.rest(args);
var arg92062 = (function (){var G__92290 = ctx;
var G__92291 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__92290,G__92291) : sci.impl.interpreter.interpret.call(null,G__92290,G__92291));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg92063 = (function (){var G__92292 = ctx;
var G__92293 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__92292,G__92293) : sci.impl.interpreter.interpret.call(null,G__92292,G__92293));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg92064 = (function (){var G__92294 = ctx;
var G__92295 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__92294,G__92295) : sci.impl.interpreter.interpret.call(null,G__92294,G__92295));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg92065 = (function (){var G__92296 = ctx;
var G__92297 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__92296,G__92297) : sci.impl.interpreter.interpret.call(null,G__92296,G__92297));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg92066 = (function (){var G__92298 = ctx;
var G__92299 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__92298,G__92299) : sci.impl.interpreter.interpret.call(null,G__92298,G__92299));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg92067 = (function (){var G__92300 = ctx;
var G__92301 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__92300,G__92301) : sci.impl.interpreter.interpret.call(null,G__92300,G__92301));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg92068 = (function (){var G__92302 = ctx;
var G__92303 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__92302,G__92303) : sci.impl.interpreter.interpret.call(null,G__92302,G__92303));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg92069 = (function (){var G__92304 = ctx;
var G__92305 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__92304,G__92305) : sci.impl.interpreter.interpret.call(null,G__92304,G__92305));
})();
var args__$9 = cljs.core.rest(args__$8);
return (f.cljs$core$IFn$_invoke$arity$9 ? f.cljs$core$IFn$_invoke$arity$9(arg92061,arg92062,arg92063,arg92064,arg92065,arg92066,arg92067,arg92068,arg92069) : f.call(null,arg92061,arg92062,arg92063,arg92064,arg92065,arg92066,arg92067,arg92068,arg92069));

break;
case (10):
var arg92070 = (function (){var G__92306 = ctx;
var G__92307 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__92306,G__92307) : sci.impl.interpreter.interpret.call(null,G__92306,G__92307));
})();
var args__$1 = cljs.core.rest(args);
var arg92071 = (function (){var G__92308 = ctx;
var G__92309 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__92308,G__92309) : sci.impl.interpreter.interpret.call(null,G__92308,G__92309));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg92072 = (function (){var G__92310 = ctx;
var G__92311 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__92310,G__92311) : sci.impl.interpreter.interpret.call(null,G__92310,G__92311));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg92073 = (function (){var G__92312 = ctx;
var G__92313 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__92312,G__92313) : sci.impl.interpreter.interpret.call(null,G__92312,G__92313));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg92074 = (function (){var G__92314 = ctx;
var G__92315 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__92314,G__92315) : sci.impl.interpreter.interpret.call(null,G__92314,G__92315));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg92075 = (function (){var G__92316 = ctx;
var G__92317 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__92316,G__92317) : sci.impl.interpreter.interpret.call(null,G__92316,G__92317));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg92076 = (function (){var G__92318 = ctx;
var G__92319 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__92318,G__92319) : sci.impl.interpreter.interpret.call(null,G__92318,G__92319));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg92077 = (function (){var G__92320 = ctx;
var G__92321 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__92320,G__92321) : sci.impl.interpreter.interpret.call(null,G__92320,G__92321));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg92078 = (function (){var G__92322 = ctx;
var G__92323 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__92322,G__92323) : sci.impl.interpreter.interpret.call(null,G__92322,G__92323));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg92079 = (function (){var G__92324 = ctx;
var G__92325 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__92324,G__92325) : sci.impl.interpreter.interpret.call(null,G__92324,G__92325));
})();
var args__$10 = cljs.core.rest(args__$9);
return (f.cljs$core$IFn$_invoke$arity$10 ? f.cljs$core$IFn$_invoke$arity$10(arg92070,arg92071,arg92072,arg92073,arg92074,arg92075,arg92076,arg92077,arg92078,arg92079) : f.call(null,arg92070,arg92071,arg92072,arg92073,arg92074,arg92075,arg92076,arg92077,arg92078,arg92079));

break;
case (11):
var arg92080 = (function (){var G__92326 = ctx;
var G__92327 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__92326,G__92327) : sci.impl.interpreter.interpret.call(null,G__92326,G__92327));
})();
var args__$1 = cljs.core.rest(args);
var arg92081 = (function (){var G__92328 = ctx;
var G__92329 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__92328,G__92329) : sci.impl.interpreter.interpret.call(null,G__92328,G__92329));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg92082 = (function (){var G__92330 = ctx;
var G__92331 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__92330,G__92331) : sci.impl.interpreter.interpret.call(null,G__92330,G__92331));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg92083 = (function (){var G__92332 = ctx;
var G__92333 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__92332,G__92333) : sci.impl.interpreter.interpret.call(null,G__92332,G__92333));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg92084 = (function (){var G__92334 = ctx;
var G__92335 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__92334,G__92335) : sci.impl.interpreter.interpret.call(null,G__92334,G__92335));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg92085 = (function (){var G__92336 = ctx;
var G__92337 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__92336,G__92337) : sci.impl.interpreter.interpret.call(null,G__92336,G__92337));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg92086 = (function (){var G__92338 = ctx;
var G__92339 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__92338,G__92339) : sci.impl.interpreter.interpret.call(null,G__92338,G__92339));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg92087 = (function (){var G__92340 = ctx;
var G__92341 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__92340,G__92341) : sci.impl.interpreter.interpret.call(null,G__92340,G__92341));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg92088 = (function (){var G__92342 = ctx;
var G__92343 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__92342,G__92343) : sci.impl.interpreter.interpret.call(null,G__92342,G__92343));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg92089 = (function (){var G__92344 = ctx;
var G__92345 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__92344,G__92345) : sci.impl.interpreter.interpret.call(null,G__92344,G__92345));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg92090 = (function (){var G__92346 = ctx;
var G__92347 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__92346,G__92347) : sci.impl.interpreter.interpret.call(null,G__92346,G__92347));
})();
var args__$11 = cljs.core.rest(args__$10);
return (f.cljs$core$IFn$_invoke$arity$11 ? f.cljs$core$IFn$_invoke$arity$11(arg92080,arg92081,arg92082,arg92083,arg92084,arg92085,arg92086,arg92087,arg92088,arg92089,arg92090) : f.call(null,arg92080,arg92081,arg92082,arg92083,arg92084,arg92085,arg92086,arg92087,arg92088,arg92089,arg92090));

break;
case (12):
var arg92091 = (function (){var G__92348 = ctx;
var G__92349 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__92348,G__92349) : sci.impl.interpreter.interpret.call(null,G__92348,G__92349));
})();
var args__$1 = cljs.core.rest(args);
var arg92092 = (function (){var G__92350 = ctx;
var G__92351 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__92350,G__92351) : sci.impl.interpreter.interpret.call(null,G__92350,G__92351));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg92093 = (function (){var G__92352 = ctx;
var G__92353 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__92352,G__92353) : sci.impl.interpreter.interpret.call(null,G__92352,G__92353));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg92094 = (function (){var G__92354 = ctx;
var G__92355 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__92354,G__92355) : sci.impl.interpreter.interpret.call(null,G__92354,G__92355));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg92095 = (function (){var G__92356 = ctx;
var G__92357 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__92356,G__92357) : sci.impl.interpreter.interpret.call(null,G__92356,G__92357));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg92096 = (function (){var G__92358 = ctx;
var G__92359 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__92358,G__92359) : sci.impl.interpreter.interpret.call(null,G__92358,G__92359));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg92097 = (function (){var G__92360 = ctx;
var G__92361 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__92360,G__92361) : sci.impl.interpreter.interpret.call(null,G__92360,G__92361));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg92098 = (function (){var G__92362 = ctx;
var G__92363 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__92362,G__92363) : sci.impl.interpreter.interpret.call(null,G__92362,G__92363));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg92099 = (function (){var G__92364 = ctx;
var G__92365 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__92364,G__92365) : sci.impl.interpreter.interpret.call(null,G__92364,G__92365));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg92100 = (function (){var G__92366 = ctx;
var G__92367 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__92366,G__92367) : sci.impl.interpreter.interpret.call(null,G__92366,G__92367));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg92101 = (function (){var G__92368 = ctx;
var G__92369 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__92368,G__92369) : sci.impl.interpreter.interpret.call(null,G__92368,G__92369));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg92102 = (function (){var G__92370 = ctx;
var G__92371 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__92370,G__92371) : sci.impl.interpreter.interpret.call(null,G__92370,G__92371));
})();
var args__$12 = cljs.core.rest(args__$11);
return (f.cljs$core$IFn$_invoke$arity$12 ? f.cljs$core$IFn$_invoke$arity$12(arg92091,arg92092,arg92093,arg92094,arg92095,arg92096,arg92097,arg92098,arg92099,arg92100,arg92101,arg92102) : f.call(null,arg92091,arg92092,arg92093,arg92094,arg92095,arg92096,arg92097,arg92098,arg92099,arg92100,arg92101,arg92102));

break;
case (13):
var arg92103 = (function (){var G__92372 = ctx;
var G__92373 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__92372,G__92373) : sci.impl.interpreter.interpret.call(null,G__92372,G__92373));
})();
var args__$1 = cljs.core.rest(args);
var arg92104 = (function (){var G__92374 = ctx;
var G__92375 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__92374,G__92375) : sci.impl.interpreter.interpret.call(null,G__92374,G__92375));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg92105 = (function (){var G__92376 = ctx;
var G__92377 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__92376,G__92377) : sci.impl.interpreter.interpret.call(null,G__92376,G__92377));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg92106 = (function (){var G__92378 = ctx;
var G__92379 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__92378,G__92379) : sci.impl.interpreter.interpret.call(null,G__92378,G__92379));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg92107 = (function (){var G__92380 = ctx;
var G__92381 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__92380,G__92381) : sci.impl.interpreter.interpret.call(null,G__92380,G__92381));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg92108 = (function (){var G__92382 = ctx;
var G__92383 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__92382,G__92383) : sci.impl.interpreter.interpret.call(null,G__92382,G__92383));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg92109 = (function (){var G__92384 = ctx;
var G__92385 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__92384,G__92385) : sci.impl.interpreter.interpret.call(null,G__92384,G__92385));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg92110 = (function (){var G__92386 = ctx;
var G__92387 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__92386,G__92387) : sci.impl.interpreter.interpret.call(null,G__92386,G__92387));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg92111 = (function (){var G__92388 = ctx;
var G__92389 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__92388,G__92389) : sci.impl.interpreter.interpret.call(null,G__92388,G__92389));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg92112 = (function (){var G__92390 = ctx;
var G__92391 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__92390,G__92391) : sci.impl.interpreter.interpret.call(null,G__92390,G__92391));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg92113 = (function (){var G__92392 = ctx;
var G__92393 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__92392,G__92393) : sci.impl.interpreter.interpret.call(null,G__92392,G__92393));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg92114 = (function (){var G__92394 = ctx;
var G__92395 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__92394,G__92395) : sci.impl.interpreter.interpret.call(null,G__92394,G__92395));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg92115 = (function (){var G__92396 = ctx;
var G__92397 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__92396,G__92397) : sci.impl.interpreter.interpret.call(null,G__92396,G__92397));
})();
var args__$13 = cljs.core.rest(args__$12);
return (f.cljs$core$IFn$_invoke$arity$13 ? f.cljs$core$IFn$_invoke$arity$13(arg92103,arg92104,arg92105,arg92106,arg92107,arg92108,arg92109,arg92110,arg92111,arg92112,arg92113,arg92114,arg92115) : f.call(null,arg92103,arg92104,arg92105,arg92106,arg92107,arg92108,arg92109,arg92110,arg92111,arg92112,arg92113,arg92114,arg92115));

break;
case (14):
var arg92116 = (function (){var G__92398 = ctx;
var G__92399 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__92398,G__92399) : sci.impl.interpreter.interpret.call(null,G__92398,G__92399));
})();
var args__$1 = cljs.core.rest(args);
var arg92117 = (function (){var G__92400 = ctx;
var G__92401 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__92400,G__92401) : sci.impl.interpreter.interpret.call(null,G__92400,G__92401));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg92118 = (function (){var G__92402 = ctx;
var G__92403 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__92402,G__92403) : sci.impl.interpreter.interpret.call(null,G__92402,G__92403));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg92119 = (function (){var G__92404 = ctx;
var G__92405 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__92404,G__92405) : sci.impl.interpreter.interpret.call(null,G__92404,G__92405));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg92120 = (function (){var G__92406 = ctx;
var G__92407 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__92406,G__92407) : sci.impl.interpreter.interpret.call(null,G__92406,G__92407));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg92121 = (function (){var G__92408 = ctx;
var G__92409 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__92408,G__92409) : sci.impl.interpreter.interpret.call(null,G__92408,G__92409));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg92122 = (function (){var G__92410 = ctx;
var G__92411 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__92410,G__92411) : sci.impl.interpreter.interpret.call(null,G__92410,G__92411));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg92123 = (function (){var G__92412 = ctx;
var G__92413 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__92412,G__92413) : sci.impl.interpreter.interpret.call(null,G__92412,G__92413));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg92124 = (function (){var G__92414 = ctx;
var G__92415 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__92414,G__92415) : sci.impl.interpreter.interpret.call(null,G__92414,G__92415));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg92125 = (function (){var G__92416 = ctx;
var G__92417 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__92416,G__92417) : sci.impl.interpreter.interpret.call(null,G__92416,G__92417));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg92126 = (function (){var G__92418 = ctx;
var G__92419 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__92418,G__92419) : sci.impl.interpreter.interpret.call(null,G__92418,G__92419));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg92127 = (function (){var G__92420 = ctx;
var G__92421 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__92420,G__92421) : sci.impl.interpreter.interpret.call(null,G__92420,G__92421));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg92128 = (function (){var G__92422 = ctx;
var G__92423 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__92422,G__92423) : sci.impl.interpreter.interpret.call(null,G__92422,G__92423));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg92129 = (function (){var G__92424 = ctx;
var G__92425 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__92424,G__92425) : sci.impl.interpreter.interpret.call(null,G__92424,G__92425));
})();
var args__$14 = cljs.core.rest(args__$13);
return (f.cljs$core$IFn$_invoke$arity$14 ? f.cljs$core$IFn$_invoke$arity$14(arg92116,arg92117,arg92118,arg92119,arg92120,arg92121,arg92122,arg92123,arg92124,arg92125,arg92126,arg92127,arg92128,arg92129) : f.call(null,arg92116,arg92117,arg92118,arg92119,arg92120,arg92121,arg92122,arg92123,arg92124,arg92125,arg92126,arg92127,arg92128,arg92129));

break;
case (15):
var arg92130 = (function (){var G__92426 = ctx;
var G__92427 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__92426,G__92427) : sci.impl.interpreter.interpret.call(null,G__92426,G__92427));
})();
var args__$1 = cljs.core.rest(args);
var arg92131 = (function (){var G__92428 = ctx;
var G__92429 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__92428,G__92429) : sci.impl.interpreter.interpret.call(null,G__92428,G__92429));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg92132 = (function (){var G__92430 = ctx;
var G__92431 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__92430,G__92431) : sci.impl.interpreter.interpret.call(null,G__92430,G__92431));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg92133 = (function (){var G__92432 = ctx;
var G__92433 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__92432,G__92433) : sci.impl.interpreter.interpret.call(null,G__92432,G__92433));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg92134 = (function (){var G__92434 = ctx;
var G__92435 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__92434,G__92435) : sci.impl.interpreter.interpret.call(null,G__92434,G__92435));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg92135 = (function (){var G__92436 = ctx;
var G__92437 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__92436,G__92437) : sci.impl.interpreter.interpret.call(null,G__92436,G__92437));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg92136 = (function (){var G__92438 = ctx;
var G__92439 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__92438,G__92439) : sci.impl.interpreter.interpret.call(null,G__92438,G__92439));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg92137 = (function (){var G__92440 = ctx;
var G__92441 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__92440,G__92441) : sci.impl.interpreter.interpret.call(null,G__92440,G__92441));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg92138 = (function (){var G__92442 = ctx;
var G__92443 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__92442,G__92443) : sci.impl.interpreter.interpret.call(null,G__92442,G__92443));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg92139 = (function (){var G__92444 = ctx;
var G__92445 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__92444,G__92445) : sci.impl.interpreter.interpret.call(null,G__92444,G__92445));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg92140 = (function (){var G__92446 = ctx;
var G__92447 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__92446,G__92447) : sci.impl.interpreter.interpret.call(null,G__92446,G__92447));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg92141 = (function (){var G__92448 = ctx;
var G__92449 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__92448,G__92449) : sci.impl.interpreter.interpret.call(null,G__92448,G__92449));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg92142 = (function (){var G__92450 = ctx;
var G__92451 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__92450,G__92451) : sci.impl.interpreter.interpret.call(null,G__92450,G__92451));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg92143 = (function (){var G__92452 = ctx;
var G__92453 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__92452,G__92453) : sci.impl.interpreter.interpret.call(null,G__92452,G__92453));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg92144 = (function (){var G__92454 = ctx;
var G__92455 = cljs.core.first(args__$14);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__92454,G__92455) : sci.impl.interpreter.interpret.call(null,G__92454,G__92455));
})();
var args__$15 = cljs.core.rest(args__$14);
return (f.cljs$core$IFn$_invoke$arity$15 ? f.cljs$core$IFn$_invoke$arity$15(arg92130,arg92131,arg92132,arg92133,arg92134,arg92135,arg92136,arg92137,arg92138,arg92139,arg92140,arg92141,arg92142,arg92143,arg92144) : f.call(null,arg92130,arg92131,arg92132,arg92133,arg92134,arg92135,arg92136,arg92137,arg92138,arg92139,arg92140,arg92141,arg92142,arg92143,arg92144));

break;
case (16):
var arg92145 = (function (){var G__92456 = ctx;
var G__92457 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__92456,G__92457) : sci.impl.interpreter.interpret.call(null,G__92456,G__92457));
})();
var args__$1 = cljs.core.rest(args);
var arg92146 = (function (){var G__92458 = ctx;
var G__92459 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__92458,G__92459) : sci.impl.interpreter.interpret.call(null,G__92458,G__92459));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg92147 = (function (){var G__92460 = ctx;
var G__92461 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__92460,G__92461) : sci.impl.interpreter.interpret.call(null,G__92460,G__92461));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg92148 = (function (){var G__92462 = ctx;
var G__92463 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__92462,G__92463) : sci.impl.interpreter.interpret.call(null,G__92462,G__92463));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg92149 = (function (){var G__92464 = ctx;
var G__92465 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__92464,G__92465) : sci.impl.interpreter.interpret.call(null,G__92464,G__92465));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg92150 = (function (){var G__92466 = ctx;
var G__92467 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__92466,G__92467) : sci.impl.interpreter.interpret.call(null,G__92466,G__92467));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg92151 = (function (){var G__92468 = ctx;
var G__92469 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__92468,G__92469) : sci.impl.interpreter.interpret.call(null,G__92468,G__92469));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg92152 = (function (){var G__92470 = ctx;
var G__92471 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__92470,G__92471) : sci.impl.interpreter.interpret.call(null,G__92470,G__92471));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg92153 = (function (){var G__92472 = ctx;
var G__92473 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__92472,G__92473) : sci.impl.interpreter.interpret.call(null,G__92472,G__92473));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg92154 = (function (){var G__92474 = ctx;
var G__92475 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__92474,G__92475) : sci.impl.interpreter.interpret.call(null,G__92474,G__92475));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg92155 = (function (){var G__92476 = ctx;
var G__92477 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__92476,G__92477) : sci.impl.interpreter.interpret.call(null,G__92476,G__92477));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg92156 = (function (){var G__92478 = ctx;
var G__92479 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__92478,G__92479) : sci.impl.interpreter.interpret.call(null,G__92478,G__92479));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg92157 = (function (){var G__92480 = ctx;
var G__92481 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__92480,G__92481) : sci.impl.interpreter.interpret.call(null,G__92480,G__92481));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg92158 = (function (){var G__92482 = ctx;
var G__92483 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__92482,G__92483) : sci.impl.interpreter.interpret.call(null,G__92482,G__92483));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg92159 = (function (){var G__92484 = ctx;
var G__92485 = cljs.core.first(args__$14);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__92484,G__92485) : sci.impl.interpreter.interpret.call(null,G__92484,G__92485));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg92160 = (function (){var G__92486 = ctx;
var G__92487 = cljs.core.first(args__$15);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__92486,G__92487) : sci.impl.interpreter.interpret.call(null,G__92486,G__92487));
})();
var args__$16 = cljs.core.rest(args__$15);
return (f.cljs$core$IFn$_invoke$arity$16 ? f.cljs$core$IFn$_invoke$arity$16(arg92145,arg92146,arg92147,arg92148,arg92149,arg92150,arg92151,arg92152,arg92153,arg92154,arg92155,arg92156,arg92157,arg92158,arg92159,arg92160) : f.call(null,arg92145,arg92146,arg92147,arg92148,arg92149,arg92150,arg92151,arg92152,arg92153,arg92154,arg92155,arg92156,arg92157,arg92158,arg92159,arg92160));

break;
case (17):
var arg92161 = (function (){var G__92488 = ctx;
var G__92489 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__92488,G__92489) : sci.impl.interpreter.interpret.call(null,G__92488,G__92489));
})();
var args__$1 = cljs.core.rest(args);
var arg92162 = (function (){var G__92490 = ctx;
var G__92491 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__92490,G__92491) : sci.impl.interpreter.interpret.call(null,G__92490,G__92491));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg92163 = (function (){var G__92492 = ctx;
var G__92493 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__92492,G__92493) : sci.impl.interpreter.interpret.call(null,G__92492,G__92493));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg92164 = (function (){var G__92494 = ctx;
var G__92495 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__92494,G__92495) : sci.impl.interpreter.interpret.call(null,G__92494,G__92495));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg92165 = (function (){var G__92496 = ctx;
var G__92497 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__92496,G__92497) : sci.impl.interpreter.interpret.call(null,G__92496,G__92497));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg92166 = (function (){var G__92498 = ctx;
var G__92499 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__92498,G__92499) : sci.impl.interpreter.interpret.call(null,G__92498,G__92499));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg92167 = (function (){var G__92500 = ctx;
var G__92501 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__92500,G__92501) : sci.impl.interpreter.interpret.call(null,G__92500,G__92501));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg92168 = (function (){var G__92502 = ctx;
var G__92503 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__92502,G__92503) : sci.impl.interpreter.interpret.call(null,G__92502,G__92503));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg92169 = (function (){var G__92504 = ctx;
var G__92505 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__92504,G__92505) : sci.impl.interpreter.interpret.call(null,G__92504,G__92505));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg92170 = (function (){var G__92506 = ctx;
var G__92507 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__92506,G__92507) : sci.impl.interpreter.interpret.call(null,G__92506,G__92507));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg92171 = (function (){var G__92508 = ctx;
var G__92509 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__92508,G__92509) : sci.impl.interpreter.interpret.call(null,G__92508,G__92509));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg92172 = (function (){var G__92510 = ctx;
var G__92511 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__92510,G__92511) : sci.impl.interpreter.interpret.call(null,G__92510,G__92511));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg92173 = (function (){var G__92512 = ctx;
var G__92513 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__92512,G__92513) : sci.impl.interpreter.interpret.call(null,G__92512,G__92513));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg92174 = (function (){var G__92514 = ctx;
var G__92515 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__92514,G__92515) : sci.impl.interpreter.interpret.call(null,G__92514,G__92515));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg92175 = (function (){var G__92516 = ctx;
var G__92517 = cljs.core.first(args__$14);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__92516,G__92517) : sci.impl.interpreter.interpret.call(null,G__92516,G__92517));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg92176 = (function (){var G__92518 = ctx;
var G__92519 = cljs.core.first(args__$15);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__92518,G__92519) : sci.impl.interpreter.interpret.call(null,G__92518,G__92519));
})();
var args__$16 = cljs.core.rest(args__$15);
var arg92177 = (function (){var G__92520 = ctx;
var G__92521 = cljs.core.first(args__$16);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__92520,G__92521) : sci.impl.interpreter.interpret.call(null,G__92520,G__92521));
})();
var args__$17 = cljs.core.rest(args__$16);
return (f.cljs$core$IFn$_invoke$arity$17 ? f.cljs$core$IFn$_invoke$arity$17(arg92161,arg92162,arg92163,arg92164,arg92165,arg92166,arg92167,arg92168,arg92169,arg92170,arg92171,arg92172,arg92173,arg92174,arg92175,arg92176,arg92177) : f.call(null,arg92161,arg92162,arg92163,arg92164,arg92165,arg92166,arg92167,arg92168,arg92169,arg92170,arg92171,arg92172,arg92173,arg92174,arg92175,arg92176,arg92177));

break;
case (18):
var arg92178 = (function (){var G__92522 = ctx;
var G__92523 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__92522,G__92523) : sci.impl.interpreter.interpret.call(null,G__92522,G__92523));
})();
var args__$1 = cljs.core.rest(args);
var arg92179 = (function (){var G__92524 = ctx;
var G__92525 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__92524,G__92525) : sci.impl.interpreter.interpret.call(null,G__92524,G__92525));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg92180 = (function (){var G__92526 = ctx;
var G__92527 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__92526,G__92527) : sci.impl.interpreter.interpret.call(null,G__92526,G__92527));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg92181 = (function (){var G__92528 = ctx;
var G__92529 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__92528,G__92529) : sci.impl.interpreter.interpret.call(null,G__92528,G__92529));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg92182 = (function (){var G__92530 = ctx;
var G__92531 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__92530,G__92531) : sci.impl.interpreter.interpret.call(null,G__92530,G__92531));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg92183 = (function (){var G__92532 = ctx;
var G__92533 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__92532,G__92533) : sci.impl.interpreter.interpret.call(null,G__92532,G__92533));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg92184 = (function (){var G__92534 = ctx;
var G__92535 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__92534,G__92535) : sci.impl.interpreter.interpret.call(null,G__92534,G__92535));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg92185 = (function (){var G__92536 = ctx;
var G__92537 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__92536,G__92537) : sci.impl.interpreter.interpret.call(null,G__92536,G__92537));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg92186 = (function (){var G__92538 = ctx;
var G__92539 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__92538,G__92539) : sci.impl.interpreter.interpret.call(null,G__92538,G__92539));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg92187 = (function (){var G__92540 = ctx;
var G__92541 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__92540,G__92541) : sci.impl.interpreter.interpret.call(null,G__92540,G__92541));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg92188 = (function (){var G__92542 = ctx;
var G__92543 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__92542,G__92543) : sci.impl.interpreter.interpret.call(null,G__92542,G__92543));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg92189 = (function (){var G__92544 = ctx;
var G__92545 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__92544,G__92545) : sci.impl.interpreter.interpret.call(null,G__92544,G__92545));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg92190 = (function (){var G__92546 = ctx;
var G__92547 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__92546,G__92547) : sci.impl.interpreter.interpret.call(null,G__92546,G__92547));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg92191 = (function (){var G__92548 = ctx;
var G__92549 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__92548,G__92549) : sci.impl.interpreter.interpret.call(null,G__92548,G__92549));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg92192 = (function (){var G__92550 = ctx;
var G__92551 = cljs.core.first(args__$14);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__92550,G__92551) : sci.impl.interpreter.interpret.call(null,G__92550,G__92551));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg92193 = (function (){var G__92552 = ctx;
var G__92553 = cljs.core.first(args__$15);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__92552,G__92553) : sci.impl.interpreter.interpret.call(null,G__92552,G__92553));
})();
var args__$16 = cljs.core.rest(args__$15);
var arg92194 = (function (){var G__92554 = ctx;
var G__92555 = cljs.core.first(args__$16);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__92554,G__92555) : sci.impl.interpreter.interpret.call(null,G__92554,G__92555));
})();
var args__$17 = cljs.core.rest(args__$16);
var arg92195 = (function (){var G__92556 = ctx;
var G__92557 = cljs.core.first(args__$17);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__92556,G__92557) : sci.impl.interpreter.interpret.call(null,G__92556,G__92557));
})();
var args__$18 = cljs.core.rest(args__$17);
return (f.cljs$core$IFn$_invoke$arity$18 ? f.cljs$core$IFn$_invoke$arity$18(arg92178,arg92179,arg92180,arg92181,arg92182,arg92183,arg92184,arg92185,arg92186,arg92187,arg92188,arg92189,arg92190,arg92191,arg92192,arg92193,arg92194,arg92195) : f.call(null,arg92178,arg92179,arg92180,arg92181,arg92182,arg92183,arg92184,arg92185,arg92186,arg92187,arg92188,arg92189,arg92190,arg92191,arg92192,arg92193,arg92194,arg92195));

break;
case (19):
var arg92196 = (function (){var G__92558 = ctx;
var G__92559 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__92558,G__92559) : sci.impl.interpreter.interpret.call(null,G__92558,G__92559));
})();
var args__$1 = cljs.core.rest(args);
var arg92197 = (function (){var G__92560 = ctx;
var G__92561 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__92560,G__92561) : sci.impl.interpreter.interpret.call(null,G__92560,G__92561));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg92198 = (function (){var G__92562 = ctx;
var G__92563 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__92562,G__92563) : sci.impl.interpreter.interpret.call(null,G__92562,G__92563));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg92199 = (function (){var G__92564 = ctx;
var G__92565 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__92564,G__92565) : sci.impl.interpreter.interpret.call(null,G__92564,G__92565));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg92200 = (function (){var G__92566 = ctx;
var G__92567 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__92566,G__92567) : sci.impl.interpreter.interpret.call(null,G__92566,G__92567));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg92201 = (function (){var G__92568 = ctx;
var G__92569 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__92568,G__92569) : sci.impl.interpreter.interpret.call(null,G__92568,G__92569));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg92202 = (function (){var G__92570 = ctx;
var G__92571 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__92570,G__92571) : sci.impl.interpreter.interpret.call(null,G__92570,G__92571));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg92203 = (function (){var G__92572 = ctx;
var G__92573 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__92572,G__92573) : sci.impl.interpreter.interpret.call(null,G__92572,G__92573));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg92204 = (function (){var G__92574 = ctx;
var G__92575 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__92574,G__92575) : sci.impl.interpreter.interpret.call(null,G__92574,G__92575));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg92205 = (function (){var G__92576 = ctx;
var G__92577 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__92576,G__92577) : sci.impl.interpreter.interpret.call(null,G__92576,G__92577));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg92206 = (function (){var G__92578 = ctx;
var G__92579 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__92578,G__92579) : sci.impl.interpreter.interpret.call(null,G__92578,G__92579));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg92207 = (function (){var G__92580 = ctx;
var G__92581 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__92580,G__92581) : sci.impl.interpreter.interpret.call(null,G__92580,G__92581));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg92208 = (function (){var G__92582 = ctx;
var G__92583 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__92582,G__92583) : sci.impl.interpreter.interpret.call(null,G__92582,G__92583));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg92209 = (function (){var G__92584 = ctx;
var G__92585 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__92584,G__92585) : sci.impl.interpreter.interpret.call(null,G__92584,G__92585));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg92210 = (function (){var G__92586 = ctx;
var G__92587 = cljs.core.first(args__$14);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__92586,G__92587) : sci.impl.interpreter.interpret.call(null,G__92586,G__92587));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg92211 = (function (){var G__92588 = ctx;
var G__92589 = cljs.core.first(args__$15);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__92588,G__92589) : sci.impl.interpreter.interpret.call(null,G__92588,G__92589));
})();
var args__$16 = cljs.core.rest(args__$15);
var arg92212 = (function (){var G__92590 = ctx;
var G__92591 = cljs.core.first(args__$16);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__92590,G__92591) : sci.impl.interpreter.interpret.call(null,G__92590,G__92591));
})();
var args__$17 = cljs.core.rest(args__$16);
var arg92213 = (function (){var G__92592 = ctx;
var G__92593 = cljs.core.first(args__$17);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__92592,G__92593) : sci.impl.interpreter.interpret.call(null,G__92592,G__92593));
})();
var args__$18 = cljs.core.rest(args__$17);
var arg92214 = (function (){var G__92594 = ctx;
var G__92595 = cljs.core.first(args__$18);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__92594,G__92595) : sci.impl.interpreter.interpret.call(null,G__92594,G__92595));
})();
var args__$19 = cljs.core.rest(args__$18);
return (f.cljs$core$IFn$_invoke$arity$19 ? f.cljs$core$IFn$_invoke$arity$19(arg92196,arg92197,arg92198,arg92199,arg92200,arg92201,arg92202,arg92203,arg92204,arg92205,arg92206,arg92207,arg92208,arg92209,arg92210,arg92211,arg92212,arg92213,arg92214) : f.call(null,arg92196,arg92197,arg92198,arg92199,arg92200,arg92201,arg92202,arg92203,arg92204,arg92205,arg92206,arg92207,arg92208,arg92209,arg92210,arg92211,arg92212,arg92213,arg92214));

break;
default:
var args__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__4373_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__4373_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__4373_SHARP_));
}),args);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args__$1);

}
});
sci.impl.interpreter.eval_special_call = (function sci$impl$interpreter$eval_special_call(ctx,f_sym,expr){
var G__92596 = sci.impl.utils.strip_core_ns(f_sym);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,".",".",1975675962,null),G__92596)){
if(cljs.core.truth_(ctx.get(new cljs.core.Keyword(null,"dry-run","dry-run",-1102788647)))){
return null;
} else {
return sci.impl.interpreter.eval_instance_method_invocation(ctx,expr);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"and","and",668631710,null),G__92596)){
return sci.impl.interpreter.eval_and(ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"case","case",-1510733573,null),G__92596)){
return sci.impl.interpreter.eval_case(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"if","if",1181717262,null),G__92596)){
return sci.impl.interpreter.eval_if(ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"do","do",1686842252,null),G__92596)){
return sci.impl.interpreter.eval_do(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"macroexpand","macroexpand",1509933344,null),G__92596)){
return sci.impl.interpreter.macroexpand(ctx,(function (){var G__92597 = ctx;
var G__92598 = cljs.core.second(expr);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__92597,G__92598) : sci.impl.interpreter.interpret.call(null,G__92597,G__92598));
})());
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"def","def",597100991,null),G__92596)){
return sci.impl.interpreter.eval_def(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"let","let",358118826,null),G__92596)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sci.impl.interpreter.eval_let,ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"in-ns","in-ns",-2089468466,null),G__92596)){
return sci.impl.interpreter.eval_in_ns(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"use","use",-205850897,null),G__92596)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sci.impl.interpreter.eval_use,ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"set!","set!",250714521,null),G__92596)){
return sci.impl.interpreter.eval_set_BANG_(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"recur","recur",1202958259,null),G__92596)){
return sci.impl.interpreter.fn_call(ctx,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(sci.impl.fns.__GT_Recur,cljs.core.vector),cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"require","require",1172530194,null),G__92596)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sci.impl.interpreter.eval_require,ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"new","new",-444906321,null),G__92596)){
if(cljs.core.truth_(ctx.get(new cljs.core.Keyword(null,"dry-run","dry-run",-1102788647)))){
return null;
} else {
return sci.impl.interpreter.eval_constructor_invocation(ctx,expr);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"macroexpand-1","macroexpand-1",659241329,null),G__92596)){
return sci.impl.interpreter.macroexpand_1(ctx,(function (){var G__92599 = ctx;
var G__92600 = cljs.core.second(expr);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__92599,G__92600) : sci.impl.interpreter.interpret.call(null,G__92599,G__92600));
})());
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"refer","refer",676235974,null),G__92596)){
return sci.impl.interpreter.eval_refer(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"lazy-seq","lazy-seq",489632906,null),G__92596)){
return (new cljs.core.LazySeq(null,(function (){var G__92601 = ctx;
var G__92602 = cljs.core.second(expr);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__92601,G__92602) : sci.impl.interpreter.interpret.call(null,G__92601,G__92602));
})(),null,null));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"throw","throw",595905694,null),G__92596)){
return sci.impl.interpreter.eval_throw(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"try","try",-1273693247,null),G__92596)){
return sci.impl.interpreter.eval_try(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"resolve","resolve",56086045,null),G__92596)){
return sci.impl.interpreter.eval_resolve(ctx,cljs.core.second(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"or","or",1876275696,null),G__92596)){
return sci.impl.interpreter.eval_or(ctx,cljs.core.rest(expr));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__92596)].join('')));

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
}
}
}
}
});
sci.impl.interpreter.eval_call = (function sci$impl$interpreter$eval_call(ctx,expr){
try{var f = cljs.core.first(expr);
var m = cljs.core.meta(f);
var op = (cljs.core.truth_(m)?m.get(new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978)):null);
if((((f instanceof cljs.core.Symbol)) && (cljs.core.not(op)))){
return sci.impl.interpreter.eval_special_call(ctx,f,expr);
} else {
if(cljs.core.truth_((sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(op,new cljs.core.Keyword(null,"static-access","static-access",-1860919441)) : sci.impl.utils.kw_identical_QMARK_.call(null,op,new cljs.core.Keyword(null,"static-access","static-access",-1860919441))))){
if(cljs.core.truth_(ctx.get(new cljs.core.Keyword(null,"dry-run","dry-run",-1102788647)))){
return null;
} else {
return sci.impl.interpreter.eval_static_method_invocation(ctx,expr);
}
} else {
var f__$1 = (cljs.core.truth_(op)?(sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,f) : sci.impl.interpreter.interpret.call(null,ctx,f)):f);
if(cljs.core.ifn_QMARK_(f__$1)){
if(cljs.core.truth_(ctx.get(new cljs.core.Keyword(null,"dry-run","dry-run",-1102788647)))){
return null;
} else {
return sci.impl.interpreter.fn_call(ctx,f__$1,cljs.core.rest(expr));
}
} else {
throw (new Error(["Cannot call ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([f__$1], 0))," as a function."].join('')));
}

}
}
}catch (e92603){if((e92603 instanceof Error)){
var e = e92603;
return sci.impl.utils.rethrow_with_location_of_node(ctx,e,expr);
} else {
throw e92603;

}
}});
sci.impl.interpreter.fix_meta = (function sci$impl$interpreter$fix_meta(v,old_meta){
if(cljs.core.truth_((((((!((v == null))))?(((((v.cljs$lang$protocol_mask$partition0$ & (262144))) || ((cljs.core.PROTOCOL_SENTINEL === v.cljs$core$IWithMeta$))))?true:false):false))?cljs.core.meta(v):false))){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$2(v,(function (m){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978)),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(old_meta));
}));
} else {
return v;
}
});
sci.impl.interpreter.interpret = (function sci$impl$interpreter$interpret(ctx,expr){
if((expr instanceof sci.impl.types.EvalVar)){
var v = expr.sci$impl$types$IBox$getVal$arity$1(null);
if(cljs.core.not(sci.impl.vars.isMacro(v))){
return cljs.core.deref(v);
} else {
throw (new Error(["Can't take value of a macro: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v),""].join('')));
}
} else {
var m = cljs.core.meta(expr);
var op = (cljs.core.truth_(m)?m.get(new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978)):null);
var ret = ((cljs.core.not(op))?expr:(function (){var G__92610 = op;
var G__92610__$1 = (((G__92610 instanceof cljs.core.Keyword))?G__92610.fqn:null);
switch (G__92610__$1) {
case "call":
return sci.impl.interpreter.eval_call(ctx,expr);

break;
case "try":
return sci.impl.interpreter.eval_try(ctx,expr);

break;
case "fn":
return sci.impl.fns.eval_fn(ctx,sci.impl.interpreter.interpret,sci.impl.interpreter.eval_do_STAR_,expr);

break;
case "static-access":
return sci.impl.interop.get_static_field(expr);

break;
case "var-value":
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(expr,(0));

break;
case "deref!":
var v = cljs.core.first(expr);
var v__$1 = ((sci.impl.vars.var_QMARK_(v))?cljs.core.deref(v):v);
var v__$2 = cljs.core.force(v__$1);
return v__$2;

break;
case "resolve-sym":
return sci.impl.interpreter.resolve_symbol(ctx,expr);

break;
case "needs-ctx":
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2(expr,ctx);

break;
default:
if(cljs.core.map_QMARK_(expr)){
return cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__92607_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__92607_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__92607_SHARP_));
}),cljs.core.keys(expr)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__92608_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__92608_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__92608_SHARP_));
}),cljs.core.vals(expr)));
} else {
if(((cljs.core.vector_QMARK_(expr)) || (cljs.core.set_QMARK_(expr)))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.empty(expr),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__92609_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__92609_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__92609_SHARP_));
}),expr));
} else {
throw (new Error(["unexpected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr),", type: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(expr)),", meta:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(expr))].join('')));

}
}

}
})());
var ret__$1 = (cljs.core.truth_(m)?sci.impl.interpreter.fix_meta(ret,m):ret);
var temp__5733__auto__ = ctx.get(new cljs.core.Keyword(null,"realize-max","realize-max",-1846442543));
if(cljs.core.truth_(temp__5733__auto__)){
var n = temp__5733__auto__;
return sci.impl.max_or_throw.max_or_throw(ret__$1,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"expression","expression",202311876),expr),n);
} else {
return ret__$1;
}
}
});
sci.impl.interpreter.do_QMARK_ = (function sci$impl$interpreter$do_QMARK_(expr){
return ((cljs.core.list_QMARK_(expr)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"do","do",1686842252,null),cljs.core.first(expr))));
});
sci.impl.interpreter.eval_form = (function sci$impl$interpreter$eval_form(ctx,form){
if(sci.impl.interpreter.do_QMARK_(form)){
var exprs = cljs.core.rest(form);
var ret = null;
while(true){
if(cljs.core.seq(exprs)){
var G__92767 = cljs.core.rest(exprs);
var G__92768 = (function (){var G__92613 = ctx;
var G__92614 = cljs.core.first(exprs);
return (sci.impl.interpreter.eval_form.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.eval_form.cljs$core$IFn$_invoke$arity$2(G__92613,G__92614) : sci.impl.interpreter.eval_form.call(null,G__92613,G__92614));
})();
exprs = G__92767;
ret = G__92768;
continue;
} else {
return ret;
}
break;
}
} else {
var analyzed = sci.impl.analyzer.analyze(ctx,form);
var ret = sci.impl.interpreter.interpret(ctx,analyzed);
return ret;
}
});
cljs.core.vreset_BANG_(sci.impl.utils.eval_form_state,sci.impl.interpreter.eval_form);
sci.impl.interpreter.eval_string_STAR_ = (function sci$impl$interpreter$eval_string_STAR_(ctx,s){
sci.impl.vars.push_thread_bindings(cljs.core.PersistentArrayMap.createAsIfByAssoc([sci.impl.vars.current_ns,cljs.core.deref(sci.impl.vars.current_ns)]));

try{var reader = cljs.tools.reader.reader_types.indexing_push_back_reader.cljs$core$IFn$_invoke$arity$1(cljs.tools.reader.reader_types.string_push_back_reader.cljs$core$IFn$_invoke$arity$1(s));
var ret = null;
while(true){
var expr = sci.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2(ctx,reader);
if(cljs.core.truth_((sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("edamame.impl.parser","eof","edamame.impl.parser/eof",720552006),expr) : sci.impl.utils.kw_identical_QMARK_.call(null,new cljs.core.Keyword("edamame.impl.parser","eof","edamame.impl.parser/eof",720552006),expr)))){
return ret;
} else {
var ret__$1 = sci.impl.interpreter.eval_form(ctx,expr);
var G__92769 = ret__$1;
ret = G__92769;
continue;
}
break;
}
}finally {sci.impl.vars.pop_thread_bindings();
}});
sci.impl.interpreter.eval_string = (function sci$impl$interpreter$eval_string(var_args){
var G__92616 = arguments.length;
switch (G__92616) {
case 1:
return sci.impl.interpreter.eval_string.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sci.impl.interpreter.eval_string.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sci.impl.interpreter.eval_string.cljs$core$IFn$_invoke$arity$1 = (function (s){
return sci.impl.interpreter.eval_string.cljs$core$IFn$_invoke$arity$2(s,null);
}));

(sci.impl.interpreter.eval_string.cljs$core$IFn$_invoke$arity$2 = (function (s,opts){
var init_ctx = sci.impl.opts.init(opts);
var ret = sci.impl.interpreter.eval_string_STAR_(init_ctx,s);
return ret;
}));

(sci.impl.interpreter.eval_string.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=sci.impl.interpreter.js.map
