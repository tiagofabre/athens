goog.provide('instaparse.util');
instaparse.util.throw_runtime_exception = (function instaparse$util$throw_runtime_exception(var_args){
var args__4742__auto__ = [];
var len__4736__auto___72175 = arguments.length;
var i__4737__auto___72176 = (0);
while(true){
if((i__4737__auto___72176 < len__4736__auto___72175)){
args__4742__auto__.push((arguments[i__4737__auto___72176]));

var G__72178 = (i__4737__auto___72176 + (1));
i__4737__auto___72176 = G__72178;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return instaparse.util.throw_runtime_exception.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(instaparse.util.throw_runtime_exception.cljs$core$IFn$_invoke$arity$variadic = (function (message){
var text = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,message);
throw text;
}));

(instaparse.util.throw_runtime_exception.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(instaparse.util.throw_runtime_exception.cljs$lang$applyTo = (function (seq72159){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq72159));
}));

instaparse.util.throw_illegal_argument_exception = (function instaparse$util$throw_illegal_argument_exception(var_args){
var args__4742__auto__ = [];
var len__4736__auto___72181 = arguments.length;
var i__4737__auto___72182 = (0);
while(true){
if((i__4737__auto___72182 < len__4736__auto___72181)){
args__4742__auto__.push((arguments[i__4737__auto___72182]));

var G__72183 = (i__4737__auto___72182 + (1));
i__4737__auto___72182 = G__72183;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return instaparse.util.throw_illegal_argument_exception.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(instaparse.util.throw_illegal_argument_exception.cljs$core$IFn$_invoke$arity$variadic = (function (message){
var text = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,message);
throw text;
}));

(instaparse.util.throw_illegal_argument_exception.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(instaparse.util.throw_illegal_argument_exception.cljs$lang$applyTo = (function (seq72167){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq72167));
}));

instaparse.util.regexp_flags = (function instaparse$util$regexp_flags(re){
var G__72170 = "";
var G__72170__$1 = (cljs.core.truth_(re.ignoreCase)?[G__72170,"i"].join(''):G__72170);
var G__72170__$2 = (cljs.core.truth_(re.multiline)?[G__72170__$1,"m"].join(''):G__72170__$1);
if(cljs.core.truth_(re.unicode)){
return [G__72170__$2,"u"].join('');
} else {
return G__72170__$2;
}
});

//# sourceMappingURL=instaparse.util.js.map
