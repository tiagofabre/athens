goog.provide('athens.walk');
/**
 * Walk previous and new strings to delete or add links, block references, etc. to datascript.
 */
athens.walk.walk_string = (function athens$walk$walk_string(string){
var data = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var G__89132_89151 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"page-link","page-link",-169621200),(function() { 
var G__89154__delegate = function (title){
var inner_title = clojure.string.join.cljs$core$IFn$_invoke$arity$2("",title);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(data,cljs.core.update,new cljs.core.Keyword("node","titles","node/titles",783660933),(function (p1__89125_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__89125_SHARP_,inner_title);
}));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(data,cljs.core.update,new cljs.core.Keyword("page","refs","page/refs",-1563352171),(function (p1__89126_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__89126_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("node","title","node/title",628940777),inner_title], null));
}));

return ["[[",inner_title,"]]"].join('');
};
var G__89154 = function (var_args){
var title = null;
if (arguments.length > 0) {
var G__89165__i = 0, G__89165__a = new Array(arguments.length -  0);
while (G__89165__i < G__89165__a.length) {G__89165__a[G__89165__i] = arguments[G__89165__i + 0]; ++G__89165__i;}
  title = new cljs.core.IndexedSeq(G__89165__a,0,null);
} 
return G__89154__delegate.call(this,title);};
G__89154.cljs$lang$maxFixedArity = 0;
G__89154.cljs$lang$applyTo = (function (arglist__89169){
var title = cljs.core.seq(arglist__89169);
return G__89154__delegate(title);
});
G__89154.cljs$core$IFn$_invoke$arity$variadic = G__89154__delegate;
return G__89154;
})()
,new cljs.core.Keyword(null,"hashtag","hashtag",-529028899),(function() { 
var G__89171__delegate = function (title){
var inner_title = clojure.string.join.cljs$core$IFn$_invoke$arity$2("",title);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(data,cljs.core.update,new cljs.core.Keyword("node","titles","node/titles",783660933),(function (p1__89127_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__89127_SHARP_,inner_title);
}));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(data,cljs.core.update,new cljs.core.Keyword("page","refs","page/refs",-1563352171),(function (p1__89128_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__89128_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("node","title","node/title",628940777),inner_title], null));
}));

return ["#",inner_title].join('');
};
var G__89171 = function (var_args){
var title = null;
if (arguments.length > 0) {
var G__89174__i = 0, G__89174__a = new Array(arguments.length -  0);
while (G__89174__i < G__89174__a.length) {G__89174__a[G__89174__i] = arguments[G__89174__i + 0]; ++G__89174__i;}
  title = new cljs.core.IndexedSeq(G__89174__a,0,null);
} 
return G__89171__delegate.call(this,title);};
G__89171.cljs$lang$maxFixedArity = 0;
G__89171.cljs$lang$applyTo = (function (arglist__89176){
var title = cljs.core.seq(arglist__89176);
return G__89171__delegate(title);
});
G__89171.cljs$core$IFn$_invoke$arity$variadic = G__89171__delegate;
return G__89171;
})()
,new cljs.core.Keyword(null,"block-ref","block-ref",362929756),(function (uid){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(data,cljs.core.update,new cljs.core.Keyword("block","refs","block/refs",-1214495349),(function (p1__89129_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__89129_SHARP_,uid);
}));
})], null);
var G__89133_89153 = athens.parser.parse_to_ast(string);
(instaparse.core.transform.cljs$core$IFn$_invoke$arity$2 ? instaparse.core.transform.cljs$core$IFn$_invoke$arity$2(G__89132_89151,G__89133_89153) : instaparse.core.transform.call(null,G__89132_89151,G__89133_89153));

return cljs.core.deref(data);
});

//# sourceMappingURL=athens.walk.js.map
