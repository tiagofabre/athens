goog.provide('day8.re_frame_10x.utils.localstorage');
day8.re_frame_10x.utils.localstorage.storage = (new goog.storage.Storage((new goog.storage.mechanism.HTML5LocalStorage())));
day8.re_frame_10x.utils.localstorage.safe_prefix = "day8.re-frame-10x.";
day8.re_frame_10x.utils.localstorage.safe_key = (function day8$re_frame_10x$utils$localstorage$safe_key(key){

return [day8.re_frame_10x.utils.localstorage.safe_prefix,cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)].join('');
});
/**
 * Gets a re-frame-10x value from local storage.
 */
day8.re_frame_10x.utils.localstorage.get = (function day8$re_frame_10x$utils$localstorage$get(var_args){
var G__53455 = arguments.length;
switch (G__53455) {
case 1:
return day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$1 = (function (key){
return day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$2(key,null);
}));

(day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$2 = (function (key,not_found){
var value = day8.re_frame_10x.utils.localstorage.storage.get(day8.re_frame_10x.utils.localstorage.safe_key(key));
if((void 0 === value)){
return not_found;
} else {
return cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(value);
}
}));

(day8.re_frame_10x.utils.localstorage.get.cljs$lang$maxFixedArity = 2);

/**
 * Saves a re-frame-10x value to local storage.
 */
day8.re_frame_10x.utils.localstorage.save_BANG_ = (function day8$re_frame_10x$utils$localstorage$save_BANG_(key,value){
return day8.re_frame_10x.utils.localstorage.storage.set(day8.re_frame_10x.utils.localstorage.safe_key(key),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0)));
});
/**
 * Deletes all re-frame-10x config keys
 */
day8.re_frame_10x.utils.localstorage.delete_all_keys_BANG_ = (function day8$re_frame_10x$utils$localstorage$delete_all_keys_BANG_(){
var seq__53477 = cljs.core.seq(Object.keys(localStorage));
var chunk__53478 = null;
var count__53479 = (0);
var i__53480 = (0);
while(true){
if((i__53480 < count__53479)){
var k = chunk__53478.cljs$core$IIndexed$_nth$arity$2(null,i__53480);
if(clojure.string.starts_with_QMARK_(k,day8.re_frame_10x.utils.localstorage.safe_prefix)){
day8.re_frame_10x.utils.localstorage.storage.remove(k);
} else {
}


var G__53482 = seq__53477;
var G__53483 = chunk__53478;
var G__53484 = count__53479;
var G__53485 = (i__53480 + (1));
seq__53477 = G__53482;
chunk__53478 = G__53483;
count__53479 = G__53484;
i__53480 = G__53485;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__53477);
if(temp__5735__auto__){
var seq__53477__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__53477__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__53477__$1);
var G__53486 = cljs.core.chunk_rest(seq__53477__$1);
var G__53487 = c__4556__auto__;
var G__53488 = cljs.core.count(c__4556__auto__);
var G__53489 = (0);
seq__53477 = G__53486;
chunk__53478 = G__53487;
count__53479 = G__53488;
i__53480 = G__53489;
continue;
} else {
var k = cljs.core.first(seq__53477__$1);
if(clojure.string.starts_with_QMARK_(k,day8.re_frame_10x.utils.localstorage.safe_prefix)){
day8.re_frame_10x.utils.localstorage.storage.remove(k);
} else {
}


var G__53490 = cljs.core.next(seq__53477__$1);
var G__53491 = null;
var G__53492 = (0);
var G__53493 = (0);
seq__53477 = G__53490;
chunk__53478 = G__53491;
count__53479 = G__53492;
i__53480 = G__53493;
continue;
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=day8.re_frame_10x.utils.localstorage.js.map
