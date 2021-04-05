goog.provide('com.rpl.specter.impl');
com.rpl.specter.impl.NONE = new cljs.core.Keyword("com.rpl.specter.impl","NONE","com.rpl.specter.impl/NONE",1085349969);
com.rpl.specter.impl.spy = (function com$rpl$specter$impl$spy(e){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["SPY:"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0))], 0));

return e;
});
com.rpl.specter.impl.smart_str_STAR_ = (function com$rpl$specter$impl$smart_str_STAR_(o){
if(cljs.core.coll_QMARK_(o)){
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([o], 0));
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(o);
}
});
com.rpl.specter.impl.smart_str = (function com$rpl$specter$impl$smart_str(var_args){
var args__4742__auto__ = [];
var len__4736__auto___64346 = arguments.length;
var i__4737__auto___64349 = (0);
while(true){
if((i__4737__auto___64349 < len__4736__auto___64346)){
args__4742__auto__.push((arguments[i__4737__auto___64349]));

var G__64356 = (i__4737__auto___64349 + (1));
i__4737__auto___64349 = G__64356;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.rpl.specter.impl.smart_str.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.rpl.specter.impl.smart_str.cljs$core$IFn$_invoke$arity$variadic = (function (elems){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2(com.rpl.specter.impl.smart_str_STAR_,elems));
}));

(com.rpl.specter.impl.smart_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.rpl.specter.impl.smart_str.cljs$lang$applyTo = (function (seq61089){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61089));
}));

com.rpl.specter.impl.fast_constantly = (function com$rpl$specter$impl$fast_constantly(v){
return (function() {
var G__64375 = null;
var G__64375__0 = (function (){
return v;
});
var G__64375__1 = (function (a1){
return v;
});
var G__64375__2 = (function (a1,a2){
return v;
});
var G__64375__3 = (function (a1,a2,a3){
return v;
});
var G__64375__4 = (function (a1,a2,a3,a4){
return v;
});
var G__64375__5 = (function (a1,a2,a3,a4,a5){
return v;
});
var G__64375__6 = (function (a1,a2,a3,a4,a5,a6){
return v;
});
var G__64375__7 = (function (a1,a2,a3,a4,a5,a6,a7){
return v;
});
var G__64375__8 = (function (a1,a2,a3,a4,a5,a6,a7,a8){
return v;
});
var G__64375__9 = (function (a1,a2,a3,a4,a5,a6,a7,a8,a9){
return v;
});
var G__64375__10 = (function (a1,a2,a3,a4,a5,a6,a7,a8,a9,a10){
return v;
});
var G__64375__11 = (function() { 
var G__64380__delegate = function (a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,r){
return v;
};
var G__64380 = function (a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,var_args){
var r = null;
if (arguments.length > 10) {
var G__64381__i = 0, G__64381__a = new Array(arguments.length -  10);
while (G__64381__i < G__64381__a.length) {G__64381__a[G__64381__i] = arguments[G__64381__i + 10]; ++G__64381__i;}
  r = new cljs.core.IndexedSeq(G__64381__a,0,null);
} 
return G__64380__delegate.call(this,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,r);};
G__64380.cljs$lang$maxFixedArity = 10;
G__64380.cljs$lang$applyTo = (function (arglist__64383){
var a1 = cljs.core.first(arglist__64383);
arglist__64383 = cljs.core.next(arglist__64383);
var a2 = cljs.core.first(arglist__64383);
arglist__64383 = cljs.core.next(arglist__64383);
var a3 = cljs.core.first(arglist__64383);
arglist__64383 = cljs.core.next(arglist__64383);
var a4 = cljs.core.first(arglist__64383);
arglist__64383 = cljs.core.next(arglist__64383);
var a5 = cljs.core.first(arglist__64383);
arglist__64383 = cljs.core.next(arglist__64383);
var a6 = cljs.core.first(arglist__64383);
arglist__64383 = cljs.core.next(arglist__64383);
var a7 = cljs.core.first(arglist__64383);
arglist__64383 = cljs.core.next(arglist__64383);
var a8 = cljs.core.first(arglist__64383);
arglist__64383 = cljs.core.next(arglist__64383);
var a9 = cljs.core.first(arglist__64383);
arglist__64383 = cljs.core.next(arglist__64383);
var a10 = cljs.core.first(arglist__64383);
var r = cljs.core.rest(arglist__64383);
return G__64380__delegate(a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,r);
});
G__64380.cljs$core$IFn$_invoke$arity$variadic = G__64380__delegate;
return G__64380;
})()
;
G__64375 = function(a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,var_args){
var r = var_args;
switch(arguments.length){
case 0:
return G__64375__0.call(this);
case 1:
return G__64375__1.call(this,a1);
case 2:
return G__64375__2.call(this,a1,a2);
case 3:
return G__64375__3.call(this,a1,a2,a3);
case 4:
return G__64375__4.call(this,a1,a2,a3,a4);
case 5:
return G__64375__5.call(this,a1,a2,a3,a4,a5);
case 6:
return G__64375__6.call(this,a1,a2,a3,a4,a5,a6);
case 7:
return G__64375__7.call(this,a1,a2,a3,a4,a5,a6,a7);
case 8:
return G__64375__8.call(this,a1,a2,a3,a4,a5,a6,a7,a8);
case 9:
return G__64375__9.call(this,a1,a2,a3,a4,a5,a6,a7,a8,a9);
case 10:
return G__64375__10.call(this,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10);
default:
var G__64390 = null;
if (arguments.length > 10) {
var G__64392__i = 0, G__64392__a = new Array(arguments.length -  10);
while (G__64392__i < G__64392__a.length) {G__64392__a[G__64392__i] = arguments[G__64392__i + 10]; ++G__64392__i;}
G__64390 = new cljs.core.IndexedSeq(G__64392__a,0,null);
}
return G__64375__11.cljs$core$IFn$_invoke$arity$variadic(a1,a2,a3,a4,a5,a6,a7,a8,a9,a10, G__64390);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__64375.cljs$lang$maxFixedArity = 10;
G__64375.cljs$lang$applyTo = G__64375__11.cljs$lang$applyTo;
G__64375.cljs$core$IFn$_invoke$arity$0 = G__64375__0;
G__64375.cljs$core$IFn$_invoke$arity$1 = G__64375__1;
G__64375.cljs$core$IFn$_invoke$arity$2 = G__64375__2;
G__64375.cljs$core$IFn$_invoke$arity$3 = G__64375__3;
G__64375.cljs$core$IFn$_invoke$arity$4 = G__64375__4;
G__64375.cljs$core$IFn$_invoke$arity$5 = G__64375__5;
G__64375.cljs$core$IFn$_invoke$arity$6 = G__64375__6;
G__64375.cljs$core$IFn$_invoke$arity$7 = G__64375__7;
G__64375.cljs$core$IFn$_invoke$arity$8 = G__64375__8;
G__64375.cljs$core$IFn$_invoke$arity$9 = G__64375__9;
G__64375.cljs$core$IFn$_invoke$arity$10 = G__64375__10;
G__64375.cljs$core$IFn$_invoke$arity$variadic = G__64375__11.cljs$core$IFn$_invoke$arity$variadic;
return G__64375;
})()
});
com.rpl.specter.impl.throw_illegal_STAR_ = (function com$rpl$specter$impl$throw_illegal_STAR_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___64395 = arguments.length;
var i__4737__auto___64396 = (0);
while(true){
if((i__4737__auto___64396 < len__4736__auto___64395)){
args__4742__auto__.push((arguments[i__4737__auto___64396]));

var G__64401 = (i__4737__auto___64396 + (1));
i__4737__auto___64396 = G__64401;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.rpl.specter.impl.throw_illegal_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.rpl.specter.impl.throw_illegal_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
throw (new Error(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)));
}));

(com.rpl.specter.impl.throw_illegal_STAR_.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.rpl.specter.impl.throw_illegal_STAR_.cljs$lang$applyTo = (function (seq61101){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61101));
}));

com.rpl.specter.impl.cljs_analyzer_macroexpand_1 = (function com$rpl$specter$impl$cljs_analyzer_macroexpand_1(){
return cljs.analyzer.macroexpand_1;
});
com.rpl.specter.impl.clj_macroexpand_all = (function com$rpl$specter$impl$clj_macroexpand_all(form){
return com.rpl.specter.impl.throw_illegal_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["not implemented"], 0));
});
com.rpl.specter.impl.intern_STAR_ = (function com$rpl$specter$impl$intern_STAR_(ns,name,val){
return com.rpl.specter.impl.throw_illegal_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["intern not supported in ClojureScript"], 0));
});
com.rpl.specter.impl.benchmark = (function com$rpl$specter$impl$benchmark(iters,afn){
var start__4626__auto__ = cljs.core.system_time();
var ret__4627__auto__ = (function (){var n__4613__auto__ = iters;
var _ = (0);
while(true){
if((_ < n__4613__auto__)){
(afn.cljs$core$IFn$_invoke$arity$0 ? afn.cljs$core$IFn$_invoke$arity$0() : afn.call(null));

var G__64403 = (_ + (1));
_ = G__64403;
continue;
} else {
return null;
}
break;
}
})();
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["Elapsed time: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.system_time() - start__4626__auto__).toFixed((6)))," msecs"].join('')], 0));

return ret__4627__auto__;
});
com.rpl.specter.impl.exec_select_STAR_ = (function com$rpl$specter$impl$exec_select_STAR_(this$,vals,structure,next_fn){
return this$.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4(null,vals,structure,next_fn);
});
com.rpl.specter.impl.exec_transform_STAR_ = (function com$rpl$specter$impl$exec_transform_STAR_(this$,vals,structure,next_fn){
return this$.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4(null,vals,structure,next_fn);
});

/**
 * @interface
 */
com.rpl.specter.impl.PathComposer = function(){};

var com$rpl$specter$impl$PathComposer$do_comp_paths$dyn_64414 = (function (paths){
var x__4428__auto__ = (((paths == null))?null:paths);
var m__4429__auto__ = (com.rpl.specter.impl.do_comp_paths[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(paths) : m__4429__auto__.call(null,paths));
} else {
var m__4426__auto__ = (com.rpl.specter.impl.do_comp_paths["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(paths) : m__4426__auto__.call(null,paths));
} else {
throw cljs.core.missing_protocol("PathComposer.do-comp-paths",paths);
}
}
});
com.rpl.specter.impl.do_comp_paths = (function com$rpl$specter$impl$do_comp_paths(paths){
if((((!((paths == null)))) && ((!((paths.com$rpl$specter$impl$PathComposer$do_comp_paths$arity$1 == null)))))){
return paths.com$rpl$specter$impl$PathComposer$do_comp_paths$arity$1(paths);
} else {
return com$rpl$specter$impl$PathComposer$do_comp_paths$dyn_64414(paths);
}
});

com.rpl.specter.impl.rich_nav_QMARK_ = (function com$rpl$specter$impl$rich_nav_QMARK_(n){
if((!((n == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === n.com$rpl$specter$protocols$RichNavigator$)))){
return true;
} else {
if((!n.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(com.rpl.specter.protocols.RichNavigator,n);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(com.rpl.specter.protocols.RichNavigator,n);
}
});
com.rpl.specter.impl.comp_paths_STAR_ = (function com$rpl$specter$impl$comp_paths_STAR_(p){
if(com.rpl.specter.impl.rich_nav_QMARK_(p)){
return p;
} else {
return com.rpl.specter.impl.do_comp_paths(p);
}
});
com.rpl.specter.impl.coerce_object = (function com$rpl$specter$impl$coerce_object(this$){
if(com.rpl.specter.impl.rich_nav_QMARK_(this$)){
return this$;
} else {
if((((!((this$ == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === this$.com$rpl$specter$protocols$ImplicitNav$))))?true:(((!this$.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(com.rpl.specter.protocols.ImplicitNav,this$):false)):cljs.core.native_satisfies_QMARK_(com.rpl.specter.protocols.ImplicitNav,this$))){
return com.rpl.specter.protocols.implicit_nav(this$);
} else {
return com.rpl.specter.impl.throw_illegal_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Not a navigator: ",this$," ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.type(this$)], 0))], 0));

}
}
});

/**
 * @interface
 */
com.rpl.specter.impl.CoercePath = function(){};

var com$rpl$specter$impl$CoercePath$coerce_path$dyn_64424 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (com.rpl.specter.impl.coerce_path[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (com.rpl.specter.impl.coerce_path["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("CoercePath.coerce-path",this$);
}
}
});
com.rpl.specter.impl.coerce_path = (function com$rpl$specter$impl$coerce_path(this$){
if((((!((this$ == null)))) && ((!((this$.com$rpl$specter$impl$CoercePath$coerce_path$arity$1 == null)))))){
return this$.com$rpl$specter$impl$CoercePath$coerce_path$arity$1(this$);
} else {
return com$rpl$specter$impl$CoercePath$coerce_path$dyn_64424(this$);
}
});

goog.object.set(com.rpl.specter.impl.CoercePath,"null",true);

goog.object.set(com.rpl.specter.impl.coerce_path,"null",(function (this$){
return com.rpl.specter.impl.coerce_object(this$);
}));

(cljs.core.PersistentVector.prototype.com$rpl$specter$impl$CoercePath$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.com$rpl$specter$impl$CoercePath$coerce_path$arity$1 = (function (this$){
var this$__$1 = this;
return com.rpl.specter.impl.do_comp_paths(this$__$1);
}));

(cljs.core.IndexedSeq.prototype.com$rpl$specter$impl$CoercePath$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.IndexedSeq.prototype.com$rpl$specter$impl$CoercePath$coerce_path$arity$1 = (function (this$){
var this$__$1 = this;
return com.rpl.specter.impl.coerce_path(cljs.core.vec(this$__$1));
}));

(cljs.core.EmptyList.prototype.com$rpl$specter$impl$CoercePath$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.EmptyList.prototype.com$rpl$specter$impl$CoercePath$coerce_path$arity$1 = (function (this$){
var this$__$1 = this;
return com.rpl.specter.impl.coerce_path(cljs.core.vec(this$__$1));
}));

(cljs.core.List.prototype.com$rpl$specter$impl$CoercePath$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.List.prototype.com$rpl$specter$impl$CoercePath$coerce_path$arity$1 = (function (this$){
var this$__$1 = this;
return com.rpl.specter.impl.coerce_path(cljs.core.vec(this$__$1));
}));

(cljs.core.LazySeq.prototype.com$rpl$specter$impl$CoercePath$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.com$rpl$specter$impl$CoercePath$coerce_path$arity$1 = (function (this$){
var this$__$1 = this;
return com.rpl.specter.impl.coerce_path(cljs.core.vec(this$__$1));
}));

(cljs.core.Subvec.prototype.com$rpl$specter$impl$CoercePath$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Subvec.prototype.com$rpl$specter$impl$CoercePath$coerce_path$arity$1 = (function (this$){
var this$__$1 = this;
return com.rpl.specter.impl.coerce_path(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,this$__$1));
}));

goog.object.set(com.rpl.specter.impl.CoercePath,"_",true);

goog.object.set(com.rpl.specter.impl.coerce_path,"_",(function (this$){
return com.rpl.specter.impl.coerce_object(this$);
}));
com.rpl.specter.impl.STAY_STAR_ = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.impl !== 'undefined') && (typeof com.rpl.specter.impl.t_com$rpl$specter$impl61130 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.impl.t_com$rpl$specter$impl61130 = (function (meta61131){
this.meta61131 = meta61131;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.impl.t_com$rpl$specter$impl61130.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_61132,meta61131__$1){
var self__ = this;
var _61132__$1 = this;
return (new com.rpl.specter.impl.t_com$rpl$specter$impl61130(meta61131__$1));
}));

(com.rpl.specter.impl.t_com$rpl$specter$impl61130.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_61132){
var self__ = this;
var _61132__$1 = this;
return self__.meta61131;
}));

(com.rpl.specter.impl.t_com$rpl$specter$impl61130.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.impl.t_com$rpl$specter$impl61130.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,structure) : next_fn.call(null,vals,structure));
}));

(com.rpl.specter.impl.t_com$rpl$specter$impl61130.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,structure) : next_fn.call(null,vals,structure));
}));

(com.rpl.specter.impl.t_com$rpl$specter$impl61130.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta61131","meta61131",-704025057,null)], null);
}));

(com.rpl.specter.impl.t_com$rpl$specter$impl61130.cljs$lang$type = true);

(com.rpl.specter.impl.t_com$rpl$specter$impl61130.cljs$lang$ctorStr = "com.rpl.specter.impl/t_com$rpl$specter$impl61130");

(com.rpl.specter.impl.t_com$rpl$specter$impl61130.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter.impl/t_com$rpl$specter$impl61130");
}));

/**
 * Positional factory function for com.rpl.specter.impl/t_com$rpl$specter$impl61130.
 */
com.rpl.specter.impl.__GT_t_com$rpl$specter$impl61130 = (function com$rpl$specter$impl$__GT_t_com$rpl$specter$impl61130(meta61131){
return (new com.rpl.specter.impl.t_com$rpl$specter$impl61130(meta61131));
});

}

return (new com.rpl.specter.impl.t_com$rpl$specter$impl61130(cljs.core.PersistentArrayMap.EMPTY));
})()
;
com.rpl.specter.impl.combine_two_navs = (function com$rpl$specter$impl$combine_two_navs(nav1,nav2){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.impl !== 'undefined') && (typeof com.rpl.specter.impl.t_com$rpl$specter$impl61149 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.impl.t_com$rpl$specter$impl61149 = (function (nav1,nav2,meta61150){
this.nav1 = nav1;
this.nav2 = nav2;
this.meta61150 = meta61150;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.impl.t_com$rpl$specter$impl61149.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_61151,meta61150__$1){
var self__ = this;
var _61151__$1 = this;
return (new com.rpl.specter.impl.t_com$rpl$specter$impl61149(self__.nav1,self__.nav2,meta61150__$1));
}));

(com.rpl.specter.impl.t_com$rpl$specter$impl61149.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_61151){
var self__ = this;
var _61151__$1 = this;
return self__.meta61150;
}));

(com.rpl.specter.impl.t_com$rpl$specter$impl61149.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.impl.t_com$rpl$specter$impl61149.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.impl.exec_select_STAR_(self__.nav1,vals,structure,(function (vals_next,structure_next){
return com.rpl.specter.impl.exec_select_STAR_(self__.nav2,vals_next,structure_next,next_fn);
}));
}));

(com.rpl.specter.impl.t_com$rpl$specter$impl61149.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.impl.exec_transform_STAR_(self__.nav1,vals,structure,(function (vals_next,structure_next){
return com.rpl.specter.impl.exec_transform_STAR_(self__.nav2,vals_next,structure_next,next_fn);
}));
}));

(com.rpl.specter.impl.t_com$rpl$specter$impl61149.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nav1","nav1",-228471230,null),new cljs.core.Symbol(null,"nav2","nav2",2108276356,null),new cljs.core.Symbol(null,"meta61150","meta61150",-1095343013,null)], null);
}));

(com.rpl.specter.impl.t_com$rpl$specter$impl61149.cljs$lang$type = true);

(com.rpl.specter.impl.t_com$rpl$specter$impl61149.cljs$lang$ctorStr = "com.rpl.specter.impl/t_com$rpl$specter$impl61149");

(com.rpl.specter.impl.t_com$rpl$specter$impl61149.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter.impl/t_com$rpl$specter$impl61149");
}));

/**
 * Positional factory function for com.rpl.specter.impl/t_com$rpl$specter$impl61149.
 */
com.rpl.specter.impl.__GT_t_com$rpl$specter$impl61149 = (function com$rpl$specter$impl$combine_two_navs_$___GT_t_com$rpl$specter$impl61149(nav1__$1,nav2__$1,meta61150){
return (new com.rpl.specter.impl.t_com$rpl$specter$impl61149(nav1__$1,nav2__$1,meta61150));
});

}

return (new com.rpl.specter.impl.t_com$rpl$specter$impl61149(nav1,nav2,cljs.core.PersistentArrayMap.EMPTY));
});
goog.object.set(com.rpl.specter.impl.PathComposer,"null",true);

goog.object.set(com.rpl.specter.impl.do_comp_paths,"null",(function (o){
return com.rpl.specter.impl.coerce_path(o);
}));

goog.object.set(com.rpl.specter.impl.PathComposer,"_",true);

goog.object.set(com.rpl.specter.impl.do_comp_paths,"_",(function (o){
return com.rpl.specter.impl.coerce_path(o);
}));

(cljs.core.PersistentVector.prototype.com$rpl$specter$impl$PathComposer$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.com$rpl$specter$impl$PathComposer$do_comp_paths$arity$1 = (function (navigators){
var navigators__$1 = this;
var coerced = cljs.core.map.cljs$core$IFn$_invoke$arity$2(com.rpl.specter.impl.coerce_path,navigators__$1);
if(cljs.core.empty_QMARK_(coerced)){
return com.rpl.specter.impl.STAY_STAR_;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(coerced))){
return cljs.core.first(coerced);
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(com.rpl.specter.impl.combine_two_navs,coerced);

}
}
}));

/**
 * @interface
 */
com.rpl.specter.impl.PMutableCell = function(){};

var com$rpl$specter$impl$PMutableCell$set_cell$dyn_64459 = (function (cell,x){
var x__4428__auto__ = (((cell == null))?null:cell);
var m__4429__auto__ = (com.rpl.specter.impl.set_cell[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(cell,x) : m__4429__auto__.call(null,cell,x));
} else {
var m__4426__auto__ = (com.rpl.specter.impl.set_cell["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(cell,x) : m__4426__auto__.call(null,cell,x));
} else {
throw cljs.core.missing_protocol("PMutableCell.set_cell",cell);
}
}
});
com.rpl.specter.impl.set_cell = (function com$rpl$specter$impl$set_cell(cell,x){
if((((!((cell == null)))) && ((!((cell.com$rpl$specter$impl$PMutableCell$set_cell$arity$2 == null)))))){
return cell.com$rpl$specter$impl$PMutableCell$set_cell$arity$2(cell,x);
} else {
return com$rpl$specter$impl$PMutableCell$set_cell$dyn_64459(cell,x);
}
});


/**
* @constructor
 * @implements {com.rpl.specter.impl.PMutableCell}
*/
com.rpl.specter.impl.MutableCell = (function (q){
this.q = q;
});
(com.rpl.specter.impl.MutableCell.prototype.com$rpl$specter$impl$PMutableCell$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.impl.MutableCell.prototype.com$rpl$specter$impl$PMutableCell$set_cell$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
return (self__.q = x);
}));

(com.rpl.specter.impl.MutableCell.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"q","q",-1965434072,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"volatile-mutable","volatile-mutable",1731728411),true], null))], null);
}));

(com.rpl.specter.impl.MutableCell.cljs$lang$type = true);

(com.rpl.specter.impl.MutableCell.cljs$lang$ctorStr = "com.rpl.specter.impl/MutableCell");

(com.rpl.specter.impl.MutableCell.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter.impl/MutableCell");
}));

/**
 * Positional factory function for com.rpl.specter.impl/MutableCell.
 */
com.rpl.specter.impl.__GT_MutableCell = (function com$rpl$specter$impl$__GT_MutableCell(q){
return (new com.rpl.specter.impl.MutableCell(q));
});

com.rpl.specter.impl.mutable_cell = (function com$rpl$specter$impl$mutable_cell(var_args){
var G__61166 = arguments.length;
switch (G__61166) {
case 0:
return com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$0 = (function (){
return com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$1(null);
}));

(com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$1 = (function (init){
return (new com.rpl.specter.impl.MutableCell(init));
}));

(com.rpl.specter.impl.mutable_cell.cljs$lang$maxFixedArity = 1);

com.rpl.specter.impl.set_cell_BANG_ = (function com$rpl$specter$impl$set_cell_BANG_(cell,val){
return com.rpl.specter.impl.set_cell(cell,val);
});
com.rpl.specter.impl.get_cell = (function com$rpl$specter$impl$get_cell(cell){
return cell.q;
});
com.rpl.specter.impl.update_cell_BANG_ = (function com$rpl$specter$impl$update_cell_BANG_(cell,afn){
var ret = (function (){var G__61167 = com.rpl.specter.impl.get_cell(cell);
return (afn.cljs$core$IFn$_invoke$arity$1 ? afn.cljs$core$IFn$_invoke$arity$1(G__61167) : afn.call(null,G__61167));
})();
com.rpl.specter.impl.set_cell_BANG_(cell,ret);

return ret;
});
com.rpl.specter.impl.compiled_traverse_with_vals_STAR_ = (function com$rpl$specter$impl$compiled_traverse_with_vals_STAR_(path,result_fn,vals,structure){
return com.rpl.specter.impl.exec_select_STAR_(path,vals,structure,(function (vals__$1,structure__$1){
if((vals__$1 === cljs.core.PersistentVector.EMPTY)){
return (result_fn.cljs$core$IFn$_invoke$arity$1 ? result_fn.cljs$core$IFn$_invoke$arity$1(structure__$1) : result_fn.call(null,structure__$1));
} else {
var G__61177 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vals__$1,structure__$1);
return (result_fn.cljs$core$IFn$_invoke$arity$1 ? result_fn.cljs$core$IFn$_invoke$arity$1(G__61177) : result_fn.call(null,G__61177));
}
}));
});
com.rpl.specter.impl.compiled_traverse_STAR_ = (function com$rpl$specter$impl$compiled_traverse_STAR_(path,result_fn,structure){
return com.rpl.specter.impl.compiled_traverse_with_vals_STAR_(path,result_fn,cljs.core.PersistentVector.EMPTY,structure);
});
com.rpl.specter.impl.do_compiled_traverse_STAR_ = (function com$rpl$specter$impl$do_compiled_traverse_STAR_(apath,structure){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.impl !== 'undefined') && (typeof com.rpl.specter.impl.t_com$rpl$specter$impl61188 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IReduce}
*/
com.rpl.specter.impl.t_com$rpl$specter$impl61188 = (function (apath,structure,meta61189){
this.apath = apath;
this.structure = structure;
this.meta61189 = meta61189;
this.cljs$lang$protocol_mask$partition0$ = 917504;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.impl.t_com$rpl$specter$impl61188.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_61190,meta61189__$1){
var self__ = this;
var _61190__$1 = this;
return (new com.rpl.specter.impl.t_com$rpl$specter$impl61188(self__.apath,self__.structure,meta61189__$1));
}));

(com.rpl.specter.impl.t_com$rpl$specter$impl61188.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_61190){
var self__ = this;
var _61190__$1 = this;
return self__.meta61189;
}));

(com.rpl.specter.impl.t_com$rpl$specter$impl61188.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (this$,afn){
var self__ = this;
var this$__$1 = this;
return this$__$1.cljs$core$IReduce$_reduce$arity$3(null,afn,(afn.cljs$core$IFn$_invoke$arity$0 ? afn.cljs$core$IFn$_invoke$arity$0() : afn.call(null)));
}));

(com.rpl.specter.impl.t_com$rpl$specter$impl61188.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (this$,afn,start){
var self__ = this;
var this$__$1 = this;
var cell = com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$1(start);
com.rpl.specter.impl.compiled_traverse_STAR_(self__.apath,(function (elem){
var curr = com.rpl.specter.impl.get_cell(cell);
var newv = (afn.cljs$core$IFn$_invoke$arity$2 ? afn.cljs$core$IFn$_invoke$arity$2(curr,elem) : afn.call(null,curr,elem));
com.rpl.specter.impl.set_cell_BANG_(cell,newv);

return newv;
}),self__.structure);

return com.rpl.specter.impl.get_cell(cell);
}));

(com.rpl.specter.impl.t_com$rpl$specter$impl61188.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"apath","apath",567854908,null),new cljs.core.Symbol(null,"structure","structure",-1090603686,null),new cljs.core.Symbol(null,"meta61189","meta61189",1144103280,null)], null);
}));

(com.rpl.specter.impl.t_com$rpl$specter$impl61188.cljs$lang$type = true);

(com.rpl.specter.impl.t_com$rpl$specter$impl61188.cljs$lang$ctorStr = "com.rpl.specter.impl/t_com$rpl$specter$impl61188");

(com.rpl.specter.impl.t_com$rpl$specter$impl61188.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter.impl/t_com$rpl$specter$impl61188");
}));

/**
 * Positional factory function for com.rpl.specter.impl/t_com$rpl$specter$impl61188.
 */
com.rpl.specter.impl.__GT_t_com$rpl$specter$impl61188 = (function com$rpl$specter$impl$do_compiled_traverse_STAR__$___GT_t_com$rpl$specter$impl61188(apath__$1,structure__$1,meta61189){
return (new com.rpl.specter.impl.t_com$rpl$specter$impl61188(apath__$1,structure__$1,meta61189));
});

}

return (new com.rpl.specter.impl.t_com$rpl$specter$impl61188(apath,structure,cljs.core.PersistentArrayMap.EMPTY));
});
com.rpl.specter.impl.call_reduce_interface = (function com$rpl$specter$impl$call_reduce_interface(traverser,afn,start){
return traverser.cljs$core$IReduce$_reduce$arity$3(null,afn,start);
});
com.rpl.specter.impl.do_compiled_traverse = (function com$rpl$specter$impl$do_compiled_traverse(apath,structure){
var traverser = com.rpl.specter.impl.do_compiled_traverse_STAR_(apath,structure);
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.impl !== 'undefined') && (typeof com.rpl.specter.impl.t_com$rpl$specter$impl61243 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IReduce}
*/
com.rpl.specter.impl.t_com$rpl$specter$impl61243 = (function (apath,structure,traverser,meta61244){
this.apath = apath;
this.structure = structure;
this.traverser = traverser;
this.meta61244 = meta61244;
this.cljs$lang$protocol_mask$partition0$ = 917504;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.impl.t_com$rpl$specter$impl61243.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_61245,meta61244__$1){
var self__ = this;
var _61245__$1 = this;
return (new com.rpl.specter.impl.t_com$rpl$specter$impl61243(self__.apath,self__.structure,self__.traverser,meta61244__$1));
}));

(com.rpl.specter.impl.t_com$rpl$specter$impl61243.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_61245){
var self__ = this;
var _61245__$1 = this;
return self__.meta61244;
}));

(com.rpl.specter.impl.t_com$rpl$specter$impl61243.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (this$,afn){
var self__ = this;
var this$__$1 = this;
return this$__$1.cljs$core$IReduce$_reduce$arity$3(null,afn,(afn.cljs$core$IFn$_invoke$arity$0 ? afn.cljs$core$IFn$_invoke$arity$0() : afn.call(null)));
}));

(com.rpl.specter.impl.t_com$rpl$specter$impl61243.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (this$,afn,start){
var self__ = this;
var this$__$1 = this;
var res = com.rpl.specter.impl.call_reduce_interface(self__.traverser,afn,start);
return cljs.core.unreduced(res);
}));

(com.rpl.specter.impl.t_com$rpl$specter$impl61243.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"apath","apath",567854908,null),new cljs.core.Symbol(null,"structure","structure",-1090603686,null),new cljs.core.Symbol(null,"traverser","traverser",1631431381,null),new cljs.core.Symbol(null,"meta61244","meta61244",1253229614,null)], null);
}));

(com.rpl.specter.impl.t_com$rpl$specter$impl61243.cljs$lang$type = true);

(com.rpl.specter.impl.t_com$rpl$specter$impl61243.cljs$lang$ctorStr = "com.rpl.specter.impl/t_com$rpl$specter$impl61243");

(com.rpl.specter.impl.t_com$rpl$specter$impl61243.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter.impl/t_com$rpl$specter$impl61243");
}));

/**
 * Positional factory function for com.rpl.specter.impl/t_com$rpl$specter$impl61243.
 */
com.rpl.specter.impl.__GT_t_com$rpl$specter$impl61243 = (function com$rpl$specter$impl$do_compiled_traverse_$___GT_t_com$rpl$specter$impl61243(apath__$1,structure__$1,traverser__$1,meta61244){
return (new com.rpl.specter.impl.t_com$rpl$specter$impl61243(apath__$1,structure__$1,traverser__$1,meta61244));
});

}

return (new com.rpl.specter.impl.t_com$rpl$specter$impl61243(apath,structure,traverser,cljs.core.PersistentArrayMap.EMPTY));
});
com.rpl.specter.impl.compiled_traverse_all_STAR_ = (function com$rpl$specter$impl$compiled_traverse_all_STAR_(path){
return (function (xf){
return (function() {
var G__64519 = null;
var G__64519__0 = (function (){
return (xf.cljs$core$IFn$_invoke$arity$0 ? xf.cljs$core$IFn$_invoke$arity$0() : xf.call(null));
});
var G__64519__1 = (function (result){
return (xf.cljs$core$IFn$_invoke$arity$1 ? xf.cljs$core$IFn$_invoke$arity$1(result) : xf.call(null,result));
});
var G__64519__2 = (function (result,input){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (r,i){
return (xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(r,i) : xf.call(null,r,i));
}),result,com.rpl.specter.impl.do_compiled_traverse_STAR_(path,input));
});
G__64519 = function(result,input){
switch(arguments.length){
case 0:
return G__64519__0.call(this);
case 1:
return G__64519__1.call(this,result);
case 2:
return G__64519__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__64519.cljs$core$IFn$_invoke$arity$0 = G__64519__0;
G__64519.cljs$core$IFn$_invoke$arity$1 = G__64519__1;
G__64519.cljs$core$IFn$_invoke$arity$2 = G__64519__2;
return G__64519;
})()
});
});
com.rpl.specter.impl.compiled_select_STAR_ = (function com$rpl$specter$impl$compiled_select_STAR_(path,structure){
var res = com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$1(cljs.core.transient$(cljs.core.PersistentVector.EMPTY));
var result_fn = (function (structure__$1){
var curr = com.rpl.specter.impl.get_cell(res);
return com.rpl.specter.impl.set_cell_BANG_(res,cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(curr,structure__$1));
});
com.rpl.specter.impl.compiled_traverse_STAR_(path,result_fn,structure);

return cljs.core.persistent_BANG_(com.rpl.specter.impl.get_cell(res));
});
com.rpl.specter.impl.compiled_select_one_STAR_ = (function com$rpl$specter$impl$compiled_select_one_STAR_(path,structure){
var res = com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$1(com.rpl.specter.impl.NONE);
var result_fn = (function (structure__$1){
var curr = com.rpl.specter.impl.get_cell(res);
if((curr === com.rpl.specter.impl.NONE)){
return com.rpl.specter.impl.set_cell_BANG_(res,structure__$1);
} else {
return com.rpl.specter.impl.throw_illegal_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["More than one element found in structure: ",structure__$1], 0));
}
});
com.rpl.specter.impl.compiled_traverse_STAR_(path,result_fn,structure);

var ret = com.rpl.specter.impl.get_cell(res);
if((ret === com.rpl.specter.impl.NONE)){
return null;
} else {
return ret;
}
});
com.rpl.specter.impl.compiled_select_one_BANG__STAR_ = (function com$rpl$specter$impl$compiled_select_one_BANG__STAR_(path,structure){
var res = com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$1(com.rpl.specter.impl.NONE);
var result_fn = (function (structure__$1){
var curr = com.rpl.specter.impl.get_cell(res);
if((curr === com.rpl.specter.impl.NONE)){
return com.rpl.specter.impl.set_cell_BANG_(res,structure__$1);
} else {
return com.rpl.specter.impl.throw_illegal_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["More than one element found in structure: ",structure__$1], 0));
}
});
com.rpl.specter.impl.compiled_traverse_STAR_(path,result_fn,structure);

var ret = com.rpl.specter.impl.get_cell(res);
if((com.rpl.specter.impl.NONE === ret)){
com.rpl.specter.impl.throw_illegal_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Found no elements for select-one! on ",structure], 0));
} else {
}

return ret;
});
com.rpl.specter.impl.compiled_select_any_STAR_ = (function com$rpl$specter$impl$compiled_select_any_STAR_(var_args){
var G__61308 = arguments.length;
switch (G__61308) {
case 2:
return com.rpl.specter.impl.compiled_select_any_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.rpl.specter.impl.compiled_select_any_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.rpl.specter.impl.compiled_select_any_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (path,structure){
return com.rpl.specter.impl.compiled_select_any_STAR_.cljs$core$IFn$_invoke$arity$3(path,cljs.core.PersistentVector.EMPTY,structure);
}));

(com.rpl.specter.impl.compiled_select_any_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (path,vals,structure){
return cljs.core.unreduced(com.rpl.specter.impl.compiled_traverse_with_vals_STAR_(path,cljs.core.reduced,vals,structure));
}));

(com.rpl.specter.impl.compiled_select_any_STAR_.cljs$lang$maxFixedArity = 3);

com.rpl.specter.impl.compiled_select_first_STAR_ = (function com$rpl$specter$impl$compiled_select_first_STAR_(path,structure){
var ret = com.rpl.specter.impl.compiled_select_any_STAR_.cljs$core$IFn$_invoke$arity$2(path,structure);
if((ret === com.rpl.specter.impl.NONE)){
return null;
} else {
return ret;
}
});
com.rpl.specter.impl.compiled_selected_any_QMARK__STAR_ = (function com$rpl$specter$impl$compiled_selected_any_QMARK__STAR_(path,structure){
return (!((com.rpl.specter.impl.NONE === com.rpl.specter.impl.compiled_select_any_STAR_.cljs$core$IFn$_invoke$arity$2(path,structure))));
});
com.rpl.specter.impl.terminal_STAR_ = (function com$rpl$specter$impl$terminal_STAR_(afn,vals,structure){
if((vals === cljs.core.PersistentVector.EMPTY)){
return (afn.cljs$core$IFn$_invoke$arity$1 ? afn.cljs$core$IFn$_invoke$arity$1(structure) : afn.call(null,structure));
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(afn,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vals,structure));
}
});
com.rpl.specter.impl.compiled_transform_STAR_ = (function com$rpl$specter$impl$compiled_transform_STAR_(nav,transform_fn,structure){
return com.rpl.specter.impl.exec_transform_STAR_(nav,cljs.core.PersistentVector.EMPTY,structure,(function (vals,structure__$1){
return com.rpl.specter.impl.terminal_STAR_(transform_fn,vals,structure__$1);
}));
});
com.rpl.specter.impl.compiled_vtransform_STAR_ = (function com$rpl$specter$impl$compiled_vtransform_STAR_(nav,transform_fn,structure){
return com.rpl.specter.impl.exec_transform_STAR_(nav,cljs.core.PersistentVector.EMPTY,structure,transform_fn);
});
com.rpl.specter.impl.fn_invocation_QMARK_ = (function com$rpl$specter$impl$fn_invocation_QMARK_(f){
return (((f instanceof cljs.core.LazySeq)) || (cljs.core.list_QMARK_(f)));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
com.rpl.specter.impl.LocalSym = (function (val,sym,__meta,__extmap,__hash){
this.val = val;
this.sym = sym;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(com.rpl.specter.impl.LocalSym.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(com.rpl.specter.impl.LocalSym.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k61365,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__61377 = k61365;
var G__61377__$1 = (((G__61377 instanceof cljs.core.Keyword))?G__61377.fqn:null);
switch (G__61377__$1) {
case "val":
return self__.val;

break;
case "sym":
return self__.sym;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k61365,else__4383__auto__);

}
}));

(com.rpl.specter.impl.LocalSym.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__61388){
var vec__61389 = p__61388;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61389,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61389,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(com.rpl.specter.impl.LocalSym.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#com.rpl.specter.impl.LocalSym{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"val","val",128701612),self__.val],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"sym","sym",-1444860305),self__.sym],null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LocalSym.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__61364){
var self__ = this;
var G__61364__$1 = this;
return (new cljs.core.RecordIter((0),G__61364__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"val","val",128701612),new cljs.core.Keyword(null,"sym","sym",-1444860305)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(com.rpl.specter.impl.LocalSym.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(com.rpl.specter.impl.LocalSym.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new com.rpl.specter.impl.LocalSym(self__.val,self__.sym,self__.__meta,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LocalSym.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(com.rpl.specter.impl.LocalSym.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (1023826277 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(com.rpl.specter.impl.LocalSym.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this61366,other61367){
var self__ = this;
var this61366__$1 = this;
return (((!((other61367 == null)))) && ((this61366__$1.constructor === other61367.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this61366__$1.val,other61367.val)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this61366__$1.sym,other61367.sym)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this61366__$1.__extmap,other61367.__extmap)));
}));

(com.rpl.specter.impl.LocalSym.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"val","val",128701612),null,new cljs.core.Keyword(null,"sym","sym",-1444860305),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new com.rpl.specter.impl.LocalSym(self__.val,self__.sym,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(com.rpl.specter.impl.LocalSym.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__61364){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__61415 = cljs.core.keyword_identical_QMARK_;
var expr__61416 = k__4388__auto__;
if(cljs.core.truth_((pred__61415.cljs$core$IFn$_invoke$arity$2 ? pred__61415.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"val","val",128701612),expr__61416) : pred__61415.call(null,new cljs.core.Keyword(null,"val","val",128701612),expr__61416)))){
return (new com.rpl.specter.impl.LocalSym(G__61364,self__.sym,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__61415.cljs$core$IFn$_invoke$arity$2 ? pred__61415.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"sym","sym",-1444860305),expr__61416) : pred__61415.call(null,new cljs.core.Keyword(null,"sym","sym",-1444860305),expr__61416)))){
return (new com.rpl.specter.impl.LocalSym(self__.val,G__61364,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LocalSym(self__.val,self__.sym,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__61364),null));
}
}
}));

(com.rpl.specter.impl.LocalSym.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"val","val",128701612),self__.val,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"sym","sym",-1444860305),self__.sym,null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LocalSym.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__61364){
var self__ = this;
var this__4379__auto____$1 = this;
return (new com.rpl.specter.impl.LocalSym(self__.val,self__.sym,G__61364,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LocalSym.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(com.rpl.specter.impl.LocalSym.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"val","val",1769233139,null),new cljs.core.Symbol(null,"sym","sym",195671222,null)], null);
}));

(com.rpl.specter.impl.LocalSym.cljs$lang$type = true);

(com.rpl.specter.impl.LocalSym.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/LocalSym",null,(1),null));
}));

(com.rpl.specter.impl.LocalSym.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"com.rpl.specter.impl/LocalSym");
}));

/**
 * Positional factory function for com.rpl.specter.impl/LocalSym.
 */
com.rpl.specter.impl.__GT_LocalSym = (function com$rpl$specter$impl$__GT_LocalSym(val,sym){
return (new com.rpl.specter.impl.LocalSym(val,sym,null,null,null));
});

/**
 * Factory function for com.rpl.specter.impl/LocalSym, taking a map of keywords to field values.
 */
com.rpl.specter.impl.map__GT_LocalSym = (function com$rpl$specter$impl$map__GT_LocalSym(G__61369){
var extmap__4419__auto__ = (function (){var G__61437 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__61369,new cljs.core.Keyword(null,"val","val",128701612),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"sym","sym",-1444860305)], 0));
if(cljs.core.record_QMARK_(G__61369)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__61437);
} else {
return G__61437;
}
})();
return (new com.rpl.specter.impl.LocalSym(new cljs.core.Keyword(null,"val","val",128701612).cljs$core$IFn$_invoke$arity$1(G__61369),new cljs.core.Keyword(null,"sym","sym",-1444860305).cljs$core$IFn$_invoke$arity$1(G__61369),null,cljs.core.not_empty(extmap__4419__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
com.rpl.specter.impl.VarUse = (function (val,avar,sym,__meta,__extmap,__hash){
this.val = val;
this.avar = avar;
this.sym = sym;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(com.rpl.specter.impl.VarUse.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(com.rpl.specter.impl.VarUse.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k61439,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__61456 = k61439;
var G__61456__$1 = (((G__61456 instanceof cljs.core.Keyword))?G__61456.fqn:null);
switch (G__61456__$1) {
case "val":
return self__.val;

break;
case "avar":
return self__.avar;

break;
case "sym":
return self__.sym;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k61439,else__4383__auto__);

}
}));

(com.rpl.specter.impl.VarUse.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__61457){
var vec__61458 = p__61457;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61458,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61458,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(com.rpl.specter.impl.VarUse.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#com.rpl.specter.impl.VarUse{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"val","val",128701612),self__.val],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"avar","avar",1316861611),self__.avar],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"sym","sym",-1444860305),self__.sym],null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.VarUse.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__61438){
var self__ = this;
var G__61438__$1 = this;
return (new cljs.core.RecordIter((0),G__61438__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"val","val",128701612),new cljs.core.Keyword(null,"avar","avar",1316861611),new cljs.core.Keyword(null,"sym","sym",-1444860305)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(com.rpl.specter.impl.VarUse.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(com.rpl.specter.impl.VarUse.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new com.rpl.specter.impl.VarUse(self__.val,self__.avar,self__.sym,self__.__meta,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.VarUse.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
}));

(com.rpl.specter.impl.VarUse.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-1211237282 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(com.rpl.specter.impl.VarUse.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this61440,other61441){
var self__ = this;
var this61440__$1 = this;
return (((!((other61441 == null)))) && ((this61440__$1.constructor === other61441.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this61440__$1.val,other61441.val)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this61440__$1.avar,other61441.avar)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this61440__$1.sym,other61441.sym)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this61440__$1.__extmap,other61441.__extmap)));
}));

(com.rpl.specter.impl.VarUse.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"avar","avar",1316861611),null,new cljs.core.Keyword(null,"val","val",128701612),null,new cljs.core.Keyword(null,"sym","sym",-1444860305),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new com.rpl.specter.impl.VarUse(self__.val,self__.avar,self__.sym,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(com.rpl.specter.impl.VarUse.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__61438){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__61493 = cljs.core.keyword_identical_QMARK_;
var expr__61494 = k__4388__auto__;
if(cljs.core.truth_((pred__61493.cljs$core$IFn$_invoke$arity$2 ? pred__61493.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"val","val",128701612),expr__61494) : pred__61493.call(null,new cljs.core.Keyword(null,"val","val",128701612),expr__61494)))){
return (new com.rpl.specter.impl.VarUse(G__61438,self__.avar,self__.sym,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__61493.cljs$core$IFn$_invoke$arity$2 ? pred__61493.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"avar","avar",1316861611),expr__61494) : pred__61493.call(null,new cljs.core.Keyword(null,"avar","avar",1316861611),expr__61494)))){
return (new com.rpl.specter.impl.VarUse(self__.val,G__61438,self__.sym,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__61493.cljs$core$IFn$_invoke$arity$2 ? pred__61493.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"sym","sym",-1444860305),expr__61494) : pred__61493.call(null,new cljs.core.Keyword(null,"sym","sym",-1444860305),expr__61494)))){
return (new com.rpl.specter.impl.VarUse(self__.val,self__.avar,G__61438,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.VarUse(self__.val,self__.avar,self__.sym,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__61438),null));
}
}
}
}));

(com.rpl.specter.impl.VarUse.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"val","val",128701612),self__.val,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"avar","avar",1316861611),self__.avar,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"sym","sym",-1444860305),self__.sym,null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.VarUse.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__61438){
var self__ = this;
var this__4379__auto____$1 = this;
return (new com.rpl.specter.impl.VarUse(self__.val,self__.avar,self__.sym,G__61438,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.VarUse.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(com.rpl.specter.impl.VarUse.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"val","val",1769233139,null),new cljs.core.Symbol(null,"avar","avar",-1337574158,null),new cljs.core.Symbol(null,"sym","sym",195671222,null)], null);
}));

(com.rpl.specter.impl.VarUse.cljs$lang$type = true);

(com.rpl.specter.impl.VarUse.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/VarUse",null,(1),null));
}));

(com.rpl.specter.impl.VarUse.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"com.rpl.specter.impl/VarUse");
}));

/**
 * Positional factory function for com.rpl.specter.impl/VarUse.
 */
com.rpl.specter.impl.__GT_VarUse = (function com$rpl$specter$impl$__GT_VarUse(val,avar,sym){
return (new com.rpl.specter.impl.VarUse(val,avar,sym,null,null,null));
});

/**
 * Factory function for com.rpl.specter.impl/VarUse, taking a map of keywords to field values.
 */
com.rpl.specter.impl.map__GT_VarUse = (function com$rpl$specter$impl$map__GT_VarUse(G__61444){
var extmap__4419__auto__ = (function (){var G__61514 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__61444,new cljs.core.Keyword(null,"val","val",128701612),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"avar","avar",1316861611),new cljs.core.Keyword(null,"sym","sym",-1444860305)], 0));
if(cljs.core.record_QMARK_(G__61444)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__61514);
} else {
return G__61514;
}
})();
return (new com.rpl.specter.impl.VarUse(new cljs.core.Keyword(null,"val","val",128701612).cljs$core$IFn$_invoke$arity$1(G__61444),new cljs.core.Keyword(null,"avar","avar",1316861611).cljs$core$IFn$_invoke$arity$1(G__61444),new cljs.core.Keyword(null,"sym","sym",-1444860305).cljs$core$IFn$_invoke$arity$1(G__61444),null,cljs.core.not_empty(extmap__4419__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
com.rpl.specter.impl.SpecialFormUse = (function (val,code,__meta,__extmap,__hash){
this.val = val;
this.code = code;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k61516,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__61526 = k61516;
var G__61526__$1 = (((G__61526 instanceof cljs.core.Keyword))?G__61526.fqn:null);
switch (G__61526__$1) {
case "val":
return self__.val;

break;
case "code":
return self__.code;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k61516,else__4383__auto__);

}
}));

(com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__61527){
var vec__61528 = p__61527;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61528,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61528,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#com.rpl.specter.impl.SpecialFormUse{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"val","val",128701612),self__.val],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"code","code",1586293142),self__.code],null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__61515){
var self__ = this;
var G__61515__$1 = this;
return (new cljs.core.RecordIter((0),G__61515__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"val","val",128701612),new cljs.core.Keyword(null,"code","code",1586293142)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new com.rpl.specter.impl.SpecialFormUse(self__.val,self__.code,self__.__meta,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (1595666739 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this61517,other61518){
var self__ = this;
var this61517__$1 = this;
return (((!((other61518 == null)))) && ((this61517__$1.constructor === other61518.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this61517__$1.val,other61518.val)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this61517__$1.code,other61518.code)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this61517__$1.__extmap,other61518.__extmap)));
}));

(com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"val","val",128701612),null,new cljs.core.Keyword(null,"code","code",1586293142),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new com.rpl.specter.impl.SpecialFormUse(self__.val,self__.code,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__61515){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__61574 = cljs.core.keyword_identical_QMARK_;
var expr__61575 = k__4388__auto__;
if(cljs.core.truth_((pred__61574.cljs$core$IFn$_invoke$arity$2 ? pred__61574.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"val","val",128701612),expr__61575) : pred__61574.call(null,new cljs.core.Keyword(null,"val","val",128701612),expr__61575)))){
return (new com.rpl.specter.impl.SpecialFormUse(G__61515,self__.code,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__61574.cljs$core$IFn$_invoke$arity$2 ? pred__61574.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"code","code",1586293142),expr__61575) : pred__61574.call(null,new cljs.core.Keyword(null,"code","code",1586293142),expr__61575)))){
return (new com.rpl.specter.impl.SpecialFormUse(self__.val,G__61515,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.SpecialFormUse(self__.val,self__.code,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__61515),null));
}
}
}));

(com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"val","val",128701612),self__.val,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"code","code",1586293142),self__.code,null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__61515){
var self__ = this;
var this__4379__auto____$1 = this;
return (new com.rpl.specter.impl.SpecialFormUse(self__.val,self__.code,G__61515,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(com.rpl.specter.impl.SpecialFormUse.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"val","val",1769233139,null),new cljs.core.Symbol(null,"code","code",-1068142627,null)], null);
}));

(com.rpl.specter.impl.SpecialFormUse.cljs$lang$type = true);

(com.rpl.specter.impl.SpecialFormUse.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/SpecialFormUse",null,(1),null));
}));

(com.rpl.specter.impl.SpecialFormUse.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"com.rpl.specter.impl/SpecialFormUse");
}));

/**
 * Positional factory function for com.rpl.specter.impl/SpecialFormUse.
 */
com.rpl.specter.impl.__GT_SpecialFormUse = (function com$rpl$specter$impl$__GT_SpecialFormUse(val,code){
return (new com.rpl.specter.impl.SpecialFormUse(val,code,null,null,null));
});

/**
 * Factory function for com.rpl.specter.impl/SpecialFormUse, taking a map of keywords to field values.
 */
com.rpl.specter.impl.map__GT_SpecialFormUse = (function com$rpl$specter$impl$map__GT_SpecialFormUse(G__61520){
var extmap__4419__auto__ = (function (){var G__61582 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__61520,new cljs.core.Keyword(null,"val","val",128701612),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"code","code",1586293142)], 0));
if(cljs.core.record_QMARK_(G__61520)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__61582);
} else {
return G__61582;
}
})();
return (new com.rpl.specter.impl.SpecialFormUse(new cljs.core.Keyword(null,"val","val",128701612).cljs$core$IFn$_invoke$arity$1(G__61520),new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(G__61520),null,cljs.core.not_empty(extmap__4419__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
com.rpl.specter.impl.FnInvocation = (function (op,params,code,__meta,__extmap,__hash){
this.op = op;
this.params = params;
this.code = code;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(com.rpl.specter.impl.FnInvocation.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(com.rpl.specter.impl.FnInvocation.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k61593,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__61613 = k61593;
var G__61613__$1 = (((G__61613 instanceof cljs.core.Keyword))?G__61613.fqn:null);
switch (G__61613__$1) {
case "op":
return self__.op;

break;
case "params":
return self__.params;

break;
case "code":
return self__.code;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k61593,else__4383__auto__);

}
}));

(com.rpl.specter.impl.FnInvocation.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__61621){
var vec__61625 = p__61621;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61625,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61625,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(com.rpl.specter.impl.FnInvocation.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#com.rpl.specter.impl.FnInvocation{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"op","op",-1882987955),self__.op],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"code","code",1586293142),self__.code],null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.FnInvocation.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__61592){
var self__ = this;
var G__61592__$1 = this;
return (new cljs.core.RecordIter((0),G__61592__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"code","code",1586293142)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(com.rpl.specter.impl.FnInvocation.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(com.rpl.specter.impl.FnInvocation.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new com.rpl.specter.impl.FnInvocation(self__.op,self__.params,self__.code,self__.__meta,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.FnInvocation.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
}));

(com.rpl.specter.impl.FnInvocation.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-350872877 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(com.rpl.specter.impl.FnInvocation.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this61594,other61595){
var self__ = this;
var this61594__$1 = this;
return (((!((other61595 == null)))) && ((this61594__$1.constructor === other61595.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this61594__$1.op,other61595.op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this61594__$1.params,other61595.params)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this61594__$1.code,other61595.code)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this61594__$1.__extmap,other61595.__extmap)));
}));

(com.rpl.specter.impl.FnInvocation.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"params","params",710516235),null,new cljs.core.Keyword(null,"op","op",-1882987955),null,new cljs.core.Keyword(null,"code","code",1586293142),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new com.rpl.specter.impl.FnInvocation(self__.op,self__.params,self__.code,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(com.rpl.specter.impl.FnInvocation.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__61592){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__61645 = cljs.core.keyword_identical_QMARK_;
var expr__61646 = k__4388__auto__;
if(cljs.core.truth_((pred__61645.cljs$core$IFn$_invoke$arity$2 ? pred__61645.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"op","op",-1882987955),expr__61646) : pred__61645.call(null,new cljs.core.Keyword(null,"op","op",-1882987955),expr__61646)))){
return (new com.rpl.specter.impl.FnInvocation(G__61592,self__.params,self__.code,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__61645.cljs$core$IFn$_invoke$arity$2 ? pred__61645.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"params","params",710516235),expr__61646) : pred__61645.call(null,new cljs.core.Keyword(null,"params","params",710516235),expr__61646)))){
return (new com.rpl.specter.impl.FnInvocation(self__.op,G__61592,self__.code,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__61645.cljs$core$IFn$_invoke$arity$2 ? pred__61645.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"code","code",1586293142),expr__61646) : pred__61645.call(null,new cljs.core.Keyword(null,"code","code",1586293142),expr__61646)))){
return (new com.rpl.specter.impl.FnInvocation(self__.op,self__.params,G__61592,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.FnInvocation(self__.op,self__.params,self__.code,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__61592),null));
}
}
}
}));

(com.rpl.specter.impl.FnInvocation.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"op","op",-1882987955),self__.op,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"params","params",710516235),self__.params,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"code","code",1586293142),self__.code,null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.FnInvocation.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__61592){
var self__ = this;
var this__4379__auto____$1 = this;
return (new com.rpl.specter.impl.FnInvocation(self__.op,self__.params,self__.code,G__61592,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.FnInvocation.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(com.rpl.specter.impl.FnInvocation.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"op","op",-242456428,null),new cljs.core.Symbol(null,"params","params",-1943919534,null),new cljs.core.Symbol(null,"code","code",-1068142627,null)], null);
}));

(com.rpl.specter.impl.FnInvocation.cljs$lang$type = true);

(com.rpl.specter.impl.FnInvocation.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/FnInvocation",null,(1),null));
}));

(com.rpl.specter.impl.FnInvocation.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"com.rpl.specter.impl/FnInvocation");
}));

/**
 * Positional factory function for com.rpl.specter.impl/FnInvocation.
 */
com.rpl.specter.impl.__GT_FnInvocation = (function com$rpl$specter$impl$__GT_FnInvocation(op,params,code){
return (new com.rpl.specter.impl.FnInvocation(op,params,code,null,null,null));
});

/**
 * Factory function for com.rpl.specter.impl/FnInvocation, taking a map of keywords to field values.
 */
com.rpl.specter.impl.map__GT_FnInvocation = (function com$rpl$specter$impl$map__GT_FnInvocation(G__61600){
var extmap__4419__auto__ = (function (){var G__61661 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__61600,new cljs.core.Keyword(null,"op","op",-1882987955),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"code","code",1586293142)], 0));
if(cljs.core.record_QMARK_(G__61600)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__61661);
} else {
return G__61661;
}
})();
return (new com.rpl.specter.impl.FnInvocation(new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(G__61600),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(G__61600),new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(G__61600),null,cljs.core.not_empty(extmap__4419__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
com.rpl.specter.impl.DynamicVal = (function (code,__meta,__extmap,__hash){
this.code = code;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(com.rpl.specter.impl.DynamicVal.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(com.rpl.specter.impl.DynamicVal.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k61668,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__61679 = k61668;
var G__61679__$1 = (((G__61679 instanceof cljs.core.Keyword))?G__61679.fqn:null);
switch (G__61679__$1) {
case "code":
return self__.code;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k61668,else__4383__auto__);

}
}));

(com.rpl.specter.impl.DynamicVal.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__61690){
var vec__61692 = p__61690;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61692,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61692,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(com.rpl.specter.impl.DynamicVal.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#com.rpl.specter.impl.DynamicVal{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"code","code",1586293142),self__.code],null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.DynamicVal.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__61667){
var self__ = this;
var G__61667__$1 = this;
return (new cljs.core.RecordIter((0),G__61667__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(com.rpl.specter.impl.DynamicVal.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(com.rpl.specter.impl.DynamicVal.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new com.rpl.specter.impl.DynamicVal(self__.code,self__.__meta,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.DynamicVal.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(com.rpl.specter.impl.DynamicVal.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (531988365 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(com.rpl.specter.impl.DynamicVal.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this61669,other61670){
var self__ = this;
var this61669__$1 = this;
return (((!((other61670 == null)))) && ((this61669__$1.constructor === other61670.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this61669__$1.code,other61670.code)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this61669__$1.__extmap,other61670.__extmap)));
}));

(com.rpl.specter.impl.DynamicVal.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"code","code",1586293142),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new com.rpl.specter.impl.DynamicVal(self__.code,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(com.rpl.specter.impl.DynamicVal.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__61667){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__61704 = cljs.core.keyword_identical_QMARK_;
var expr__61705 = k__4388__auto__;
if(cljs.core.truth_((pred__61704.cljs$core$IFn$_invoke$arity$2 ? pred__61704.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"code","code",1586293142),expr__61705) : pred__61704.call(null,new cljs.core.Keyword(null,"code","code",1586293142),expr__61705)))){
return (new com.rpl.specter.impl.DynamicVal(G__61667,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.DynamicVal(self__.code,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__61667),null));
}
}));

(com.rpl.specter.impl.DynamicVal.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"code","code",1586293142),self__.code,null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.DynamicVal.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__61667){
var self__ = this;
var this__4379__auto____$1 = this;
return (new com.rpl.specter.impl.DynamicVal(self__.code,G__61667,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.DynamicVal.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(com.rpl.specter.impl.DynamicVal.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"code","code",-1068142627,null)], null);
}));

(com.rpl.specter.impl.DynamicVal.cljs$lang$type = true);

(com.rpl.specter.impl.DynamicVal.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/DynamicVal",null,(1),null));
}));

(com.rpl.specter.impl.DynamicVal.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"com.rpl.specter.impl/DynamicVal");
}));

/**
 * Positional factory function for com.rpl.specter.impl/DynamicVal.
 */
com.rpl.specter.impl.__GT_DynamicVal = (function com$rpl$specter$impl$__GT_DynamicVal(code){
return (new com.rpl.specter.impl.DynamicVal(code,null,null,null));
});

/**
 * Factory function for com.rpl.specter.impl/DynamicVal, taking a map of keywords to field values.
 */
com.rpl.specter.impl.map__GT_DynamicVal = (function com$rpl$specter$impl$map__GT_DynamicVal(G__61671){
var extmap__4419__auto__ = (function (){var G__61714 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__61671,new cljs.core.Keyword(null,"code","code",1586293142));
if(cljs.core.record_QMARK_(G__61671)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__61714);
} else {
return G__61714;
}
})();
return (new com.rpl.specter.impl.DynamicVal(new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(G__61671),null,cljs.core.not_empty(extmap__4419__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
com.rpl.specter.impl.DynamicPath = (function (path,__meta,__extmap,__hash){
this.path = path;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(com.rpl.specter.impl.DynamicPath.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(com.rpl.specter.impl.DynamicPath.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k61717,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__61728 = k61717;
var G__61728__$1 = (((G__61728 instanceof cljs.core.Keyword))?G__61728.fqn:null);
switch (G__61728__$1) {
case "path":
return self__.path;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k61717,else__4383__auto__);

}
}));

(com.rpl.specter.impl.DynamicPath.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__61731){
var vec__61733 = p__61731;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61733,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61733,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(com.rpl.specter.impl.DynamicPath.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#com.rpl.specter.impl.DynamicPath{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"path","path",-188191168),self__.path],null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.DynamicPath.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__61716){
var self__ = this;
var G__61716__$1 = this;
return (new cljs.core.RecordIter((0),G__61716__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(com.rpl.specter.impl.DynamicPath.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(com.rpl.specter.impl.DynamicPath.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new com.rpl.specter.impl.DynamicPath(self__.path,self__.__meta,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.DynamicPath.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(com.rpl.specter.impl.DynamicPath.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (297748926 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(com.rpl.specter.impl.DynamicPath.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this61718,other61719){
var self__ = this;
var this61718__$1 = this;
return (((!((other61719 == null)))) && ((this61718__$1.constructor === other61719.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this61718__$1.path,other61719.path)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this61718__$1.__extmap,other61719.__extmap)));
}));

(com.rpl.specter.impl.DynamicPath.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",-188191168),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new com.rpl.specter.impl.DynamicPath(self__.path,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(com.rpl.specter.impl.DynamicPath.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__61716){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__61749 = cljs.core.keyword_identical_QMARK_;
var expr__61750 = k__4388__auto__;
if(cljs.core.truth_((pred__61749.cljs$core$IFn$_invoke$arity$2 ? pred__61749.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"path","path",-188191168),expr__61750) : pred__61749.call(null,new cljs.core.Keyword(null,"path","path",-188191168),expr__61750)))){
return (new com.rpl.specter.impl.DynamicPath(G__61716,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.DynamicPath(self__.path,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__61716),null));
}
}));

(com.rpl.specter.impl.DynamicPath.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"path","path",-188191168),self__.path,null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.DynamicPath.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__61716){
var self__ = this;
var this__4379__auto____$1 = this;
return (new com.rpl.specter.impl.DynamicPath(self__.path,G__61716,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.DynamicPath.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(com.rpl.specter.impl.DynamicPath.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null)], null);
}));

(com.rpl.specter.impl.DynamicPath.cljs$lang$type = true);

(com.rpl.specter.impl.DynamicPath.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/DynamicPath",null,(1),null));
}));

(com.rpl.specter.impl.DynamicPath.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"com.rpl.specter.impl/DynamicPath");
}));

/**
 * Positional factory function for com.rpl.specter.impl/DynamicPath.
 */
com.rpl.specter.impl.__GT_DynamicPath = (function com$rpl$specter$impl$__GT_DynamicPath(path){
return (new com.rpl.specter.impl.DynamicPath(path,null,null,null));
});

/**
 * Factory function for com.rpl.specter.impl/DynamicPath, taking a map of keywords to field values.
 */
com.rpl.specter.impl.map__GT_DynamicPath = (function com$rpl$specter$impl$map__GT_DynamicPath(G__61720){
var extmap__4419__auto__ = (function (){var G__61766 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__61720,new cljs.core.Keyword(null,"path","path",-188191168));
if(cljs.core.record_QMARK_(G__61720)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__61766);
} else {
return G__61766;
}
})();
return (new com.rpl.specter.impl.DynamicPath(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(G__61720),null,cljs.core.not_empty(extmap__4419__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
com.rpl.specter.impl.DynamicFunction = (function (op,params,code,__meta,__extmap,__hash){
this.op = op;
this.params = params;
this.code = code;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(com.rpl.specter.impl.DynamicFunction.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(com.rpl.specter.impl.DynamicFunction.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k61770,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__61777 = k61770;
var G__61777__$1 = (((G__61777 instanceof cljs.core.Keyword))?G__61777.fqn:null);
switch (G__61777__$1) {
case "op":
return self__.op;

break;
case "params":
return self__.params;

break;
case "code":
return self__.code;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k61770,else__4383__auto__);

}
}));

(com.rpl.specter.impl.DynamicFunction.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__61782){
var vec__61783 = p__61782;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61783,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61783,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(com.rpl.specter.impl.DynamicFunction.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#com.rpl.specter.impl.DynamicFunction{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"op","op",-1882987955),self__.op],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"code","code",1586293142),self__.code],null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.DynamicFunction.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__61768){
var self__ = this;
var G__61768__$1 = this;
return (new cljs.core.RecordIter((0),G__61768__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"code","code",1586293142)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(com.rpl.specter.impl.DynamicFunction.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(com.rpl.specter.impl.DynamicFunction.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new com.rpl.specter.impl.DynamicFunction(self__.op,self__.params,self__.code,self__.__meta,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.DynamicFunction.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
}));

(com.rpl.specter.impl.DynamicFunction.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-1045900877 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(com.rpl.specter.impl.DynamicFunction.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this61771,other61772){
var self__ = this;
var this61771__$1 = this;
return (((!((other61772 == null)))) && ((this61771__$1.constructor === other61772.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this61771__$1.op,other61772.op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this61771__$1.params,other61772.params)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this61771__$1.code,other61772.code)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this61771__$1.__extmap,other61772.__extmap)));
}));

(com.rpl.specter.impl.DynamicFunction.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"params","params",710516235),null,new cljs.core.Keyword(null,"op","op",-1882987955),null,new cljs.core.Keyword(null,"code","code",1586293142),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new com.rpl.specter.impl.DynamicFunction(self__.op,self__.params,self__.code,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(com.rpl.specter.impl.DynamicFunction.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__61768){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__61806 = cljs.core.keyword_identical_QMARK_;
var expr__61807 = k__4388__auto__;
if(cljs.core.truth_((pred__61806.cljs$core$IFn$_invoke$arity$2 ? pred__61806.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"op","op",-1882987955),expr__61807) : pred__61806.call(null,new cljs.core.Keyword(null,"op","op",-1882987955),expr__61807)))){
return (new com.rpl.specter.impl.DynamicFunction(G__61768,self__.params,self__.code,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__61806.cljs$core$IFn$_invoke$arity$2 ? pred__61806.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"params","params",710516235),expr__61807) : pred__61806.call(null,new cljs.core.Keyword(null,"params","params",710516235),expr__61807)))){
return (new com.rpl.specter.impl.DynamicFunction(self__.op,G__61768,self__.code,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__61806.cljs$core$IFn$_invoke$arity$2 ? pred__61806.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"code","code",1586293142),expr__61807) : pred__61806.call(null,new cljs.core.Keyword(null,"code","code",1586293142),expr__61807)))){
return (new com.rpl.specter.impl.DynamicFunction(self__.op,self__.params,G__61768,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.DynamicFunction(self__.op,self__.params,self__.code,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__61768),null));
}
}
}
}));

(com.rpl.specter.impl.DynamicFunction.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"op","op",-1882987955),self__.op,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"params","params",710516235),self__.params,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"code","code",1586293142),self__.code,null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.DynamicFunction.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__61768){
var self__ = this;
var this__4379__auto____$1 = this;
return (new com.rpl.specter.impl.DynamicFunction(self__.op,self__.params,self__.code,G__61768,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.DynamicFunction.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(com.rpl.specter.impl.DynamicFunction.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"op","op",-242456428,null),new cljs.core.Symbol(null,"params","params",-1943919534,null),new cljs.core.Symbol(null,"code","code",-1068142627,null)], null);
}));

(com.rpl.specter.impl.DynamicFunction.cljs$lang$type = true);

(com.rpl.specter.impl.DynamicFunction.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/DynamicFunction",null,(1),null));
}));

(com.rpl.specter.impl.DynamicFunction.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"com.rpl.specter.impl/DynamicFunction");
}));

/**
 * Positional factory function for com.rpl.specter.impl/DynamicFunction.
 */
com.rpl.specter.impl.__GT_DynamicFunction = (function com$rpl$specter$impl$__GT_DynamicFunction(op,params,code){
return (new com.rpl.specter.impl.DynamicFunction(op,params,code,null,null,null));
});

/**
 * Factory function for com.rpl.specter.impl/DynamicFunction, taking a map of keywords to field values.
 */
com.rpl.specter.impl.map__GT_DynamicFunction = (function com$rpl$specter$impl$map__GT_DynamicFunction(G__61775){
var extmap__4419__auto__ = (function (){var G__61816 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__61775,new cljs.core.Keyword(null,"op","op",-1882987955),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"code","code",1586293142)], 0));
if(cljs.core.record_QMARK_(G__61775)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__61816);
} else {
return G__61816;
}
})();
return (new com.rpl.specter.impl.DynamicFunction(new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(G__61775),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(G__61775),new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(G__61775),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

com.rpl.specter.impl.dynamic_param_QMARK_ = (function com$rpl$specter$impl$dynamic_param_QMARK_(o){
return cljs.core.contains_QMARK_(cljs.core.PersistentHashSet.createAsIfByAssoc([com.rpl.specter.impl.DynamicPath,com.rpl.specter.impl.DynamicFunction,com.rpl.specter.impl.DynamicVal]),cljs.core.type(o));
});
com.rpl.specter.impl.static_path_QMARK_ = (function com$rpl$specter$impl$static_path_QMARK_(path){
if(cljs.core.sequential_QMARK_(path)){
return cljs.core.every_QMARK_(com.rpl.specter.impl.static_path_QMARK_,path);
} else {
return (!(com.rpl.specter.impl.dynamic_param_QMARK_(path)));
}
});
com.rpl.specter.impl.late_path = (function com$rpl$specter$impl$late_path(path){
if(com.rpl.specter.impl.static_path_QMARK_(path)){
return com.rpl.specter.impl.comp_paths_STAR_(path);
} else {
return com.rpl.specter.impl.__GT_DynamicPath(path);
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
com.rpl.specter.impl.CachedPathInfo = (function (dynamic_QMARK_,precompiled,__meta,__extmap,__hash){
this.dynamic_QMARK_ = dynamic_QMARK_;
this.precompiled = precompiled;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k61821,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__61829 = k61821;
var G__61829__$1 = (((G__61829 instanceof cljs.core.Keyword))?G__61829.fqn:null);
switch (G__61829__$1) {
case "dynamic?":
return self__.dynamic_QMARK_;

break;
case "precompiled":
return self__.precompiled;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k61821,else__4383__auto__);

}
}));

(com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__61831){
var vec__61832 = p__61831;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61832,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61832,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#com.rpl.specter.impl.CachedPathInfo{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"dynamic?","dynamic?",680592423),self__.dynamic_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"precompiled","precompiled",-1683153609),self__.precompiled],null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__61820){
var self__ = this;
var G__61820__$1 = this;
return (new cljs.core.RecordIter((0),G__61820__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dynamic?","dynamic?",680592423),new cljs.core.Keyword(null,"precompiled","precompiled",-1683153609)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new com.rpl.specter.impl.CachedPathInfo(self__.dynamic_QMARK_,self__.precompiled,self__.__meta,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (626511117 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this61823,other61824){
var self__ = this;
var this61823__$1 = this;
return (((!((other61824 == null)))) && ((this61823__$1.constructor === other61824.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this61823__$1.dynamic_QMARK_,other61824.dynamic_QMARK_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this61823__$1.precompiled,other61824.precompiled)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this61823__$1.__extmap,other61824.__extmap)));
}));

(com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dynamic?","dynamic?",680592423),null,new cljs.core.Keyword(null,"precompiled","precompiled",-1683153609),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new com.rpl.specter.impl.CachedPathInfo(self__.dynamic_QMARK_,self__.precompiled,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__61820){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__61862 = cljs.core.keyword_identical_QMARK_;
var expr__61863 = k__4388__auto__;
if(cljs.core.truth_((pred__61862.cljs$core$IFn$_invoke$arity$2 ? pred__61862.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"dynamic?","dynamic?",680592423),expr__61863) : pred__61862.call(null,new cljs.core.Keyword(null,"dynamic?","dynamic?",680592423),expr__61863)))){
return (new com.rpl.specter.impl.CachedPathInfo(G__61820,self__.precompiled,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__61862.cljs$core$IFn$_invoke$arity$2 ? pred__61862.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"precompiled","precompiled",-1683153609),expr__61863) : pred__61862.call(null,new cljs.core.Keyword(null,"precompiled","precompiled",-1683153609),expr__61863)))){
return (new com.rpl.specter.impl.CachedPathInfo(self__.dynamic_QMARK_,G__61820,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.CachedPathInfo(self__.dynamic_QMARK_,self__.precompiled,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__61820),null));
}
}
}));

(com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"dynamic?","dynamic?",680592423),self__.dynamic_QMARK_,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"precompiled","precompiled",-1683153609),self__.precompiled,null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__61820){
var self__ = this;
var this__4379__auto____$1 = this;
return (new com.rpl.specter.impl.CachedPathInfo(self__.dynamic_QMARK_,self__.precompiled,G__61820,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(com.rpl.specter.impl.CachedPathInfo.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"dynamic?","dynamic?",-1973843346,null),new cljs.core.Symbol(null,"precompiled","precompiled",-42622082,null)], null);
}));

(com.rpl.specter.impl.CachedPathInfo.cljs$lang$type = true);

(com.rpl.specter.impl.CachedPathInfo.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/CachedPathInfo",null,(1),null));
}));

(com.rpl.specter.impl.CachedPathInfo.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"com.rpl.specter.impl/CachedPathInfo");
}));

/**
 * Positional factory function for com.rpl.specter.impl/CachedPathInfo.
 */
com.rpl.specter.impl.__GT_CachedPathInfo = (function com$rpl$specter$impl$__GT_CachedPathInfo(dynamic_QMARK_,precompiled){
return (new com.rpl.specter.impl.CachedPathInfo(dynamic_QMARK_,precompiled,null,null,null));
});

/**
 * Factory function for com.rpl.specter.impl/CachedPathInfo, taking a map of keywords to field values.
 */
com.rpl.specter.impl.map__GT_CachedPathInfo = (function com$rpl$specter$impl$map__GT_CachedPathInfo(G__61828){
var extmap__4419__auto__ = (function (){var G__61885 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__61828,new cljs.core.Keyword(null,"dynamic?","dynamic?",680592423),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"precompiled","precompiled",-1683153609)], 0));
if(cljs.core.record_QMARK_(G__61828)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__61885);
} else {
return G__61885;
}
})();
return (new com.rpl.specter.impl.CachedPathInfo(new cljs.core.Keyword(null,"dynamic?","dynamic?",680592423).cljs$core$IFn$_invoke$arity$1(G__61828),new cljs.core.Keyword(null,"precompiled","precompiled",-1683153609).cljs$core$IFn$_invoke$arity$1(G__61828),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

com.rpl.specter.impl.cached_path_info_precompiled = (function com$rpl$specter$impl$cached_path_info_precompiled(c){
return c.precompiled;
});
com.rpl.specter.impl.cached_path_info_dynamic_QMARK_ = (function com$rpl$specter$impl$cached_path_info_dynamic_QMARK_(c){
return c.dynamic_QMARK_;
});
com.rpl.specter.impl.filter_select = (function com$rpl$specter$impl$filter_select(afn,vals,structure,next_fn){
if(cljs.core.truth_((afn.cljs$core$IFn$_invoke$arity$1 ? afn.cljs$core$IFn$_invoke$arity$1(structure) : afn.call(null,structure)))){
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,structure) : next_fn.call(null,vals,structure));
} else {
return com.rpl.specter.impl.NONE;
}
});
com.rpl.specter.impl.filter_transform = (function com$rpl$specter$impl$filter_transform(afn,vals,structure,next_fn){
if(cljs.core.truth_((afn.cljs$core$IFn$_invoke$arity$1 ? afn.cljs$core$IFn$_invoke$arity$1(structure) : afn.call(null,structure)))){
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,structure) : next_fn.call(null,vals,structure));
} else {
return structure;
}
});
com.rpl.specter.impl.pred_STAR_ = (function com$rpl$specter$impl$pred_STAR_(afn){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.impl !== 'undefined') && (typeof com.rpl.specter.impl.t_com$rpl$specter$impl61897 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.impl.t_com$rpl$specter$impl61897 = (function (afn,meta61898){
this.afn = afn;
this.meta61898 = meta61898;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.impl.t_com$rpl$specter$impl61897.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_61899,meta61898__$1){
var self__ = this;
var _61899__$1 = this;
return (new com.rpl.specter.impl.t_com$rpl$specter$impl61897(self__.afn,meta61898__$1));
}));

(com.rpl.specter.impl.t_com$rpl$specter$impl61897.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_61899){
var self__ = this;
var _61899__$1 = this;
return self__.meta61898;
}));

(com.rpl.specter.impl.t_com$rpl$specter$impl61897.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.impl.t_com$rpl$specter$impl61897.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_((self__.afn.cljs$core$IFn$_invoke$arity$1 ? self__.afn.cljs$core$IFn$_invoke$arity$1(structure) : self__.afn.call(null,structure)))){
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,structure) : next_fn.call(null,vals,structure));
} else {
return com.rpl.specter.impl.NONE;
}
}));

(com.rpl.specter.impl.t_com$rpl$specter$impl61897.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_((self__.afn.cljs$core$IFn$_invoke$arity$1 ? self__.afn.cljs$core$IFn$_invoke$arity$1(structure) : self__.afn.call(null,structure)))){
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,structure) : next_fn.call(null,vals,structure));
} else {
return structure;
}
}));

(com.rpl.specter.impl.t_com$rpl$specter$impl61897.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"meta61898","meta61898",920165295,null)], null);
}));

(com.rpl.specter.impl.t_com$rpl$specter$impl61897.cljs$lang$type = true);

(com.rpl.specter.impl.t_com$rpl$specter$impl61897.cljs$lang$ctorStr = "com.rpl.specter.impl/t_com$rpl$specter$impl61897");

(com.rpl.specter.impl.t_com$rpl$specter$impl61897.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter.impl/t_com$rpl$specter$impl61897");
}));

/**
 * Positional factory function for com.rpl.specter.impl/t_com$rpl$specter$impl61897.
 */
com.rpl.specter.impl.__GT_t_com$rpl$specter$impl61897 = (function com$rpl$specter$impl$pred_STAR__$___GT_t_com$rpl$specter$impl61897(afn__$1,meta61898){
return (new com.rpl.specter.impl.t_com$rpl$specter$impl61897(afn__$1,meta61898));
});

}

return (new com.rpl.specter.impl.t_com$rpl$specter$impl61897(afn,cljs.core.PersistentArrayMap.EMPTY));
});
com.rpl.specter.impl.collected_QMARK__STAR_ = (function com$rpl$specter$impl$collected_QMARK__STAR_(afn){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.impl !== 'undefined') && (typeof com.rpl.specter.impl.t_com$rpl$specter$impl61914 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.impl.t_com$rpl$specter$impl61914 = (function (afn,meta61915){
this.afn = afn;
this.meta61915 = meta61915;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.impl.t_com$rpl$specter$impl61914.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_61916,meta61915__$1){
var self__ = this;
var _61916__$1 = this;
return (new com.rpl.specter.impl.t_com$rpl$specter$impl61914(self__.afn,meta61915__$1));
}));

(com.rpl.specter.impl.t_com$rpl$specter$impl61914.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_61916){
var self__ = this;
var _61916__$1 = this;
return self__.meta61915;
}));

(com.rpl.specter.impl.t_com$rpl$specter$impl61914.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.impl.t_com$rpl$specter$impl61914.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_((self__.afn.cljs$core$IFn$_invoke$arity$1 ? self__.afn.cljs$core$IFn$_invoke$arity$1(vals) : self__.afn.call(null,vals)))){
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,structure) : next_fn.call(null,vals,structure));
} else {
return com.rpl.specter.impl.NONE;
}
}));

(com.rpl.specter.impl.t_com$rpl$specter$impl61914.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_((self__.afn.cljs$core$IFn$_invoke$arity$1 ? self__.afn.cljs$core$IFn$_invoke$arity$1(vals) : self__.afn.call(null,vals)))){
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,structure) : next_fn.call(null,vals,structure));
} else {
return structure;
}
}));

(com.rpl.specter.impl.t_com$rpl$specter$impl61914.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"meta61915","meta61915",-1068077054,null)], null);
}));

(com.rpl.specter.impl.t_com$rpl$specter$impl61914.cljs$lang$type = true);

(com.rpl.specter.impl.t_com$rpl$specter$impl61914.cljs$lang$ctorStr = "com.rpl.specter.impl/t_com$rpl$specter$impl61914");

(com.rpl.specter.impl.t_com$rpl$specter$impl61914.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter.impl/t_com$rpl$specter$impl61914");
}));

/**
 * Positional factory function for com.rpl.specter.impl/t_com$rpl$specter$impl61914.
 */
com.rpl.specter.impl.__GT_t_com$rpl$specter$impl61914 = (function com$rpl$specter$impl$collected_QMARK__STAR__$___GT_t_com$rpl$specter$impl61914(afn__$1,meta61915){
return (new com.rpl.specter.impl.t_com$rpl$specter$impl61914(afn__$1,meta61915));
});

}

return (new com.rpl.specter.impl.t_com$rpl$specter$impl61914(afn,cljs.core.PersistentArrayMap.EMPTY));
});
com.rpl.specter.impl.cell_nav = (function com$rpl$specter$impl$cell_nav(cell){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.impl !== 'undefined') && (typeof com.rpl.specter.impl.t_com$rpl$specter$impl61931 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.impl.t_com$rpl$specter$impl61931 = (function (cell,meta61932){
this.cell = cell;
this.meta61932 = meta61932;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.impl.t_com$rpl$specter$impl61931.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_61933,meta61932__$1){
var self__ = this;
var _61933__$1 = this;
return (new com.rpl.specter.impl.t_com$rpl$specter$impl61931(self__.cell,meta61932__$1));
}));

(com.rpl.specter.impl.t_com$rpl$specter$impl61931.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_61933){
var self__ = this;
var _61933__$1 = this;
return self__.meta61932;
}));

(com.rpl.specter.impl.t_com$rpl$specter$impl61931.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.impl.t_com$rpl$specter$impl61931.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.impl.exec_select_STAR_(com.rpl.specter.impl.get_cell(self__.cell),vals,structure,next_fn);
}));

(com.rpl.specter.impl.t_com$rpl$specter$impl61931.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.impl.exec_transform_STAR_(com.rpl.specter.impl.get_cell(self__.cell),vals,structure,next_fn);
}));

(com.rpl.specter.impl.t_com$rpl$specter$impl61931.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cell","cell",-1890190685,null),new cljs.core.Symbol(null,"meta61932","meta61932",1067354750,null)], null);
}));

(com.rpl.specter.impl.t_com$rpl$specter$impl61931.cljs$lang$type = true);

(com.rpl.specter.impl.t_com$rpl$specter$impl61931.cljs$lang$ctorStr = "com.rpl.specter.impl/t_com$rpl$specter$impl61931");

(com.rpl.specter.impl.t_com$rpl$specter$impl61931.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter.impl/t_com$rpl$specter$impl61931");
}));

/**
 * Positional factory function for com.rpl.specter.impl/t_com$rpl$specter$impl61931.
 */
com.rpl.specter.impl.__GT_t_com$rpl$specter$impl61931 = (function com$rpl$specter$impl$cell_nav_$___GT_t_com$rpl$specter$impl61931(cell__$1,meta61932){
return (new com.rpl.specter.impl.t_com$rpl$specter$impl61931(cell__$1,meta61932));
});

}

return (new com.rpl.specter.impl.t_com$rpl$specter$impl61931(cell,cljs.core.PersistentArrayMap.EMPTY));
});
com.rpl.specter.impl.local_declarepath = (function com$rpl$specter$impl$local_declarepath(){
var cell = com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$1(null);
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.impl.cell_nav(cell),cljs.core.assoc,new cljs.core.Keyword("com.rpl.specter.impl","cell","com.rpl.specter.impl/cell",223913671),cell);
});
com.rpl.specter.impl.providepath_STAR_ = (function com$rpl$specter$impl$providepath_STAR_(declared,compiled_path){
var cell = new cljs.core.Keyword("com.rpl.specter.impl","cell","com.rpl.specter.impl/cell",223913671).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(declared));
return com.rpl.specter.impl.set_cell_BANG_(cell,compiled_path);
});
com.rpl.specter.impl.gensyms = (function com$rpl$specter$impl$gensyms(amt){
return cljs.core.vec(cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2(amt,cljs.core.gensym));
});
com.rpl.specter.impl.comp_navs = (function com$rpl$specter$impl$comp_navs(var_args){
var G__62197 = arguments.length;
switch (G__62197) {
case 0:
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
case 7:
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$7((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]));

break;
case 8:
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$8((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]));

break;
case 9:
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$9((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]));

break;
case 10:
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$10((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]));

break;
case 11:
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$11((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]));

break;
case 12:
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$12((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]),(arguments[(11)]));

break;
case 13:
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$13((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]),(arguments[(11)]),(arguments[(12)]));

break;
case 14:
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$14((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]),(arguments[(11)]),(arguments[(12)]),(arguments[(13)]));

break;
case 15:
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$15((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]),(arguments[(11)]),(arguments[(12)]),(arguments[(13)]),(arguments[(14)]));

break;
case 16:
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$16((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]),(arguments[(11)]),(arguments[(12)]),(arguments[(13)]),(arguments[(14)]),(arguments[(15)]));

break;
case 17:
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$17((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]),(arguments[(11)]),(arguments[(12)]),(arguments[(13)]),(arguments[(14)]),(arguments[(15)]),(arguments[(16)]));

break;
case 18:
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$18((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]),(arguments[(11)]),(arguments[(12)]),(arguments[(13)]),(arguments[(14)]),(arguments[(15)]),(arguments[(16)]),(arguments[(17)]));

break;
case 19:
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$19((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]),(arguments[(11)]),(arguments[(12)]),(arguments[(13)]),(arguments[(14)]),(arguments[(15)]),(arguments[(16)]),(arguments[(17)]),(arguments[(18)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___65089 = arguments.length;
var i__4737__auto___65090 = (0);
while(true){
if((i__4737__auto___65090 < len__4736__auto___65089)){
args_arr__4757__auto__.push((arguments[i__4737__auto___65090]));

var G__65091 = (i__4737__auto___65090 + (1));
i__4737__auto___65090 = G__65091;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((19)),(0),null));
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]),(arguments[(11)]),(arguments[(12)]),(arguments[(13)]),(arguments[(14)]),(arguments[(15)]),(arguments[(16)]),(arguments[(17)]),(arguments[(18)]),argseq__4758__auto__);

}
});

(com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$0 = (function (){
return com.rpl.specter.impl.STAY_STAR_;
}));

(com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$1 = (function (nav1__59237__auto__){
return nav1__59237__auto__;
}));

(com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$2 = (function (nav1__59237__auto__,nav2__59238__auto__){
return com.rpl.specter.impl.combine_two_navs(nav1__59237__auto__,nav2__59238__auto__);
}));

(com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$3 = (function (G__61974,G__61975,G__61976){
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$2(G__61974,com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$2(G__61975,G__61976));
}));

(com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$4 = (function (G__61977,G__61978,G__61979,G__61980){
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$2(G__61977,com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$3(G__61978,G__61979,G__61980));
}));

(com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$5 = (function (G__61981,G__61982,G__61983,G__61984,G__61985){
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$2(G__61981,com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$4(G__61982,G__61983,G__61984,G__61985));
}));

(com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$6 = (function (G__61986,G__61987,G__61988,G__61989,G__61990,G__61991){
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$2(G__61986,com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$5(G__61987,G__61988,G__61989,G__61990,G__61991));
}));

(com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$7 = (function (G__61992,G__61993,G__61994,G__61995,G__61996,G__61997,G__61998){
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$2(G__61992,com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$6(G__61993,G__61994,G__61995,G__61996,G__61997,G__61998));
}));

(com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$8 = (function (G__61999,G__62000,G__62001,G__62002,G__62003,G__62004,G__62005,G__62006){
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$2(G__61999,com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$7(G__62000,G__62001,G__62002,G__62003,G__62004,G__62005,G__62006));
}));

(com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$9 = (function (G__62007,G__62008,G__62009,G__62010,G__62011,G__62012,G__62013,G__62014,G__62015){
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$2(G__62007,com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$8(G__62008,G__62009,G__62010,G__62011,G__62012,G__62013,G__62014,G__62015));
}));

(com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$10 = (function (G__62016,G__62017,G__62018,G__62019,G__62020,G__62021,G__62022,G__62023,G__62024,G__62025){
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$2(G__62016,com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$9(G__62017,G__62018,G__62019,G__62020,G__62021,G__62022,G__62023,G__62024,G__62025));
}));

(com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$11 = (function (G__62026,G__62027,G__62028,G__62029,G__62030,G__62031,G__62032,G__62033,G__62034,G__62035,G__62036){
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$2(G__62026,com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$10(G__62027,G__62028,G__62029,G__62030,G__62031,G__62032,G__62033,G__62034,G__62035,G__62036));
}));

(com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$12 = (function (G__62037,G__62038,G__62039,G__62040,G__62041,G__62042,G__62043,G__62044,G__62045,G__62046,G__62047,G__62048){
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$2(G__62037,com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$11(G__62038,G__62039,G__62040,G__62041,G__62042,G__62043,G__62044,G__62045,G__62046,G__62047,G__62048));
}));

(com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$13 = (function (G__62049,G__62050,G__62051,G__62052,G__62053,G__62054,G__62055,G__62056,G__62057,G__62058,G__62059,G__62060,G__62061){
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$2(G__62049,com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$12(G__62050,G__62051,G__62052,G__62053,G__62054,G__62055,G__62056,G__62057,G__62058,G__62059,G__62060,G__62061));
}));

(com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$14 = (function (G__62062,G__62063,G__62064,G__62065,G__62066,G__62067,G__62068,G__62069,G__62070,G__62071,G__62072,G__62073,G__62074,G__62075){
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$2(G__62062,com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$13(G__62063,G__62064,G__62065,G__62066,G__62067,G__62068,G__62069,G__62070,G__62071,G__62072,G__62073,G__62074,G__62075));
}));

(com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$15 = (function (G__62076,G__62077,G__62078,G__62079,G__62080,G__62081,G__62082,G__62083,G__62084,G__62085,G__62086,G__62087,G__62088,G__62089,G__62090){
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$2(G__62076,com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$14(G__62077,G__62078,G__62079,G__62080,G__62081,G__62082,G__62083,G__62084,G__62085,G__62086,G__62087,G__62088,G__62089,G__62090));
}));

(com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$16 = (function (G__62091,G__62092,G__62093,G__62094,G__62095,G__62096,G__62097,G__62098,G__62099,G__62100,G__62101,G__62102,G__62103,G__62104,G__62105,G__62106){
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$2(G__62091,com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$15(G__62092,G__62093,G__62094,G__62095,G__62096,G__62097,G__62098,G__62099,G__62100,G__62101,G__62102,G__62103,G__62104,G__62105,G__62106));
}));

(com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$17 = (function (G__62107,G__62108,G__62109,G__62110,G__62111,G__62112,G__62113,G__62114,G__62115,G__62116,G__62117,G__62118,G__62119,G__62120,G__62121,G__62122,G__62123){
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$2(G__62107,com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$16(G__62108,G__62109,G__62110,G__62111,G__62112,G__62113,G__62114,G__62115,G__62116,G__62117,G__62118,G__62119,G__62120,G__62121,G__62122,G__62123));
}));

(com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$18 = (function (G__62124,G__62125,G__62126,G__62127,G__62128,G__62129,G__62130,G__62131,G__62132,G__62133,G__62134,G__62135,G__62136,G__62137,G__62138,G__62139,G__62140,G__62141){
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$2(G__62124,com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$17(G__62125,G__62126,G__62127,G__62128,G__62129,G__62130,G__62131,G__62132,G__62133,G__62134,G__62135,G__62136,G__62137,G__62138,G__62139,G__62140,G__62141));
}));

(com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$19 = (function (G__62142,G__62143,G__62144,G__62145,G__62146,G__62147,G__62148,G__62149,G__62150,G__62151,G__62152,G__62153,G__62154,G__62155,G__62156,G__62157,G__62158,G__62159,G__62160){
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$2(G__62142,com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$18(G__62143,G__62144,G__62145,G__62146,G__62147,G__62148,G__62149,G__62150,G__62151,G__62152,G__62153,G__62154,G__62155,G__62156,G__62157,G__62158,G__62159,G__62160));
}));

(com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$variadic = (function (G__61954,G__61955,G__61956,G__61957,G__61958,G__61959,G__61960,G__61961,G__61962,G__61963,G__61964,G__61965,G__61966,G__61967,G__61968,G__61969,G__61970,G__61971,G__61972,rest__59239__auto__){
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$2(com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$19(G__61954,G__61955,G__61956,G__61957,G__61958,G__61959,G__61960,G__61961,G__61962,G__61963,G__61964,G__61965,G__61966,G__61967,G__61968,G__61969,G__61970,G__61971,G__61972),cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(com.rpl.specter.impl.comp_navs,rest__59239__auto__));
}));

/** @this {Function} */
(com.rpl.specter.impl.comp_navs.cljs$lang$applyTo = (function (seq62177){
var G__62178 = cljs.core.first(seq62177);
var seq62177__$1 = cljs.core.next(seq62177);
var G__62179 = cljs.core.first(seq62177__$1);
var seq62177__$2 = cljs.core.next(seq62177__$1);
var G__62180 = cljs.core.first(seq62177__$2);
var seq62177__$3 = cljs.core.next(seq62177__$2);
var G__62181 = cljs.core.first(seq62177__$3);
var seq62177__$4 = cljs.core.next(seq62177__$3);
var G__62182 = cljs.core.first(seq62177__$4);
var seq62177__$5 = cljs.core.next(seq62177__$4);
var G__62183 = cljs.core.first(seq62177__$5);
var seq62177__$6 = cljs.core.next(seq62177__$5);
var G__62184 = cljs.core.first(seq62177__$6);
var seq62177__$7 = cljs.core.next(seq62177__$6);
var G__62185 = cljs.core.first(seq62177__$7);
var seq62177__$8 = cljs.core.next(seq62177__$7);
var G__62186 = cljs.core.first(seq62177__$8);
var seq62177__$9 = cljs.core.next(seq62177__$8);
var G__62187 = cljs.core.first(seq62177__$9);
var seq62177__$10 = cljs.core.next(seq62177__$9);
var G__62188 = cljs.core.first(seq62177__$10);
var seq62177__$11 = cljs.core.next(seq62177__$10);
var G__62189 = cljs.core.first(seq62177__$11);
var seq62177__$12 = cljs.core.next(seq62177__$11);
var G__62190 = cljs.core.first(seq62177__$12);
var seq62177__$13 = cljs.core.next(seq62177__$12);
var G__62191 = cljs.core.first(seq62177__$13);
var seq62177__$14 = cljs.core.next(seq62177__$13);
var G__62192 = cljs.core.first(seq62177__$14);
var seq62177__$15 = cljs.core.next(seq62177__$14);
var G__62193 = cljs.core.first(seq62177__$15);
var seq62177__$16 = cljs.core.next(seq62177__$15);
var G__62194 = cljs.core.first(seq62177__$16);
var seq62177__$17 = cljs.core.next(seq62177__$16);
var G__62195 = cljs.core.first(seq62177__$17);
var seq62177__$18 = cljs.core.next(seq62177__$17);
var G__62196 = cljs.core.first(seq62177__$18);
var seq62177__$19 = cljs.core.next(seq62177__$18);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__62178,G__62179,G__62180,G__62181,G__62182,G__62183,G__62184,G__62185,G__62186,G__62187,G__62188,G__62189,G__62190,G__62191,G__62192,G__62193,G__62194,G__62195,G__62196,seq62177__$19);
}));

(com.rpl.specter.impl.comp_navs.cljs$lang$maxFixedArity = (19));

com.rpl.specter.impl.srange_transform_STAR_ = (function com$rpl$specter$impl$srange_transform_STAR_(structure,start,end,next_fn){
if(typeof structure === 'string'){
var newss = (function (){var G__62241 = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(structure,start,end);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__62241) : next_fn.call(null,G__62241));
})();
return [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(structure,(0),start),cljs.core.str.cljs$core$IFn$_invoke$arity$1(newss),cljs.core.subs.cljs$core$IFn$_invoke$arity$3(structure,end,((structure).length))].join('');
} else {
var structurev = cljs.core.vec(structure);
var newpart = (function (){var G__62244 = cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(structurev,start,end);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__62244) : next_fn.call(null,G__62244));
})();
var res = cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(structurev,(0),start),newpart,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(structurev,end,cljs.core.count(structure))], 0));
if(cljs.core.vector_QMARK_(structure)){
return cljs.core.vec(res);
} else {
return res;
}
}
});
com.rpl.specter.impl.matching_indices = (function com$rpl$specter$impl$matching_indices(aseq,p){
return cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2((function (i,e){
if(cljs.core.truth_((p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(e) : p.call(null,e)))){
return i;
} else {
return null;
}
}),aseq);
});
com.rpl.specter.impl.matching_ranges = (function com$rpl$specter$impl$matching_ranges(aseq,p){
return cljs.core.first(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__62275,i){
var vec__62276 = p__62275;
var ranges = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62276,(0),null);
var curr_start = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62276,(1),null);
var curr_last = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62276,(2),null);
var curr = vec__62276;
if((curr_start == null)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ranges,i,i], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,(curr_last + (1)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ranges,curr_start,i], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ranges,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [curr_start,(curr_last + (1))], null)),i,i], null);

}
}
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,null,null], null),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(com.rpl.specter.impl.matching_indices(aseq,p),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1)], null))));
});
com.rpl.specter.impl.continuous_subseqs_transform_STAR_ = (function com$rpl$specter$impl$continuous_subseqs_transform_STAR_(pred,structure,next_fn){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (structure__$1,p__62280){
var vec__62282 = p__62280;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62282,(0),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62282,(1),null);
return com.rpl.specter.impl.srange_transform_STAR_(structure__$1,s,e,next_fn);
}),structure,cljs.core.reverse(com.rpl.specter.impl.matching_ranges(structure,pred)));
});
com.rpl.specter.impl.codewalk_until = (function com$rpl$specter$impl$codewalk_until(pred,on_match_fn,structure){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(structure) : pred.call(null,structure)))){
return (on_match_fn.cljs$core$IFn$_invoke$arity$1 ? on_match_fn.cljs$core$IFn$_invoke$arity$1(structure) : on_match_fn.call(null,structure));
} else {
var ret = clojure.walk.walk(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(com.rpl.specter.impl.codewalk_until,pred,on_match_fn),cljs.core.identity,structure);
if(((com.rpl.specter.impl.fn_invocation_QMARK_(structure)) && (com.rpl.specter.impl.fn_invocation_QMARK_(ret)))){
return cljs.core.with_meta(ret,cljs.core.meta(structure));
} else {
return ret;
}
}
});
com.rpl.specter.impl.walk_select = (function com$rpl$specter$impl$walk_select(pred,continue_fn,structure){
var ret = com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$1(com.rpl.specter.impl.NONE);
var walker = (function com$rpl$specter$impl$walk_select_$_this(structure__$1){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(structure__$1) : pred.call(null,structure__$1)))){
var r = (continue_fn.cljs$core$IFn$_invoke$arity$1 ? continue_fn.cljs$core$IFn$_invoke$arity$1(structure__$1) : continue_fn.call(null,structure__$1));
if((!((r === com.rpl.specter.impl.NONE)))){
com.rpl.specter.impl.set_cell_BANG_(ret,r);
} else {
}

return r;
} else {
return clojure.walk.walk(com$rpl$specter$impl$walk_select_$_this,cljs.core.identity,structure__$1);
}
});
walker(structure);

return com.rpl.specter.impl.get_cell(ret);
});
com.rpl.specter.impl.walk_until = (function com$rpl$specter$impl$walk_until(pred,on_match_fn,structure){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(structure) : pred.call(null,structure)))){
return (on_match_fn.cljs$core$IFn$_invoke$arity$1 ? on_match_fn.cljs$core$IFn$_invoke$arity$1(structure) : on_match_fn.call(null,structure));
} else {
return clojure.walk.walk(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(com.rpl.specter.impl.walk_until,pred,on_match_fn),cljs.core.identity,structure);
}
});
com.rpl.specter.impl.coerce_nav = (function com$rpl$specter$impl$coerce_nav(o){
if((((!((o == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === o.com$rpl$specter$protocols$RichNavigator$))))?true:(((!o.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(com.rpl.specter.protocols.RichNavigator,o):false)):cljs.core.native_satisfies_QMARK_(com.rpl.specter.protocols.RichNavigator,o))){
return o;
} else {
if(cljs.core.sequential_QMARK_(o)){
return com.rpl.specter.impl.comp_paths_STAR_(o);
} else {
return com.rpl.specter.protocols.implicit_nav(o);

}
}
});
com.rpl.specter.impl.dynamic_var_QMARK_ = (function com$rpl$specter$impl$dynamic_var_QMARK_(v){
return new cljs.core.Keyword(null,"dynamic","dynamic",704819571).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(v));
});
com.rpl.specter.impl.direct_nav_obj = (function com$rpl$specter$impl$direct_nav_obj(o){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$3(o,cljs.core.merge,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"direct-nav","direct-nav",-2100776046),true,new cljs.core.Keyword(null,"original-obj","original-obj",-1134279620),o], null));
});
com.rpl.specter.impl.maybe_direct_nav = (function com$rpl$specter$impl$maybe_direct_nav(obj,direct_nav_QMARK_){
if(cljs.core.truth_(direct_nav_QMARK_)){
return com.rpl.specter.impl.direct_nav_obj(obj);
} else {
return obj;
}
});
com.rpl.specter.impl.original_obj = (function com$rpl$specter$impl$original_obj(o){
while(true){
var orig = new cljs.core.Keyword(null,"original-obj","original-obj",-1134279620).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(o));
if(cljs.core.truth_(orig)){
var G__65156 = orig;
o = G__65156;
continue;
} else {
return o;
}
break;
}
});
com.rpl.specter.impl.direct_nav_QMARK_ = (function com$rpl$specter$impl$direct_nav_QMARK_(o){
return new cljs.core.Keyword(null,"direct-nav","direct-nav",-2100776046).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(o));
});
com.rpl.specter.impl.all_static_QMARK_ = (function com$rpl$specter$impl$all_static_QMARK_(params){
return (com.rpl.specter.impl.NONE === com.rpl.specter.impl.walk_select(com.rpl.specter.impl.dynamic_param_QMARK_,cljs.core.identity,params));
});
com.rpl.specter.impl.late_resolved_fn = (function com$rpl$specter$impl$late_resolved_fn(afn){
return (function() { 
var G__65162__delegate = function (args){
if(com.rpl.specter.impl.all_static_QMARK_(args)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(afn,args);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(afn,args,null);
}
};
var G__65162 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__65164__i = 0, G__65164__a = new Array(arguments.length -  0);
while (G__65164__i < G__65164__a.length) {G__65164__a[G__65164__i] = arguments[G__65164__i + 0]; ++G__65164__i;}
  args = new cljs.core.IndexedSeq(G__65164__a,0,null);
} 
return G__65162__delegate.call(this,args);};
G__65162.cljs$lang$maxFixedArity = 0;
G__65162.cljs$lang$applyTo = (function (arglist__65165){
var args = cljs.core.seq(arglist__65165);
return G__65162__delegate(args);
});
G__65162.cljs$core$IFn$_invoke$arity$variadic = G__65162__delegate;
return G__65162;
})()
;
});
com.rpl.specter.impl.preserve_map = (function com$rpl$specter$impl$preserve_map(afn,o){
if(((cljs.core.list_QMARK_(o)) || (cljs.core.seq_QMARK_(o)))){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(afn,o);
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.empty(o),cljs.core.map.cljs$core$IFn$_invoke$arity$2(afn,o));
}
});
com.rpl.specter.impl.magic_precompilation_STAR_ = (function com$rpl$specter$impl$magic_precompilation_STAR_(o){
if(cljs.core.sequential_QMARK_(o)){
return com.rpl.specter.impl.preserve_map(com.rpl.specter.impl.magic_precompilation_STAR_,o);
} else {
if((o instanceof com.rpl.specter.impl.VarUse)){
var v = o.avar;
if(cljs.core.truth_((function (){var and__4115__auto__ = v;
if(cljs.core.truth_(and__4115__auto__)){
return com.rpl.specter.impl.dynamic_var_QMARK_(v);
} else {
return and__4115__auto__;
}
})())){
return com.rpl.specter.impl.__GT_DynamicVal(com.rpl.specter.impl.maybe_direct_nav(o.sym,(function (){var or__4126__auto__ = com.rpl.specter.impl.direct_nav_QMARK_(v);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return com.rpl.specter.impl.direct_nav_QMARK_(o.sym);
}
})()));
} else {
return com.rpl.specter.impl.maybe_direct_nav(o.val,(function (){var or__4126__auto__ = (function (){var and__4115__auto__ = v;
if(cljs.core.truth_(and__4115__auto__)){
return com.rpl.specter.impl.direct_nav_QMARK_(v);
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = com.rpl.specter.impl.direct_nav_QMARK_(o.sym);
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
return com.rpl.specter.impl.direct_nav_QMARK_(o.val);
}
}
})());
}
} else {
if((o instanceof com.rpl.specter.impl.LocalSym)){
return com.rpl.specter.impl.__GT_DynamicVal(o.sym);
} else {
if((o instanceof com.rpl.specter.impl.SpecialFormUse)){
return com.rpl.specter.impl.__GT_DynamicVal(o.code);
} else {
if((o instanceof com.rpl.specter.impl.FnInvocation)){
var op = (function (){var G__62388 = o.op;
return (com.rpl.specter.impl.magic_precompilation_STAR_.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.impl.magic_precompilation_STAR_.cljs$core$IFn$_invoke$arity$1(G__62388) : com.rpl.specter.impl.magic_precompilation_STAR_.call(null,G__62388));
})();
var params = cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(com.rpl.specter.impl.magic_precompilation_STAR_,o.params));
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(op));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return com.rpl.specter.impl.all_static_QMARK_(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(params,op));
}
})())){
var G__62407 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(op,params);
return (com.rpl.specter.impl.magic_precompilation_STAR_.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.impl.magic_precompilation_STAR_.cljs$core$IFn$_invoke$arity$1(G__62407) : com.rpl.specter.impl.magic_precompilation_STAR_.call(null,G__62407));
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(op,params,o.code);
}
} else {
return o;

}
}
}
}
}
});
com.rpl.specter.impl.static_combine = (function com$rpl$specter$impl$static_combine(var_args){
var G__62437 = arguments.length;
switch (G__62437) {
case 1:
return com.rpl.specter.impl.static_combine.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.rpl.specter.impl.static_combine.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.rpl.specter.impl.static_combine.cljs$core$IFn$_invoke$arity$1 = (function (o){
return com.rpl.specter.impl.static_combine.cljs$core$IFn$_invoke$arity$2(o,true);
}));

(com.rpl.specter.impl.static_combine.cljs$core$IFn$_invoke$arity$2 = (function (o,nav_pos_QMARK_){
if(cljs.core.sequential_QMARK_(o)){
if(cljs.core.truth_(nav_pos_QMARK_)){
var res = com.rpl.specter.impl.continuous_subseqs_transform_STAR_(com.rpl.specter.impl.rich_nav_QMARK_,cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(com.rpl.specter.impl.static_combine,cljs.core.flatten(o))),(function (s){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.comp_paths_STAR_(s)], null);
}));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(res))){
return cljs.core.first(res);
} else {
return res;
}
} else {
return com.rpl.specter.impl.preserve_map((function (p1__62420_SHARP_){
return com.rpl.specter.impl.static_combine.cljs$core$IFn$_invoke$arity$2(p1__62420_SHARP_,false);
}),o);
}
} else {
if((o instanceof com.rpl.specter.impl.DynamicFunction)){
return com.rpl.specter.impl.__GT_DynamicFunction(com.rpl.specter.impl.static_combine.cljs$core$IFn$_invoke$arity$2(o.op,false),cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__62421_SHARP_){
return com.rpl.specter.impl.static_combine.cljs$core$IFn$_invoke$arity$2(p1__62421_SHARP_,false);
}),o.params)),o.code);
} else {
if((o instanceof com.rpl.specter.impl.DynamicPath)){
return com.rpl.specter.impl.__GT_DynamicPath(com.rpl.specter.impl.static_combine.cljs$core$IFn$_invoke$arity$1(o.path));
} else {
if((o instanceof com.rpl.specter.impl.DynamicVal)){
return o;
} else {
if(cljs.core.truth_(nav_pos_QMARK_)){
return com.rpl.specter.impl.coerce_nav(o);
} else {
return o;
}

}
}
}
}
}));

(com.rpl.specter.impl.static_combine.cljs$lang$maxFixedArity = 2);


/**
 * @interface
 */
com.rpl.specter.impl.LateResolve = function(){};

var com$rpl$specter$impl$LateResolve$late_resolve$dyn_65204 = (function (this$,dynamic_params){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (com.rpl.specter.impl.late_resolve[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(this$,dynamic_params) : m__4429__auto__.call(null,this$,dynamic_params));
} else {
var m__4426__auto__ = (com.rpl.specter.impl.late_resolve["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(this$,dynamic_params) : m__4426__auto__.call(null,this$,dynamic_params));
} else {
throw cljs.core.missing_protocol("LateResolve.late-resolve",this$);
}
}
});
com.rpl.specter.impl.late_resolve = (function com$rpl$specter$impl$late_resolve(this$,dynamic_params){
if((((!((this$ == null)))) && ((!((this$.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 == null)))))){
return this$.com$rpl$specter$impl$LateResolve$late_resolve$arity$2(this$,dynamic_params);
} else {
return com$rpl$specter$impl$LateResolve$late_resolve$dyn_65204(this$,dynamic_params);
}
});



/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {com.rpl.specter.impl.LateResolve}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
com.rpl.specter.impl.LocalParam = (function (idx,__meta,__extmap,__hash){
this.idx = idx;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(com.rpl.specter.impl.LocalParam.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(com.rpl.specter.impl.LocalParam.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k62464,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__62472 = k62464;
var G__62472__$1 = (((G__62472 instanceof cljs.core.Keyword))?G__62472.fqn:null);
switch (G__62472__$1) {
case "idx":
return self__.idx;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k62464,else__4383__auto__);

}
}));

(com.rpl.specter.impl.LocalParam.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__62488){
var vec__62491 = p__62488;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62491,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62491,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(com.rpl.specter.impl.LocalParam.prototype.com$rpl$specter$impl$LateResolve$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.impl.LocalParam.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this$,dynamic_params){
var self__ = this;
var this$__$1 = this;
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(dynamic_params,self__.idx);
}));

(com.rpl.specter.impl.LocalParam.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#com.rpl.specter.impl.LocalParam{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"idx","idx",1053688473),self__.idx],null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LocalParam.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__62463){
var self__ = this;
var G__62463__$1 = this;
return (new cljs.core.RecordIter((0),G__62463__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"idx","idx",1053688473)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(com.rpl.specter.impl.LocalParam.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(com.rpl.specter.impl.LocalParam.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new com.rpl.specter.impl.LocalParam(self__.idx,self__.__meta,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LocalParam.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(com.rpl.specter.impl.LocalParam.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-301692215 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(com.rpl.specter.impl.LocalParam.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this62465,other62466){
var self__ = this;
var this62465__$1 = this;
return (((!((other62466 == null)))) && ((this62465__$1.constructor === other62466.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this62465__$1.idx,other62466.idx)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this62465__$1.__extmap,other62466.__extmap)));
}));

(com.rpl.specter.impl.LocalParam.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"idx","idx",1053688473),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new com.rpl.specter.impl.LocalParam(self__.idx,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(com.rpl.specter.impl.LocalParam.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__62463){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__62543 = cljs.core.keyword_identical_QMARK_;
var expr__62544 = k__4388__auto__;
if(cljs.core.truth_((pred__62543.cljs$core$IFn$_invoke$arity$2 ? pred__62543.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"idx","idx",1053688473),expr__62544) : pred__62543.call(null,new cljs.core.Keyword(null,"idx","idx",1053688473),expr__62544)))){
return (new com.rpl.specter.impl.LocalParam(G__62463,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LocalParam(self__.idx,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__62463),null));
}
}));

(com.rpl.specter.impl.LocalParam.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"idx","idx",1053688473),self__.idx,null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LocalParam.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__62463){
var self__ = this;
var this__4379__auto____$1 = this;
return (new com.rpl.specter.impl.LocalParam(self__.idx,G__62463,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LocalParam.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(com.rpl.specter.impl.LocalParam.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"idx","idx",-1600747296,null)], null);
}));

(com.rpl.specter.impl.LocalParam.cljs$lang$type = true);

(com.rpl.specter.impl.LocalParam.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/LocalParam",null,(1),null));
}));

(com.rpl.specter.impl.LocalParam.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"com.rpl.specter.impl/LocalParam");
}));

/**
 * Positional factory function for com.rpl.specter.impl/LocalParam.
 */
com.rpl.specter.impl.__GT_LocalParam = (function com$rpl$specter$impl$__GT_LocalParam(idx){
return (new com.rpl.specter.impl.LocalParam(idx,null,null,null));
});

/**
 * Factory function for com.rpl.specter.impl/LocalParam, taking a map of keywords to field values.
 */
com.rpl.specter.impl.map__GT_LocalParam = (function com$rpl$specter$impl$map__GT_LocalParam(G__62470){
var extmap__4419__auto__ = (function (){var G__62566 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__62470,new cljs.core.Keyword(null,"idx","idx",1053688473));
if(cljs.core.record_QMARK_(G__62470)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__62566);
} else {
return G__62566;
}
})();
return (new com.rpl.specter.impl.LocalParam(new cljs.core.Keyword(null,"idx","idx",1053688473).cljs$core$IFn$_invoke$arity$1(G__62470),null,cljs.core.not_empty(extmap__4419__auto__),null));
});



/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {com.rpl.specter.impl.LateResolve}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
com.rpl.specter.impl.StaticParam = (function (val,__meta,__extmap,__hash){
this.val = val;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(com.rpl.specter.impl.StaticParam.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(com.rpl.specter.impl.StaticParam.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k62569,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__62575 = k62569;
var G__62575__$1 = (((G__62575 instanceof cljs.core.Keyword))?G__62575.fqn:null);
switch (G__62575__$1) {
case "val":
return self__.val;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k62569,else__4383__auto__);

}
}));

(com.rpl.specter.impl.StaticParam.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__62577){
var vec__62578 = p__62577;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62578,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62578,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(com.rpl.specter.impl.StaticParam.prototype.com$rpl$specter$impl$LateResolve$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.impl.StaticParam.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this$,dynamic_params){
var self__ = this;
var this$__$1 = this;
return self__.val;
}));

(com.rpl.specter.impl.StaticParam.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#com.rpl.specter.impl.StaticParam{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"val","val",128701612),self__.val],null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.StaticParam.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__62568){
var self__ = this;
var G__62568__$1 = this;
return (new cljs.core.RecordIter((0),G__62568__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"val","val",128701612)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(com.rpl.specter.impl.StaticParam.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(com.rpl.specter.impl.StaticParam.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new com.rpl.specter.impl.StaticParam(self__.val,self__.__meta,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.StaticParam.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(com.rpl.specter.impl.StaticParam.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (787001817 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(com.rpl.specter.impl.StaticParam.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this62570,other62571){
var self__ = this;
var this62570__$1 = this;
return (((!((other62571 == null)))) && ((this62570__$1.constructor === other62571.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this62570__$1.val,other62571.val)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this62570__$1.__extmap,other62571.__extmap)));
}));

(com.rpl.specter.impl.StaticParam.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"val","val",128701612),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new com.rpl.specter.impl.StaticParam(self__.val,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(com.rpl.specter.impl.StaticParam.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__62568){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__62589 = cljs.core.keyword_identical_QMARK_;
var expr__62590 = k__4388__auto__;
if(cljs.core.truth_((pred__62589.cljs$core$IFn$_invoke$arity$2 ? pred__62589.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"val","val",128701612),expr__62590) : pred__62589.call(null,new cljs.core.Keyword(null,"val","val",128701612),expr__62590)))){
return (new com.rpl.specter.impl.StaticParam(G__62568,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.StaticParam(self__.val,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__62568),null));
}
}));

(com.rpl.specter.impl.StaticParam.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"val","val",128701612),self__.val,null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.StaticParam.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__62568){
var self__ = this;
var this__4379__auto____$1 = this;
return (new com.rpl.specter.impl.StaticParam(self__.val,G__62568,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.StaticParam.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(com.rpl.specter.impl.StaticParam.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"val","val",1769233139,null)], null);
}));

(com.rpl.specter.impl.StaticParam.cljs$lang$type = true);

(com.rpl.specter.impl.StaticParam.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/StaticParam",null,(1),null));
}));

(com.rpl.specter.impl.StaticParam.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"com.rpl.specter.impl/StaticParam");
}));

/**
 * Positional factory function for com.rpl.specter.impl/StaticParam.
 */
com.rpl.specter.impl.__GT_StaticParam = (function com$rpl$specter$impl$__GT_StaticParam(val){
return (new com.rpl.specter.impl.StaticParam(val,null,null,null));
});

/**
 * Factory function for com.rpl.specter.impl/StaticParam, taking a map of keywords to field values.
 */
com.rpl.specter.impl.map__GT_StaticParam = (function com$rpl$specter$impl$map__GT_StaticParam(G__62573){
var extmap__4419__auto__ = (function (){var G__62609 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__62573,new cljs.core.Keyword(null,"val","val",128701612));
if(cljs.core.record_QMARK_(G__62573)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__62609);
} else {
return G__62609;
}
})();
return (new com.rpl.specter.impl.StaticParam(new cljs.core.Keyword(null,"val","val",128701612).cljs$core$IFn$_invoke$arity$1(G__62573),null,cljs.core.not_empty(extmap__4419__auto__),null));
});



/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {com.rpl.specter.impl.LateResolve}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
com.rpl.specter.impl.LateFn0 = (function (fn,__meta,__extmap,__hash){
this.fn = fn;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(com.rpl.specter.impl.LateFn0.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(com.rpl.specter.impl.LateFn0.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k62637,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__62645 = k62637;
var G__62645__$1 = (((G__62645 instanceof cljs.core.Keyword))?G__62645.fqn:null);
switch (G__62645__$1) {
case "fn":
return self__.fn;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k62637,else__4383__auto__);

}
}));

(com.rpl.specter.impl.LateFn0.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__62653){
var vec__62654 = p__62653;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62654,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62654,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(com.rpl.specter.impl.LateFn0.prototype.com$rpl$specter$impl$LateResolve$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.impl.LateFn0.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__59310__auto__,dynamic_params62613){
var self__ = this;
var this__59310__auto____$1 = this;
var fexpr__62668 = com.rpl.specter.impl.late_resolve(self__.fn,dynamic_params62613);
return (fexpr__62668.cljs$core$IFn$_invoke$arity$0 ? fexpr__62668.cljs$core$IFn$_invoke$arity$0() : fexpr__62668.call(null));
}));

(com.rpl.specter.impl.LateFn0.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#com.rpl.specter.impl.LateFn0{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn0.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__62636){
var self__ = this;
var G__62636__$1 = this;
return (new cljs.core.RecordIter((0),G__62636__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(com.rpl.specter.impl.LateFn0.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(com.rpl.specter.impl.LateFn0.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn0(self__.fn,self__.__meta,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn0.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(com.rpl.specter.impl.LateFn0.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (1214220781 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(com.rpl.specter.impl.LateFn0.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this62638,other62639){
var self__ = this;
var this62638__$1 = this;
return (((!((other62639 == null)))) && ((this62638__$1.constructor === other62639.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this62638__$1.fn,other62639.fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this62638__$1.__extmap,other62639.__extmap)));
}));

(com.rpl.specter.impl.LateFn0.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fn","fn",-1175266204),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new com.rpl.specter.impl.LateFn0(self__.fn,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(com.rpl.specter.impl.LateFn0.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__62636){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__62740 = cljs.core.keyword_identical_QMARK_;
var expr__62741 = k__4388__auto__;
if(cljs.core.truth_((pred__62740.cljs$core$IFn$_invoke$arity$2 ? pred__62740.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__62741) : pred__62740.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__62741)))){
return (new com.rpl.specter.impl.LateFn0(G__62636,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn0(self__.fn,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__62636),null));
}
}));

(com.rpl.specter.impl.LateFn0.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn,null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn0.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__62636){
var self__ = this;
var this__4379__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn0(self__.fn,G__62636,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn0.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(com.rpl.specter.impl.LateFn0.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null)], null);
}));

(com.rpl.specter.impl.LateFn0.cljs$lang$type = true);

(com.rpl.specter.impl.LateFn0.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/LateFn0",null,(1),null));
}));

(com.rpl.specter.impl.LateFn0.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"com.rpl.specter.impl/LateFn0");
}));

/**
 * Positional factory function for com.rpl.specter.impl/LateFn0.
 */
com.rpl.specter.impl.__GT_LateFn0 = (function com$rpl$specter$impl$__GT_LateFn0(fn){
return (new com.rpl.specter.impl.LateFn0(fn,null,null,null));
});

/**
 * Factory function for com.rpl.specter.impl/LateFn0, taking a map of keywords to field values.
 */
com.rpl.specter.impl.map__GT_LateFn0 = (function com$rpl$specter$impl$map__GT_LateFn0(G__62641){
var extmap__4419__auto__ = (function (){var G__62785 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__62641,new cljs.core.Keyword(null,"fn","fn",-1175266204));
if(cljs.core.record_QMARK_(G__62641)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__62785);
} else {
return G__62785;
}
})();
return (new com.rpl.specter.impl.LateFn0(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__62641),null,cljs.core.not_empty(extmap__4419__auto__),null));
});



/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {com.rpl.specter.impl.LateResolve}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
com.rpl.specter.impl.LateFn1 = (function (fn,arg0,__meta,__extmap,__hash){
this.fn = fn;
this.arg0 = arg0;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(com.rpl.specter.impl.LateFn1.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(com.rpl.specter.impl.LateFn1.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k62787,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__62799 = k62787;
var G__62799__$1 = (((G__62799 instanceof cljs.core.Keyword))?G__62799.fqn:null);
switch (G__62799__$1) {
case "fn":
return self__.fn;

break;
case "arg0":
return self__.arg0;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k62787,else__4383__auto__);

}
}));

(com.rpl.specter.impl.LateFn1.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__62804){
var vec__62805 = p__62804;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62805,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62805,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(com.rpl.specter.impl.LateFn1.prototype.com$rpl$specter$impl$LateResolve$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.impl.LateFn1.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__59310__auto__,dynamic_params62616){
var self__ = this;
var this__59310__auto____$1 = this;
var G__62814 = com.rpl.specter.impl.late_resolve(self__.arg0,dynamic_params62616);
var fexpr__62813 = com.rpl.specter.impl.late_resolve(self__.fn,dynamic_params62616);
return (fexpr__62813.cljs$core$IFn$_invoke$arity$1 ? fexpr__62813.cljs$core$IFn$_invoke$arity$1(G__62814) : fexpr__62813.call(null,G__62814));
}));

(com.rpl.specter.impl.LateFn1.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#com.rpl.specter.impl.LateFn1{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0],null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn1.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__62786){
var self__ = this;
var G__62786__$1 = this;
return (new cljs.core.RecordIter((0),G__62786__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(com.rpl.specter.impl.LateFn1.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(com.rpl.specter.impl.LateFn1.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn1(self__.fn,self__.arg0,self__.__meta,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn1.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(com.rpl.specter.impl.LateFn1.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-1315140313 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(com.rpl.specter.impl.LateFn1.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this62789,other62790){
var self__ = this;
var this62789__$1 = this;
return (((!((other62790 == null)))) && ((this62789__$1.constructor === other62790.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this62789__$1.fn,other62790.fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this62789__$1.arg0,other62790.arg0)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this62789__$1.__extmap,other62790.__extmap)));
}));

(com.rpl.specter.impl.LateFn1.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new com.rpl.specter.impl.LateFn1(self__.fn,self__.arg0,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(com.rpl.specter.impl.LateFn1.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__62786){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__62834 = cljs.core.keyword_identical_QMARK_;
var expr__62835 = k__4388__auto__;
if(cljs.core.truth_((pred__62834.cljs$core$IFn$_invoke$arity$2 ? pred__62834.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__62835) : pred__62834.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__62835)))){
return (new com.rpl.specter.impl.LateFn1(G__62786,self__.arg0,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__62834.cljs$core$IFn$_invoke$arity$2 ? pred__62834.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg0","arg0",1629842355),expr__62835) : pred__62834.call(null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),expr__62835)))){
return (new com.rpl.specter.impl.LateFn1(self__.fn,G__62786,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn1(self__.fn,self__.arg0,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__62786),null));
}
}
}));

(com.rpl.specter.impl.LateFn1.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0,null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn1.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__62786){
var self__ = this;
var this__4379__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn1(self__.fn,self__.arg0,G__62786,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn1.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(com.rpl.specter.impl.LateFn1.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)], null);
}));

(com.rpl.specter.impl.LateFn1.cljs$lang$type = true);

(com.rpl.specter.impl.LateFn1.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/LateFn1",null,(1),null));
}));

(com.rpl.specter.impl.LateFn1.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"com.rpl.specter.impl/LateFn1");
}));

/**
 * Positional factory function for com.rpl.specter.impl/LateFn1.
 */
com.rpl.specter.impl.__GT_LateFn1 = (function com$rpl$specter$impl$__GT_LateFn1(fn,arg0){
return (new com.rpl.specter.impl.LateFn1(fn,arg0,null,null,null));
});

/**
 * Factory function for com.rpl.specter.impl/LateFn1, taking a map of keywords to field values.
 */
com.rpl.specter.impl.map__GT_LateFn1 = (function com$rpl$specter$impl$map__GT_LateFn1(G__62791){
var extmap__4419__auto__ = (function (){var G__62843 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__62791,new cljs.core.Keyword(null,"fn","fn",-1175266204),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"arg0","arg0",1629842355)], 0));
if(cljs.core.record_QMARK_(G__62791)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__62843);
} else {
return G__62843;
}
})();
return (new com.rpl.specter.impl.LateFn1(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__62791),new cljs.core.Keyword(null,"arg0","arg0",1629842355).cljs$core$IFn$_invoke$arity$1(G__62791),null,cljs.core.not_empty(extmap__4419__auto__),null));
});



/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {com.rpl.specter.impl.LateResolve}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
com.rpl.specter.impl.LateFn2 = (function (fn,arg0,arg1,__meta,__extmap,__hash){
this.fn = fn;
this.arg0 = arg0;
this.arg1 = arg1;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(com.rpl.specter.impl.LateFn2.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(com.rpl.specter.impl.LateFn2.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k62847,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__62863 = k62847;
var G__62863__$1 = (((G__62863 instanceof cljs.core.Keyword))?G__62863.fqn:null);
switch (G__62863__$1) {
case "fn":
return self__.fn;

break;
case "arg0":
return self__.arg0;

break;
case "arg1":
return self__.arg1;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k62847,else__4383__auto__);

}
}));

(com.rpl.specter.impl.LateFn2.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__62867){
var vec__62869 = p__62867;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62869,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62869,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(com.rpl.specter.impl.LateFn2.prototype.com$rpl$specter$impl$LateResolve$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.impl.LateFn2.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__59310__auto__,dynamic_params62617){
var self__ = this;
var this__59310__auto____$1 = this;
var G__62880 = com.rpl.specter.impl.late_resolve(self__.arg0,dynamic_params62617);
var G__62881 = com.rpl.specter.impl.late_resolve(self__.arg1,dynamic_params62617);
var fexpr__62879 = com.rpl.specter.impl.late_resolve(self__.fn,dynamic_params62617);
return (fexpr__62879.cljs$core$IFn$_invoke$arity$2 ? fexpr__62879.cljs$core$IFn$_invoke$arity$2(G__62880,G__62881) : fexpr__62879.call(null,G__62880,G__62881));
}));

(com.rpl.specter.impl.LateFn2.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#com.rpl.specter.impl.LateFn2{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1],null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn2.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__62846){
var self__ = this;
var G__62846__$1 = this;
return (new cljs.core.RecordIter((0),G__62846__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(com.rpl.specter.impl.LateFn2.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(com.rpl.specter.impl.LateFn2.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn2(self__.fn,self__.arg0,self__.arg1,self__.__meta,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn2.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
}));

(com.rpl.specter.impl.LateFn2.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (1833421521 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(com.rpl.specter.impl.LateFn2.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this62848,other62849){
var self__ = this;
var this62848__$1 = this;
return (((!((other62849 == null)))) && ((this62848__$1.constructor === other62849.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this62848__$1.fn,other62849.fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this62848__$1.arg0,other62849.arg0)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this62848__$1.arg1,other62849.arg1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this62848__$1.__extmap,other62849.__extmap)));
}));

(com.rpl.specter.impl.LateFn2.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),null,new cljs.core.Keyword(null,"arg1","arg1",951899358),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new com.rpl.specter.impl.LateFn2(self__.fn,self__.arg0,self__.arg1,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(com.rpl.specter.impl.LateFn2.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__62846){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__62899 = cljs.core.keyword_identical_QMARK_;
var expr__62900 = k__4388__auto__;
if(cljs.core.truth_((pred__62899.cljs$core$IFn$_invoke$arity$2 ? pred__62899.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__62900) : pred__62899.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__62900)))){
return (new com.rpl.specter.impl.LateFn2(G__62846,self__.arg0,self__.arg1,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__62899.cljs$core$IFn$_invoke$arity$2 ? pred__62899.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg0","arg0",1629842355),expr__62900) : pred__62899.call(null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),expr__62900)))){
return (new com.rpl.specter.impl.LateFn2(self__.fn,G__62846,self__.arg1,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__62899.cljs$core$IFn$_invoke$arity$2 ? pred__62899.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg1","arg1",951899358),expr__62900) : pred__62899.call(null,new cljs.core.Keyword(null,"arg1","arg1",951899358),expr__62900)))){
return (new com.rpl.specter.impl.LateFn2(self__.fn,self__.arg0,G__62846,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn2(self__.fn,self__.arg0,self__.arg1,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__62846),null));
}
}
}
}));

(com.rpl.specter.impl.LateFn2.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1,null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn2.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__62846){
var self__ = this;
var this__4379__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn2(self__.fn,self__.arg0,self__.arg1,G__62846,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn2.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(com.rpl.specter.impl.LateFn2.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null)], null);
}));

(com.rpl.specter.impl.LateFn2.cljs$lang$type = true);

(com.rpl.specter.impl.LateFn2.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/LateFn2",null,(1),null));
}));

(com.rpl.specter.impl.LateFn2.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"com.rpl.specter.impl/LateFn2");
}));

/**
 * Positional factory function for com.rpl.specter.impl/LateFn2.
 */
com.rpl.specter.impl.__GT_LateFn2 = (function com$rpl$specter$impl$__GT_LateFn2(fn,arg0,arg1){
return (new com.rpl.specter.impl.LateFn2(fn,arg0,arg1,null,null,null));
});

/**
 * Factory function for com.rpl.specter.impl/LateFn2, taking a map of keywords to field values.
 */
com.rpl.specter.impl.map__GT_LateFn2 = (function com$rpl$specter$impl$map__GT_LateFn2(G__62850){
var extmap__4419__auto__ = (function (){var G__62912 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__62850,new cljs.core.Keyword(null,"fn","fn",-1175266204),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358)], 0));
if(cljs.core.record_QMARK_(G__62850)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__62912);
} else {
return G__62912;
}
})();
return (new com.rpl.specter.impl.LateFn2(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__62850),new cljs.core.Keyword(null,"arg0","arg0",1629842355).cljs$core$IFn$_invoke$arity$1(G__62850),new cljs.core.Keyword(null,"arg1","arg1",951899358).cljs$core$IFn$_invoke$arity$1(G__62850),null,cljs.core.not_empty(extmap__4419__auto__),null));
});



/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {com.rpl.specter.impl.LateResolve}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
com.rpl.specter.impl.LateFn3 = (function (fn,arg0,arg1,arg2,__meta,__extmap,__hash){
this.fn = fn;
this.arg0 = arg0;
this.arg1 = arg1;
this.arg2 = arg2;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(com.rpl.specter.impl.LateFn3.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(com.rpl.specter.impl.LateFn3.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k62918,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__62926 = k62918;
var G__62926__$1 = (((G__62926 instanceof cljs.core.Keyword))?G__62926.fqn:null);
switch (G__62926__$1) {
case "fn":
return self__.fn;

break;
case "arg0":
return self__.arg0;

break;
case "arg1":
return self__.arg1;

break;
case "arg2":
return self__.arg2;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k62918,else__4383__auto__);

}
}));

(com.rpl.specter.impl.LateFn3.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__62933){
var vec__62934 = p__62933;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62934,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62934,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(com.rpl.specter.impl.LateFn3.prototype.com$rpl$specter$impl$LateResolve$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.impl.LateFn3.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__59310__auto__,dynamic_params62618){
var self__ = this;
var this__59310__auto____$1 = this;
var G__62944 = com.rpl.specter.impl.late_resolve(self__.arg0,dynamic_params62618);
var G__62945 = com.rpl.specter.impl.late_resolve(self__.arg1,dynamic_params62618);
var G__62946 = com.rpl.specter.impl.late_resolve(self__.arg2,dynamic_params62618);
var fexpr__62943 = com.rpl.specter.impl.late_resolve(self__.fn,dynamic_params62618);
return (fexpr__62943.cljs$core$IFn$_invoke$arity$3 ? fexpr__62943.cljs$core$IFn$_invoke$arity$3(G__62944,G__62945,G__62946) : fexpr__62943.call(null,G__62944,G__62945,G__62946));
}));

(com.rpl.specter.impl.LateFn3.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#com.rpl.specter.impl.LateFn3{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2],null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn3.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__62917){
var self__ = this;
var G__62917__$1 = this;
return (new cljs.core.RecordIter((0),G__62917__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(com.rpl.specter.impl.LateFn3.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(com.rpl.specter.impl.LateFn3.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn3(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.__meta,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn3.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (4 + cljs.core.count(self__.__extmap));
}));

(com.rpl.specter.impl.LateFn3.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-1966076701 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(com.rpl.specter.impl.LateFn3.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this62919,other62920){
var self__ = this;
var this62919__$1 = this;
return (((!((other62920 == null)))) && ((this62919__$1.constructor === other62920.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this62919__$1.fn,other62920.fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this62919__$1.arg0,other62920.arg0)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this62919__$1.arg1,other62920.arg1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this62919__$1.arg2,other62920.arg2)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this62919__$1.__extmap,other62920.__extmap)));
}));

(com.rpl.specter.impl.LateFn3.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),null,new cljs.core.Keyword(null,"arg1","arg1",951899358),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new com.rpl.specter.impl.LateFn3(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(com.rpl.specter.impl.LateFn3.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__62917){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__62961 = cljs.core.keyword_identical_QMARK_;
var expr__62962 = k__4388__auto__;
if(cljs.core.truth_((pred__62961.cljs$core$IFn$_invoke$arity$2 ? pred__62961.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__62962) : pred__62961.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__62962)))){
return (new com.rpl.specter.impl.LateFn3(G__62917,self__.arg0,self__.arg1,self__.arg2,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__62961.cljs$core$IFn$_invoke$arity$2 ? pred__62961.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg0","arg0",1629842355),expr__62962) : pred__62961.call(null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),expr__62962)))){
return (new com.rpl.specter.impl.LateFn3(self__.fn,G__62917,self__.arg1,self__.arg2,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__62961.cljs$core$IFn$_invoke$arity$2 ? pred__62961.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg1","arg1",951899358),expr__62962) : pred__62961.call(null,new cljs.core.Keyword(null,"arg1","arg1",951899358),expr__62962)))){
return (new com.rpl.specter.impl.LateFn3(self__.fn,self__.arg0,G__62917,self__.arg2,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__62961.cljs$core$IFn$_invoke$arity$2 ? pred__62961.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg2","arg2",1729550917),expr__62962) : pred__62961.call(null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),expr__62962)))){
return (new com.rpl.specter.impl.LateFn3(self__.fn,self__.arg0,self__.arg1,G__62917,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn3(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__62917),null));
}
}
}
}
}));

(com.rpl.specter.impl.LateFn3.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2,null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn3.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__62917){
var self__ = this;
var this__4379__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn3(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__62917,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn3.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(com.rpl.specter.impl.LateFn3.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null),new cljs.core.Symbol(null,"arg2","arg2",-924884852,null)], null);
}));

(com.rpl.specter.impl.LateFn3.cljs$lang$type = true);

(com.rpl.specter.impl.LateFn3.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/LateFn3",null,(1),null));
}));

(com.rpl.specter.impl.LateFn3.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"com.rpl.specter.impl/LateFn3");
}));

/**
 * Positional factory function for com.rpl.specter.impl/LateFn3.
 */
com.rpl.specter.impl.__GT_LateFn3 = (function com$rpl$specter$impl$__GT_LateFn3(fn,arg0,arg1,arg2){
return (new com.rpl.specter.impl.LateFn3(fn,arg0,arg1,arg2,null,null,null));
});

/**
 * Factory function for com.rpl.specter.impl/LateFn3, taking a map of keywords to field values.
 */
com.rpl.specter.impl.map__GT_LateFn3 = (function com$rpl$specter$impl$map__GT_LateFn3(G__62923){
var extmap__4419__auto__ = (function (){var G__62968 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__62923,new cljs.core.Keyword(null,"fn","fn",-1175266204),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917)], 0));
if(cljs.core.record_QMARK_(G__62923)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__62968);
} else {
return G__62968;
}
})();
return (new com.rpl.specter.impl.LateFn3(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__62923),new cljs.core.Keyword(null,"arg0","arg0",1629842355).cljs$core$IFn$_invoke$arity$1(G__62923),new cljs.core.Keyword(null,"arg1","arg1",951899358).cljs$core$IFn$_invoke$arity$1(G__62923),new cljs.core.Keyword(null,"arg2","arg2",1729550917).cljs$core$IFn$_invoke$arity$1(G__62923),null,cljs.core.not_empty(extmap__4419__auto__),null));
});



/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {com.rpl.specter.impl.LateResolve}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
com.rpl.specter.impl.LateFn4 = (function (fn,arg0,arg1,arg2,arg3,__meta,__extmap,__hash){
this.fn = fn;
this.arg0 = arg0;
this.arg1 = arg1;
this.arg2 = arg2;
this.arg3 = arg3;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(com.rpl.specter.impl.LateFn4.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(com.rpl.specter.impl.LateFn4.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k62971,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__62984 = k62971;
var G__62984__$1 = (((G__62984 instanceof cljs.core.Keyword))?G__62984.fqn:null);
switch (G__62984__$1) {
case "fn":
return self__.fn;

break;
case "arg0":
return self__.arg0;

break;
case "arg1":
return self__.arg1;

break;
case "arg2":
return self__.arg2;

break;
case "arg3":
return self__.arg3;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k62971,else__4383__auto__);

}
}));

(com.rpl.specter.impl.LateFn4.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__62986){
var vec__62987 = p__62986;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62987,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62987,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(com.rpl.specter.impl.LateFn4.prototype.com$rpl$specter$impl$LateResolve$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.impl.LateFn4.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__59310__auto__,dynamic_params62619){
var self__ = this;
var this__59310__auto____$1 = this;
var G__62992 = com.rpl.specter.impl.late_resolve(self__.arg0,dynamic_params62619);
var G__62993 = com.rpl.specter.impl.late_resolve(self__.arg1,dynamic_params62619);
var G__62994 = com.rpl.specter.impl.late_resolve(self__.arg2,dynamic_params62619);
var G__62995 = com.rpl.specter.impl.late_resolve(self__.arg3,dynamic_params62619);
var fexpr__62991 = com.rpl.specter.impl.late_resolve(self__.fn,dynamic_params62619);
return (fexpr__62991.cljs$core$IFn$_invoke$arity$4 ? fexpr__62991.cljs$core$IFn$_invoke$arity$4(G__62992,G__62993,G__62994,G__62995) : fexpr__62991.call(null,G__62992,G__62993,G__62994,G__62995));
}));

(com.rpl.specter.impl.LateFn4.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#com.rpl.specter.impl.LateFn4{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3],null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn4.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__62970){
var self__ = this;
var G__62970__$1 = this;
return (new cljs.core.RecordIter((0),G__62970__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(com.rpl.specter.impl.LateFn4.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(com.rpl.specter.impl.LateFn4.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn4(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.__meta,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn4.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (5 + cljs.core.count(self__.__extmap));
}));

(com.rpl.specter.impl.LateFn4.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-1293239800 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(com.rpl.specter.impl.LateFn4.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this62972,other62973){
var self__ = this;
var this62972__$1 = this;
return (((!((other62973 == null)))) && ((this62972__$1.constructor === other62973.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this62972__$1.fn,other62973.fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this62972__$1.arg0,other62973.arg0)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this62972__$1.arg1,other62973.arg1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this62972__$1.arg2,other62973.arg2)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this62972__$1.arg3,other62973.arg3)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this62972__$1.__extmap,other62973.__extmap)));
}));

(com.rpl.specter.impl.LateFn4.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"arg3","arg3",-1486822496),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),null,new cljs.core.Keyword(null,"arg1","arg1",951899358),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new com.rpl.specter.impl.LateFn4(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(com.rpl.specter.impl.LateFn4.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__62970){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__63011 = cljs.core.keyword_identical_QMARK_;
var expr__63012 = k__4388__auto__;
if(cljs.core.truth_((pred__63011.cljs$core$IFn$_invoke$arity$2 ? pred__63011.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__63012) : pred__63011.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__63012)))){
return (new com.rpl.specter.impl.LateFn4(G__62970,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__63011.cljs$core$IFn$_invoke$arity$2 ? pred__63011.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg0","arg0",1629842355),expr__63012) : pred__63011.call(null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),expr__63012)))){
return (new com.rpl.specter.impl.LateFn4(self__.fn,G__62970,self__.arg1,self__.arg2,self__.arg3,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__63011.cljs$core$IFn$_invoke$arity$2 ? pred__63011.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg1","arg1",951899358),expr__63012) : pred__63011.call(null,new cljs.core.Keyword(null,"arg1","arg1",951899358),expr__63012)))){
return (new com.rpl.specter.impl.LateFn4(self__.fn,self__.arg0,G__62970,self__.arg2,self__.arg3,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__63011.cljs$core$IFn$_invoke$arity$2 ? pred__63011.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg2","arg2",1729550917),expr__63012) : pred__63011.call(null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),expr__63012)))){
return (new com.rpl.specter.impl.LateFn4(self__.fn,self__.arg0,self__.arg1,G__62970,self__.arg3,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__63011.cljs$core$IFn$_invoke$arity$2 ? pred__63011.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg3","arg3",-1486822496),expr__63012) : pred__63011.call(null,new cljs.core.Keyword(null,"arg3","arg3",-1486822496),expr__63012)))){
return (new com.rpl.specter.impl.LateFn4(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__62970,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn4(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__62970),null));
}
}
}
}
}
}));

(com.rpl.specter.impl.LateFn4.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3,null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn4.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__62970){
var self__ = this;
var this__4379__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn4(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,G__62970,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn4.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(com.rpl.specter.impl.LateFn4.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null),new cljs.core.Symbol(null,"arg2","arg2",-924884852,null),new cljs.core.Symbol(null,"arg3","arg3",153709031,null)], null);
}));

(com.rpl.specter.impl.LateFn4.cljs$lang$type = true);

(com.rpl.specter.impl.LateFn4.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/LateFn4",null,(1),null));
}));

(com.rpl.specter.impl.LateFn4.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"com.rpl.specter.impl/LateFn4");
}));

/**
 * Positional factory function for com.rpl.specter.impl/LateFn4.
 */
com.rpl.specter.impl.__GT_LateFn4 = (function com$rpl$specter$impl$__GT_LateFn4(fn,arg0,arg1,arg2,arg3){
return (new com.rpl.specter.impl.LateFn4(fn,arg0,arg1,arg2,arg3,null,null,null));
});

/**
 * Factory function for com.rpl.specter.impl/LateFn4, taking a map of keywords to field values.
 */
com.rpl.specter.impl.map__GT_LateFn4 = (function com$rpl$specter$impl$map__GT_LateFn4(G__62977){
var extmap__4419__auto__ = (function (){var G__63028 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__62977,new cljs.core.Keyword(null,"fn","fn",-1175266204),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496)], 0));
if(cljs.core.record_QMARK_(G__62977)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__63028);
} else {
return G__63028;
}
})();
return (new com.rpl.specter.impl.LateFn4(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__62977),new cljs.core.Keyword(null,"arg0","arg0",1629842355).cljs$core$IFn$_invoke$arity$1(G__62977),new cljs.core.Keyword(null,"arg1","arg1",951899358).cljs$core$IFn$_invoke$arity$1(G__62977),new cljs.core.Keyword(null,"arg2","arg2",1729550917).cljs$core$IFn$_invoke$arity$1(G__62977),new cljs.core.Keyword(null,"arg3","arg3",-1486822496).cljs$core$IFn$_invoke$arity$1(G__62977),null,cljs.core.not_empty(extmap__4419__auto__),null));
});



/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {com.rpl.specter.impl.LateResolve}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
com.rpl.specter.impl.LateFn5 = (function (fn,arg0,arg1,arg2,arg3,arg4,__meta,__extmap,__hash){
this.fn = fn;
this.arg0 = arg0;
this.arg1 = arg1;
this.arg2 = arg2;
this.arg3 = arg3;
this.arg4 = arg4;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(com.rpl.specter.impl.LateFn5.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(com.rpl.specter.impl.LateFn5.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k63032,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__63038 = k63032;
var G__63038__$1 = (((G__63038 instanceof cljs.core.Keyword))?G__63038.fqn:null);
switch (G__63038__$1) {
case "fn":
return self__.fn;

break;
case "arg0":
return self__.arg0;

break;
case "arg1":
return self__.arg1;

break;
case "arg2":
return self__.arg2;

break;
case "arg3":
return self__.arg3;

break;
case "arg4":
return self__.arg4;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k63032,else__4383__auto__);

}
}));

(com.rpl.specter.impl.LateFn5.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__63041){
var vec__63042 = p__63041;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63042,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63042,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(com.rpl.specter.impl.LateFn5.prototype.com$rpl$specter$impl$LateResolve$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.impl.LateFn5.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__59310__auto__,dynamic_params62620){
var self__ = this;
var this__59310__auto____$1 = this;
var G__63049 = com.rpl.specter.impl.late_resolve(self__.arg0,dynamic_params62620);
var G__63050 = com.rpl.specter.impl.late_resolve(self__.arg1,dynamic_params62620);
var G__63051 = com.rpl.specter.impl.late_resolve(self__.arg2,dynamic_params62620);
var G__63052 = com.rpl.specter.impl.late_resolve(self__.arg3,dynamic_params62620);
var G__63053 = com.rpl.specter.impl.late_resolve(self__.arg4,dynamic_params62620);
var fexpr__63048 = com.rpl.specter.impl.late_resolve(self__.fn,dynamic_params62620);
return (fexpr__63048.cljs$core$IFn$_invoke$arity$5 ? fexpr__63048.cljs$core$IFn$_invoke$arity$5(G__63049,G__63050,G__63051,G__63052,G__63053) : fexpr__63048.call(null,G__63049,G__63050,G__63051,G__63052,G__63053));
}));

(com.rpl.specter.impl.LateFn5.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#com.rpl.specter.impl.LateFn5{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4],null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn5.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__63031){
var self__ = this;
var G__63031__$1 = this;
return (new cljs.core.RecordIter((0),G__63031__$1,6,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(com.rpl.specter.impl.LateFn5.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(com.rpl.specter.impl.LateFn5.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn5(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.__meta,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn5.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (6 + cljs.core.count(self__.__extmap));
}));

(com.rpl.specter.impl.LateFn5.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-686294298 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(com.rpl.specter.impl.LateFn5.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this63033,other63034){
var self__ = this;
var this63033__$1 = this;
return (((!((other63034 == null)))) && ((this63033__$1.constructor === other63034.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63033__$1.fn,other63034.fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63033__$1.arg0,other63034.arg0)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63033__$1.arg1,other63034.arg1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63033__$1.arg2,other63034.arg2)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63033__$1.arg3,other63034.arg3)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63033__$1.arg4,other63034.arg4)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63033__$1.__extmap,other63034.__extmap)));
}));

(com.rpl.specter.impl.LateFn5.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"arg3","arg3",-1486822496),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),null,new cljs.core.Keyword(null,"arg1","arg1",951899358),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new com.rpl.specter.impl.LateFn5(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(com.rpl.specter.impl.LateFn5.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__63031){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__63065 = cljs.core.keyword_identical_QMARK_;
var expr__63066 = k__4388__auto__;
if(cljs.core.truth_((pred__63065.cljs$core$IFn$_invoke$arity$2 ? pred__63065.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__63066) : pred__63065.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__63066)))){
return (new com.rpl.specter.impl.LateFn5(G__63031,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__63065.cljs$core$IFn$_invoke$arity$2 ? pred__63065.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg0","arg0",1629842355),expr__63066) : pred__63065.call(null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),expr__63066)))){
return (new com.rpl.specter.impl.LateFn5(self__.fn,G__63031,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__63065.cljs$core$IFn$_invoke$arity$2 ? pred__63065.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg1","arg1",951899358),expr__63066) : pred__63065.call(null,new cljs.core.Keyword(null,"arg1","arg1",951899358),expr__63066)))){
return (new com.rpl.specter.impl.LateFn5(self__.fn,self__.arg0,G__63031,self__.arg2,self__.arg3,self__.arg4,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__63065.cljs$core$IFn$_invoke$arity$2 ? pred__63065.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg2","arg2",1729550917),expr__63066) : pred__63065.call(null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),expr__63066)))){
return (new com.rpl.specter.impl.LateFn5(self__.fn,self__.arg0,self__.arg1,G__63031,self__.arg3,self__.arg4,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__63065.cljs$core$IFn$_invoke$arity$2 ? pred__63065.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg3","arg3",-1486822496),expr__63066) : pred__63065.call(null,new cljs.core.Keyword(null,"arg3","arg3",-1486822496),expr__63066)))){
return (new com.rpl.specter.impl.LateFn5(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__63031,self__.arg4,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__63065.cljs$core$IFn$_invoke$arity$2 ? pred__63065.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg4","arg4",-831640004),expr__63066) : pred__63065.call(null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),expr__63066)))){
return (new com.rpl.specter.impl.LateFn5(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,G__63031,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn5(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__63031),null));
}
}
}
}
}
}
}));

(com.rpl.specter.impl.LateFn5.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4,null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn5.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__63031){
var self__ = this;
var this__4379__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn5(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,G__63031,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn5.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(com.rpl.specter.impl.LateFn5.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null),new cljs.core.Symbol(null,"arg2","arg2",-924884852,null),new cljs.core.Symbol(null,"arg3","arg3",153709031,null),new cljs.core.Symbol(null,"arg4","arg4",808891523,null)], null);
}));

(com.rpl.specter.impl.LateFn5.cljs$lang$type = true);

(com.rpl.specter.impl.LateFn5.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/LateFn5",null,(1),null));
}));

(com.rpl.specter.impl.LateFn5.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"com.rpl.specter.impl/LateFn5");
}));

/**
 * Positional factory function for com.rpl.specter.impl/LateFn5.
 */
com.rpl.specter.impl.__GT_LateFn5 = (function com$rpl$specter$impl$__GT_LateFn5(fn,arg0,arg1,arg2,arg3,arg4){
return (new com.rpl.specter.impl.LateFn5(fn,arg0,arg1,arg2,arg3,arg4,null,null,null));
});

/**
 * Factory function for com.rpl.specter.impl/LateFn5, taking a map of keywords to field values.
 */
com.rpl.specter.impl.map__GT_LateFn5 = (function com$rpl$specter$impl$map__GT_LateFn5(G__63036){
var extmap__4419__auto__ = (function (){var G__63083 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__63036,new cljs.core.Keyword(null,"fn","fn",-1175266204),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004)], 0));
if(cljs.core.record_QMARK_(G__63036)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__63083);
} else {
return G__63083;
}
})();
return (new com.rpl.specter.impl.LateFn5(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__63036),new cljs.core.Keyword(null,"arg0","arg0",1629842355).cljs$core$IFn$_invoke$arity$1(G__63036),new cljs.core.Keyword(null,"arg1","arg1",951899358).cljs$core$IFn$_invoke$arity$1(G__63036),new cljs.core.Keyword(null,"arg2","arg2",1729550917).cljs$core$IFn$_invoke$arity$1(G__63036),new cljs.core.Keyword(null,"arg3","arg3",-1486822496).cljs$core$IFn$_invoke$arity$1(G__63036),new cljs.core.Keyword(null,"arg4","arg4",-831640004).cljs$core$IFn$_invoke$arity$1(G__63036),null,cljs.core.not_empty(extmap__4419__auto__),null));
});



/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {com.rpl.specter.impl.LateResolve}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
com.rpl.specter.impl.LateFn6 = (function (fn,arg0,arg1,arg2,arg3,arg4,arg5,__meta,__extmap,__hash){
this.fn = fn;
this.arg0 = arg0;
this.arg1 = arg1;
this.arg2 = arg2;
this.arg3 = arg3;
this.arg4 = arg4;
this.arg5 = arg5;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(com.rpl.specter.impl.LateFn6.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(com.rpl.specter.impl.LateFn6.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k63086,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__63092 = k63086;
var G__63092__$1 = (((G__63092 instanceof cljs.core.Keyword))?G__63092.fqn:null);
switch (G__63092__$1) {
case "fn":
return self__.fn;

break;
case "arg0":
return self__.arg0;

break;
case "arg1":
return self__.arg1;

break;
case "arg2":
return self__.arg2;

break;
case "arg3":
return self__.arg3;

break;
case "arg4":
return self__.arg4;

break;
case "arg5":
return self__.arg5;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k63086,else__4383__auto__);

}
}));

(com.rpl.specter.impl.LateFn6.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__63094){
var vec__63096 = p__63094;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63096,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63096,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(com.rpl.specter.impl.LateFn6.prototype.com$rpl$specter$impl$LateResolve$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.impl.LateFn6.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__59310__auto__,dynamic_params62621){
var self__ = this;
var this__59310__auto____$1 = this;
var G__63101 = com.rpl.specter.impl.late_resolve(self__.arg0,dynamic_params62621);
var G__63102 = com.rpl.specter.impl.late_resolve(self__.arg1,dynamic_params62621);
var G__63103 = com.rpl.specter.impl.late_resolve(self__.arg2,dynamic_params62621);
var G__63104 = com.rpl.specter.impl.late_resolve(self__.arg3,dynamic_params62621);
var G__63105 = com.rpl.specter.impl.late_resolve(self__.arg4,dynamic_params62621);
var G__63106 = com.rpl.specter.impl.late_resolve(self__.arg5,dynamic_params62621);
var fexpr__63100 = com.rpl.specter.impl.late_resolve(self__.fn,dynamic_params62621);
return (fexpr__63100.cljs$core$IFn$_invoke$arity$6 ? fexpr__63100.cljs$core$IFn$_invoke$arity$6(G__63101,G__63102,G__63103,G__63104,G__63105,G__63106) : fexpr__63100.call(null,G__63101,G__63102,G__63103,G__63104,G__63105,G__63106));
}));

(com.rpl.specter.impl.LateFn6.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#com.rpl.specter.impl.LateFn6{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5],null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn6.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__63085){
var self__ = this;
var G__63085__$1 = this;
return (new cljs.core.RecordIter((0),G__63085__$1,7,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(com.rpl.specter.impl.LateFn6.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(com.rpl.specter.impl.LateFn6.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn6(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.__meta,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn6.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (7 + cljs.core.count(self__.__extmap));
}));

(com.rpl.specter.impl.LateFn6.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (1454341741 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(com.rpl.specter.impl.LateFn6.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this63087,other63088){
var self__ = this;
var this63087__$1 = this;
return (((!((other63088 == null)))) && ((this63087__$1.constructor === other63088.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63087__$1.fn,other63088.fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63087__$1.arg0,other63088.arg0)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63087__$1.arg1,other63088.arg1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63087__$1.arg2,other63088.arg2)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63087__$1.arg3,other63088.arg3)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63087__$1.arg4,other63088.arg4)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63087__$1.arg5,other63088.arg5)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63087__$1.__extmap,other63088.__extmap)));
}));

(com.rpl.specter.impl.LateFn6.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"arg3","arg3",-1486822496),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),null,new cljs.core.Keyword(null,"arg5","arg5",-1648794215),null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),null,new cljs.core.Keyword(null,"arg1","arg1",951899358),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new com.rpl.specter.impl.LateFn6(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(com.rpl.specter.impl.LateFn6.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__63085){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__63121 = cljs.core.keyword_identical_QMARK_;
var expr__63122 = k__4388__auto__;
if(cljs.core.truth_((pred__63121.cljs$core$IFn$_invoke$arity$2 ? pred__63121.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__63122) : pred__63121.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__63122)))){
return (new com.rpl.specter.impl.LateFn6(G__63085,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__63121.cljs$core$IFn$_invoke$arity$2 ? pred__63121.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg0","arg0",1629842355),expr__63122) : pred__63121.call(null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),expr__63122)))){
return (new com.rpl.specter.impl.LateFn6(self__.fn,G__63085,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__63121.cljs$core$IFn$_invoke$arity$2 ? pred__63121.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg1","arg1",951899358),expr__63122) : pred__63121.call(null,new cljs.core.Keyword(null,"arg1","arg1",951899358),expr__63122)))){
return (new com.rpl.specter.impl.LateFn6(self__.fn,self__.arg0,G__63085,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__63121.cljs$core$IFn$_invoke$arity$2 ? pred__63121.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg2","arg2",1729550917),expr__63122) : pred__63121.call(null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),expr__63122)))){
return (new com.rpl.specter.impl.LateFn6(self__.fn,self__.arg0,self__.arg1,G__63085,self__.arg3,self__.arg4,self__.arg5,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__63121.cljs$core$IFn$_invoke$arity$2 ? pred__63121.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg3","arg3",-1486822496),expr__63122) : pred__63121.call(null,new cljs.core.Keyword(null,"arg3","arg3",-1486822496),expr__63122)))){
return (new com.rpl.specter.impl.LateFn6(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__63085,self__.arg4,self__.arg5,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__63121.cljs$core$IFn$_invoke$arity$2 ? pred__63121.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg4","arg4",-831640004),expr__63122) : pred__63121.call(null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),expr__63122)))){
return (new com.rpl.specter.impl.LateFn6(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,G__63085,self__.arg5,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__63121.cljs$core$IFn$_invoke$arity$2 ? pred__63121.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg5","arg5",-1648794215),expr__63122) : pred__63121.call(null,new cljs.core.Keyword(null,"arg5","arg5",-1648794215),expr__63122)))){
return (new com.rpl.specter.impl.LateFn6(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,G__63085,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn6(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__63085),null));
}
}
}
}
}
}
}
}));

(com.rpl.specter.impl.LateFn6.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5,null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn6.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__63085){
var self__ = this;
var this__4379__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn6(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,G__63085,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn6.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(com.rpl.specter.impl.LateFn6.getBasis = (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null),new cljs.core.Symbol(null,"arg2","arg2",-924884852,null),new cljs.core.Symbol(null,"arg3","arg3",153709031,null),new cljs.core.Symbol(null,"arg4","arg4",808891523,null),new cljs.core.Symbol(null,"arg5","arg5",-8262688,null)], null);
}));

(com.rpl.specter.impl.LateFn6.cljs$lang$type = true);

(com.rpl.specter.impl.LateFn6.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/LateFn6",null,(1),null));
}));

(com.rpl.specter.impl.LateFn6.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"com.rpl.specter.impl/LateFn6");
}));

/**
 * Positional factory function for com.rpl.specter.impl/LateFn6.
 */
com.rpl.specter.impl.__GT_LateFn6 = (function com$rpl$specter$impl$__GT_LateFn6(fn,arg0,arg1,arg2,arg3,arg4,arg5){
return (new com.rpl.specter.impl.LateFn6(fn,arg0,arg1,arg2,arg3,arg4,arg5,null,null,null));
});

/**
 * Factory function for com.rpl.specter.impl/LateFn6, taking a map of keywords to field values.
 */
com.rpl.specter.impl.map__GT_LateFn6 = (function com$rpl$specter$impl$map__GT_LateFn6(G__63090){
var extmap__4419__auto__ = (function (){var G__63127 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__63090,new cljs.core.Keyword(null,"fn","fn",-1175266204),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215)], 0));
if(cljs.core.record_QMARK_(G__63090)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__63127);
} else {
return G__63127;
}
})();
return (new com.rpl.specter.impl.LateFn6(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__63090),new cljs.core.Keyword(null,"arg0","arg0",1629842355).cljs$core$IFn$_invoke$arity$1(G__63090),new cljs.core.Keyword(null,"arg1","arg1",951899358).cljs$core$IFn$_invoke$arity$1(G__63090),new cljs.core.Keyword(null,"arg2","arg2",1729550917).cljs$core$IFn$_invoke$arity$1(G__63090),new cljs.core.Keyword(null,"arg3","arg3",-1486822496).cljs$core$IFn$_invoke$arity$1(G__63090),new cljs.core.Keyword(null,"arg4","arg4",-831640004).cljs$core$IFn$_invoke$arity$1(G__63090),new cljs.core.Keyword(null,"arg5","arg5",-1648794215).cljs$core$IFn$_invoke$arity$1(G__63090),null,cljs.core.not_empty(extmap__4419__auto__),null));
});



/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {com.rpl.specter.impl.LateResolve}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
com.rpl.specter.impl.LateFn7 = (function (fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,__meta,__extmap,__hash){
this.fn = fn;
this.arg0 = arg0;
this.arg1 = arg1;
this.arg2 = arg2;
this.arg3 = arg3;
this.arg4 = arg4;
this.arg5 = arg5;
this.arg6 = arg6;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(com.rpl.specter.impl.LateFn7.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(com.rpl.specter.impl.LateFn7.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k63130,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__63136 = k63130;
var G__63136__$1 = (((G__63136 instanceof cljs.core.Keyword))?G__63136.fqn:null);
switch (G__63136__$1) {
case "fn":
return self__.fn;

break;
case "arg0":
return self__.arg0;

break;
case "arg1":
return self__.arg1;

break;
case "arg2":
return self__.arg2;

break;
case "arg3":
return self__.arg3;

break;
case "arg4":
return self__.arg4;

break;
case "arg5":
return self__.arg5;

break;
case "arg6":
return self__.arg6;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k63130,else__4383__auto__);

}
}));

(com.rpl.specter.impl.LateFn7.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__63139){
var vec__63140 = p__63139;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63140,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63140,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(com.rpl.specter.impl.LateFn7.prototype.com$rpl$specter$impl$LateResolve$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.impl.LateFn7.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__59310__auto__,dynamic_params62622){
var self__ = this;
var this__59310__auto____$1 = this;
var G__63145 = com.rpl.specter.impl.late_resolve(self__.arg0,dynamic_params62622);
var G__63146 = com.rpl.specter.impl.late_resolve(self__.arg1,dynamic_params62622);
var G__63147 = com.rpl.specter.impl.late_resolve(self__.arg2,dynamic_params62622);
var G__63148 = com.rpl.specter.impl.late_resolve(self__.arg3,dynamic_params62622);
var G__63149 = com.rpl.specter.impl.late_resolve(self__.arg4,dynamic_params62622);
var G__63150 = com.rpl.specter.impl.late_resolve(self__.arg5,dynamic_params62622);
var G__63151 = com.rpl.specter.impl.late_resolve(self__.arg6,dynamic_params62622);
var fexpr__63144 = com.rpl.specter.impl.late_resolve(self__.fn,dynamic_params62622);
return (fexpr__63144.cljs$core$IFn$_invoke$arity$7 ? fexpr__63144.cljs$core$IFn$_invoke$arity$7(G__63145,G__63146,G__63147,G__63148,G__63149,G__63150,G__63151) : fexpr__63144.call(null,G__63145,G__63146,G__63147,G__63148,G__63149,G__63150,G__63151));
}));

(com.rpl.specter.impl.LateFn7.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#com.rpl.specter.impl.LateFn7{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6],null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn7.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__63129){
var self__ = this;
var G__63129__$1 = this;
return (new cljs.core.RecordIter((0),G__63129__$1,8,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(com.rpl.specter.impl.LateFn7.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(com.rpl.specter.impl.LateFn7.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn7(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.__meta,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn7.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (8 + cljs.core.count(self__.__extmap));
}));

(com.rpl.specter.impl.LateFn7.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (2042831251 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(com.rpl.specter.impl.LateFn7.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this63131,other63132){
var self__ = this;
var this63131__$1 = this;
return (((!((other63132 == null)))) && ((this63131__$1.constructor === other63132.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63131__$1.fn,other63132.fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63131__$1.arg0,other63132.arg0)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63131__$1.arg1,other63132.arg1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63131__$1.arg2,other63132.arg2)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63131__$1.arg3,other63132.arg3)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63131__$1.arg4,other63132.arg4)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63131__$1.arg5,other63132.arg5)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63131__$1.arg6,other63132.arg6)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63131__$1.__extmap,other63132.__extmap)));
}));

(com.rpl.specter.impl.LateFn7.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arg3","arg3",-1486822496),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),null,new cljs.core.Keyword(null,"arg6","arg6",-2052656438),null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),null,new cljs.core.Keyword(null,"arg5","arg5",-1648794215),null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),null,new cljs.core.Keyword(null,"arg1","arg1",951899358),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new com.rpl.specter.impl.LateFn7(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(com.rpl.specter.impl.LateFn7.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__63129){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__63162 = cljs.core.keyword_identical_QMARK_;
var expr__63163 = k__4388__auto__;
if(cljs.core.truth_((pred__63162.cljs$core$IFn$_invoke$arity$2 ? pred__63162.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__63163) : pred__63162.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__63163)))){
return (new com.rpl.specter.impl.LateFn7(G__63129,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__63162.cljs$core$IFn$_invoke$arity$2 ? pred__63162.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg0","arg0",1629842355),expr__63163) : pred__63162.call(null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),expr__63163)))){
return (new com.rpl.specter.impl.LateFn7(self__.fn,G__63129,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__63162.cljs$core$IFn$_invoke$arity$2 ? pred__63162.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg1","arg1",951899358),expr__63163) : pred__63162.call(null,new cljs.core.Keyword(null,"arg1","arg1",951899358),expr__63163)))){
return (new com.rpl.specter.impl.LateFn7(self__.fn,self__.arg0,G__63129,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__63162.cljs$core$IFn$_invoke$arity$2 ? pred__63162.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg2","arg2",1729550917),expr__63163) : pred__63162.call(null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),expr__63163)))){
return (new com.rpl.specter.impl.LateFn7(self__.fn,self__.arg0,self__.arg1,G__63129,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__63162.cljs$core$IFn$_invoke$arity$2 ? pred__63162.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg3","arg3",-1486822496),expr__63163) : pred__63162.call(null,new cljs.core.Keyword(null,"arg3","arg3",-1486822496),expr__63163)))){
return (new com.rpl.specter.impl.LateFn7(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__63129,self__.arg4,self__.arg5,self__.arg6,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__63162.cljs$core$IFn$_invoke$arity$2 ? pred__63162.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg4","arg4",-831640004),expr__63163) : pred__63162.call(null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),expr__63163)))){
return (new com.rpl.specter.impl.LateFn7(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,G__63129,self__.arg5,self__.arg6,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__63162.cljs$core$IFn$_invoke$arity$2 ? pred__63162.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg5","arg5",-1648794215),expr__63163) : pred__63162.call(null,new cljs.core.Keyword(null,"arg5","arg5",-1648794215),expr__63163)))){
return (new com.rpl.specter.impl.LateFn7(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,G__63129,self__.arg6,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__63162.cljs$core$IFn$_invoke$arity$2 ? pred__63162.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg6","arg6",-2052656438),expr__63163) : pred__63162.call(null,new cljs.core.Keyword(null,"arg6","arg6",-2052656438),expr__63163)))){
return (new com.rpl.specter.impl.LateFn7(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,G__63129,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn7(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__63129),null));
}
}
}
}
}
}
}
}
}));

(com.rpl.specter.impl.LateFn7.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6,null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn7.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__63129){
var self__ = this;
var this__4379__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn7(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,G__63129,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn7.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(com.rpl.specter.impl.LateFn7.getBasis = (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null),new cljs.core.Symbol(null,"arg2","arg2",-924884852,null),new cljs.core.Symbol(null,"arg3","arg3",153709031,null),new cljs.core.Symbol(null,"arg4","arg4",808891523,null),new cljs.core.Symbol(null,"arg5","arg5",-8262688,null),new cljs.core.Symbol(null,"arg6","arg6",-412124911,null)], null);
}));

(com.rpl.specter.impl.LateFn7.cljs$lang$type = true);

(com.rpl.specter.impl.LateFn7.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/LateFn7",null,(1),null));
}));

(com.rpl.specter.impl.LateFn7.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"com.rpl.specter.impl/LateFn7");
}));

/**
 * Positional factory function for com.rpl.specter.impl/LateFn7.
 */
com.rpl.specter.impl.__GT_LateFn7 = (function com$rpl$specter$impl$__GT_LateFn7(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6){
return (new com.rpl.specter.impl.LateFn7(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,null,null,null));
});

/**
 * Factory function for com.rpl.specter.impl/LateFn7, taking a map of keywords to field values.
 */
com.rpl.specter.impl.map__GT_LateFn7 = (function com$rpl$specter$impl$map__GT_LateFn7(G__63133){
var extmap__4419__auto__ = (function (){var G__63179 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__63133,new cljs.core.Keyword(null,"fn","fn",-1175266204),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438)], 0));
if(cljs.core.record_QMARK_(G__63133)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__63179);
} else {
return G__63179;
}
})();
return (new com.rpl.specter.impl.LateFn7(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__63133),new cljs.core.Keyword(null,"arg0","arg0",1629842355).cljs$core$IFn$_invoke$arity$1(G__63133),new cljs.core.Keyword(null,"arg1","arg1",951899358).cljs$core$IFn$_invoke$arity$1(G__63133),new cljs.core.Keyword(null,"arg2","arg2",1729550917).cljs$core$IFn$_invoke$arity$1(G__63133),new cljs.core.Keyword(null,"arg3","arg3",-1486822496).cljs$core$IFn$_invoke$arity$1(G__63133),new cljs.core.Keyword(null,"arg4","arg4",-831640004).cljs$core$IFn$_invoke$arity$1(G__63133),new cljs.core.Keyword(null,"arg5","arg5",-1648794215).cljs$core$IFn$_invoke$arity$1(G__63133),new cljs.core.Keyword(null,"arg6","arg6",-2052656438).cljs$core$IFn$_invoke$arity$1(G__63133),null,cljs.core.not_empty(extmap__4419__auto__),null));
});



/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {com.rpl.specter.impl.LateResolve}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
com.rpl.specter.impl.LateFn8 = (function (fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,__meta,__extmap,__hash){
this.fn = fn;
this.arg0 = arg0;
this.arg1 = arg1;
this.arg2 = arg2;
this.arg3 = arg3;
this.arg4 = arg4;
this.arg5 = arg5;
this.arg6 = arg6;
this.arg7 = arg7;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(com.rpl.specter.impl.LateFn8.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(com.rpl.specter.impl.LateFn8.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k63183,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__63189 = k63183;
var G__63189__$1 = (((G__63189 instanceof cljs.core.Keyword))?G__63189.fqn:null);
switch (G__63189__$1) {
case "fn":
return self__.fn;

break;
case "arg0":
return self__.arg0;

break;
case "arg1":
return self__.arg1;

break;
case "arg2":
return self__.arg2;

break;
case "arg3":
return self__.arg3;

break;
case "arg4":
return self__.arg4;

break;
case "arg5":
return self__.arg5;

break;
case "arg6":
return self__.arg6;

break;
case "arg7":
return self__.arg7;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k63183,else__4383__auto__);

}
}));

(com.rpl.specter.impl.LateFn8.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__63191){
var vec__63193 = p__63191;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63193,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63193,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(com.rpl.specter.impl.LateFn8.prototype.com$rpl$specter$impl$LateResolve$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.impl.LateFn8.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__59310__auto__,dynamic_params62623){
var self__ = this;
var this__59310__auto____$1 = this;
var G__63199 = com.rpl.specter.impl.late_resolve(self__.arg0,dynamic_params62623);
var G__63200 = com.rpl.specter.impl.late_resolve(self__.arg1,dynamic_params62623);
var G__63201 = com.rpl.specter.impl.late_resolve(self__.arg2,dynamic_params62623);
var G__63202 = com.rpl.specter.impl.late_resolve(self__.arg3,dynamic_params62623);
var G__63203 = com.rpl.specter.impl.late_resolve(self__.arg4,dynamic_params62623);
var G__63204 = com.rpl.specter.impl.late_resolve(self__.arg5,dynamic_params62623);
var G__63205 = com.rpl.specter.impl.late_resolve(self__.arg6,dynamic_params62623);
var G__63206 = com.rpl.specter.impl.late_resolve(self__.arg7,dynamic_params62623);
var fexpr__63198 = com.rpl.specter.impl.late_resolve(self__.fn,dynamic_params62623);
return (fexpr__63198.cljs$core$IFn$_invoke$arity$8 ? fexpr__63198.cljs$core$IFn$_invoke$arity$8(G__63199,G__63200,G__63201,G__63202,G__63203,G__63204,G__63205,G__63206) : fexpr__63198.call(null,G__63199,G__63200,G__63201,G__63202,G__63203,G__63204,G__63205,G__63206));
}));

(com.rpl.specter.impl.LateFn8.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#com.rpl.specter.impl.LateFn8{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg7","arg7",932157509),self__.arg7],null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn8.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__63182){
var self__ = this;
var G__63182__$1 = this;
return (new cljs.core.RecordIter((0),G__63182__$1,9,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(com.rpl.specter.impl.LateFn8.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(com.rpl.specter.impl.LateFn8.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn8(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.__meta,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn8.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (9 + cljs.core.count(self__.__extmap));
}));

(com.rpl.specter.impl.LateFn8.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (170516454 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(com.rpl.specter.impl.LateFn8.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this63184,other63185){
var self__ = this;
var this63184__$1 = this;
return (((!((other63185 == null)))) && ((this63184__$1.constructor === other63185.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63184__$1.fn,other63185.fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63184__$1.arg0,other63185.arg0)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63184__$1.arg1,other63185.arg1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63184__$1.arg2,other63185.arg2)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63184__$1.arg3,other63185.arg3)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63184__$1.arg4,other63185.arg4)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63184__$1.arg5,other63185.arg5)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63184__$1.arg6,other63185.arg6)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63184__$1.arg7,other63185.arg7)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63184__$1.__extmap,other63185.__extmap)));
}));

(com.rpl.specter.impl.LateFn8.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, [new cljs.core.Keyword(null,"arg3","arg3",-1486822496),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"arg7","arg7",932157509),null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),null,new cljs.core.Keyword(null,"arg6","arg6",-2052656438),null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),null,new cljs.core.Keyword(null,"arg5","arg5",-1648794215),null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),null,new cljs.core.Keyword(null,"arg1","arg1",951899358),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new com.rpl.specter.impl.LateFn8(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(com.rpl.specter.impl.LateFn8.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__63182){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__63224 = cljs.core.keyword_identical_QMARK_;
var expr__63225 = k__4388__auto__;
if(cljs.core.truth_((pred__63224.cljs$core$IFn$_invoke$arity$2 ? pred__63224.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__63225) : pred__63224.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__63225)))){
return (new com.rpl.specter.impl.LateFn8(G__63182,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__63224.cljs$core$IFn$_invoke$arity$2 ? pred__63224.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg0","arg0",1629842355),expr__63225) : pred__63224.call(null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),expr__63225)))){
return (new com.rpl.specter.impl.LateFn8(self__.fn,G__63182,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__63224.cljs$core$IFn$_invoke$arity$2 ? pred__63224.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg1","arg1",951899358),expr__63225) : pred__63224.call(null,new cljs.core.Keyword(null,"arg1","arg1",951899358),expr__63225)))){
return (new com.rpl.specter.impl.LateFn8(self__.fn,self__.arg0,G__63182,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__63224.cljs$core$IFn$_invoke$arity$2 ? pred__63224.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg2","arg2",1729550917),expr__63225) : pred__63224.call(null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),expr__63225)))){
return (new com.rpl.specter.impl.LateFn8(self__.fn,self__.arg0,self__.arg1,G__63182,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__63224.cljs$core$IFn$_invoke$arity$2 ? pred__63224.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg3","arg3",-1486822496),expr__63225) : pred__63224.call(null,new cljs.core.Keyword(null,"arg3","arg3",-1486822496),expr__63225)))){
return (new com.rpl.specter.impl.LateFn8(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__63182,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__63224.cljs$core$IFn$_invoke$arity$2 ? pred__63224.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg4","arg4",-831640004),expr__63225) : pred__63224.call(null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),expr__63225)))){
return (new com.rpl.specter.impl.LateFn8(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,G__63182,self__.arg5,self__.arg6,self__.arg7,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__63224.cljs$core$IFn$_invoke$arity$2 ? pred__63224.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg5","arg5",-1648794215),expr__63225) : pred__63224.call(null,new cljs.core.Keyword(null,"arg5","arg5",-1648794215),expr__63225)))){
return (new com.rpl.specter.impl.LateFn8(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,G__63182,self__.arg6,self__.arg7,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__63224.cljs$core$IFn$_invoke$arity$2 ? pred__63224.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg6","arg6",-2052656438),expr__63225) : pred__63224.call(null,new cljs.core.Keyword(null,"arg6","arg6",-2052656438),expr__63225)))){
return (new com.rpl.specter.impl.LateFn8(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,G__63182,self__.arg7,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__63224.cljs$core$IFn$_invoke$arity$2 ? pred__63224.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg7","arg7",932157509),expr__63225) : pred__63224.call(null,new cljs.core.Keyword(null,"arg7","arg7",932157509),expr__63225)))){
return (new com.rpl.specter.impl.LateFn8(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,G__63182,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn8(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__63182),null));
}
}
}
}
}
}
}
}
}
}));

(com.rpl.specter.impl.LateFn8.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg7","arg7",932157509),self__.arg7,null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn8.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__63182){
var self__ = this;
var this__4379__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn8(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,G__63182,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn8.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(com.rpl.specter.impl.LateFn8.getBasis = (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null),new cljs.core.Symbol(null,"arg2","arg2",-924884852,null),new cljs.core.Symbol(null,"arg3","arg3",153709031,null),new cljs.core.Symbol(null,"arg4","arg4",808891523,null),new cljs.core.Symbol(null,"arg5","arg5",-8262688,null),new cljs.core.Symbol(null,"arg6","arg6",-412124911,null),new cljs.core.Symbol(null,"arg7","arg7",-1722278260,null)], null);
}));

(com.rpl.specter.impl.LateFn8.cljs$lang$type = true);

(com.rpl.specter.impl.LateFn8.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/LateFn8",null,(1),null));
}));

(com.rpl.specter.impl.LateFn8.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"com.rpl.specter.impl/LateFn8");
}));

/**
 * Positional factory function for com.rpl.specter.impl/LateFn8.
 */
com.rpl.specter.impl.__GT_LateFn8 = (function com$rpl$specter$impl$__GT_LateFn8(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7){
return (new com.rpl.specter.impl.LateFn8(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,null,null,null));
});

/**
 * Factory function for com.rpl.specter.impl/LateFn8, taking a map of keywords to field values.
 */
com.rpl.specter.impl.map__GT_LateFn8 = (function com$rpl$specter$impl$map__GT_LateFn8(G__63187){
var extmap__4419__auto__ = (function (){var G__63239 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__63187,new cljs.core.Keyword(null,"fn","fn",-1175266204),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509)], 0));
if(cljs.core.record_QMARK_(G__63187)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__63239);
} else {
return G__63239;
}
})();
return (new com.rpl.specter.impl.LateFn8(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__63187),new cljs.core.Keyword(null,"arg0","arg0",1629842355).cljs$core$IFn$_invoke$arity$1(G__63187),new cljs.core.Keyword(null,"arg1","arg1",951899358).cljs$core$IFn$_invoke$arity$1(G__63187),new cljs.core.Keyword(null,"arg2","arg2",1729550917).cljs$core$IFn$_invoke$arity$1(G__63187),new cljs.core.Keyword(null,"arg3","arg3",-1486822496).cljs$core$IFn$_invoke$arity$1(G__63187),new cljs.core.Keyword(null,"arg4","arg4",-831640004).cljs$core$IFn$_invoke$arity$1(G__63187),new cljs.core.Keyword(null,"arg5","arg5",-1648794215).cljs$core$IFn$_invoke$arity$1(G__63187),new cljs.core.Keyword(null,"arg6","arg6",-2052656438).cljs$core$IFn$_invoke$arity$1(G__63187),new cljs.core.Keyword(null,"arg7","arg7",932157509).cljs$core$IFn$_invoke$arity$1(G__63187),null,cljs.core.not_empty(extmap__4419__auto__),null));
});



/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {com.rpl.specter.impl.LateResolve}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
com.rpl.specter.impl.LateFn9 = (function (fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,__meta,__extmap,__hash){
this.fn = fn;
this.arg0 = arg0;
this.arg1 = arg1;
this.arg2 = arg2;
this.arg3 = arg3;
this.arg4 = arg4;
this.arg5 = arg5;
this.arg6 = arg6;
this.arg7 = arg7;
this.arg8 = arg8;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(com.rpl.specter.impl.LateFn9.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(com.rpl.specter.impl.LateFn9.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k63242,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__63251 = k63242;
var G__63251__$1 = (((G__63251 instanceof cljs.core.Keyword))?G__63251.fqn:null);
switch (G__63251__$1) {
case "fn":
return self__.fn;

break;
case "arg0":
return self__.arg0;

break;
case "arg1":
return self__.arg1;

break;
case "arg2":
return self__.arg2;

break;
case "arg3":
return self__.arg3;

break;
case "arg4":
return self__.arg4;

break;
case "arg5":
return self__.arg5;

break;
case "arg6":
return self__.arg6;

break;
case "arg7":
return self__.arg7;

break;
case "arg8":
return self__.arg8;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k63242,else__4383__auto__);

}
}));

(com.rpl.specter.impl.LateFn9.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__63253){
var vec__63255 = p__63253;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63255,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63255,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(com.rpl.specter.impl.LateFn9.prototype.com$rpl$specter$impl$LateResolve$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.impl.LateFn9.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__59310__auto__,dynamic_params62624){
var self__ = this;
var this__59310__auto____$1 = this;
var G__63259 = com.rpl.specter.impl.late_resolve(self__.arg0,dynamic_params62624);
var G__63260 = com.rpl.specter.impl.late_resolve(self__.arg1,dynamic_params62624);
var G__63261 = com.rpl.specter.impl.late_resolve(self__.arg2,dynamic_params62624);
var G__63262 = com.rpl.specter.impl.late_resolve(self__.arg3,dynamic_params62624);
var G__63263 = com.rpl.specter.impl.late_resolve(self__.arg4,dynamic_params62624);
var G__63264 = com.rpl.specter.impl.late_resolve(self__.arg5,dynamic_params62624);
var G__63265 = com.rpl.specter.impl.late_resolve(self__.arg6,dynamic_params62624);
var G__63266 = com.rpl.specter.impl.late_resolve(self__.arg7,dynamic_params62624);
var G__63267 = com.rpl.specter.impl.late_resolve(self__.arg8,dynamic_params62624);
var fexpr__63258 = com.rpl.specter.impl.late_resolve(self__.fn,dynamic_params62624);
return (fexpr__63258.cljs$core$IFn$_invoke$arity$9 ? fexpr__63258.cljs$core$IFn$_invoke$arity$9(G__63259,G__63260,G__63261,G__63262,G__63263,G__63264,G__63265,G__63266,G__63267) : fexpr__63258.call(null,G__63259,G__63260,G__63261,G__63262,G__63263,G__63264,G__63265,G__63266,G__63267));
}));

(com.rpl.specter.impl.LateFn9.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#com.rpl.specter.impl.LateFn9{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg7","arg7",932157509),self__.arg7],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg8","arg8",123916218),self__.arg8],null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn9.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__63241){
var self__ = this;
var G__63241__$1 = this;
return (new cljs.core.RecordIter((0),G__63241__$1,10,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509),new cljs.core.Keyword(null,"arg8","arg8",123916218)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(com.rpl.specter.impl.LateFn9.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(com.rpl.specter.impl.LateFn9.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn9(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.__meta,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn9.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (10 + cljs.core.count(self__.__extmap));
}));

(com.rpl.specter.impl.LateFn9.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (840896307 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(com.rpl.specter.impl.LateFn9.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this63243,other63244){
var self__ = this;
var this63243__$1 = this;
return (((!((other63244 == null)))) && ((this63243__$1.constructor === other63244.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63243__$1.fn,other63244.fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63243__$1.arg0,other63244.arg0)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63243__$1.arg1,other63244.arg1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63243__$1.arg2,other63244.arg2)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63243__$1.arg3,other63244.arg3)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63243__$1.arg4,other63244.arg4)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63243__$1.arg5,other63244.arg5)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63243__$1.arg6,other63244.arg6)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63243__$1.arg7,other63244.arg7)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63243__$1.arg8,other63244.arg8)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63243__$1.__extmap,other63244.__extmap)));
}));

(com.rpl.specter.impl.LateFn9.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, [new cljs.core.Keyword(null,"arg3","arg3",-1486822496),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"arg7","arg7",932157509),null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),null,new cljs.core.Keyword(null,"arg6","arg6",-2052656438),null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),null,new cljs.core.Keyword(null,"arg5","arg5",-1648794215),null,new cljs.core.Keyword(null,"arg8","arg8",123916218),null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),null,new cljs.core.Keyword(null,"arg1","arg1",951899358),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new com.rpl.specter.impl.LateFn9(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(com.rpl.specter.impl.LateFn9.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__63241){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__63289 = cljs.core.keyword_identical_QMARK_;
var expr__63290 = k__4388__auto__;
if(cljs.core.truth_((pred__63289.cljs$core$IFn$_invoke$arity$2 ? pred__63289.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__63290) : pred__63289.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__63290)))){
return (new com.rpl.specter.impl.LateFn9(G__63241,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__63289.cljs$core$IFn$_invoke$arity$2 ? pred__63289.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg0","arg0",1629842355),expr__63290) : pred__63289.call(null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),expr__63290)))){
return (new com.rpl.specter.impl.LateFn9(self__.fn,G__63241,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__63289.cljs$core$IFn$_invoke$arity$2 ? pred__63289.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg1","arg1",951899358),expr__63290) : pred__63289.call(null,new cljs.core.Keyword(null,"arg1","arg1",951899358),expr__63290)))){
return (new com.rpl.specter.impl.LateFn9(self__.fn,self__.arg0,G__63241,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__63289.cljs$core$IFn$_invoke$arity$2 ? pred__63289.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg2","arg2",1729550917),expr__63290) : pred__63289.call(null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),expr__63290)))){
return (new com.rpl.specter.impl.LateFn9(self__.fn,self__.arg0,self__.arg1,G__63241,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__63289.cljs$core$IFn$_invoke$arity$2 ? pred__63289.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg3","arg3",-1486822496),expr__63290) : pred__63289.call(null,new cljs.core.Keyword(null,"arg3","arg3",-1486822496),expr__63290)))){
return (new com.rpl.specter.impl.LateFn9(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__63241,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__63289.cljs$core$IFn$_invoke$arity$2 ? pred__63289.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg4","arg4",-831640004),expr__63290) : pred__63289.call(null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),expr__63290)))){
return (new com.rpl.specter.impl.LateFn9(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,G__63241,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__63289.cljs$core$IFn$_invoke$arity$2 ? pred__63289.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg5","arg5",-1648794215),expr__63290) : pred__63289.call(null,new cljs.core.Keyword(null,"arg5","arg5",-1648794215),expr__63290)))){
return (new com.rpl.specter.impl.LateFn9(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,G__63241,self__.arg6,self__.arg7,self__.arg8,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__63289.cljs$core$IFn$_invoke$arity$2 ? pred__63289.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg6","arg6",-2052656438),expr__63290) : pred__63289.call(null,new cljs.core.Keyword(null,"arg6","arg6",-2052656438),expr__63290)))){
return (new com.rpl.specter.impl.LateFn9(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,G__63241,self__.arg7,self__.arg8,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__63289.cljs$core$IFn$_invoke$arity$2 ? pred__63289.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg7","arg7",932157509),expr__63290) : pred__63289.call(null,new cljs.core.Keyword(null,"arg7","arg7",932157509),expr__63290)))){
return (new com.rpl.specter.impl.LateFn9(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,G__63241,self__.arg8,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__63289.cljs$core$IFn$_invoke$arity$2 ? pred__63289.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg8","arg8",123916218),expr__63290) : pred__63289.call(null,new cljs.core.Keyword(null,"arg8","arg8",123916218),expr__63290)))){
return (new com.rpl.specter.impl.LateFn9(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,G__63241,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn9(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__63241),null));
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
}));

(com.rpl.specter.impl.LateFn9.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg7","arg7",932157509),self__.arg7,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg8","arg8",123916218),self__.arg8,null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn9.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__63241){
var self__ = this;
var this__4379__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn9(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,G__63241,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn9.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(com.rpl.specter.impl.LateFn9.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null),new cljs.core.Symbol(null,"arg2","arg2",-924884852,null),new cljs.core.Symbol(null,"arg3","arg3",153709031,null),new cljs.core.Symbol(null,"arg4","arg4",808891523,null),new cljs.core.Symbol(null,"arg5","arg5",-8262688,null),new cljs.core.Symbol(null,"arg6","arg6",-412124911,null),new cljs.core.Symbol(null,"arg7","arg7",-1722278260,null),new cljs.core.Symbol(null,"arg8","arg8",1764447745,null)], null);
}));

(com.rpl.specter.impl.LateFn9.cljs$lang$type = true);

(com.rpl.specter.impl.LateFn9.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/LateFn9",null,(1),null));
}));

(com.rpl.specter.impl.LateFn9.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"com.rpl.specter.impl/LateFn9");
}));

/**
 * Positional factory function for com.rpl.specter.impl/LateFn9.
 */
com.rpl.specter.impl.__GT_LateFn9 = (function com$rpl$specter$impl$__GT_LateFn9(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8){
return (new com.rpl.specter.impl.LateFn9(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,null,null,null));
});

/**
 * Factory function for com.rpl.specter.impl/LateFn9, taking a map of keywords to field values.
 */
com.rpl.specter.impl.map__GT_LateFn9 = (function com$rpl$specter$impl$map__GT_LateFn9(G__63246){
var extmap__4419__auto__ = (function (){var G__63300 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__63246,new cljs.core.Keyword(null,"fn","fn",-1175266204),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509),new cljs.core.Keyword(null,"arg8","arg8",123916218)], 0));
if(cljs.core.record_QMARK_(G__63246)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__63300);
} else {
return G__63300;
}
})();
return (new com.rpl.specter.impl.LateFn9(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__63246),new cljs.core.Keyword(null,"arg0","arg0",1629842355).cljs$core$IFn$_invoke$arity$1(G__63246),new cljs.core.Keyword(null,"arg1","arg1",951899358).cljs$core$IFn$_invoke$arity$1(G__63246),new cljs.core.Keyword(null,"arg2","arg2",1729550917).cljs$core$IFn$_invoke$arity$1(G__63246),new cljs.core.Keyword(null,"arg3","arg3",-1486822496).cljs$core$IFn$_invoke$arity$1(G__63246),new cljs.core.Keyword(null,"arg4","arg4",-831640004).cljs$core$IFn$_invoke$arity$1(G__63246),new cljs.core.Keyword(null,"arg5","arg5",-1648794215).cljs$core$IFn$_invoke$arity$1(G__63246),new cljs.core.Keyword(null,"arg6","arg6",-2052656438).cljs$core$IFn$_invoke$arity$1(G__63246),new cljs.core.Keyword(null,"arg7","arg7",932157509).cljs$core$IFn$_invoke$arity$1(G__63246),new cljs.core.Keyword(null,"arg8","arg8",123916218).cljs$core$IFn$_invoke$arity$1(G__63246),null,cljs.core.not_empty(extmap__4419__auto__),null));
});



/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {com.rpl.specter.impl.LateResolve}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
com.rpl.specter.impl.LateFn10 = (function (fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,__meta,__extmap,__hash){
this.fn = fn;
this.arg0 = arg0;
this.arg1 = arg1;
this.arg2 = arg2;
this.arg3 = arg3;
this.arg4 = arg4;
this.arg5 = arg5;
this.arg6 = arg6;
this.arg7 = arg7;
this.arg8 = arg8;
this.arg9 = arg9;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(com.rpl.specter.impl.LateFn10.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(com.rpl.specter.impl.LateFn10.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k63303,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__63313 = k63303;
var G__63313__$1 = (((G__63313 instanceof cljs.core.Keyword))?G__63313.fqn:null);
switch (G__63313__$1) {
case "fn":
return self__.fn;

break;
case "arg0":
return self__.arg0;

break;
case "arg1":
return self__.arg1;

break;
case "arg2":
return self__.arg2;

break;
case "arg3":
return self__.arg3;

break;
case "arg4":
return self__.arg4;

break;
case "arg5":
return self__.arg5;

break;
case "arg6":
return self__.arg6;

break;
case "arg7":
return self__.arg7;

break;
case "arg8":
return self__.arg8;

break;
case "arg9":
return self__.arg9;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k63303,else__4383__auto__);

}
}));

(com.rpl.specter.impl.LateFn10.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__63316){
var vec__63317 = p__63316;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63317,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63317,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(com.rpl.specter.impl.LateFn10.prototype.com$rpl$specter$impl$LateResolve$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.impl.LateFn10.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__59310__auto__,dynamic_params62625){
var self__ = this;
var this__59310__auto____$1 = this;
var G__63321 = com.rpl.specter.impl.late_resolve(self__.arg0,dynamic_params62625);
var G__63322 = com.rpl.specter.impl.late_resolve(self__.arg1,dynamic_params62625);
var G__63323 = com.rpl.specter.impl.late_resolve(self__.arg2,dynamic_params62625);
var G__63324 = com.rpl.specter.impl.late_resolve(self__.arg3,dynamic_params62625);
var G__63325 = com.rpl.specter.impl.late_resolve(self__.arg4,dynamic_params62625);
var G__63326 = com.rpl.specter.impl.late_resolve(self__.arg5,dynamic_params62625);
var G__63327 = com.rpl.specter.impl.late_resolve(self__.arg6,dynamic_params62625);
var G__63328 = com.rpl.specter.impl.late_resolve(self__.arg7,dynamic_params62625);
var G__63329 = com.rpl.specter.impl.late_resolve(self__.arg8,dynamic_params62625);
var G__63330 = com.rpl.specter.impl.late_resolve(self__.arg9,dynamic_params62625);
var fexpr__63320 = com.rpl.specter.impl.late_resolve(self__.fn,dynamic_params62625);
return (fexpr__63320.cljs$core$IFn$_invoke$arity$10 ? fexpr__63320.cljs$core$IFn$_invoke$arity$10(G__63321,G__63322,G__63323,G__63324,G__63325,G__63326,G__63327,G__63328,G__63329,G__63330) : fexpr__63320.call(null,G__63321,G__63322,G__63323,G__63324,G__63325,G__63326,G__63327,G__63328,G__63329,G__63330));
}));

(com.rpl.specter.impl.LateFn10.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#com.rpl.specter.impl.LateFn10{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg7","arg7",932157509),self__.arg7],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg8","arg8",123916218),self__.arg8],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg9","arg9",-95117905),self__.arg9],null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn10.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__63302){
var self__ = this;
var G__63302__$1 = this;
return (new cljs.core.RecordIter((0),G__63302__$1,11,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509),new cljs.core.Keyword(null,"arg8","arg8",123916218),new cljs.core.Keyword(null,"arg9","arg9",-95117905)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(com.rpl.specter.impl.LateFn10.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(com.rpl.specter.impl.LateFn10.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn10(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.__meta,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn10.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (11 + cljs.core.count(self__.__extmap));
}));

(com.rpl.specter.impl.LateFn10.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-1353979086 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(com.rpl.specter.impl.LateFn10.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this63304,other63305){
var self__ = this;
var this63304__$1 = this;
return (((!((other63305 == null)))) && ((this63304__$1.constructor === other63305.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63304__$1.fn,other63305.fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63304__$1.arg0,other63305.arg0)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63304__$1.arg1,other63305.arg1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63304__$1.arg2,other63305.arg2)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63304__$1.arg3,other63305.arg3)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63304__$1.arg4,other63305.arg4)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63304__$1.arg5,other63305.arg5)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63304__$1.arg6,other63305.arg6)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63304__$1.arg7,other63305.arg7)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63304__$1.arg8,other63305.arg8)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63304__$1.arg9,other63305.arg9)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63304__$1.__extmap,other63305.__extmap)));
}));

(com.rpl.specter.impl.LateFn10.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [new cljs.core.Keyword(null,"arg3","arg3",-1486822496),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"arg7","arg7",932157509),null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),null,new cljs.core.Keyword(null,"arg6","arg6",-2052656438),null,new cljs.core.Keyword(null,"arg9","arg9",-95117905),null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),null,new cljs.core.Keyword(null,"arg5","arg5",-1648794215),null,new cljs.core.Keyword(null,"arg8","arg8",123916218),null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),null,new cljs.core.Keyword(null,"arg1","arg1",951899358),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new com.rpl.specter.impl.LateFn10(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(com.rpl.specter.impl.LateFn10.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__63302){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__63352 = cljs.core.keyword_identical_QMARK_;
var expr__63353 = k__4388__auto__;
if(cljs.core.truth_((pred__63352.cljs$core$IFn$_invoke$arity$2 ? pred__63352.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__63353) : pred__63352.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__63353)))){
return (new com.rpl.specter.impl.LateFn10(G__63302,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__63352.cljs$core$IFn$_invoke$arity$2 ? pred__63352.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg0","arg0",1629842355),expr__63353) : pred__63352.call(null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),expr__63353)))){
return (new com.rpl.specter.impl.LateFn10(self__.fn,G__63302,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__63352.cljs$core$IFn$_invoke$arity$2 ? pred__63352.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg1","arg1",951899358),expr__63353) : pred__63352.call(null,new cljs.core.Keyword(null,"arg1","arg1",951899358),expr__63353)))){
return (new com.rpl.specter.impl.LateFn10(self__.fn,self__.arg0,G__63302,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__63352.cljs$core$IFn$_invoke$arity$2 ? pred__63352.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg2","arg2",1729550917),expr__63353) : pred__63352.call(null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),expr__63353)))){
return (new com.rpl.specter.impl.LateFn10(self__.fn,self__.arg0,self__.arg1,G__63302,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__63352.cljs$core$IFn$_invoke$arity$2 ? pred__63352.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg3","arg3",-1486822496),expr__63353) : pred__63352.call(null,new cljs.core.Keyword(null,"arg3","arg3",-1486822496),expr__63353)))){
return (new com.rpl.specter.impl.LateFn10(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__63302,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__63352.cljs$core$IFn$_invoke$arity$2 ? pred__63352.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg4","arg4",-831640004),expr__63353) : pred__63352.call(null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),expr__63353)))){
return (new com.rpl.specter.impl.LateFn10(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,G__63302,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__63352.cljs$core$IFn$_invoke$arity$2 ? pred__63352.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg5","arg5",-1648794215),expr__63353) : pred__63352.call(null,new cljs.core.Keyword(null,"arg5","arg5",-1648794215),expr__63353)))){
return (new com.rpl.specter.impl.LateFn10(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,G__63302,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__63352.cljs$core$IFn$_invoke$arity$2 ? pred__63352.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg6","arg6",-2052656438),expr__63353) : pred__63352.call(null,new cljs.core.Keyword(null,"arg6","arg6",-2052656438),expr__63353)))){
return (new com.rpl.specter.impl.LateFn10(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,G__63302,self__.arg7,self__.arg8,self__.arg9,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__63352.cljs$core$IFn$_invoke$arity$2 ? pred__63352.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg7","arg7",932157509),expr__63353) : pred__63352.call(null,new cljs.core.Keyword(null,"arg7","arg7",932157509),expr__63353)))){
return (new com.rpl.specter.impl.LateFn10(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,G__63302,self__.arg8,self__.arg9,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__63352.cljs$core$IFn$_invoke$arity$2 ? pred__63352.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg8","arg8",123916218),expr__63353) : pred__63352.call(null,new cljs.core.Keyword(null,"arg8","arg8",123916218),expr__63353)))){
return (new com.rpl.specter.impl.LateFn10(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,G__63302,self__.arg9,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__63352.cljs$core$IFn$_invoke$arity$2 ? pred__63352.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg9","arg9",-95117905),expr__63353) : pred__63352.call(null,new cljs.core.Keyword(null,"arg9","arg9",-95117905),expr__63353)))){
return (new com.rpl.specter.impl.LateFn10(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,G__63302,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn10(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__63302),null));
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
}));

(com.rpl.specter.impl.LateFn10.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg7","arg7",932157509),self__.arg7,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg8","arg8",123916218),self__.arg8,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg9","arg9",-95117905),self__.arg9,null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn10.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__63302){
var self__ = this;
var this__4379__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn10(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,G__63302,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn10.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(com.rpl.specter.impl.LateFn10.getBasis = (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null),new cljs.core.Symbol(null,"arg2","arg2",-924884852,null),new cljs.core.Symbol(null,"arg3","arg3",153709031,null),new cljs.core.Symbol(null,"arg4","arg4",808891523,null),new cljs.core.Symbol(null,"arg5","arg5",-8262688,null),new cljs.core.Symbol(null,"arg6","arg6",-412124911,null),new cljs.core.Symbol(null,"arg7","arg7",-1722278260,null),new cljs.core.Symbol(null,"arg8","arg8",1764447745,null),new cljs.core.Symbol(null,"arg9","arg9",1545413622,null)], null);
}));

(com.rpl.specter.impl.LateFn10.cljs$lang$type = true);

(com.rpl.specter.impl.LateFn10.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/LateFn10",null,(1),null));
}));

(com.rpl.specter.impl.LateFn10.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"com.rpl.specter.impl/LateFn10");
}));

/**
 * Positional factory function for com.rpl.specter.impl/LateFn10.
 */
com.rpl.specter.impl.__GT_LateFn10 = (function com$rpl$specter$impl$__GT_LateFn10(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9){
return (new com.rpl.specter.impl.LateFn10(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,null,null,null));
});

/**
 * Factory function for com.rpl.specter.impl/LateFn10, taking a map of keywords to field values.
 */
com.rpl.specter.impl.map__GT_LateFn10 = (function com$rpl$specter$impl$map__GT_LateFn10(G__63308){
var extmap__4419__auto__ = (function (){var G__63369 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__63308,new cljs.core.Keyword(null,"fn","fn",-1175266204),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509),new cljs.core.Keyword(null,"arg8","arg8",123916218),new cljs.core.Keyword(null,"arg9","arg9",-95117905)], 0));
if(cljs.core.record_QMARK_(G__63308)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__63369);
} else {
return G__63369;
}
})();
return (new com.rpl.specter.impl.LateFn10(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__63308),new cljs.core.Keyword(null,"arg0","arg0",1629842355).cljs$core$IFn$_invoke$arity$1(G__63308),new cljs.core.Keyword(null,"arg1","arg1",951899358).cljs$core$IFn$_invoke$arity$1(G__63308),new cljs.core.Keyword(null,"arg2","arg2",1729550917).cljs$core$IFn$_invoke$arity$1(G__63308),new cljs.core.Keyword(null,"arg3","arg3",-1486822496).cljs$core$IFn$_invoke$arity$1(G__63308),new cljs.core.Keyword(null,"arg4","arg4",-831640004).cljs$core$IFn$_invoke$arity$1(G__63308),new cljs.core.Keyword(null,"arg5","arg5",-1648794215).cljs$core$IFn$_invoke$arity$1(G__63308),new cljs.core.Keyword(null,"arg6","arg6",-2052656438).cljs$core$IFn$_invoke$arity$1(G__63308),new cljs.core.Keyword(null,"arg7","arg7",932157509).cljs$core$IFn$_invoke$arity$1(G__63308),new cljs.core.Keyword(null,"arg8","arg8",123916218).cljs$core$IFn$_invoke$arity$1(G__63308),new cljs.core.Keyword(null,"arg9","arg9",-95117905).cljs$core$IFn$_invoke$arity$1(G__63308),null,cljs.core.not_empty(extmap__4419__auto__),null));
});



/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {com.rpl.specter.impl.LateResolve}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
com.rpl.specter.impl.LateFn11 = (function (fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,__meta,__extmap,__hash){
this.fn = fn;
this.arg0 = arg0;
this.arg1 = arg1;
this.arg2 = arg2;
this.arg3 = arg3;
this.arg4 = arg4;
this.arg5 = arg5;
this.arg6 = arg6;
this.arg7 = arg7;
this.arg8 = arg8;
this.arg9 = arg9;
this.arg10 = arg10;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(com.rpl.specter.impl.LateFn11.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(com.rpl.specter.impl.LateFn11.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k63373,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__63378 = k63373;
var G__63378__$1 = (((G__63378 instanceof cljs.core.Keyword))?G__63378.fqn:null);
switch (G__63378__$1) {
case "fn":
return self__.fn;

break;
case "arg0":
return self__.arg0;

break;
case "arg1":
return self__.arg1;

break;
case "arg2":
return self__.arg2;

break;
case "arg3":
return self__.arg3;

break;
case "arg4":
return self__.arg4;

break;
case "arg5":
return self__.arg5;

break;
case "arg6":
return self__.arg6;

break;
case "arg7":
return self__.arg7;

break;
case "arg8":
return self__.arg8;

break;
case "arg9":
return self__.arg9;

break;
case "arg10":
return self__.arg10;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k63373,else__4383__auto__);

}
}));

(com.rpl.specter.impl.LateFn11.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__63381){
var vec__63382 = p__63381;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63382,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63382,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(com.rpl.specter.impl.LateFn11.prototype.com$rpl$specter$impl$LateResolve$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.impl.LateFn11.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__59310__auto__,dynamic_params62626){
var self__ = this;
var this__59310__auto____$1 = this;
var G__63387 = com.rpl.specter.impl.late_resolve(self__.arg0,dynamic_params62626);
var G__63388 = com.rpl.specter.impl.late_resolve(self__.arg1,dynamic_params62626);
var G__63389 = com.rpl.specter.impl.late_resolve(self__.arg2,dynamic_params62626);
var G__63390 = com.rpl.specter.impl.late_resolve(self__.arg3,dynamic_params62626);
var G__63391 = com.rpl.specter.impl.late_resolve(self__.arg4,dynamic_params62626);
var G__63392 = com.rpl.specter.impl.late_resolve(self__.arg5,dynamic_params62626);
var G__63393 = com.rpl.specter.impl.late_resolve(self__.arg6,dynamic_params62626);
var G__63394 = com.rpl.specter.impl.late_resolve(self__.arg7,dynamic_params62626);
var G__63395 = com.rpl.specter.impl.late_resolve(self__.arg8,dynamic_params62626);
var G__63396 = com.rpl.specter.impl.late_resolve(self__.arg9,dynamic_params62626);
var G__63397 = com.rpl.specter.impl.late_resolve(self__.arg10,dynamic_params62626);
var fexpr__63386 = com.rpl.specter.impl.late_resolve(self__.fn,dynamic_params62626);
return (fexpr__63386.cljs$core$IFn$_invoke$arity$11 ? fexpr__63386.cljs$core$IFn$_invoke$arity$11(G__63387,G__63388,G__63389,G__63390,G__63391,G__63392,G__63393,G__63394,G__63395,G__63396,G__63397) : fexpr__63386.call(null,G__63387,G__63388,G__63389,G__63390,G__63391,G__63392,G__63393,G__63394,G__63395,G__63396,G__63397));
}));

(com.rpl.specter.impl.LateFn11.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#com.rpl.specter.impl.LateFn11{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg7","arg7",932157509),self__.arg7],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg8","arg8",123916218),self__.arg8],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg9","arg9",-95117905),self__.arg9],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg10","arg10",-1230917517),self__.arg10],null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn11.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__63372){
var self__ = this;
var G__63372__$1 = this;
return (new cljs.core.RecordIter((0),G__63372__$1,12,new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509),new cljs.core.Keyword(null,"arg8","arg8",123916218),new cljs.core.Keyword(null,"arg9","arg9",-95117905),new cljs.core.Keyword(null,"arg10","arg10",-1230917517)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(com.rpl.specter.impl.LateFn11.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(com.rpl.specter.impl.LateFn11.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn11(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.__meta,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn11.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (12 + cljs.core.count(self__.__extmap));
}));

(com.rpl.specter.impl.LateFn11.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (180129418 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(com.rpl.specter.impl.LateFn11.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this63374,other63375){
var self__ = this;
var this63374__$1 = this;
return (((!((other63375 == null)))) && ((this63374__$1.constructor === other63375.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63374__$1.fn,other63375.fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63374__$1.arg0,other63375.arg0)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63374__$1.arg1,other63375.arg1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63374__$1.arg2,other63375.arg2)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63374__$1.arg3,other63375.arg3)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63374__$1.arg4,other63375.arg4)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63374__$1.arg5,other63375.arg5)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63374__$1.arg6,other63375.arg6)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63374__$1.arg7,other63375.arg7)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63374__$1.arg8,other63375.arg8)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63374__$1.arg9,other63375.arg9)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63374__$1.arg10,other63375.arg10)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63374__$1.__extmap,other63375.__extmap)));
}));

(com.rpl.specter.impl.LateFn11.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 12, [new cljs.core.Keyword(null,"arg3","arg3",-1486822496),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"arg7","arg7",932157509),null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),null,new cljs.core.Keyword(null,"arg6","arg6",-2052656438),null,new cljs.core.Keyword(null,"arg9","arg9",-95117905),null,new cljs.core.Keyword(null,"arg10","arg10",-1230917517),null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),null,new cljs.core.Keyword(null,"arg5","arg5",-1648794215),null,new cljs.core.Keyword(null,"arg8","arg8",123916218),null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),null,new cljs.core.Keyword(null,"arg1","arg1",951899358),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new com.rpl.specter.impl.LateFn11(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(com.rpl.specter.impl.LateFn11.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__63372){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__63412 = cljs.core.keyword_identical_QMARK_;
var expr__63413 = k__4388__auto__;
if(cljs.core.truth_((pred__63412.cljs$core$IFn$_invoke$arity$2 ? pred__63412.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__63413) : pred__63412.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__63413)))){
return (new com.rpl.specter.impl.LateFn11(G__63372,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__63412.cljs$core$IFn$_invoke$arity$2 ? pred__63412.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg0","arg0",1629842355),expr__63413) : pred__63412.call(null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),expr__63413)))){
return (new com.rpl.specter.impl.LateFn11(self__.fn,G__63372,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__63412.cljs$core$IFn$_invoke$arity$2 ? pred__63412.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg1","arg1",951899358),expr__63413) : pred__63412.call(null,new cljs.core.Keyword(null,"arg1","arg1",951899358),expr__63413)))){
return (new com.rpl.specter.impl.LateFn11(self__.fn,self__.arg0,G__63372,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__63412.cljs$core$IFn$_invoke$arity$2 ? pred__63412.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg2","arg2",1729550917),expr__63413) : pred__63412.call(null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),expr__63413)))){
return (new com.rpl.specter.impl.LateFn11(self__.fn,self__.arg0,self__.arg1,G__63372,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__63412.cljs$core$IFn$_invoke$arity$2 ? pred__63412.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg3","arg3",-1486822496),expr__63413) : pred__63412.call(null,new cljs.core.Keyword(null,"arg3","arg3",-1486822496),expr__63413)))){
return (new com.rpl.specter.impl.LateFn11(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__63372,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__63412.cljs$core$IFn$_invoke$arity$2 ? pred__63412.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg4","arg4",-831640004),expr__63413) : pred__63412.call(null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),expr__63413)))){
return (new com.rpl.specter.impl.LateFn11(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,G__63372,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__63412.cljs$core$IFn$_invoke$arity$2 ? pred__63412.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg5","arg5",-1648794215),expr__63413) : pred__63412.call(null,new cljs.core.Keyword(null,"arg5","arg5",-1648794215),expr__63413)))){
return (new com.rpl.specter.impl.LateFn11(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,G__63372,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__63412.cljs$core$IFn$_invoke$arity$2 ? pred__63412.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg6","arg6",-2052656438),expr__63413) : pred__63412.call(null,new cljs.core.Keyword(null,"arg6","arg6",-2052656438),expr__63413)))){
return (new com.rpl.specter.impl.LateFn11(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,G__63372,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__63412.cljs$core$IFn$_invoke$arity$2 ? pred__63412.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg7","arg7",932157509),expr__63413) : pred__63412.call(null,new cljs.core.Keyword(null,"arg7","arg7",932157509),expr__63413)))){
return (new com.rpl.specter.impl.LateFn11(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,G__63372,self__.arg8,self__.arg9,self__.arg10,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__63412.cljs$core$IFn$_invoke$arity$2 ? pred__63412.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg8","arg8",123916218),expr__63413) : pred__63412.call(null,new cljs.core.Keyword(null,"arg8","arg8",123916218),expr__63413)))){
return (new com.rpl.specter.impl.LateFn11(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,G__63372,self__.arg9,self__.arg10,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__63412.cljs$core$IFn$_invoke$arity$2 ? pred__63412.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg9","arg9",-95117905),expr__63413) : pred__63412.call(null,new cljs.core.Keyword(null,"arg9","arg9",-95117905),expr__63413)))){
return (new com.rpl.specter.impl.LateFn11(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,G__63372,self__.arg10,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__63412.cljs$core$IFn$_invoke$arity$2 ? pred__63412.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg10","arg10",-1230917517),expr__63413) : pred__63412.call(null,new cljs.core.Keyword(null,"arg10","arg10",-1230917517),expr__63413)))){
return (new com.rpl.specter.impl.LateFn11(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,G__63372,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn11(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__63372),null));
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
}));

(com.rpl.specter.impl.LateFn11.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg7","arg7",932157509),self__.arg7,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg8","arg8",123916218),self__.arg8,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg9","arg9",-95117905),self__.arg9,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg10","arg10",-1230917517),self__.arg10,null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn11.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__63372){
var self__ = this;
var this__4379__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn11(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,G__63372,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn11.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(com.rpl.specter.impl.LateFn11.getBasis = (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null),new cljs.core.Symbol(null,"arg2","arg2",-924884852,null),new cljs.core.Symbol(null,"arg3","arg3",153709031,null),new cljs.core.Symbol(null,"arg4","arg4",808891523,null),new cljs.core.Symbol(null,"arg5","arg5",-8262688,null),new cljs.core.Symbol(null,"arg6","arg6",-412124911,null),new cljs.core.Symbol(null,"arg7","arg7",-1722278260,null),new cljs.core.Symbol(null,"arg8","arg8",1764447745,null),new cljs.core.Symbol(null,"arg9","arg9",1545413622,null),new cljs.core.Symbol(null,"arg10","arg10",409614010,null)], null);
}));

(com.rpl.specter.impl.LateFn11.cljs$lang$type = true);

(com.rpl.specter.impl.LateFn11.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/LateFn11",null,(1),null));
}));

(com.rpl.specter.impl.LateFn11.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"com.rpl.specter.impl/LateFn11");
}));

/**
 * Positional factory function for com.rpl.specter.impl/LateFn11.
 */
com.rpl.specter.impl.__GT_LateFn11 = (function com$rpl$specter$impl$__GT_LateFn11(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10){
return (new com.rpl.specter.impl.LateFn11(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,null,null,null));
});

/**
 * Factory function for com.rpl.specter.impl/LateFn11, taking a map of keywords to field values.
 */
com.rpl.specter.impl.map__GT_LateFn11 = (function com$rpl$specter$impl$map__GT_LateFn11(G__63376){
var extmap__4419__auto__ = (function (){var G__63429 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__63376,new cljs.core.Keyword(null,"fn","fn",-1175266204),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509),new cljs.core.Keyword(null,"arg8","arg8",123916218),new cljs.core.Keyword(null,"arg9","arg9",-95117905),new cljs.core.Keyword(null,"arg10","arg10",-1230917517)], 0));
if(cljs.core.record_QMARK_(G__63376)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__63429);
} else {
return G__63429;
}
})();
return (new com.rpl.specter.impl.LateFn11(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__63376),new cljs.core.Keyword(null,"arg0","arg0",1629842355).cljs$core$IFn$_invoke$arity$1(G__63376),new cljs.core.Keyword(null,"arg1","arg1",951899358).cljs$core$IFn$_invoke$arity$1(G__63376),new cljs.core.Keyword(null,"arg2","arg2",1729550917).cljs$core$IFn$_invoke$arity$1(G__63376),new cljs.core.Keyword(null,"arg3","arg3",-1486822496).cljs$core$IFn$_invoke$arity$1(G__63376),new cljs.core.Keyword(null,"arg4","arg4",-831640004).cljs$core$IFn$_invoke$arity$1(G__63376),new cljs.core.Keyword(null,"arg5","arg5",-1648794215).cljs$core$IFn$_invoke$arity$1(G__63376),new cljs.core.Keyword(null,"arg6","arg6",-2052656438).cljs$core$IFn$_invoke$arity$1(G__63376),new cljs.core.Keyword(null,"arg7","arg7",932157509).cljs$core$IFn$_invoke$arity$1(G__63376),new cljs.core.Keyword(null,"arg8","arg8",123916218).cljs$core$IFn$_invoke$arity$1(G__63376),new cljs.core.Keyword(null,"arg9","arg9",-95117905).cljs$core$IFn$_invoke$arity$1(G__63376),new cljs.core.Keyword(null,"arg10","arg10",-1230917517).cljs$core$IFn$_invoke$arity$1(G__63376),null,cljs.core.not_empty(extmap__4419__auto__),null));
});



/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {com.rpl.specter.impl.LateResolve}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
com.rpl.specter.impl.LateFn12 = (function (fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,__meta,__extmap,__hash){
this.fn = fn;
this.arg0 = arg0;
this.arg1 = arg1;
this.arg2 = arg2;
this.arg3 = arg3;
this.arg4 = arg4;
this.arg5 = arg5;
this.arg6 = arg6;
this.arg7 = arg7;
this.arg8 = arg8;
this.arg9 = arg9;
this.arg10 = arg10;
this.arg11 = arg11;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(com.rpl.specter.impl.LateFn12.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(com.rpl.specter.impl.LateFn12.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k63433,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__63441 = k63433;
var G__63441__$1 = (((G__63441 instanceof cljs.core.Keyword))?G__63441.fqn:null);
switch (G__63441__$1) {
case "fn":
return self__.fn;

break;
case "arg0":
return self__.arg0;

break;
case "arg1":
return self__.arg1;

break;
case "arg2":
return self__.arg2;

break;
case "arg3":
return self__.arg3;

break;
case "arg4":
return self__.arg4;

break;
case "arg5":
return self__.arg5;

break;
case "arg6":
return self__.arg6;

break;
case "arg7":
return self__.arg7;

break;
case "arg8":
return self__.arg8;

break;
case "arg9":
return self__.arg9;

break;
case "arg10":
return self__.arg10;

break;
case "arg11":
return self__.arg11;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k63433,else__4383__auto__);

}
}));

(com.rpl.specter.impl.LateFn12.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__63443){
var vec__63444 = p__63443;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63444,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63444,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(com.rpl.specter.impl.LateFn12.prototype.com$rpl$specter$impl$LateResolve$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.impl.LateFn12.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__59310__auto__,dynamic_params62627){
var self__ = this;
var this__59310__auto____$1 = this;
var G__63448 = com.rpl.specter.impl.late_resolve(self__.arg0,dynamic_params62627);
var G__63449 = com.rpl.specter.impl.late_resolve(self__.arg1,dynamic_params62627);
var G__63450 = com.rpl.specter.impl.late_resolve(self__.arg2,dynamic_params62627);
var G__63451 = com.rpl.specter.impl.late_resolve(self__.arg3,dynamic_params62627);
var G__63452 = com.rpl.specter.impl.late_resolve(self__.arg4,dynamic_params62627);
var G__63453 = com.rpl.specter.impl.late_resolve(self__.arg5,dynamic_params62627);
var G__63454 = com.rpl.specter.impl.late_resolve(self__.arg6,dynamic_params62627);
var G__63455 = com.rpl.specter.impl.late_resolve(self__.arg7,dynamic_params62627);
var G__63456 = com.rpl.specter.impl.late_resolve(self__.arg8,dynamic_params62627);
var G__63457 = com.rpl.specter.impl.late_resolve(self__.arg9,dynamic_params62627);
var G__63458 = com.rpl.specter.impl.late_resolve(self__.arg10,dynamic_params62627);
var G__63459 = com.rpl.specter.impl.late_resolve(self__.arg11,dynamic_params62627);
var fexpr__63447 = com.rpl.specter.impl.late_resolve(self__.fn,dynamic_params62627);
return (fexpr__63447.cljs$core$IFn$_invoke$arity$12 ? fexpr__63447.cljs$core$IFn$_invoke$arity$12(G__63448,G__63449,G__63450,G__63451,G__63452,G__63453,G__63454,G__63455,G__63456,G__63457,G__63458,G__63459) : fexpr__63447.call(null,G__63448,G__63449,G__63450,G__63451,G__63452,G__63453,G__63454,G__63455,G__63456,G__63457,G__63458,G__63459));
}));

(com.rpl.specter.impl.LateFn12.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#com.rpl.specter.impl.LateFn12{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg7","arg7",932157509),self__.arg7],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg8","arg8",123916218),self__.arg8],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg9","arg9",-95117905),self__.arg9],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg10","arg10",-1230917517),self__.arg10],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg11","arg11",-379524070),self__.arg11],null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn12.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__63432){
var self__ = this;
var G__63432__$1 = this;
return (new cljs.core.RecordIter((0),G__63432__$1,13,new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509),new cljs.core.Keyword(null,"arg8","arg8",123916218),new cljs.core.Keyword(null,"arg9","arg9",-95117905),new cljs.core.Keyword(null,"arg10","arg10",-1230917517),new cljs.core.Keyword(null,"arg11","arg11",-379524070)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(com.rpl.specter.impl.LateFn12.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(com.rpl.specter.impl.LateFn12.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn12(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.__meta,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn12.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (13 + cljs.core.count(self__.__extmap));
}));

(com.rpl.specter.impl.LateFn12.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (1789372539 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(com.rpl.specter.impl.LateFn12.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this63434,other63435){
var self__ = this;
var this63434__$1 = this;
return (((!((other63435 == null)))) && ((this63434__$1.constructor === other63435.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63434__$1.fn,other63435.fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63434__$1.arg0,other63435.arg0)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63434__$1.arg1,other63435.arg1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63434__$1.arg2,other63435.arg2)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63434__$1.arg3,other63435.arg3)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63434__$1.arg4,other63435.arg4)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63434__$1.arg5,other63435.arg5)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63434__$1.arg6,other63435.arg6)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63434__$1.arg7,other63435.arg7)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63434__$1.arg8,other63435.arg8)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63434__$1.arg9,other63435.arg9)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63434__$1.arg10,other63435.arg10)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63434__$1.arg11,other63435.arg11)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63434__$1.__extmap,other63435.__extmap)));
}));

(com.rpl.specter.impl.LateFn12.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, [new cljs.core.Keyword(null,"arg3","arg3",-1486822496),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"arg7","arg7",932157509),null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),null,new cljs.core.Keyword(null,"arg6","arg6",-2052656438),null,new cljs.core.Keyword(null,"arg9","arg9",-95117905),null,new cljs.core.Keyword(null,"arg10","arg10",-1230917517),null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),null,new cljs.core.Keyword(null,"arg5","arg5",-1648794215),null,new cljs.core.Keyword(null,"arg11","arg11",-379524070),null,new cljs.core.Keyword(null,"arg8","arg8",123916218),null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),null,new cljs.core.Keyword(null,"arg1","arg1",951899358),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new com.rpl.specter.impl.LateFn12(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(com.rpl.specter.impl.LateFn12.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__63432){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__63482 = cljs.core.keyword_identical_QMARK_;
var expr__63483 = k__4388__auto__;
if(cljs.core.truth_((pred__63482.cljs$core$IFn$_invoke$arity$2 ? pred__63482.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__63483) : pred__63482.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__63483)))){
return (new com.rpl.specter.impl.LateFn12(G__63432,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__63482.cljs$core$IFn$_invoke$arity$2 ? pred__63482.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg0","arg0",1629842355),expr__63483) : pred__63482.call(null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),expr__63483)))){
return (new com.rpl.specter.impl.LateFn12(self__.fn,G__63432,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__63482.cljs$core$IFn$_invoke$arity$2 ? pred__63482.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg1","arg1",951899358),expr__63483) : pred__63482.call(null,new cljs.core.Keyword(null,"arg1","arg1",951899358),expr__63483)))){
return (new com.rpl.specter.impl.LateFn12(self__.fn,self__.arg0,G__63432,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__63482.cljs$core$IFn$_invoke$arity$2 ? pred__63482.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg2","arg2",1729550917),expr__63483) : pred__63482.call(null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),expr__63483)))){
return (new com.rpl.specter.impl.LateFn12(self__.fn,self__.arg0,self__.arg1,G__63432,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__63482.cljs$core$IFn$_invoke$arity$2 ? pred__63482.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg3","arg3",-1486822496),expr__63483) : pred__63482.call(null,new cljs.core.Keyword(null,"arg3","arg3",-1486822496),expr__63483)))){
return (new com.rpl.specter.impl.LateFn12(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__63432,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__63482.cljs$core$IFn$_invoke$arity$2 ? pred__63482.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg4","arg4",-831640004),expr__63483) : pred__63482.call(null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),expr__63483)))){
return (new com.rpl.specter.impl.LateFn12(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,G__63432,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__63482.cljs$core$IFn$_invoke$arity$2 ? pred__63482.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg5","arg5",-1648794215),expr__63483) : pred__63482.call(null,new cljs.core.Keyword(null,"arg5","arg5",-1648794215),expr__63483)))){
return (new com.rpl.specter.impl.LateFn12(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,G__63432,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__63482.cljs$core$IFn$_invoke$arity$2 ? pred__63482.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg6","arg6",-2052656438),expr__63483) : pred__63482.call(null,new cljs.core.Keyword(null,"arg6","arg6",-2052656438),expr__63483)))){
return (new com.rpl.specter.impl.LateFn12(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,G__63432,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__63482.cljs$core$IFn$_invoke$arity$2 ? pred__63482.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg7","arg7",932157509),expr__63483) : pred__63482.call(null,new cljs.core.Keyword(null,"arg7","arg7",932157509),expr__63483)))){
return (new com.rpl.specter.impl.LateFn12(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,G__63432,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__63482.cljs$core$IFn$_invoke$arity$2 ? pred__63482.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg8","arg8",123916218),expr__63483) : pred__63482.call(null,new cljs.core.Keyword(null,"arg8","arg8",123916218),expr__63483)))){
return (new com.rpl.specter.impl.LateFn12(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,G__63432,self__.arg9,self__.arg10,self__.arg11,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__63482.cljs$core$IFn$_invoke$arity$2 ? pred__63482.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg9","arg9",-95117905),expr__63483) : pred__63482.call(null,new cljs.core.Keyword(null,"arg9","arg9",-95117905),expr__63483)))){
return (new com.rpl.specter.impl.LateFn12(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,G__63432,self__.arg10,self__.arg11,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__63482.cljs$core$IFn$_invoke$arity$2 ? pred__63482.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg10","arg10",-1230917517),expr__63483) : pred__63482.call(null,new cljs.core.Keyword(null,"arg10","arg10",-1230917517),expr__63483)))){
return (new com.rpl.specter.impl.LateFn12(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,G__63432,self__.arg11,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__63482.cljs$core$IFn$_invoke$arity$2 ? pred__63482.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg11","arg11",-379524070),expr__63483) : pred__63482.call(null,new cljs.core.Keyword(null,"arg11","arg11",-379524070),expr__63483)))){
return (new com.rpl.specter.impl.LateFn12(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,G__63432,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn12(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__63432),null));
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
}));

(com.rpl.specter.impl.LateFn12.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg7","arg7",932157509),self__.arg7,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg8","arg8",123916218),self__.arg8,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg9","arg9",-95117905),self__.arg9,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg10","arg10",-1230917517),self__.arg10,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg11","arg11",-379524070),self__.arg11,null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn12.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__63432){
var self__ = this;
var this__4379__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn12(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,G__63432,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn12.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(com.rpl.specter.impl.LateFn12.getBasis = (function (){
return new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null),new cljs.core.Symbol(null,"arg2","arg2",-924884852,null),new cljs.core.Symbol(null,"arg3","arg3",153709031,null),new cljs.core.Symbol(null,"arg4","arg4",808891523,null),new cljs.core.Symbol(null,"arg5","arg5",-8262688,null),new cljs.core.Symbol(null,"arg6","arg6",-412124911,null),new cljs.core.Symbol(null,"arg7","arg7",-1722278260,null),new cljs.core.Symbol(null,"arg8","arg8",1764447745,null),new cljs.core.Symbol(null,"arg9","arg9",1545413622,null),new cljs.core.Symbol(null,"arg10","arg10",409614010,null),new cljs.core.Symbol(null,"arg11","arg11",1261007457,null)], null);
}));

(com.rpl.specter.impl.LateFn12.cljs$lang$type = true);

(com.rpl.specter.impl.LateFn12.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/LateFn12",null,(1),null));
}));

(com.rpl.specter.impl.LateFn12.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"com.rpl.specter.impl/LateFn12");
}));

/**
 * Positional factory function for com.rpl.specter.impl/LateFn12.
 */
com.rpl.specter.impl.__GT_LateFn12 = (function com$rpl$specter$impl$__GT_LateFn12(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11){
return (new com.rpl.specter.impl.LateFn12(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,null,null,null));
});

/**
 * Factory function for com.rpl.specter.impl/LateFn12, taking a map of keywords to field values.
 */
com.rpl.specter.impl.map__GT_LateFn12 = (function com$rpl$specter$impl$map__GT_LateFn12(G__63437){
var extmap__4419__auto__ = (function (){var G__63497 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__63437,new cljs.core.Keyword(null,"fn","fn",-1175266204),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509),new cljs.core.Keyword(null,"arg8","arg8",123916218),new cljs.core.Keyword(null,"arg9","arg9",-95117905),new cljs.core.Keyword(null,"arg10","arg10",-1230917517),new cljs.core.Keyword(null,"arg11","arg11",-379524070)], 0));
if(cljs.core.record_QMARK_(G__63437)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__63497);
} else {
return G__63497;
}
})();
return (new com.rpl.specter.impl.LateFn12(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__63437),new cljs.core.Keyword(null,"arg0","arg0",1629842355).cljs$core$IFn$_invoke$arity$1(G__63437),new cljs.core.Keyword(null,"arg1","arg1",951899358).cljs$core$IFn$_invoke$arity$1(G__63437),new cljs.core.Keyword(null,"arg2","arg2",1729550917).cljs$core$IFn$_invoke$arity$1(G__63437),new cljs.core.Keyword(null,"arg3","arg3",-1486822496).cljs$core$IFn$_invoke$arity$1(G__63437),new cljs.core.Keyword(null,"arg4","arg4",-831640004).cljs$core$IFn$_invoke$arity$1(G__63437),new cljs.core.Keyword(null,"arg5","arg5",-1648794215).cljs$core$IFn$_invoke$arity$1(G__63437),new cljs.core.Keyword(null,"arg6","arg6",-2052656438).cljs$core$IFn$_invoke$arity$1(G__63437),new cljs.core.Keyword(null,"arg7","arg7",932157509).cljs$core$IFn$_invoke$arity$1(G__63437),new cljs.core.Keyword(null,"arg8","arg8",123916218).cljs$core$IFn$_invoke$arity$1(G__63437),new cljs.core.Keyword(null,"arg9","arg9",-95117905).cljs$core$IFn$_invoke$arity$1(G__63437),new cljs.core.Keyword(null,"arg10","arg10",-1230917517).cljs$core$IFn$_invoke$arity$1(G__63437),new cljs.core.Keyword(null,"arg11","arg11",-379524070).cljs$core$IFn$_invoke$arity$1(G__63437),null,cljs.core.not_empty(extmap__4419__auto__),null));
});



/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {com.rpl.specter.impl.LateResolve}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
com.rpl.specter.impl.LateFn13 = (function (fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,__meta,__extmap,__hash){
this.fn = fn;
this.arg0 = arg0;
this.arg1 = arg1;
this.arg2 = arg2;
this.arg3 = arg3;
this.arg4 = arg4;
this.arg5 = arg5;
this.arg6 = arg6;
this.arg7 = arg7;
this.arg8 = arg8;
this.arg9 = arg9;
this.arg10 = arg10;
this.arg11 = arg11;
this.arg12 = arg12;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(com.rpl.specter.impl.LateFn13.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(com.rpl.specter.impl.LateFn13.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k63499,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__63518 = k63499;
var G__63518__$1 = (((G__63518 instanceof cljs.core.Keyword))?G__63518.fqn:null);
switch (G__63518__$1) {
case "fn":
return self__.fn;

break;
case "arg0":
return self__.arg0;

break;
case "arg1":
return self__.arg1;

break;
case "arg2":
return self__.arg2;

break;
case "arg3":
return self__.arg3;

break;
case "arg4":
return self__.arg4;

break;
case "arg5":
return self__.arg5;

break;
case "arg6":
return self__.arg6;

break;
case "arg7":
return self__.arg7;

break;
case "arg8":
return self__.arg8;

break;
case "arg9":
return self__.arg9;

break;
case "arg10":
return self__.arg10;

break;
case "arg11":
return self__.arg11;

break;
case "arg12":
return self__.arg12;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k63499,else__4383__auto__);

}
}));

(com.rpl.specter.impl.LateFn13.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__63520){
var vec__63521 = p__63520;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63521,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63521,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(com.rpl.specter.impl.LateFn13.prototype.com$rpl$specter$impl$LateResolve$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.impl.LateFn13.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__59310__auto__,dynamic_params62628){
var self__ = this;
var this__59310__auto____$1 = this;
var G__63526 = com.rpl.specter.impl.late_resolve(self__.arg0,dynamic_params62628);
var G__63527 = com.rpl.specter.impl.late_resolve(self__.arg1,dynamic_params62628);
var G__63528 = com.rpl.specter.impl.late_resolve(self__.arg2,dynamic_params62628);
var G__63529 = com.rpl.specter.impl.late_resolve(self__.arg3,dynamic_params62628);
var G__63530 = com.rpl.specter.impl.late_resolve(self__.arg4,dynamic_params62628);
var G__63531 = com.rpl.specter.impl.late_resolve(self__.arg5,dynamic_params62628);
var G__63532 = com.rpl.specter.impl.late_resolve(self__.arg6,dynamic_params62628);
var G__63533 = com.rpl.specter.impl.late_resolve(self__.arg7,dynamic_params62628);
var G__63534 = com.rpl.specter.impl.late_resolve(self__.arg8,dynamic_params62628);
var G__63535 = com.rpl.specter.impl.late_resolve(self__.arg9,dynamic_params62628);
var G__63536 = com.rpl.specter.impl.late_resolve(self__.arg10,dynamic_params62628);
var G__63537 = com.rpl.specter.impl.late_resolve(self__.arg11,dynamic_params62628);
var G__63538 = com.rpl.specter.impl.late_resolve(self__.arg12,dynamic_params62628);
var fexpr__63525 = com.rpl.specter.impl.late_resolve(self__.fn,dynamic_params62628);
return (fexpr__63525.cljs$core$IFn$_invoke$arity$13 ? fexpr__63525.cljs$core$IFn$_invoke$arity$13(G__63526,G__63527,G__63528,G__63529,G__63530,G__63531,G__63532,G__63533,G__63534,G__63535,G__63536,G__63537,G__63538) : fexpr__63525.call(null,G__63526,G__63527,G__63528,G__63529,G__63530,G__63531,G__63532,G__63533,G__63534,G__63535,G__63536,G__63537,G__63538));
}));

(com.rpl.specter.impl.LateFn13.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#com.rpl.specter.impl.LateFn13{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg7","arg7",932157509),self__.arg7],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg8","arg8",123916218),self__.arg8],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg9","arg9",-95117905),self__.arg9],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg10","arg10",-1230917517),self__.arg10],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg11","arg11",-379524070),self__.arg11],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg12","arg12",290681436),self__.arg12],null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn13.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__63498){
var self__ = this;
var G__63498__$1 = this;
return (new cljs.core.RecordIter((0),G__63498__$1,14,new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509),new cljs.core.Keyword(null,"arg8","arg8",123916218),new cljs.core.Keyword(null,"arg9","arg9",-95117905),new cljs.core.Keyword(null,"arg10","arg10",-1230917517),new cljs.core.Keyword(null,"arg11","arg11",-379524070),new cljs.core.Keyword(null,"arg12","arg12",290681436)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(com.rpl.specter.impl.LateFn13.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(com.rpl.specter.impl.LateFn13.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn13(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.__meta,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn13.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (14 + cljs.core.count(self__.__extmap));
}));

(com.rpl.specter.impl.LateFn13.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (1059049277 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(com.rpl.specter.impl.LateFn13.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this63500,other63501){
var self__ = this;
var this63500__$1 = this;
return (((!((other63501 == null)))) && ((this63500__$1.constructor === other63501.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63500__$1.fn,other63501.fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63500__$1.arg0,other63501.arg0)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63500__$1.arg1,other63501.arg1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63500__$1.arg2,other63501.arg2)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63500__$1.arg3,other63501.arg3)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63500__$1.arg4,other63501.arg4)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63500__$1.arg5,other63501.arg5)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63500__$1.arg6,other63501.arg6)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63500__$1.arg7,other63501.arg7)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63500__$1.arg8,other63501.arg8)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63500__$1.arg9,other63501.arg9)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63500__$1.arg10,other63501.arg10)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63500__$1.arg11,other63501.arg11)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63500__$1.arg12,other63501.arg12)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63500__$1.__extmap,other63501.__extmap)));
}));

(com.rpl.specter.impl.LateFn13.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 14, [new cljs.core.Keyword(null,"arg3","arg3",-1486822496),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"arg7","arg7",932157509),null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),null,new cljs.core.Keyword(null,"arg6","arg6",-2052656438),null,new cljs.core.Keyword(null,"arg9","arg9",-95117905),null,new cljs.core.Keyword(null,"arg10","arg10",-1230917517),null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),null,new cljs.core.Keyword(null,"arg5","arg5",-1648794215),null,new cljs.core.Keyword(null,"arg11","arg11",-379524070),null,new cljs.core.Keyword(null,"arg8","arg8",123916218),null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),null,new cljs.core.Keyword(null,"arg12","arg12",290681436),null,new cljs.core.Keyword(null,"arg1","arg1",951899358),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new com.rpl.specter.impl.LateFn13(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(com.rpl.specter.impl.LateFn13.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__63498){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__63562 = cljs.core.keyword_identical_QMARK_;
var expr__63563 = k__4388__auto__;
if(cljs.core.truth_((pred__63562.cljs$core$IFn$_invoke$arity$2 ? pred__63562.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__63563) : pred__63562.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__63563)))){
return (new com.rpl.specter.impl.LateFn13(G__63498,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__63562.cljs$core$IFn$_invoke$arity$2 ? pred__63562.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg0","arg0",1629842355),expr__63563) : pred__63562.call(null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),expr__63563)))){
return (new com.rpl.specter.impl.LateFn13(self__.fn,G__63498,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__63562.cljs$core$IFn$_invoke$arity$2 ? pred__63562.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg1","arg1",951899358),expr__63563) : pred__63562.call(null,new cljs.core.Keyword(null,"arg1","arg1",951899358),expr__63563)))){
return (new com.rpl.specter.impl.LateFn13(self__.fn,self__.arg0,G__63498,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__63562.cljs$core$IFn$_invoke$arity$2 ? pred__63562.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg2","arg2",1729550917),expr__63563) : pred__63562.call(null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),expr__63563)))){
return (new com.rpl.specter.impl.LateFn13(self__.fn,self__.arg0,self__.arg1,G__63498,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__63562.cljs$core$IFn$_invoke$arity$2 ? pred__63562.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg3","arg3",-1486822496),expr__63563) : pred__63562.call(null,new cljs.core.Keyword(null,"arg3","arg3",-1486822496),expr__63563)))){
return (new com.rpl.specter.impl.LateFn13(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__63498,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__63562.cljs$core$IFn$_invoke$arity$2 ? pred__63562.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg4","arg4",-831640004),expr__63563) : pred__63562.call(null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),expr__63563)))){
return (new com.rpl.specter.impl.LateFn13(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,G__63498,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__63562.cljs$core$IFn$_invoke$arity$2 ? pred__63562.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg5","arg5",-1648794215),expr__63563) : pred__63562.call(null,new cljs.core.Keyword(null,"arg5","arg5",-1648794215),expr__63563)))){
return (new com.rpl.specter.impl.LateFn13(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,G__63498,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__63562.cljs$core$IFn$_invoke$arity$2 ? pred__63562.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg6","arg6",-2052656438),expr__63563) : pred__63562.call(null,new cljs.core.Keyword(null,"arg6","arg6",-2052656438),expr__63563)))){
return (new com.rpl.specter.impl.LateFn13(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,G__63498,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__63562.cljs$core$IFn$_invoke$arity$2 ? pred__63562.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg7","arg7",932157509),expr__63563) : pred__63562.call(null,new cljs.core.Keyword(null,"arg7","arg7",932157509),expr__63563)))){
return (new com.rpl.specter.impl.LateFn13(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,G__63498,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__63562.cljs$core$IFn$_invoke$arity$2 ? pred__63562.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg8","arg8",123916218),expr__63563) : pred__63562.call(null,new cljs.core.Keyword(null,"arg8","arg8",123916218),expr__63563)))){
return (new com.rpl.specter.impl.LateFn13(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,G__63498,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__63562.cljs$core$IFn$_invoke$arity$2 ? pred__63562.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg9","arg9",-95117905),expr__63563) : pred__63562.call(null,new cljs.core.Keyword(null,"arg9","arg9",-95117905),expr__63563)))){
return (new com.rpl.specter.impl.LateFn13(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,G__63498,self__.arg10,self__.arg11,self__.arg12,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__63562.cljs$core$IFn$_invoke$arity$2 ? pred__63562.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg10","arg10",-1230917517),expr__63563) : pred__63562.call(null,new cljs.core.Keyword(null,"arg10","arg10",-1230917517),expr__63563)))){
return (new com.rpl.specter.impl.LateFn13(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,G__63498,self__.arg11,self__.arg12,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__63562.cljs$core$IFn$_invoke$arity$2 ? pred__63562.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg11","arg11",-379524070),expr__63563) : pred__63562.call(null,new cljs.core.Keyword(null,"arg11","arg11",-379524070),expr__63563)))){
return (new com.rpl.specter.impl.LateFn13(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,G__63498,self__.arg12,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__63562.cljs$core$IFn$_invoke$arity$2 ? pred__63562.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg12","arg12",290681436),expr__63563) : pred__63562.call(null,new cljs.core.Keyword(null,"arg12","arg12",290681436),expr__63563)))){
return (new com.rpl.specter.impl.LateFn13(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,G__63498,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn13(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__63498),null));
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
}));

(com.rpl.specter.impl.LateFn13.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg7","arg7",932157509),self__.arg7,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg8","arg8",123916218),self__.arg8,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg9","arg9",-95117905),self__.arg9,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg10","arg10",-1230917517),self__.arg10,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg11","arg11",-379524070),self__.arg11,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg12","arg12",290681436),self__.arg12,null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn13.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__63498){
var self__ = this;
var this__4379__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn13(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,G__63498,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn13.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(com.rpl.specter.impl.LateFn13.getBasis = (function (){
return new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null),new cljs.core.Symbol(null,"arg2","arg2",-924884852,null),new cljs.core.Symbol(null,"arg3","arg3",153709031,null),new cljs.core.Symbol(null,"arg4","arg4",808891523,null),new cljs.core.Symbol(null,"arg5","arg5",-8262688,null),new cljs.core.Symbol(null,"arg6","arg6",-412124911,null),new cljs.core.Symbol(null,"arg7","arg7",-1722278260,null),new cljs.core.Symbol(null,"arg8","arg8",1764447745,null),new cljs.core.Symbol(null,"arg9","arg9",1545413622,null),new cljs.core.Symbol(null,"arg10","arg10",409614010,null),new cljs.core.Symbol(null,"arg11","arg11",1261007457,null),new cljs.core.Symbol(null,"arg12","arg12",1931212963,null)], null);
}));

(com.rpl.specter.impl.LateFn13.cljs$lang$type = true);

(com.rpl.specter.impl.LateFn13.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/LateFn13",null,(1),null));
}));

(com.rpl.specter.impl.LateFn13.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"com.rpl.specter.impl/LateFn13");
}));

/**
 * Positional factory function for com.rpl.specter.impl/LateFn13.
 */
com.rpl.specter.impl.__GT_LateFn13 = (function com$rpl$specter$impl$__GT_LateFn13(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12){
return (new com.rpl.specter.impl.LateFn13(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,null,null,null));
});

/**
 * Factory function for com.rpl.specter.impl/LateFn13, taking a map of keywords to field values.
 */
com.rpl.specter.impl.map__GT_LateFn13 = (function com$rpl$specter$impl$map__GT_LateFn13(G__63507){
var extmap__4419__auto__ = (function (){var G__63577 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__63507,new cljs.core.Keyword(null,"fn","fn",-1175266204),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509),new cljs.core.Keyword(null,"arg8","arg8",123916218),new cljs.core.Keyword(null,"arg9","arg9",-95117905),new cljs.core.Keyword(null,"arg10","arg10",-1230917517),new cljs.core.Keyword(null,"arg11","arg11",-379524070),new cljs.core.Keyword(null,"arg12","arg12",290681436)], 0));
if(cljs.core.record_QMARK_(G__63507)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__63577);
} else {
return G__63577;
}
})();
return (new com.rpl.specter.impl.LateFn13(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__63507),new cljs.core.Keyword(null,"arg0","arg0",1629842355).cljs$core$IFn$_invoke$arity$1(G__63507),new cljs.core.Keyword(null,"arg1","arg1",951899358).cljs$core$IFn$_invoke$arity$1(G__63507),new cljs.core.Keyword(null,"arg2","arg2",1729550917).cljs$core$IFn$_invoke$arity$1(G__63507),new cljs.core.Keyword(null,"arg3","arg3",-1486822496).cljs$core$IFn$_invoke$arity$1(G__63507),new cljs.core.Keyword(null,"arg4","arg4",-831640004).cljs$core$IFn$_invoke$arity$1(G__63507),new cljs.core.Keyword(null,"arg5","arg5",-1648794215).cljs$core$IFn$_invoke$arity$1(G__63507),new cljs.core.Keyword(null,"arg6","arg6",-2052656438).cljs$core$IFn$_invoke$arity$1(G__63507),new cljs.core.Keyword(null,"arg7","arg7",932157509).cljs$core$IFn$_invoke$arity$1(G__63507),new cljs.core.Keyword(null,"arg8","arg8",123916218).cljs$core$IFn$_invoke$arity$1(G__63507),new cljs.core.Keyword(null,"arg9","arg9",-95117905).cljs$core$IFn$_invoke$arity$1(G__63507),new cljs.core.Keyword(null,"arg10","arg10",-1230917517).cljs$core$IFn$_invoke$arity$1(G__63507),new cljs.core.Keyword(null,"arg11","arg11",-379524070).cljs$core$IFn$_invoke$arity$1(G__63507),new cljs.core.Keyword(null,"arg12","arg12",290681436).cljs$core$IFn$_invoke$arity$1(G__63507),null,cljs.core.not_empty(extmap__4419__auto__),null));
});



/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {com.rpl.specter.impl.LateResolve}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
com.rpl.specter.impl.LateFn14 = (function (fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,__meta,__extmap,__hash){
this.fn = fn;
this.arg0 = arg0;
this.arg1 = arg1;
this.arg2 = arg2;
this.arg3 = arg3;
this.arg4 = arg4;
this.arg5 = arg5;
this.arg6 = arg6;
this.arg7 = arg7;
this.arg8 = arg8;
this.arg9 = arg9;
this.arg10 = arg10;
this.arg11 = arg11;
this.arg12 = arg12;
this.arg13 = arg13;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(com.rpl.specter.impl.LateFn14.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(com.rpl.specter.impl.LateFn14.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k63580,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__63588 = k63580;
var G__63588__$1 = (((G__63588 instanceof cljs.core.Keyword))?G__63588.fqn:null);
switch (G__63588__$1) {
case "fn":
return self__.fn;

break;
case "arg0":
return self__.arg0;

break;
case "arg1":
return self__.arg1;

break;
case "arg2":
return self__.arg2;

break;
case "arg3":
return self__.arg3;

break;
case "arg4":
return self__.arg4;

break;
case "arg5":
return self__.arg5;

break;
case "arg6":
return self__.arg6;

break;
case "arg7":
return self__.arg7;

break;
case "arg8":
return self__.arg8;

break;
case "arg9":
return self__.arg9;

break;
case "arg10":
return self__.arg10;

break;
case "arg11":
return self__.arg11;

break;
case "arg12":
return self__.arg12;

break;
case "arg13":
return self__.arg13;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k63580,else__4383__auto__);

}
}));

(com.rpl.specter.impl.LateFn14.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__63593){
var vec__63594 = p__63593;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63594,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63594,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(com.rpl.specter.impl.LateFn14.prototype.com$rpl$specter$impl$LateResolve$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.impl.LateFn14.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__59310__auto__,dynamic_params62629){
var self__ = this;
var this__59310__auto____$1 = this;
var G__63598 = com.rpl.specter.impl.late_resolve(self__.arg0,dynamic_params62629);
var G__63599 = com.rpl.specter.impl.late_resolve(self__.arg1,dynamic_params62629);
var G__63600 = com.rpl.specter.impl.late_resolve(self__.arg2,dynamic_params62629);
var G__63601 = com.rpl.specter.impl.late_resolve(self__.arg3,dynamic_params62629);
var G__63602 = com.rpl.specter.impl.late_resolve(self__.arg4,dynamic_params62629);
var G__63603 = com.rpl.specter.impl.late_resolve(self__.arg5,dynamic_params62629);
var G__63604 = com.rpl.specter.impl.late_resolve(self__.arg6,dynamic_params62629);
var G__63605 = com.rpl.specter.impl.late_resolve(self__.arg7,dynamic_params62629);
var G__63606 = com.rpl.specter.impl.late_resolve(self__.arg8,dynamic_params62629);
var G__63607 = com.rpl.specter.impl.late_resolve(self__.arg9,dynamic_params62629);
var G__63608 = com.rpl.specter.impl.late_resolve(self__.arg10,dynamic_params62629);
var G__63609 = com.rpl.specter.impl.late_resolve(self__.arg11,dynamic_params62629);
var G__63610 = com.rpl.specter.impl.late_resolve(self__.arg12,dynamic_params62629);
var G__63611 = com.rpl.specter.impl.late_resolve(self__.arg13,dynamic_params62629);
var fexpr__63597 = com.rpl.specter.impl.late_resolve(self__.fn,dynamic_params62629);
return (fexpr__63597.cljs$core$IFn$_invoke$arity$14 ? fexpr__63597.cljs$core$IFn$_invoke$arity$14(G__63598,G__63599,G__63600,G__63601,G__63602,G__63603,G__63604,G__63605,G__63606,G__63607,G__63608,G__63609,G__63610,G__63611) : fexpr__63597.call(null,G__63598,G__63599,G__63600,G__63601,G__63602,G__63603,G__63604,G__63605,G__63606,G__63607,G__63608,G__63609,G__63610,G__63611));
}));

(com.rpl.specter.impl.LateFn14.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#com.rpl.specter.impl.LateFn14{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg7","arg7",932157509),self__.arg7],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg8","arg8",123916218),self__.arg8],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg9","arg9",-95117905),self__.arg9],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg10","arg10",-1230917517),self__.arg10],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg11","arg11",-379524070),self__.arg11],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg12","arg12",290681436),self__.arg12],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg13","arg13",1606275392),self__.arg13],null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn14.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__63579){
var self__ = this;
var G__63579__$1 = this;
return (new cljs.core.RecordIter((0),G__63579__$1,15,new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509),new cljs.core.Keyword(null,"arg8","arg8",123916218),new cljs.core.Keyword(null,"arg9","arg9",-95117905),new cljs.core.Keyword(null,"arg10","arg10",-1230917517),new cljs.core.Keyword(null,"arg11","arg11",-379524070),new cljs.core.Keyword(null,"arg12","arg12",290681436),new cljs.core.Keyword(null,"arg13","arg13",1606275392)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(com.rpl.specter.impl.LateFn14.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(com.rpl.specter.impl.LateFn14.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.__meta,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn14.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (15 + cljs.core.count(self__.__extmap));
}));

(com.rpl.specter.impl.LateFn14.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (448885285 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(com.rpl.specter.impl.LateFn14.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this63581,other63582){
var self__ = this;
var this63581__$1 = this;
return (((!((other63582 == null)))) && ((this63581__$1.constructor === other63582.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63581__$1.fn,other63582.fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63581__$1.arg0,other63582.arg0)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63581__$1.arg1,other63582.arg1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63581__$1.arg2,other63582.arg2)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63581__$1.arg3,other63582.arg3)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63581__$1.arg4,other63582.arg4)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63581__$1.arg5,other63582.arg5)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63581__$1.arg6,other63582.arg6)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63581__$1.arg7,other63582.arg7)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63581__$1.arg8,other63582.arg8)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63581__$1.arg9,other63582.arg9)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63581__$1.arg10,other63582.arg10)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63581__$1.arg11,other63582.arg11)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63581__$1.arg12,other63582.arg12)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63581__$1.arg13,other63582.arg13)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63581__$1.__extmap,other63582.__extmap)));
}));

(com.rpl.specter.impl.LateFn14.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 15, [new cljs.core.Keyword(null,"arg13","arg13",1606275392),null,new cljs.core.Keyword(null,"arg3","arg3",-1486822496),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"arg7","arg7",932157509),null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),null,new cljs.core.Keyword(null,"arg6","arg6",-2052656438),null,new cljs.core.Keyword(null,"arg9","arg9",-95117905),null,new cljs.core.Keyword(null,"arg10","arg10",-1230917517),null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),null,new cljs.core.Keyword(null,"arg5","arg5",-1648794215),null,new cljs.core.Keyword(null,"arg11","arg11",-379524070),null,new cljs.core.Keyword(null,"arg8","arg8",123916218),null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),null,new cljs.core.Keyword(null,"arg12","arg12",290681436),null,new cljs.core.Keyword(null,"arg1","arg1",951899358),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(com.rpl.specter.impl.LateFn14.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__63579){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__63634 = cljs.core.keyword_identical_QMARK_;
var expr__63635 = k__4388__auto__;
if(cljs.core.truth_((pred__63634.cljs$core$IFn$_invoke$arity$2 ? pred__63634.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__63635) : pred__63634.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__63635)))){
return (new com.rpl.specter.impl.LateFn14(G__63579,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__63634.cljs$core$IFn$_invoke$arity$2 ? pred__63634.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg0","arg0",1629842355),expr__63635) : pred__63634.call(null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),expr__63635)))){
return (new com.rpl.specter.impl.LateFn14(self__.fn,G__63579,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__63634.cljs$core$IFn$_invoke$arity$2 ? pred__63634.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg1","arg1",951899358),expr__63635) : pred__63634.call(null,new cljs.core.Keyword(null,"arg1","arg1",951899358),expr__63635)))){
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,G__63579,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__63634.cljs$core$IFn$_invoke$arity$2 ? pred__63634.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg2","arg2",1729550917),expr__63635) : pred__63634.call(null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),expr__63635)))){
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,self__.arg1,G__63579,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__63634.cljs$core$IFn$_invoke$arity$2 ? pred__63634.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg3","arg3",-1486822496),expr__63635) : pred__63634.call(null,new cljs.core.Keyword(null,"arg3","arg3",-1486822496),expr__63635)))){
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__63579,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__63634.cljs$core$IFn$_invoke$arity$2 ? pred__63634.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg4","arg4",-831640004),expr__63635) : pred__63634.call(null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),expr__63635)))){
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,G__63579,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__63634.cljs$core$IFn$_invoke$arity$2 ? pred__63634.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg5","arg5",-1648794215),expr__63635) : pred__63634.call(null,new cljs.core.Keyword(null,"arg5","arg5",-1648794215),expr__63635)))){
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,G__63579,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__63634.cljs$core$IFn$_invoke$arity$2 ? pred__63634.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg6","arg6",-2052656438),expr__63635) : pred__63634.call(null,new cljs.core.Keyword(null,"arg6","arg6",-2052656438),expr__63635)))){
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,G__63579,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__63634.cljs$core$IFn$_invoke$arity$2 ? pred__63634.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg7","arg7",932157509),expr__63635) : pred__63634.call(null,new cljs.core.Keyword(null,"arg7","arg7",932157509),expr__63635)))){
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,G__63579,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__63634.cljs$core$IFn$_invoke$arity$2 ? pred__63634.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg8","arg8",123916218),expr__63635) : pred__63634.call(null,new cljs.core.Keyword(null,"arg8","arg8",123916218),expr__63635)))){
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,G__63579,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__63634.cljs$core$IFn$_invoke$arity$2 ? pred__63634.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg9","arg9",-95117905),expr__63635) : pred__63634.call(null,new cljs.core.Keyword(null,"arg9","arg9",-95117905),expr__63635)))){
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,G__63579,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__63634.cljs$core$IFn$_invoke$arity$2 ? pred__63634.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg10","arg10",-1230917517),expr__63635) : pred__63634.call(null,new cljs.core.Keyword(null,"arg10","arg10",-1230917517),expr__63635)))){
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,G__63579,self__.arg11,self__.arg12,self__.arg13,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__63634.cljs$core$IFn$_invoke$arity$2 ? pred__63634.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg11","arg11",-379524070),expr__63635) : pred__63634.call(null,new cljs.core.Keyword(null,"arg11","arg11",-379524070),expr__63635)))){
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,G__63579,self__.arg12,self__.arg13,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__63634.cljs$core$IFn$_invoke$arity$2 ? pred__63634.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg12","arg12",290681436),expr__63635) : pred__63634.call(null,new cljs.core.Keyword(null,"arg12","arg12",290681436),expr__63635)))){
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,G__63579,self__.arg13,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__63634.cljs$core$IFn$_invoke$arity$2 ? pred__63634.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg13","arg13",1606275392),expr__63635) : pred__63634.call(null,new cljs.core.Keyword(null,"arg13","arg13",1606275392),expr__63635)))){
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,G__63579,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__63579),null));
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
}));

(com.rpl.specter.impl.LateFn14.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg7","arg7",932157509),self__.arg7,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg8","arg8",123916218),self__.arg8,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg9","arg9",-95117905),self__.arg9,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg10","arg10",-1230917517),self__.arg10,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg11","arg11",-379524070),self__.arg11,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg12","arg12",290681436),self__.arg12,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg13","arg13",1606275392),self__.arg13,null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn14.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__63579){
var self__ = this;
var this__4379__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,G__63579,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn14.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(com.rpl.specter.impl.LateFn14.getBasis = (function (){
return new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null),new cljs.core.Symbol(null,"arg2","arg2",-924884852,null),new cljs.core.Symbol(null,"arg3","arg3",153709031,null),new cljs.core.Symbol(null,"arg4","arg4",808891523,null),new cljs.core.Symbol(null,"arg5","arg5",-8262688,null),new cljs.core.Symbol(null,"arg6","arg6",-412124911,null),new cljs.core.Symbol(null,"arg7","arg7",-1722278260,null),new cljs.core.Symbol(null,"arg8","arg8",1764447745,null),new cljs.core.Symbol(null,"arg9","arg9",1545413622,null),new cljs.core.Symbol(null,"arg10","arg10",409614010,null),new cljs.core.Symbol(null,"arg11","arg11",1261007457,null),new cljs.core.Symbol(null,"arg12","arg12",1931212963,null),new cljs.core.Symbol(null,"arg13","arg13",-1048160377,null)], null);
}));

(com.rpl.specter.impl.LateFn14.cljs$lang$type = true);

(com.rpl.specter.impl.LateFn14.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/LateFn14",null,(1),null));
}));

(com.rpl.specter.impl.LateFn14.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"com.rpl.specter.impl/LateFn14");
}));

/**
 * Positional factory function for com.rpl.specter.impl/LateFn14.
 */
com.rpl.specter.impl.__GT_LateFn14 = (function com$rpl$specter$impl$__GT_LateFn14(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13){
return (new com.rpl.specter.impl.LateFn14(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,null,null,null));
});

/**
 * Factory function for com.rpl.specter.impl/LateFn14, taking a map of keywords to field values.
 */
com.rpl.specter.impl.map__GT_LateFn14 = (function com$rpl$specter$impl$map__GT_LateFn14(G__63584){
var extmap__4419__auto__ = (function (){var G__63657 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__63584,new cljs.core.Keyword(null,"fn","fn",-1175266204),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509),new cljs.core.Keyword(null,"arg8","arg8",123916218),new cljs.core.Keyword(null,"arg9","arg9",-95117905),new cljs.core.Keyword(null,"arg10","arg10",-1230917517),new cljs.core.Keyword(null,"arg11","arg11",-379524070),new cljs.core.Keyword(null,"arg12","arg12",290681436),new cljs.core.Keyword(null,"arg13","arg13",1606275392)], 0));
if(cljs.core.record_QMARK_(G__63584)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__63657);
} else {
return G__63657;
}
})();
return (new com.rpl.specter.impl.LateFn14(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__63584),new cljs.core.Keyword(null,"arg0","arg0",1629842355).cljs$core$IFn$_invoke$arity$1(G__63584),new cljs.core.Keyword(null,"arg1","arg1",951899358).cljs$core$IFn$_invoke$arity$1(G__63584),new cljs.core.Keyword(null,"arg2","arg2",1729550917).cljs$core$IFn$_invoke$arity$1(G__63584),new cljs.core.Keyword(null,"arg3","arg3",-1486822496).cljs$core$IFn$_invoke$arity$1(G__63584),new cljs.core.Keyword(null,"arg4","arg4",-831640004).cljs$core$IFn$_invoke$arity$1(G__63584),new cljs.core.Keyword(null,"arg5","arg5",-1648794215).cljs$core$IFn$_invoke$arity$1(G__63584),new cljs.core.Keyword(null,"arg6","arg6",-2052656438).cljs$core$IFn$_invoke$arity$1(G__63584),new cljs.core.Keyword(null,"arg7","arg7",932157509).cljs$core$IFn$_invoke$arity$1(G__63584),new cljs.core.Keyword(null,"arg8","arg8",123916218).cljs$core$IFn$_invoke$arity$1(G__63584),new cljs.core.Keyword(null,"arg9","arg9",-95117905).cljs$core$IFn$_invoke$arity$1(G__63584),new cljs.core.Keyword(null,"arg10","arg10",-1230917517).cljs$core$IFn$_invoke$arity$1(G__63584),new cljs.core.Keyword(null,"arg11","arg11",-379524070).cljs$core$IFn$_invoke$arity$1(G__63584),new cljs.core.Keyword(null,"arg12","arg12",290681436).cljs$core$IFn$_invoke$arity$1(G__63584),new cljs.core.Keyword(null,"arg13","arg13",1606275392).cljs$core$IFn$_invoke$arity$1(G__63584),null,cljs.core.not_empty(extmap__4419__auto__),null));
});



/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {com.rpl.specter.impl.LateResolve}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
com.rpl.specter.impl.LateFn15 = (function (fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,arg14,__meta,__extmap,__hash){
this.fn = fn;
this.arg0 = arg0;
this.arg1 = arg1;
this.arg2 = arg2;
this.arg3 = arg3;
this.arg4 = arg4;
this.arg5 = arg5;
this.arg6 = arg6;
this.arg7 = arg7;
this.arg8 = arg8;
this.arg9 = arg9;
this.arg10 = arg10;
this.arg11 = arg11;
this.arg12 = arg12;
this.arg13 = arg13;
this.arg14 = arg14;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(com.rpl.specter.impl.LateFn15.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(com.rpl.specter.impl.LateFn15.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k63660,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__63672 = k63660;
var G__63672__$1 = (((G__63672 instanceof cljs.core.Keyword))?G__63672.fqn:null);
switch (G__63672__$1) {
case "fn":
return self__.fn;

break;
case "arg0":
return self__.arg0;

break;
case "arg1":
return self__.arg1;

break;
case "arg2":
return self__.arg2;

break;
case "arg3":
return self__.arg3;

break;
case "arg4":
return self__.arg4;

break;
case "arg5":
return self__.arg5;

break;
case "arg6":
return self__.arg6;

break;
case "arg7":
return self__.arg7;

break;
case "arg8":
return self__.arg8;

break;
case "arg9":
return self__.arg9;

break;
case "arg10":
return self__.arg10;

break;
case "arg11":
return self__.arg11;

break;
case "arg12":
return self__.arg12;

break;
case "arg13":
return self__.arg13;

break;
case "arg14":
return self__.arg14;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k63660,else__4383__auto__);

}
}));

(com.rpl.specter.impl.LateFn15.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__63677){
var vec__63680 = p__63677;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63680,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63680,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(com.rpl.specter.impl.LateFn15.prototype.com$rpl$specter$impl$LateResolve$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.impl.LateFn15.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__59310__auto__,dynamic_params62630){
var self__ = this;
var this__59310__auto____$1 = this;
var G__63685 = com.rpl.specter.impl.late_resolve(self__.arg0,dynamic_params62630);
var G__63686 = com.rpl.specter.impl.late_resolve(self__.arg1,dynamic_params62630);
var G__63687 = com.rpl.specter.impl.late_resolve(self__.arg2,dynamic_params62630);
var G__63688 = com.rpl.specter.impl.late_resolve(self__.arg3,dynamic_params62630);
var G__63689 = com.rpl.specter.impl.late_resolve(self__.arg4,dynamic_params62630);
var G__63690 = com.rpl.specter.impl.late_resolve(self__.arg5,dynamic_params62630);
var G__63691 = com.rpl.specter.impl.late_resolve(self__.arg6,dynamic_params62630);
var G__63692 = com.rpl.specter.impl.late_resolve(self__.arg7,dynamic_params62630);
var G__63693 = com.rpl.specter.impl.late_resolve(self__.arg8,dynamic_params62630);
var G__63694 = com.rpl.specter.impl.late_resolve(self__.arg9,dynamic_params62630);
var G__63695 = com.rpl.specter.impl.late_resolve(self__.arg10,dynamic_params62630);
var G__63696 = com.rpl.specter.impl.late_resolve(self__.arg11,dynamic_params62630);
var G__63697 = com.rpl.specter.impl.late_resolve(self__.arg12,dynamic_params62630);
var G__63698 = com.rpl.specter.impl.late_resolve(self__.arg13,dynamic_params62630);
var G__63699 = com.rpl.specter.impl.late_resolve(self__.arg14,dynamic_params62630);
var fexpr__63684 = com.rpl.specter.impl.late_resolve(self__.fn,dynamic_params62630);
return (fexpr__63684.cljs$core$IFn$_invoke$arity$15 ? fexpr__63684.cljs$core$IFn$_invoke$arity$15(G__63685,G__63686,G__63687,G__63688,G__63689,G__63690,G__63691,G__63692,G__63693,G__63694,G__63695,G__63696,G__63697,G__63698,G__63699) : fexpr__63684.call(null,G__63685,G__63686,G__63687,G__63688,G__63689,G__63690,G__63691,G__63692,G__63693,G__63694,G__63695,G__63696,G__63697,G__63698,G__63699));
}));

(com.rpl.specter.impl.LateFn15.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#com.rpl.specter.impl.LateFn15{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg7","arg7",932157509),self__.arg7],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg8","arg8",123916218),self__.arg8],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg9","arg9",-95117905),self__.arg9],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg10","arg10",-1230917517),self__.arg10],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg11","arg11",-379524070),self__.arg11],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg12","arg12",290681436),self__.arg12],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg13","arg13",1606275392),self__.arg13],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg14","arg14",-1870980778),self__.arg14],null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn15.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__63659){
var self__ = this;
var G__63659__$1 = this;
return (new cljs.core.RecordIter((0),G__63659__$1,16,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509),new cljs.core.Keyword(null,"arg8","arg8",123916218),new cljs.core.Keyword(null,"arg9","arg9",-95117905),new cljs.core.Keyword(null,"arg10","arg10",-1230917517),new cljs.core.Keyword(null,"arg11","arg11",-379524070),new cljs.core.Keyword(null,"arg12","arg12",290681436),new cljs.core.Keyword(null,"arg13","arg13",1606275392),new cljs.core.Keyword(null,"arg14","arg14",-1870980778)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(com.rpl.specter.impl.LateFn15.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(com.rpl.specter.impl.LateFn15.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.__meta,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn15.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (16 + cljs.core.count(self__.__extmap));
}));

(com.rpl.specter.impl.LateFn15.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (553496616 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(com.rpl.specter.impl.LateFn15.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this63661,other63662){
var self__ = this;
var this63661__$1 = this;
return (((!((other63662 == null)))) && ((this63661__$1.constructor === other63662.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63661__$1.fn,other63662.fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63661__$1.arg0,other63662.arg0)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63661__$1.arg1,other63662.arg1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63661__$1.arg2,other63662.arg2)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63661__$1.arg3,other63662.arg3)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63661__$1.arg4,other63662.arg4)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63661__$1.arg5,other63662.arg5)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63661__$1.arg6,other63662.arg6)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63661__$1.arg7,other63662.arg7)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63661__$1.arg8,other63662.arg8)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63661__$1.arg9,other63662.arg9)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63661__$1.arg10,other63662.arg10)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63661__$1.arg11,other63662.arg11)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63661__$1.arg12,other63662.arg12)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63661__$1.arg13,other63662.arg13)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63661__$1.arg14,other63662.arg14)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63661__$1.__extmap,other63662.__extmap)));
}));

(com.rpl.specter.impl.LateFn15.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 16, [new cljs.core.Keyword(null,"arg13","arg13",1606275392),null,new cljs.core.Keyword(null,"arg3","arg3",-1486822496),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"arg7","arg7",932157509),null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),null,new cljs.core.Keyword(null,"arg6","arg6",-2052656438),null,new cljs.core.Keyword(null,"arg9","arg9",-95117905),null,new cljs.core.Keyword(null,"arg10","arg10",-1230917517),null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),null,new cljs.core.Keyword(null,"arg14","arg14",-1870980778),null,new cljs.core.Keyword(null,"arg5","arg5",-1648794215),null,new cljs.core.Keyword(null,"arg11","arg11",-379524070),null,new cljs.core.Keyword(null,"arg8","arg8",123916218),null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),null,new cljs.core.Keyword(null,"arg12","arg12",290681436),null,new cljs.core.Keyword(null,"arg1","arg1",951899358),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(com.rpl.specter.impl.LateFn15.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__63659){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__63728 = cljs.core.keyword_identical_QMARK_;
var expr__63729 = k__4388__auto__;
if(cljs.core.truth_((pred__63728.cljs$core$IFn$_invoke$arity$2 ? pred__63728.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__63729) : pred__63728.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__63729)))){
return (new com.rpl.specter.impl.LateFn15(G__63659,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__63728.cljs$core$IFn$_invoke$arity$2 ? pred__63728.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg0","arg0",1629842355),expr__63729) : pred__63728.call(null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),expr__63729)))){
return (new com.rpl.specter.impl.LateFn15(self__.fn,G__63659,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__63728.cljs$core$IFn$_invoke$arity$2 ? pred__63728.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg1","arg1",951899358),expr__63729) : pred__63728.call(null,new cljs.core.Keyword(null,"arg1","arg1",951899358),expr__63729)))){
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,G__63659,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__63728.cljs$core$IFn$_invoke$arity$2 ? pred__63728.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg2","arg2",1729550917),expr__63729) : pred__63728.call(null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),expr__63729)))){
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,G__63659,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__63728.cljs$core$IFn$_invoke$arity$2 ? pred__63728.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg3","arg3",-1486822496),expr__63729) : pred__63728.call(null,new cljs.core.Keyword(null,"arg3","arg3",-1486822496),expr__63729)))){
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__63659,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__63728.cljs$core$IFn$_invoke$arity$2 ? pred__63728.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg4","arg4",-831640004),expr__63729) : pred__63728.call(null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),expr__63729)))){
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,G__63659,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__63728.cljs$core$IFn$_invoke$arity$2 ? pred__63728.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg5","arg5",-1648794215),expr__63729) : pred__63728.call(null,new cljs.core.Keyword(null,"arg5","arg5",-1648794215),expr__63729)))){
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,G__63659,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__63728.cljs$core$IFn$_invoke$arity$2 ? pred__63728.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg6","arg6",-2052656438),expr__63729) : pred__63728.call(null,new cljs.core.Keyword(null,"arg6","arg6",-2052656438),expr__63729)))){
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,G__63659,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__63728.cljs$core$IFn$_invoke$arity$2 ? pred__63728.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg7","arg7",932157509),expr__63729) : pred__63728.call(null,new cljs.core.Keyword(null,"arg7","arg7",932157509),expr__63729)))){
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,G__63659,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__63728.cljs$core$IFn$_invoke$arity$2 ? pred__63728.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg8","arg8",123916218),expr__63729) : pred__63728.call(null,new cljs.core.Keyword(null,"arg8","arg8",123916218),expr__63729)))){
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,G__63659,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__63728.cljs$core$IFn$_invoke$arity$2 ? pred__63728.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg9","arg9",-95117905),expr__63729) : pred__63728.call(null,new cljs.core.Keyword(null,"arg9","arg9",-95117905),expr__63729)))){
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,G__63659,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__63728.cljs$core$IFn$_invoke$arity$2 ? pred__63728.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg10","arg10",-1230917517),expr__63729) : pred__63728.call(null,new cljs.core.Keyword(null,"arg10","arg10",-1230917517),expr__63729)))){
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,G__63659,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__63728.cljs$core$IFn$_invoke$arity$2 ? pred__63728.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg11","arg11",-379524070),expr__63729) : pred__63728.call(null,new cljs.core.Keyword(null,"arg11","arg11",-379524070),expr__63729)))){
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,G__63659,self__.arg12,self__.arg13,self__.arg14,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__63728.cljs$core$IFn$_invoke$arity$2 ? pred__63728.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg12","arg12",290681436),expr__63729) : pred__63728.call(null,new cljs.core.Keyword(null,"arg12","arg12",290681436),expr__63729)))){
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,G__63659,self__.arg13,self__.arg14,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__63728.cljs$core$IFn$_invoke$arity$2 ? pred__63728.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg13","arg13",1606275392),expr__63729) : pred__63728.call(null,new cljs.core.Keyword(null,"arg13","arg13",1606275392),expr__63729)))){
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,G__63659,self__.arg14,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__63728.cljs$core$IFn$_invoke$arity$2 ? pred__63728.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg14","arg14",-1870980778),expr__63729) : pred__63728.call(null,new cljs.core.Keyword(null,"arg14","arg14",-1870980778),expr__63729)))){
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,G__63659,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__63659),null));
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
}));

(com.rpl.specter.impl.LateFn15.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg7","arg7",932157509),self__.arg7,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg8","arg8",123916218),self__.arg8,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg9","arg9",-95117905),self__.arg9,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg10","arg10",-1230917517),self__.arg10,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg11","arg11",-379524070),self__.arg11,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg12","arg12",290681436),self__.arg12,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg13","arg13",1606275392),self__.arg13,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg14","arg14",-1870980778),self__.arg14,null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn15.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__63659){
var self__ = this;
var this__4379__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,G__63659,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn15.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(com.rpl.specter.impl.LateFn15.getBasis = (function (){
return new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null),new cljs.core.Symbol(null,"arg2","arg2",-924884852,null),new cljs.core.Symbol(null,"arg3","arg3",153709031,null),new cljs.core.Symbol(null,"arg4","arg4",808891523,null),new cljs.core.Symbol(null,"arg5","arg5",-8262688,null),new cljs.core.Symbol(null,"arg6","arg6",-412124911,null),new cljs.core.Symbol(null,"arg7","arg7",-1722278260,null),new cljs.core.Symbol(null,"arg8","arg8",1764447745,null),new cljs.core.Symbol(null,"arg9","arg9",1545413622,null),new cljs.core.Symbol(null,"arg10","arg10",409614010,null),new cljs.core.Symbol(null,"arg11","arg11",1261007457,null),new cljs.core.Symbol(null,"arg12","arg12",1931212963,null),new cljs.core.Symbol(null,"arg13","arg13",-1048160377,null),new cljs.core.Symbol(null,"arg14","arg14",-230449251,null)], null);
}));

(com.rpl.specter.impl.LateFn15.cljs$lang$type = true);

(com.rpl.specter.impl.LateFn15.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/LateFn15",null,(1),null));
}));

(com.rpl.specter.impl.LateFn15.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"com.rpl.specter.impl/LateFn15");
}));

/**
 * Positional factory function for com.rpl.specter.impl/LateFn15.
 */
com.rpl.specter.impl.__GT_LateFn15 = (function com$rpl$specter$impl$__GT_LateFn15(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,arg14){
return (new com.rpl.specter.impl.LateFn15(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,arg14,null,null,null));
});

/**
 * Factory function for com.rpl.specter.impl/LateFn15, taking a map of keywords to field values.
 */
com.rpl.specter.impl.map__GT_LateFn15 = (function com$rpl$specter$impl$map__GT_LateFn15(G__63666){
var extmap__4419__auto__ = (function (){var G__63752 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__63666,new cljs.core.Keyword(null,"fn","fn",-1175266204),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509),new cljs.core.Keyword(null,"arg8","arg8",123916218),new cljs.core.Keyword(null,"arg9","arg9",-95117905),new cljs.core.Keyword(null,"arg10","arg10",-1230917517),new cljs.core.Keyword(null,"arg11","arg11",-379524070),new cljs.core.Keyword(null,"arg12","arg12",290681436),new cljs.core.Keyword(null,"arg13","arg13",1606275392),new cljs.core.Keyword(null,"arg14","arg14",-1870980778)], 0));
if(cljs.core.record_QMARK_(G__63666)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__63752);
} else {
return G__63752;
}
})();
return (new com.rpl.specter.impl.LateFn15(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__63666),new cljs.core.Keyword(null,"arg0","arg0",1629842355).cljs$core$IFn$_invoke$arity$1(G__63666),new cljs.core.Keyword(null,"arg1","arg1",951899358).cljs$core$IFn$_invoke$arity$1(G__63666),new cljs.core.Keyword(null,"arg2","arg2",1729550917).cljs$core$IFn$_invoke$arity$1(G__63666),new cljs.core.Keyword(null,"arg3","arg3",-1486822496).cljs$core$IFn$_invoke$arity$1(G__63666),new cljs.core.Keyword(null,"arg4","arg4",-831640004).cljs$core$IFn$_invoke$arity$1(G__63666),new cljs.core.Keyword(null,"arg5","arg5",-1648794215).cljs$core$IFn$_invoke$arity$1(G__63666),new cljs.core.Keyword(null,"arg6","arg6",-2052656438).cljs$core$IFn$_invoke$arity$1(G__63666),new cljs.core.Keyword(null,"arg7","arg7",932157509).cljs$core$IFn$_invoke$arity$1(G__63666),new cljs.core.Keyword(null,"arg8","arg8",123916218).cljs$core$IFn$_invoke$arity$1(G__63666),new cljs.core.Keyword(null,"arg9","arg9",-95117905).cljs$core$IFn$_invoke$arity$1(G__63666),new cljs.core.Keyword(null,"arg10","arg10",-1230917517).cljs$core$IFn$_invoke$arity$1(G__63666),new cljs.core.Keyword(null,"arg11","arg11",-379524070).cljs$core$IFn$_invoke$arity$1(G__63666),new cljs.core.Keyword(null,"arg12","arg12",290681436).cljs$core$IFn$_invoke$arity$1(G__63666),new cljs.core.Keyword(null,"arg13","arg13",1606275392).cljs$core$IFn$_invoke$arity$1(G__63666),new cljs.core.Keyword(null,"arg14","arg14",-1870980778).cljs$core$IFn$_invoke$arity$1(G__63666),null,cljs.core.not_empty(extmap__4419__auto__),null));
});



/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {com.rpl.specter.impl.LateResolve}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
com.rpl.specter.impl.LateFn16 = (function (fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,arg14,arg15,__meta,__extmap,__hash){
this.fn = fn;
this.arg0 = arg0;
this.arg1 = arg1;
this.arg2 = arg2;
this.arg3 = arg3;
this.arg4 = arg4;
this.arg5 = arg5;
this.arg6 = arg6;
this.arg7 = arg7;
this.arg8 = arg8;
this.arg9 = arg9;
this.arg10 = arg10;
this.arg11 = arg11;
this.arg12 = arg12;
this.arg13 = arg13;
this.arg14 = arg14;
this.arg15 = arg15;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(com.rpl.specter.impl.LateFn16.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(com.rpl.specter.impl.LateFn16.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k63755,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__63767 = k63755;
var G__63767__$1 = (((G__63767 instanceof cljs.core.Keyword))?G__63767.fqn:null);
switch (G__63767__$1) {
case "fn":
return self__.fn;

break;
case "arg0":
return self__.arg0;

break;
case "arg1":
return self__.arg1;

break;
case "arg2":
return self__.arg2;

break;
case "arg3":
return self__.arg3;

break;
case "arg4":
return self__.arg4;

break;
case "arg5":
return self__.arg5;

break;
case "arg6":
return self__.arg6;

break;
case "arg7":
return self__.arg7;

break;
case "arg8":
return self__.arg8;

break;
case "arg9":
return self__.arg9;

break;
case "arg10":
return self__.arg10;

break;
case "arg11":
return self__.arg11;

break;
case "arg12":
return self__.arg12;

break;
case "arg13":
return self__.arg13;

break;
case "arg14":
return self__.arg14;

break;
case "arg15":
return self__.arg15;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k63755,else__4383__auto__);

}
}));

(com.rpl.specter.impl.LateFn16.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__63775){
var vec__63776 = p__63775;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63776,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63776,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(com.rpl.specter.impl.LateFn16.prototype.com$rpl$specter$impl$LateResolve$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.impl.LateFn16.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__59310__auto__,dynamic_params62631){
var self__ = this;
var this__59310__auto____$1 = this;
var G__63782 = com.rpl.specter.impl.late_resolve(self__.arg0,dynamic_params62631);
var G__63783 = com.rpl.specter.impl.late_resolve(self__.arg1,dynamic_params62631);
var G__63784 = com.rpl.specter.impl.late_resolve(self__.arg2,dynamic_params62631);
var G__63785 = com.rpl.specter.impl.late_resolve(self__.arg3,dynamic_params62631);
var G__63786 = com.rpl.specter.impl.late_resolve(self__.arg4,dynamic_params62631);
var G__63787 = com.rpl.specter.impl.late_resolve(self__.arg5,dynamic_params62631);
var G__63788 = com.rpl.specter.impl.late_resolve(self__.arg6,dynamic_params62631);
var G__63789 = com.rpl.specter.impl.late_resolve(self__.arg7,dynamic_params62631);
var G__63790 = com.rpl.specter.impl.late_resolve(self__.arg8,dynamic_params62631);
var G__63791 = com.rpl.specter.impl.late_resolve(self__.arg9,dynamic_params62631);
var G__63792 = com.rpl.specter.impl.late_resolve(self__.arg10,dynamic_params62631);
var G__63793 = com.rpl.specter.impl.late_resolve(self__.arg11,dynamic_params62631);
var G__63794 = com.rpl.specter.impl.late_resolve(self__.arg12,dynamic_params62631);
var G__63795 = com.rpl.specter.impl.late_resolve(self__.arg13,dynamic_params62631);
var G__63796 = com.rpl.specter.impl.late_resolve(self__.arg14,dynamic_params62631);
var G__63797 = com.rpl.specter.impl.late_resolve(self__.arg15,dynamic_params62631);
var fexpr__63781 = com.rpl.specter.impl.late_resolve(self__.fn,dynamic_params62631);
return (fexpr__63781.cljs$core$IFn$_invoke$arity$16 ? fexpr__63781.cljs$core$IFn$_invoke$arity$16(G__63782,G__63783,G__63784,G__63785,G__63786,G__63787,G__63788,G__63789,G__63790,G__63791,G__63792,G__63793,G__63794,G__63795,G__63796,G__63797) : fexpr__63781.call(null,G__63782,G__63783,G__63784,G__63785,G__63786,G__63787,G__63788,G__63789,G__63790,G__63791,G__63792,G__63793,G__63794,G__63795,G__63796,G__63797));
}));

(com.rpl.specter.impl.LateFn16.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#com.rpl.specter.impl.LateFn16{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg7","arg7",932157509),self__.arg7],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg8","arg8",123916218),self__.arg8],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg9","arg9",-95117905),self__.arg9],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg10","arg10",-1230917517),self__.arg10],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg11","arg11",-379524070),self__.arg11],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg12","arg12",290681436),self__.arg12],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg13","arg13",1606275392),self__.arg13],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg14","arg14",-1870980778),self__.arg14],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg15","arg15",1451926677),self__.arg15],null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn16.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__63754){
var self__ = this;
var G__63754__$1 = this;
return (new cljs.core.RecordIter((0),G__63754__$1,17,new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509),new cljs.core.Keyword(null,"arg8","arg8",123916218),new cljs.core.Keyword(null,"arg9","arg9",-95117905),new cljs.core.Keyword(null,"arg10","arg10",-1230917517),new cljs.core.Keyword(null,"arg11","arg11",-379524070),new cljs.core.Keyword(null,"arg12","arg12",290681436),new cljs.core.Keyword(null,"arg13","arg13",1606275392),new cljs.core.Keyword(null,"arg14","arg14",-1870980778),new cljs.core.Keyword(null,"arg15","arg15",1451926677)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(com.rpl.specter.impl.LateFn16.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(com.rpl.specter.impl.LateFn16.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.__meta,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn16.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (17 + cljs.core.count(self__.__extmap));
}));

(com.rpl.specter.impl.LateFn16.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-280845773 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(com.rpl.specter.impl.LateFn16.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this63756,other63757){
var self__ = this;
var this63756__$1 = this;
return (((!((other63757 == null)))) && ((this63756__$1.constructor === other63757.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63756__$1.fn,other63757.fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63756__$1.arg0,other63757.arg0)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63756__$1.arg1,other63757.arg1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63756__$1.arg2,other63757.arg2)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63756__$1.arg3,other63757.arg3)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63756__$1.arg4,other63757.arg4)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63756__$1.arg5,other63757.arg5)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63756__$1.arg6,other63757.arg6)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63756__$1.arg7,other63757.arg7)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63756__$1.arg8,other63757.arg8)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63756__$1.arg9,other63757.arg9)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63756__$1.arg10,other63757.arg10)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63756__$1.arg11,other63757.arg11)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63756__$1.arg12,other63757.arg12)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63756__$1.arg13,other63757.arg13)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63756__$1.arg14,other63757.arg14)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63756__$1.arg15,other63757.arg15)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63756__$1.__extmap,other63757.__extmap)));
}));

(com.rpl.specter.impl.LateFn16.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 17, [new cljs.core.Keyword(null,"arg13","arg13",1606275392),null,new cljs.core.Keyword(null,"arg3","arg3",-1486822496),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"arg7","arg7",932157509),null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),null,new cljs.core.Keyword(null,"arg6","arg6",-2052656438),null,new cljs.core.Keyword(null,"arg9","arg9",-95117905),null,new cljs.core.Keyword(null,"arg10","arg10",-1230917517),null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),null,new cljs.core.Keyword(null,"arg15","arg15",1451926677),null,new cljs.core.Keyword(null,"arg14","arg14",-1870980778),null,new cljs.core.Keyword(null,"arg5","arg5",-1648794215),null,new cljs.core.Keyword(null,"arg11","arg11",-379524070),null,new cljs.core.Keyword(null,"arg8","arg8",123916218),null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),null,new cljs.core.Keyword(null,"arg12","arg12",290681436),null,new cljs.core.Keyword(null,"arg1","arg1",951899358),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(com.rpl.specter.impl.LateFn16.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__63754){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__63833 = cljs.core.keyword_identical_QMARK_;
var expr__63834 = k__4388__auto__;
if(cljs.core.truth_((pred__63833.cljs$core$IFn$_invoke$arity$2 ? pred__63833.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__63834) : pred__63833.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__63834)))){
return (new com.rpl.specter.impl.LateFn16(G__63754,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__63833.cljs$core$IFn$_invoke$arity$2 ? pred__63833.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg0","arg0",1629842355),expr__63834) : pred__63833.call(null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),expr__63834)))){
return (new com.rpl.specter.impl.LateFn16(self__.fn,G__63754,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__63833.cljs$core$IFn$_invoke$arity$2 ? pred__63833.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg1","arg1",951899358),expr__63834) : pred__63833.call(null,new cljs.core.Keyword(null,"arg1","arg1",951899358),expr__63834)))){
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,G__63754,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__63833.cljs$core$IFn$_invoke$arity$2 ? pred__63833.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg2","arg2",1729550917),expr__63834) : pred__63833.call(null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),expr__63834)))){
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,G__63754,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__63833.cljs$core$IFn$_invoke$arity$2 ? pred__63833.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg3","arg3",-1486822496),expr__63834) : pred__63833.call(null,new cljs.core.Keyword(null,"arg3","arg3",-1486822496),expr__63834)))){
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__63754,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__63833.cljs$core$IFn$_invoke$arity$2 ? pred__63833.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg4","arg4",-831640004),expr__63834) : pred__63833.call(null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),expr__63834)))){
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,G__63754,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__63833.cljs$core$IFn$_invoke$arity$2 ? pred__63833.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg5","arg5",-1648794215),expr__63834) : pred__63833.call(null,new cljs.core.Keyword(null,"arg5","arg5",-1648794215),expr__63834)))){
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,G__63754,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__63833.cljs$core$IFn$_invoke$arity$2 ? pred__63833.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg6","arg6",-2052656438),expr__63834) : pred__63833.call(null,new cljs.core.Keyword(null,"arg6","arg6",-2052656438),expr__63834)))){
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,G__63754,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__63833.cljs$core$IFn$_invoke$arity$2 ? pred__63833.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg7","arg7",932157509),expr__63834) : pred__63833.call(null,new cljs.core.Keyword(null,"arg7","arg7",932157509),expr__63834)))){
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,G__63754,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__63833.cljs$core$IFn$_invoke$arity$2 ? pred__63833.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg8","arg8",123916218),expr__63834) : pred__63833.call(null,new cljs.core.Keyword(null,"arg8","arg8",123916218),expr__63834)))){
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,G__63754,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__63833.cljs$core$IFn$_invoke$arity$2 ? pred__63833.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg9","arg9",-95117905),expr__63834) : pred__63833.call(null,new cljs.core.Keyword(null,"arg9","arg9",-95117905),expr__63834)))){
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,G__63754,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__63833.cljs$core$IFn$_invoke$arity$2 ? pred__63833.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg10","arg10",-1230917517),expr__63834) : pred__63833.call(null,new cljs.core.Keyword(null,"arg10","arg10",-1230917517),expr__63834)))){
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,G__63754,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__63833.cljs$core$IFn$_invoke$arity$2 ? pred__63833.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg11","arg11",-379524070),expr__63834) : pred__63833.call(null,new cljs.core.Keyword(null,"arg11","arg11",-379524070),expr__63834)))){
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,G__63754,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__63833.cljs$core$IFn$_invoke$arity$2 ? pred__63833.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg12","arg12",290681436),expr__63834) : pred__63833.call(null,new cljs.core.Keyword(null,"arg12","arg12",290681436),expr__63834)))){
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,G__63754,self__.arg13,self__.arg14,self__.arg15,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__63833.cljs$core$IFn$_invoke$arity$2 ? pred__63833.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg13","arg13",1606275392),expr__63834) : pred__63833.call(null,new cljs.core.Keyword(null,"arg13","arg13",1606275392),expr__63834)))){
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,G__63754,self__.arg14,self__.arg15,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__63833.cljs$core$IFn$_invoke$arity$2 ? pred__63833.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg14","arg14",-1870980778),expr__63834) : pred__63833.call(null,new cljs.core.Keyword(null,"arg14","arg14",-1870980778),expr__63834)))){
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,G__63754,self__.arg15,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__63833.cljs$core$IFn$_invoke$arity$2 ? pred__63833.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg15","arg15",1451926677),expr__63834) : pred__63833.call(null,new cljs.core.Keyword(null,"arg15","arg15",1451926677),expr__63834)))){
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,G__63754,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__63754),null));
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
}));

(com.rpl.specter.impl.LateFn16.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg7","arg7",932157509),self__.arg7,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg8","arg8",123916218),self__.arg8,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg9","arg9",-95117905),self__.arg9,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg10","arg10",-1230917517),self__.arg10,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg11","arg11",-379524070),self__.arg11,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg12","arg12",290681436),self__.arg12,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg13","arg13",1606275392),self__.arg13,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg14","arg14",-1870980778),self__.arg14,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg15","arg15",1451926677),self__.arg15,null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn16.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__63754){
var self__ = this;
var this__4379__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,G__63754,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn16.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(com.rpl.specter.impl.LateFn16.getBasis = (function (){
return new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null),new cljs.core.Symbol(null,"arg2","arg2",-924884852,null),new cljs.core.Symbol(null,"arg3","arg3",153709031,null),new cljs.core.Symbol(null,"arg4","arg4",808891523,null),new cljs.core.Symbol(null,"arg5","arg5",-8262688,null),new cljs.core.Symbol(null,"arg6","arg6",-412124911,null),new cljs.core.Symbol(null,"arg7","arg7",-1722278260,null),new cljs.core.Symbol(null,"arg8","arg8",1764447745,null),new cljs.core.Symbol(null,"arg9","arg9",1545413622,null),new cljs.core.Symbol(null,"arg10","arg10",409614010,null),new cljs.core.Symbol(null,"arg11","arg11",1261007457,null),new cljs.core.Symbol(null,"arg12","arg12",1931212963,null),new cljs.core.Symbol(null,"arg13","arg13",-1048160377,null),new cljs.core.Symbol(null,"arg14","arg14",-230449251,null),new cljs.core.Symbol(null,"arg15","arg15",-1202509092,null)], null);
}));

(com.rpl.specter.impl.LateFn16.cljs$lang$type = true);

(com.rpl.specter.impl.LateFn16.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/LateFn16",null,(1),null));
}));

(com.rpl.specter.impl.LateFn16.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"com.rpl.specter.impl/LateFn16");
}));

/**
 * Positional factory function for com.rpl.specter.impl/LateFn16.
 */
com.rpl.specter.impl.__GT_LateFn16 = (function com$rpl$specter$impl$__GT_LateFn16(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,arg14,arg15){
return (new com.rpl.specter.impl.LateFn16(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,arg14,arg15,null,null,null));
});

/**
 * Factory function for com.rpl.specter.impl/LateFn16, taking a map of keywords to field values.
 */
com.rpl.specter.impl.map__GT_LateFn16 = (function com$rpl$specter$impl$map__GT_LateFn16(G__63764){
var extmap__4419__auto__ = (function (){var G__63866 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__63764,new cljs.core.Keyword(null,"fn","fn",-1175266204),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509),new cljs.core.Keyword(null,"arg8","arg8",123916218),new cljs.core.Keyword(null,"arg9","arg9",-95117905),new cljs.core.Keyword(null,"arg10","arg10",-1230917517),new cljs.core.Keyword(null,"arg11","arg11",-379524070),new cljs.core.Keyword(null,"arg12","arg12",290681436),new cljs.core.Keyword(null,"arg13","arg13",1606275392),new cljs.core.Keyword(null,"arg14","arg14",-1870980778),new cljs.core.Keyword(null,"arg15","arg15",1451926677)], 0));
if(cljs.core.record_QMARK_(G__63764)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__63866);
} else {
return G__63866;
}
})();
return (new com.rpl.specter.impl.LateFn16(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__63764),new cljs.core.Keyword(null,"arg0","arg0",1629842355).cljs$core$IFn$_invoke$arity$1(G__63764),new cljs.core.Keyword(null,"arg1","arg1",951899358).cljs$core$IFn$_invoke$arity$1(G__63764),new cljs.core.Keyword(null,"arg2","arg2",1729550917).cljs$core$IFn$_invoke$arity$1(G__63764),new cljs.core.Keyword(null,"arg3","arg3",-1486822496).cljs$core$IFn$_invoke$arity$1(G__63764),new cljs.core.Keyword(null,"arg4","arg4",-831640004).cljs$core$IFn$_invoke$arity$1(G__63764),new cljs.core.Keyword(null,"arg5","arg5",-1648794215).cljs$core$IFn$_invoke$arity$1(G__63764),new cljs.core.Keyword(null,"arg6","arg6",-2052656438).cljs$core$IFn$_invoke$arity$1(G__63764),new cljs.core.Keyword(null,"arg7","arg7",932157509).cljs$core$IFn$_invoke$arity$1(G__63764),new cljs.core.Keyword(null,"arg8","arg8",123916218).cljs$core$IFn$_invoke$arity$1(G__63764),new cljs.core.Keyword(null,"arg9","arg9",-95117905).cljs$core$IFn$_invoke$arity$1(G__63764),new cljs.core.Keyword(null,"arg10","arg10",-1230917517).cljs$core$IFn$_invoke$arity$1(G__63764),new cljs.core.Keyword(null,"arg11","arg11",-379524070).cljs$core$IFn$_invoke$arity$1(G__63764),new cljs.core.Keyword(null,"arg12","arg12",290681436).cljs$core$IFn$_invoke$arity$1(G__63764),new cljs.core.Keyword(null,"arg13","arg13",1606275392).cljs$core$IFn$_invoke$arity$1(G__63764),new cljs.core.Keyword(null,"arg14","arg14",-1870980778).cljs$core$IFn$_invoke$arity$1(G__63764),new cljs.core.Keyword(null,"arg15","arg15",1451926677).cljs$core$IFn$_invoke$arity$1(G__63764),null,cljs.core.not_empty(extmap__4419__auto__),null));
});



/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {com.rpl.specter.impl.LateResolve}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
com.rpl.specter.impl.LateFn17 = (function (fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,arg14,arg15,arg16,__meta,__extmap,__hash){
this.fn = fn;
this.arg0 = arg0;
this.arg1 = arg1;
this.arg2 = arg2;
this.arg3 = arg3;
this.arg4 = arg4;
this.arg5 = arg5;
this.arg6 = arg6;
this.arg7 = arg7;
this.arg8 = arg8;
this.arg9 = arg9;
this.arg10 = arg10;
this.arg11 = arg11;
this.arg12 = arg12;
this.arg13 = arg13;
this.arg14 = arg14;
this.arg15 = arg15;
this.arg16 = arg16;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(com.rpl.specter.impl.LateFn17.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(com.rpl.specter.impl.LateFn17.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k63868,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__63874 = k63868;
var G__63874__$1 = (((G__63874 instanceof cljs.core.Keyword))?G__63874.fqn:null);
switch (G__63874__$1) {
case "fn":
return self__.fn;

break;
case "arg0":
return self__.arg0;

break;
case "arg1":
return self__.arg1;

break;
case "arg2":
return self__.arg2;

break;
case "arg3":
return self__.arg3;

break;
case "arg4":
return self__.arg4;

break;
case "arg5":
return self__.arg5;

break;
case "arg6":
return self__.arg6;

break;
case "arg7":
return self__.arg7;

break;
case "arg8":
return self__.arg8;

break;
case "arg9":
return self__.arg9;

break;
case "arg10":
return self__.arg10;

break;
case "arg11":
return self__.arg11;

break;
case "arg12":
return self__.arg12;

break;
case "arg13":
return self__.arg13;

break;
case "arg14":
return self__.arg14;

break;
case "arg15":
return self__.arg15;

break;
case "arg16":
return self__.arg16;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k63868,else__4383__auto__);

}
}));

(com.rpl.specter.impl.LateFn17.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__63875){
var vec__63876 = p__63875;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63876,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63876,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(com.rpl.specter.impl.LateFn17.prototype.com$rpl$specter$impl$LateResolve$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.impl.LateFn17.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__59310__auto__,dynamic_params62633){
var self__ = this;
var this__59310__auto____$1 = this;
var G__63882 = com.rpl.specter.impl.late_resolve(self__.arg0,dynamic_params62633);
var G__63883 = com.rpl.specter.impl.late_resolve(self__.arg1,dynamic_params62633);
var G__63884 = com.rpl.specter.impl.late_resolve(self__.arg2,dynamic_params62633);
var G__63885 = com.rpl.specter.impl.late_resolve(self__.arg3,dynamic_params62633);
var G__63886 = com.rpl.specter.impl.late_resolve(self__.arg4,dynamic_params62633);
var G__63887 = com.rpl.specter.impl.late_resolve(self__.arg5,dynamic_params62633);
var G__63888 = com.rpl.specter.impl.late_resolve(self__.arg6,dynamic_params62633);
var G__63889 = com.rpl.specter.impl.late_resolve(self__.arg7,dynamic_params62633);
var G__63890 = com.rpl.specter.impl.late_resolve(self__.arg8,dynamic_params62633);
var G__63891 = com.rpl.specter.impl.late_resolve(self__.arg9,dynamic_params62633);
var G__63892 = com.rpl.specter.impl.late_resolve(self__.arg10,dynamic_params62633);
var G__63893 = com.rpl.specter.impl.late_resolve(self__.arg11,dynamic_params62633);
var G__63894 = com.rpl.specter.impl.late_resolve(self__.arg12,dynamic_params62633);
var G__63895 = com.rpl.specter.impl.late_resolve(self__.arg13,dynamic_params62633);
var G__63896 = com.rpl.specter.impl.late_resolve(self__.arg14,dynamic_params62633);
var G__63897 = com.rpl.specter.impl.late_resolve(self__.arg15,dynamic_params62633);
var G__63898 = com.rpl.specter.impl.late_resolve(self__.arg16,dynamic_params62633);
var fexpr__63881 = com.rpl.specter.impl.late_resolve(self__.fn,dynamic_params62633);
return (fexpr__63881.cljs$core$IFn$_invoke$arity$17 ? fexpr__63881.cljs$core$IFn$_invoke$arity$17(G__63882,G__63883,G__63884,G__63885,G__63886,G__63887,G__63888,G__63889,G__63890,G__63891,G__63892,G__63893,G__63894,G__63895,G__63896,G__63897,G__63898) : fexpr__63881.call(null,G__63882,G__63883,G__63884,G__63885,G__63886,G__63887,G__63888,G__63889,G__63890,G__63891,G__63892,G__63893,G__63894,G__63895,G__63896,G__63897,G__63898));
}));

(com.rpl.specter.impl.LateFn17.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#com.rpl.specter.impl.LateFn17{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 18, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg7","arg7",932157509),self__.arg7],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg8","arg8",123916218),self__.arg8],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg9","arg9",-95117905),self__.arg9],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg10","arg10",-1230917517),self__.arg10],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg11","arg11",-379524070),self__.arg11],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg12","arg12",290681436),self__.arg12],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg13","arg13",1606275392),self__.arg13],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg14","arg14",-1870980778),self__.arg14],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg15","arg15",1451926677),self__.arg15],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg16","arg16",-445557546),self__.arg16],null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn17.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__63867){
var self__ = this;
var G__63867__$1 = this;
return (new cljs.core.RecordIter((0),G__63867__$1,18,new cljs.core.PersistentVector(null, 18, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509),new cljs.core.Keyword(null,"arg8","arg8",123916218),new cljs.core.Keyword(null,"arg9","arg9",-95117905),new cljs.core.Keyword(null,"arg10","arg10",-1230917517),new cljs.core.Keyword(null,"arg11","arg11",-379524070),new cljs.core.Keyword(null,"arg12","arg12",290681436),new cljs.core.Keyword(null,"arg13","arg13",1606275392),new cljs.core.Keyword(null,"arg14","arg14",-1870980778),new cljs.core.Keyword(null,"arg15","arg15",1451926677),new cljs.core.Keyword(null,"arg16","arg16",-445557546)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(com.rpl.specter.impl.LateFn17.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(com.rpl.specter.impl.LateFn17.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn17.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (18 + cljs.core.count(self__.__extmap));
}));

(com.rpl.specter.impl.LateFn17.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-1493409369 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(com.rpl.specter.impl.LateFn17.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this63869,other63870){
var self__ = this;
var this63869__$1 = this;
return (((!((other63870 == null)))) && ((this63869__$1.constructor === other63870.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63869__$1.fn,other63870.fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63869__$1.arg0,other63870.arg0)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63869__$1.arg1,other63870.arg1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63869__$1.arg2,other63870.arg2)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63869__$1.arg3,other63870.arg3)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63869__$1.arg4,other63870.arg4)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63869__$1.arg5,other63870.arg5)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63869__$1.arg6,other63870.arg6)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63869__$1.arg7,other63870.arg7)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63869__$1.arg8,other63870.arg8)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63869__$1.arg9,other63870.arg9)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63869__$1.arg10,other63870.arg10)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63869__$1.arg11,other63870.arg11)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63869__$1.arg12,other63870.arg12)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63869__$1.arg13,other63870.arg13)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63869__$1.arg14,other63870.arg14)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63869__$1.arg15,other63870.arg15)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63869__$1.arg16,other63870.arg16)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63869__$1.__extmap,other63870.__extmap)));
}));

(com.rpl.specter.impl.LateFn17.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 18, [new cljs.core.Keyword(null,"arg13","arg13",1606275392),null,new cljs.core.Keyword(null,"arg3","arg3",-1486822496),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"arg7","arg7",932157509),null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),null,new cljs.core.Keyword(null,"arg6","arg6",-2052656438),null,new cljs.core.Keyword(null,"arg9","arg9",-95117905),null,new cljs.core.Keyword(null,"arg10","arg10",-1230917517),null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),null,new cljs.core.Keyword(null,"arg15","arg15",1451926677),null,new cljs.core.Keyword(null,"arg16","arg16",-445557546),null,new cljs.core.Keyword(null,"arg14","arg14",-1870980778),null,new cljs.core.Keyword(null,"arg5","arg5",-1648794215),null,new cljs.core.Keyword(null,"arg11","arg11",-379524070),null,new cljs.core.Keyword(null,"arg8","arg8",123916218),null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),null,new cljs.core.Keyword(null,"arg12","arg12",290681436),null,new cljs.core.Keyword(null,"arg1","arg1",951899358),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(com.rpl.specter.impl.LateFn17.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__63867){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__63933 = cljs.core.keyword_identical_QMARK_;
var expr__63934 = k__4388__auto__;
if(cljs.core.truth_((pred__63933.cljs$core$IFn$_invoke$arity$2 ? pred__63933.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__63934) : pred__63933.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__63934)))){
return (new com.rpl.specter.impl.LateFn17(G__63867,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__63933.cljs$core$IFn$_invoke$arity$2 ? pred__63933.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg0","arg0",1629842355),expr__63934) : pred__63933.call(null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),expr__63934)))){
return (new com.rpl.specter.impl.LateFn17(self__.fn,G__63867,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__63933.cljs$core$IFn$_invoke$arity$2 ? pred__63933.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg1","arg1",951899358),expr__63934) : pred__63933.call(null,new cljs.core.Keyword(null,"arg1","arg1",951899358),expr__63934)))){
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,G__63867,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__63933.cljs$core$IFn$_invoke$arity$2 ? pred__63933.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg2","arg2",1729550917),expr__63934) : pred__63933.call(null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),expr__63934)))){
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,G__63867,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__63933.cljs$core$IFn$_invoke$arity$2 ? pred__63933.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg3","arg3",-1486822496),expr__63934) : pred__63933.call(null,new cljs.core.Keyword(null,"arg3","arg3",-1486822496),expr__63934)))){
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__63867,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__63933.cljs$core$IFn$_invoke$arity$2 ? pred__63933.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg4","arg4",-831640004),expr__63934) : pred__63933.call(null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),expr__63934)))){
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,G__63867,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__63933.cljs$core$IFn$_invoke$arity$2 ? pred__63933.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg5","arg5",-1648794215),expr__63934) : pred__63933.call(null,new cljs.core.Keyword(null,"arg5","arg5",-1648794215),expr__63934)))){
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,G__63867,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__63933.cljs$core$IFn$_invoke$arity$2 ? pred__63933.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg6","arg6",-2052656438),expr__63934) : pred__63933.call(null,new cljs.core.Keyword(null,"arg6","arg6",-2052656438),expr__63934)))){
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,G__63867,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__63933.cljs$core$IFn$_invoke$arity$2 ? pred__63933.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg7","arg7",932157509),expr__63934) : pred__63933.call(null,new cljs.core.Keyword(null,"arg7","arg7",932157509),expr__63934)))){
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,G__63867,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__63933.cljs$core$IFn$_invoke$arity$2 ? pred__63933.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg8","arg8",123916218),expr__63934) : pred__63933.call(null,new cljs.core.Keyword(null,"arg8","arg8",123916218),expr__63934)))){
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,G__63867,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__63933.cljs$core$IFn$_invoke$arity$2 ? pred__63933.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg9","arg9",-95117905),expr__63934) : pred__63933.call(null,new cljs.core.Keyword(null,"arg9","arg9",-95117905),expr__63934)))){
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,G__63867,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__63933.cljs$core$IFn$_invoke$arity$2 ? pred__63933.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg10","arg10",-1230917517),expr__63934) : pred__63933.call(null,new cljs.core.Keyword(null,"arg10","arg10",-1230917517),expr__63934)))){
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,G__63867,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__63933.cljs$core$IFn$_invoke$arity$2 ? pred__63933.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg11","arg11",-379524070),expr__63934) : pred__63933.call(null,new cljs.core.Keyword(null,"arg11","arg11",-379524070),expr__63934)))){
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,G__63867,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__63933.cljs$core$IFn$_invoke$arity$2 ? pred__63933.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg12","arg12",290681436),expr__63934) : pred__63933.call(null,new cljs.core.Keyword(null,"arg12","arg12",290681436),expr__63934)))){
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,G__63867,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__63933.cljs$core$IFn$_invoke$arity$2 ? pred__63933.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg13","arg13",1606275392),expr__63934) : pred__63933.call(null,new cljs.core.Keyword(null,"arg13","arg13",1606275392),expr__63934)))){
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,G__63867,self__.arg14,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__63933.cljs$core$IFn$_invoke$arity$2 ? pred__63933.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg14","arg14",-1870980778),expr__63934) : pred__63933.call(null,new cljs.core.Keyword(null,"arg14","arg14",-1870980778),expr__63934)))){
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,G__63867,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__63933.cljs$core$IFn$_invoke$arity$2 ? pred__63933.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg15","arg15",1451926677),expr__63934) : pred__63933.call(null,new cljs.core.Keyword(null,"arg15","arg15",1451926677),expr__63934)))){
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,G__63867,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__63933.cljs$core$IFn$_invoke$arity$2 ? pred__63933.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg16","arg16",-445557546),expr__63934) : pred__63933.call(null,new cljs.core.Keyword(null,"arg16","arg16",-445557546),expr__63934)))){
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,G__63867,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__63867),null));
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
}));

(com.rpl.specter.impl.LateFn17.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 18, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg7","arg7",932157509),self__.arg7,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg8","arg8",123916218),self__.arg8,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg9","arg9",-95117905),self__.arg9,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg10","arg10",-1230917517),self__.arg10,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg11","arg11",-379524070),self__.arg11,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg12","arg12",290681436),self__.arg12,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg13","arg13",1606275392),self__.arg13,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg14","arg14",-1870980778),self__.arg14,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg15","arg15",1451926677),self__.arg15,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg16","arg16",-445557546),self__.arg16,null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn17.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__63867){
var self__ = this;
var this__4379__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,G__63867,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn17.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(com.rpl.specter.impl.LateFn17.getBasis = (function (){
return new cljs.core.PersistentVector(null, 18, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null),new cljs.core.Symbol(null,"arg2","arg2",-924884852,null),new cljs.core.Symbol(null,"arg3","arg3",153709031,null),new cljs.core.Symbol(null,"arg4","arg4",808891523,null),new cljs.core.Symbol(null,"arg5","arg5",-8262688,null),new cljs.core.Symbol(null,"arg6","arg6",-412124911,null),new cljs.core.Symbol(null,"arg7","arg7",-1722278260,null),new cljs.core.Symbol(null,"arg8","arg8",1764447745,null),new cljs.core.Symbol(null,"arg9","arg9",1545413622,null),new cljs.core.Symbol(null,"arg10","arg10",409614010,null),new cljs.core.Symbol(null,"arg11","arg11",1261007457,null),new cljs.core.Symbol(null,"arg12","arg12",1931212963,null),new cljs.core.Symbol(null,"arg13","arg13",-1048160377,null),new cljs.core.Symbol(null,"arg14","arg14",-230449251,null),new cljs.core.Symbol(null,"arg15","arg15",-1202509092,null),new cljs.core.Symbol(null,"arg16","arg16",1194973981,null)], null);
}));

(com.rpl.specter.impl.LateFn17.cljs$lang$type = true);

(com.rpl.specter.impl.LateFn17.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/LateFn17",null,(1),null));
}));

(com.rpl.specter.impl.LateFn17.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"com.rpl.specter.impl/LateFn17");
}));

/**
 * Positional factory function for com.rpl.specter.impl/LateFn17.
 */
com.rpl.specter.impl.__GT_LateFn17 = (function com$rpl$specter$impl$__GT_LateFn17(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,arg14,arg15,arg16){
return (new com.rpl.specter.impl.LateFn17(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,arg14,arg15,arg16,null,null,null));
});

/**
 * Factory function for com.rpl.specter.impl/LateFn17, taking a map of keywords to field values.
 */
com.rpl.specter.impl.map__GT_LateFn17 = (function com$rpl$specter$impl$map__GT_LateFn17(G__63872){
var extmap__4419__auto__ = (function (){var G__63948 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__63872,new cljs.core.Keyword(null,"fn","fn",-1175266204),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509),new cljs.core.Keyword(null,"arg8","arg8",123916218),new cljs.core.Keyword(null,"arg9","arg9",-95117905),new cljs.core.Keyword(null,"arg10","arg10",-1230917517),new cljs.core.Keyword(null,"arg11","arg11",-379524070),new cljs.core.Keyword(null,"arg12","arg12",290681436),new cljs.core.Keyword(null,"arg13","arg13",1606275392),new cljs.core.Keyword(null,"arg14","arg14",-1870980778),new cljs.core.Keyword(null,"arg15","arg15",1451926677),new cljs.core.Keyword(null,"arg16","arg16",-445557546)], 0));
if(cljs.core.record_QMARK_(G__63872)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__63948);
} else {
return G__63948;
}
})();
return (new com.rpl.specter.impl.LateFn17(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__63872),new cljs.core.Keyword(null,"arg0","arg0",1629842355).cljs$core$IFn$_invoke$arity$1(G__63872),new cljs.core.Keyword(null,"arg1","arg1",951899358).cljs$core$IFn$_invoke$arity$1(G__63872),new cljs.core.Keyword(null,"arg2","arg2",1729550917).cljs$core$IFn$_invoke$arity$1(G__63872),new cljs.core.Keyword(null,"arg3","arg3",-1486822496).cljs$core$IFn$_invoke$arity$1(G__63872),new cljs.core.Keyword(null,"arg4","arg4",-831640004).cljs$core$IFn$_invoke$arity$1(G__63872),new cljs.core.Keyword(null,"arg5","arg5",-1648794215).cljs$core$IFn$_invoke$arity$1(G__63872),new cljs.core.Keyword(null,"arg6","arg6",-2052656438).cljs$core$IFn$_invoke$arity$1(G__63872),new cljs.core.Keyword(null,"arg7","arg7",932157509).cljs$core$IFn$_invoke$arity$1(G__63872),new cljs.core.Keyword(null,"arg8","arg8",123916218).cljs$core$IFn$_invoke$arity$1(G__63872),new cljs.core.Keyword(null,"arg9","arg9",-95117905).cljs$core$IFn$_invoke$arity$1(G__63872),new cljs.core.Keyword(null,"arg10","arg10",-1230917517).cljs$core$IFn$_invoke$arity$1(G__63872),new cljs.core.Keyword(null,"arg11","arg11",-379524070).cljs$core$IFn$_invoke$arity$1(G__63872),new cljs.core.Keyword(null,"arg12","arg12",290681436).cljs$core$IFn$_invoke$arity$1(G__63872),new cljs.core.Keyword(null,"arg13","arg13",1606275392).cljs$core$IFn$_invoke$arity$1(G__63872),new cljs.core.Keyword(null,"arg14","arg14",-1870980778).cljs$core$IFn$_invoke$arity$1(G__63872),new cljs.core.Keyword(null,"arg15","arg15",1451926677).cljs$core$IFn$_invoke$arity$1(G__63872),new cljs.core.Keyword(null,"arg16","arg16",-445557546).cljs$core$IFn$_invoke$arity$1(G__63872),null,cljs.core.not_empty(extmap__4419__auto__),null));
});



/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {com.rpl.specter.impl.LateResolve}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
com.rpl.specter.impl.LateFn18 = (function (fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,arg14,arg15,arg16,arg17,__meta,__extmap,__hash){
this.fn = fn;
this.arg0 = arg0;
this.arg1 = arg1;
this.arg2 = arg2;
this.arg3 = arg3;
this.arg4 = arg4;
this.arg5 = arg5;
this.arg6 = arg6;
this.arg7 = arg7;
this.arg8 = arg8;
this.arg9 = arg9;
this.arg10 = arg10;
this.arg11 = arg11;
this.arg12 = arg12;
this.arg13 = arg13;
this.arg14 = arg14;
this.arg15 = arg15;
this.arg16 = arg16;
this.arg17 = arg17;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(com.rpl.specter.impl.LateFn18.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(com.rpl.specter.impl.LateFn18.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k63959,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__63968 = k63959;
var G__63968__$1 = (((G__63968 instanceof cljs.core.Keyword))?G__63968.fqn:null);
switch (G__63968__$1) {
case "fn":
return self__.fn;

break;
case "arg0":
return self__.arg0;

break;
case "arg1":
return self__.arg1;

break;
case "arg2":
return self__.arg2;

break;
case "arg3":
return self__.arg3;

break;
case "arg4":
return self__.arg4;

break;
case "arg5":
return self__.arg5;

break;
case "arg6":
return self__.arg6;

break;
case "arg7":
return self__.arg7;

break;
case "arg8":
return self__.arg8;

break;
case "arg9":
return self__.arg9;

break;
case "arg10":
return self__.arg10;

break;
case "arg11":
return self__.arg11;

break;
case "arg12":
return self__.arg12;

break;
case "arg13":
return self__.arg13;

break;
case "arg14":
return self__.arg14;

break;
case "arg15":
return self__.arg15;

break;
case "arg16":
return self__.arg16;

break;
case "arg17":
return self__.arg17;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k63959,else__4383__auto__);

}
}));

(com.rpl.specter.impl.LateFn18.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__63970){
var vec__63971 = p__63970;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63971,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63971,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(com.rpl.specter.impl.LateFn18.prototype.com$rpl$specter$impl$LateResolve$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.impl.LateFn18.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__59310__auto__,dynamic_params62634){
var self__ = this;
var this__59310__auto____$1 = this;
var G__63977 = com.rpl.specter.impl.late_resolve(self__.arg0,dynamic_params62634);
var G__63978 = com.rpl.specter.impl.late_resolve(self__.arg1,dynamic_params62634);
var G__63979 = com.rpl.specter.impl.late_resolve(self__.arg2,dynamic_params62634);
var G__63980 = com.rpl.specter.impl.late_resolve(self__.arg3,dynamic_params62634);
var G__63981 = com.rpl.specter.impl.late_resolve(self__.arg4,dynamic_params62634);
var G__63982 = com.rpl.specter.impl.late_resolve(self__.arg5,dynamic_params62634);
var G__63983 = com.rpl.specter.impl.late_resolve(self__.arg6,dynamic_params62634);
var G__63984 = com.rpl.specter.impl.late_resolve(self__.arg7,dynamic_params62634);
var G__63985 = com.rpl.specter.impl.late_resolve(self__.arg8,dynamic_params62634);
var G__63986 = com.rpl.specter.impl.late_resolve(self__.arg9,dynamic_params62634);
var G__63987 = com.rpl.specter.impl.late_resolve(self__.arg10,dynamic_params62634);
var G__63988 = com.rpl.specter.impl.late_resolve(self__.arg11,dynamic_params62634);
var G__63989 = com.rpl.specter.impl.late_resolve(self__.arg12,dynamic_params62634);
var G__63990 = com.rpl.specter.impl.late_resolve(self__.arg13,dynamic_params62634);
var G__63991 = com.rpl.specter.impl.late_resolve(self__.arg14,dynamic_params62634);
var G__63992 = com.rpl.specter.impl.late_resolve(self__.arg15,dynamic_params62634);
var G__63993 = com.rpl.specter.impl.late_resolve(self__.arg16,dynamic_params62634);
var G__63994 = com.rpl.specter.impl.late_resolve(self__.arg17,dynamic_params62634);
var fexpr__63976 = com.rpl.specter.impl.late_resolve(self__.fn,dynamic_params62634);
return (fexpr__63976.cljs$core$IFn$_invoke$arity$18 ? fexpr__63976.cljs$core$IFn$_invoke$arity$18(G__63977,G__63978,G__63979,G__63980,G__63981,G__63982,G__63983,G__63984,G__63985,G__63986,G__63987,G__63988,G__63989,G__63990,G__63991,G__63992,G__63993,G__63994) : fexpr__63976.call(null,G__63977,G__63978,G__63979,G__63980,G__63981,G__63982,G__63983,G__63984,G__63985,G__63986,G__63987,G__63988,G__63989,G__63990,G__63991,G__63992,G__63993,G__63994));
}));

(com.rpl.specter.impl.LateFn18.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#com.rpl.specter.impl.LateFn18{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 19, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg7","arg7",932157509),self__.arg7],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg8","arg8",123916218),self__.arg8],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg9","arg9",-95117905),self__.arg9],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg10","arg10",-1230917517),self__.arg10],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg11","arg11",-379524070),self__.arg11],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg12","arg12",290681436),self__.arg12],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg13","arg13",1606275392),self__.arg13],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg14","arg14",-1870980778),self__.arg14],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg15","arg15",1451926677),self__.arg15],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg16","arg16",-445557546),self__.arg16],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg17","arg17",-1072183482),self__.arg17],null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn18.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__63958){
var self__ = this;
var G__63958__$1 = this;
return (new cljs.core.RecordIter((0),G__63958__$1,19,new cljs.core.PersistentVector(null, 19, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509),new cljs.core.Keyword(null,"arg8","arg8",123916218),new cljs.core.Keyword(null,"arg9","arg9",-95117905),new cljs.core.Keyword(null,"arg10","arg10",-1230917517),new cljs.core.Keyword(null,"arg11","arg11",-379524070),new cljs.core.Keyword(null,"arg12","arg12",290681436),new cljs.core.Keyword(null,"arg13","arg13",1606275392),new cljs.core.Keyword(null,"arg14","arg14",-1870980778),new cljs.core.Keyword(null,"arg15","arg15",1451926677),new cljs.core.Keyword(null,"arg16","arg16",-445557546),new cljs.core.Keyword(null,"arg17","arg17",-1072183482)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(com.rpl.specter.impl.LateFn18.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(com.rpl.specter.impl.LateFn18.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn18.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (19 + cljs.core.count(self__.__extmap));
}));

(com.rpl.specter.impl.LateFn18.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (295131237 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(com.rpl.specter.impl.LateFn18.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this63960,other63961){
var self__ = this;
var this63960__$1 = this;
return (((!((other63961 == null)))) && ((this63960__$1.constructor === other63961.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63960__$1.fn,other63961.fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63960__$1.arg0,other63961.arg0)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63960__$1.arg1,other63961.arg1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63960__$1.arg2,other63961.arg2)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63960__$1.arg3,other63961.arg3)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63960__$1.arg4,other63961.arg4)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63960__$1.arg5,other63961.arg5)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63960__$1.arg6,other63961.arg6)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63960__$1.arg7,other63961.arg7)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63960__$1.arg8,other63961.arg8)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63960__$1.arg9,other63961.arg9)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63960__$1.arg10,other63961.arg10)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63960__$1.arg11,other63961.arg11)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63960__$1.arg12,other63961.arg12)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63960__$1.arg13,other63961.arg13)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63960__$1.arg14,other63961.arg14)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63960__$1.arg15,other63961.arg15)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63960__$1.arg16,other63961.arg16)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63960__$1.arg17,other63961.arg17)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63960__$1.__extmap,other63961.__extmap)));
}));

(com.rpl.specter.impl.LateFn18.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 19, [new cljs.core.Keyword(null,"arg13","arg13",1606275392),null,new cljs.core.Keyword(null,"arg3","arg3",-1486822496),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"arg7","arg7",932157509),null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),null,new cljs.core.Keyword(null,"arg17","arg17",-1072183482),null,new cljs.core.Keyword(null,"arg6","arg6",-2052656438),null,new cljs.core.Keyword(null,"arg9","arg9",-95117905),null,new cljs.core.Keyword(null,"arg10","arg10",-1230917517),null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),null,new cljs.core.Keyword(null,"arg15","arg15",1451926677),null,new cljs.core.Keyword(null,"arg16","arg16",-445557546),null,new cljs.core.Keyword(null,"arg14","arg14",-1870980778),null,new cljs.core.Keyword(null,"arg5","arg5",-1648794215),null,new cljs.core.Keyword(null,"arg11","arg11",-379524070),null,new cljs.core.Keyword(null,"arg8","arg8",123916218),null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),null,new cljs.core.Keyword(null,"arg12","arg12",290681436),null,new cljs.core.Keyword(null,"arg1","arg1",951899358),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(com.rpl.specter.impl.LateFn18.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__63958){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__64041 = cljs.core.keyword_identical_QMARK_;
var expr__64042 = k__4388__auto__;
if(cljs.core.truth_((pred__64041.cljs$core$IFn$_invoke$arity$2 ? pred__64041.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__64042) : pred__64041.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__64042)))){
return (new com.rpl.specter.impl.LateFn18(G__63958,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__64041.cljs$core$IFn$_invoke$arity$2 ? pred__64041.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg0","arg0",1629842355),expr__64042) : pred__64041.call(null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),expr__64042)))){
return (new com.rpl.specter.impl.LateFn18(self__.fn,G__63958,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__64041.cljs$core$IFn$_invoke$arity$2 ? pred__64041.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg1","arg1",951899358),expr__64042) : pred__64041.call(null,new cljs.core.Keyword(null,"arg1","arg1",951899358),expr__64042)))){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,G__63958,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__64041.cljs$core$IFn$_invoke$arity$2 ? pred__64041.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg2","arg2",1729550917),expr__64042) : pred__64041.call(null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),expr__64042)))){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,G__63958,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__64041.cljs$core$IFn$_invoke$arity$2 ? pred__64041.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg3","arg3",-1486822496),expr__64042) : pred__64041.call(null,new cljs.core.Keyword(null,"arg3","arg3",-1486822496),expr__64042)))){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__63958,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__64041.cljs$core$IFn$_invoke$arity$2 ? pred__64041.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg4","arg4",-831640004),expr__64042) : pred__64041.call(null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),expr__64042)))){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,G__63958,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__64041.cljs$core$IFn$_invoke$arity$2 ? pred__64041.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg5","arg5",-1648794215),expr__64042) : pred__64041.call(null,new cljs.core.Keyword(null,"arg5","arg5",-1648794215),expr__64042)))){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,G__63958,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__64041.cljs$core$IFn$_invoke$arity$2 ? pred__64041.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg6","arg6",-2052656438),expr__64042) : pred__64041.call(null,new cljs.core.Keyword(null,"arg6","arg6",-2052656438),expr__64042)))){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,G__63958,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__64041.cljs$core$IFn$_invoke$arity$2 ? pred__64041.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg7","arg7",932157509),expr__64042) : pred__64041.call(null,new cljs.core.Keyword(null,"arg7","arg7",932157509),expr__64042)))){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,G__63958,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__64041.cljs$core$IFn$_invoke$arity$2 ? pred__64041.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg8","arg8",123916218),expr__64042) : pred__64041.call(null,new cljs.core.Keyword(null,"arg8","arg8",123916218),expr__64042)))){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,G__63958,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__64041.cljs$core$IFn$_invoke$arity$2 ? pred__64041.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg9","arg9",-95117905),expr__64042) : pred__64041.call(null,new cljs.core.Keyword(null,"arg9","arg9",-95117905),expr__64042)))){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,G__63958,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__64041.cljs$core$IFn$_invoke$arity$2 ? pred__64041.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg10","arg10",-1230917517),expr__64042) : pred__64041.call(null,new cljs.core.Keyword(null,"arg10","arg10",-1230917517),expr__64042)))){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,G__63958,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__64041.cljs$core$IFn$_invoke$arity$2 ? pred__64041.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg11","arg11",-379524070),expr__64042) : pred__64041.call(null,new cljs.core.Keyword(null,"arg11","arg11",-379524070),expr__64042)))){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,G__63958,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__64041.cljs$core$IFn$_invoke$arity$2 ? pred__64041.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg12","arg12",290681436),expr__64042) : pred__64041.call(null,new cljs.core.Keyword(null,"arg12","arg12",290681436),expr__64042)))){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,G__63958,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__64041.cljs$core$IFn$_invoke$arity$2 ? pred__64041.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg13","arg13",1606275392),expr__64042) : pred__64041.call(null,new cljs.core.Keyword(null,"arg13","arg13",1606275392),expr__64042)))){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,G__63958,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__64041.cljs$core$IFn$_invoke$arity$2 ? pred__64041.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg14","arg14",-1870980778),expr__64042) : pred__64041.call(null,new cljs.core.Keyword(null,"arg14","arg14",-1870980778),expr__64042)))){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,G__63958,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__64041.cljs$core$IFn$_invoke$arity$2 ? pred__64041.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg15","arg15",1451926677),expr__64042) : pred__64041.call(null,new cljs.core.Keyword(null,"arg15","arg15",1451926677),expr__64042)))){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,G__63958,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__64041.cljs$core$IFn$_invoke$arity$2 ? pred__64041.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg16","arg16",-445557546),expr__64042) : pred__64041.call(null,new cljs.core.Keyword(null,"arg16","arg16",-445557546),expr__64042)))){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,G__63958,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__64041.cljs$core$IFn$_invoke$arity$2 ? pred__64041.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg17","arg17",-1072183482),expr__64042) : pred__64041.call(null,new cljs.core.Keyword(null,"arg17","arg17",-1072183482),expr__64042)))){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,G__63958,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__63958),null));
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
}));

(com.rpl.specter.impl.LateFn18.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 19, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg7","arg7",932157509),self__.arg7,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg8","arg8",123916218),self__.arg8,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg9","arg9",-95117905),self__.arg9,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg10","arg10",-1230917517),self__.arg10,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg11","arg11",-379524070),self__.arg11,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg12","arg12",290681436),self__.arg12,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg13","arg13",1606275392),self__.arg13,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg14","arg14",-1870980778),self__.arg14,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg15","arg15",1451926677),self__.arg15,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg16","arg16",-445557546),self__.arg16,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg17","arg17",-1072183482),self__.arg17,null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn18.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__63958){
var self__ = this;
var this__4379__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,G__63958,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn18.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(com.rpl.specter.impl.LateFn18.getBasis = (function (){
return new cljs.core.PersistentVector(null, 19, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null),new cljs.core.Symbol(null,"arg2","arg2",-924884852,null),new cljs.core.Symbol(null,"arg3","arg3",153709031,null),new cljs.core.Symbol(null,"arg4","arg4",808891523,null),new cljs.core.Symbol(null,"arg5","arg5",-8262688,null),new cljs.core.Symbol(null,"arg6","arg6",-412124911,null),new cljs.core.Symbol(null,"arg7","arg7",-1722278260,null),new cljs.core.Symbol(null,"arg8","arg8",1764447745,null),new cljs.core.Symbol(null,"arg9","arg9",1545413622,null),new cljs.core.Symbol(null,"arg10","arg10",409614010,null),new cljs.core.Symbol(null,"arg11","arg11",1261007457,null),new cljs.core.Symbol(null,"arg12","arg12",1931212963,null),new cljs.core.Symbol(null,"arg13","arg13",-1048160377,null),new cljs.core.Symbol(null,"arg14","arg14",-230449251,null),new cljs.core.Symbol(null,"arg15","arg15",-1202509092,null),new cljs.core.Symbol(null,"arg16","arg16",1194973981,null),new cljs.core.Symbol(null,"arg17","arg17",568348045,null)], null);
}));

(com.rpl.specter.impl.LateFn18.cljs$lang$type = true);

(com.rpl.specter.impl.LateFn18.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/LateFn18",null,(1),null));
}));

(com.rpl.specter.impl.LateFn18.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"com.rpl.specter.impl/LateFn18");
}));

/**
 * Positional factory function for com.rpl.specter.impl/LateFn18.
 */
com.rpl.specter.impl.__GT_LateFn18 = (function com$rpl$specter$impl$__GT_LateFn18(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,arg14,arg15,arg16,arg17){
return (new com.rpl.specter.impl.LateFn18(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,arg14,arg15,arg16,arg17,null,null,null));
});

/**
 * Factory function for com.rpl.specter.impl/LateFn18, taking a map of keywords to field values.
 */
com.rpl.specter.impl.map__GT_LateFn18 = (function com$rpl$specter$impl$map__GT_LateFn18(G__63963){
var extmap__4419__auto__ = (function (){var G__64066 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__63963,new cljs.core.Keyword(null,"fn","fn",-1175266204),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509),new cljs.core.Keyword(null,"arg8","arg8",123916218),new cljs.core.Keyword(null,"arg9","arg9",-95117905),new cljs.core.Keyword(null,"arg10","arg10",-1230917517),new cljs.core.Keyword(null,"arg11","arg11",-379524070),new cljs.core.Keyword(null,"arg12","arg12",290681436),new cljs.core.Keyword(null,"arg13","arg13",1606275392),new cljs.core.Keyword(null,"arg14","arg14",-1870980778),new cljs.core.Keyword(null,"arg15","arg15",1451926677),new cljs.core.Keyword(null,"arg16","arg16",-445557546),new cljs.core.Keyword(null,"arg17","arg17",-1072183482)], 0));
if(cljs.core.record_QMARK_(G__63963)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__64066);
} else {
return G__64066;
}
})();
return (new com.rpl.specter.impl.LateFn18(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__63963),new cljs.core.Keyword(null,"arg0","arg0",1629842355).cljs$core$IFn$_invoke$arity$1(G__63963),new cljs.core.Keyword(null,"arg1","arg1",951899358).cljs$core$IFn$_invoke$arity$1(G__63963),new cljs.core.Keyword(null,"arg2","arg2",1729550917).cljs$core$IFn$_invoke$arity$1(G__63963),new cljs.core.Keyword(null,"arg3","arg3",-1486822496).cljs$core$IFn$_invoke$arity$1(G__63963),new cljs.core.Keyword(null,"arg4","arg4",-831640004).cljs$core$IFn$_invoke$arity$1(G__63963),new cljs.core.Keyword(null,"arg5","arg5",-1648794215).cljs$core$IFn$_invoke$arity$1(G__63963),new cljs.core.Keyword(null,"arg6","arg6",-2052656438).cljs$core$IFn$_invoke$arity$1(G__63963),new cljs.core.Keyword(null,"arg7","arg7",932157509).cljs$core$IFn$_invoke$arity$1(G__63963),new cljs.core.Keyword(null,"arg8","arg8",123916218).cljs$core$IFn$_invoke$arity$1(G__63963),new cljs.core.Keyword(null,"arg9","arg9",-95117905).cljs$core$IFn$_invoke$arity$1(G__63963),new cljs.core.Keyword(null,"arg10","arg10",-1230917517).cljs$core$IFn$_invoke$arity$1(G__63963),new cljs.core.Keyword(null,"arg11","arg11",-379524070).cljs$core$IFn$_invoke$arity$1(G__63963),new cljs.core.Keyword(null,"arg12","arg12",290681436).cljs$core$IFn$_invoke$arity$1(G__63963),new cljs.core.Keyword(null,"arg13","arg13",1606275392).cljs$core$IFn$_invoke$arity$1(G__63963),new cljs.core.Keyword(null,"arg14","arg14",-1870980778).cljs$core$IFn$_invoke$arity$1(G__63963),new cljs.core.Keyword(null,"arg15","arg15",1451926677).cljs$core$IFn$_invoke$arity$1(G__63963),new cljs.core.Keyword(null,"arg16","arg16",-445557546).cljs$core$IFn$_invoke$arity$1(G__63963),new cljs.core.Keyword(null,"arg17","arg17",-1072183482).cljs$core$IFn$_invoke$arity$1(G__63963),null,cljs.core.not_empty(extmap__4419__auto__),null));
});



/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {com.rpl.specter.impl.LateResolve}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
com.rpl.specter.impl.LateFn19 = (function (fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,arg14,arg15,arg16,arg17,arg18,__meta,__extmap,__hash){
this.fn = fn;
this.arg0 = arg0;
this.arg1 = arg1;
this.arg2 = arg2;
this.arg3 = arg3;
this.arg4 = arg4;
this.arg5 = arg5;
this.arg6 = arg6;
this.arg7 = arg7;
this.arg8 = arg8;
this.arg9 = arg9;
this.arg10 = arg10;
this.arg11 = arg11;
this.arg12 = arg12;
this.arg13 = arg13;
this.arg14 = arg14;
this.arg15 = arg15;
this.arg16 = arg16;
this.arg17 = arg17;
this.arg18 = arg18;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(com.rpl.specter.impl.LateFn19.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(com.rpl.specter.impl.LateFn19.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k64079,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__64088 = k64079;
var G__64088__$1 = (((G__64088 instanceof cljs.core.Keyword))?G__64088.fqn:null);
switch (G__64088__$1) {
case "fn":
return self__.fn;

break;
case "arg0":
return self__.arg0;

break;
case "arg1":
return self__.arg1;

break;
case "arg2":
return self__.arg2;

break;
case "arg3":
return self__.arg3;

break;
case "arg4":
return self__.arg4;

break;
case "arg5":
return self__.arg5;

break;
case "arg6":
return self__.arg6;

break;
case "arg7":
return self__.arg7;

break;
case "arg8":
return self__.arg8;

break;
case "arg9":
return self__.arg9;

break;
case "arg10":
return self__.arg10;

break;
case "arg11":
return self__.arg11;

break;
case "arg12":
return self__.arg12;

break;
case "arg13":
return self__.arg13;

break;
case "arg14":
return self__.arg14;

break;
case "arg15":
return self__.arg15;

break;
case "arg16":
return self__.arg16;

break;
case "arg17":
return self__.arg17;

break;
case "arg18":
return self__.arg18;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k64079,else__4383__auto__);

}
}));

(com.rpl.specter.impl.LateFn19.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__64090){
var vec__64091 = p__64090;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64091,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64091,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(com.rpl.specter.impl.LateFn19.prototype.com$rpl$specter$impl$LateResolve$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.impl.LateFn19.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__59310__auto__,dynamic_params62635){
var self__ = this;
var this__59310__auto____$1 = this;
var G__64100 = com.rpl.specter.impl.late_resolve(self__.arg0,dynamic_params62635);
var G__64101 = com.rpl.specter.impl.late_resolve(self__.arg1,dynamic_params62635);
var G__64102 = com.rpl.specter.impl.late_resolve(self__.arg2,dynamic_params62635);
var G__64103 = com.rpl.specter.impl.late_resolve(self__.arg3,dynamic_params62635);
var G__64104 = com.rpl.specter.impl.late_resolve(self__.arg4,dynamic_params62635);
var G__64105 = com.rpl.specter.impl.late_resolve(self__.arg5,dynamic_params62635);
var G__64106 = com.rpl.specter.impl.late_resolve(self__.arg6,dynamic_params62635);
var G__64107 = com.rpl.specter.impl.late_resolve(self__.arg7,dynamic_params62635);
var G__64108 = com.rpl.specter.impl.late_resolve(self__.arg8,dynamic_params62635);
var G__64109 = com.rpl.specter.impl.late_resolve(self__.arg9,dynamic_params62635);
var G__64110 = com.rpl.specter.impl.late_resolve(self__.arg10,dynamic_params62635);
var G__64111 = com.rpl.specter.impl.late_resolve(self__.arg11,dynamic_params62635);
var G__64112 = com.rpl.specter.impl.late_resolve(self__.arg12,dynamic_params62635);
var G__64113 = com.rpl.specter.impl.late_resolve(self__.arg13,dynamic_params62635);
var G__64114 = com.rpl.specter.impl.late_resolve(self__.arg14,dynamic_params62635);
var G__64115 = com.rpl.specter.impl.late_resolve(self__.arg15,dynamic_params62635);
var G__64116 = com.rpl.specter.impl.late_resolve(self__.arg16,dynamic_params62635);
var G__64117 = com.rpl.specter.impl.late_resolve(self__.arg17,dynamic_params62635);
var G__64118 = com.rpl.specter.impl.late_resolve(self__.arg18,dynamic_params62635);
var fexpr__64098 = com.rpl.specter.impl.late_resolve(self__.fn,dynamic_params62635);
return (fexpr__64098.cljs$core$IFn$_invoke$arity$19 ? fexpr__64098.cljs$core$IFn$_invoke$arity$19(G__64100,G__64101,G__64102,G__64103,G__64104,G__64105,G__64106,G__64107,G__64108,G__64109,G__64110,G__64111,G__64112,G__64113,G__64114,G__64115,G__64116,G__64117,G__64118) : fexpr__64098.call(null,G__64100,G__64101,G__64102,G__64103,G__64104,G__64105,G__64106,G__64107,G__64108,G__64109,G__64110,G__64111,G__64112,G__64113,G__64114,G__64115,G__64116,G__64117,G__64118));
}));

(com.rpl.specter.impl.LateFn19.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#com.rpl.specter.impl.LateFn19{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg7","arg7",932157509),self__.arg7],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg8","arg8",123916218),self__.arg8],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg9","arg9",-95117905),self__.arg9],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg10","arg10",-1230917517),self__.arg10],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg11","arg11",-379524070),self__.arg11],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg12","arg12",290681436),self__.arg12],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg13","arg13",1606275392),self__.arg13],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg14","arg14",-1870980778),self__.arg14],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg15","arg15",1451926677),self__.arg15],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg16","arg16",-445557546),self__.arg16],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg17","arg17",-1072183482),self__.arg17],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg18","arg18",1450507352),self__.arg18],null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn19.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__64078){
var self__ = this;
var G__64078__$1 = this;
return (new cljs.core.RecordIter((0),G__64078__$1,20,new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509),new cljs.core.Keyword(null,"arg8","arg8",123916218),new cljs.core.Keyword(null,"arg9","arg9",-95117905),new cljs.core.Keyword(null,"arg10","arg10",-1230917517),new cljs.core.Keyword(null,"arg11","arg11",-379524070),new cljs.core.Keyword(null,"arg12","arg12",290681436),new cljs.core.Keyword(null,"arg13","arg13",1606275392),new cljs.core.Keyword(null,"arg14","arg14",-1870980778),new cljs.core.Keyword(null,"arg15","arg15",1451926677),new cljs.core.Keyword(null,"arg16","arg16",-445557546),new cljs.core.Keyword(null,"arg17","arg17",-1072183482),new cljs.core.Keyword(null,"arg18","arg18",1450507352)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(com.rpl.specter.impl.LateFn19.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(com.rpl.specter.impl.LateFn19.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn19.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (20 + cljs.core.count(self__.__extmap));
}));

(com.rpl.specter.impl.LateFn19.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (151103363 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(com.rpl.specter.impl.LateFn19.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this64080,other64081){
var self__ = this;
var this64080__$1 = this;
return (((!((other64081 == null)))) && ((this64080__$1.constructor === other64081.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this64080__$1.fn,other64081.fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this64080__$1.arg0,other64081.arg0)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this64080__$1.arg1,other64081.arg1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this64080__$1.arg2,other64081.arg2)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this64080__$1.arg3,other64081.arg3)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this64080__$1.arg4,other64081.arg4)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this64080__$1.arg5,other64081.arg5)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this64080__$1.arg6,other64081.arg6)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this64080__$1.arg7,other64081.arg7)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this64080__$1.arg8,other64081.arg8)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this64080__$1.arg9,other64081.arg9)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this64080__$1.arg10,other64081.arg10)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this64080__$1.arg11,other64081.arg11)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this64080__$1.arg12,other64081.arg12)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this64080__$1.arg13,other64081.arg13)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this64080__$1.arg14,other64081.arg14)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this64080__$1.arg15,other64081.arg15)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this64080__$1.arg16,other64081.arg16)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this64080__$1.arg17,other64081.arg17)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this64080__$1.arg18,other64081.arg18)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this64080__$1.__extmap,other64081.__extmap)));
}));

(com.rpl.specter.impl.LateFn19.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 20, [new cljs.core.Keyword(null,"arg13","arg13",1606275392),null,new cljs.core.Keyword(null,"arg3","arg3",-1486822496),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"arg7","arg7",932157509),null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),null,new cljs.core.Keyword(null,"arg17","arg17",-1072183482),null,new cljs.core.Keyword(null,"arg6","arg6",-2052656438),null,new cljs.core.Keyword(null,"arg9","arg9",-95117905),null,new cljs.core.Keyword(null,"arg10","arg10",-1230917517),null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),null,new cljs.core.Keyword(null,"arg15","arg15",1451926677),null,new cljs.core.Keyword(null,"arg16","arg16",-445557546),null,new cljs.core.Keyword(null,"arg14","arg14",-1870980778),null,new cljs.core.Keyword(null,"arg18","arg18",1450507352),null,new cljs.core.Keyword(null,"arg5","arg5",-1648794215),null,new cljs.core.Keyword(null,"arg11","arg11",-379524070),null,new cljs.core.Keyword(null,"arg8","arg8",123916218),null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),null,new cljs.core.Keyword(null,"arg12","arg12",290681436),null,new cljs.core.Keyword(null,"arg1","arg1",951899358),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(com.rpl.specter.impl.LateFn19.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__64078){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__64143 = cljs.core.keyword_identical_QMARK_;
var expr__64144 = k__4388__auto__;
if(cljs.core.truth_((pred__64143.cljs$core$IFn$_invoke$arity$2 ? pred__64143.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__64144) : pred__64143.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__64144)))){
return (new com.rpl.specter.impl.LateFn19(G__64078,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__64143.cljs$core$IFn$_invoke$arity$2 ? pred__64143.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg0","arg0",1629842355),expr__64144) : pred__64143.call(null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),expr__64144)))){
return (new com.rpl.specter.impl.LateFn19(self__.fn,G__64078,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__64143.cljs$core$IFn$_invoke$arity$2 ? pred__64143.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg1","arg1",951899358),expr__64144) : pred__64143.call(null,new cljs.core.Keyword(null,"arg1","arg1",951899358),expr__64144)))){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,G__64078,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__64143.cljs$core$IFn$_invoke$arity$2 ? pred__64143.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg2","arg2",1729550917),expr__64144) : pred__64143.call(null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),expr__64144)))){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,G__64078,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__64143.cljs$core$IFn$_invoke$arity$2 ? pred__64143.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg3","arg3",-1486822496),expr__64144) : pred__64143.call(null,new cljs.core.Keyword(null,"arg3","arg3",-1486822496),expr__64144)))){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__64078,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__64143.cljs$core$IFn$_invoke$arity$2 ? pred__64143.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg4","arg4",-831640004),expr__64144) : pred__64143.call(null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),expr__64144)))){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,G__64078,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__64143.cljs$core$IFn$_invoke$arity$2 ? pred__64143.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg5","arg5",-1648794215),expr__64144) : pred__64143.call(null,new cljs.core.Keyword(null,"arg5","arg5",-1648794215),expr__64144)))){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,G__64078,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__64143.cljs$core$IFn$_invoke$arity$2 ? pred__64143.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg6","arg6",-2052656438),expr__64144) : pred__64143.call(null,new cljs.core.Keyword(null,"arg6","arg6",-2052656438),expr__64144)))){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,G__64078,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__64143.cljs$core$IFn$_invoke$arity$2 ? pred__64143.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg7","arg7",932157509),expr__64144) : pred__64143.call(null,new cljs.core.Keyword(null,"arg7","arg7",932157509),expr__64144)))){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,G__64078,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__64143.cljs$core$IFn$_invoke$arity$2 ? pred__64143.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg8","arg8",123916218),expr__64144) : pred__64143.call(null,new cljs.core.Keyword(null,"arg8","arg8",123916218),expr__64144)))){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,G__64078,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__64143.cljs$core$IFn$_invoke$arity$2 ? pred__64143.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg9","arg9",-95117905),expr__64144) : pred__64143.call(null,new cljs.core.Keyword(null,"arg9","arg9",-95117905),expr__64144)))){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,G__64078,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__64143.cljs$core$IFn$_invoke$arity$2 ? pred__64143.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg10","arg10",-1230917517),expr__64144) : pred__64143.call(null,new cljs.core.Keyword(null,"arg10","arg10",-1230917517),expr__64144)))){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,G__64078,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__64143.cljs$core$IFn$_invoke$arity$2 ? pred__64143.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg11","arg11",-379524070),expr__64144) : pred__64143.call(null,new cljs.core.Keyword(null,"arg11","arg11",-379524070),expr__64144)))){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,G__64078,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__64143.cljs$core$IFn$_invoke$arity$2 ? pred__64143.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg12","arg12",290681436),expr__64144) : pred__64143.call(null,new cljs.core.Keyword(null,"arg12","arg12",290681436),expr__64144)))){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,G__64078,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__64143.cljs$core$IFn$_invoke$arity$2 ? pred__64143.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg13","arg13",1606275392),expr__64144) : pred__64143.call(null,new cljs.core.Keyword(null,"arg13","arg13",1606275392),expr__64144)))){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,G__64078,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__64143.cljs$core$IFn$_invoke$arity$2 ? pred__64143.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg14","arg14",-1870980778),expr__64144) : pred__64143.call(null,new cljs.core.Keyword(null,"arg14","arg14",-1870980778),expr__64144)))){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,G__64078,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__64143.cljs$core$IFn$_invoke$arity$2 ? pred__64143.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg15","arg15",1451926677),expr__64144) : pred__64143.call(null,new cljs.core.Keyword(null,"arg15","arg15",1451926677),expr__64144)))){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,G__64078,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__64143.cljs$core$IFn$_invoke$arity$2 ? pred__64143.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg16","arg16",-445557546),expr__64144) : pred__64143.call(null,new cljs.core.Keyword(null,"arg16","arg16",-445557546),expr__64144)))){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,G__64078,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__64143.cljs$core$IFn$_invoke$arity$2 ? pred__64143.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg17","arg17",-1072183482),expr__64144) : pred__64143.call(null,new cljs.core.Keyword(null,"arg17","arg17",-1072183482),expr__64144)))){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,G__64078,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__64143.cljs$core$IFn$_invoke$arity$2 ? pred__64143.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg18","arg18",1450507352),expr__64144) : pred__64143.call(null,new cljs.core.Keyword(null,"arg18","arg18",1450507352),expr__64144)))){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,G__64078,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__64078),null));
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
}));

(com.rpl.specter.impl.LateFn19.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg7","arg7",932157509),self__.arg7,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg8","arg8",123916218),self__.arg8,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg9","arg9",-95117905),self__.arg9,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg10","arg10",-1230917517),self__.arg10,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg11","arg11",-379524070),self__.arg11,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg12","arg12",290681436),self__.arg12,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg13","arg13",1606275392),self__.arg13,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg14","arg14",-1870980778),self__.arg14,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg15","arg15",1451926677),self__.arg15,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg16","arg16",-445557546),self__.arg16,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg17","arg17",-1072183482),self__.arg17,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg18","arg18",1450507352),self__.arg18,null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn19.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__64078){
var self__ = this;
var this__4379__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,G__64078,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn19.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(com.rpl.specter.impl.LateFn19.getBasis = (function (){
return new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null),new cljs.core.Symbol(null,"arg2","arg2",-924884852,null),new cljs.core.Symbol(null,"arg3","arg3",153709031,null),new cljs.core.Symbol(null,"arg4","arg4",808891523,null),new cljs.core.Symbol(null,"arg5","arg5",-8262688,null),new cljs.core.Symbol(null,"arg6","arg6",-412124911,null),new cljs.core.Symbol(null,"arg7","arg7",-1722278260,null),new cljs.core.Symbol(null,"arg8","arg8",1764447745,null),new cljs.core.Symbol(null,"arg9","arg9",1545413622,null),new cljs.core.Symbol(null,"arg10","arg10",409614010,null),new cljs.core.Symbol(null,"arg11","arg11",1261007457,null),new cljs.core.Symbol(null,"arg12","arg12",1931212963,null),new cljs.core.Symbol(null,"arg13","arg13",-1048160377,null),new cljs.core.Symbol(null,"arg14","arg14",-230449251,null),new cljs.core.Symbol(null,"arg15","arg15",-1202509092,null),new cljs.core.Symbol(null,"arg16","arg16",1194973981,null),new cljs.core.Symbol(null,"arg17","arg17",568348045,null),new cljs.core.Symbol(null,"arg18","arg18",-1203928417,null)], null);
}));

(com.rpl.specter.impl.LateFn19.cljs$lang$type = true);

(com.rpl.specter.impl.LateFn19.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/LateFn19",null,(1),null));
}));

(com.rpl.specter.impl.LateFn19.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"com.rpl.specter.impl/LateFn19");
}));

/**
 * Positional factory function for com.rpl.specter.impl/LateFn19.
 */
com.rpl.specter.impl.__GT_LateFn19 = (function com$rpl$specter$impl$__GT_LateFn19(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,arg14,arg15,arg16,arg17,arg18){
return (new com.rpl.specter.impl.LateFn19(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,arg14,arg15,arg16,arg17,arg18,null,null,null));
});

/**
 * Factory function for com.rpl.specter.impl/LateFn19, taking a map of keywords to field values.
 */
com.rpl.specter.impl.map__GT_LateFn19 = (function com$rpl$specter$impl$map__GT_LateFn19(G__64083){
var extmap__4419__auto__ = (function (){var G__64175 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__64083,new cljs.core.Keyword(null,"fn","fn",-1175266204),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509),new cljs.core.Keyword(null,"arg8","arg8",123916218),new cljs.core.Keyword(null,"arg9","arg9",-95117905),new cljs.core.Keyword(null,"arg10","arg10",-1230917517),new cljs.core.Keyword(null,"arg11","arg11",-379524070),new cljs.core.Keyword(null,"arg12","arg12",290681436),new cljs.core.Keyword(null,"arg13","arg13",1606275392),new cljs.core.Keyword(null,"arg14","arg14",-1870980778),new cljs.core.Keyword(null,"arg15","arg15",1451926677),new cljs.core.Keyword(null,"arg16","arg16",-445557546),new cljs.core.Keyword(null,"arg17","arg17",-1072183482),new cljs.core.Keyword(null,"arg18","arg18",1450507352)], 0));
if(cljs.core.record_QMARK_(G__64083)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__64175);
} else {
return G__64175;
}
})();
return (new com.rpl.specter.impl.LateFn19(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__64083),new cljs.core.Keyword(null,"arg0","arg0",1629842355).cljs$core$IFn$_invoke$arity$1(G__64083),new cljs.core.Keyword(null,"arg1","arg1",951899358).cljs$core$IFn$_invoke$arity$1(G__64083),new cljs.core.Keyword(null,"arg2","arg2",1729550917).cljs$core$IFn$_invoke$arity$1(G__64083),new cljs.core.Keyword(null,"arg3","arg3",-1486822496).cljs$core$IFn$_invoke$arity$1(G__64083),new cljs.core.Keyword(null,"arg4","arg4",-831640004).cljs$core$IFn$_invoke$arity$1(G__64083),new cljs.core.Keyword(null,"arg5","arg5",-1648794215).cljs$core$IFn$_invoke$arity$1(G__64083),new cljs.core.Keyword(null,"arg6","arg6",-2052656438).cljs$core$IFn$_invoke$arity$1(G__64083),new cljs.core.Keyword(null,"arg7","arg7",932157509).cljs$core$IFn$_invoke$arity$1(G__64083),new cljs.core.Keyword(null,"arg8","arg8",123916218).cljs$core$IFn$_invoke$arity$1(G__64083),new cljs.core.Keyword(null,"arg9","arg9",-95117905).cljs$core$IFn$_invoke$arity$1(G__64083),new cljs.core.Keyword(null,"arg10","arg10",-1230917517).cljs$core$IFn$_invoke$arity$1(G__64083),new cljs.core.Keyword(null,"arg11","arg11",-379524070).cljs$core$IFn$_invoke$arity$1(G__64083),new cljs.core.Keyword(null,"arg12","arg12",290681436).cljs$core$IFn$_invoke$arity$1(G__64083),new cljs.core.Keyword(null,"arg13","arg13",1606275392).cljs$core$IFn$_invoke$arity$1(G__64083),new cljs.core.Keyword(null,"arg14","arg14",-1870980778).cljs$core$IFn$_invoke$arity$1(G__64083),new cljs.core.Keyword(null,"arg15","arg15",1451926677).cljs$core$IFn$_invoke$arity$1(G__64083),new cljs.core.Keyword(null,"arg16","arg16",-445557546).cljs$core$IFn$_invoke$arity$1(G__64083),new cljs.core.Keyword(null,"arg17","arg17",-1072183482).cljs$core$IFn$_invoke$arity$1(G__64083),new cljs.core.Keyword(null,"arg18","arg18",1450507352).cljs$core$IFn$_invoke$arity$1(G__64083),null,cljs.core.not_empty(extmap__4419__auto__),null));
});


com.rpl.specter.impl.late_fn = (function com$rpl$specter$impl$late_fn(afn64176,args64177){
var G__64183 = cljs.core.count(args64177);
switch (G__64183) {
case (0):
return com.rpl.specter.impl.__GT_LateFn0(afn64176);

break;
case (1):
return com.rpl.specter.impl.__GT_LateFn1(afn64176,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args64177,(0)));

break;
case (2):
return com.rpl.specter.impl.__GT_LateFn2(afn64176,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args64177,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args64177,(1)));

break;
case (3):
return com.rpl.specter.impl.__GT_LateFn3(afn64176,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args64177,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args64177,(1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args64177,(2)));

break;
case (4):
return com.rpl.specter.impl.__GT_LateFn4(afn64176,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args64177,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args64177,(1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args64177,(2)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args64177,(3)));

break;
case (5):
return com.rpl.specter.impl.__GT_LateFn5(afn64176,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args64177,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args64177,(1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args64177,(2)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args64177,(3)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args64177,(4)));

break;
case (6):
return com.rpl.specter.impl.__GT_LateFn6(afn64176,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args64177,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args64177,(1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args64177,(2)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args64177,(3)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args64177,(4)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args64177,(5)));

break;
case (7):
return com.rpl.specter.impl.__GT_LateFn7(afn64176,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args64177,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args64177,(1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args64177,(2)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args64177,(3)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args64177,(4)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args64177,(5)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args64177,(6)));

break;
case (8):
return com.rpl.specter.impl.__GT_LateFn8(afn64176,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args64177,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args64177,(1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args64177,(2)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args64177,(3)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args64177,(4)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args64177,(5)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args64177,(6)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args64177,(7)));

break;
case (9):
return com.rpl.specter.impl.__GT_LateFn9(afn64176,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args64177,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args64177,(1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args64177,(2)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args64177,(3)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args64177,(4)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args64177,(5)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args64177,(6)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args64177,(7)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args64177,(8)));

break;
case (10):
return com.rpl.specter.impl.__GT_LateFn10(afn64176,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args64177,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args64177,(1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args64177,(2)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args64177,(3)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args64177,(4)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args64177,(5)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args64177,(6)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args64177,(7)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args64177,(8)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args64177,(9)));

break;
case (11):
return com.rpl.specter.impl.__GT_LateFn11(afn64176,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args64177,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args64177,(1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args64177,(2)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args64177,(3)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args64177,(4)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args64177,(5)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args64177,(6)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args64177,(7)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args64177,(8)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args64177,(9)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args64177,(10)));

break;
case (12):
return com.rpl.specter.impl.__GT_LateFn12(afn64176,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args64177,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args64177,(1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args64177,(2)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args64177,(3)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args64177,(4)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args64177,(5)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args64177,(6)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args64177,(7)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args64177,(8)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args64177,(9)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args64177,(10)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args64177,(11)));

break;
case (13):
return com.rpl.specter.impl.__GT_LateFn13(afn64176,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args64177,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args64177,(1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args64177,(2)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args64177,(3)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args64177,(4)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args64177,(5)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args64177,(6)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args64177,(7)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args64177,(8)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args64177,(9)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args64177,(10)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args64177,(11)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args64177,(12)));

break;
case (14):
return com.rpl.specter.impl.__GT_LateFn14(afn64176,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args64177,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args64177,(1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args64177,(2)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args64177,(3)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args64177,(4)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args64177,(5)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args64177,(6)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args64177,(7)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args64177,(8)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args64177,(9)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args64177,(10)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args64177,(11)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args64177,(12)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args64177,(13)));

break;
case (15):
return com.rpl.specter.impl.__GT_LateFn15(afn64176,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args64177,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args64177,(1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args64177,(2)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args64177,(3)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args64177,(4)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args64177,(5)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args64177,(6)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args64177,(7)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args64177,(8)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args64177,(9)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args64177,(10)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args64177,(11)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args64177,(12)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args64177,(13)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args64177,(14)));

break;
case (16):
return com.rpl.specter.impl.__GT_LateFn16(afn64176,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args64177,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args64177,(1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args64177,(2)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args64177,(3)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args64177,(4)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args64177,(5)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args64177,(6)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args64177,(7)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args64177,(8)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args64177,(9)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args64177,(10)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args64177,(11)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args64177,(12)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args64177,(13)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args64177,(14)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args64177,(15)));

break;
case (17):
return com.rpl.specter.impl.__GT_LateFn17(afn64176,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args64177,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args64177,(1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args64177,(2)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args64177,(3)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args64177,(4)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args64177,(5)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args64177,(6)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args64177,(7)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args64177,(8)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args64177,(9)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args64177,(10)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args64177,(11)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args64177,(12)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args64177,(13)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args64177,(14)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args64177,(15)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args64177,(16)));

break;
case (18):
return com.rpl.specter.impl.__GT_LateFn18(afn64176,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args64177,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args64177,(1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args64177,(2)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args64177,(3)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args64177,(4)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args64177,(5)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args64177,(6)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args64177,(7)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args64177,(8)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args64177,(9)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args64177,(10)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args64177,(11)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args64177,(12)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args64177,(13)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args64177,(14)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args64177,(15)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args64177,(16)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args64177,(17)));

break;
default:
return com.rpl.specter.impl.throw_illegal_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Cannot have late function with more than 18 args"], 0));

}
});
com.rpl.specter.impl.static_fn_code = (function com$rpl$specter$impl$static_fn_code(afn,args){
return com.rpl.specter.impl.late_fn(com.rpl.specter.impl.__GT_StaticParam(afn),args);
});
com.rpl.specter.impl.dynamic_fn_code = (function com$rpl$specter$impl$dynamic_fn_code(afn,args){
return com.rpl.specter.impl.late_fn(afn,args);
});
com.rpl.specter.impl.dynamic_val_code = (function com$rpl$specter$impl$dynamic_val_code(code,possible_params){
var vec__64204 = cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2((function (i,v){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,code)){
return i;
} else {
return null;
}
}),possible_params);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64204,(0),null);
if((i == null)){
com.rpl.specter.impl.throw_illegal_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Could not find ",code," in possible params ",possible_params], 0));
} else {
}

return com.rpl.specter.impl.maybe_direct_nav(com.rpl.specter.impl.__GT_LocalParam(i),com.rpl.specter.impl.direct_nav_QMARK_(code));
});
com.rpl.specter.impl.static_val_code = (function com$rpl$specter$impl$static_val_code(o){
return com.rpl.specter.impl.maybe_direct_nav(com.rpl.specter.impl.__GT_StaticParam(o),com.rpl.specter.impl.direct_nav_QMARK_(o));
});
com.rpl.specter.impl.dynamic__GT_code = (function com$rpl$specter$impl$dynamic__GT_code(o){
return com.rpl.specter.impl.walk_until(com.rpl.specter.impl.dynamic_param_QMARK_,new cljs.core.Keyword(null,"code","code",1586293142),o);
});
com.rpl.specter.impl.resolve_arg_code = (function com$rpl$specter$impl$resolve_arg_code(o,possible_params){
if((o instanceof com.rpl.specter.impl.DynamicFunction)){
var op = (function (){var G__64211 = o.op;
var G__64212 = possible_params;
return (com.rpl.specter.impl.resolve_arg_code.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.impl.resolve_arg_code.cljs$core$IFn$_invoke$arity$2(G__64211,G__64212) : com.rpl.specter.impl.resolve_arg_code.call(null,G__64211,G__64212));
})();
var params = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__64207_SHARP_){
return (com.rpl.specter.impl.resolve_arg_code.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.impl.resolve_arg_code.cljs$core$IFn$_invoke$arity$2(p1__64207_SHARP_,possible_params) : com.rpl.specter.impl.resolve_arg_code.call(null,p1__64207_SHARP_,possible_params));
}),o.params);
return com.rpl.specter.impl.maybe_direct_nav(com.rpl.specter.impl.dynamic_fn_code(com.rpl.specter.impl.original_obj(op),params),com.rpl.specter.impl.direct_nav_QMARK_(o.op));
} else {
if((o instanceof com.rpl.specter.impl.DynamicVal)){
return com.rpl.specter.impl.dynamic_val_code(o.code,possible_params);
} else {
if((o instanceof com.rpl.specter.impl.DynamicPath)){
return (com.rpl.specter.impl.resolve_nav_code.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.impl.resolve_nav_code.cljs$core$IFn$_invoke$arity$2(o,possible_params) : com.rpl.specter.impl.resolve_nav_code.call(null,o,possible_params));
} else {
if((com.rpl.specter.impl.NONE === com.rpl.specter.impl.walk_select(com.rpl.specter.impl.dynamic_param_QMARK_,cljs.core.identity,o))){
return com.rpl.specter.impl.static_val_code(o);
} else {
var G__64218 = com.rpl.specter.impl.__GT_DynamicVal(com.rpl.specter.impl.dynamic__GT_code(o));
var G__64219 = possible_params;
return (com.rpl.specter.impl.resolve_arg_code.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.impl.resolve_arg_code.cljs$core$IFn$_invoke$arity$2(G__64218,G__64219) : com.rpl.specter.impl.resolve_arg_code.call(null,G__64218,G__64219));
}

}
}
}
});
com.rpl.specter.impl.resolve_nav_code = (function com$rpl$specter$impl$resolve_nav_code(o,possible_params){
if((o instanceof com.rpl.specter.impl.DynamicPath)){
var path = o.path;
if(cljs.core.sequential_QMARK_(path)){
var resolved = cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__64221_SHARP_){
return (com.rpl.specter.impl.resolve_nav_code.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.impl.resolve_nav_code.cljs$core$IFn$_invoke$arity$2(p1__64221_SHARP_,possible_params) : com.rpl.specter.impl.resolve_nav_code.call(null,p1__64221_SHARP_,possible_params));
}),path));
if(cljs.core.empty_QMARK_(resolved)){
return com.rpl.specter.impl.static_val_code(com.rpl.specter.impl.STAY_STAR_);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(resolved))){
return cljs.core.first(resolved);
} else {
return com.rpl.specter.impl.static_fn_code(com.rpl.specter.impl.comp_navs,resolved);

}
}
} else {
return (com.rpl.specter.impl.resolve_nav_code.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.impl.resolve_nav_code.cljs$core$IFn$_invoke$arity$2(path,possible_params) : com.rpl.specter.impl.resolve_nav_code.call(null,path,possible_params));
}
} else {
if((o instanceof com.rpl.specter.impl.DynamicVal)){
var code = o.code;
var d = com.rpl.specter.impl.dynamic_val_code(code,possible_params);
if(cljs.core.truth_(com.rpl.specter.impl.direct_nav_QMARK_(code))){
return d;
} else {
if(((cljs.core.set_QMARK_(code)) || (((com.rpl.specter.impl.fn_invocation_QMARK_(code)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),cljs.core.first(code))))))){
return com.rpl.specter.impl.static_fn_code(com.rpl.specter.impl.pred_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [d], null));
} else {
return com.rpl.specter.impl.static_fn_code(com.rpl.specter.impl.coerce_nav,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [d], null));

}
}
} else {
if((o instanceof com.rpl.specter.impl.DynamicFunction)){
var res = com.rpl.specter.impl.resolve_arg_code(o,possible_params);
if(cljs.core.truth_(com.rpl.specter.impl.direct_nav_QMARK_(res))){
return res;
} else {
return com.rpl.specter.impl.static_fn_code(com.rpl.specter.impl.coerce_nav,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
}
} else {
return com.rpl.specter.impl.static_val_code(com.rpl.specter.impl.coerce_nav(o));

}
}
}
});
com.rpl.specter.impl.used_locals = (function com$rpl$specter$impl$used_locals(locals_set,form){
var used_locals_cell = com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
clojure.walk.postwalk((function (e){
if(cljs.core.contains_QMARK_(locals_set,e)){
return com.rpl.specter.impl.update_cell_BANG_(used_locals_cell,(function (p1__64231_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__64231_SHARP_,e);
}));
} else {
return e;
}
}),form);

return com.rpl.specter.impl.get_cell(used_locals_cell);
});
com.rpl.specter.impl._STAR_DEBUG_INLINE_CACHING_STAR_ = false;
com.rpl.specter.impl.mk_fn_name_strs = (function com$rpl$specter$impl$mk_fn_name_strs(o){
return clojure.walk.postwalk((function (e){
if(cljs.core.fn_QMARK_(e)){
return cljs.core.re_find(/ .*/,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0)));
} else {
return e;
}
}),o);
});
com.rpl.specter.impl._STAR_path_compile_files_STAR_ = false;
com.rpl.specter.impl.mk_dynamic_path_maker = (function com$rpl$specter$impl$mk_dynamic_path_maker(resolved_code,ns_str,used_locals_list,possible_params){
if(cljs.core.truth_(com.rpl.specter.impl._STAR_DEBUG_INLINE_CACHING_STAR_)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Possible params:"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([possible_params], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["\nProduced dynamic object:"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([com.rpl.specter.impl.mk_fn_name_strs(resolved_code)], 0));

cljs.core.println();
} else {
}

return (function (dynamic_params){
return com.rpl.specter.impl.late_resolve(resolved_code,dynamic_params);
});
});
com.rpl.specter.impl.magic_precompilation = (function com$rpl$specter$impl$magic_precompilation(path,ns_str,used_locals_list,possible_params){
var magic_path = com.rpl.specter.impl.static_combine.cljs$core$IFn$_invoke$arity$1(com.rpl.specter.impl.magic_precompilation_STAR_(path));
if(cljs.core.truth_(com.rpl.specter.impl._STAR_DEBUG_INLINE_CACHING_STAR_)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Inline caching debug information"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["--------------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Input path:",path,"\n"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Processed path:",magic_path,"\n"], 0));
} else {
}

if(com.rpl.specter.impl.rich_nav_QMARK_(magic_path)){
if(cljs.core.truth_(com.rpl.specter.impl._STAR_DEBUG_INLINE_CACHING_STAR_)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Static result:",magic_path], 0));
} else {
}

return com.rpl.specter.impl.__GT_CachedPathInfo(false,magic_path);
} else {
var maker = com.rpl.specter.impl.mk_dynamic_path_maker(com.rpl.specter.impl.resolve_nav_code(com.rpl.specter.impl.__GT_DynamicPath(magic_path),possible_params),ns_str,used_locals_list,possible_params);
return com.rpl.specter.impl.__GT_CachedPathInfo(true,maker);
}
});
com.rpl.specter.impl.compiled_setval_STAR_ = (function com$rpl$specter$impl$compiled_setval_STAR_(path,val,structure){
return com.rpl.specter.impl.compiled_transform_STAR_(path,com.rpl.specter.impl.fast_constantly(val),structure);
});
com.rpl.specter.impl.compiled_replace_in_STAR_ = (function com$rpl$specter$impl$compiled_replace_in_STAR_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___66638 = arguments.length;
var i__4737__auto___66639 = (0);
while(true){
if((i__4737__auto___66639 < len__4736__auto___66638)){
args__4742__auto__.push((arguments[i__4737__auto___66639]));

var G__66640 = (i__4737__auto___66639 + (1));
i__4737__auto___66639 = G__66640;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return com.rpl.specter.impl.compiled_replace_in_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(com.rpl.specter.impl.compiled_replace_in_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (path,transform_fn,structure,p__64256){
var map__64257 = p__64256;
var map__64257__$1 = (((((!((map__64257 == null))))?(((((map__64257.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64257.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64257):map__64257);
var merge_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__64257__$1,new cljs.core.Keyword(null,"merge-fn","merge-fn",588067341),cljs.core.concat);
var state = com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$1(null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.compiled_transform_STAR_(path,(function() { 
var G__66645__delegate = function (args){
var res = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(transform_fn,args);
if(cljs.core.truth_(res)){
var vec__64261 = res;
var ret = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64261,(0),null);
var user_ret = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64261,(1),null);
com.rpl.specter.impl.set_cell_BANG_(state,(function (){var G__64265 = com.rpl.specter.impl.get_cell(state);
var G__64266 = user_ret;
return (merge_fn.cljs$core$IFn$_invoke$arity$2 ? merge_fn.cljs$core$IFn$_invoke$arity$2(G__64265,G__64266) : merge_fn.call(null,G__64265,G__64266));
})());

return ret;
} else {
return cljs.core.last(args);
}
};
var G__66645 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__66647__i = 0, G__66647__a = new Array(arguments.length -  0);
while (G__66647__i < G__66647__a.length) {G__66647__a[G__66647__i] = arguments[G__66647__i + 0]; ++G__66647__i;}
  args = new cljs.core.IndexedSeq(G__66647__a,0,null);
} 
return G__66645__delegate.call(this,args);};
G__66645.cljs$lang$maxFixedArity = 0;
G__66645.cljs$lang$applyTo = (function (arglist__66648){
var args = cljs.core.seq(arglist__66648);
return G__66645__delegate(args);
});
G__66645.cljs$core$IFn$_invoke$arity$variadic = G__66645__delegate;
return G__66645;
})()
,structure),com.rpl.specter.impl.get_cell(state)], null);
}));

(com.rpl.specter.impl.compiled_replace_in_STAR_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(com.rpl.specter.impl.compiled_replace_in_STAR_.cljs$lang$applyTo = (function (seq64249){
var G__64250 = cljs.core.first(seq64249);
var seq64249__$1 = cljs.core.next(seq64249);
var G__64251 = cljs.core.first(seq64249__$1);
var seq64249__$2 = cljs.core.next(seq64249__$1);
var G__64252 = cljs.core.first(seq64249__$2);
var seq64249__$3 = cljs.core.next(seq64249__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__64250,G__64251,G__64252,seq64249__$3);
}));

com.rpl.specter.impl.multi_transform_error_fn = (function com$rpl$specter$impl$multi_transform_error_fn(var_args){
var args__4742__auto__ = [];
var len__4736__auto___66652 = arguments.length;
var i__4737__auto___66653 = (0);
while(true){
if((i__4737__auto___66653 < len__4736__auto___66652)){
args__4742__auto__.push((arguments[i__4737__auto___66653]));

var G__66654 = (i__4737__auto___66653 + (1));
i__4737__auto___66653 = G__66654;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.rpl.specter.impl.multi_transform_error_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.rpl.specter.impl.multi_transform_error_fn.cljs$core$IFn$_invoke$arity$variadic = (function (nav){
return com.rpl.specter.impl.throw_illegal_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["All navigation in multi-transform must end in 'terminal' ","navigators. Instead navigated to: ",nav], 0));
}));

(com.rpl.specter.impl.multi_transform_error_fn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.rpl.specter.impl.multi_transform_error_fn.cljs$lang$applyTo = (function (seq64271){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64271));
}));

com.rpl.specter.impl.compiled_multi_transform_STAR_ = (function com$rpl$specter$impl$compiled_multi_transform_STAR_(path,structure){
return com.rpl.specter.impl.compiled_transform_STAR_(path,com.rpl.specter.impl.multi_transform_error_fn,structure);
});

//# sourceMappingURL=com.rpl.specter.impl.js.map
