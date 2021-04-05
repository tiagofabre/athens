goog.provide('com.rpl.specter');
com.rpl.specter.static_path_QMARK_ = (function com$rpl$specter$static_path_QMARK_(path){
if(cljs.core.sequential_QMARK_(path)){
return cljs.core.every_QMARK_(com.rpl.specter.static_path_QMARK_,path);
} else {
return (!(com.rpl.specter.impl.dynamic_param_QMARK_(path)));
}
});
com.rpl.specter.wrap_dynamic_nav = (function com$rpl$specter$wrap_dynamic_nav(f){
return (function() { 
var G__68855__delegate = function (args){
var ret = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
if(((cljs.core.sequential_QMARK_(ret)) && (com.rpl.specter.static_path_QMARK_(ret)))){
return com.rpl.specter.impl.comp_paths_STAR_(ret);
} else {
if(((cljs.core.sequential_QMARK_(ret)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(ret))))){
return cljs.core.first(ret);
} else {
return ret;

}
}
};
var G__68855 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__68859__i = 0, G__68859__a = new Array(arguments.length -  0);
while (G__68859__i < G__68859__a.length) {G__68859__a[G__68859__i] = arguments[G__68859__i + 0]; ++G__68859__i;}
  args = new cljs.core.IndexedSeq(G__68859__a,0,null);
} 
return G__68855__delegate.call(this,args);};
G__68855.cljs$lang$maxFixedArity = 0;
G__68855.cljs$lang$applyTo = (function (arglist__68860){
var args = cljs.core.seq(arglist__68860);
return G__68855__delegate(args);
});
G__68855.cljs$core$IFn$_invoke$arity$variadic = G__68855__delegate;
return G__68855;
})()
;
});
/**
 * Returns a compiled version of the given path for use with
 * compiled-{select/transform/setval/etc.} functions.
 */
com.rpl.specter.comp_paths = (function com$rpl$specter$comp_paths(var_args){
var args__4742__auto__ = [];
var len__4736__auto___68861 = arguments.length;
var i__4737__auto___68862 = (0);
while(true){
if((i__4737__auto___68862 < len__4736__auto___68861)){
args__4742__auto__.push((arguments[i__4737__auto___68862]));

var G__68864 = (i__4737__auto___68862 + (1));
i__4737__auto___68862 = G__68864;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.rpl.specter.comp_paths.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.rpl.specter.comp_paths.cljs$core$IFn$_invoke$arity$variadic = (function (apath){
return com.rpl.specter.impl.comp_paths_STAR_(cljs.core.vec(apath));
}));

(com.rpl.specter.comp_paths.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.rpl.specter.comp_paths.cljs$lang$applyTo = (function (seq67292){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq67292));
}));

/**
 * Version of select that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_select = com.rpl.specter.impl.compiled_select_STAR_;
/**
 * Navigates to and returns a sequence of all the elements specified by the path.
 */
com.rpl.specter.select_STAR_ = (function com$rpl$specter$select_STAR_(path,structure){
var G__67300 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__67301 = structure;
return (com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2(G__67300,G__67301) : com.rpl.specter.compiled_select.call(null,G__67300,G__67301));
});
/**
 * Version of select-one that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_select_one = com.rpl.specter.impl.compiled_select_one_STAR_;
/**
 * Like select, but returns either one element or nil. Throws exception if multiple elements found
 */
com.rpl.specter.select_one_STAR_ = (function com$rpl$specter$select_one_STAR_(path,structure){
var G__67310 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__67311 = structure;
return (com.rpl.specter.compiled_select_one.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select_one.cljs$core$IFn$_invoke$arity$2(G__67310,G__67311) : com.rpl.specter.compiled_select_one.call(null,G__67310,G__67311));
});
/**
 * Version of select-one! that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_select_one_BANG_ = com.rpl.specter.impl.compiled_select_one_BANG__STAR_;
/**
 * Returns exactly one element, throws exception if zero or multiple elements found
 */
com.rpl.specter.select_one_BANG__STAR_ = (function com$rpl$specter$select_one_BANG__STAR_(path,structure){
var G__67313 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__67314 = structure;
return (com.rpl.specter.compiled_select_one_BANG_.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select_one_BANG_.cljs$core$IFn$_invoke$arity$2(G__67313,G__67314) : com.rpl.specter.compiled_select_one_BANG_.call(null,G__67313,G__67314));
});
/**
 * Version of select-first that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_select_first = com.rpl.specter.impl.compiled_select_first_STAR_;
/**
 * Returns first element found.
 */
com.rpl.specter.select_first_STAR_ = (function com$rpl$specter$select_first_STAR_(path,structure){
var G__67319 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__67320 = structure;
return (com.rpl.specter.compiled_select_first.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select_first.cljs$core$IFn$_invoke$arity$2(G__67319,G__67320) : com.rpl.specter.compiled_select_first.call(null,G__67319,G__67320));
});
/**
 * Version of select-any that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_select_any = com.rpl.specter.impl.compiled_select_any_STAR_;
/**
 * Global value used to indicate no elements selected during
 *           [[select-any]].
 */
com.rpl.specter.NONE = com.rpl.specter.impl.NONE;
/**
 * Returns any element found or [[NONE]] if nothing selected. This is the most
 * efficient of the various selection operations.
 */
com.rpl.specter.select_any_STAR_ = (function com$rpl$specter$select_any_STAR_(path,structure){
var G__67326 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__67327 = structure;
return (com.rpl.specter.compiled_select_any.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select_any.cljs$core$IFn$_invoke$arity$2(G__67326,G__67327) : com.rpl.specter.compiled_select_any.call(null,G__67326,G__67327));
});
/**
 * Version of selected-any? that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_selected_any_QMARK_ = com.rpl.specter.impl.compiled_selected_any_QMARK__STAR_;
/**
 * Returns true if any element was selected, false otherwise.
 */
com.rpl.specter.selected_any_QMARK__STAR_ = (function com$rpl$specter$selected_any_QMARK__STAR_(path,structure){
var G__67336 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__67337 = structure;
return (com.rpl.specter.compiled_selected_any_QMARK_.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_selected_any_QMARK_.cljs$core$IFn$_invoke$arity$2(G__67336,G__67337) : com.rpl.specter.compiled_selected_any_QMARK_.call(null,G__67336,G__67337));
});
/**
 * Version of traverse that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_traverse = com.rpl.specter.impl.do_compiled_traverse;
/**
 * Return a reducible object that traverses over `structure` to every element
 * specified by the path
 */
com.rpl.specter.traverse_STAR_ = (function com$rpl$specter$traverse_STAR_(apath,structure){
var G__67338 = com.rpl.specter.impl.comp_paths_STAR_(apath);
var G__67339 = structure;
return (com.rpl.specter.compiled_traverse.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_traverse.cljs$core$IFn$_invoke$arity$2(G__67338,G__67339) : com.rpl.specter.compiled_traverse.call(null,G__67338,G__67339));
});
/**
 * Version of traverse-all that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_traverse_all = com.rpl.specter.impl.compiled_traverse_all_STAR_;
/**
 * Returns a transducer that traverses over each element with the given path.
 */
com.rpl.specter.traverse_all_STAR_ = (function com$rpl$specter$traverse_all_STAR_(apath){
var G__67348 = com.rpl.specter.impl.comp_paths_STAR_(apath);
return (com.rpl.specter.compiled_traverse_all.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.compiled_traverse_all.cljs$core$IFn$_invoke$arity$1(G__67348) : com.rpl.specter.compiled_traverse_all.call(null,G__67348));
});
/**
 * Version of transform that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_transform = com.rpl.specter.impl.compiled_transform_STAR_;
/**
 * Version of vtransform that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_vtransform = com.rpl.specter.impl.compiled_vtransform_STAR_;
/**
 * Navigates to each value specified by the path and replaces it by the result of running
 *   the transform-fn on it
 */
com.rpl.specter.transform_STAR_ = (function com$rpl$specter$transform_STAR_(path,transform_fn,structure){
var G__67353 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__67354 = transform_fn;
var G__67355 = structure;
return (com.rpl.specter.compiled_transform.cljs$core$IFn$_invoke$arity$3 ? com.rpl.specter.compiled_transform.cljs$core$IFn$_invoke$arity$3(G__67353,G__67354,G__67355) : com.rpl.specter.compiled_transform.call(null,G__67353,G__67354,G__67355));
});
/**
 * Version of `multi-transform` that takes in a path precompiled with `comp-paths`
 */
com.rpl.specter.compiled_multi_transform = com.rpl.specter.impl.compiled_multi_transform_STAR_;
/**
 * Just like `transform` but expects transform functions to be specified
 * inline in the path using `terminal` or `vterminal`. Error is thrown if navigation finishes
 * at a non-terminal navigator. `terminal-val` is a wrapper around `terminal` and is
 * the `multi-transform` equivalent of `setval`.
 */
com.rpl.specter.multi_transform_STAR_ = (function com$rpl$specter$multi_transform_STAR_(path,structure){
var G__67362 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__67363 = structure;
return (com.rpl.specter.compiled_multi_transform.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_multi_transform.cljs$core$IFn$_invoke$arity$2(G__67362,G__67363) : com.rpl.specter.compiled_multi_transform.call(null,G__67362,G__67363));
});
/**
 * Version of setval that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_setval = com.rpl.specter.impl.compiled_setval_STAR_;
/**
 * Navigates to each value specified by the path and replaces it by val
 */
com.rpl.specter.setval_STAR_ = (function com$rpl$specter$setval_STAR_(path,val,structure){
var G__67365 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__67366 = val;
var G__67367 = structure;
return (com.rpl.specter.compiled_setval.cljs$core$IFn$_invoke$arity$3 ? com.rpl.specter.compiled_setval.cljs$core$IFn$_invoke$arity$3(G__67365,G__67366,G__67367) : com.rpl.specter.compiled_setval.call(null,G__67365,G__67366,G__67367));
});
/**
 * Version of replace-in that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_replace_in = com.rpl.specter.impl.compiled_replace_in_STAR_;
/**
 * Similar to transform, except returns a pair of [transformed-structure sequence-of-user-ret].
 * The transform-fn in this case is expected to return [ret user-ret]. ret is
 * what's used to transform the data structure, while user-ret will be added to the user-ret sequence
 * in the final return. replace-in is useful for situations where you need to know the specific values
 * of what was transformed in the data structure.
 */
com.rpl.specter.replace_in_STAR_ = (function com$rpl$specter$replace_in_STAR_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___68878 = arguments.length;
var i__4737__auto___68883 = (0);
while(true){
if((i__4737__auto___68883 < len__4736__auto___68878)){
args__4742__auto__.push((arguments[i__4737__auto___68883]));

var G__68884 = (i__4737__auto___68883 + (1));
i__4737__auto___68883 = G__68884;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return com.rpl.specter.replace_in_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(com.rpl.specter.replace_in_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (path,transform_fn,structure,p__67375){
var map__67376 = p__67375;
var map__67376__$1 = (((((!((map__67376 == null))))?(((((map__67376.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67376.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67376):map__67376);
var merge_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__67376__$1,new cljs.core.Keyword(null,"merge-fn","merge-fn",588067341),cljs.core.concat);
var G__67378 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__67379 = transform_fn;
var G__67380 = structure;
var G__67381 = new cljs.core.Keyword(null,"merge-fn","merge-fn",588067341);
var G__67382 = merge_fn;
return (com.rpl.specter.compiled_replace_in.cljs$core$IFn$_invoke$arity$5 ? com.rpl.specter.compiled_replace_in.cljs$core$IFn$_invoke$arity$5(G__67378,G__67379,G__67380,G__67381,G__67382) : com.rpl.specter.compiled_replace_in.call(null,G__67378,G__67379,G__67380,G__67381,G__67382));
}));

(com.rpl.specter.replace_in_STAR_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(com.rpl.specter.replace_in_STAR_.cljs$lang$applyTo = (function (seq67369){
var G__67370 = cljs.core.first(seq67369);
var seq67369__$1 = cljs.core.next(seq67369);
var G__67371 = cljs.core.first(seq67369__$1);
var seq67369__$2 = cljs.core.next(seq67369__$1);
var G__67372 = cljs.core.first(seq67369__$2);
var seq67369__$3 = cljs.core.next(seq67369__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__67370,G__67371,G__67372,seq67369__$3);
}));

com.rpl.specter.late_path = com.rpl.specter.impl.late_path;
com.rpl.specter.dynamic_param_QMARK_ = com.rpl.specter.impl.dynamic_param_QMARK_;
com.rpl.specter.late_resolved_fn = com.rpl.specter.impl.late_resolved_fn;
/**
 * Turns a navigator that takes one argument into a navigator that takes
 *        many arguments and uses the same navigator with each argument. There
 *        is no performance cost to using this. See implementation of `keypath`
 */
com.rpl.specter.eachnav = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function (navfn){
var latenavfn = (com.rpl.specter.late_resolved_fn.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_resolved_fn.cljs$core$IFn$_invoke$arity$1(navfn) : com.rpl.specter.late_resolved_fn.call(null,navfn));
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__68892__delegate = function (args){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(latenavfn,args);
};
var G__68892 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__68893__i = 0, G__68893__a = new Array(arguments.length -  0);
while (G__68893__i < G__68893__a.length) {G__68893__a[G__68893__i] = arguments[G__68893__i + 0]; ++G__68893__i;}
  args = new cljs.core.IndexedSeq(G__68893__a,0,null);
} 
return G__68892__delegate.call(this,args);};
G__68892.cljs$lang$maxFixedArity = 0;
G__68892.cljs$lang$applyTo = (function (arglist__68894){
var args = cljs.core.seq(arglist__68894);
return G__68892__delegate(args);
});
G__68892.cljs$core$IFn$_invoke$arity$variadic = G__68892__delegate;
return G__68892;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
})),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
com.rpl.specter.local_declarepath = com.rpl.specter.impl.local_declarepath;


com.rpl.specter.STOP_select_STAR_ = (function com$rpl$specter$STOP_select_STAR_(structure,next_fn){
return com.rpl.specter.NONE;
});

com.rpl.specter.STOP_transform_STAR_ = (function com$rpl$specter$STOP_transform_STAR_(structure,next_fn){
return structure;
});

/**
 * Stops navigation at this point. For selection returns nothing and for
 *        transformation returns the structure unchanged
 */
com.rpl.specter.STOP = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter67387 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter67387 = (function (meta67388){
this.meta67388 = meta67388;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter67387.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_67389,meta67388__$1){
var self__ = this;
var _67389__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter67387(meta67388__$1));
}));

(com.rpl.specter.t_com$rpl$specter67387.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_67389){
var self__ = this;
var _67389__$1 = this;
return self__.meta67388;
}));

(com.rpl.specter.t_com$rpl$specter67387.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter67387.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__64432__auto__,vals__64433__auto__,structure,next_fn__64434__auto__){
var self__ = this;
var this__64432__auto____$1 = this;
var next_fn = (function (s__64435__auto__){
return (next_fn__64434__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__64434__auto__.cljs$core$IFn$_invoke$arity$2(vals__64433__auto__,s__64435__auto__) : next_fn__64434__auto__.call(null,vals__64433__auto__,s__64435__auto__));
});
return com.rpl.specter.NONE;
}));

(com.rpl.specter.t_com$rpl$specter67387.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__64432__auto__,vals__64433__auto__,structure,next_fn__64434__auto__){
var self__ = this;
var this__64432__auto____$1 = this;
var next_fn = (function (s__64435__auto__){
return (next_fn__64434__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__64434__auto__.cljs$core$IFn$_invoke$arity$2(vals__64433__auto__,s__64435__auto__) : next_fn__64434__auto__.call(null,vals__64433__auto__,s__64435__auto__));
});
return structure;
}));

(com.rpl.specter.t_com$rpl$specter67387.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta67388","meta67388",1717225893,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter67387.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter67387.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter67387");

(com.rpl.specter.t_com$rpl$specter67387.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter67387");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter67387.
 */
com.rpl.specter.__GT_t_com$rpl$specter67387 = (function com$rpl$specter$__GT_t_com$rpl$specter67387(meta67388){
return (new com.rpl.specter.t_com$rpl$specter67387(meta67388));
});

}

return (new com.rpl.specter.t_com$rpl$specter67387(null));
})()
;
/**
 * Stays navigated at the current point. Essentially a no-op navigator.
 */
com.rpl.specter.STAY = com.rpl.specter.impl.STAY_STAR_;
/**
 * Defines an endpoint in the navigation the transform function run. The transform
 *        function works just like it does in `transform`, with collected values
 *        given as the first arguments
 */
com.rpl.specter.terminal = com.rpl.specter.impl.direct_nav_obj((function (afn){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter67444 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter67444 = (function (afn,meta67445){
this.afn = afn;
this.meta67445 = meta67445;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter67444.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_67446,meta67445__$1){
var self__ = this;
var _67446__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter67444(self__.afn,meta67445__$1));
}));

(com.rpl.specter.t_com$rpl$specter67444.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_67446){
var self__ = this;
var _67446__$1 = this;
return self__.meta67445;
}));

(com.rpl.specter.t_com$rpl$specter67444.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter67444.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.NONE;
}));

(com.rpl.specter.t_com$rpl$specter67444.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.impl.terminal_STAR_(self__.afn,vals,structure);
}));

(com.rpl.specter.t_com$rpl$specter67444.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"meta67445","meta67445",158241317,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter67444.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter67444.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter67444");

(com.rpl.specter.t_com$rpl$specter67444.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter67444");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter67444.
 */
com.rpl.specter.__GT_t_com$rpl$specter67444 = (function com$rpl$specter$__GT_t_com$rpl$specter67444(afn__$1,meta67445){
return (new com.rpl.specter.t_com$rpl$specter67444(afn__$1,meta67445));
});

}

return (new com.rpl.specter.t_com$rpl$specter67444(afn,null));
}));
/**
 * Defines an endpoint in the navigation the transform function run.The transform
 *        function works differently than it does in `transform`. Rather than receive
 *        collected vals spliced in as the first arguments to the function, this function
 *        always takes two arguemnts. The first is all collected vals in a vector, and
 *        the second is the navigated value.
 */
com.rpl.specter.vterminal = com.rpl.specter.impl.direct_nav_obj((function (afn){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter67466 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter67466 = (function (afn,meta67467){
this.afn = afn;
this.meta67467 = meta67467;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter67466.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_67468,meta67467__$1){
var self__ = this;
var _67468__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter67466(self__.afn,meta67467__$1));
}));

(com.rpl.specter.t_com$rpl$specter67466.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_67468){
var self__ = this;
var _67468__$1 = this;
return self__.meta67467;
}));

(com.rpl.specter.t_com$rpl$specter67466.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter67466.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.NONE;
}));

(com.rpl.specter.t_com$rpl$specter67466.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return (self__.afn.cljs$core$IFn$_invoke$arity$2 ? self__.afn.cljs$core$IFn$_invoke$arity$2(vals,structure) : self__.afn.call(null,vals,structure));
}));

(com.rpl.specter.t_com$rpl$specter67466.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"meta67467","meta67467",-1035217048,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter67466.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter67466.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter67466");

(com.rpl.specter.t_com$rpl$specter67466.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter67466");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter67466.
 */
com.rpl.specter.__GT_t_com$rpl$specter67466 = (function com$rpl$specter$__GT_t_com$rpl$specter67466(afn__$1,meta67467){
return (new com.rpl.specter.t_com$rpl$specter67466(afn__$1,meta67467));
});

}

return (new com.rpl.specter.t_com$rpl$specter67466(afn,null));
}));
/**
 * Like `terminal` but specifies a val to set at the location regardless of
 * the collected values or the value at the location.
 */
com.rpl.specter.terminal_val = (function com$rpl$specter$terminal_val(v){
var G__67490 = com.rpl.specter.impl.fast_constantly(v);
return (com.rpl.specter.terminal.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.terminal.cljs$core$IFn$_invoke$arity$1(G__67490) : com.rpl.specter.terminal.call(null,G__67490));
});


com.rpl.specter.ALL_select_STAR_ = (function com$rpl$specter$ALL_select_STAR_(structure,next_fn){
return com.rpl.specter.navs.all_select(structure,next_fn);
});

com.rpl.specter.ALL_transform_STAR_ = (function com$rpl$specter$ALL_transform_STAR_(structure,next_fn){
return com.rpl.specter.navs.all_transform(structure,next_fn);
});

/**
 * Navigate to every element of the collection. For maps navigates to
 *        a vector of `[key value]`.
 */
com.rpl.specter.ALL = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter67508 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter67508 = (function (meta67509){
this.meta67509 = meta67509;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter67508.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_67510,meta67509__$1){
var self__ = this;
var _67510__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter67508(meta67509__$1));
}));

(com.rpl.specter.t_com$rpl$specter67508.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_67510){
var self__ = this;
var _67510__$1 = this;
return self__.meta67509;
}));

(com.rpl.specter.t_com$rpl$specter67508.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter67508.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__64432__auto__,vals__64433__auto__,structure,next_fn__64434__auto__){
var self__ = this;
var this__64432__auto____$1 = this;
var next_fn = (function (s__64435__auto__){
return (next_fn__64434__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__64434__auto__.cljs$core$IFn$_invoke$arity$2(vals__64433__auto__,s__64435__auto__) : next_fn__64434__auto__.call(null,vals__64433__auto__,s__64435__auto__));
});
return com.rpl.specter.navs.all_select(structure,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter67508.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__64432__auto__,vals__64433__auto__,structure,next_fn__64434__auto__){
var self__ = this;
var this__64432__auto____$1 = this;
var next_fn = (function (s__64435__auto__){
return (next_fn__64434__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__64434__auto__.cljs$core$IFn$_invoke$arity$2(vals__64433__auto__,s__64435__auto__) : next_fn__64434__auto__.call(null,vals__64433__auto__,s__64435__auto__));
});
return com.rpl.specter.navs.all_transform(structure,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter67508.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta67509","meta67509",1021218766,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter67508.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter67508.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter67508");

(com.rpl.specter.t_com$rpl$specter67508.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter67508");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter67508.
 */
com.rpl.specter.__GT_t_com$rpl$specter67508 = (function com$rpl$specter$__GT_t_com$rpl$specter67508(meta67509){
return (new com.rpl.specter.t_com$rpl$specter67508(meta67509));
});

}

return (new com.rpl.specter.t_com$rpl$specter67508(null));
})()
;


com.rpl.specter.ALL_WITH_META_select_STAR_ = (function com$rpl$specter$ALL_WITH_META_select_STAR_(structure,next_fn){
return com.rpl.specter.navs.all_select(structure,next_fn);
});

com.rpl.specter.ALL_WITH_META_transform_STAR_ = (function com$rpl$specter$ALL_WITH_META_transform_STAR_(structure,next_fn){
var m = cljs.core.meta(structure);
var res = com.rpl.specter.navs.all_transform(structure,next_fn);
if((!((res == null)))){
return cljs.core.with_meta(res,m);
} else {
return null;
}
});

/**
 * Same as ALL, except maintains metadata on the structure.
 */
com.rpl.specter.ALL_WITH_META = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter67534 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter67534 = (function (meta67535){
this.meta67535 = meta67535;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter67534.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_67536,meta67535__$1){
var self__ = this;
var _67536__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter67534(meta67535__$1));
}));

(com.rpl.specter.t_com$rpl$specter67534.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_67536){
var self__ = this;
var _67536__$1 = this;
return self__.meta67535;
}));

(com.rpl.specter.t_com$rpl$specter67534.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter67534.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__64432__auto__,vals__64433__auto__,structure,next_fn__64434__auto__){
var self__ = this;
var this__64432__auto____$1 = this;
var next_fn = (function (s__64435__auto__){
return (next_fn__64434__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__64434__auto__.cljs$core$IFn$_invoke$arity$2(vals__64433__auto__,s__64435__auto__) : next_fn__64434__auto__.call(null,vals__64433__auto__,s__64435__auto__));
});
return com.rpl.specter.navs.all_select(structure,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter67534.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__64432__auto__,vals__64433__auto__,structure,next_fn__64434__auto__){
var self__ = this;
var this__64432__auto____$1 = this;
var next_fn = (function (s__64435__auto__){
return (next_fn__64434__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__64434__auto__.cljs$core$IFn$_invoke$arity$2(vals__64433__auto__,s__64435__auto__) : next_fn__64434__auto__.call(null,vals__64433__auto__,s__64435__auto__));
});
var m = cljs.core.meta(structure);
var res = com.rpl.specter.navs.all_transform(structure,next_fn);
if((!((res == null)))){
return cljs.core.with_meta(res,m);
} else {
return null;
}
}));

(com.rpl.specter.t_com$rpl$specter67534.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta67535","meta67535",-1085552598,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter67534.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter67534.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter67534");

(com.rpl.specter.t_com$rpl$specter67534.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter67534");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter67534.
 */
com.rpl.specter.__GT_t_com$rpl$specter67534 = (function com$rpl$specter$__GT_t_com$rpl$specter67534(meta67535){
return (new com.rpl.specter.t_com$rpl$specter67534(meta67535));
});

}

return (new com.rpl.specter.t_com$rpl$specter67534(null));
})()
;


com.rpl.specter.MAP_VALS_select_STAR_ = (function com$rpl$specter$MAP_VALS_select_STAR_(structure,next_fn){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (curr__59212__auto__,v){
var ret__59213__auto__ = (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(v) : next_fn.call(null,v));
if((ret__59213__auto__ === com.rpl.specter.NONE)){
return curr__59212__auto__;
} else {
if(cljs.core.reduced_QMARK_(ret__59213__auto__)){
return cljs.core.reduced(ret__59213__auto__);
} else {
return ret__59213__auto__;
}
}
}),com.rpl.specter.NONE,cljs.core.vals(structure));
});

com.rpl.specter.MAP_VALS_transform_STAR_ = (function com$rpl$specter$MAP_VALS_transform_STAR_(structure,next_fn){
return com.rpl.specter.navs.map_vals_transform(structure,next_fn);
});

/**
 * Navigate to each value of the map. This is more efficient than
 *        navigating via [ALL LAST]
 */
com.rpl.specter.MAP_VALS = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter67568 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter67568 = (function (meta67569){
this.meta67569 = meta67569;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter67568.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_67570,meta67569__$1){
var self__ = this;
var _67570__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter67568(meta67569__$1));
}));

(com.rpl.specter.t_com$rpl$specter67568.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_67570){
var self__ = this;
var _67570__$1 = this;
return self__.meta67569;
}));

(com.rpl.specter.t_com$rpl$specter67568.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter67568.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__64432__auto__,vals__64433__auto__,structure,next_fn__64434__auto__){
var self__ = this;
var this__64432__auto____$1 = this;
var next_fn = (function (s__64435__auto__){
return (next_fn__64434__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__64434__auto__.cljs$core$IFn$_invoke$arity$2(vals__64433__auto__,s__64435__auto__) : next_fn__64434__auto__.call(null,vals__64433__auto__,s__64435__auto__));
});
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (curr__59212__auto__,v){
var ret__59213__auto__ = next_fn(v);
if((ret__59213__auto__ === com.rpl.specter.NONE)){
return curr__59212__auto__;
} else {
if(cljs.core.reduced_QMARK_(ret__59213__auto__)){
return cljs.core.reduced(ret__59213__auto__);
} else {
return ret__59213__auto__;
}
}
}),com.rpl.specter.NONE,cljs.core.vals(structure));
}));

(com.rpl.specter.t_com$rpl$specter67568.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__64432__auto__,vals__64433__auto__,structure,next_fn__64434__auto__){
var self__ = this;
var this__64432__auto____$1 = this;
var next_fn = (function (s__64435__auto__){
return (next_fn__64434__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__64434__auto__.cljs$core$IFn$_invoke$arity$2(vals__64433__auto__,s__64435__auto__) : next_fn__64434__auto__.call(null,vals__64433__auto__,s__64435__auto__));
});
return com.rpl.specter.navs.map_vals_transform(structure,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter67568.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta67569","meta67569",-2145069793,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter67568.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter67568.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter67568");

(com.rpl.specter.t_com$rpl$specter67568.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter67568");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter67568.
 */
com.rpl.specter.__GT_t_com$rpl$specter67568 = (function com$rpl$specter$__GT_t_com$rpl$specter67568(meta67569){
return (new com.rpl.specter.t_com$rpl$specter67568(meta67569));
});

}

return (new com.rpl.specter.t_com$rpl$specter67568(null));
})()
;


com.rpl.specter.MAP_KEYS_select_STAR_ = (function com$rpl$specter$MAP_KEYS_select_STAR_(structure,next_fn){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (curr__59212__auto__,k){
var ret__59213__auto__ = (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(k) : next_fn.call(null,k));
if((ret__59213__auto__ === com.rpl.specter.NONE)){
return curr__59212__auto__;
} else {
if(cljs.core.reduced_QMARK_(ret__59213__auto__)){
return cljs.core.reduced(ret__59213__auto__);
} else {
return ret__59213__auto__;
}
}
}),com.rpl.specter.NONE,cljs.core.keys(structure));
});

com.rpl.specter.MAP_KEYS_transform_STAR_ = (function com$rpl$specter$MAP_KEYS_transform_STAR_(structure,next_fn){
return com.rpl.specter.navs.map_keys_transform(structure,next_fn);
});

/**
 * Navigate to each key of the map. This is more efficient than
 *        navigating via [ALL FIRST]
 */
com.rpl.specter.MAP_KEYS = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter67601 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter67601 = (function (meta67602){
this.meta67602 = meta67602;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter67601.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_67603,meta67602__$1){
var self__ = this;
var _67603__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter67601(meta67602__$1));
}));

(com.rpl.specter.t_com$rpl$specter67601.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_67603){
var self__ = this;
var _67603__$1 = this;
return self__.meta67602;
}));

(com.rpl.specter.t_com$rpl$specter67601.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter67601.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__64432__auto__,vals__64433__auto__,structure,next_fn__64434__auto__){
var self__ = this;
var this__64432__auto____$1 = this;
var next_fn = (function (s__64435__auto__){
return (next_fn__64434__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__64434__auto__.cljs$core$IFn$_invoke$arity$2(vals__64433__auto__,s__64435__auto__) : next_fn__64434__auto__.call(null,vals__64433__auto__,s__64435__auto__));
});
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (curr__59212__auto__,k){
var ret__59213__auto__ = next_fn(k);
if((ret__59213__auto__ === com.rpl.specter.NONE)){
return curr__59212__auto__;
} else {
if(cljs.core.reduced_QMARK_(ret__59213__auto__)){
return cljs.core.reduced(ret__59213__auto__);
} else {
return ret__59213__auto__;
}
}
}),com.rpl.specter.NONE,cljs.core.keys(structure));
}));

(com.rpl.specter.t_com$rpl$specter67601.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__64432__auto__,vals__64433__auto__,structure,next_fn__64434__auto__){
var self__ = this;
var this__64432__auto____$1 = this;
var next_fn = (function (s__64435__auto__){
return (next_fn__64434__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__64434__auto__.cljs$core$IFn$_invoke$arity$2(vals__64433__auto__,s__64435__auto__) : next_fn__64434__auto__.call(null,vals__64433__auto__,s__64435__auto__));
});
return com.rpl.specter.navs.map_keys_transform(structure,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter67601.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta67602","meta67602",1348770037,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter67601.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter67601.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter67601");

(com.rpl.specter.t_com$rpl$specter67601.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter67601");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter67601.
 */
com.rpl.specter.__GT_t_com$rpl$specter67601 = (function com$rpl$specter$__GT_t_com$rpl$specter67601(meta67602){
return (new com.rpl.specter.t_com$rpl$specter67601(meta67602));
});

}

return (new com.rpl.specter.t_com$rpl$specter67601(null));
})()
;
com.rpl.specter.VAL = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter67620 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter67620 = (function (meta67621){
this.meta67621 = meta67621;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter67620.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_67622,meta67621__$1){
var self__ = this;
var _67622__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter67620(meta67621__$1));
}));

(com.rpl.specter.t_com$rpl$specter67620.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_67622){
var self__ = this;
var _67622__$1 = this;
return self__.meta67621;
}));

(com.rpl.specter.t_com$rpl$specter67620.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter67620.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__65868__auto__,vals__65869__auto__,structure,next_fn__65870__auto__){
var self__ = this;
var this__65868__auto____$1 = this;
var G__67637 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vals__65869__auto__,structure);
var G__67638 = structure;
return (next_fn__65870__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__65870__auto__.cljs$core$IFn$_invoke$arity$2(G__67637,G__67638) : next_fn__65870__auto__.call(null,G__67637,G__67638));
}));

(com.rpl.specter.t_com$rpl$specter67620.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__65868__auto__,vals__65869__auto__,structure,next_fn__65870__auto__){
var self__ = this;
var this__65868__auto____$1 = this;
var G__67642 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vals__65869__auto__,structure);
var G__67643 = structure;
return (next_fn__65870__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__65870__auto__.cljs$core$IFn$_invoke$arity$2(G__67642,G__67643) : next_fn__65870__auto__.call(null,G__67642,G__67643));
}));

(com.rpl.specter.t_com$rpl$specter67620.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta67621","meta67621",-1585475099,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter67620.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter67620.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter67620");

(com.rpl.specter.t_com$rpl$specter67620.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter67620");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter67620.
 */
com.rpl.specter.__GT_t_com$rpl$specter67620 = (function com$rpl$specter$__GT_t_com$rpl$specter67620(meta67621){
return (new com.rpl.specter.t_com$rpl$specter67620(meta67621));
});

}

return (new com.rpl.specter.t_com$rpl$specter67620(null));
})()
;
/**
 * Navigate to the last element of the collection. If the collection is
 *        empty navigation is stopped at this point.
 */
com.rpl.specter.LAST = (com.rpl.specter.navs.PosNavigator.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.navs.PosNavigator.cljs$core$IFn$_invoke$arity$2(com.rpl.specter.navs.get_last,com.rpl.specter.navs.update_last) : com.rpl.specter.navs.PosNavigator.call(null,com.rpl.specter.navs.get_last,com.rpl.specter.navs.update_last));
/**
 * Navigate to the first element of the collection. If the collection is
 *        empty navigation is stopped at this point.
 */
com.rpl.specter.FIRST = (com.rpl.specter.navs.PosNavigator.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.navs.PosNavigator.cljs$core$IFn$_invoke$arity$2(com.rpl.specter.navs.get_first,com.rpl.specter.navs.update_first) : com.rpl.specter.navs.PosNavigator.call(null,com.rpl.specter.navs.get_first,com.rpl.specter.navs.update_first));


com.rpl.specter.srange_dynamic_select_STAR_ = (function com$rpl$specter$srange_dynamic_select_STAR_(start_index_fn,end_index_fn,structure,next_fn){
var s = (start_index_fn.cljs$core$IFn$_invoke$arity$1 ? start_index_fn.cljs$core$IFn$_invoke$arity$1(structure) : start_index_fn.call(null,structure));
return com.rpl.specter.navs.srange_select(structure,s,com.rpl.specter.navs.invoke_end_fn(end_index_fn,structure,s),next_fn);
});

com.rpl.specter.srange_dynamic_transform_STAR_ = (function com$rpl$specter$srange_dynamic_transform_STAR_(start_index_fn,end_index_fn,structure,next_fn){
var s = (start_index_fn.cljs$core$IFn$_invoke$arity$1 ? start_index_fn.cljs$core$IFn$_invoke$arity$1(structure) : start_index_fn.call(null,structure));
var G__67663 = structure;
var G__67664 = s;
var G__67665 = com.rpl.specter.navs.invoke_end_fn(end_index_fn,structure,s);
var G__67666 = next_fn;
return (com.rpl.specter.navs.srange_transform.cljs$core$IFn$_invoke$arity$4 ? com.rpl.specter.navs.srange_transform.cljs$core$IFn$_invoke$arity$4(G__67663,G__67664,G__67665,G__67666) : com.rpl.specter.navs.srange_transform.call(null,G__67663,G__67664,G__67665,G__67666));
});

/**
 * Uses start-index-fn and end-index-fn to determine the bounds of the subsequence
 *        to select when navigating. `start-index-fn` takes in the structure as input. `end-index-fn`
 *        can be one of two forms. If a regular function (e.g. defined with `fn`), it takes in only the structure as input. If a function defined using special `end-fn` macro, it takes in the structure and the result of `start-index-fn`.
 */
com.rpl.specter.srange_dynamic = com.rpl.specter.impl.direct_nav_obj((function (start_index_fn,end_index_fn){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter67667 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter67667 = (function (start_index_fn,end_index_fn,meta67668){
this.start_index_fn = start_index_fn;
this.end_index_fn = end_index_fn;
this.meta67668 = meta67668;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter67667.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_67669,meta67668__$1){
var self__ = this;
var _67669__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter67667(self__.start_index_fn,self__.end_index_fn,meta67668__$1));
}));

(com.rpl.specter.t_com$rpl$specter67667.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_67669){
var self__ = this;
var _67669__$1 = this;
return self__.meta67668;
}));

(com.rpl.specter.t_com$rpl$specter67667.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter67667.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__64432__auto__,vals__64433__auto__,structure,next_fn__64434__auto__){
var self__ = this;
var this__64432__auto____$1 = this;
var next_fn = (function (s__64435__auto__){
return (next_fn__64434__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__64434__auto__.cljs$core$IFn$_invoke$arity$2(vals__64433__auto__,s__64435__auto__) : next_fn__64434__auto__.call(null,vals__64433__auto__,s__64435__auto__));
});
var s = (self__.start_index_fn.cljs$core$IFn$_invoke$arity$1 ? self__.start_index_fn.cljs$core$IFn$_invoke$arity$1(structure) : self__.start_index_fn.call(null,structure));
return com.rpl.specter.navs.srange_select(structure,s,com.rpl.specter.navs.invoke_end_fn(self__.end_index_fn,structure,s),next_fn);
}));

(com.rpl.specter.t_com$rpl$specter67667.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__64432__auto__,vals__64433__auto__,structure,next_fn__64434__auto__){
var self__ = this;
var this__64432__auto____$1 = this;
var next_fn = (function (s__64435__auto__){
return (next_fn__64434__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__64434__auto__.cljs$core$IFn$_invoke$arity$2(vals__64433__auto__,s__64435__auto__) : next_fn__64434__auto__.call(null,vals__64433__auto__,s__64435__auto__));
});
var s = (self__.start_index_fn.cljs$core$IFn$_invoke$arity$1 ? self__.start_index_fn.cljs$core$IFn$_invoke$arity$1(structure) : self__.start_index_fn.call(null,structure));
var G__67687 = structure;
var G__67688 = s;
var G__67689 = com.rpl.specter.navs.invoke_end_fn(self__.end_index_fn,structure,s);
var G__67690 = next_fn;
return (com.rpl.specter.navs.srange_transform.cljs$core$IFn$_invoke$arity$4 ? com.rpl.specter.navs.srange_transform.cljs$core$IFn$_invoke$arity$4(G__67687,G__67688,G__67689,G__67690) : com.rpl.specter.navs.srange_transform.call(null,G__67687,G__67688,G__67689,G__67690));
}));

(com.rpl.specter.t_com$rpl$specter67667.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"start-index-fn","start-index-fn",-344842645,null),new cljs.core.Symbol(null,"end-index-fn","end-index-fn",1237092062,null),new cljs.core.Symbol(null,"meta67668","meta67668",117327978,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter67667.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter67667.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter67667");

(com.rpl.specter.t_com$rpl$specter67667.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter67667");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter67667.
 */
com.rpl.specter.__GT_t_com$rpl$specter67667 = (function com$rpl$specter$__GT_t_com$rpl$specter67667(start_index_fn__$1,end_index_fn__$1,meta67668){
return (new com.rpl.specter.t_com$rpl$specter67667(start_index_fn__$1,end_index_fn__$1,meta67668));
});

}

return (new com.rpl.specter.t_com$rpl$specter67667(start_index_fn,end_index_fn,null));
}));


com.rpl.specter.srange_select_STAR_ = (function com$rpl$specter$srange_select_STAR_(start,end,structure,next_fn){
return com.rpl.specter.navs.srange_select(structure,start,end,next_fn);
});

com.rpl.specter.srange_transform_STAR_ = (function com$rpl$specter$srange_transform_STAR_(start,end,structure,next_fn){
return (com.rpl.specter.navs.srange_transform.cljs$core$IFn$_invoke$arity$4 ? com.rpl.specter.navs.srange_transform.cljs$core$IFn$_invoke$arity$4(structure,start,end,next_fn) : com.rpl.specter.navs.srange_transform.call(null,structure,start,end,next_fn));
});

/**
 * Navigates to the subsequence bound by the indexes start (inclusive)
 *        and end (exclusive)
 */
com.rpl.specter.srange = com.rpl.specter.impl.direct_nav_obj((function (start,end){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter67696 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter67696 = (function (start,end,meta67697){
this.start = start;
this.end = end;
this.meta67697 = meta67697;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter67696.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_67698,meta67697__$1){
var self__ = this;
var _67698__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter67696(self__.start,self__.end,meta67697__$1));
}));

(com.rpl.specter.t_com$rpl$specter67696.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_67698){
var self__ = this;
var _67698__$1 = this;
return self__.meta67697;
}));

(com.rpl.specter.t_com$rpl$specter67696.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter67696.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__64432__auto__,vals__64433__auto__,structure,next_fn__64434__auto__){
var self__ = this;
var this__64432__auto____$1 = this;
var next_fn = (function (s__64435__auto__){
return (next_fn__64434__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__64434__auto__.cljs$core$IFn$_invoke$arity$2(vals__64433__auto__,s__64435__auto__) : next_fn__64434__auto__.call(null,vals__64433__auto__,s__64435__auto__));
});
return com.rpl.specter.navs.srange_select(structure,self__.start,self__.end,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter67696.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__64432__auto__,vals__64433__auto__,structure,next_fn__64434__auto__){
var self__ = this;
var this__64432__auto____$1 = this;
var next_fn = (function (s__64435__auto__){
return (next_fn__64434__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__64434__auto__.cljs$core$IFn$_invoke$arity$2(vals__64433__auto__,s__64435__auto__) : next_fn__64434__auto__.call(null,vals__64433__auto__,s__64435__auto__));
});
return (com.rpl.specter.navs.srange_transform.cljs$core$IFn$_invoke$arity$4 ? com.rpl.specter.navs.srange_transform.cljs$core$IFn$_invoke$arity$4(structure,self__.start,self__.end,next_fn) : com.rpl.specter.navs.srange_transform.call(null,structure,self__.start,self__.end,next_fn));
}));

(com.rpl.specter.t_com$rpl$specter67696.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"start","start",1285322546,null),new cljs.core.Symbol(null,"end","end",1372345569,null),new cljs.core.Symbol(null,"meta67697","meta67697",84910503,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter67696.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter67696.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter67696");

(com.rpl.specter.t_com$rpl$specter67696.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter67696");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter67696.
 */
com.rpl.specter.__GT_t_com$rpl$specter67696 = (function com$rpl$specter$__GT_t_com$rpl$specter67696(start__$1,end__$1,meta67697){
return (new com.rpl.specter.t_com$rpl$specter67696(start__$1,end__$1,meta67697));
});

}

return (new com.rpl.specter.t_com$rpl$specter67696(start,end,null));
}));


com.rpl.specter.continuous_subseqs_select_STAR_ = (function com$rpl$specter$continuous_subseqs_select_STAR_(pred,structure,next_fn){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (curr__59212__auto__,p__67721){
var vec__67723 = p__67721;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67723,(0),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67723,(1),null);
var ret__59213__auto__ = com.rpl.specter.navs.srange_select(structure,s,e,next_fn);
if((ret__59213__auto__ === com.rpl.specter.NONE)){
return curr__59212__auto__;
} else {
if(cljs.core.reduced_QMARK_(ret__59213__auto__)){
return cljs.core.reduced(ret__59213__auto__);
} else {
return ret__59213__auto__;
}
}
}),com.rpl.specter.NONE,com.rpl.specter.impl.matching_ranges(structure,pred));
});

com.rpl.specter.continuous_subseqs_transform_STAR_ = (function com$rpl$specter$continuous_subseqs_transform_STAR_(pred,structure,next_fn){
return com.rpl.specter.impl.continuous_subseqs_transform_STAR_(pred,structure,next_fn);
});

/**
 * Navigates to every continuous subsequence of elements matching `pred`
 */
com.rpl.specter.continuous_subseqs = com.rpl.specter.impl.direct_nav_obj((function (pred){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter67739 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter67739 = (function (pred,meta67740){
this.pred = pred;
this.meta67740 = meta67740;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter67739.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_67741,meta67740__$1){
var self__ = this;
var _67741__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter67739(self__.pred,meta67740__$1));
}));

(com.rpl.specter.t_com$rpl$specter67739.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_67741){
var self__ = this;
var _67741__$1 = this;
return self__.meta67740;
}));

(com.rpl.specter.t_com$rpl$specter67739.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter67739.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__64432__auto__,vals__64433__auto__,structure,next_fn__64434__auto__){
var self__ = this;
var this__64432__auto____$1 = this;
var next_fn = (function (s__64435__auto__){
return (next_fn__64434__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__64434__auto__.cljs$core$IFn$_invoke$arity$2(vals__64433__auto__,s__64435__auto__) : next_fn__64434__auto__.call(null,vals__64433__auto__,s__64435__auto__));
});
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (curr__59212__auto__,p__67754){
var vec__67757 = p__67754;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67757,(0),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67757,(1),null);
var ret__59213__auto__ = com.rpl.specter.navs.srange_select(structure,s,e,next_fn);
if((ret__59213__auto__ === com.rpl.specter.NONE)){
return curr__59212__auto__;
} else {
if(cljs.core.reduced_QMARK_(ret__59213__auto__)){
return cljs.core.reduced(ret__59213__auto__);
} else {
return ret__59213__auto__;
}
}
}),com.rpl.specter.NONE,com.rpl.specter.impl.matching_ranges(structure,self__.pred));
}));

(com.rpl.specter.t_com$rpl$specter67739.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__64432__auto__,vals__64433__auto__,structure,next_fn__64434__auto__){
var self__ = this;
var this__64432__auto____$1 = this;
var next_fn = (function (s__64435__auto__){
return (next_fn__64434__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__64434__auto__.cljs$core$IFn$_invoke$arity$2(vals__64433__auto__,s__64435__auto__) : next_fn__64434__auto__.call(null,vals__64433__auto__,s__64435__auto__));
});
return com.rpl.specter.impl.continuous_subseqs_transform_STAR_(self__.pred,structure,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter67739.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"meta67740","meta67740",1846223878,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter67739.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter67739.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter67739");

(com.rpl.specter.t_com$rpl$specter67739.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter67739");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter67739.
 */
com.rpl.specter.__GT_t_com$rpl$specter67739 = (function com$rpl$specter$__GT_t_com$rpl$specter67739(pred__$1,meta67740){
return (new com.rpl.specter.t_com$rpl$specter67739(pred__$1,meta67740));
});

}

return (new com.rpl.specter.t_com$rpl$specter67739(pred,null));
}));


com.rpl.specter.BEGINNING_select_STAR_ = (function com$rpl$specter$BEGINNING_select_STAR_(structure,next_fn){
var G__67768 = ((typeof structure === 'string')?"":cljs.core.PersistentVector.EMPTY);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__67768) : next_fn.call(null,G__67768));
});

com.rpl.specter.BEGINNING_transform_STAR_ = (function com$rpl$specter$BEGINNING_transform_STAR_(structure,next_fn){
if(typeof structure === 'string'){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1("") : next_fn.call(null,""))),structure].join('');
} else {
var to_prepend = (function (){var G__67771 = cljs.core.PersistentVector.EMPTY;
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__67771) : next_fn.call(null,G__67771));
})();
return com.rpl.specter.navs.prepend_all(structure,to_prepend);
}
});

/**
 * Navigate to the empty subsequence before the first element of the collection.
 */
com.rpl.specter.BEGINNING = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter67773 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter67773 = (function (meta67774){
this.meta67774 = meta67774;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter67773.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_67775,meta67774__$1){
var self__ = this;
var _67775__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter67773(meta67774__$1));
}));

(com.rpl.specter.t_com$rpl$specter67773.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_67775){
var self__ = this;
var _67775__$1 = this;
return self__.meta67774;
}));

(com.rpl.specter.t_com$rpl$specter67773.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter67773.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__64432__auto__,vals__64433__auto__,structure,next_fn__64434__auto__){
var self__ = this;
var this__64432__auto____$1 = this;
var next_fn = (function (s__64435__auto__){
return (next_fn__64434__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__64434__auto__.cljs$core$IFn$_invoke$arity$2(vals__64433__auto__,s__64435__auto__) : next_fn__64434__auto__.call(null,vals__64433__auto__,s__64435__auto__));
});
return next_fn(((typeof structure === 'string')?"":cljs.core.PersistentVector.EMPTY));
}));

(com.rpl.specter.t_com$rpl$specter67773.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__64432__auto__,vals__64433__auto__,structure,next_fn__64434__auto__){
var self__ = this;
var this__64432__auto____$1 = this;
var next_fn = (function (s__64435__auto__){
return (next_fn__64434__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__64434__auto__.cljs$core$IFn$_invoke$arity$2(vals__64433__auto__,s__64435__auto__) : next_fn__64434__auto__.call(null,vals__64433__auto__,s__64435__auto__));
});
if(typeof structure === 'string'){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(next_fn("")),structure].join('');
} else {
var to_prepend = next_fn(cljs.core.PersistentVector.EMPTY);
return com.rpl.specter.navs.prepend_all(structure,to_prepend);
}
}));

(com.rpl.specter.t_com$rpl$specter67773.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta67774","meta67774",1596341463,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter67773.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter67773.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter67773");

(com.rpl.specter.t_com$rpl$specter67773.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter67773");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter67773.
 */
com.rpl.specter.__GT_t_com$rpl$specter67773 = (function com$rpl$specter$__GT_t_com$rpl$specter67773(meta67774){
return (new com.rpl.specter.t_com$rpl$specter67773(meta67774));
});

}

return (new com.rpl.specter.t_com$rpl$specter67773(null));
})()
;


com.rpl.specter.END_select_STAR_ = (function com$rpl$specter$END_select_STAR_(structure,next_fn){
var G__67783 = ((typeof structure === 'string')?"":cljs.core.PersistentVector.EMPTY);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__67783) : next_fn.call(null,G__67783));
});

com.rpl.specter.END_transform_STAR_ = (function com$rpl$specter$END_transform_STAR_(structure,next_fn){
if(typeof structure === 'string'){
return [structure,cljs.core.str.cljs$core$IFn$_invoke$arity$1((next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1("") : next_fn.call(null,"")))].join('');
} else {
var to_append = (function (){var G__67788 = cljs.core.PersistentVector.EMPTY;
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__67788) : next_fn.call(null,G__67788));
})();
return com.rpl.specter.navs.append_all(structure,to_append);
}
});

/**
 * Navigate to the empty subsequence after the last element of the collection.
 */
com.rpl.specter.END = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter67790 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter67790 = (function (meta67791){
this.meta67791 = meta67791;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter67790.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_67792,meta67791__$1){
var self__ = this;
var _67792__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter67790(meta67791__$1));
}));

(com.rpl.specter.t_com$rpl$specter67790.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_67792){
var self__ = this;
var _67792__$1 = this;
return self__.meta67791;
}));

(com.rpl.specter.t_com$rpl$specter67790.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter67790.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__64432__auto__,vals__64433__auto__,structure,next_fn__64434__auto__){
var self__ = this;
var this__64432__auto____$1 = this;
var next_fn = (function (s__64435__auto__){
return (next_fn__64434__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__64434__auto__.cljs$core$IFn$_invoke$arity$2(vals__64433__auto__,s__64435__auto__) : next_fn__64434__auto__.call(null,vals__64433__auto__,s__64435__auto__));
});
return next_fn(((typeof structure === 'string')?"":cljs.core.PersistentVector.EMPTY));
}));

(com.rpl.specter.t_com$rpl$specter67790.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__64432__auto__,vals__64433__auto__,structure,next_fn__64434__auto__){
var self__ = this;
var this__64432__auto____$1 = this;
var next_fn = (function (s__64435__auto__){
return (next_fn__64434__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__64434__auto__.cljs$core$IFn$_invoke$arity$2(vals__64433__auto__,s__64435__auto__) : next_fn__64434__auto__.call(null,vals__64433__auto__,s__64435__auto__));
});
if(typeof structure === 'string'){
return [structure,cljs.core.str.cljs$core$IFn$_invoke$arity$1(next_fn(""))].join('');
} else {
var to_append = next_fn(cljs.core.PersistentVector.EMPTY);
return com.rpl.specter.navs.append_all(structure,to_append);
}
}));

(com.rpl.specter.t_com$rpl$specter67790.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta67791","meta67791",-1034260060,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter67790.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter67790.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter67790");

(com.rpl.specter.t_com$rpl$specter67790.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter67790");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter67790.
 */
com.rpl.specter.__GT_t_com$rpl$specter67790 = (function com$rpl$specter$__GT_t_com$rpl$specter67790(meta67791){
return (new com.rpl.specter.t_com$rpl$specter67790(meta67791));
});

}

return (new com.rpl.specter.t_com$rpl$specter67790(null));
})()
;


com.rpl.specter.NONE_ELEM_select_STAR_ = (function com$rpl$specter$NONE_ELEM_select_STAR_(structure,next_fn){
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(com.rpl.specter.NONE) : next_fn.call(null,com.rpl.specter.NONE));
});

com.rpl.specter.NONE_ELEM_transform_STAR_ = (function com$rpl$specter$NONE_ELEM_transform_STAR_(structure,next_fn){
var newe = (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(com.rpl.specter.NONE) : next_fn.call(null,com.rpl.specter.NONE));
if((com.rpl.specter.NONE === newe)){
return structure;
} else {
if((structure == null)){
return cljs.core.PersistentHashSet.createAsIfByAssoc([newe]);
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(structure,newe);
}
}
});

/**
 * Navigate to 'void' elem in the set.
 *        For transformations - if result is not `NONE`,
 *        then add that value to the set.
 */
com.rpl.specter.NONE_ELEM = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter67817 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter67817 = (function (meta67818){
this.meta67818 = meta67818;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter67817.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_67819,meta67818__$1){
var self__ = this;
var _67819__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter67817(meta67818__$1));
}));

(com.rpl.specter.t_com$rpl$specter67817.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_67819){
var self__ = this;
var _67819__$1 = this;
return self__.meta67818;
}));

(com.rpl.specter.t_com$rpl$specter67817.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter67817.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__64432__auto__,vals__64433__auto__,structure,next_fn__64434__auto__){
var self__ = this;
var this__64432__auto____$1 = this;
var next_fn = (function (s__64435__auto__){
return (next_fn__64434__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__64434__auto__.cljs$core$IFn$_invoke$arity$2(vals__64433__auto__,s__64435__auto__) : next_fn__64434__auto__.call(null,vals__64433__auto__,s__64435__auto__));
});
return next_fn(com.rpl.specter.NONE);
}));

(com.rpl.specter.t_com$rpl$specter67817.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__64432__auto__,vals__64433__auto__,structure,next_fn__64434__auto__){
var self__ = this;
var this__64432__auto____$1 = this;
var next_fn = (function (s__64435__auto__){
return (next_fn__64434__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__64434__auto__.cljs$core$IFn$_invoke$arity$2(vals__64433__auto__,s__64435__auto__) : next_fn__64434__auto__.call(null,vals__64433__auto__,s__64435__auto__));
});
var newe = next_fn(com.rpl.specter.NONE);
if((com.rpl.specter.NONE === newe)){
return structure;
} else {
if((structure == null)){
return cljs.core.PersistentHashSet.createAsIfByAssoc([newe]);
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(structure,newe);
}
}
}));

(com.rpl.specter.t_com$rpl$specter67817.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta67818","meta67818",-1434632126,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter67817.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter67817.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter67817");

(com.rpl.specter.t_com$rpl$specter67817.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter67817");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter67817.
 */
com.rpl.specter.__GT_t_com$rpl$specter67817 = (function com$rpl$specter$__GT_t_com$rpl$specter67817(meta67818){
return (new com.rpl.specter.t_com$rpl$specter67817(meta67818));
});

}

return (new com.rpl.specter.t_com$rpl$specter67817(null));
})()
;


com.rpl.specter.BEFORE_ELEM_select_STAR_ = (function com$rpl$specter$BEFORE_ELEM_select_STAR_(structure,next_fn){
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(com.rpl.specter.NONE) : next_fn.call(null,com.rpl.specter.NONE));
});

com.rpl.specter.BEFORE_ELEM_transform_STAR_ = (function com$rpl$specter$BEFORE_ELEM_transform_STAR_(structure,next_fn){
var newe = (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(com.rpl.specter.NONE) : next_fn.call(null,com.rpl.specter.NONE));
if((com.rpl.specter.NONE === newe)){
return structure;
} else {
return com.rpl.specter.navs.prepend_one(structure,newe);
}
});

/**
 * Navigate to 'void' element before the sequence.
 *        For transformations – if result is not `NONE`,
 *        then prepend that value.
 */
com.rpl.specter.BEFORE_ELEM = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter67833 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter67833 = (function (meta67834){
this.meta67834 = meta67834;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter67833.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_67835,meta67834__$1){
var self__ = this;
var _67835__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter67833(meta67834__$1));
}));

(com.rpl.specter.t_com$rpl$specter67833.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_67835){
var self__ = this;
var _67835__$1 = this;
return self__.meta67834;
}));

(com.rpl.specter.t_com$rpl$specter67833.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter67833.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__64432__auto__,vals__64433__auto__,structure,next_fn__64434__auto__){
var self__ = this;
var this__64432__auto____$1 = this;
var next_fn = (function (s__64435__auto__){
return (next_fn__64434__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__64434__auto__.cljs$core$IFn$_invoke$arity$2(vals__64433__auto__,s__64435__auto__) : next_fn__64434__auto__.call(null,vals__64433__auto__,s__64435__auto__));
});
return next_fn(com.rpl.specter.NONE);
}));

(com.rpl.specter.t_com$rpl$specter67833.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__64432__auto__,vals__64433__auto__,structure,next_fn__64434__auto__){
var self__ = this;
var this__64432__auto____$1 = this;
var next_fn = (function (s__64435__auto__){
return (next_fn__64434__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__64434__auto__.cljs$core$IFn$_invoke$arity$2(vals__64433__auto__,s__64435__auto__) : next_fn__64434__auto__.call(null,vals__64433__auto__,s__64435__auto__));
});
var newe = next_fn(com.rpl.specter.NONE);
if((com.rpl.specter.NONE === newe)){
return structure;
} else {
return com.rpl.specter.navs.prepend_one(structure,newe);
}
}));

(com.rpl.specter.t_com$rpl$specter67833.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta67834","meta67834",807278100,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter67833.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter67833.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter67833");

(com.rpl.specter.t_com$rpl$specter67833.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter67833");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter67833.
 */
com.rpl.specter.__GT_t_com$rpl$specter67833 = (function com$rpl$specter$__GT_t_com$rpl$specter67833(meta67834){
return (new com.rpl.specter.t_com$rpl$specter67833(meta67834));
});

}

return (new com.rpl.specter.t_com$rpl$specter67833(null));
})()
;


com.rpl.specter.AFTER_ELEM_select_STAR_ = (function com$rpl$specter$AFTER_ELEM_select_STAR_(structure,next_fn){
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(com.rpl.specter.NONE) : next_fn.call(null,com.rpl.specter.NONE));
});

com.rpl.specter.AFTER_ELEM_transform_STAR_ = (function com$rpl$specter$AFTER_ELEM_transform_STAR_(structure,next_fn){
var newe = (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(com.rpl.specter.NONE) : next_fn.call(null,com.rpl.specter.NONE));
if((com.rpl.specter.NONE === newe)){
return structure;
} else {
return com.rpl.specter.navs.append_one(structure,newe);
}
});

/**
 * Navigate to 'void' element after the sequence.
 *        For transformations – if result is not `NONE`,
 *        then append that value.
 */
com.rpl.specter.AFTER_ELEM = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter67859 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter67859 = (function (meta67860){
this.meta67860 = meta67860;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter67859.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_67861,meta67860__$1){
var self__ = this;
var _67861__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter67859(meta67860__$1));
}));

(com.rpl.specter.t_com$rpl$specter67859.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_67861){
var self__ = this;
var _67861__$1 = this;
return self__.meta67860;
}));

(com.rpl.specter.t_com$rpl$specter67859.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter67859.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__64432__auto__,vals__64433__auto__,structure,next_fn__64434__auto__){
var self__ = this;
var this__64432__auto____$1 = this;
var next_fn = (function (s__64435__auto__){
return (next_fn__64434__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__64434__auto__.cljs$core$IFn$_invoke$arity$2(vals__64433__auto__,s__64435__auto__) : next_fn__64434__auto__.call(null,vals__64433__auto__,s__64435__auto__));
});
return next_fn(com.rpl.specter.NONE);
}));

(com.rpl.specter.t_com$rpl$specter67859.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__64432__auto__,vals__64433__auto__,structure,next_fn__64434__auto__){
var self__ = this;
var this__64432__auto____$1 = this;
var next_fn = (function (s__64435__auto__){
return (next_fn__64434__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__64434__auto__.cljs$core$IFn$_invoke$arity$2(vals__64433__auto__,s__64435__auto__) : next_fn__64434__auto__.call(null,vals__64433__auto__,s__64435__auto__));
});
var newe = next_fn(com.rpl.specter.NONE);
if((com.rpl.specter.NONE === newe)){
return structure;
} else {
return com.rpl.specter.navs.append_one(structure,newe);
}
}));

(com.rpl.specter.t_com$rpl$specter67859.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta67860","meta67860",261374632,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter67859.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter67859.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter67859");

(com.rpl.specter.t_com$rpl$specter67859.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter67859");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter67859.
 */
com.rpl.specter.__GT_t_com$rpl$specter67859 = (function com$rpl$specter$__GT_t_com$rpl$specter67859(meta67860){
return (new com.rpl.specter.t_com$rpl$specter67859(meta67860));
});

}

return (new com.rpl.specter.t_com$rpl$specter67859(null));
})()
;


com.rpl.specter.subset_select_STAR_ = (function com$rpl$specter$subset_select_STAR_(aset,structure,next_fn){
var G__67899 = clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(structure,aset);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__67899) : next_fn.call(null,G__67899));
});

com.rpl.specter.subset_transform_STAR_ = (function com$rpl$specter$subset_transform_STAR_(aset,structure,next_fn){
var subset = clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(structure,aset);
var newset = (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(subset) : next_fn.call(null,subset));
return clojure.set.union.cljs$core$IFn$_invoke$arity$2(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(structure,subset),newset);
});

/**
 * Navigates to the specified subset (by taking an intersection).
 *        In a transform, that subset in the original set is changed to the
 *        new value of the subset.
 */
com.rpl.specter.subset = com.rpl.specter.impl.direct_nav_obj((function (aset){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter67902 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter67902 = (function (aset,meta67903){
this.aset = aset;
this.meta67903 = meta67903;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter67902.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_67904,meta67903__$1){
var self__ = this;
var _67904__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter67902(self__.aset,meta67903__$1));
}));

(com.rpl.specter.t_com$rpl$specter67902.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_67904){
var self__ = this;
var _67904__$1 = this;
return self__.meta67903;
}));

(com.rpl.specter.t_com$rpl$specter67902.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter67902.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__64432__auto__,vals__64433__auto__,structure,next_fn__64434__auto__){
var self__ = this;
var this__64432__auto____$1 = this;
var next_fn = (function (s__64435__auto__){
return (next_fn__64434__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__64434__auto__.cljs$core$IFn$_invoke$arity$2(vals__64433__auto__,s__64435__auto__) : next_fn__64434__auto__.call(null,vals__64433__auto__,s__64435__auto__));
});
return next_fn(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(structure,self__.aset));
}));

(com.rpl.specter.t_com$rpl$specter67902.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__64432__auto__,vals__64433__auto__,structure,next_fn__64434__auto__){
var self__ = this;
var this__64432__auto____$1 = this;
var next_fn = (function (s__64435__auto__){
return (next_fn__64434__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__64434__auto__.cljs$core$IFn$_invoke$arity$2(vals__64433__auto__,s__64435__auto__) : next_fn__64434__auto__.call(null,vals__64433__auto__,s__64435__auto__));
});
var subset = clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(structure,self__.aset);
var newset = next_fn(subset);
return clojure.set.union.cljs$core$IFn$_invoke$arity$2(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(structure,subset),newset);
}));

(com.rpl.specter.t_com$rpl$specter67902.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"aset","aset",900773178,null),new cljs.core.Symbol(null,"meta67903","meta67903",-1372786410,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter67902.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter67902.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter67902");

(com.rpl.specter.t_com$rpl$specter67902.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter67902");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter67902.
 */
com.rpl.specter.__GT_t_com$rpl$specter67902 = (function com$rpl$specter$__GT_t_com$rpl$specter67902(aset__$1,meta67903){
return (new com.rpl.specter.t_com$rpl$specter67902(aset__$1,meta67903));
});

}

return (new com.rpl.specter.t_com$rpl$specter67902(aset,null));
}));


com.rpl.specter.submap_select_STAR_ = (function com$rpl$specter$submap_select_STAR_(m_keys,structure,next_fn){
var G__67943 = cljs.core.select_keys(structure,m_keys);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__67943) : next_fn.call(null,G__67943));
});

com.rpl.specter.submap_transform_STAR_ = (function com$rpl$specter$submap_transform_STAR_(m_keys,structure,next_fn){
var submap = cljs.core.select_keys(structure,m_keys);
var newmap = (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(submap) : next_fn.call(null,submap));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,structure,m_keys),newmap], 0));
});

/**
 * Navigates to the specified submap (using select-keys).
 *        In a transform, that submap in the original map is changed to the new
 *        value of the submap.
 */
com.rpl.specter.submap = com.rpl.specter.impl.direct_nav_obj((function (m_keys){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter67946 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter67946 = (function (m_keys,meta67947){
this.m_keys = m_keys;
this.meta67947 = meta67947;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter67946.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_67948,meta67947__$1){
var self__ = this;
var _67948__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter67946(self__.m_keys,meta67947__$1));
}));

(com.rpl.specter.t_com$rpl$specter67946.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_67948){
var self__ = this;
var _67948__$1 = this;
return self__.meta67947;
}));

(com.rpl.specter.t_com$rpl$specter67946.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter67946.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__64432__auto__,vals__64433__auto__,structure,next_fn__64434__auto__){
var self__ = this;
var this__64432__auto____$1 = this;
var next_fn = (function (s__64435__auto__){
return (next_fn__64434__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__64434__auto__.cljs$core$IFn$_invoke$arity$2(vals__64433__auto__,s__64435__auto__) : next_fn__64434__auto__.call(null,vals__64433__auto__,s__64435__auto__));
});
return next_fn(cljs.core.select_keys(structure,self__.m_keys));
}));

(com.rpl.specter.t_com$rpl$specter67946.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__64432__auto__,vals__64433__auto__,structure,next_fn__64434__auto__){
var self__ = this;
var this__64432__auto____$1 = this;
var next_fn = (function (s__64435__auto__){
return (next_fn__64434__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__64434__auto__.cljs$core$IFn$_invoke$arity$2(vals__64433__auto__,s__64435__auto__) : next_fn__64434__auto__.call(null,vals__64433__auto__,s__64435__auto__));
});
var submap = cljs.core.select_keys(structure,self__.m_keys);
var newmap = next_fn(submap);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,structure,self__.m_keys),newmap], 0));
}));

(com.rpl.specter.t_com$rpl$specter67946.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m-keys","m-keys",-197459035,null),new cljs.core.Symbol(null,"meta67947","meta67947",139378463,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter67946.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter67946.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter67946");

(com.rpl.specter.t_com$rpl$specter67946.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter67946");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter67946.
 */
com.rpl.specter.__GT_t_com$rpl$specter67946 = (function com$rpl$specter$__GT_t_com$rpl$specter67946(m_keys__$1,meta67947){
return (new com.rpl.specter.t_com$rpl$specter67946(m_keys__$1,meta67947));
});

}

return (new com.rpl.specter.t_com$rpl$specter67946(m_keys,null));
}));
/**
 * Navigates to a sequence that contains the results of (select ...),
 *   but is a view to the original structure that can be transformed.
 * 
 *   Requires that the input navigators will walk the structure's
 *   children in the same order when executed on "select" and then
 *   "transform".
 * 
 *   If transformed sequence is smaller than input sequence, missing entries
 *   will be filled in with NONE, triggering removal if supported by that navigator.
 * 
 *   Value collection (e.g. collect, collect-one) may not be used in the subpath.
 */
com.rpl.specter.subselect = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__69008__delegate = function (path){
var builder__65871__auto__ = com.rpl.specter.impl.direct_nav_obj((function (late){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter67964 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter67964 = (function (path,late,meta67965){
this.path = path;
this.late = late;
this.meta67965 = meta67965;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter67964.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_67966,meta67965__$1){
var self__ = this;
var _67966__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter67964(self__.path,self__.late,meta67965__$1));
}));

(com.rpl.specter.t_com$rpl$specter67964.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_67966){
var self__ = this;
var _67966__$1 = this;
return self__.meta67965;
}));

(com.rpl.specter.t_com$rpl$specter67964.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter67964.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__64432__auto__,vals__64433__auto__,structure,next_fn__64434__auto__){
var self__ = this;
var this__64432__auto____$1 = this;
var next_fn = (function (s__64435__auto__){
return (next_fn__64434__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__64434__auto__.cljs$core$IFn$_invoke$arity$2(vals__64433__auto__,s__64435__auto__) : next_fn__64434__auto__.call(null,vals__64433__auto__,s__64435__auto__));
});
return next_fn((com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2(self__.late,structure) : com.rpl.specter.compiled_select.call(null,self__.late,structure)));
}));

(com.rpl.specter.t_com$rpl$specter67964.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__64432__auto__,vals__64433__auto__,structure,next_fn__64434__auto__){
var self__ = this;
var this__64432__auto____$1 = this;
var next_fn = (function (s__64435__auto__){
return (next_fn__64434__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__64434__auto__.cljs$core$IFn$_invoke$arity$2(vals__64433__auto__,s__64435__auto__) : next_fn__64434__auto__.call(null,vals__64433__auto__,s__64435__auto__));
});
var select_result = (com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2(self__.late,structure) : com.rpl.specter.compiled_select.call(null,self__.late,structure));
var transformed = next_fn(select_result);
var values_to_insert = com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(transformed));
var G__67971 = self__.late;
var G__67972 = (function (_){
var vs = com.rpl.specter.impl.get_cell(values_to_insert);
if(cljs.core.truth_(vs)){
com.rpl.specter.impl.update_cell_BANG_(values_to_insert,cljs.core.next);

return cljs.core.first(vs);
} else {
return com.rpl.specter.NONE;
}
});
var G__67973 = structure;
return (com.rpl.specter.compiled_transform.cljs$core$IFn$_invoke$arity$3 ? com.rpl.specter.compiled_transform.cljs$core$IFn$_invoke$arity$3(G__67971,G__67972,G__67973) : com.rpl.specter.compiled_transform.call(null,G__67971,G__67972,G__67973));
}));

(com.rpl.specter.t_com$rpl$specter67964.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"meta67965","meta67965",757636143,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter67964.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter67964.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter67964");

(com.rpl.specter.t_com$rpl$specter67964.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter67964");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter67964.
 */
com.rpl.specter.__GT_t_com$rpl$specter67964 = (function com$rpl$specter$__GT_t_com$rpl$specter67964(path__$1,late__$1,meta67965){
return (new com.rpl.specter.t_com$rpl$specter67964(path__$1,late__$1,meta67965));
});

}

return (new com.rpl.specter.t_com$rpl$specter67964(path,late,null));
}));
var curr_params__65872__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(path) : com.rpl.specter.late_path.call(null,path))], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__65872__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__65871__auto__,curr_params__65872__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__65871__auto__,curr_params__65872__auto__,null);
}
};
var G__69008 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__69012__i = 0, G__69012__a = new Array(arguments.length -  0);
while (G__69012__i < G__69012__a.length) {G__69012__a[G__69012__i] = arguments[G__69012__i + 0]; ++G__69012__i;}
  path = new cljs.core.IndexedSeq(G__69012__a,0,null);
} 
return G__69008__delegate.call(this,path);};
G__69008.cljs$lang$maxFixedArity = 0;
G__69008.cljs$lang$applyTo = (function (arglist__69013){
var path = cljs.core.seq(arglist__69013);
return G__69008__delegate(path);
});
G__69008.cljs$core$IFn$_invoke$arity$variadic = G__69008__delegate;
return G__69008;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Navigates to the given key in the map (not to the value). Navigates only if the
 *        key currently exists in the map. Can transform to NONE to remove the key/value
 *        pair from the map.
 */
com.rpl.specter.map_key = com.rpl.specter.impl.direct_nav_obj((function (key){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter67985 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter67985 = (function (key,meta67986){
this.key = key;
this.meta67986 = meta67986;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter67985.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_67987,meta67986__$1){
var self__ = this;
var _67987__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter67985(self__.key,meta67986__$1));
}));

(com.rpl.specter.t_com$rpl$specter67985.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_67987){
var self__ = this;
var _67987__$1 = this;
return self__.meta67986;
}));

(com.rpl.specter.t_com$rpl$specter67985.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter67985.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
if(cljs.core.contains_QMARK_(structure,self__.key)){
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,self__.key) : next_fn.call(null,vals,self__.key));
} else {
return com.rpl.specter.NONE;
}
}));

(com.rpl.specter.t_com$rpl$specter67985.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
if(cljs.core.contains_QMARK_(structure,self__.key)){
var newkey = (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,self__.key) : next_fn.call(null,vals,self__.key));
var dissoced = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(structure,self__.key);
if((com.rpl.specter.NONE === newkey)){
return dissoced;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(dissoced,newkey,cljs.core.get.cljs$core$IFn$_invoke$arity$2(structure,self__.key));
}
} else {
return structure;
}
}));

(com.rpl.specter.t_com$rpl$specter67985.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"key","key",124488940,null),new cljs.core.Symbol(null,"meta67986","meta67986",693811094,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter67985.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter67985.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter67985");

(com.rpl.specter.t_com$rpl$specter67985.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter67985");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter67985.
 */
com.rpl.specter.__GT_t_com$rpl$specter67985 = (function com$rpl$specter$__GT_t_com$rpl$specter67985(key__$1,meta67986){
return (new com.rpl.specter.t_com$rpl$specter67985(key__$1,meta67986));
});

}

return (new com.rpl.specter.t_com$rpl$specter67985(key,null));
}));
/**
 * Navigates to the given element in the set only if it exists in the set.
 *        Can transform to NONE to remove the element from the set.
 */
com.rpl.specter.set_elem = com.rpl.specter.impl.direct_nav_obj((function (elem){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter68003 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter68003 = (function (elem,meta68004){
this.elem = elem;
this.meta68004 = meta68004;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter68003.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_68005,meta68004__$1){
var self__ = this;
var _68005__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter68003(self__.elem,meta68004__$1));
}));

(com.rpl.specter.t_com$rpl$specter68003.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_68005){
var self__ = this;
var _68005__$1 = this;
return self__.meta68004;
}));

(com.rpl.specter.t_com$rpl$specter68003.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter68003.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
if(cljs.core.contains_QMARK_(structure,self__.elem)){
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,self__.elem) : next_fn.call(null,vals,self__.elem));
} else {
return com.rpl.specter.NONE;
}
}));

(com.rpl.specter.t_com$rpl$specter68003.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
if(cljs.core.contains_QMARK_(structure,self__.elem)){
var newelem = (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,self__.elem) : next_fn.call(null,vals,self__.elem));
var removed = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(structure,self__.elem);
if((com.rpl.specter.NONE === newelem)){
return removed;
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(removed,newelem);
}
} else {
return structure;
}
}));

(com.rpl.specter.t_com$rpl$specter68003.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"elem","elem",-2035804713,null),new cljs.core.Symbol(null,"meta68004","meta68004",189294450,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter68003.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter68003.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter68003");

(com.rpl.specter.t_com$rpl$specter68003.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter68003");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter68003.
 */
com.rpl.specter.__GT_t_com$rpl$specter68003 = (function com$rpl$specter$__GT_t_com$rpl$specter68003(elem__$1,meta68004){
return (new com.rpl.specter.t_com$rpl$specter68003(elem__$1,meta68004));
});

}

return (new com.rpl.specter.t_com$rpl$specter68003(elem,null));
}));
/**
 * Navigate to the specified keys one after another. If navigate to NONE,
 *           that element is removed from the map or vector.
 */
com.rpl.specter.keypath = (com.rpl.specter.eachnav.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.eachnav.cljs$core$IFn$_invoke$arity$1(com.rpl.specter.navs.keypath_STAR_) : com.rpl.specter.eachnav.call(null,com.rpl.specter.navs.keypath_STAR_));
/**
 * Navigate to the specified keys one after another, only if they exist
 *           in the data structure. If navigate to NONE, that element is removed
 *           from the map or vector.
 */
com.rpl.specter.must = (com.rpl.specter.eachnav.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.eachnav.cljs$core$IFn$_invoke$arity$1(com.rpl.specter.navs.must_STAR_) : com.rpl.specter.eachnav.call(null,com.rpl.specter.navs.must_STAR_));
/**
 * Navigate to the specified indices one after another. If navigate to
 *          NONE, that element is removed from the sequence.
 */
com.rpl.specter.nthpath = (com.rpl.specter.eachnav.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.eachnav.cljs$core$IFn$_invoke$arity$1(com.rpl.specter.navs.nthpath_STAR_) : com.rpl.specter.eachnav.call(null,com.rpl.specter.navs.nthpath_STAR_));
/**
 * Navigates to the empty space between the index and the prior index. For select
 *        navigates to NONE, and transforms to non-NONE insert at that position.
 */
com.rpl.specter.before_index = com.rpl.specter.impl.direct_nav_obj((function (index){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter68021 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter68021 = (function (index,meta68022){
this.index = index;
this.meta68022 = meta68022;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter68021.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_68023,meta68022__$1){
var self__ = this;
var _68023__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter68021(self__.index,meta68022__$1));
}));

(com.rpl.specter.t_com$rpl$specter68021.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_68023){
var self__ = this;
var _68023__$1 = this;
return self__.meta68022;
}));

(com.rpl.specter.t_com$rpl$specter68021.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter68021.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.NONE;
}));

(com.rpl.specter.t_com$rpl$specter68021.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
var v = (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,com.rpl.specter.NONE) : next_fn.call(null,vals,com.rpl.specter.NONE));
if((com.rpl.specter.NONE === v)){
return structure;
} else {
return com.rpl.specter.impl.compiled_setval_STAR_((function (){var info__65878__auto__ = com.rpl.specter.pathcache68032;
var info__65878__auto____$1 = (((info__65878__auto__ == null))?(function (){var info68033 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.srange,new cljs.core.Var(function(){return com.rpl.specter.srange;},new cljs.core.Symbol("com.rpl.specter","srange","com.rpl.specter/srange",-978851939,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"srange","srange",-1324254972,null),"com/rpl/specter.cljc",9,1,755,758,cljs.core.List.EMPTY,"Navigates to the subsequence bound by the indexes start (inclusive)\n          and end (exclusive)",(cljs.core.truth_(com.rpl.specter.srange)?com.rpl.specter.srange.cljs$lang$test:null)])),new cljs.core.Symbol(null,"srange","srange",-1324254972,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym(self__.index,new cljs.core.Symbol(null,"index","index",108845612,null)),com.rpl.specter.impl.__GT_LocalSym(self__.index,new cljs.core.Symbol(null,"index","index",108845612,null))], null),cljs.core.list(new cljs.core.Symbol(null,"srange","srange",-1324254972,null),new cljs.core.Symbol(null,"index","index",108845612,null),new cljs.core.Symbol(null,"index","index",108845612,null)))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"index","index",108845612,null),new cljs.core.Symbol(null,"index","index",108845612,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"srange","srange",-1324254972,null),new cljs.core.Symbol(null,"index","index",108845612,null),new cljs.core.Symbol(null,"index","index",108845612,null)], null));
com.rpl.specter.pathcache68032 = info68033;

return info68033;
})():info__65878__auto__);
var precompiled68034 = com.rpl.specter.impl.cached_path_info_precompiled(info__65878__auto____$1);
var dynamic_QMARK___65879__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__65878__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___65879__auto__)){
var G__68040 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.srange,self__.index,self__.index], null);
return (precompiled68034.cljs$core$IFn$_invoke$arity$1 ? precompiled68034.cljs$core$IFn$_invoke$arity$1(G__68040) : precompiled68034.call(null,G__68040));
} else {
return precompiled68034;
}
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v], null),structure);
}
}));

(com.rpl.specter.t_com$rpl$specter68021.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"index","index",108845612,null),new cljs.core.Symbol(null,"meta68022","meta68022",-2065398938,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter68021.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter68021.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter68021");

(com.rpl.specter.t_com$rpl$specter68021.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter68021");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter68021.
 */
com.rpl.specter.__GT_t_com$rpl$specter68021 = (function com$rpl$specter$__GT_t_com$rpl$specter68021(index__$1,meta68022){
return (new com.rpl.specter.t_com$rpl$specter68021(index__$1,meta68022));
});

}

return (new com.rpl.specter.t_com$rpl$specter68021(index,null));
}));
/**
 * Navigates to the index of the sequence if within 0 and size. Transforms move element
 *        at that index to the new index, shifting other elements in the sequence.
 */
com.rpl.specter.index_nav = com.rpl.specter.impl.direct_nav_obj((function (i){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter68050 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter68050 = (function (i,meta68051){
this.i = i;
this.meta68051 = meta68051;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter68050.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_68052,meta68051__$1){
var self__ = this;
var _68052__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter68050(self__.i,meta68051__$1));
}));

(com.rpl.specter.t_com$rpl$specter68050.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_68052){
var self__ = this;
var _68052__$1 = this;
return self__.meta68051;
}));

(com.rpl.specter.t_com$rpl$specter68050.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter68050.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
if((((self__.i >= (0))) && ((self__.i < cljs.core.count(structure))))){
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,self__.i) : next_fn.call(null,vals,self__.i));
} else {
return com.rpl.specter.NONE;
}
}));

(com.rpl.specter.t_com$rpl$specter68050.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
if((((self__.i >= (0))) && ((self__.i < cljs.core.count(structure))))){
var newi = (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,self__.i) : next_fn.call(null,vals,self__.i));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(newi,self__.i)){
return structure;
} else {
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(structure,self__.i);
if(cljs.core.vector_QMARK_(structure)){
var shifted = (((newi < self__.i))?(function (){var j = (self__.i - (1));
var s = structure;
while(true){
if((j < newi)){
return s;
} else {
var G__69033 = (j - (1));
var G__69034 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(s,(j + (1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,j));
j = G__69033;
s = G__69034;
continue;
}
break;
}
})():(function (){var j = (self__.i + (1));
var s = structure;
while(true){
if((j > newi)){
return s;
} else {
var G__69037 = (j + (1));
var G__69038 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(s,(j - (1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,j));
j = G__69037;
s = G__69038;
continue;
}
break;
}
})());
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(shifted,newi,v);
} else {
return com.rpl.specter.impl.compiled_setval_STAR_((function (){var info__65878__auto__ = com.rpl.specter.pathcache68092;
var info__65878__auto____$1 = (((info__65878__auto__ == null))?(function (){var info68093 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.before_index,new cljs.core.Var(function(){return com.rpl.specter.before_index;},new cljs.core.Symbol("com.rpl.specter","before-index","com.rpl.specter/before-index",1952616274,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"before-index","before-index",-407870261,null),"com/rpl/specter.cljc",15,1,968,971,cljs.core.List.EMPTY,"Navigates to the empty space between the index and the prior index. For select\n          navigates to NONE, and transforms to non-NONE insert at that position.",(cljs.core.truth_(com.rpl.specter.before_index)?com.rpl.specter.before_index.cljs$lang$test:null)])),new cljs.core.Symbol(null,"before-index","before-index",-407870261,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym(newi,new cljs.core.Symbol(null,"newi","newi",857919881,null))], null),cljs.core.list(new cljs.core.Symbol(null,"before-index","before-index",-407870261,null),new cljs.core.Symbol(null,"newi","newi",857919881,null)))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"newi","newi",857919881,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"before-index","before-index",-407870261,null),new cljs.core.Symbol(null,"newi","newi",857919881,null)], null));
com.rpl.specter.pathcache68092 = info68093;

return info68093;
})():info__65878__auto__);
var precompiled68094 = com.rpl.specter.impl.cached_path_info_precompiled(info__65878__auto____$1);
var dynamic_QMARK___65879__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__65878__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___65879__auto__)){
var G__68096 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.before_index,newi], null);
return (precompiled68094.cljs$core$IFn$_invoke$arity$1 ? precompiled68094.cljs$core$IFn$_invoke$arity$1(G__68096) : precompiled68094.call(null,G__68096));
} else {
return precompiled68094;
}
})(),v,com.rpl.specter.impl.compiled_setval_STAR_((function (){var info__65878__auto__ = com.rpl.specter.pathcache68097;
var info__65878__auto____$1 = (((info__65878__auto__ == null))?(function (){var info68098 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.nthpath,new cljs.core.Var(function(){return com.rpl.specter.nthpath;},new cljs.core.Symbol("com.rpl.specter","nthpath","com.rpl.specter/nthpath",2085224162,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),"com/rpl/specter.cljc",10,1,963,965,cljs.core.List.EMPTY,"Navigate to the specified indices one after another. If navigate to\n            NONE, that element is removed from the sequence.",(cljs.core.truth_(com.rpl.specter.nthpath)?com.rpl.specter.nthpath.cljs$lang$test:null)])),new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym(self__.i,new cljs.core.Symbol(null,"i","i",253690212,null))], null),cljs.core.list(new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),new cljs.core.Symbol(null,"i","i",253690212,null)))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"i","i",253690212,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),new cljs.core.Symbol(null,"i","i",253690212,null)], null));
com.rpl.specter.pathcache68097 = info68098;

return info68098;
})():info__65878__auto__);
var precompiled68099 = com.rpl.specter.impl.cached_path_info_precompiled(info__65878__auto____$1);
var dynamic_QMARK___65879__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__65878__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___65879__auto__)){
var G__68101 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.nthpath,self__.i], null);
return (precompiled68099.cljs$core$IFn$_invoke$arity$1 ? precompiled68099.cljs$core$IFn$_invoke$arity$1(G__68101) : precompiled68099.call(null,G__68101));
} else {
return precompiled68099;
}
})(),com.rpl.specter.NONE,structure));
}
}
} else {
return structure;
}
}));

(com.rpl.specter.t_com$rpl$specter68050.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"i","i",253690212,null),new cljs.core.Symbol(null,"meta68051","meta68051",-1251309422,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter68050.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter68050.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter68050");

(com.rpl.specter.t_com$rpl$specter68050.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter68050");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter68050.
 */
com.rpl.specter.__GT_t_com$rpl$specter68050 = (function com$rpl$specter$__GT_t_com$rpl$specter68050(i__$1,meta68051){
return (new com.rpl.specter.t_com$rpl$specter68050(i__$1,meta68051));
});

}

return (new com.rpl.specter.t_com$rpl$specter68050(i,null));
}));


com.rpl.specter.indexed_vals_select_STAR_ = (function com$rpl$specter$indexed_vals_select_STAR_(start,structure,next_fn){
var i = com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$1((start - (1)));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (curr__59212__auto__,e){
var ret__59213__auto__ = (function (){
com.rpl.specter.impl.update_cell_BANG_(i,cljs.core.inc);

var G__68156 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.get_cell(i),e], null);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__68156) : next_fn.call(null,G__68156));
})()
;
if((ret__59213__auto__ === com.rpl.specter.NONE)){
return curr__59212__auto__;
} else {
if(cljs.core.reduced_QMARK_(ret__59213__auto__)){
return cljs.core.reduced(ret__59213__auto__);
} else {
return ret__59213__auto__;
}
}
}),com.rpl.specter.NONE,structure);
});

com.rpl.specter.indexed_vals_transform_STAR_ = (function com$rpl$specter$indexed_vals_transform_STAR_(start,structure,next_fn){
var indices = com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$1(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(structure)));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s,e){
var curri = cljs.core.first(com.rpl.specter.impl.get_cell(indices));
var vec__68163 = (function (){var G__68166 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(start + curri),e], null);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__68166) : next_fn.call(null,G__68166));
})();
var newi_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68163,(0),null);
var newe = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68163,(1),null);
var newi = (newi_STAR_ - start);
com.rpl.specter.impl.update_cell_BANG_(indices,(function (ii){
var ii2 = cljs.core.next(ii);
if((newi > curri)){
return com.rpl.specter.impl.compiled_transform_STAR_((function (){var info__65878__auto__ = com.rpl.specter.pathcache68176;
var info__65878__auto____$1 = (((info__65878__auto__ == null))?(function (){var info68177 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.ALL,new cljs.core.Var(function(){return com.rpl.specter.ALL;},new cljs.core.Symbol("com.rpl.specter","ALL","com.rpl.specter/ALL",-1409005960,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),"com/rpl/specter.cljc",6,1,679,682,cljs.core.List.EMPTY,"Navigate to every element of the collection. For maps navigates to\n          a vector of `[key value]`.",(cljs.core.truth_(com.rpl.specter.ALL)?com.rpl.specter.ALL.cljs$lang$test:null)])),new cljs.core.Symbol(null,"ALL","ALL",866837407,null)),com.rpl.specter.impl.__GT_SpecialFormUse((function (p1__68142_SHARP_){
return (p1__68142_SHARP_ >= (curri + (1)));
}),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__68142#","p1__68142#",708828327,null)], null),cljs.core.list(new cljs.core.Symbol(null,">=",">=",1016916022,null),new cljs.core.Symbol(null,"p1__68142#","p1__68142#",708828327,null),cljs.core.list(new cljs.core.Symbol(null,"inc","inc",324505433,null),new cljs.core.Symbol(null,"curri","curri",347667219,null))))),com.rpl.specter.impl.__GT_SpecialFormUse((function (p1__68144_SHARP_){
return (p1__68144_SHARP_ <= newi);
}),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__68144#","p1__68144#",979464572,null)], null),cljs.core.list(new cljs.core.Symbol(null,"<=","<=",1244895369,null),new cljs.core.Symbol(null,"p1__68144#","p1__68144#",979464572,null),new cljs.core.Symbol(null,"newi","newi",857919881,null))))], null)], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"curri","curri",347667219,null),new cljs.core.Symbol(null,"newi","newi",857919881,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ALL","ALL",866837407,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__68142#","p1__68142#",708828327,null)], null),cljs.core.list(new cljs.core.Symbol(null,">=",">=",1016916022,null),new cljs.core.Symbol(null,"p1__68142#","p1__68142#",708828327,null),cljs.core.list(new cljs.core.Symbol(null,"inc","inc",324505433,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)))),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__68144#","p1__68144#",979464572,null)], null),cljs.core.list(new cljs.core.Symbol(null,"<=","<=",1244895369,null),new cljs.core.Symbol(null,"p1__68144#","p1__68144#",979464572,null),new cljs.core.Symbol(null,"newi","newi",857919881,null)))], null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__68142#","p1__68142#",708828327,null)], null),cljs.core.list(new cljs.core.Symbol(null,">=",">=",1016916022,null),new cljs.core.Symbol(null,"p1__68142#","p1__68142#",708828327,null),cljs.core.list(new cljs.core.Symbol(null,"inc","inc",324505433,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)))),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__68144#","p1__68144#",979464572,null)], null),cljs.core.list(new cljs.core.Symbol(null,"<=","<=",1244895369,null),new cljs.core.Symbol(null,"p1__68144#","p1__68144#",979464572,null),new cljs.core.Symbol(null,"newi","newi",857919881,null)))], null));
com.rpl.specter.pathcache68176 = info68177;

return info68177;
})():info__65878__auto__);
var precompiled68178 = com.rpl.specter.impl.cached_path_info_precompiled(info__65878__auto____$1);
var dynamic_QMARK___65879__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__65878__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___65879__auto__)){
var G__68205 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.ALL,(function (p1__68142_SHARP_){
return (p1__68142_SHARP_ >= (curri + (1)));
}),(function (p1__68144_SHARP_){
return (p1__68144_SHARP_ <= newi);
})], null),com.rpl.specter.ALL,(function (p1__68142_SHARP_){
return (p1__68142_SHARP_ >= (curri + (1)));
}),(function (p1__68144_SHARP_){
return (p1__68144_SHARP_ <= newi);
})], null);
return (precompiled68178.cljs$core$IFn$_invoke$arity$1 ? precompiled68178.cljs$core$IFn$_invoke$arity$1(G__68205) : precompiled68178.call(null,G__68205));
} else {
return precompiled68178;
}
})(),cljs.core.dec,ii2);
} else {
return ii2;
}
}));

return com.rpl.specter.impl.compiled_setval_STAR_((function (){var info__65878__auto__ = com.rpl.specter.pathcache68210;
var info__65878__auto____$1 = (((info__65878__auto__ == null))?(function (){var info68211 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.index_nav,new cljs.core.Var(function(){return com.rpl.specter.index_nav;},new cljs.core.Symbol("com.rpl.specter","index-nav","com.rpl.specter/index-nav",2054501071,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"index-nav","index-nav",-157001568,null),"com/rpl/specter.cljc",12,1,983,986,cljs.core.List.EMPTY,"Navigates to the index of the sequence if within 0 and size. Transforms move element\n          at that index to the new index, shifting other elements in the sequence.",(cljs.core.truth_(com.rpl.specter.index_nav)?com.rpl.specter.index_nav.cljs$lang$test:null)])),new cljs.core.Symbol(null,"index-nav","index-nav",-157001568,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym(curri,new cljs.core.Symbol(null,"curri","curri",347667219,null))], null),cljs.core.list(new cljs.core.Symbol(null,"index-nav","index-nav",-157001568,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"curri","curri",347667219,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"index-nav","index-nav",-157001568,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)], null));
com.rpl.specter.pathcache68210 = info68211;

return info68211;
})():info__65878__auto__);
var precompiled68212 = com.rpl.specter.impl.cached_path_info_precompiled(info__65878__auto____$1);
var dynamic_QMARK___65879__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__65878__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___65879__auto__)){
var G__68233 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.index_nav,curri], null);
return (precompiled68212.cljs$core$IFn$_invoke$arity$1 ? precompiled68212.cljs$core$IFn$_invoke$arity$1(G__68233) : precompiled68212.call(null,G__68233));
} else {
return precompiled68212;
}
})(),newi,com.rpl.specter.impl.compiled_setval_STAR_((function (){var info__65878__auto__ = com.rpl.specter.pathcache68238;
var info__65878__auto____$1 = (((info__65878__auto__ == null))?(function (){var info68239 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.nthpath,new cljs.core.Var(function(){return com.rpl.specter.nthpath;},new cljs.core.Symbol("com.rpl.specter","nthpath","com.rpl.specter/nthpath",2085224162,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),"com/rpl/specter.cljc",10,1,963,965,cljs.core.List.EMPTY,"Navigate to the specified indices one after another. If navigate to\n            NONE, that element is removed from the sequence.",(cljs.core.truth_(com.rpl.specter.nthpath)?com.rpl.specter.nthpath.cljs$lang$test:null)])),new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym(curri,new cljs.core.Symbol(null,"curri","curri",347667219,null))], null),cljs.core.list(new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"curri","curri",347667219,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)], null));
com.rpl.specter.pathcache68238 = info68239;

return info68239;
})():info__65878__auto__);
var precompiled68240 = com.rpl.specter.impl.cached_path_info_precompiled(info__65878__auto____$1);
var dynamic_QMARK___65879__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__65878__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___65879__auto__)){
var G__68254 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.nthpath,curri], null);
return (precompiled68240.cljs$core$IFn$_invoke$arity$1 ? precompiled68240.cljs$core$IFn$_invoke$arity$1(G__68254) : precompiled68240.call(null,G__68254));
} else {
return precompiled68240;
}
})(),newe,s));
}),structure,structure);
});

/**
 * Navigate to [index elem] pairs for each element in a sequence. The sequence will be indexed
 *        starting from `start`. Changing index in transform has same effect as `index-nav`. Indices seen
 *        during transform take into account any shifting from prior sequence elements changing indices.
 */
com.rpl.specter.indexed_vals = com.rpl.specter.impl.direct_nav_obj((function (start){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter68264 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter68264 = (function (start,meta68265){
this.start = start;
this.meta68265 = meta68265;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter68264.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_68266,meta68265__$1){
var self__ = this;
var _68266__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter68264(self__.start,meta68265__$1));
}));

(com.rpl.specter.t_com$rpl$specter68264.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_68266){
var self__ = this;
var _68266__$1 = this;
return self__.meta68265;
}));

(com.rpl.specter.t_com$rpl$specter68264.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter68264.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__64432__auto__,vals__64433__auto__,structure,next_fn__64434__auto__){
var self__ = this;
var this__64432__auto____$1 = this;
var next_fn = (function (s__64435__auto__){
return (next_fn__64434__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__64434__auto__.cljs$core$IFn$_invoke$arity$2(vals__64433__auto__,s__64435__auto__) : next_fn__64434__auto__.call(null,vals__64433__auto__,s__64435__auto__));
});
var i = com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$1((self__.start - (1)));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (curr__59212__auto__,e){
var ret__59213__auto__ = (function (){
com.rpl.specter.impl.update_cell_BANG_(i,cljs.core.inc);

return next_fn(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.get_cell(i),e], null));
})()
;
if((ret__59213__auto__ === com.rpl.specter.NONE)){
return curr__59212__auto__;
} else {
if(cljs.core.reduced_QMARK_(ret__59213__auto__)){
return cljs.core.reduced(ret__59213__auto__);
} else {
return ret__59213__auto__;
}
}
}),com.rpl.specter.NONE,structure);
}));

(com.rpl.specter.t_com$rpl$specter68264.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__64432__auto__,vals__64433__auto__,structure,next_fn__64434__auto__){
var self__ = this;
var this__64432__auto____$1 = this;
var next_fn = (function (s__64435__auto__){
return (next_fn__64434__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__64434__auto__.cljs$core$IFn$_invoke$arity$2(vals__64433__auto__,s__64435__auto__) : next_fn__64434__auto__.call(null,vals__64433__auto__,s__64435__auto__));
});
var indices = com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$1(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(structure)));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s,e){
var curri = cljs.core.first(com.rpl.specter.impl.get_cell(indices));
var vec__68300 = next_fn(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(self__.start + curri),e], null));
var newi_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68300,(0),null);
var newe = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68300,(1),null);
var newi = (newi_STAR_ - self__.start);
com.rpl.specter.impl.update_cell_BANG_(indices,(function (ii){
var ii2 = cljs.core.next(ii);
if((newi > curri)){
return com.rpl.specter.impl.compiled_transform_STAR_((function (){var info__65878__auto__ = com.rpl.specter.pathcache68306;
var info__65878__auto____$1 = (((info__65878__auto__ == null))?(function (){var info68307 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.ALL,new cljs.core.Var(function(){return com.rpl.specter.ALL;},new cljs.core.Symbol("com.rpl.specter","ALL","com.rpl.specter/ALL",-1409005960,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),"com/rpl/specter.cljc",6,1,679,682,cljs.core.List.EMPTY,"Navigate to every element of the collection. For maps navigates to\n          a vector of `[key value]`.",(cljs.core.truth_(com.rpl.specter.ALL)?com.rpl.specter.ALL.cljs$lang$test:null)])),new cljs.core.Symbol(null,"ALL","ALL",866837407,null)),com.rpl.specter.impl.__GT_SpecialFormUse((function (p1__68142_SHARP_){
return (p1__68142_SHARP_ >= (curri + (1)));
}),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__68142#","p1__68142#",708828327,null)], null),cljs.core.list(new cljs.core.Symbol(null,">=",">=",1016916022,null),new cljs.core.Symbol(null,"p1__68142#","p1__68142#",708828327,null),cljs.core.list(new cljs.core.Symbol(null,"inc","inc",324505433,null),new cljs.core.Symbol(null,"curri","curri",347667219,null))))),com.rpl.specter.impl.__GT_SpecialFormUse((function (p1__68144_SHARP_){
return (p1__68144_SHARP_ <= newi);
}),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__68144#","p1__68144#",979464572,null)], null),cljs.core.list(new cljs.core.Symbol(null,"<=","<=",1244895369,null),new cljs.core.Symbol(null,"p1__68144#","p1__68144#",979464572,null),new cljs.core.Symbol(null,"newi","newi",857919881,null))))], null)], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"curri","curri",347667219,null),new cljs.core.Symbol(null,"newi","newi",857919881,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ALL","ALL",866837407,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__68142#","p1__68142#",708828327,null)], null),cljs.core.list(new cljs.core.Symbol(null,">=",">=",1016916022,null),new cljs.core.Symbol(null,"p1__68142#","p1__68142#",708828327,null),cljs.core.list(new cljs.core.Symbol(null,"inc","inc",324505433,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)))),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__68144#","p1__68144#",979464572,null)], null),cljs.core.list(new cljs.core.Symbol(null,"<=","<=",1244895369,null),new cljs.core.Symbol(null,"p1__68144#","p1__68144#",979464572,null),new cljs.core.Symbol(null,"newi","newi",857919881,null)))], null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__68142#","p1__68142#",708828327,null)], null),cljs.core.list(new cljs.core.Symbol(null,">=",">=",1016916022,null),new cljs.core.Symbol(null,"p1__68142#","p1__68142#",708828327,null),cljs.core.list(new cljs.core.Symbol(null,"inc","inc",324505433,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)))),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__68144#","p1__68144#",979464572,null)], null),cljs.core.list(new cljs.core.Symbol(null,"<=","<=",1244895369,null),new cljs.core.Symbol(null,"p1__68144#","p1__68144#",979464572,null),new cljs.core.Symbol(null,"newi","newi",857919881,null)))], null));
com.rpl.specter.pathcache68306 = info68307;

return info68307;
})():info__65878__auto__);
var precompiled68310 = com.rpl.specter.impl.cached_path_info_precompiled(info__65878__auto____$1);
var dynamic_QMARK___65879__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__65878__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___65879__auto__)){
var G__68314 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.ALL,(function (p1__68142_SHARP_){
return (p1__68142_SHARP_ >= (curri + (1)));
}),(function (p1__68144_SHARP_){
return (p1__68144_SHARP_ <= newi);
})], null),com.rpl.specter.ALL,(function (p1__68142_SHARP_){
return (p1__68142_SHARP_ >= (curri + (1)));
}),(function (p1__68144_SHARP_){
return (p1__68144_SHARP_ <= newi);
})], null);
return (precompiled68310.cljs$core$IFn$_invoke$arity$1 ? precompiled68310.cljs$core$IFn$_invoke$arity$1(G__68314) : precompiled68310.call(null,G__68314));
} else {
return precompiled68310;
}
})(),cljs.core.dec,ii2);
} else {
return ii2;
}
}));

return com.rpl.specter.impl.compiled_setval_STAR_((function (){var info__65878__auto__ = com.rpl.specter.pathcache68320;
var info__65878__auto____$1 = (((info__65878__auto__ == null))?(function (){var info68321 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.index_nav,new cljs.core.Var(function(){return com.rpl.specter.index_nav;},new cljs.core.Symbol("com.rpl.specter","index-nav","com.rpl.specter/index-nav",2054501071,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"index-nav","index-nav",-157001568,null),"com/rpl/specter.cljc",12,1,983,986,cljs.core.List.EMPTY,"Navigates to the index of the sequence if within 0 and size. Transforms move element\n          at that index to the new index, shifting other elements in the sequence.",(cljs.core.truth_(com.rpl.specter.index_nav)?com.rpl.specter.index_nav.cljs$lang$test:null)])),new cljs.core.Symbol(null,"index-nav","index-nav",-157001568,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym(curri,new cljs.core.Symbol(null,"curri","curri",347667219,null))], null),cljs.core.list(new cljs.core.Symbol(null,"index-nav","index-nav",-157001568,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"curri","curri",347667219,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"index-nav","index-nav",-157001568,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)], null));
com.rpl.specter.pathcache68320 = info68321;

return info68321;
})():info__65878__auto__);
var precompiled68322 = com.rpl.specter.impl.cached_path_info_precompiled(info__65878__auto____$1);
var dynamic_QMARK___65879__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__65878__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___65879__auto__)){
var G__68326 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.index_nav,curri], null);
return (precompiled68322.cljs$core$IFn$_invoke$arity$1 ? precompiled68322.cljs$core$IFn$_invoke$arity$1(G__68326) : precompiled68322.call(null,G__68326));
} else {
return precompiled68322;
}
})(),newi,com.rpl.specter.impl.compiled_setval_STAR_((function (){var info__65878__auto__ = com.rpl.specter.pathcache68327;
var info__65878__auto____$1 = (((info__65878__auto__ == null))?(function (){var info68328 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.nthpath,new cljs.core.Var(function(){return com.rpl.specter.nthpath;},new cljs.core.Symbol("com.rpl.specter","nthpath","com.rpl.specter/nthpath",2085224162,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),"com/rpl/specter.cljc",10,1,963,965,cljs.core.List.EMPTY,"Navigate to the specified indices one after another. If navigate to\n            NONE, that element is removed from the sequence.",(cljs.core.truth_(com.rpl.specter.nthpath)?com.rpl.specter.nthpath.cljs$lang$test:null)])),new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym(curri,new cljs.core.Symbol(null,"curri","curri",347667219,null))], null),cljs.core.list(new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"curri","curri",347667219,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)], null));
com.rpl.specter.pathcache68327 = info68328;

return info68328;
})():info__65878__auto__);
var precompiled68329 = com.rpl.specter.impl.cached_path_info_precompiled(info__65878__auto____$1);
var dynamic_QMARK___65879__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__65878__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___65879__auto__)){
var G__68337 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.nthpath,curri], null);
return (precompiled68329.cljs$core$IFn$_invoke$arity$1 ? precompiled68329.cljs$core$IFn$_invoke$arity$1(G__68337) : precompiled68329.call(null,G__68337));
} else {
return precompiled68329;
}
})(),newe,s));
}),structure,structure);
}));

(com.rpl.specter.t_com$rpl$specter68264.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"start","start",1285322546,null),new cljs.core.Symbol(null,"meta68265","meta68265",988423636,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter68264.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter68264.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter68264");

(com.rpl.specter.t_com$rpl$specter68264.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter68264");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter68264.
 */
com.rpl.specter.__GT_t_com$rpl$specter68264 = (function com$rpl$specter$__GT_t_com$rpl$specter68264(start__$1,meta68265){
return (new com.rpl.specter.t_com$rpl$specter68264(start__$1,meta68265));
});

}

return (new com.rpl.specter.t_com$rpl$specter68264(start,null));
}));
/**
 * `indexed-vals` with a starting index of 0.
 */
com.rpl.specter.INDEXED_VALS = (com.rpl.specter.indexed_vals.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.indexed_vals.cljs$core$IFn$_invoke$arity$1((0)) : com.rpl.specter.indexed_vals.call(null,(0)));
/**
 * Navigates to result of running `afn` on the currently navigated value.
 */
com.rpl.specter.view = com.rpl.specter.impl.direct_nav_obj((function (afn){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter68347 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter68347 = (function (afn,meta68348){
this.afn = afn;
this.meta68348 = meta68348;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter68347.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_68349,meta68348__$1){
var self__ = this;
var _68349__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter68347(self__.afn,meta68348__$1));
}));

(com.rpl.specter.t_com$rpl$specter68347.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_68349){
var self__ = this;
var _68349__$1 = this;
return self__.meta68348;
}));

(com.rpl.specter.t_com$rpl$specter68347.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter68347.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
var G__68357 = vals;
var G__68358 = (self__.afn.cljs$core$IFn$_invoke$arity$1 ? self__.afn.cljs$core$IFn$_invoke$arity$1(structure) : self__.afn.call(null,structure));
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(G__68357,G__68358) : next_fn.call(null,G__68357,G__68358));
}));

(com.rpl.specter.t_com$rpl$specter68347.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
var G__68367 = vals;
var G__68368 = (self__.afn.cljs$core$IFn$_invoke$arity$1 ? self__.afn.cljs$core$IFn$_invoke$arity$1(structure) : self__.afn.call(null,structure));
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(G__68367,G__68368) : next_fn.call(null,G__68367,G__68368));
}));

(com.rpl.specter.t_com$rpl$specter68347.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"meta68348","meta68348",-394770207,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter68347.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter68347.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter68347");

(com.rpl.specter.t_com$rpl$specter68347.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter68347");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter68347.
 */
com.rpl.specter.__GT_t_com$rpl$specter68347 = (function com$rpl$specter$__GT_t_com$rpl$specter68347(afn__$1,meta68348){
return (new com.rpl.specter.t_com$rpl$specter68347(afn__$1,meta68348));
});

}

return (new com.rpl.specter.t_com$rpl$specter68347(afn,null));
}));


com.rpl.specter.parser_select_STAR_ = (function com$rpl$specter$parser_select_STAR_(parse_fn,unparse_fn,structure,next_fn){
var G__68381 = (parse_fn.cljs$core$IFn$_invoke$arity$1 ? parse_fn.cljs$core$IFn$_invoke$arity$1(structure) : parse_fn.call(null,structure));
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__68381) : next_fn.call(null,G__68381));
});

com.rpl.specter.parser_transform_STAR_ = (function com$rpl$specter$parser_transform_STAR_(parse_fn,unparse_fn,structure,next_fn){
var G__68382 = (function (){var G__68384 = (parse_fn.cljs$core$IFn$_invoke$arity$1 ? parse_fn.cljs$core$IFn$_invoke$arity$1(structure) : parse_fn.call(null,structure));
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__68384) : next_fn.call(null,G__68384));
})();
return (unparse_fn.cljs$core$IFn$_invoke$arity$1 ? unparse_fn.cljs$core$IFn$_invoke$arity$1(G__68382) : unparse_fn.call(null,G__68382));
});

/**
 * Navigate to the result of running `parse-fn` on the value. For
 *        transforms, the transformed value then has `unparse-fn` run on
 *        it to get the final value at this point.
 */
com.rpl.specter.parser = com.rpl.specter.impl.direct_nav_obj((function (parse_fn,unparse_fn){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter68390 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter68390 = (function (parse_fn,unparse_fn,meta68391){
this.parse_fn = parse_fn;
this.unparse_fn = unparse_fn;
this.meta68391 = meta68391;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter68390.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_68392,meta68391__$1){
var self__ = this;
var _68392__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter68390(self__.parse_fn,self__.unparse_fn,meta68391__$1));
}));

(com.rpl.specter.t_com$rpl$specter68390.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_68392){
var self__ = this;
var _68392__$1 = this;
return self__.meta68391;
}));

(com.rpl.specter.t_com$rpl$specter68390.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter68390.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__64432__auto__,vals__64433__auto__,structure,next_fn__64434__auto__){
var self__ = this;
var this__64432__auto____$1 = this;
var next_fn = (function (s__64435__auto__){
return (next_fn__64434__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__64434__auto__.cljs$core$IFn$_invoke$arity$2(vals__64433__auto__,s__64435__auto__) : next_fn__64434__auto__.call(null,vals__64433__auto__,s__64435__auto__));
});
return next_fn((self__.parse_fn.cljs$core$IFn$_invoke$arity$1 ? self__.parse_fn.cljs$core$IFn$_invoke$arity$1(structure) : self__.parse_fn.call(null,structure)));
}));

(com.rpl.specter.t_com$rpl$specter68390.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__64432__auto__,vals__64433__auto__,structure,next_fn__64434__auto__){
var self__ = this;
var this__64432__auto____$1 = this;
var next_fn = (function (s__64435__auto__){
return (next_fn__64434__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__64434__auto__.cljs$core$IFn$_invoke$arity$2(vals__64433__auto__,s__64435__auto__) : next_fn__64434__auto__.call(null,vals__64433__auto__,s__64435__auto__));
});
var G__68416 = next_fn((self__.parse_fn.cljs$core$IFn$_invoke$arity$1 ? self__.parse_fn.cljs$core$IFn$_invoke$arity$1(structure) : self__.parse_fn.call(null,structure)));
return (self__.unparse_fn.cljs$core$IFn$_invoke$arity$1 ? self__.unparse_fn.cljs$core$IFn$_invoke$arity$1(G__68416) : self__.unparse_fn.call(null,G__68416));
}));

(com.rpl.specter.t_com$rpl$specter68390.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"parse-fn","parse-fn",-836029424,null),new cljs.core.Symbol(null,"unparse-fn","unparse-fn",407187734,null),new cljs.core.Symbol(null,"meta68391","meta68391",-585782616,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter68390.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter68390.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter68390");

(com.rpl.specter.t_com$rpl$specter68390.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter68390");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter68390.
 */
com.rpl.specter.__GT_t_com$rpl$specter68390 = (function com$rpl$specter$__GT_t_com$rpl$specter68390(parse_fn__$1,unparse_fn__$1,meta68391){
return (new com.rpl.specter.t_com$rpl$specter68390(parse_fn__$1,unparse_fn__$1,meta68391));
});

}

return (new com.rpl.specter.t_com$rpl$specter68390(parse_fn,unparse_fn,null));
}));


com.rpl.specter.ATOM_select_STAR_ = (function com$rpl$specter$ATOM_select_STAR_(structure,next_fn){
var G__68428 = cljs.core.deref(structure);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__68428) : next_fn.call(null,G__68428));
});

com.rpl.specter.ATOM_transform_STAR_ = (function com$rpl$specter$ATOM_transform_STAR_(structure,next_fn){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(structure,next_fn);

return structure;
});

/**
 * Navigates to atom value.
 */
com.rpl.specter.ATOM = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter68431 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter68431 = (function (meta68432){
this.meta68432 = meta68432;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter68431.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_68433,meta68432__$1){
var self__ = this;
var _68433__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter68431(meta68432__$1));
}));

(com.rpl.specter.t_com$rpl$specter68431.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_68433){
var self__ = this;
var _68433__$1 = this;
return self__.meta68432;
}));

(com.rpl.specter.t_com$rpl$specter68431.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter68431.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__64432__auto__,vals__64433__auto__,structure,next_fn__64434__auto__){
var self__ = this;
var this__64432__auto____$1 = this;
var next_fn = (function (s__64435__auto__){
return (next_fn__64434__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__64434__auto__.cljs$core$IFn$_invoke$arity$2(vals__64433__auto__,s__64435__auto__) : next_fn__64434__auto__.call(null,vals__64433__auto__,s__64435__auto__));
});
return next_fn(cljs.core.deref(structure));
}));

(com.rpl.specter.t_com$rpl$specter68431.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__64432__auto__,vals__64433__auto__,structure,next_fn__64434__auto__){
var self__ = this;
var this__64432__auto____$1 = this;
var next_fn = (function (s__64435__auto__){
return (next_fn__64434__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__64434__auto__.cljs$core$IFn$_invoke$arity$2(vals__64433__auto__,s__64435__auto__) : next_fn__64434__auto__.call(null,vals__64433__auto__,s__64435__auto__));
});
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(structure,next_fn);

return structure;
}));

(com.rpl.specter.t_com$rpl$specter68431.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta68432","meta68432",1231068749,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter68431.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter68431.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter68431");

(com.rpl.specter.t_com$rpl$specter68431.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter68431");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter68431.
 */
com.rpl.specter.__GT_t_com$rpl$specter68431 = (function com$rpl$specter$__GT_t_com$rpl$specter68431(meta68432){
return (new com.rpl.specter.t_com$rpl$specter68431(meta68432));
});

}

return (new com.rpl.specter.t_com$rpl$specter68431(null));
})()
;


com.rpl.specter.regex_nav_select_STAR_ = (function com$rpl$specter$regex_nav_select_STAR_(re,structure,next_fn){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (curr__59212__auto__,s){
var ret__59213__auto__ = (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(s) : next_fn.call(null,s));
if((ret__59213__auto__ === com.rpl.specter.NONE)){
return curr__59212__auto__;
} else {
if(cljs.core.reduced_QMARK_(ret__59213__auto__)){
return cljs.core.reduced(ret__59213__auto__);
} else {
return ret__59213__auto__;
}
}
}),com.rpl.specter.NONE,cljs.core.re_seq(re,structure));
});

com.rpl.specter.regex_nav_transform_STAR_ = (function com$rpl$specter$regex_nav_transform_STAR_(re,structure,next_fn){
return clojure.string.replace(structure,re,next_fn);
});

com.rpl.specter.regex_nav = com.rpl.specter.impl.direct_nav_obj((function (re){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter68445 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter68445 = (function (re,meta68446){
this.re = re;
this.meta68446 = meta68446;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter68445.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_68447,meta68446__$1){
var self__ = this;
var _68447__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter68445(self__.re,meta68446__$1));
}));

(com.rpl.specter.t_com$rpl$specter68445.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_68447){
var self__ = this;
var _68447__$1 = this;
return self__.meta68446;
}));

(com.rpl.specter.t_com$rpl$specter68445.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter68445.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__64432__auto__,vals__64433__auto__,structure,next_fn__64434__auto__){
var self__ = this;
var this__64432__auto____$1 = this;
var next_fn = (function (s__64435__auto__){
return (next_fn__64434__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__64434__auto__.cljs$core$IFn$_invoke$arity$2(vals__64433__auto__,s__64435__auto__) : next_fn__64434__auto__.call(null,vals__64433__auto__,s__64435__auto__));
});
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (curr__59212__auto__,s){
var ret__59213__auto__ = next_fn(s);
if((ret__59213__auto__ === com.rpl.specter.NONE)){
return curr__59212__auto__;
} else {
if(cljs.core.reduced_QMARK_(ret__59213__auto__)){
return cljs.core.reduced(ret__59213__auto__);
} else {
return ret__59213__auto__;
}
}
}),com.rpl.specter.NONE,cljs.core.re_seq(self__.re,structure));
}));

(com.rpl.specter.t_com$rpl$specter68445.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__64432__auto__,vals__64433__auto__,structure,next_fn__64434__auto__){
var self__ = this;
var this__64432__auto____$1 = this;
var next_fn = (function (s__64435__auto__){
return (next_fn__64434__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__64434__auto__.cljs$core$IFn$_invoke$arity$2(vals__64433__auto__,s__64435__auto__) : next_fn__64434__auto__.call(null,vals__64433__auto__,s__64435__auto__));
});
return clojure.string.replace(structure,self__.re,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter68445.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"re","re",1869207729,null),new cljs.core.Symbol(null,"meta68446","meta68446",-2083572640,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter68445.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter68445.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter68445");

(com.rpl.specter.t_com$rpl$specter68445.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter68445");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter68445.
 */
com.rpl.specter.__GT_t_com$rpl$specter68445 = (function com$rpl$specter$__GT_t_com$rpl$specter68445(re__$1,meta68446){
return (new com.rpl.specter.t_com$rpl$specter68445(re__$1,meta68446));
});

}

return (new com.rpl.specter.t_com$rpl$specter68445(re,null));
}));
/**
 * Filters the current value based on whether a path finds anything.
 *   e.g. (selected? :vals ALL even?) keeps the current element only if an
 *   even number exists for the :vals key.
 */
com.rpl.specter.selected_QMARK_ = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__69153__delegate = function (path){
var temp__5733__auto__ = com.rpl.specter.navs.extract_basic_filter_fn(path);
if(cljs.core.truth_(temp__5733__auto__)){
var afn = temp__5733__auto__;
return afn;
} else {
var builder__65871__auto__ = com.rpl.specter.impl.direct_nav_obj((function (late){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter68457 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter68457 = (function (path,temp__5733__auto__,late,meta68458){
this.path = path;
this.temp__5733__auto__ = temp__5733__auto__;
this.late = late;
this.meta68458 = meta68458;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter68457.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_68459,meta68458__$1){
var self__ = this;
var _68459__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter68457(self__.path,self__.temp__5733__auto__,self__.late,meta68458__$1));
}));

(com.rpl.specter.t_com$rpl$specter68457.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_68459){
var self__ = this;
var _68459__$1 = this;
return self__.meta68458;
}));

(com.rpl.specter.t_com$rpl$specter68457.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter68457.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.impl.filter_select((function (p1__68455_SHARP_){
return com.rpl.specter.navs.selected_QMARK__STAR_(self__.late,vals,p1__68455_SHARP_);
}),vals,structure,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter68457.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.impl.filter_transform((function (p1__68456_SHARP_){
return com.rpl.specter.navs.selected_QMARK__STAR_(self__.late,vals,p1__68456_SHARP_);
}),vals,structure,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter68457.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"temp__5733__auto__","temp__5733__auto__",484944449,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"meta68458","meta68458",1703172037,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter68457.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter68457.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter68457");

(com.rpl.specter.t_com$rpl$specter68457.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter68457");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter68457.
 */
com.rpl.specter.__GT_t_com$rpl$specter68457 = (function com$rpl$specter$__GT_t_com$rpl$specter68457(path__$1,temp__5733__auto____$1,late__$1,meta68458){
return (new com.rpl.specter.t_com$rpl$specter68457(path__$1,temp__5733__auto____$1,late__$1,meta68458));
});

}

return (new com.rpl.specter.t_com$rpl$specter68457(path,temp__5733__auto__,late,null));
}));
var curr_params__65872__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(path) : com.rpl.specter.late_path.call(null,path))], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__65872__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__65871__auto__,curr_params__65872__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__65871__auto__,curr_params__65872__auto__,null);
}
}
};
var G__69153 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__69158__i = 0, G__69158__a = new Array(arguments.length -  0);
while (G__69158__i < G__69158__a.length) {G__69158__a[G__69158__i] = arguments[G__69158__i + 0]; ++G__69158__i;}
  path = new cljs.core.IndexedSeq(G__69158__a,0,null);
} 
return G__69153__delegate.call(this,path);};
G__69153.cljs$lang$maxFixedArity = 0;
G__69153.cljs$lang$applyTo = (function (arglist__69159){
var path = cljs.core.seq(arglist__69159);
return G__69153__delegate(path);
});
G__69153.cljs$core$IFn$_invoke$arity$variadic = G__69153__delegate;
return G__69153;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
com.rpl.specter.not_selected_QMARK_ = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__69160__delegate = function (path){
var temp__5733__auto__ = com.rpl.specter.navs.extract_basic_filter_fn(path);
if(cljs.core.truth_(temp__5733__auto__)){
var afn = temp__5733__auto__;
return (function (s){
return cljs.core.not((afn.cljs$core$IFn$_invoke$arity$1 ? afn.cljs$core$IFn$_invoke$arity$1(s) : afn.call(null,s)));
});
} else {
var builder__65871__auto__ = com.rpl.specter.impl.direct_nav_obj((function (late){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter68468 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter68468 = (function (path,temp__5733__auto__,late,meta68469){
this.path = path;
this.temp__5733__auto__ = temp__5733__auto__;
this.late = late;
this.meta68469 = meta68469;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter68468.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_68470,meta68469__$1){
var self__ = this;
var _68470__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter68468(self__.path,self__.temp__5733__auto__,self__.late,meta68469__$1));
}));

(com.rpl.specter.t_com$rpl$specter68468.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_68470){
var self__ = this;
var _68470__$1 = this;
return self__.meta68469;
}));

(com.rpl.specter.t_com$rpl$specter68468.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter68468.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.impl.filter_select((function (p1__68464_SHARP_){
return com.rpl.specter.navs.not_selected_QMARK__STAR_(self__.late,vals,p1__68464_SHARP_);
}),vals,structure,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter68468.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.impl.filter_transform((function (p1__68466_SHARP_){
return com.rpl.specter.navs.not_selected_QMARK__STAR_(self__.late,vals,p1__68466_SHARP_);
}),vals,structure,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter68468.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"temp__5733__auto__","temp__5733__auto__",484944449,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"meta68469","meta68469",266677534,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter68468.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter68468.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter68468");

(com.rpl.specter.t_com$rpl$specter68468.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter68468");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter68468.
 */
com.rpl.specter.__GT_t_com$rpl$specter68468 = (function com$rpl$specter$__GT_t_com$rpl$specter68468(path__$1,temp__5733__auto____$1,late__$1,meta68469){
return (new com.rpl.specter.t_com$rpl$specter68468(path__$1,temp__5733__auto____$1,late__$1,meta68469));
});

}

return (new com.rpl.specter.t_com$rpl$specter68468(path,temp__5733__auto__,late,null));
}));
var curr_params__65872__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(path) : com.rpl.specter.late_path.call(null,path))], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__65872__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__65871__auto__,curr_params__65872__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__65871__auto__,curr_params__65872__auto__,null);
}
}
};
var G__69160 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__69166__i = 0, G__69166__a = new Array(arguments.length -  0);
while (G__69166__i < G__69166__a.length) {G__69166__a[G__69166__i] = arguments[G__69166__i + 0]; ++G__69166__i;}
  path = new cljs.core.IndexedSeq(G__69166__a,0,null);
} 
return G__69160__delegate.call(this,path);};
G__69160.cljs$lang$maxFixedArity = 0;
G__69160.cljs$lang$applyTo = (function (arglist__69168){
var path = cljs.core.seq(arglist__69168);
return G__69160__delegate(path);
});
G__69160.cljs$core$IFn$_invoke$arity$variadic = G__69160__delegate;
return G__69160;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Navigates to a view of the current sequence that only contains elements that
 *   match the given path. An element matches the selector path if calling select
 *   on that element with the path yields anything other than an empty sequence.
 * 
 *   For transformation: `NONE` entries in the result sequence cause corresponding entries in
 *   input to be removed. A result sequence smaller than the input sequence is equivalent to
 *   padding the result sequence with `NONE` at the end until the same size as the input.
 */
com.rpl.specter.filterer = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__69170__delegate = function (path){
var G__68479 = com.rpl.specter.ALL;
var G__68480 = (com.rpl.specter.selected_QMARK_.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.selected_QMARK_.cljs$core$IFn$_invoke$arity$1(path) : com.rpl.specter.selected_QMARK_.call(null,path));
return (com.rpl.specter.subselect.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.subselect.cljs$core$IFn$_invoke$arity$2(G__68479,G__68480) : com.rpl.specter.subselect.call(null,G__68479,G__68480));
};
var G__69170 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__69172__i = 0, G__69172__a = new Array(arguments.length -  0);
while (G__69172__i < G__69172__a.length) {G__69172__a[G__69172__i] = arguments[G__69172__i + 0]; ++G__69172__i;}
  path = new cljs.core.IndexedSeq(G__69172__a,0,null);
} 
return G__69170__delegate.call(this,path);};
G__69170.cljs$lang$maxFixedArity = 0;
G__69170.cljs$lang$applyTo = (function (arglist__69173){
var path = cljs.core.seq(arglist__69173);
return G__69170__delegate(path);
});
G__69170.cljs$core$IFn$_invoke$arity$variadic = G__69170__delegate;
return G__69170;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Navigates to a view of the current value by transforming it with the
 * specified path and update-fn.
 */
com.rpl.specter.transformed = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function (path,update_fn){
var builder__65871__auto__ = com.rpl.specter.impl.direct_nav_obj((function (late,late_fn){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter68483 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter68483 = (function (path,update_fn,late,late_fn,meta68484){
this.path = path;
this.update_fn = update_fn;
this.late = late;
this.late_fn = late_fn;
this.meta68484 = meta68484;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter68483.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_68485,meta68484__$1){
var self__ = this;
var _68485__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter68483(self__.path,self__.update_fn,self__.late,self__.late_fn,meta68484__$1));
}));

(com.rpl.specter.t_com$rpl$specter68483.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_68485){
var self__ = this;
var _68485__$1 = this;
return self__.meta68484;
}));

(com.rpl.specter.t_com$rpl$specter68483.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter68483.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__64432__auto__,vals__64433__auto__,structure,next_fn__64434__auto__){
var self__ = this;
var this__64432__auto____$1 = this;
var next_fn = (function (s__64435__auto__){
return (next_fn__64434__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__64434__auto__.cljs$core$IFn$_invoke$arity$2(vals__64433__auto__,s__64435__auto__) : next_fn__64434__auto__.call(null,vals__64433__auto__,s__64435__auto__));
});
return next_fn((com.rpl.specter.compiled_transform.cljs$core$IFn$_invoke$arity$3 ? com.rpl.specter.compiled_transform.cljs$core$IFn$_invoke$arity$3(self__.late,self__.late_fn,structure) : com.rpl.specter.compiled_transform.call(null,self__.late,self__.late_fn,structure)));
}));

(com.rpl.specter.t_com$rpl$specter68483.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__64432__auto__,vals__64433__auto__,structure,next_fn__64434__auto__){
var self__ = this;
var this__64432__auto____$1 = this;
var next_fn = (function (s__64435__auto__){
return (next_fn__64434__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__64434__auto__.cljs$core$IFn$_invoke$arity$2(vals__64433__auto__,s__64435__auto__) : next_fn__64434__auto__.call(null,vals__64433__auto__,s__64435__auto__));
});
return next_fn((com.rpl.specter.compiled_transform.cljs$core$IFn$_invoke$arity$3 ? com.rpl.specter.compiled_transform.cljs$core$IFn$_invoke$arity$3(self__.late,self__.late_fn,structure) : com.rpl.specter.compiled_transform.call(null,self__.late,self__.late_fn,structure)));
}));

(com.rpl.specter.t_com$rpl$specter68483.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"update-fn","update-fn",-1943348456,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"late-fn","late-fn",268309430,null),new cljs.core.Symbol(null,"meta68484","meta68484",1715995883,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter68483.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter68483.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter68483");

(com.rpl.specter.t_com$rpl$specter68483.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter68483");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter68483.
 */
com.rpl.specter.__GT_t_com$rpl$specter68483 = (function com$rpl$specter$__GT_t_com$rpl$specter68483(path__$1,update_fn__$1,late__$1,late_fn__$1,meta68484){
return (new com.rpl.specter.t_com$rpl$specter68483(path__$1,update_fn__$1,late__$1,late_fn__$1,meta68484));
});

}

return (new com.rpl.specter.t_com$rpl$specter68483(path,update_fn,late,late_fn,null));
}));
var curr_params__65872__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(path) : com.rpl.specter.late_path.call(null,path)),update_fn], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__65872__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__65871__auto__,curr_params__65872__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__65871__auto__,curr_params__65872__auto__,null);
}
})),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Navigates to a view of the current value by transforming with a reduction over
 * the specified traversal.
 */
com.rpl.specter.traversed = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function (path,reduce_fn){
var builder__65871__auto__ = com.rpl.specter.impl.direct_nav_obj((function (late,late_fn){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter68494 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter68494 = (function (path,reduce_fn,late,late_fn,meta68495){
this.path = path;
this.reduce_fn = reduce_fn;
this.late = late;
this.late_fn = late_fn;
this.meta68495 = meta68495;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter68494.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_68496,meta68495__$1){
var self__ = this;
var _68496__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter68494(self__.path,self__.reduce_fn,self__.late,self__.late_fn,meta68495__$1));
}));

(com.rpl.specter.t_com$rpl$specter68494.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_68496){
var self__ = this;
var _68496__$1 = this;
return self__.meta68495;
}));

(com.rpl.specter.t_com$rpl$specter68494.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter68494.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__64432__auto__,vals__64433__auto__,structure,next_fn__64434__auto__){
var self__ = this;
var this__64432__auto____$1 = this;
var next_fn = (function (s__64435__auto__){
return (next_fn__64434__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__64434__auto__.cljs$core$IFn$_invoke$arity$2(vals__64433__auto__,s__64435__auto__) : next_fn__64434__auto__.call(null,vals__64433__auto__,s__64435__auto__));
});
return next_fn(cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(self__.late_fn,(com.rpl.specter.compiled_traverse.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_traverse.cljs$core$IFn$_invoke$arity$2(self__.late,structure) : com.rpl.specter.compiled_traverse.call(null,self__.late,structure))));
}));

(com.rpl.specter.t_com$rpl$specter68494.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__64432__auto__,vals__64433__auto__,structure,next_fn__64434__auto__){
var self__ = this;
var this__64432__auto____$1 = this;
var next_fn = (function (s__64435__auto__){
return (next_fn__64434__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__64434__auto__.cljs$core$IFn$_invoke$arity$2(vals__64433__auto__,s__64435__auto__) : next_fn__64434__auto__.call(null,vals__64433__auto__,s__64435__auto__));
});
return next_fn(cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(self__.late_fn,(com.rpl.specter.compiled_traverse.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_traverse.cljs$core$IFn$_invoke$arity$2(self__.late,structure) : com.rpl.specter.compiled_traverse.call(null,self__.late,structure))));
}));

(com.rpl.specter.t_com$rpl$specter68494.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"reduce-fn","reduce-fn",-1484020844,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"late-fn","late-fn",268309430,null),new cljs.core.Symbol(null,"meta68495","meta68495",-1963638979,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter68494.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter68494.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter68494");

(com.rpl.specter.t_com$rpl$specter68494.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter68494");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter68494.
 */
com.rpl.specter.__GT_t_com$rpl$specter68494 = (function com$rpl$specter$__GT_t_com$rpl$specter68494(path__$1,reduce_fn__$1,late__$1,late_fn__$1,meta68495){
return (new com.rpl.specter.t_com$rpl$specter68494(path__$1,reduce_fn__$1,late__$1,late_fn__$1,meta68495));
});

}

return (new com.rpl.specter.t_com$rpl$specter68494(path,reduce_fn,late,late_fn,null));
}));
var curr_params__65872__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(path) : com.rpl.specter.late_path.call(null,path)),reduce_fn], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__65872__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__65871__auto__,curr_params__65872__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__65871__auto__,curr_params__65872__auto__,null);
}
})),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Keeps the element only if it matches the supplied predicate. Functions in paths
 *        implicitly convert to this navigator.
 */
com.rpl.specter.pred = com.rpl.specter.impl.pred_STAR_;
com.rpl.specter.pred_EQ_ = (function com$rpl$specter$pred_EQ_(v){
var G__68514 = (function (p1__68508_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__68508_SHARP_,v);
});
return (com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1(G__68514) : com.rpl.specter.pred.call(null,G__68514));
});
com.rpl.specter.pred_LT_ = (function com$rpl$specter$pred_LT_(v){
var G__68517 = (function (p1__68515_SHARP_){
return (p1__68515_SHARP_ < v);
});
return (com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1(G__68517) : com.rpl.specter.pred.call(null,G__68517));
});
com.rpl.specter.pred_GT_ = (function com$rpl$specter$pred_GT_(v){
var G__68519 = (function (p1__68518_SHARP_){
return (p1__68518_SHARP_ > v);
});
return (com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1(G__68519) : com.rpl.specter.pred.call(null,G__68519));
});
com.rpl.specter.pred_LT__EQ_ = (function com$rpl$specter$pred_LT__EQ_(v){
var G__68525 = (function (p1__68524_SHARP_){
return (p1__68524_SHARP_ <= v);
});
return (com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1(G__68525) : com.rpl.specter.pred.call(null,G__68525));
});
com.rpl.specter.pred_GT__EQ_ = (function com$rpl$specter$pred_GT__EQ_(v){
var G__68527 = (function (p1__68526_SHARP_){
return (p1__68526_SHARP_ >= v);
});
return (com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1(G__68527) : com.rpl.specter.pred.call(null,G__68527));
});
goog.object.set(com.rpl.specter.protocols.ImplicitNav,"null",true);

goog.object.set(com.rpl.specter.protocols.implicit_nav,"null",(function (this$){
return com.rpl.specter.STAY;
}));
(cljs.core.Keyword.prototype.com$rpl$specter$protocols$ImplicitNav$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.com$rpl$specter$protocols$ImplicitNav$implicit_nav$arity$1 = (function (this$){
var this$__$1 = this;
return (com.rpl.specter.navs.keypath_STAR_.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.navs.keypath_STAR_.cljs$core$IFn$_invoke$arity$1(this$__$1) : com.rpl.specter.navs.keypath_STAR_.call(null,this$__$1));
}));
(cljs.core.Symbol.prototype.com$rpl$specter$protocols$ImplicitNav$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Symbol.prototype.com$rpl$specter$protocols$ImplicitNav$implicit_nav$arity$1 = (function (this$){
var this$__$1 = this;
return (com.rpl.specter.navs.keypath_STAR_.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.navs.keypath_STAR_.cljs$core$IFn$_invoke$arity$1(this$__$1) : com.rpl.specter.navs.keypath_STAR_.call(null,this$__$1));
}));
goog.object.set(com.rpl.specter.protocols.ImplicitNav,"string",true);

goog.object.set(com.rpl.specter.protocols.implicit_nav,"string",(function (this$){
return (com.rpl.specter.navs.keypath_STAR_.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.navs.keypath_STAR_.cljs$core$IFn$_invoke$arity$1(this$) : com.rpl.specter.navs.keypath_STAR_.call(null,this$));
}));
goog.object.set(com.rpl.specter.protocols.ImplicitNav,"number",true);

goog.object.set(com.rpl.specter.protocols.implicit_nav,"number",(function (this$){
return (com.rpl.specter.navs.keypath_STAR_.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.navs.keypath_STAR_.cljs$core$IFn$_invoke$arity$1(this$) : com.rpl.specter.navs.keypath_STAR_.call(null,this$));
}));
(cljs.core.char$.prototype.com$rpl$specter$protocols$ImplicitNav$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.char$.prototype.com$rpl$specter$protocols$ImplicitNav$implicit_nav$arity$1 = (function (this$){
var this$__$1 = this;
return (com.rpl.specter.navs.keypath_STAR_.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.navs.keypath_STAR_.cljs$core$IFn$_invoke$arity$1(this$__$1) : com.rpl.specter.navs.keypath_STAR_.call(null,this$__$1));
}));
goog.object.set(com.rpl.specter.protocols.ImplicitNav,"boolean",true);

goog.object.set(com.rpl.specter.protocols.implicit_nav,"boolean",(function (this$){
return (com.rpl.specter.navs.keypath_STAR_.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.navs.keypath_STAR_.cljs$core$IFn$_invoke$arity$1(this$) : com.rpl.specter.navs.keypath_STAR_.call(null,this$));
}));
goog.object.set(com.rpl.specter.protocols.ImplicitNav,"function",true);

goog.object.set(com.rpl.specter.protocols.implicit_nav,"function",(function (this$){
return (com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1(this$) : com.rpl.specter.pred.call(null,this$));
}));
(cljs.core.PersistentHashSet.prototype.com$rpl$specter$protocols$ImplicitNav$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentHashSet.prototype.com$rpl$specter$protocols$ImplicitNav$implicit_nav$arity$1 = (function (this$){
var this$__$1 = this;
return (com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1(this$__$1) : com.rpl.specter.pred.call(null,this$__$1));
}));
(RegExp.prototype.com$rpl$specter$protocols$ImplicitNav$ = cljs.core.PROTOCOL_SENTINEL);

(RegExp.prototype.com$rpl$specter$protocols$ImplicitNav$implicit_nav$arity$1 = (function (this$){
var this$__$1 = this;
return (com.rpl.specter.regex_nav.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.regex_nav.cljs$core$IFn$_invoke$arity$1(this$__$1) : com.rpl.specter.regex_nav.call(null,this$__$1));
}));


com.rpl.specter.nil__GT_val_select_STAR_ = (function com$rpl$specter$nil__GT_val_select_STAR_(v,structure,next_fn){
var G__68546 = (((structure == null))?v:structure);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__68546) : next_fn.call(null,G__68546));
});

com.rpl.specter.nil__GT_val_transform_STAR_ = (function com$rpl$specter$nil__GT_val_transform_STAR_(v,structure,next_fn){
var G__68550 = (((structure == null))?v:structure);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__68550) : next_fn.call(null,G__68550));
});

/**
 * Navigates to the provided val if the structure is nil. Otherwise it stays
 *        navigated at the structure.
 */
com.rpl.specter.nil__GT_val = com.rpl.specter.impl.direct_nav_obj((function (v){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter68553 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter68553 = (function (v,meta68554){
this.v = v;
this.meta68554 = meta68554;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter68553.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_68555,meta68554__$1){
var self__ = this;
var _68555__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter68553(self__.v,meta68554__$1));
}));

(com.rpl.specter.t_com$rpl$specter68553.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_68555){
var self__ = this;
var _68555__$1 = this;
return self__.meta68554;
}));

(com.rpl.specter.t_com$rpl$specter68553.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter68553.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__64432__auto__,vals__64433__auto__,structure,next_fn__64434__auto__){
var self__ = this;
var this__64432__auto____$1 = this;
var next_fn = (function (s__64435__auto__){
return (next_fn__64434__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__64434__auto__.cljs$core$IFn$_invoke$arity$2(vals__64433__auto__,s__64435__auto__) : next_fn__64434__auto__.call(null,vals__64433__auto__,s__64435__auto__));
});
return next_fn((((structure == null))?self__.v:structure));
}));

(com.rpl.specter.t_com$rpl$specter68553.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__64432__auto__,vals__64433__auto__,structure,next_fn__64434__auto__){
var self__ = this;
var this__64432__auto____$1 = this;
var next_fn = (function (s__64435__auto__){
return (next_fn__64434__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__64434__auto__.cljs$core$IFn$_invoke$arity$2(vals__64433__auto__,s__64435__auto__) : next_fn__64434__auto__.call(null,vals__64433__auto__,s__64435__auto__));
});
return next_fn((((structure == null))?self__.v:structure));
}));

(com.rpl.specter.t_com$rpl$specter68553.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"v","v",1661996586,null),new cljs.core.Symbol(null,"meta68554","meta68554",-942471977,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter68553.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter68553.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter68553");

(com.rpl.specter.t_com$rpl$specter68553.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter68553");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter68553.
 */
com.rpl.specter.__GT_t_com$rpl$specter68553 = (function com$rpl$specter$__GT_t_com$rpl$specter68553(v__$1,meta68554){
return (new com.rpl.specter.t_com$rpl$specter68553(v__$1,meta68554));
});

}

return (new com.rpl.specter.t_com$rpl$specter68553(v,null));
}));
/**
 * Navigates to #{} if the value is nil. Otherwise it stays
 *        navigated at the current value.
 */
com.rpl.specter.NIL__GT_SET = (function (){var G__68573 = cljs.core.PersistentHashSet.EMPTY;
return (com.rpl.specter.nil__GT_val.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.nil__GT_val.cljs$core$IFn$_invoke$arity$1(G__68573) : com.rpl.specter.nil__GT_val.call(null,G__68573));
})();
/**
 * Navigates to '() if the value is nil. Otherwise it stays
 *        navigated at the current value.
 */
com.rpl.specter.NIL__GT_LIST = (function (){var G__68574 = cljs.core.List.EMPTY;
return (com.rpl.specter.nil__GT_val.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.nil__GT_val.cljs$core$IFn$_invoke$arity$1(G__68574) : com.rpl.specter.nil__GT_val.call(null,G__68574));
})();
/**
 * Navigates to [] if the value is nil. Otherwise it stays
 *        navigated at the current value.
 */
com.rpl.specter.NIL__GT_VECTOR = (function (){var G__68575 = cljs.core.PersistentVector.EMPTY;
return (com.rpl.specter.nil__GT_val.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.nil__GT_val.cljs$core$IFn$_invoke$arity$1(G__68575) : com.rpl.specter.nil__GT_val.call(null,G__68575));
})();


com.rpl.specter.META_select_STAR_ = (function com$rpl$specter$META_select_STAR_(structure,next_fn){
var G__68577 = cljs.core.meta(structure);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__68577) : next_fn.call(null,G__68577));
});

com.rpl.specter.META_transform_STAR_ = (function com$rpl$specter$META_transform_STAR_(structure,next_fn){
return cljs.core.with_meta(structure,(function (){var G__68579 = cljs.core.meta(structure);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__68579) : next_fn.call(null,G__68579));
})());
});

/**
 * Navigates to the metadata of the structure, or nil if
 *   the structure has no metadata or may not contain metadata.
 */
com.rpl.specter.META = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter68580 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter68580 = (function (meta68581){
this.meta68581 = meta68581;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter68580.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_68582,meta68581__$1){
var self__ = this;
var _68582__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter68580(meta68581__$1));
}));

(com.rpl.specter.t_com$rpl$specter68580.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_68582){
var self__ = this;
var _68582__$1 = this;
return self__.meta68581;
}));

(com.rpl.specter.t_com$rpl$specter68580.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter68580.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__64432__auto__,vals__64433__auto__,structure,next_fn__64434__auto__){
var self__ = this;
var this__64432__auto____$1 = this;
var next_fn = (function (s__64435__auto__){
return (next_fn__64434__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__64434__auto__.cljs$core$IFn$_invoke$arity$2(vals__64433__auto__,s__64435__auto__) : next_fn__64434__auto__.call(null,vals__64433__auto__,s__64435__auto__));
});
return next_fn(cljs.core.meta(structure));
}));

(com.rpl.specter.t_com$rpl$specter68580.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__64432__auto__,vals__64433__auto__,structure,next_fn__64434__auto__){
var self__ = this;
var this__64432__auto____$1 = this;
var next_fn = (function (s__64435__auto__){
return (next_fn__64434__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__64434__auto__.cljs$core$IFn$_invoke$arity$2(vals__64433__auto__,s__64435__auto__) : next_fn__64434__auto__.call(null,vals__64433__auto__,s__64435__auto__));
});
return cljs.core.with_meta(structure,next_fn(cljs.core.meta(structure)));
}));

(com.rpl.specter.t_com$rpl$specter68580.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta68581","meta68581",863716110,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter68580.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter68580.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter68580");

(com.rpl.specter.t_com$rpl$specter68580.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter68580");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter68580.
 */
com.rpl.specter.__GT_t_com$rpl$specter68580 = (function com$rpl$specter$__GT_t_com$rpl$specter68580(meta68581){
return (new com.rpl.specter.t_com$rpl$specter68580(meta68581));
});

}

return (new com.rpl.specter.t_com$rpl$specter68580(null));
})()
;


com.rpl.specter.NAME_select_STAR_ = (function com$rpl$specter$NAME_select_STAR_(structure,next_fn){
var G__68607 = cljs.core.name(structure);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__68607) : next_fn.call(null,G__68607));
});

com.rpl.specter.NAME_transform_STAR_ = (function com$rpl$specter$NAME_transform_STAR_(structure,next_fn){
var new_name = (function (){var G__68616 = cljs.core.name(structure);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__68616) : next_fn.call(null,G__68616));
})();
var ns = cljs.core.namespace(structure);
if((structure instanceof cljs.core.Keyword)){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(ns,new_name);
} else {
if((structure instanceof cljs.core.Symbol)){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(ns,new_name);
} else {
return com.rpl.specter.impl.throw_illegal_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["NAME can only be used on symbols or keywords - ",structure], 0));

}
}
});

/**
 * Navigates to the name portion of the keyword or symbol
 */
com.rpl.specter.NAME = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter68628 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter68628 = (function (meta68630){
this.meta68630 = meta68630;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter68628.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_68631,meta68630__$1){
var self__ = this;
var _68631__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter68628(meta68630__$1));
}));

(com.rpl.specter.t_com$rpl$specter68628.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_68631){
var self__ = this;
var _68631__$1 = this;
return self__.meta68630;
}));

(com.rpl.specter.t_com$rpl$specter68628.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter68628.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__64432__auto__,vals__64433__auto__,structure,next_fn__64434__auto__){
var self__ = this;
var this__64432__auto____$1 = this;
var next_fn = (function (s__64435__auto__){
return (next_fn__64434__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__64434__auto__.cljs$core$IFn$_invoke$arity$2(vals__64433__auto__,s__64435__auto__) : next_fn__64434__auto__.call(null,vals__64433__auto__,s__64435__auto__));
});
return next_fn(cljs.core.name(structure));
}));

(com.rpl.specter.t_com$rpl$specter68628.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__64432__auto__,vals__64433__auto__,structure,next_fn__64434__auto__){
var self__ = this;
var this__64432__auto____$1 = this;
var next_fn = (function (s__64435__auto__){
return (next_fn__64434__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__64434__auto__.cljs$core$IFn$_invoke$arity$2(vals__64433__auto__,s__64435__auto__) : next_fn__64434__auto__.call(null,vals__64433__auto__,s__64435__auto__));
});
var new_name = next_fn(cljs.core.name(structure));
var ns = cljs.core.namespace(structure);
if((structure instanceof cljs.core.Keyword)){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(ns,new_name);
} else {
if((structure instanceof cljs.core.Symbol)){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(ns,new_name);
} else {
return com.rpl.specter.impl.throw_illegal_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["NAME can only be used on symbols or keywords - ",structure], 0));

}
}
}));

(com.rpl.specter.t_com$rpl$specter68628.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta68630","meta68630",-1913543603,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter68628.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter68628.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter68628");

(com.rpl.specter.t_com$rpl$specter68628.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter68628");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter68628.
 */
com.rpl.specter.__GT_t_com$rpl$specter68628 = (function com$rpl$specter$__GT_t_com$rpl$specter68628(meta68630){
return (new com.rpl.specter.t_com$rpl$specter68628(meta68630));
});

}

return (new com.rpl.specter.t_com$rpl$specter68628(null));
})()
;


com.rpl.specter.NAMESPACE_select_STAR_ = (function com$rpl$specter$NAMESPACE_select_STAR_(structure,next_fn){
var G__68671 = cljs.core.namespace(structure);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__68671) : next_fn.call(null,G__68671));
});

com.rpl.specter.NAMESPACE_transform_STAR_ = (function com$rpl$specter$NAMESPACE_transform_STAR_(structure,next_fn){
var name = cljs.core.name(structure);
var new_ns = (function (){var G__68672 = cljs.core.namespace(structure);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__68672) : next_fn.call(null,G__68672));
})();
if((structure instanceof cljs.core.Keyword)){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(new_ns,name);
} else {
if((structure instanceof cljs.core.Symbol)){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(new_ns,name);
} else {
return com.rpl.specter.impl.throw_illegal_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["NAMESPACE can only be used on symbols or keywords - ",structure], 0));

}
}
});

/**
 * Navigates to the namespace portion of the keyword or symbol
 */
com.rpl.specter.NAMESPACE = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter68675 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter68675 = (function (meta68676){
this.meta68676 = meta68676;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter68675.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_68677,meta68676__$1){
var self__ = this;
var _68677__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter68675(meta68676__$1));
}));

(com.rpl.specter.t_com$rpl$specter68675.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_68677){
var self__ = this;
var _68677__$1 = this;
return self__.meta68676;
}));

(com.rpl.specter.t_com$rpl$specter68675.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter68675.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__64432__auto__,vals__64433__auto__,structure,next_fn__64434__auto__){
var self__ = this;
var this__64432__auto____$1 = this;
var next_fn = (function (s__64435__auto__){
return (next_fn__64434__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__64434__auto__.cljs$core$IFn$_invoke$arity$2(vals__64433__auto__,s__64435__auto__) : next_fn__64434__auto__.call(null,vals__64433__auto__,s__64435__auto__));
});
return next_fn(cljs.core.namespace(structure));
}));

(com.rpl.specter.t_com$rpl$specter68675.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__64432__auto__,vals__64433__auto__,structure,next_fn__64434__auto__){
var self__ = this;
var this__64432__auto____$1 = this;
var next_fn = (function (s__64435__auto__){
return (next_fn__64434__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__64434__auto__.cljs$core$IFn$_invoke$arity$2(vals__64433__auto__,s__64435__auto__) : next_fn__64434__auto__.call(null,vals__64433__auto__,s__64435__auto__));
});
var name = cljs.core.name(structure);
var new_ns = next_fn(cljs.core.namespace(structure));
if((structure instanceof cljs.core.Keyword)){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(new_ns,name);
} else {
if((structure instanceof cljs.core.Symbol)){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(new_ns,name);
} else {
return com.rpl.specter.impl.throw_illegal_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["NAMESPACE can only be used on symbols or keywords - ",structure], 0));

}
}
}));

(com.rpl.specter.t_com$rpl$specter68675.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta68676","meta68676",-1721148326,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter68675.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter68675.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter68675");

(com.rpl.specter.t_com$rpl$specter68675.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter68675");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter68675.
 */
com.rpl.specter.__GT_t_com$rpl$specter68675 = (function com$rpl$specter$__GT_t_com$rpl$specter68675(meta68676){
return (new com.rpl.specter.t_com$rpl$specter68675(meta68676));
});

}

return (new com.rpl.specter.t_com$rpl$specter68675(null));
})()
;
/**
 * Adds the result of running select with the given path on the
 *        current value to the collected vals.
 */
com.rpl.specter.collect = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__69224__delegate = function (path){
var builder__65871__auto__ = com.rpl.specter.impl.direct_nav_obj((function (late){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter68691 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter68691 = (function (path,late,meta68692){
this.path = path;
this.late = late;
this.meta68692 = meta68692;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter68691.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_68693,meta68692__$1){
var self__ = this;
var _68693__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter68691(self__.path,self__.late,meta68692__$1));
}));

(com.rpl.specter.t_com$rpl$specter68691.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_68693){
var self__ = this;
var _68693__$1 = this;
return self__.meta68692;
}));

(com.rpl.specter.t_com$rpl$specter68691.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter68691.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__65868__auto__,vals__65869__auto__,structure,next_fn__65870__auto__){
var self__ = this;
var this__65868__auto____$1 = this;
var G__68704 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vals__65869__auto__,(com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2(self__.late,structure) : com.rpl.specter.compiled_select.call(null,self__.late,structure)));
var G__68705 = structure;
return (next_fn__65870__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__65870__auto__.cljs$core$IFn$_invoke$arity$2(G__68704,G__68705) : next_fn__65870__auto__.call(null,G__68704,G__68705));
}));

(com.rpl.specter.t_com$rpl$specter68691.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__65868__auto__,vals__65869__auto__,structure,next_fn__65870__auto__){
var self__ = this;
var this__65868__auto____$1 = this;
var G__68713 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vals__65869__auto__,(com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2(self__.late,structure) : com.rpl.specter.compiled_select.call(null,self__.late,structure)));
var G__68714 = structure;
return (next_fn__65870__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__65870__auto__.cljs$core$IFn$_invoke$arity$2(G__68713,G__68714) : next_fn__65870__auto__.call(null,G__68713,G__68714));
}));

(com.rpl.specter.t_com$rpl$specter68691.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"meta68692","meta68692",605596743,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter68691.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter68691.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter68691");

(com.rpl.specter.t_com$rpl$specter68691.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter68691");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter68691.
 */
com.rpl.specter.__GT_t_com$rpl$specter68691 = (function com$rpl$specter$__GT_t_com$rpl$specter68691(path__$1,late__$1,meta68692){
return (new com.rpl.specter.t_com$rpl$specter68691(path__$1,late__$1,meta68692));
});

}

return (new com.rpl.specter.t_com$rpl$specter68691(path,late,null));
}));
var curr_params__65872__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(path) : com.rpl.specter.late_path.call(null,path))], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__65872__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__65871__auto__,curr_params__65872__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__65871__auto__,curr_params__65872__auto__,null);
}
};
var G__69224 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__69232__i = 0, G__69232__a = new Array(arguments.length -  0);
while (G__69232__i < G__69232__a.length) {G__69232__a[G__69232__i] = arguments[G__69232__i + 0]; ++G__69232__i;}
  path = new cljs.core.IndexedSeq(G__69232__a,0,null);
} 
return G__69224__delegate.call(this,path);};
G__69224.cljs$lang$maxFixedArity = 0;
G__69224.cljs$lang$applyTo = (function (arglist__69233){
var path = cljs.core.seq(arglist__69233);
return G__69224__delegate(path);
});
G__69224.cljs$core$IFn$_invoke$arity$variadic = G__69224__delegate;
return G__69224;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Adds the result of running select-one with the given path on the
 *        current value to the collected vals.
 */
com.rpl.specter.collect_one = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__69234__delegate = function (path){
var builder__65871__auto__ = com.rpl.specter.impl.direct_nav_obj((function (late){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter68724 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter68724 = (function (path,late,meta68725){
this.path = path;
this.late = late;
this.meta68725 = meta68725;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter68724.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_68726,meta68725__$1){
var self__ = this;
var _68726__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter68724(self__.path,self__.late,meta68725__$1));
}));

(com.rpl.specter.t_com$rpl$specter68724.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_68726){
var self__ = this;
var _68726__$1 = this;
return self__.meta68725;
}));

(com.rpl.specter.t_com$rpl$specter68724.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter68724.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__65868__auto__,vals__65869__auto__,structure,next_fn__65870__auto__){
var self__ = this;
var this__65868__auto____$1 = this;
var G__68729 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vals__65869__auto__,(com.rpl.specter.compiled_select_one.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select_one.cljs$core$IFn$_invoke$arity$2(self__.late,structure) : com.rpl.specter.compiled_select_one.call(null,self__.late,structure)));
var G__68730 = structure;
return (next_fn__65870__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__65870__auto__.cljs$core$IFn$_invoke$arity$2(G__68729,G__68730) : next_fn__65870__auto__.call(null,G__68729,G__68730));
}));

(com.rpl.specter.t_com$rpl$specter68724.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__65868__auto__,vals__65869__auto__,structure,next_fn__65870__auto__){
var self__ = this;
var this__65868__auto____$1 = this;
var G__68733 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vals__65869__auto__,(com.rpl.specter.compiled_select_one.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select_one.cljs$core$IFn$_invoke$arity$2(self__.late,structure) : com.rpl.specter.compiled_select_one.call(null,self__.late,structure)));
var G__68734 = structure;
return (next_fn__65870__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__65870__auto__.cljs$core$IFn$_invoke$arity$2(G__68733,G__68734) : next_fn__65870__auto__.call(null,G__68733,G__68734));
}));

(com.rpl.specter.t_com$rpl$specter68724.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"meta68725","meta68725",-976542201,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter68724.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter68724.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter68724");

(com.rpl.specter.t_com$rpl$specter68724.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter68724");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter68724.
 */
com.rpl.specter.__GT_t_com$rpl$specter68724 = (function com$rpl$specter$__GT_t_com$rpl$specter68724(path__$1,late__$1,meta68725){
return (new com.rpl.specter.t_com$rpl$specter68724(path__$1,late__$1,meta68725));
});

}

return (new com.rpl.specter.t_com$rpl$specter68724(path,late,null));
}));
var curr_params__65872__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(path) : com.rpl.specter.late_path.call(null,path))], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__65872__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__65871__auto__,curr_params__65872__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__65871__auto__,curr_params__65872__auto__,null);
}
};
var G__69234 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__69243__i = 0, G__69243__a = new Array(arguments.length -  0);
while (G__69243__i < G__69243__a.length) {G__69243__a[G__69243__i] = arguments[G__69243__i + 0]; ++G__69243__i;}
  path = new cljs.core.IndexedSeq(G__69243__a,0,null);
} 
return G__69234__delegate.call(this,path);};
G__69234.cljs$lang$maxFixedArity = 0;
G__69234.cljs$lang$applyTo = (function (arglist__69244){
var path = cljs.core.seq(arglist__69244);
return G__69234__delegate(path);
});
G__69234.cljs$core$IFn$_invoke$arity$variadic = G__69234__delegate;
return G__69234;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Adds an external value to the collected vals. Useful when additional arguments
 *   are required to the transform function that would otherwise require partial
 *   application or a wrapper function.
 * 
 *   e.g., incrementing val at path [:a :b] by 3:
 *   (transform [:a :b (putval 3)] + some-map)
 */
com.rpl.specter.putval = com.rpl.specter.impl.direct_nav_obj((function (val){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter68737 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter68737 = (function (val,meta68738){
this.val = val;
this.meta68738 = meta68738;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter68737.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_68739,meta68738__$1){
var self__ = this;
var _68739__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter68737(self__.val,meta68738__$1));
}));

(com.rpl.specter.t_com$rpl$specter68737.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_68739){
var self__ = this;
var _68739__$1 = this;
return self__.meta68738;
}));

(com.rpl.specter.t_com$rpl$specter68737.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter68737.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__65868__auto__,vals__65869__auto__,structure,next_fn__65870__auto__){
var self__ = this;
var this__65868__auto____$1 = this;
var G__68740 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vals__65869__auto__,self__.val);
var G__68741 = structure;
return (next_fn__65870__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__65870__auto__.cljs$core$IFn$_invoke$arity$2(G__68740,G__68741) : next_fn__65870__auto__.call(null,G__68740,G__68741));
}));

(com.rpl.specter.t_com$rpl$specter68737.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__65868__auto__,vals__65869__auto__,structure,next_fn__65870__auto__){
var self__ = this;
var this__65868__auto____$1 = this;
var G__68742 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vals__65869__auto__,self__.val);
var G__68743 = structure;
return (next_fn__65870__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__65870__auto__.cljs$core$IFn$_invoke$arity$2(G__68742,G__68743) : next_fn__65870__auto__.call(null,G__68742,G__68743));
}));

(com.rpl.specter.t_com$rpl$specter68737.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"val","val",1769233139,null),new cljs.core.Symbol(null,"meta68738","meta68738",-1311569213,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter68737.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter68737.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter68737");

(com.rpl.specter.t_com$rpl$specter68737.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter68737");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter68737.
 */
com.rpl.specter.__GT_t_com$rpl$specter68737 = (function com$rpl$specter$__GT_t_com$rpl$specter68737(val__$1,meta68738){
return (new com.rpl.specter.t_com$rpl$specter68737(val__$1,meta68738));
});

}

return (new com.rpl.specter.t_com$rpl$specter68737(val,null));
}));
/**
 * Continues navigating on the given path with the collected vals reset to []. Once
 *   navigation leaves the scope of with-fresh-collected, the collected vals revert
 *   to what they were before.
 */
com.rpl.specter.with_fresh_collected = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__69253__delegate = function (path){
var builder__65871__auto__ = com.rpl.specter.impl.direct_nav_obj((function (late){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter68745 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter68745 = (function (path,late,meta68746){
this.path = path;
this.late = late;
this.meta68746 = meta68746;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter68745.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_68747,meta68746__$1){
var self__ = this;
var _68747__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter68745(self__.path,self__.late,meta68746__$1));
}));

(com.rpl.specter.t_com$rpl$specter68745.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_68747){
var self__ = this;
var _68747__$1 = this;
return self__.meta68746;
}));

(com.rpl.specter.t_com$rpl$specter68745.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter68745.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.protocols.select_STAR_(self__.late,cljs.core.PersistentVector.EMPTY,structure,(function (_,structure__$1){
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,structure__$1) : next_fn.call(null,vals,structure__$1));
}));
}));

(com.rpl.specter.t_com$rpl$specter68745.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.protocols.transform_STAR_(self__.late,cljs.core.PersistentVector.EMPTY,structure,(function (_,structure__$1){
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,structure__$1) : next_fn.call(null,vals,structure__$1));
}));
}));

(com.rpl.specter.t_com$rpl$specter68745.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"meta68746","meta68746",121084303,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter68745.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter68745.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter68745");

(com.rpl.specter.t_com$rpl$specter68745.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter68745");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter68745.
 */
com.rpl.specter.__GT_t_com$rpl$specter68745 = (function com$rpl$specter$__GT_t_com$rpl$specter68745(path__$1,late__$1,meta68746){
return (new com.rpl.specter.t_com$rpl$specter68745(path__$1,late__$1,meta68746));
});

}

return (new com.rpl.specter.t_com$rpl$specter68745(path,late,null));
}));
var curr_params__65872__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(path) : com.rpl.specter.late_path.call(null,path))], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__65872__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__65871__auto__,curr_params__65872__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__65871__auto__,curr_params__65872__auto__,null);
}
};
var G__69253 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__69254__i = 0, G__69254__a = new Array(arguments.length -  0);
while (G__69254__i < G__69254__a.length) {G__69254__a[G__69254__i] = arguments[G__69254__i + 0]; ++G__69254__i;}
  path = new cljs.core.IndexedSeq(G__69254__a,0,null);
} 
return G__69253__delegate.call(this,path);};
G__69253.cljs$lang$maxFixedArity = 0;
G__69253.cljs$lang$applyTo = (function (arglist__69255){
var path = cljs.core.seq(arglist__69255);
return G__69253__delegate(path);
});
G__69253.cljs$core$IFn$_invoke$arity$variadic = G__69253__delegate;
return G__69253;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Drops all collected values for subsequent navigation.
 */
com.rpl.specter.DISPENSE = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter68753 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter68753 = (function (meta68754){
this.meta68754 = meta68754;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter68753.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_68755,meta68754__$1){
var self__ = this;
var _68755__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter68753(meta68754__$1));
}));

(com.rpl.specter.t_com$rpl$specter68753.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_68755){
var self__ = this;
var _68755__$1 = this;
return self__.meta68754;
}));

(com.rpl.specter.t_com$rpl$specter68753.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter68753.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
var G__68760 = cljs.core.PersistentVector.EMPTY;
var G__68761 = structure;
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(G__68760,G__68761) : next_fn.call(null,G__68760,G__68761));
}));

(com.rpl.specter.t_com$rpl$specter68753.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
var G__68763 = cljs.core.PersistentVector.EMPTY;
var G__68764 = structure;
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(G__68763,G__68764) : next_fn.call(null,G__68763,G__68764));
}));

(com.rpl.specter.t_com$rpl$specter68753.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta68754","meta68754",123346149,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter68753.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter68753.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter68753");

(com.rpl.specter.t_com$rpl$specter68753.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter68753");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter68753.
 */
com.rpl.specter.__GT_t_com$rpl$specter68753 = (function com$rpl$specter$__GT_t_com$rpl$specter68753(meta68754){
return (new com.rpl.specter.t_com$rpl$specter68753(meta68754));
});

}

return (new com.rpl.specter.t_com$rpl$specter68753(null));
})()
;
/**
 * Like cond-path, but with if semantics.
 */
com.rpl.specter.if_path = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() {
var G__69256 = null;
var G__69256__2 = (function (cond_p,then_path){
return (com.rpl.specter.if_path.cljs$core$IFn$_invoke$arity$3 ? com.rpl.specter.if_path.cljs$core$IFn$_invoke$arity$3(cond_p,then_path,com.rpl.specter.STOP) : com.rpl.specter.if_path.call(null,cond_p,then_path,com.rpl.specter.STOP));
});
var G__69256__3 = (function (cond_p,then_path,else_path){
var temp__5733__auto__ = com.rpl.specter.navs.extract_basic_filter_fn(cond_p);
if(cljs.core.truth_(temp__5733__auto__)){
var afn = temp__5733__auto__;
var builder__65871__auto__ = com.rpl.specter.impl.direct_nav_obj((function (late_then,late_else){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter68772 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter68772 = (function (cond_p,then_path,else_path,temp__5733__auto__,afn,late_then,late_else,meta68773){
this.cond_p = cond_p;
this.then_path = then_path;
this.else_path = else_path;
this.temp__5733__auto__ = temp__5733__auto__;
this.afn = afn;
this.late_then = late_then;
this.late_else = late_else;
this.meta68773 = meta68773;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter68772.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_68774,meta68773__$1){
var self__ = this;
var _68774__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter68772(self__.cond_p,self__.then_path,self__.else_path,self__.temp__5733__auto__,self__.afn,self__.late_then,self__.late_else,meta68773__$1));
}));

(com.rpl.specter.t_com$rpl$specter68772.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_68774){
var self__ = this;
var _68774__$1 = this;
return self__.meta68773;
}));

(com.rpl.specter.t_com$rpl$specter68772.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter68772.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.navs.if_select(vals,structure,next_fn,self__.afn,self__.late_then,self__.late_else);
}));

(com.rpl.specter.t_com$rpl$specter68772.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.navs.if_transform(vals,structure,next_fn,self__.afn,self__.late_then,self__.late_else);
}));

(com.rpl.specter.t_com$rpl$specter68772.getBasis = (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cond-p","cond-p",695068009,null),new cljs.core.Symbol(null,"then-path","then-path",1949536092,null),new cljs.core.Symbol(null,"else-path","else-path",-2100209576,null),new cljs.core.Symbol(null,"temp__5733__auto__","temp__5733__auto__",484944449,null),new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"late-then","late-then",1623904294,null),new cljs.core.Symbol(null,"late-else","late-else",1462724600,null),new cljs.core.Symbol(null,"meta68773","meta68773",858756887,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter68772.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter68772.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter68772");

(com.rpl.specter.t_com$rpl$specter68772.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter68772");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter68772.
 */
com.rpl.specter.__GT_t_com$rpl$specter68772 = (function com$rpl$specter$__GT_t_com$rpl$specter68772(cond_p__$1,then_path__$1,else_path__$1,temp__5733__auto____$1,afn__$1,late_then__$1,late_else__$1,meta68773){
return (new com.rpl.specter.t_com$rpl$specter68772(cond_p__$1,then_path__$1,else_path__$1,temp__5733__auto____$1,afn__$1,late_then__$1,late_else__$1,meta68773));
});

}

return (new com.rpl.specter.t_com$rpl$specter68772(cond_p,then_path,else_path,temp__5733__auto__,afn,late_then,late_else,null));
}));
var curr_params__65872__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(then_path) : com.rpl.specter.late_path.call(null,then_path)),(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(else_path) : com.rpl.specter.late_path.call(null,else_path))], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__65872__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__65871__auto__,curr_params__65872__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__65871__auto__,curr_params__65872__auto__,null);
}
} else {
var builder__65871__auto__ = com.rpl.specter.impl.direct_nav_obj((function (late_cond,late_then,late_else){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter68788 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter68788 = (function (cond_p,then_path,else_path,temp__5733__auto__,late_cond,late_then,late_else,meta68789){
this.cond_p = cond_p;
this.then_path = then_path;
this.else_path = else_path;
this.temp__5733__auto__ = temp__5733__auto__;
this.late_cond = late_cond;
this.late_then = late_then;
this.late_else = late_else;
this.meta68789 = meta68789;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter68788.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_68790,meta68789__$1){
var self__ = this;
var _68790__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter68788(self__.cond_p,self__.then_path,self__.else_path,self__.temp__5733__auto__,self__.late_cond,self__.late_then,self__.late_else,meta68789__$1));
}));

(com.rpl.specter.t_com$rpl$specter68788.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_68790){
var self__ = this;
var _68790__$1 = this;
return self__.meta68789;
}));

(com.rpl.specter.t_com$rpl$specter68788.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter68788.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.navs.if_select(vals,structure,next_fn,(function (p1__68769_SHARP_){
return com.rpl.specter.navs.selected_QMARK__STAR_(self__.late_cond,vals,p1__68769_SHARP_);
}),self__.late_then,self__.late_else);
}));

(com.rpl.specter.t_com$rpl$specter68788.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.navs.if_transform(vals,structure,next_fn,(function (p1__68770_SHARP_){
return com.rpl.specter.navs.selected_QMARK__STAR_(self__.late_cond,vals,p1__68770_SHARP_);
}),self__.late_then,self__.late_else);
}));

(com.rpl.specter.t_com$rpl$specter68788.getBasis = (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cond-p","cond-p",695068009,null),new cljs.core.Symbol(null,"then-path","then-path",1949536092,null),new cljs.core.Symbol(null,"else-path","else-path",-2100209576,null),new cljs.core.Symbol(null,"temp__5733__auto__","temp__5733__auto__",484944449,null),new cljs.core.Symbol(null,"late-cond","late-cond",1031862828,null),new cljs.core.Symbol(null,"late-then","late-then",1623904294,null),new cljs.core.Symbol(null,"late-else","late-else",1462724600,null),new cljs.core.Symbol(null,"meta68789","meta68789",-2087357865,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter68788.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter68788.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter68788");

(com.rpl.specter.t_com$rpl$specter68788.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter68788");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter68788.
 */
com.rpl.specter.__GT_t_com$rpl$specter68788 = (function com$rpl$specter$__GT_t_com$rpl$specter68788(cond_p__$1,then_path__$1,else_path__$1,temp__5733__auto____$1,late_cond__$1,late_then__$1,late_else__$1,meta68789){
return (new com.rpl.specter.t_com$rpl$specter68788(cond_p__$1,then_path__$1,else_path__$1,temp__5733__auto____$1,late_cond__$1,late_then__$1,late_else__$1,meta68789));
});

}

return (new com.rpl.specter.t_com$rpl$specter68788(cond_p,then_path,else_path,temp__5733__auto__,late_cond,late_then,late_else,null));
}));
var curr_params__65872__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(cond_p) : com.rpl.specter.late_path.call(null,cond_p)),(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(then_path) : com.rpl.specter.late_path.call(null,then_path)),(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(else_path) : com.rpl.specter.late_path.call(null,else_path))], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__65872__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__65871__auto__,curr_params__65872__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__65871__auto__,curr_params__65872__auto__,null);
}
}
});
G__69256 = function(cond_p,then_path,else_path){
switch(arguments.length){
case 2:
return G__69256__2.call(this,cond_p,then_path);
case 3:
return G__69256__3.call(this,cond_p,then_path,else_path);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__69256.cljs$core$IFn$_invoke$arity$2 = G__69256__2;
G__69256.cljs$core$IFn$_invoke$arity$3 = G__69256__3;
return G__69256;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Takes in alternating cond-path path cond-path path...
 * Tests the structure if selecting with cond-path returns anything.
 * If so, it uses the following path for this portion of the navigation.
 * Otherwise, it tries the next cond-path. If nothing matches, then the structure
 * is not selected.
 */
com.rpl.specter.cond_path = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__69259__delegate = function (conds){
var pairs = cljs.core.reverse(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),conds));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p,p__68815){
var vec__68816 = p__68815;
var tester = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68816,(0),null);
var apath = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68816,(1),null);
return (com.rpl.specter.if_path.cljs$core$IFn$_invoke$arity$3 ? com.rpl.specter.if_path.cljs$core$IFn$_invoke$arity$3(tester,apath,p) : com.rpl.specter.if_path.call(null,tester,apath,p));
}),com.rpl.specter.STOP,pairs);
};
var G__69259 = function (var_args){
var conds = null;
if (arguments.length > 0) {
var G__69260__i = 0, G__69260__a = new Array(arguments.length -  0);
while (G__69260__i < G__69260__a.length) {G__69260__a[G__69260__i] = arguments[G__69260__i + 0]; ++G__69260__i;}
  conds = new cljs.core.IndexedSeq(G__69260__a,0,null);
} 
return G__69259__delegate.call(this,conds);};
G__69259.cljs$lang$maxFixedArity = 0;
G__69259.cljs$lang$applyTo = (function (arglist__69261){
var conds = cljs.core.seq(arglist__69261);
return G__69259__delegate(conds);
});
G__69259.cljs$core$IFn$_invoke$arity$variadic = G__69259__delegate;
return G__69259;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * A path that branches on multiple paths. For updates,
 * applies updates to the paths in order.
 */
com.rpl.specter.multi_path = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() {
var G__69262 = null;
var G__69262__0 = (function (){
return com.rpl.specter.STAY;
});
var G__69262__1 = (function (path){
return path;
});
var G__69262__2 = (function (path1,path2){
var builder__65871__auto__ = com.rpl.specter.impl.direct_nav_obj((function (late1,late2){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter68820 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter68820 = (function (path1,path2,late1,late2,meta68821){
this.path1 = path1;
this.path2 = path2;
this.late1 = late1;
this.late2 = late2;
this.meta68821 = meta68821;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter68820.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_68822,meta68821__$1){
var self__ = this;
var _68822__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter68820(self__.path1,self__.path2,self__.late1,self__.late2,meta68821__$1));
}));

(com.rpl.specter.t_com$rpl$specter68820.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_68822){
var self__ = this;
var _68822__$1 = this;
return self__.meta68821;
}));

(com.rpl.specter.t_com$rpl$specter68820.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter68820.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
var res1 = com.rpl.specter.protocols.select_STAR_(self__.late1,vals,structure,next_fn);
if(cljs.core.reduced_QMARK_(res1)){
return res1;
} else {
var res2 = com.rpl.specter.protocols.select_STAR_(self__.late2,vals,structure,next_fn);
if((com.rpl.specter.NONE === res1)){
return res2;
} else {
return res1;
}
}
}));

(com.rpl.specter.t_com$rpl$specter68820.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
var s1 = com.rpl.specter.protocols.transform_STAR_(self__.late1,vals,structure,next_fn);
return com.rpl.specter.protocols.transform_STAR_(self__.late2,vals,s1,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter68820.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path1","path1",-2002517142,null),new cljs.core.Symbol(null,"path2","path2",-1937913521,null),new cljs.core.Symbol(null,"late1","late1",-1413016621,null),new cljs.core.Symbol(null,"late2","late2",-681717994,null),new cljs.core.Symbol(null,"meta68821","meta68821",412246947,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter68820.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter68820.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter68820");

(com.rpl.specter.t_com$rpl$specter68820.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter68820");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter68820.
 */
com.rpl.specter.__GT_t_com$rpl$specter68820 = (function com$rpl$specter$__GT_t_com$rpl$specter68820(path1__$1,path2__$1,late1__$1,late2__$1,meta68821){
return (new com.rpl.specter.t_com$rpl$specter68820(path1__$1,path2__$1,late1__$1,late2__$1,meta68821));
});

}

return (new com.rpl.specter.t_com$rpl$specter68820(path1,path2,late1,late2,null));
}));
var curr_params__65872__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(path1) : com.rpl.specter.late_path.call(null,path1)),(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(path2) : com.rpl.specter.late_path.call(null,path2))], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__65872__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__65871__auto__,curr_params__65872__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__65871__auto__,curr_params__65872__auto__,null);
}
});
var G__69262__3 = (function() { 
var G__69264__delegate = function (path1,path2,paths){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(com.rpl.specter.multi_path,(com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$2(path1,path2) : com.rpl.specter.multi_path.call(null,path1,path2)),paths);
};
var G__69264 = function (path1,path2,var_args){
var paths = null;
if (arguments.length > 2) {
var G__69265__i = 0, G__69265__a = new Array(arguments.length -  2);
while (G__69265__i < G__69265__a.length) {G__69265__a[G__69265__i] = arguments[G__69265__i + 2]; ++G__69265__i;}
  paths = new cljs.core.IndexedSeq(G__69265__a,0,null);
} 
return G__69264__delegate.call(this,path1,path2,paths);};
G__69264.cljs$lang$maxFixedArity = 2;
G__69264.cljs$lang$applyTo = (function (arglist__69267){
var path1 = cljs.core.first(arglist__69267);
arglist__69267 = cljs.core.next(arglist__69267);
var path2 = cljs.core.first(arglist__69267);
var paths = cljs.core.rest(arglist__69267);
return G__69264__delegate(path1,path2,paths);
});
G__69264.cljs$core$IFn$_invoke$arity$variadic = G__69264__delegate;
return G__69264;
})()
;
G__69262 = function(path1,path2,var_args){
var paths = var_args;
switch(arguments.length){
case 0:
return G__69262__0.call(this);
case 1:
return G__69262__1.call(this,path1);
case 2:
return G__69262__2.call(this,path1,path2);
default:
var G__69269 = null;
if (arguments.length > 2) {
var G__69270__i = 0, G__69270__a = new Array(arguments.length -  2);
while (G__69270__i < G__69270__a.length) {G__69270__a[G__69270__i] = arguments[G__69270__i + 2]; ++G__69270__i;}
G__69269 = new cljs.core.IndexedSeq(G__69270__a,0,null);
}
return G__69262__3.cljs$core$IFn$_invoke$arity$variadic(path1,path2, G__69269);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__69262.cljs$lang$maxFixedArity = 2;
G__69262.cljs$lang$applyTo = G__69262__3.cljs$lang$applyTo;
G__69262.cljs$core$IFn$_invoke$arity$0 = G__69262__0;
G__69262.cljs$core$IFn$_invoke$arity$1 = G__69262__1;
G__69262.cljs$core$IFn$_invoke$arity$2 = G__69262__2;
G__69262.cljs$core$IFn$_invoke$arity$variadic = G__69262__3.cljs$core$IFn$_invoke$arity$variadic;
return G__69262;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Navigates to the current element and then navigates via the provided path.
 * This can be used to implement pre-order traversal.
 */
com.rpl.specter.stay_then_continue = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__69271__delegate = function (path){
return (com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$2(com.rpl.specter.STAY,path) : com.rpl.specter.multi_path.call(null,com.rpl.specter.STAY,path));
};
var G__69271 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__69273__i = 0, G__69273__a = new Array(arguments.length -  0);
while (G__69273__i < G__69273__a.length) {G__69273__a[G__69273__i] = arguments[G__69273__i + 0]; ++G__69273__i;}
  path = new cljs.core.IndexedSeq(G__69273__a,0,null);
} 
return G__69271__delegate.call(this,path);};
G__69271.cljs$lang$maxFixedArity = 0;
G__69271.cljs$lang$applyTo = (function (arglist__69274){
var path = cljs.core.seq(arglist__69274);
return G__69271__delegate(path);
});
G__69271.cljs$core$IFn$_invoke$arity$variadic = G__69271__delegate;
return G__69271;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Navigates to the provided path and then to the current element. This can be used
 * to implement post-order traversal.
 */
com.rpl.specter.continue_then_stay = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__69275__delegate = function (path){
return (com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$2(path,com.rpl.specter.STAY) : com.rpl.specter.multi_path.call(null,path,com.rpl.specter.STAY));
};
var G__69275 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__69276__i = 0, G__69276__a = new Array(arguments.length -  0);
while (G__69276__i < G__69276__a.length) {G__69276__a[G__69276__i] = arguments[G__69276__i + 0]; ++G__69276__i;}
  path = new cljs.core.IndexedSeq(G__69276__a,0,null);
} 
return G__69275__delegate.call(this,path);};
G__69275.cljs$lang$maxFixedArity = 0;
G__69275.cljs$lang$applyTo = (function (arglist__69278){
var path = cljs.core.seq(arglist__69278);
return G__69275__delegate(path);
});
G__69275.cljs$core$IFn$_invoke$arity$variadic = G__69275__delegate;
return G__69275;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Navigate the data structure until reaching
 *        a value for which `afn` returns truthy. Has
 *        same semantics as clojure.walk.
 */
com.rpl.specter.walker = com.rpl.specter.impl.direct_nav_obj((function (afn){
var p = com.rpl.specter.impl.local_declarepath();
com.rpl.specter.impl.providepath_STAR_(p,(function (){var info__65878__auto__ = com.rpl.specter.pathcache68832;
var info__65878__auto____$1 = (((info__65878__auto__ == null))?(function (){var info68833 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.cond_path,new cljs.core.Var(function(){return com.rpl.specter.cond_path;},new cljs.core.Symbol("com.rpl.specter","cond-path","com.rpl.specter/cond-path",97137882,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"cond-path","cond-path",-1167797965,null),"com/rpl/specter.cljc",25,1,1394,1394,cljs.core.List.EMPTY,"Takes in alternating cond-path path cond-path path...\n   Tests the structure if selecting with cond-path returns anything.\n   If so, it uses the following path for this portion of the navigation.\n   Otherwise, it tries the next cond-path. If nothing matches, then the structure\n   is not selected.",(cljs.core.truth_(com.rpl.specter.cond_path)?com.rpl.specter.cond_path.cljs$lang$test:null)])),new cljs.core.Symbol(null,"cond-path","cond-path",-1167797965,null)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.pred,new cljs.core.Var(function(){return com.rpl.specter.pred;},new cljs.core.Symbol("com.rpl.specter","pred","com.rpl.specter/pred",1192968523,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"direct-nav","direct-nav",-2100776046),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),"com/rpl/specter.cljc",7,1,true,1175,1179,cljs.core.List.EMPTY,"Keeps the element only if it matches the supplied predicate. Functions in paths\n          implicitly convert to this navigator.",(cljs.core.truth_(com.rpl.specter.pred)?com.rpl.specter.pred.cljs$lang$test:null)])),new cljs.core.Symbol(null,"pred","pred",-727012372,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym(afn,new cljs.core.Symbol(null,"afn","afn",216963467,null))], null),cljs.core.list(new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"afn","afn",216963467,null))),com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.STAY,new cljs.core.Var(function(){return com.rpl.specter.STAY;},new cljs.core.Symbol("com.rpl.specter","STAY","com.rpl.specter/STAY",-176499375,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null),"com/rpl/specter.cljc",7,1,644,646,cljs.core.List.EMPTY,"Stays navigated at the current point. Essentially a no-op navigator.",(cljs.core.truth_(com.rpl.specter.STAY)?com.rpl.specter.STAY.cljs$lang$test:null)])),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null)),com.rpl.specter.impl.__GT_VarUse(cljs.core.coll_QMARK_,new cljs.core.Var(function(){return cljs.core.coll_QMARK_;},new cljs.core.Symbol("cljs.core","coll?","cljs.core/coll?",1208130522,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null),"cljs/core.cljs",12,1,2133,2133,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null)),"Returns true if x satisfies ICollection",(cljs.core.truth_(cljs.core.coll_QMARK_)?cljs.core.coll_QMARK_.cljs$lang$test:null)])),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.ALL,new cljs.core.Var(function(){return com.rpl.specter.ALL;},new cljs.core.Symbol("com.rpl.specter","ALL","com.rpl.specter/ALL",-1409005960,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),"com/rpl/specter.cljc",6,1,679,682,cljs.core.List.EMPTY,"Navigate to every element of the collection. For maps navigates to\n          a vector of `[key value]`.",(cljs.core.truth_(com.rpl.specter.ALL)?com.rpl.specter.ALL.cljs$lang$test:null)])),new cljs.core.Symbol(null,"ALL","ALL",866837407,null)),com.rpl.specter.impl.__GT_LocalSym(p,new cljs.core.Symbol(null,"p","p",1791580836,null))], null)], null),cljs.core.list(new cljs.core.Symbol(null,"cond-path","cond-path",-1167797965,null),cljs.core.list(new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"afn","afn",216963467,null)),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ALL","ALL",866837407,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null)))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cond-path","cond-path",-1167797965,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ALL","ALL",866837407,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null));
com.rpl.specter.pathcache68832 = info68833;

return info68833;
})():info__65878__auto__);
var precompiled68834 = com.rpl.specter.impl.cached_path_info_precompiled(info__65878__auto____$1);
var dynamic_QMARK___65879__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__65878__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___65879__auto__)){
var G__68840 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.cond_path,com.rpl.specter.pred,afn,com.rpl.specter.STAY,cljs.core.coll_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.ALL,p], null),com.rpl.specter.ALL,p], null);
return (precompiled68834.cljs$core$IFn$_invoke$arity$1 ? precompiled68834.cljs$core$IFn$_invoke$arity$1(G__68840) : precompiled68834.call(null,G__68840));
} else {
return precompiled68834;
}
})());

return p;
}));
/**
 * Like `walker` but maintains metadata of any forms traversed.
 */
com.rpl.specter.codewalker = com.rpl.specter.impl.direct_nav_obj((function (afn){
var p = com.rpl.specter.impl.local_declarepath();
com.rpl.specter.impl.providepath_STAR_(p,(function (){var info__65878__auto__ = com.rpl.specter.pathcache68842;
var info__65878__auto____$1 = (((info__65878__auto__ == null))?(function (){var info68843 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.cond_path,new cljs.core.Var(function(){return com.rpl.specter.cond_path;},new cljs.core.Symbol("com.rpl.specter","cond-path","com.rpl.specter/cond-path",97137882,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"cond-path","cond-path",-1167797965,null),"com/rpl/specter.cljc",25,1,1394,1394,cljs.core.List.EMPTY,"Takes in alternating cond-path path cond-path path...\n   Tests the structure if selecting with cond-path returns anything.\n   If so, it uses the following path for this portion of the navigation.\n   Otherwise, it tries the next cond-path. If nothing matches, then the structure\n   is not selected.",(cljs.core.truth_(com.rpl.specter.cond_path)?com.rpl.specter.cond_path.cljs$lang$test:null)])),new cljs.core.Symbol(null,"cond-path","cond-path",-1167797965,null)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.pred,new cljs.core.Var(function(){return com.rpl.specter.pred;},new cljs.core.Symbol("com.rpl.specter","pred","com.rpl.specter/pred",1192968523,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"direct-nav","direct-nav",-2100776046),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),"com/rpl/specter.cljc",7,1,true,1175,1179,cljs.core.List.EMPTY,"Keeps the element only if it matches the supplied predicate. Functions in paths\n          implicitly convert to this navigator.",(cljs.core.truth_(com.rpl.specter.pred)?com.rpl.specter.pred.cljs$lang$test:null)])),new cljs.core.Symbol(null,"pred","pred",-727012372,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym(afn,new cljs.core.Symbol(null,"afn","afn",216963467,null))], null),cljs.core.list(new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"afn","afn",216963467,null))),com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.STAY,new cljs.core.Var(function(){return com.rpl.specter.STAY;},new cljs.core.Symbol("com.rpl.specter","STAY","com.rpl.specter/STAY",-176499375,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null),"com/rpl/specter.cljc",7,1,644,646,cljs.core.List.EMPTY,"Stays navigated at the current point. Essentially a no-op navigator.",(cljs.core.truth_(com.rpl.specter.STAY)?com.rpl.specter.STAY.cljs$lang$test:null)])),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null)),com.rpl.specter.impl.__GT_VarUse(cljs.core.coll_QMARK_,new cljs.core.Var(function(){return cljs.core.coll_QMARK_;},new cljs.core.Symbol("cljs.core","coll?","cljs.core/coll?",1208130522,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null),"cljs/core.cljs",12,1,2133,2133,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null)),"Returns true if x satisfies ICollection",(cljs.core.truth_(cljs.core.coll_QMARK_)?cljs.core.coll_QMARK_.cljs$lang$test:null)])),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.ALL_WITH_META,new cljs.core.Var(function(){return com.rpl.specter.ALL_WITH_META;},new cljs.core.Symbol("com.rpl.specter","ALL-WITH-META","com.rpl.specter/ALL-WITH-META",-1161868995,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"ALL-WITH-META","ALL-WITH-META",250401700,null),"com/rpl/specter.cljc",16,1,689,691,cljs.core.List.EMPTY,"Same as ALL, except maintains metadata on the structure.",(cljs.core.truth_(com.rpl.specter.ALL_WITH_META)?com.rpl.specter.ALL_WITH_META.cljs$lang$test:null)])),new cljs.core.Symbol(null,"ALL-WITH-META","ALL-WITH-META",250401700,null)),com.rpl.specter.impl.__GT_LocalSym(p,new cljs.core.Symbol(null,"p","p",1791580836,null))], null)], null),cljs.core.list(new cljs.core.Symbol(null,"cond-path","cond-path",-1167797965,null),cljs.core.list(new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"afn","afn",216963467,null)),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ALL-WITH-META","ALL-WITH-META",250401700,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null)))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cond-path","cond-path",-1167797965,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ALL-WITH-META","ALL-WITH-META",250401700,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null),new cljs.core.Symbol(null,"ALL-WITH-META","ALL-WITH-META",250401700,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null));
com.rpl.specter.pathcache68842 = info68843;

return info68843;
})():info__65878__auto__);
var precompiled68844 = com.rpl.specter.impl.cached_path_info_precompiled(info__65878__auto____$1);
var dynamic_QMARK___65879__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__65878__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___65879__auto__)){
var G__68845 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.cond_path,com.rpl.specter.pred,afn,com.rpl.specter.STAY,cljs.core.coll_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.ALL_WITH_META,p], null),com.rpl.specter.ALL_WITH_META,p], null);
return (precompiled68844.cljs$core$IFn$_invoke$arity$1 ? precompiled68844.cljs$core$IFn$_invoke$arity$1(G__68845) : precompiled68844.call(null,G__68845));
} else {
return precompiled68844;
}
})());

return p;
}));
var empty__GT_NONE_69282 = (function (){var G__68846 = cljs.core.empty_QMARK_;
var G__68847 = com.rpl.specter.terminal_val(com.rpl.specter.NONE);
return (com.rpl.specter.if_path.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.if_path.cljs$core$IFn$_invoke$arity$2(G__68846,G__68847) : com.rpl.specter.if_path.call(null,G__68846,G__68847));
})();
var compact_STAR__69283 = (function (nav){
return (com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$2(nav,empty__GT_NONE_69282) : com.rpl.specter.multi_path.call(null,nav,empty__GT_NONE_69282));
});
/**
 * During transforms, after each step of navigation in subpath check if the
 *  value is empty. If so, remove that value by setting it to NONE.
 */
com.rpl.specter.compact = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__69284__delegate = function (path){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(compact_STAR__69283,path);
};
var G__69284 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__69285__i = 0, G__69285__a = new Array(arguments.length -  0);
while (G__69285__i < G__69285__a.length) {G__69285__a[G__69285__i] = arguments[G__69285__i + 0]; ++G__69285__i;}
  path = new cljs.core.IndexedSeq(G__69285__a,0,null);
} 
return G__69284__delegate.call(this,path);};
G__69284.cljs$lang$maxFixedArity = 0;
G__69284.cljs$lang$applyTo = (function (arglist__69286){
var path = cljs.core.seq(arglist__69286);
return G__69284__delegate(path);
});
G__69284.cljs$core$IFn$_invoke$arity$variadic = G__69284__delegate;
return G__69284;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);

//# sourceMappingURL=com.rpl.specter.js.map
