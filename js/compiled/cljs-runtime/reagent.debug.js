goog.provide('reagent.debug');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__51246__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__51246 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__51247__i = 0, G__51247__a = new Array(arguments.length -  0);
while (G__51247__i < G__51247__a.length) {G__51247__a[G__51247__i] = arguments[G__51247__i + 0]; ++G__51247__i;}
  args = new cljs.core.IndexedSeq(G__51247__a,0,null);
} 
return G__51246__delegate.call(this,args);};
G__51246.cljs$lang$maxFixedArity = 0;
G__51246.cljs$lang$applyTo = (function (arglist__51248){
var args = cljs.core.seq(arglist__51248);
return G__51246__delegate(args);
});
G__51246.cljs$core$IFn$_invoke$arity$variadic = G__51246__delegate;
return G__51246;
})()
);

(o.error = (function() { 
var G__51249__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__51249 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__51251__i = 0, G__51251__a = new Array(arguments.length -  0);
while (G__51251__i < G__51251__a.length) {G__51251__a[G__51251__i] = arguments[G__51251__i + 0]; ++G__51251__i;}
  args = new cljs.core.IndexedSeq(G__51251__a,0,null);
} 
return G__51249__delegate.call(this,args);};
G__51249.cljs$lang$maxFixedArity = 0;
G__51249.cljs$lang$applyTo = (function (arglist__51252){
var args = cljs.core.seq(arglist__51252);
return G__51249__delegate(args);
});
G__51249.cljs$core$IFn$_invoke$arity$variadic = G__51249__delegate;
return G__51249;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
