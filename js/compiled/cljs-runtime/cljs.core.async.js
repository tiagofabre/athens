goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__56964 = arguments.length;
switch (G__56964) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async56965 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async56965 = (function (f,blockable,meta56966){
this.f = f;
this.blockable = blockable;
this.meta56966 = meta56966;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async56965.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_56967,meta56966__$1){
var self__ = this;
var _56967__$1 = this;
return (new cljs.core.async.t_cljs$core$async56965(self__.f,self__.blockable,meta56966__$1));
}));

(cljs.core.async.t_cljs$core$async56965.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_56967){
var self__ = this;
var _56967__$1 = this;
return self__.meta56966;
}));

(cljs.core.async.t_cljs$core$async56965.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async56965.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async56965.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async56965.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async56965.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta56966","meta56966",-100783349,null)], null);
}));

(cljs.core.async.t_cljs$core$async56965.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async56965.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async56965");

(cljs.core.async.t_cljs$core$async56965.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async56965");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async56965.
 */
cljs.core.async.__GT_t_cljs$core$async56965 = (function cljs$core$async$__GT_t_cljs$core$async56965(f__$1,blockable__$1,meta56966){
return (new cljs.core.async.t_cljs$core$async56965(f__$1,blockable__$1,meta56966));
});

}

return (new cljs.core.async.t_cljs$core$async56965(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__56977 = arguments.length;
switch (G__56977) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__56980 = arguments.length;
switch (G__56980) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__56983 = arguments.length;
switch (G__56983) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_59687 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_59687) : fn1.call(null,val_59687));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_59687) : fn1.call(null,val_59687));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__56985 = arguments.length;
switch (G__56985) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4613__auto___59699 = n;
var x_59700 = (0);
while(true){
if((x_59700 < n__4613__auto___59699)){
(a[x_59700] = x_59700);

var G__59702 = (x_59700 + (1));
x_59700 = G__59702;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async56992 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async56992 = (function (flag,meta56993){
this.flag = flag;
this.meta56993 = meta56993;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async56992.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_56994,meta56993__$1){
var self__ = this;
var _56994__$1 = this;
return (new cljs.core.async.t_cljs$core$async56992(self__.flag,meta56993__$1));
}));

(cljs.core.async.t_cljs$core$async56992.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_56994){
var self__ = this;
var _56994__$1 = this;
return self__.meta56993;
}));

(cljs.core.async.t_cljs$core$async56992.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async56992.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async56992.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async56992.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async56992.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta56993","meta56993",-1435692711,null)], null);
}));

(cljs.core.async.t_cljs$core$async56992.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async56992.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async56992");

(cljs.core.async.t_cljs$core$async56992.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async56992");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async56992.
 */
cljs.core.async.__GT_t_cljs$core$async56992 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async56992(flag__$1,meta56993){
return (new cljs.core.async.t_cljs$core$async56992(flag__$1,meta56993));
});

}

return (new cljs.core.async.t_cljs$core$async56992(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async57004 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async57004 = (function (flag,cb,meta57005){
this.flag = flag;
this.cb = cb;
this.meta57005 = meta57005;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async57004.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_57006,meta57005__$1){
var self__ = this;
var _57006__$1 = this;
return (new cljs.core.async.t_cljs$core$async57004(self__.flag,self__.cb,meta57005__$1));
}));

(cljs.core.async.t_cljs$core$async57004.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_57006){
var self__ = this;
var _57006__$1 = this;
return self__.meta57005;
}));

(cljs.core.async.t_cljs$core$async57004.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async57004.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async57004.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async57004.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async57004.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta57005","meta57005",855619834,null)], null);
}));

(cljs.core.async.t_cljs$core$async57004.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async57004.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async57004");

(cljs.core.async.t_cljs$core$async57004.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async57004");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async57004.
 */
cljs.core.async.__GT_t_cljs$core$async57004 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async57004(flag__$1,cb__$1,meta57005){
return (new cljs.core.async.t_cljs$core$async57004(flag__$1,cb__$1,meta57005));
});

}

return (new cljs.core.async.t_cljs$core$async57004(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__57019_SHARP_){
var G__57027 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__57019_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__57027) : fret.call(null,G__57027));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__57020_SHARP_){
var G__57028 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__57020_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__57028) : fret.call(null,G__57028));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4126__auto__ = wport;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return port;
}
})()], null));
} else {
var G__59719 = (i + (1));
i = G__59719;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4126__auto__ = ret;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4115__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4115__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___59720 = arguments.length;
var i__4737__auto___59721 = (0);
while(true){
if((i__4737__auto___59721 < len__4736__auto___59720)){
args__4742__auto__.push((arguments[i__4737__auto___59721]));

var G__59722 = (i__4737__auto___59721 + (1));
i__4737__auto___59721 = G__59722;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__57045){
var map__57046 = p__57045;
var map__57046__$1 = (((((!((map__57046 == null))))?(((((map__57046.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57046.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57046):map__57046);
var opts = map__57046__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq57037){
var G__57038 = cljs.core.first(seq57037);
var seq57037__$1 = cljs.core.next(seq57037);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__57038,seq57037__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__57063 = arguments.length;
switch (G__57063) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__56877__auto___59728 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56878__auto__ = (function (){var switch__56774__auto__ = (function (state_57140){
var state_val_57141 = (state_57140[(1)]);
if((state_val_57141 === (7))){
var inst_57127 = (state_57140[(2)]);
var state_57140__$1 = state_57140;
var statearr_57159_59730 = state_57140__$1;
(statearr_57159_59730[(2)] = inst_57127);

(statearr_57159_59730[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57141 === (1))){
var state_57140__$1 = state_57140;
var statearr_57160_59732 = state_57140__$1;
(statearr_57160_59732[(2)] = null);

(statearr_57160_59732[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57141 === (4))){
var inst_57094 = (state_57140[(7)]);
var inst_57094__$1 = (state_57140[(2)]);
var inst_57095 = (inst_57094__$1 == null);
var state_57140__$1 = (function (){var statearr_57163 = state_57140;
(statearr_57163[(7)] = inst_57094__$1);

return statearr_57163;
})();
if(cljs.core.truth_(inst_57095)){
var statearr_57168_59733 = state_57140__$1;
(statearr_57168_59733[(1)] = (5));

} else {
var statearr_57169_59734 = state_57140__$1;
(statearr_57169_59734[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57141 === (13))){
var state_57140__$1 = state_57140;
var statearr_57170_59735 = state_57140__$1;
(statearr_57170_59735[(2)] = null);

(statearr_57170_59735[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57141 === (6))){
var inst_57094 = (state_57140[(7)]);
var state_57140__$1 = state_57140;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_57140__$1,(11),to,inst_57094);
} else {
if((state_val_57141 === (3))){
var inst_57131 = (state_57140[(2)]);
var state_57140__$1 = state_57140;
return cljs.core.async.impl.ioc_helpers.return_chan(state_57140__$1,inst_57131);
} else {
if((state_val_57141 === (12))){
var state_57140__$1 = state_57140;
var statearr_57178_59736 = state_57140__$1;
(statearr_57178_59736[(2)] = null);

(statearr_57178_59736[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57141 === (2))){
var state_57140__$1 = state_57140;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57140__$1,(4),from);
} else {
if((state_val_57141 === (11))){
var inst_57114 = (state_57140[(2)]);
var state_57140__$1 = state_57140;
if(cljs.core.truth_(inst_57114)){
var statearr_57180_59738 = state_57140__$1;
(statearr_57180_59738[(1)] = (12));

} else {
var statearr_57182_59739 = state_57140__$1;
(statearr_57182_59739[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57141 === (9))){
var state_57140__$1 = state_57140;
var statearr_57186_59742 = state_57140__$1;
(statearr_57186_59742[(2)] = null);

(statearr_57186_59742[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57141 === (5))){
var state_57140__$1 = state_57140;
if(cljs.core.truth_(close_QMARK_)){
var statearr_57187_59744 = state_57140__$1;
(statearr_57187_59744[(1)] = (8));

} else {
var statearr_57188_59745 = state_57140__$1;
(statearr_57188_59745[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57141 === (14))){
var inst_57125 = (state_57140[(2)]);
var state_57140__$1 = state_57140;
var statearr_57190_59746 = state_57140__$1;
(statearr_57190_59746[(2)] = inst_57125);

(statearr_57190_59746[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57141 === (10))){
var inst_57110 = (state_57140[(2)]);
var state_57140__$1 = state_57140;
var statearr_57192_59747 = state_57140__$1;
(statearr_57192_59747[(2)] = inst_57110);

(statearr_57192_59747[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57141 === (8))){
var inst_57101 = cljs.core.async.close_BANG_(to);
var state_57140__$1 = state_57140;
var statearr_57197_59748 = state_57140__$1;
(statearr_57197_59748[(2)] = inst_57101);

(statearr_57197_59748[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
return (function() {
var cljs$core$async$state_machine__56775__auto__ = null;
var cljs$core$async$state_machine__56775__auto____0 = (function (){
var statearr_57200 = [null,null,null,null,null,null,null,null];
(statearr_57200[(0)] = cljs$core$async$state_machine__56775__auto__);

(statearr_57200[(1)] = (1));

return statearr_57200;
});
var cljs$core$async$state_machine__56775__auto____1 = (function (state_57140){
while(true){
var ret_value__56776__auto__ = (function (){try{while(true){
var result__56777__auto__ = switch__56774__auto__(state_57140);
if(cljs.core.keyword_identical_QMARK_(result__56777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__56777__auto__;
}
break;
}
}catch (e57204){var ex__56778__auto__ = e57204;
var statearr_57206_59749 = state_57140;
(statearr_57206_59749[(2)] = ex__56778__auto__);


if(cljs.core.seq((state_57140[(4)]))){
var statearr_57208_59750 = state_57140;
(statearr_57208_59750[(1)] = cljs.core.first((state_57140[(4)])));

} else {
throw ex__56778__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__56776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59751 = state_57140;
state_57140 = G__59751;
continue;
} else {
return ret_value__56776__auto__;
}
break;
}
});
cljs$core$async$state_machine__56775__auto__ = function(state_57140){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__56775__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__56775__auto____1.call(this,state_57140);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__56775__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__56775__auto____0;
cljs$core$async$state_machine__56775__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__56775__auto____1;
return cljs$core$async$state_machine__56775__auto__;
})()
})();
var state__56879__auto__ = (function (){var statearr_57213 = f__56878__auto__();
(statearr_57213[(6)] = c__56877__auto___59728);

return statearr_57213;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56879__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__57222){
var vec__57223 = p__57222;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57223,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57223,(1),null);
var job = vec__57223;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__56877__auto___59754 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56878__auto__ = (function (){var switch__56774__auto__ = (function (state_57232){
var state_val_57233 = (state_57232[(1)]);
if((state_val_57233 === (1))){
var state_57232__$1 = state_57232;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_57232__$1,(2),res,v);
} else {
if((state_val_57233 === (2))){
var inst_57229 = (state_57232[(2)]);
var inst_57230 = cljs.core.async.close_BANG_(res);
var state_57232__$1 = (function (){var statearr_57238 = state_57232;
(statearr_57238[(7)] = inst_57229);

return statearr_57238;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_57232__$1,inst_57230);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__56775__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__56775__auto____0 = (function (){
var statearr_57240 = [null,null,null,null,null,null,null,null];
(statearr_57240[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__56775__auto__);

(statearr_57240[(1)] = (1));

return statearr_57240;
});
var cljs$core$async$pipeline_STAR__$_state_machine__56775__auto____1 = (function (state_57232){
while(true){
var ret_value__56776__auto__ = (function (){try{while(true){
var result__56777__auto__ = switch__56774__auto__(state_57232);
if(cljs.core.keyword_identical_QMARK_(result__56777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__56777__auto__;
}
break;
}
}catch (e57244){var ex__56778__auto__ = e57244;
var statearr_57245_59760 = state_57232;
(statearr_57245_59760[(2)] = ex__56778__auto__);


if(cljs.core.seq((state_57232[(4)]))){
var statearr_57246_59762 = state_57232;
(statearr_57246_59762[(1)] = cljs.core.first((state_57232[(4)])));

} else {
throw ex__56778__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__56776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59763 = state_57232;
state_57232 = G__59763;
continue;
} else {
return ret_value__56776__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__56775__auto__ = function(state_57232){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__56775__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__56775__auto____1.call(this,state_57232);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__56775__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__56775__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__56775__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__56775__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__56775__auto__;
})()
})();
var state__56879__auto__ = (function (){var statearr_57251 = f__56878__auto__();
(statearr_57251[(6)] = c__56877__auto___59754);

return statearr_57251;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56879__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__57256){
var vec__57257 = p__57256;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57257,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57257,(1),null);
var job = vec__57257;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4613__auto___59765 = n;
var __59766 = (0);
while(true){
if((__59766 < n__4613__auto___59765)){
var G__57263_59767 = type;
var G__57263_59768__$1 = (((G__57263_59767 instanceof cljs.core.Keyword))?G__57263_59767.fqn:null);
switch (G__57263_59768__$1) {
case "compute":
var c__56877__auto___59770 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__59766,c__56877__auto___59770,G__57263_59767,G__57263_59768__$1,n__4613__auto___59765,jobs,results,process,async){
return (function (){
var f__56878__auto__ = (function (){var switch__56774__auto__ = ((function (__59766,c__56877__auto___59770,G__57263_59767,G__57263_59768__$1,n__4613__auto___59765,jobs,results,process,async){
return (function (state_57284){
var state_val_57285 = (state_57284[(1)]);
if((state_val_57285 === (1))){
var state_57284__$1 = state_57284;
var statearr_57290_59772 = state_57284__$1;
(statearr_57290_59772[(2)] = null);

(statearr_57290_59772[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57285 === (2))){
var state_57284__$1 = state_57284;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57284__$1,(4),jobs);
} else {
if((state_val_57285 === (3))){
var inst_57279 = (state_57284[(2)]);
var state_57284__$1 = state_57284;
return cljs.core.async.impl.ioc_helpers.return_chan(state_57284__$1,inst_57279);
} else {
if((state_val_57285 === (4))){
var inst_57270 = (state_57284[(2)]);
var inst_57271 = process(inst_57270);
var state_57284__$1 = state_57284;
if(cljs.core.truth_(inst_57271)){
var statearr_57295_59775 = state_57284__$1;
(statearr_57295_59775[(1)] = (5));

} else {
var statearr_57296_59776 = state_57284__$1;
(statearr_57296_59776[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57285 === (5))){
var state_57284__$1 = state_57284;
var statearr_57298_59777 = state_57284__$1;
(statearr_57298_59777[(2)] = null);

(statearr_57298_59777[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57285 === (6))){
var state_57284__$1 = state_57284;
var statearr_57302_59780 = state_57284__$1;
(statearr_57302_59780[(2)] = null);

(statearr_57302_59780[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57285 === (7))){
var inst_57277 = (state_57284[(2)]);
var state_57284__$1 = state_57284;
var statearr_57303_59781 = state_57284__$1;
(statearr_57303_59781[(2)] = inst_57277);

(statearr_57303_59781[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__59766,c__56877__auto___59770,G__57263_59767,G__57263_59768__$1,n__4613__auto___59765,jobs,results,process,async))
;
return ((function (__59766,switch__56774__auto__,c__56877__auto___59770,G__57263_59767,G__57263_59768__$1,n__4613__auto___59765,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__56775__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__56775__auto____0 = (function (){
var statearr_57304 = [null,null,null,null,null,null,null];
(statearr_57304[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__56775__auto__);

(statearr_57304[(1)] = (1));

return statearr_57304;
});
var cljs$core$async$pipeline_STAR__$_state_machine__56775__auto____1 = (function (state_57284){
while(true){
var ret_value__56776__auto__ = (function (){try{while(true){
var result__56777__auto__ = switch__56774__auto__(state_57284);
if(cljs.core.keyword_identical_QMARK_(result__56777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__56777__auto__;
}
break;
}
}catch (e57305){var ex__56778__auto__ = e57305;
var statearr_57306_59783 = state_57284;
(statearr_57306_59783[(2)] = ex__56778__auto__);


if(cljs.core.seq((state_57284[(4)]))){
var statearr_57307_59786 = state_57284;
(statearr_57307_59786[(1)] = cljs.core.first((state_57284[(4)])));

} else {
throw ex__56778__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__56776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59789 = state_57284;
state_57284 = G__59789;
continue;
} else {
return ret_value__56776__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__56775__auto__ = function(state_57284){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__56775__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__56775__auto____1.call(this,state_57284);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__56775__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__56775__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__56775__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__56775__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__56775__auto__;
})()
;})(__59766,switch__56774__auto__,c__56877__auto___59770,G__57263_59767,G__57263_59768__$1,n__4613__auto___59765,jobs,results,process,async))
})();
var state__56879__auto__ = (function (){var statearr_57308 = f__56878__auto__();
(statearr_57308[(6)] = c__56877__auto___59770);

return statearr_57308;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56879__auto__);
});})(__59766,c__56877__auto___59770,G__57263_59767,G__57263_59768__$1,n__4613__auto___59765,jobs,results,process,async))
);


break;
case "async":
var c__56877__auto___59790 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__59766,c__56877__auto___59790,G__57263_59767,G__57263_59768__$1,n__4613__auto___59765,jobs,results,process,async){
return (function (){
var f__56878__auto__ = (function (){var switch__56774__auto__ = ((function (__59766,c__56877__auto___59790,G__57263_59767,G__57263_59768__$1,n__4613__auto___59765,jobs,results,process,async){
return (function (state_57322){
var state_val_57323 = (state_57322[(1)]);
if((state_val_57323 === (1))){
var state_57322__$1 = state_57322;
var statearr_57331_59792 = state_57322__$1;
(statearr_57331_59792[(2)] = null);

(statearr_57331_59792[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57323 === (2))){
var state_57322__$1 = state_57322;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57322__$1,(4),jobs);
} else {
if((state_val_57323 === (3))){
var inst_57320 = (state_57322[(2)]);
var state_57322__$1 = state_57322;
return cljs.core.async.impl.ioc_helpers.return_chan(state_57322__$1,inst_57320);
} else {
if((state_val_57323 === (4))){
var inst_57312 = (state_57322[(2)]);
var inst_57313 = async(inst_57312);
var state_57322__$1 = state_57322;
if(cljs.core.truth_(inst_57313)){
var statearr_57332_59795 = state_57322__$1;
(statearr_57332_59795[(1)] = (5));

} else {
var statearr_57334_59796 = state_57322__$1;
(statearr_57334_59796[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57323 === (5))){
var state_57322__$1 = state_57322;
var statearr_57335_59799 = state_57322__$1;
(statearr_57335_59799[(2)] = null);

(statearr_57335_59799[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57323 === (6))){
var state_57322__$1 = state_57322;
var statearr_57337_59800 = state_57322__$1;
(statearr_57337_59800[(2)] = null);

(statearr_57337_59800[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57323 === (7))){
var inst_57318 = (state_57322[(2)]);
var state_57322__$1 = state_57322;
var statearr_57338_59801 = state_57322__$1;
(statearr_57338_59801[(2)] = inst_57318);

(statearr_57338_59801[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__59766,c__56877__auto___59790,G__57263_59767,G__57263_59768__$1,n__4613__auto___59765,jobs,results,process,async))
;
return ((function (__59766,switch__56774__auto__,c__56877__auto___59790,G__57263_59767,G__57263_59768__$1,n__4613__auto___59765,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__56775__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__56775__auto____0 = (function (){
var statearr_57339 = [null,null,null,null,null,null,null];
(statearr_57339[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__56775__auto__);

(statearr_57339[(1)] = (1));

return statearr_57339;
});
var cljs$core$async$pipeline_STAR__$_state_machine__56775__auto____1 = (function (state_57322){
while(true){
var ret_value__56776__auto__ = (function (){try{while(true){
var result__56777__auto__ = switch__56774__auto__(state_57322);
if(cljs.core.keyword_identical_QMARK_(result__56777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__56777__auto__;
}
break;
}
}catch (e57340){var ex__56778__auto__ = e57340;
var statearr_57341_59806 = state_57322;
(statearr_57341_59806[(2)] = ex__56778__auto__);


if(cljs.core.seq((state_57322[(4)]))){
var statearr_57342_59808 = state_57322;
(statearr_57342_59808[(1)] = cljs.core.first((state_57322[(4)])));

} else {
throw ex__56778__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__56776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59809 = state_57322;
state_57322 = G__59809;
continue;
} else {
return ret_value__56776__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__56775__auto__ = function(state_57322){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__56775__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__56775__auto____1.call(this,state_57322);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__56775__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__56775__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__56775__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__56775__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__56775__auto__;
})()
;})(__59766,switch__56774__auto__,c__56877__auto___59790,G__57263_59767,G__57263_59768__$1,n__4613__auto___59765,jobs,results,process,async))
})();
var state__56879__auto__ = (function (){var statearr_57347 = f__56878__auto__();
(statearr_57347[(6)] = c__56877__auto___59790);

return statearr_57347;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56879__auto__);
});})(__59766,c__56877__auto___59790,G__57263_59767,G__57263_59768__$1,n__4613__auto___59765,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__57263_59768__$1)].join('')));

}

var G__59810 = (__59766 + (1));
__59766 = G__59810;
continue;
} else {
}
break;
}

var c__56877__auto___59811 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56878__auto__ = (function (){var switch__56774__auto__ = (function (state_57369){
var state_val_57370 = (state_57369[(1)]);
if((state_val_57370 === (7))){
var inst_57365 = (state_57369[(2)]);
var state_57369__$1 = state_57369;
var statearr_57375_59814 = state_57369__$1;
(statearr_57375_59814[(2)] = inst_57365);

(statearr_57375_59814[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57370 === (1))){
var state_57369__$1 = state_57369;
var statearr_57376_59816 = state_57369__$1;
(statearr_57376_59816[(2)] = null);

(statearr_57376_59816[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57370 === (4))){
var inst_57350 = (state_57369[(7)]);
var inst_57350__$1 = (state_57369[(2)]);
var inst_57351 = (inst_57350__$1 == null);
var state_57369__$1 = (function (){var statearr_57377 = state_57369;
(statearr_57377[(7)] = inst_57350__$1);

return statearr_57377;
})();
if(cljs.core.truth_(inst_57351)){
var statearr_57378_59818 = state_57369__$1;
(statearr_57378_59818[(1)] = (5));

} else {
var statearr_57379_59819 = state_57369__$1;
(statearr_57379_59819[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57370 === (6))){
var inst_57350 = (state_57369[(7)]);
var inst_57355 = (state_57369[(8)]);
var inst_57355__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_57356 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_57357 = [inst_57350,inst_57355__$1];
var inst_57358 = (new cljs.core.PersistentVector(null,2,(5),inst_57356,inst_57357,null));
var state_57369__$1 = (function (){var statearr_57385 = state_57369;
(statearr_57385[(8)] = inst_57355__$1);

return statearr_57385;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_57369__$1,(8),jobs,inst_57358);
} else {
if((state_val_57370 === (3))){
var inst_57367 = (state_57369[(2)]);
var state_57369__$1 = state_57369;
return cljs.core.async.impl.ioc_helpers.return_chan(state_57369__$1,inst_57367);
} else {
if((state_val_57370 === (2))){
var state_57369__$1 = state_57369;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57369__$1,(4),from);
} else {
if((state_val_57370 === (9))){
var inst_57362 = (state_57369[(2)]);
var state_57369__$1 = (function (){var statearr_57389 = state_57369;
(statearr_57389[(9)] = inst_57362);

return statearr_57389;
})();
var statearr_57390_59823 = state_57369__$1;
(statearr_57390_59823[(2)] = null);

(statearr_57390_59823[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57370 === (5))){
var inst_57353 = cljs.core.async.close_BANG_(jobs);
var state_57369__$1 = state_57369;
var statearr_57391_59824 = state_57369__$1;
(statearr_57391_59824[(2)] = inst_57353);

(statearr_57391_59824[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57370 === (8))){
var inst_57355 = (state_57369[(8)]);
var inst_57360 = (state_57369[(2)]);
var state_57369__$1 = (function (){var statearr_57392 = state_57369;
(statearr_57392[(10)] = inst_57360);

return statearr_57392;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_57369__$1,(9),results,inst_57355);
} else {
return null;
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
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__56775__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__56775__auto____0 = (function (){
var statearr_57394 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_57394[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__56775__auto__);

(statearr_57394[(1)] = (1));

return statearr_57394;
});
var cljs$core$async$pipeline_STAR__$_state_machine__56775__auto____1 = (function (state_57369){
while(true){
var ret_value__56776__auto__ = (function (){try{while(true){
var result__56777__auto__ = switch__56774__auto__(state_57369);
if(cljs.core.keyword_identical_QMARK_(result__56777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__56777__auto__;
}
break;
}
}catch (e57398){var ex__56778__auto__ = e57398;
var statearr_57399_59826 = state_57369;
(statearr_57399_59826[(2)] = ex__56778__auto__);


if(cljs.core.seq((state_57369[(4)]))){
var statearr_57400_59827 = state_57369;
(statearr_57400_59827[(1)] = cljs.core.first((state_57369[(4)])));

} else {
throw ex__56778__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__56776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59829 = state_57369;
state_57369 = G__59829;
continue;
} else {
return ret_value__56776__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__56775__auto__ = function(state_57369){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__56775__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__56775__auto____1.call(this,state_57369);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__56775__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__56775__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__56775__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__56775__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__56775__auto__;
})()
})();
var state__56879__auto__ = (function (){var statearr_57402 = f__56878__auto__();
(statearr_57402[(6)] = c__56877__auto___59811);

return statearr_57402;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56879__auto__);
}));


var c__56877__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56878__auto__ = (function (){var switch__56774__auto__ = (function (state_57452){
var state_val_57453 = (state_57452[(1)]);
if((state_val_57453 === (7))){
var inst_57444 = (state_57452[(2)]);
var state_57452__$1 = state_57452;
var statearr_57455_59839 = state_57452__$1;
(statearr_57455_59839[(2)] = inst_57444);

(statearr_57455_59839[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57453 === (20))){
var state_57452__$1 = state_57452;
var statearr_57456_59840 = state_57452__$1;
(statearr_57456_59840[(2)] = null);

(statearr_57456_59840[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57453 === (1))){
var state_57452__$1 = state_57452;
var statearr_57457_59841 = state_57452__$1;
(statearr_57457_59841[(2)] = null);

(statearr_57457_59841[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57453 === (4))){
var inst_57412 = (state_57452[(7)]);
var inst_57412__$1 = (state_57452[(2)]);
var inst_57413 = (inst_57412__$1 == null);
var state_57452__$1 = (function (){var statearr_57458 = state_57452;
(statearr_57458[(7)] = inst_57412__$1);

return statearr_57458;
})();
if(cljs.core.truth_(inst_57413)){
var statearr_57460_59842 = state_57452__$1;
(statearr_57460_59842[(1)] = (5));

} else {
var statearr_57461_59843 = state_57452__$1;
(statearr_57461_59843[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57453 === (15))){
var inst_57425 = (state_57452[(8)]);
var state_57452__$1 = state_57452;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_57452__$1,(18),to,inst_57425);
} else {
if((state_val_57453 === (21))){
var inst_57439 = (state_57452[(2)]);
var state_57452__$1 = state_57452;
var statearr_57466_59849 = state_57452__$1;
(statearr_57466_59849[(2)] = inst_57439);

(statearr_57466_59849[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57453 === (13))){
var inst_57441 = (state_57452[(2)]);
var state_57452__$1 = (function (){var statearr_57468 = state_57452;
(statearr_57468[(9)] = inst_57441);

return statearr_57468;
})();
var statearr_57470_59850 = state_57452__$1;
(statearr_57470_59850[(2)] = null);

(statearr_57470_59850[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57453 === (6))){
var inst_57412 = (state_57452[(7)]);
var state_57452__$1 = state_57452;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57452__$1,(11),inst_57412);
} else {
if((state_val_57453 === (17))){
var inst_57434 = (state_57452[(2)]);
var state_57452__$1 = state_57452;
if(cljs.core.truth_(inst_57434)){
var statearr_57474_59852 = state_57452__$1;
(statearr_57474_59852[(1)] = (19));

} else {
var statearr_57476_59853 = state_57452__$1;
(statearr_57476_59853[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57453 === (3))){
var inst_57446 = (state_57452[(2)]);
var state_57452__$1 = state_57452;
return cljs.core.async.impl.ioc_helpers.return_chan(state_57452__$1,inst_57446);
} else {
if((state_val_57453 === (12))){
var inst_57422 = (state_57452[(10)]);
var state_57452__$1 = state_57452;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57452__$1,(14),inst_57422);
} else {
if((state_val_57453 === (2))){
var state_57452__$1 = state_57452;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57452__$1,(4),results);
} else {
if((state_val_57453 === (19))){
var state_57452__$1 = state_57452;
var statearr_57482_59860 = state_57452__$1;
(statearr_57482_59860[(2)] = null);

(statearr_57482_59860[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57453 === (11))){
var inst_57422 = (state_57452[(2)]);
var state_57452__$1 = (function (){var statearr_57487 = state_57452;
(statearr_57487[(10)] = inst_57422);

return statearr_57487;
})();
var statearr_57488_59861 = state_57452__$1;
(statearr_57488_59861[(2)] = null);

(statearr_57488_59861[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57453 === (9))){
var state_57452__$1 = state_57452;
var statearr_57490_59862 = state_57452__$1;
(statearr_57490_59862[(2)] = null);

(statearr_57490_59862[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57453 === (5))){
var state_57452__$1 = state_57452;
if(cljs.core.truth_(close_QMARK_)){
var statearr_57492_59866 = state_57452__$1;
(statearr_57492_59866[(1)] = (8));

} else {
var statearr_57496_59867 = state_57452__$1;
(statearr_57496_59867[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57453 === (14))){
var inst_57425 = (state_57452[(8)]);
var inst_57425__$1 = (state_57452[(2)]);
var inst_57427 = (inst_57425__$1 == null);
var inst_57428 = cljs.core.not(inst_57427);
var state_57452__$1 = (function (){var statearr_57498 = state_57452;
(statearr_57498[(8)] = inst_57425__$1);

return statearr_57498;
})();
if(inst_57428){
var statearr_57499_59870 = state_57452__$1;
(statearr_57499_59870[(1)] = (15));

} else {
var statearr_57500_59871 = state_57452__$1;
(statearr_57500_59871[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57453 === (16))){
var state_57452__$1 = state_57452;
var statearr_57505_59874 = state_57452__$1;
(statearr_57505_59874[(2)] = false);

(statearr_57505_59874[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57453 === (10))){
var inst_57419 = (state_57452[(2)]);
var state_57452__$1 = state_57452;
var statearr_57506_59878 = state_57452__$1;
(statearr_57506_59878[(2)] = inst_57419);

(statearr_57506_59878[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57453 === (18))){
var inst_57431 = (state_57452[(2)]);
var state_57452__$1 = state_57452;
var statearr_57508_59879 = state_57452__$1;
(statearr_57508_59879[(2)] = inst_57431);

(statearr_57508_59879[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57453 === (8))){
var inst_57416 = cljs.core.async.close_BANG_(to);
var state_57452__$1 = state_57452;
var statearr_57513_59880 = state_57452__$1;
(statearr_57513_59880[(2)] = inst_57416);

(statearr_57513_59880[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__56775__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__56775__auto____0 = (function (){
var statearr_57519 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_57519[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__56775__auto__);

(statearr_57519[(1)] = (1));

return statearr_57519;
});
var cljs$core$async$pipeline_STAR__$_state_machine__56775__auto____1 = (function (state_57452){
while(true){
var ret_value__56776__auto__ = (function (){try{while(true){
var result__56777__auto__ = switch__56774__auto__(state_57452);
if(cljs.core.keyword_identical_QMARK_(result__56777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__56777__auto__;
}
break;
}
}catch (e57520){var ex__56778__auto__ = e57520;
var statearr_57522_59886 = state_57452;
(statearr_57522_59886[(2)] = ex__56778__auto__);


if(cljs.core.seq((state_57452[(4)]))){
var statearr_57523_59887 = state_57452;
(statearr_57523_59887[(1)] = cljs.core.first((state_57452[(4)])));

} else {
throw ex__56778__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__56776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59889 = state_57452;
state_57452 = G__59889;
continue;
} else {
return ret_value__56776__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__56775__auto__ = function(state_57452){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__56775__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__56775__auto____1.call(this,state_57452);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__56775__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__56775__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__56775__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__56775__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__56775__auto__;
})()
})();
var state__56879__auto__ = (function (){var statearr_57528 = f__56878__auto__();
(statearr_57528[(6)] = c__56877__auto__);

return statearr_57528;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56879__auto__);
}));

return c__56877__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__57536 = arguments.length;
switch (G__57536) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__57546 = arguments.length;
switch (G__57546) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__57560 = arguments.length;
switch (G__57560) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__56877__auto___59916 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56878__auto__ = (function (){var switch__56774__auto__ = (function (state_57597){
var state_val_57598 = (state_57597[(1)]);
if((state_val_57598 === (7))){
var inst_57593 = (state_57597[(2)]);
var state_57597__$1 = state_57597;
var statearr_57600_59920 = state_57597__$1;
(statearr_57600_59920[(2)] = inst_57593);

(statearr_57600_59920[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57598 === (1))){
var state_57597__$1 = state_57597;
var statearr_57601_59923 = state_57597__$1;
(statearr_57601_59923[(2)] = null);

(statearr_57601_59923[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57598 === (4))){
var inst_57574 = (state_57597[(7)]);
var inst_57574__$1 = (state_57597[(2)]);
var inst_57575 = (inst_57574__$1 == null);
var state_57597__$1 = (function (){var statearr_57605 = state_57597;
(statearr_57605[(7)] = inst_57574__$1);

return statearr_57605;
})();
if(cljs.core.truth_(inst_57575)){
var statearr_57607_59924 = state_57597__$1;
(statearr_57607_59924[(1)] = (5));

} else {
var statearr_57608_59925 = state_57597__$1;
(statearr_57608_59925[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57598 === (13))){
var state_57597__$1 = state_57597;
var statearr_57610_59926 = state_57597__$1;
(statearr_57610_59926[(2)] = null);

(statearr_57610_59926[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57598 === (6))){
var inst_57574 = (state_57597[(7)]);
var inst_57580 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_57574) : p.call(null,inst_57574));
var state_57597__$1 = state_57597;
if(cljs.core.truth_(inst_57580)){
var statearr_57611_59927 = state_57597__$1;
(statearr_57611_59927[(1)] = (9));

} else {
var statearr_57612_59931 = state_57597__$1;
(statearr_57612_59931[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57598 === (3))){
var inst_57595 = (state_57597[(2)]);
var state_57597__$1 = state_57597;
return cljs.core.async.impl.ioc_helpers.return_chan(state_57597__$1,inst_57595);
} else {
if((state_val_57598 === (12))){
var state_57597__$1 = state_57597;
var statearr_57616_59937 = state_57597__$1;
(statearr_57616_59937[(2)] = null);

(statearr_57616_59937[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57598 === (2))){
var state_57597__$1 = state_57597;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57597__$1,(4),ch);
} else {
if((state_val_57598 === (11))){
var inst_57574 = (state_57597[(7)]);
var inst_57584 = (state_57597[(2)]);
var state_57597__$1 = state_57597;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_57597__$1,(8),inst_57584,inst_57574);
} else {
if((state_val_57598 === (9))){
var state_57597__$1 = state_57597;
var statearr_57618_59938 = state_57597__$1;
(statearr_57618_59938[(2)] = tc);

(statearr_57618_59938[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57598 === (5))){
var inst_57577 = cljs.core.async.close_BANG_(tc);
var inst_57578 = cljs.core.async.close_BANG_(fc);
var state_57597__$1 = (function (){var statearr_57619 = state_57597;
(statearr_57619[(8)] = inst_57577);

return statearr_57619;
})();
var statearr_57620_59944 = state_57597__$1;
(statearr_57620_59944[(2)] = inst_57578);

(statearr_57620_59944[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57598 === (14))){
var inst_57591 = (state_57597[(2)]);
var state_57597__$1 = state_57597;
var statearr_57621_59950 = state_57597__$1;
(statearr_57621_59950[(2)] = inst_57591);

(statearr_57621_59950[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57598 === (10))){
var state_57597__$1 = state_57597;
var statearr_57622_59951 = state_57597__$1;
(statearr_57622_59951[(2)] = fc);

(statearr_57622_59951[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57598 === (8))){
var inst_57586 = (state_57597[(2)]);
var state_57597__$1 = state_57597;
if(cljs.core.truth_(inst_57586)){
var statearr_57623_59953 = state_57597__$1;
(statearr_57623_59953[(1)] = (12));

} else {
var statearr_57624_59954 = state_57597__$1;
(statearr_57624_59954[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
return (function() {
var cljs$core$async$state_machine__56775__auto__ = null;
var cljs$core$async$state_machine__56775__auto____0 = (function (){
var statearr_57625 = [null,null,null,null,null,null,null,null,null];
(statearr_57625[(0)] = cljs$core$async$state_machine__56775__auto__);

(statearr_57625[(1)] = (1));

return statearr_57625;
});
var cljs$core$async$state_machine__56775__auto____1 = (function (state_57597){
while(true){
var ret_value__56776__auto__ = (function (){try{while(true){
var result__56777__auto__ = switch__56774__auto__(state_57597);
if(cljs.core.keyword_identical_QMARK_(result__56777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__56777__auto__;
}
break;
}
}catch (e57626){var ex__56778__auto__ = e57626;
var statearr_57627_59961 = state_57597;
(statearr_57627_59961[(2)] = ex__56778__auto__);


if(cljs.core.seq((state_57597[(4)]))){
var statearr_57628_59962 = state_57597;
(statearr_57628_59962[(1)] = cljs.core.first((state_57597[(4)])));

} else {
throw ex__56778__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__56776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59964 = state_57597;
state_57597 = G__59964;
continue;
} else {
return ret_value__56776__auto__;
}
break;
}
});
cljs$core$async$state_machine__56775__auto__ = function(state_57597){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__56775__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__56775__auto____1.call(this,state_57597);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__56775__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__56775__auto____0;
cljs$core$async$state_machine__56775__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__56775__auto____1;
return cljs$core$async$state_machine__56775__auto__;
})()
})();
var state__56879__auto__ = (function (){var statearr_57629 = f__56878__auto__();
(statearr_57629[(6)] = c__56877__auto___59916);

return statearr_57629;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56879__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__56877__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56878__auto__ = (function (){var switch__56774__auto__ = (function (state_57661){
var state_val_57662 = (state_57661[(1)]);
if((state_val_57662 === (7))){
var inst_57655 = (state_57661[(2)]);
var state_57661__$1 = state_57661;
var statearr_57666_59967 = state_57661__$1;
(statearr_57666_59967[(2)] = inst_57655);

(statearr_57666_59967[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57662 === (1))){
var inst_57633 = init;
var inst_57634 = inst_57633;
var state_57661__$1 = (function (){var statearr_57667 = state_57661;
(statearr_57667[(7)] = inst_57634);

return statearr_57667;
})();
var statearr_57668_59969 = state_57661__$1;
(statearr_57668_59969[(2)] = null);

(statearr_57668_59969[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57662 === (4))){
var inst_57638 = (state_57661[(8)]);
var inst_57638__$1 = (state_57661[(2)]);
var inst_57641 = (inst_57638__$1 == null);
var state_57661__$1 = (function (){var statearr_57672 = state_57661;
(statearr_57672[(8)] = inst_57638__$1);

return statearr_57672;
})();
if(cljs.core.truth_(inst_57641)){
var statearr_57673_59970 = state_57661__$1;
(statearr_57673_59970[(1)] = (5));

} else {
var statearr_57674_59971 = state_57661__$1;
(statearr_57674_59971[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57662 === (6))){
var inst_57634 = (state_57661[(7)]);
var inst_57638 = (state_57661[(8)]);
var inst_57645 = (state_57661[(9)]);
var inst_57645__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_57634,inst_57638) : f.call(null,inst_57634,inst_57638));
var inst_57646 = cljs.core.reduced_QMARK_(inst_57645__$1);
var state_57661__$1 = (function (){var statearr_57675 = state_57661;
(statearr_57675[(9)] = inst_57645__$1);

return statearr_57675;
})();
if(inst_57646){
var statearr_57678_59974 = state_57661__$1;
(statearr_57678_59974[(1)] = (8));

} else {
var statearr_57679_59981 = state_57661__$1;
(statearr_57679_59981[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57662 === (3))){
var inst_57659 = (state_57661[(2)]);
var state_57661__$1 = state_57661;
return cljs.core.async.impl.ioc_helpers.return_chan(state_57661__$1,inst_57659);
} else {
if((state_val_57662 === (2))){
var state_57661__$1 = state_57661;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57661__$1,(4),ch);
} else {
if((state_val_57662 === (9))){
var inst_57645 = (state_57661[(9)]);
var inst_57634 = inst_57645;
var state_57661__$1 = (function (){var statearr_57682 = state_57661;
(statearr_57682[(7)] = inst_57634);

return statearr_57682;
})();
var statearr_57683_59984 = state_57661__$1;
(statearr_57683_59984[(2)] = null);

(statearr_57683_59984[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57662 === (5))){
var inst_57634 = (state_57661[(7)]);
var state_57661__$1 = state_57661;
var statearr_57684_59985 = state_57661__$1;
(statearr_57684_59985[(2)] = inst_57634);

(statearr_57684_59985[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57662 === (10))){
var inst_57653 = (state_57661[(2)]);
var state_57661__$1 = state_57661;
var statearr_57685_59986 = state_57661__$1;
(statearr_57685_59986[(2)] = inst_57653);

(statearr_57685_59986[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57662 === (8))){
var inst_57645 = (state_57661[(9)]);
var inst_57649 = cljs.core.deref(inst_57645);
var state_57661__$1 = state_57661;
var statearr_57686_59990 = state_57661__$1;
(statearr_57686_59990[(2)] = inst_57649);

(statearr_57686_59990[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
return (function() {
var cljs$core$async$reduce_$_state_machine__56775__auto__ = null;
var cljs$core$async$reduce_$_state_machine__56775__auto____0 = (function (){
var statearr_57687 = [null,null,null,null,null,null,null,null,null,null];
(statearr_57687[(0)] = cljs$core$async$reduce_$_state_machine__56775__auto__);

(statearr_57687[(1)] = (1));

return statearr_57687;
});
var cljs$core$async$reduce_$_state_machine__56775__auto____1 = (function (state_57661){
while(true){
var ret_value__56776__auto__ = (function (){try{while(true){
var result__56777__auto__ = switch__56774__auto__(state_57661);
if(cljs.core.keyword_identical_QMARK_(result__56777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__56777__auto__;
}
break;
}
}catch (e57689){var ex__56778__auto__ = e57689;
var statearr_57690_59994 = state_57661;
(statearr_57690_59994[(2)] = ex__56778__auto__);


if(cljs.core.seq((state_57661[(4)]))){
var statearr_57691_59995 = state_57661;
(statearr_57691_59995[(1)] = cljs.core.first((state_57661[(4)])));

} else {
throw ex__56778__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__56776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59996 = state_57661;
state_57661 = G__59996;
continue;
} else {
return ret_value__56776__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__56775__auto__ = function(state_57661){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__56775__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__56775__auto____1.call(this,state_57661);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__56775__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__56775__auto____0;
cljs$core$async$reduce_$_state_machine__56775__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__56775__auto____1;
return cljs$core$async$reduce_$_state_machine__56775__auto__;
})()
})();
var state__56879__auto__ = (function (){var statearr_57692 = f__56878__auto__();
(statearr_57692[(6)] = c__56877__auto__);

return statearr_57692;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56879__auto__);
}));

return c__56877__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__56877__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56878__auto__ = (function (){var switch__56774__auto__ = (function (state_57702){
var state_val_57704 = (state_57702[(1)]);
if((state_val_57704 === (1))){
var inst_57697 = cljs.core.async.reduce(f__$1,init,ch);
var state_57702__$1 = state_57702;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57702__$1,(2),inst_57697);
} else {
if((state_val_57704 === (2))){
var inst_57699 = (state_57702[(2)]);
var inst_57700 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_57699) : f__$1.call(null,inst_57699));
var state_57702__$1 = state_57702;
return cljs.core.async.impl.ioc_helpers.return_chan(state_57702__$1,inst_57700);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__56775__auto__ = null;
var cljs$core$async$transduce_$_state_machine__56775__auto____0 = (function (){
var statearr_57706 = [null,null,null,null,null,null,null];
(statearr_57706[(0)] = cljs$core$async$transduce_$_state_machine__56775__auto__);

(statearr_57706[(1)] = (1));

return statearr_57706;
});
var cljs$core$async$transduce_$_state_machine__56775__auto____1 = (function (state_57702){
while(true){
var ret_value__56776__auto__ = (function (){try{while(true){
var result__56777__auto__ = switch__56774__auto__(state_57702);
if(cljs.core.keyword_identical_QMARK_(result__56777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__56777__auto__;
}
break;
}
}catch (e57707){var ex__56778__auto__ = e57707;
var statearr_57708_60003 = state_57702;
(statearr_57708_60003[(2)] = ex__56778__auto__);


if(cljs.core.seq((state_57702[(4)]))){
var statearr_57711_60004 = state_57702;
(statearr_57711_60004[(1)] = cljs.core.first((state_57702[(4)])));

} else {
throw ex__56778__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__56776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60008 = state_57702;
state_57702 = G__60008;
continue;
} else {
return ret_value__56776__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__56775__auto__ = function(state_57702){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__56775__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__56775__auto____1.call(this,state_57702);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__56775__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__56775__auto____0;
cljs$core$async$transduce_$_state_machine__56775__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__56775__auto____1;
return cljs$core$async$transduce_$_state_machine__56775__auto__;
})()
})();
var state__56879__auto__ = (function (){var statearr_57712 = f__56878__auto__();
(statearr_57712[(6)] = c__56877__auto__);

return statearr_57712;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56879__auto__);
}));

return c__56877__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__57715 = arguments.length;
switch (G__57715) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__56877__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56878__auto__ = (function (){var switch__56774__auto__ = (function (state_57757){
var state_val_57759 = (state_57757[(1)]);
if((state_val_57759 === (7))){
var inst_57734 = (state_57757[(2)]);
var state_57757__$1 = state_57757;
var statearr_57766_60014 = state_57757__$1;
(statearr_57766_60014[(2)] = inst_57734);

(statearr_57766_60014[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57759 === (1))){
var inst_57726 = cljs.core.seq(coll);
var inst_57727 = inst_57726;
var state_57757__$1 = (function (){var statearr_57767 = state_57757;
(statearr_57767[(7)] = inst_57727);

return statearr_57767;
})();
var statearr_57768_60015 = state_57757__$1;
(statearr_57768_60015[(2)] = null);

(statearr_57768_60015[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57759 === (4))){
var inst_57727 = (state_57757[(7)]);
var inst_57732 = cljs.core.first(inst_57727);
var state_57757__$1 = state_57757;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_57757__$1,(7),ch,inst_57732);
} else {
if((state_val_57759 === (13))){
var inst_57751 = (state_57757[(2)]);
var state_57757__$1 = state_57757;
var statearr_57769_60023 = state_57757__$1;
(statearr_57769_60023[(2)] = inst_57751);

(statearr_57769_60023[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57759 === (6))){
var inst_57737 = (state_57757[(2)]);
var state_57757__$1 = state_57757;
if(cljs.core.truth_(inst_57737)){
var statearr_57771_60025 = state_57757__$1;
(statearr_57771_60025[(1)] = (8));

} else {
var statearr_57772_60026 = state_57757__$1;
(statearr_57772_60026[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57759 === (3))){
var inst_57755 = (state_57757[(2)]);
var state_57757__$1 = state_57757;
return cljs.core.async.impl.ioc_helpers.return_chan(state_57757__$1,inst_57755);
} else {
if((state_val_57759 === (12))){
var state_57757__$1 = state_57757;
var statearr_57775_60027 = state_57757__$1;
(statearr_57775_60027[(2)] = null);

(statearr_57775_60027[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57759 === (2))){
var inst_57727 = (state_57757[(7)]);
var state_57757__$1 = state_57757;
if(cljs.core.truth_(inst_57727)){
var statearr_57777_60028 = state_57757__$1;
(statearr_57777_60028[(1)] = (4));

} else {
var statearr_57778_60029 = state_57757__$1;
(statearr_57778_60029[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57759 === (11))){
var inst_57748 = cljs.core.async.close_BANG_(ch);
var state_57757__$1 = state_57757;
var statearr_57779_60031 = state_57757__$1;
(statearr_57779_60031[(2)] = inst_57748);

(statearr_57779_60031[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57759 === (9))){
var state_57757__$1 = state_57757;
if(cljs.core.truth_(close_QMARK_)){
var statearr_57780_60032 = state_57757__$1;
(statearr_57780_60032[(1)] = (11));

} else {
var statearr_57781_60033 = state_57757__$1;
(statearr_57781_60033[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57759 === (5))){
var inst_57727 = (state_57757[(7)]);
var state_57757__$1 = state_57757;
var statearr_57785_60034 = state_57757__$1;
(statearr_57785_60034[(2)] = inst_57727);

(statearr_57785_60034[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57759 === (10))){
var inst_57753 = (state_57757[(2)]);
var state_57757__$1 = state_57757;
var statearr_57786_60035 = state_57757__$1;
(statearr_57786_60035[(2)] = inst_57753);

(statearr_57786_60035[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57759 === (8))){
var inst_57727 = (state_57757[(7)]);
var inst_57740 = cljs.core.next(inst_57727);
var inst_57727__$1 = inst_57740;
var state_57757__$1 = (function (){var statearr_57789 = state_57757;
(statearr_57789[(7)] = inst_57727__$1);

return statearr_57789;
})();
var statearr_57790_60039 = state_57757__$1;
(statearr_57790_60039[(2)] = null);

(statearr_57790_60039[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
return (function() {
var cljs$core$async$state_machine__56775__auto__ = null;
var cljs$core$async$state_machine__56775__auto____0 = (function (){
var statearr_57792 = [null,null,null,null,null,null,null,null];
(statearr_57792[(0)] = cljs$core$async$state_machine__56775__auto__);

(statearr_57792[(1)] = (1));

return statearr_57792;
});
var cljs$core$async$state_machine__56775__auto____1 = (function (state_57757){
while(true){
var ret_value__56776__auto__ = (function (){try{while(true){
var result__56777__auto__ = switch__56774__auto__(state_57757);
if(cljs.core.keyword_identical_QMARK_(result__56777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__56777__auto__;
}
break;
}
}catch (e57793){var ex__56778__auto__ = e57793;
var statearr_57794_60041 = state_57757;
(statearr_57794_60041[(2)] = ex__56778__auto__);


if(cljs.core.seq((state_57757[(4)]))){
var statearr_57795_60042 = state_57757;
(statearr_57795_60042[(1)] = cljs.core.first((state_57757[(4)])));

} else {
throw ex__56778__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__56776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60044 = state_57757;
state_57757 = G__60044;
continue;
} else {
return ret_value__56776__auto__;
}
break;
}
});
cljs$core$async$state_machine__56775__auto__ = function(state_57757){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__56775__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__56775__auto____1.call(this,state_57757);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__56775__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__56775__auto____0;
cljs$core$async$state_machine__56775__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__56775__auto____1;
return cljs$core$async$state_machine__56775__auto__;
})()
})();
var state__56879__auto__ = (function (){var statearr_57796 = f__56878__auto__();
(statearr_57796[(6)] = c__56877__auto__);

return statearr_57796;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56879__auto__);
}));

return c__56877__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__57824 = arguments.length;
switch (G__57824) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_60048 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_60048(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_60049 = (function (m,ch,close_QMARK_){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4429__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4426__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_60049(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_60050 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_60050(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_60054 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_60054(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async57894 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async57894 = (function (ch,cs,meta57895){
this.ch = ch;
this.cs = cs;
this.meta57895 = meta57895;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async57894.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_57896,meta57895__$1){
var self__ = this;
var _57896__$1 = this;
return (new cljs.core.async.t_cljs$core$async57894(self__.ch,self__.cs,meta57895__$1));
}));

(cljs.core.async.t_cljs$core$async57894.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_57896){
var self__ = this;
var _57896__$1 = this;
return self__.meta57895;
}));

(cljs.core.async.t_cljs$core$async57894.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async57894.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async57894.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async57894.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async57894.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async57894.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async57894.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta57895","meta57895",-685404447,null)], null);
}));

(cljs.core.async.t_cljs$core$async57894.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async57894.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async57894");

(cljs.core.async.t_cljs$core$async57894.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async57894");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async57894.
 */
cljs.core.async.__GT_t_cljs$core$async57894 = (function cljs$core$async$mult_$___GT_t_cljs$core$async57894(ch__$1,cs__$1,meta57895){
return (new cljs.core.async.t_cljs$core$async57894(ch__$1,cs__$1,meta57895));
});

}

return (new cljs.core.async.t_cljs$core$async57894(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__56877__auto___60061 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56878__auto__ = (function (){var switch__56774__auto__ = (function (state_58051){
var state_val_58052 = (state_58051[(1)]);
if((state_val_58052 === (7))){
var inst_58047 = (state_58051[(2)]);
var state_58051__$1 = state_58051;
var statearr_58056_60064 = state_58051__$1;
(statearr_58056_60064[(2)] = inst_58047);

(statearr_58056_60064[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58052 === (20))){
var inst_57943 = (state_58051[(7)]);
var inst_57958 = cljs.core.first(inst_57943);
var inst_57960 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_57958,(0),null);
var inst_57961 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_57958,(1),null);
var state_58051__$1 = (function (){var statearr_58057 = state_58051;
(statearr_58057[(8)] = inst_57960);

return statearr_58057;
})();
if(cljs.core.truth_(inst_57961)){
var statearr_58058_60067 = state_58051__$1;
(statearr_58058_60067[(1)] = (22));

} else {
var statearr_58060_60068 = state_58051__$1;
(statearr_58060_60068[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58052 === (27))){
var inst_57912 = (state_58051[(9)]);
var inst_57998 = (state_58051[(10)]);
var inst_57992 = (state_58051[(11)]);
var inst_57990 = (state_58051[(12)]);
var inst_57998__$1 = cljs.core._nth(inst_57990,inst_57992);
var inst_57999 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_57998__$1,inst_57912,done);
var state_58051__$1 = (function (){var statearr_58063 = state_58051;
(statearr_58063[(10)] = inst_57998__$1);

return statearr_58063;
})();
if(cljs.core.truth_(inst_57999)){
var statearr_58072_60070 = state_58051__$1;
(statearr_58072_60070[(1)] = (30));

} else {
var statearr_58073_60071 = state_58051__$1;
(statearr_58073_60071[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58052 === (1))){
var state_58051__$1 = state_58051;
var statearr_58074_60073 = state_58051__$1;
(statearr_58074_60073[(2)] = null);

(statearr_58074_60073[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58052 === (24))){
var inst_57943 = (state_58051[(7)]);
var inst_57966 = (state_58051[(2)]);
var inst_57967 = cljs.core.next(inst_57943);
var inst_57921 = inst_57967;
var inst_57922 = null;
var inst_57923 = (0);
var inst_57924 = (0);
var state_58051__$1 = (function (){var statearr_58075 = state_58051;
(statearr_58075[(13)] = inst_57922);

(statearr_58075[(14)] = inst_57966);

(statearr_58075[(15)] = inst_57924);

(statearr_58075[(16)] = inst_57923);

(statearr_58075[(17)] = inst_57921);

return statearr_58075;
})();
var statearr_58076_60075 = state_58051__$1;
(statearr_58076_60075[(2)] = null);

(statearr_58076_60075[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58052 === (39))){
var state_58051__$1 = state_58051;
var statearr_58080_60076 = state_58051__$1;
(statearr_58080_60076[(2)] = null);

(statearr_58080_60076[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58052 === (4))){
var inst_57912 = (state_58051[(9)]);
var inst_57912__$1 = (state_58051[(2)]);
var inst_57913 = (inst_57912__$1 == null);
var state_58051__$1 = (function (){var statearr_58081 = state_58051;
(statearr_58081[(9)] = inst_57912__$1);

return statearr_58081;
})();
if(cljs.core.truth_(inst_57913)){
var statearr_58082_60078 = state_58051__$1;
(statearr_58082_60078[(1)] = (5));

} else {
var statearr_58083_60079 = state_58051__$1;
(statearr_58083_60079[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58052 === (15))){
var inst_57922 = (state_58051[(13)]);
var inst_57924 = (state_58051[(15)]);
var inst_57923 = (state_58051[(16)]);
var inst_57921 = (state_58051[(17)]);
var inst_57939 = (state_58051[(2)]);
var inst_57940 = (inst_57924 + (1));
var tmp58077 = inst_57922;
var tmp58078 = inst_57923;
var tmp58079 = inst_57921;
var inst_57921__$1 = tmp58079;
var inst_57922__$1 = tmp58077;
var inst_57923__$1 = tmp58078;
var inst_57924__$1 = inst_57940;
var state_58051__$1 = (function (){var statearr_58084 = state_58051;
(statearr_58084[(13)] = inst_57922__$1);

(statearr_58084[(18)] = inst_57939);

(statearr_58084[(15)] = inst_57924__$1);

(statearr_58084[(16)] = inst_57923__$1);

(statearr_58084[(17)] = inst_57921__$1);

return statearr_58084;
})();
var statearr_58085_60084 = state_58051__$1;
(statearr_58085_60084[(2)] = null);

(statearr_58085_60084[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58052 === (21))){
var inst_57970 = (state_58051[(2)]);
var state_58051__$1 = state_58051;
var statearr_58093_60085 = state_58051__$1;
(statearr_58093_60085[(2)] = inst_57970);

(statearr_58093_60085[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58052 === (31))){
var inst_57998 = (state_58051[(10)]);
var inst_58002 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_57998);
var state_58051__$1 = state_58051;
var statearr_58096_60088 = state_58051__$1;
(statearr_58096_60088[(2)] = inst_58002);

(statearr_58096_60088[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58052 === (32))){
var inst_57989 = (state_58051[(19)]);
var inst_57992 = (state_58051[(11)]);
var inst_57991 = (state_58051[(20)]);
var inst_57990 = (state_58051[(12)]);
var inst_58004 = (state_58051[(2)]);
var inst_58005 = (inst_57992 + (1));
var tmp58086 = inst_57989;
var tmp58087 = inst_57991;
var tmp58088 = inst_57990;
var inst_57989__$1 = tmp58086;
var inst_57990__$1 = tmp58088;
var inst_57991__$1 = tmp58087;
var inst_57992__$1 = inst_58005;
var state_58051__$1 = (function (){var statearr_58099 = state_58051;
(statearr_58099[(19)] = inst_57989__$1);

(statearr_58099[(21)] = inst_58004);

(statearr_58099[(11)] = inst_57992__$1);

(statearr_58099[(20)] = inst_57991__$1);

(statearr_58099[(12)] = inst_57990__$1);

return statearr_58099;
})();
var statearr_58100_60093 = state_58051__$1;
(statearr_58100_60093[(2)] = null);

(statearr_58100_60093[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58052 === (40))){
var inst_58017 = (state_58051[(22)]);
var inst_58022 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_58017);
var state_58051__$1 = state_58051;
var statearr_58101_60094 = state_58051__$1;
(statearr_58101_60094[(2)] = inst_58022);

(statearr_58101_60094[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58052 === (33))){
var inst_58008 = (state_58051[(23)]);
var inst_58010 = cljs.core.chunked_seq_QMARK_(inst_58008);
var state_58051__$1 = state_58051;
if(inst_58010){
var statearr_58105_60096 = state_58051__$1;
(statearr_58105_60096[(1)] = (36));

} else {
var statearr_58107_60097 = state_58051__$1;
(statearr_58107_60097[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58052 === (13))){
var inst_57933 = (state_58051[(24)]);
var inst_57936 = cljs.core.async.close_BANG_(inst_57933);
var state_58051__$1 = state_58051;
var statearr_58108_60098 = state_58051__$1;
(statearr_58108_60098[(2)] = inst_57936);

(statearr_58108_60098[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58052 === (22))){
var inst_57960 = (state_58051[(8)]);
var inst_57963 = cljs.core.async.close_BANG_(inst_57960);
var state_58051__$1 = state_58051;
var statearr_58109_60101 = state_58051__$1;
(statearr_58109_60101[(2)] = inst_57963);

(statearr_58109_60101[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58052 === (36))){
var inst_58008 = (state_58051[(23)]);
var inst_58012 = cljs.core.chunk_first(inst_58008);
var inst_58013 = cljs.core.chunk_rest(inst_58008);
var inst_58014 = cljs.core.count(inst_58012);
var inst_57989 = inst_58013;
var inst_57990 = inst_58012;
var inst_57991 = inst_58014;
var inst_57992 = (0);
var state_58051__$1 = (function (){var statearr_58113 = state_58051;
(statearr_58113[(19)] = inst_57989);

(statearr_58113[(11)] = inst_57992);

(statearr_58113[(20)] = inst_57991);

(statearr_58113[(12)] = inst_57990);

return statearr_58113;
})();
var statearr_58114_60104 = state_58051__$1;
(statearr_58114_60104[(2)] = null);

(statearr_58114_60104[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58052 === (41))){
var inst_58008 = (state_58051[(23)]);
var inst_58026 = (state_58051[(2)]);
var inst_58027 = cljs.core.next(inst_58008);
var inst_57989 = inst_58027;
var inst_57990 = null;
var inst_57991 = (0);
var inst_57992 = (0);
var state_58051__$1 = (function (){var statearr_58115 = state_58051;
(statearr_58115[(19)] = inst_57989);

(statearr_58115[(11)] = inst_57992);

(statearr_58115[(20)] = inst_57991);

(statearr_58115[(12)] = inst_57990);

(statearr_58115[(25)] = inst_58026);

return statearr_58115;
})();
var statearr_58116_60106 = state_58051__$1;
(statearr_58116_60106[(2)] = null);

(statearr_58116_60106[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58052 === (43))){
var state_58051__$1 = state_58051;
var statearr_58117_60108 = state_58051__$1;
(statearr_58117_60108[(2)] = null);

(statearr_58117_60108[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58052 === (29))){
var inst_58035 = (state_58051[(2)]);
var state_58051__$1 = state_58051;
var statearr_58118_60110 = state_58051__$1;
(statearr_58118_60110[(2)] = inst_58035);

(statearr_58118_60110[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58052 === (44))){
var inst_58044 = (state_58051[(2)]);
var state_58051__$1 = (function (){var statearr_58119 = state_58051;
(statearr_58119[(26)] = inst_58044);

return statearr_58119;
})();
var statearr_58120_60113 = state_58051__$1;
(statearr_58120_60113[(2)] = null);

(statearr_58120_60113[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58052 === (6))){
var inst_57980 = (state_58051[(27)]);
var inst_57979 = cljs.core.deref(cs);
var inst_57980__$1 = cljs.core.keys(inst_57979);
var inst_57981 = cljs.core.count(inst_57980__$1);
var inst_57982 = cljs.core.reset_BANG_(dctr,inst_57981);
var inst_57988 = cljs.core.seq(inst_57980__$1);
var inst_57989 = inst_57988;
var inst_57990 = null;
var inst_57991 = (0);
var inst_57992 = (0);
var state_58051__$1 = (function (){var statearr_58121 = state_58051;
(statearr_58121[(27)] = inst_57980__$1);

(statearr_58121[(19)] = inst_57989);

(statearr_58121[(28)] = inst_57982);

(statearr_58121[(11)] = inst_57992);

(statearr_58121[(20)] = inst_57991);

(statearr_58121[(12)] = inst_57990);

return statearr_58121;
})();
var statearr_58124_60120 = state_58051__$1;
(statearr_58124_60120[(2)] = null);

(statearr_58124_60120[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58052 === (28))){
var inst_58008 = (state_58051[(23)]);
var inst_57989 = (state_58051[(19)]);
var inst_58008__$1 = cljs.core.seq(inst_57989);
var state_58051__$1 = (function (){var statearr_58128 = state_58051;
(statearr_58128[(23)] = inst_58008__$1);

return statearr_58128;
})();
if(inst_58008__$1){
var statearr_58129_60124 = state_58051__$1;
(statearr_58129_60124[(1)] = (33));

} else {
var statearr_58130_60125 = state_58051__$1;
(statearr_58130_60125[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58052 === (25))){
var inst_57992 = (state_58051[(11)]);
var inst_57991 = (state_58051[(20)]);
var inst_57994 = (inst_57992 < inst_57991);
var inst_57995 = inst_57994;
var state_58051__$1 = state_58051;
if(cljs.core.truth_(inst_57995)){
var statearr_58132_60126 = state_58051__$1;
(statearr_58132_60126[(1)] = (27));

} else {
var statearr_58133_60127 = state_58051__$1;
(statearr_58133_60127[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58052 === (34))){
var state_58051__$1 = state_58051;
var statearr_58134_60129 = state_58051__$1;
(statearr_58134_60129[(2)] = null);

(statearr_58134_60129[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58052 === (17))){
var state_58051__$1 = state_58051;
var statearr_58135_60132 = state_58051__$1;
(statearr_58135_60132[(2)] = null);

(statearr_58135_60132[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58052 === (3))){
var inst_58049 = (state_58051[(2)]);
var state_58051__$1 = state_58051;
return cljs.core.async.impl.ioc_helpers.return_chan(state_58051__$1,inst_58049);
} else {
if((state_val_58052 === (12))){
var inst_57975 = (state_58051[(2)]);
var state_58051__$1 = state_58051;
var statearr_58136_60138 = state_58051__$1;
(statearr_58136_60138[(2)] = inst_57975);

(statearr_58136_60138[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58052 === (2))){
var state_58051__$1 = state_58051;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58051__$1,(4),ch);
} else {
if((state_val_58052 === (23))){
var state_58051__$1 = state_58051;
var statearr_58137_60144 = state_58051__$1;
(statearr_58137_60144[(2)] = null);

(statearr_58137_60144[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58052 === (35))){
var inst_58033 = (state_58051[(2)]);
var state_58051__$1 = state_58051;
var statearr_58139_60145 = state_58051__$1;
(statearr_58139_60145[(2)] = inst_58033);

(statearr_58139_60145[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58052 === (19))){
var inst_57943 = (state_58051[(7)]);
var inst_57950 = cljs.core.chunk_first(inst_57943);
var inst_57951 = cljs.core.chunk_rest(inst_57943);
var inst_57952 = cljs.core.count(inst_57950);
var inst_57921 = inst_57951;
var inst_57922 = inst_57950;
var inst_57923 = inst_57952;
var inst_57924 = (0);
var state_58051__$1 = (function (){var statearr_58142 = state_58051;
(statearr_58142[(13)] = inst_57922);

(statearr_58142[(15)] = inst_57924);

(statearr_58142[(16)] = inst_57923);

(statearr_58142[(17)] = inst_57921);

return statearr_58142;
})();
var statearr_58144_60146 = state_58051__$1;
(statearr_58144_60146[(2)] = null);

(statearr_58144_60146[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58052 === (11))){
var inst_57943 = (state_58051[(7)]);
var inst_57921 = (state_58051[(17)]);
var inst_57943__$1 = cljs.core.seq(inst_57921);
var state_58051__$1 = (function (){var statearr_58149 = state_58051;
(statearr_58149[(7)] = inst_57943__$1);

return statearr_58149;
})();
if(inst_57943__$1){
var statearr_58150_60149 = state_58051__$1;
(statearr_58150_60149[(1)] = (16));

} else {
var statearr_58151_60150 = state_58051__$1;
(statearr_58151_60150[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58052 === (9))){
var inst_57977 = (state_58051[(2)]);
var state_58051__$1 = state_58051;
var statearr_58152_60153 = state_58051__$1;
(statearr_58152_60153[(2)] = inst_57977);

(statearr_58152_60153[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58052 === (5))){
var inst_57919 = cljs.core.deref(cs);
var inst_57920 = cljs.core.seq(inst_57919);
var inst_57921 = inst_57920;
var inst_57922 = null;
var inst_57923 = (0);
var inst_57924 = (0);
var state_58051__$1 = (function (){var statearr_58153 = state_58051;
(statearr_58153[(13)] = inst_57922);

(statearr_58153[(15)] = inst_57924);

(statearr_58153[(16)] = inst_57923);

(statearr_58153[(17)] = inst_57921);

return statearr_58153;
})();
var statearr_58154_60155 = state_58051__$1;
(statearr_58154_60155[(2)] = null);

(statearr_58154_60155[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58052 === (14))){
var state_58051__$1 = state_58051;
var statearr_58155_60156 = state_58051__$1;
(statearr_58155_60156[(2)] = null);

(statearr_58155_60156[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58052 === (45))){
var inst_58041 = (state_58051[(2)]);
var state_58051__$1 = state_58051;
var statearr_58156_60158 = state_58051__$1;
(statearr_58156_60158[(2)] = inst_58041);

(statearr_58156_60158[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58052 === (26))){
var inst_57980 = (state_58051[(27)]);
var inst_58037 = (state_58051[(2)]);
var inst_58038 = cljs.core.seq(inst_57980);
var state_58051__$1 = (function (){var statearr_58160 = state_58051;
(statearr_58160[(29)] = inst_58037);

return statearr_58160;
})();
if(inst_58038){
var statearr_58161_60159 = state_58051__$1;
(statearr_58161_60159[(1)] = (42));

} else {
var statearr_58162_60160 = state_58051__$1;
(statearr_58162_60160[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58052 === (16))){
var inst_57943 = (state_58051[(7)]);
var inst_57948 = cljs.core.chunked_seq_QMARK_(inst_57943);
var state_58051__$1 = state_58051;
if(inst_57948){
var statearr_58163_60162 = state_58051__$1;
(statearr_58163_60162[(1)] = (19));

} else {
var statearr_58164_60163 = state_58051__$1;
(statearr_58164_60163[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58052 === (38))){
var inst_58030 = (state_58051[(2)]);
var state_58051__$1 = state_58051;
var statearr_58165_60164 = state_58051__$1;
(statearr_58165_60164[(2)] = inst_58030);

(statearr_58165_60164[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58052 === (30))){
var state_58051__$1 = state_58051;
var statearr_58166_60167 = state_58051__$1;
(statearr_58166_60167[(2)] = null);

(statearr_58166_60167[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58052 === (10))){
var inst_57922 = (state_58051[(13)]);
var inst_57924 = (state_58051[(15)]);
var inst_57932 = cljs.core._nth(inst_57922,inst_57924);
var inst_57933 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_57932,(0),null);
var inst_57934 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_57932,(1),null);
var state_58051__$1 = (function (){var statearr_58170 = state_58051;
(statearr_58170[(24)] = inst_57933);

return statearr_58170;
})();
if(cljs.core.truth_(inst_57934)){
var statearr_58171_60171 = state_58051__$1;
(statearr_58171_60171[(1)] = (13));

} else {
var statearr_58172_60172 = state_58051__$1;
(statearr_58172_60172[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58052 === (18))){
var inst_57973 = (state_58051[(2)]);
var state_58051__$1 = state_58051;
var statearr_58173_60175 = state_58051__$1;
(statearr_58173_60175[(2)] = inst_57973);

(statearr_58173_60175[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58052 === (42))){
var state_58051__$1 = state_58051;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58051__$1,(45),dchan);
} else {
if((state_val_58052 === (37))){
var inst_57912 = (state_58051[(9)]);
var inst_58017 = (state_58051[(22)]);
var inst_58008 = (state_58051[(23)]);
var inst_58017__$1 = cljs.core.first(inst_58008);
var inst_58018 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_58017__$1,inst_57912,done);
var state_58051__$1 = (function (){var statearr_58179 = state_58051;
(statearr_58179[(22)] = inst_58017__$1);

return statearr_58179;
})();
if(cljs.core.truth_(inst_58018)){
var statearr_58180_60178 = state_58051__$1;
(statearr_58180_60178[(1)] = (39));

} else {
var statearr_58181_60179 = state_58051__$1;
(statearr_58181_60179[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58052 === (8))){
var inst_57924 = (state_58051[(15)]);
var inst_57923 = (state_58051[(16)]);
var inst_57926 = (inst_57924 < inst_57923);
var inst_57927 = inst_57926;
var state_58051__$1 = state_58051;
if(cljs.core.truth_(inst_57927)){
var statearr_58183_60184 = state_58051__$1;
(statearr_58183_60184[(1)] = (10));

} else {
var statearr_58184_60186 = state_58051__$1;
(statearr_58184_60186[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__56775__auto__ = null;
var cljs$core$async$mult_$_state_machine__56775__auto____0 = (function (){
var statearr_58185 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_58185[(0)] = cljs$core$async$mult_$_state_machine__56775__auto__);

(statearr_58185[(1)] = (1));

return statearr_58185;
});
var cljs$core$async$mult_$_state_machine__56775__auto____1 = (function (state_58051){
while(true){
var ret_value__56776__auto__ = (function (){try{while(true){
var result__56777__auto__ = switch__56774__auto__(state_58051);
if(cljs.core.keyword_identical_QMARK_(result__56777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__56777__auto__;
}
break;
}
}catch (e58186){var ex__56778__auto__ = e58186;
var statearr_58187_60195 = state_58051;
(statearr_58187_60195[(2)] = ex__56778__auto__);


if(cljs.core.seq((state_58051[(4)]))){
var statearr_58188_60196 = state_58051;
(statearr_58188_60196[(1)] = cljs.core.first((state_58051[(4)])));

} else {
throw ex__56778__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__56776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60197 = state_58051;
state_58051 = G__60197;
continue;
} else {
return ret_value__56776__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__56775__auto__ = function(state_58051){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__56775__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__56775__auto____1.call(this,state_58051);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__56775__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__56775__auto____0;
cljs$core$async$mult_$_state_machine__56775__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__56775__auto____1;
return cljs$core$async$mult_$_state_machine__56775__auto__;
})()
})();
var state__56879__auto__ = (function (){var statearr_58195 = f__56878__auto__();
(statearr_58195[(6)] = c__56877__auto___60061);

return statearr_58195;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56879__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__58199 = arguments.length;
switch (G__58199) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_60206 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_60206(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_60212 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_60212(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_60217 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_60217(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_60220 = (function (m,state_map){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4429__auto__.call(null,m,state_map));
} else {
var m__4426__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4426__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_60220(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_60223 = (function (m,mode){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4429__auto__.call(null,m,mode));
} else {
var m__4426__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4426__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_60223(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___60233 = arguments.length;
var i__4737__auto___60234 = (0);
while(true){
if((i__4737__auto___60234 < len__4736__auto___60233)){
args__4742__auto__.push((arguments[i__4737__auto___60234]));

var G__60235 = (i__4737__auto___60234 + (1));
i__4737__auto___60234 = G__60235;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__58244){
var map__58245 = p__58244;
var map__58245__$1 = (((((!((map__58245 == null))))?(((((map__58245.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58245.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58245):map__58245);
var opts = map__58245__$1;
var statearr_58247_60240 = state;
(statearr_58247_60240[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_58248_60241 = state;
(statearr_58248_60241[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_58249_60242 = state;
(statearr_58249_60242[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq58237){
var G__58238 = cljs.core.first(seq58237);
var seq58237__$1 = cljs.core.next(seq58237);
var G__58239 = cljs.core.first(seq58237__$1);
var seq58237__$2 = cljs.core.next(seq58237__$1);
var G__58240 = cljs.core.first(seq58237__$2);
var seq58237__$3 = cljs.core.next(seq58237__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__58238,G__58239,G__58240,seq58237__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async58253 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async58253 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta58254){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta58254 = meta58254;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async58253.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58255,meta58254__$1){
var self__ = this;
var _58255__$1 = this;
return (new cljs.core.async.t_cljs$core$async58253(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta58254__$1));
}));

(cljs.core.async.t_cljs$core$async58253.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58255){
var self__ = this;
var _58255__$1 = this;
return self__.meta58254;
}));

(cljs.core.async.t_cljs$core$async58253.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async58253.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async58253.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async58253.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async58253.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async58253.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async58253.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async58253.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async58253.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta58254","meta58254",1915042873,null)], null);
}));

(cljs.core.async.t_cljs$core$async58253.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async58253.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async58253");

(cljs.core.async.t_cljs$core$async58253.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async58253");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async58253.
 */
cljs.core.async.__GT_t_cljs$core$async58253 = (function cljs$core$async$mix_$___GT_t_cljs$core$async58253(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta58254){
return (new cljs.core.async.t_cljs$core$async58253(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta58254));
});

}

return (new cljs.core.async.t_cljs$core$async58253(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__56877__auto___60262 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56878__auto__ = (function (){var switch__56774__auto__ = (function (state_58388){
var state_val_58389 = (state_58388[(1)]);
if((state_val_58389 === (7))){
var inst_58297 = (state_58388[(2)]);
var state_58388__$1 = state_58388;
var statearr_58393_60266 = state_58388__$1;
(statearr_58393_60266[(2)] = inst_58297);

(statearr_58393_60266[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58389 === (20))){
var inst_58309 = (state_58388[(7)]);
var state_58388__$1 = state_58388;
var statearr_58394_60268 = state_58388__$1;
(statearr_58394_60268[(2)] = inst_58309);

(statearr_58394_60268[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58389 === (27))){
var state_58388__$1 = state_58388;
var statearr_58395_60269 = state_58388__$1;
(statearr_58395_60269[(2)] = null);

(statearr_58395_60269[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58389 === (1))){
var inst_58281 = (state_58388[(8)]);
var inst_58281__$1 = calc_state();
var inst_58286 = (inst_58281__$1 == null);
var inst_58287 = cljs.core.not(inst_58286);
var state_58388__$1 = (function (){var statearr_58396 = state_58388;
(statearr_58396[(8)] = inst_58281__$1);

return statearr_58396;
})();
if(inst_58287){
var statearr_58397_60271 = state_58388__$1;
(statearr_58397_60271[(1)] = (2));

} else {
var statearr_58398_60272 = state_58388__$1;
(statearr_58398_60272[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58389 === (24))){
var inst_58360 = (state_58388[(9)]);
var inst_58345 = (state_58388[(10)]);
var inst_58336 = (state_58388[(11)]);
var inst_58360__$1 = (inst_58336.cljs$core$IFn$_invoke$arity$1 ? inst_58336.cljs$core$IFn$_invoke$arity$1(inst_58345) : inst_58336.call(null,inst_58345));
var state_58388__$1 = (function (){var statearr_58400 = state_58388;
(statearr_58400[(9)] = inst_58360__$1);

return statearr_58400;
})();
if(cljs.core.truth_(inst_58360__$1)){
var statearr_58401_60277 = state_58388__$1;
(statearr_58401_60277[(1)] = (29));

} else {
var statearr_58402_60278 = state_58388__$1;
(statearr_58402_60278[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58389 === (4))){
var inst_58300 = (state_58388[(2)]);
var state_58388__$1 = state_58388;
if(cljs.core.truth_(inst_58300)){
var statearr_58403_60279 = state_58388__$1;
(statearr_58403_60279[(1)] = (8));

} else {
var statearr_58404_60280 = state_58388__$1;
(statearr_58404_60280[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58389 === (15))){
var inst_58330 = (state_58388[(2)]);
var state_58388__$1 = state_58388;
if(cljs.core.truth_(inst_58330)){
var statearr_58407_60281 = state_58388__$1;
(statearr_58407_60281[(1)] = (19));

} else {
var statearr_58409_60283 = state_58388__$1;
(statearr_58409_60283[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58389 === (21))){
var inst_58335 = (state_58388[(12)]);
var inst_58335__$1 = (state_58388[(2)]);
var inst_58336 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_58335__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_58337 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_58335__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_58338 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_58335__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_58388__$1 = (function (){var statearr_58413 = state_58388;
(statearr_58413[(13)] = inst_58337);

(statearr_58413[(11)] = inst_58336);

(statearr_58413[(12)] = inst_58335__$1);

return statearr_58413;
})();
return cljs.core.async.ioc_alts_BANG_(state_58388__$1,(22),inst_58338);
} else {
if((state_val_58389 === (31))){
var inst_58370 = (state_58388[(2)]);
var state_58388__$1 = state_58388;
if(cljs.core.truth_(inst_58370)){
var statearr_58414_60286 = state_58388__$1;
(statearr_58414_60286[(1)] = (32));

} else {
var statearr_58415_60287 = state_58388__$1;
(statearr_58415_60287[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58389 === (32))){
var inst_58344 = (state_58388[(14)]);
var state_58388__$1 = state_58388;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_58388__$1,(35),out,inst_58344);
} else {
if((state_val_58389 === (33))){
var inst_58335 = (state_58388[(12)]);
var inst_58309 = inst_58335;
var state_58388__$1 = (function (){var statearr_58419 = state_58388;
(statearr_58419[(7)] = inst_58309);

return statearr_58419;
})();
var statearr_58420_60289 = state_58388__$1;
(statearr_58420_60289[(2)] = null);

(statearr_58420_60289[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58389 === (13))){
var inst_58309 = (state_58388[(7)]);
var inst_58319 = inst_58309.cljs$lang$protocol_mask$partition0$;
var inst_58320 = (inst_58319 & (64));
var inst_58321 = inst_58309.cljs$core$ISeq$;
var inst_58322 = (cljs.core.PROTOCOL_SENTINEL === inst_58321);
var inst_58323 = ((inst_58320) || (inst_58322));
var state_58388__$1 = state_58388;
if(cljs.core.truth_(inst_58323)){
var statearr_58422_60292 = state_58388__$1;
(statearr_58422_60292[(1)] = (16));

} else {
var statearr_58423_60295 = state_58388__$1;
(statearr_58423_60295[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58389 === (22))){
var inst_58344 = (state_58388[(14)]);
var inst_58345 = (state_58388[(10)]);
var inst_58343 = (state_58388[(2)]);
var inst_58344__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_58343,(0),null);
var inst_58345__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_58343,(1),null);
var inst_58346 = (inst_58344__$1 == null);
var inst_58347 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_58345__$1,change);
var inst_58348 = ((inst_58346) || (inst_58347));
var state_58388__$1 = (function (){var statearr_58425 = state_58388;
(statearr_58425[(14)] = inst_58344__$1);

(statearr_58425[(10)] = inst_58345__$1);

return statearr_58425;
})();
if(cljs.core.truth_(inst_58348)){
var statearr_58426_60299 = state_58388__$1;
(statearr_58426_60299[(1)] = (23));

} else {
var statearr_58427_60300 = state_58388__$1;
(statearr_58427_60300[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58389 === (36))){
var inst_58335 = (state_58388[(12)]);
var inst_58309 = inst_58335;
var state_58388__$1 = (function (){var statearr_58431 = state_58388;
(statearr_58431[(7)] = inst_58309);

return statearr_58431;
})();
var statearr_58432_60303 = state_58388__$1;
(statearr_58432_60303[(2)] = null);

(statearr_58432_60303[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58389 === (29))){
var inst_58360 = (state_58388[(9)]);
var state_58388__$1 = state_58388;
var statearr_58433_60305 = state_58388__$1;
(statearr_58433_60305[(2)] = inst_58360);

(statearr_58433_60305[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58389 === (6))){
var state_58388__$1 = state_58388;
var statearr_58437_60306 = state_58388__$1;
(statearr_58437_60306[(2)] = false);

(statearr_58437_60306[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58389 === (28))){
var inst_58355 = (state_58388[(2)]);
var inst_58356 = calc_state();
var inst_58309 = inst_58356;
var state_58388__$1 = (function (){var statearr_58438 = state_58388;
(statearr_58438[(7)] = inst_58309);

(statearr_58438[(15)] = inst_58355);

return statearr_58438;
})();
var statearr_58439_60308 = state_58388__$1;
(statearr_58439_60308[(2)] = null);

(statearr_58439_60308[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58389 === (25))){
var inst_58384 = (state_58388[(2)]);
var state_58388__$1 = state_58388;
var statearr_58442_60310 = state_58388__$1;
(statearr_58442_60310[(2)] = inst_58384);

(statearr_58442_60310[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58389 === (34))){
var inst_58382 = (state_58388[(2)]);
var state_58388__$1 = state_58388;
var statearr_58444_60312 = state_58388__$1;
(statearr_58444_60312[(2)] = inst_58382);

(statearr_58444_60312[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58389 === (17))){
var state_58388__$1 = state_58388;
var statearr_58445_60313 = state_58388__$1;
(statearr_58445_60313[(2)] = false);

(statearr_58445_60313[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58389 === (3))){
var state_58388__$1 = state_58388;
var statearr_58446_60314 = state_58388__$1;
(statearr_58446_60314[(2)] = false);

(statearr_58446_60314[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58389 === (12))){
var inst_58386 = (state_58388[(2)]);
var state_58388__$1 = state_58388;
return cljs.core.async.impl.ioc_helpers.return_chan(state_58388__$1,inst_58386);
} else {
if((state_val_58389 === (2))){
var inst_58281 = (state_58388[(8)]);
var inst_58289 = inst_58281.cljs$lang$protocol_mask$partition0$;
var inst_58290 = (inst_58289 & (64));
var inst_58291 = inst_58281.cljs$core$ISeq$;
var inst_58292 = (cljs.core.PROTOCOL_SENTINEL === inst_58291);
var inst_58293 = ((inst_58290) || (inst_58292));
var state_58388__$1 = state_58388;
if(cljs.core.truth_(inst_58293)){
var statearr_58450_60318 = state_58388__$1;
(statearr_58450_60318[(1)] = (5));

} else {
var statearr_58451_60319 = state_58388__$1;
(statearr_58451_60319[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58389 === (23))){
var inst_58344 = (state_58388[(14)]);
var inst_58350 = (inst_58344 == null);
var state_58388__$1 = state_58388;
if(cljs.core.truth_(inst_58350)){
var statearr_58455_60320 = state_58388__$1;
(statearr_58455_60320[(1)] = (26));

} else {
var statearr_58456_60321 = state_58388__$1;
(statearr_58456_60321[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58389 === (35))){
var inst_58373 = (state_58388[(2)]);
var state_58388__$1 = state_58388;
if(cljs.core.truth_(inst_58373)){
var statearr_58457_60323 = state_58388__$1;
(statearr_58457_60323[(1)] = (36));

} else {
var statearr_58458_60324 = state_58388__$1;
(statearr_58458_60324[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58389 === (19))){
var inst_58309 = (state_58388[(7)]);
var inst_58332 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_58309);
var state_58388__$1 = state_58388;
var statearr_58462_60327 = state_58388__$1;
(statearr_58462_60327[(2)] = inst_58332);

(statearr_58462_60327[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58389 === (11))){
var inst_58309 = (state_58388[(7)]);
var inst_58313 = (inst_58309 == null);
var inst_58314 = cljs.core.not(inst_58313);
var state_58388__$1 = state_58388;
if(inst_58314){
var statearr_58463_60329 = state_58388__$1;
(statearr_58463_60329[(1)] = (13));

} else {
var statearr_58464_60330 = state_58388__$1;
(statearr_58464_60330[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58389 === (9))){
var inst_58281 = (state_58388[(8)]);
var state_58388__$1 = state_58388;
var statearr_58465_60331 = state_58388__$1;
(statearr_58465_60331[(2)] = inst_58281);

(statearr_58465_60331[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58389 === (5))){
var state_58388__$1 = state_58388;
var statearr_58466_60333 = state_58388__$1;
(statearr_58466_60333[(2)] = true);

(statearr_58466_60333[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58389 === (14))){
var state_58388__$1 = state_58388;
var statearr_58467_60334 = state_58388__$1;
(statearr_58467_60334[(2)] = false);

(statearr_58467_60334[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58389 === (26))){
var inst_58345 = (state_58388[(10)]);
var inst_58352 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_58345);
var state_58388__$1 = state_58388;
var statearr_58468_60336 = state_58388__$1;
(statearr_58468_60336[(2)] = inst_58352);

(statearr_58468_60336[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58389 === (16))){
var state_58388__$1 = state_58388;
var statearr_58469_60337 = state_58388__$1;
(statearr_58469_60337[(2)] = true);

(statearr_58469_60337[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58389 === (38))){
var inst_58378 = (state_58388[(2)]);
var state_58388__$1 = state_58388;
var statearr_58470_60338 = state_58388__$1;
(statearr_58470_60338[(2)] = inst_58378);

(statearr_58470_60338[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58389 === (30))){
var inst_58337 = (state_58388[(13)]);
var inst_58345 = (state_58388[(10)]);
var inst_58336 = (state_58388[(11)]);
var inst_58365 = cljs.core.empty_QMARK_(inst_58336);
var inst_58366 = (inst_58337.cljs$core$IFn$_invoke$arity$1 ? inst_58337.cljs$core$IFn$_invoke$arity$1(inst_58345) : inst_58337.call(null,inst_58345));
var inst_58367 = cljs.core.not(inst_58366);
var inst_58368 = ((inst_58365) && (inst_58367));
var state_58388__$1 = state_58388;
var statearr_58474_60340 = state_58388__$1;
(statearr_58474_60340[(2)] = inst_58368);

(statearr_58474_60340[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58389 === (10))){
var inst_58281 = (state_58388[(8)]);
var inst_58305 = (state_58388[(2)]);
var inst_58306 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_58305,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_58307 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_58305,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_58308 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_58305,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_58309 = inst_58281;
var state_58388__$1 = (function (){var statearr_58475 = state_58388;
(statearr_58475[(7)] = inst_58309);

(statearr_58475[(16)] = inst_58306);

(statearr_58475[(17)] = inst_58308);

(statearr_58475[(18)] = inst_58307);

return statearr_58475;
})();
var statearr_58479_60345 = state_58388__$1;
(statearr_58479_60345[(2)] = null);

(statearr_58479_60345[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58389 === (18))){
var inst_58327 = (state_58388[(2)]);
var state_58388__$1 = state_58388;
var statearr_58480_60348 = state_58388__$1;
(statearr_58480_60348[(2)] = inst_58327);

(statearr_58480_60348[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58389 === (37))){
var state_58388__$1 = state_58388;
var statearr_58483_60349 = state_58388__$1;
(statearr_58483_60349[(2)] = null);

(statearr_58483_60349[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58389 === (8))){
var inst_58281 = (state_58388[(8)]);
var inst_58302 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_58281);
var state_58388__$1 = state_58388;
var statearr_58485_60350 = state_58388__$1;
(statearr_58485_60350[(2)] = inst_58302);

(statearr_58485_60350[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
return (function() {
var cljs$core$async$mix_$_state_machine__56775__auto__ = null;
var cljs$core$async$mix_$_state_machine__56775__auto____0 = (function (){
var statearr_58491 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_58491[(0)] = cljs$core$async$mix_$_state_machine__56775__auto__);

(statearr_58491[(1)] = (1));

return statearr_58491;
});
var cljs$core$async$mix_$_state_machine__56775__auto____1 = (function (state_58388){
while(true){
var ret_value__56776__auto__ = (function (){try{while(true){
var result__56777__auto__ = switch__56774__auto__(state_58388);
if(cljs.core.keyword_identical_QMARK_(result__56777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__56777__auto__;
}
break;
}
}catch (e58492){var ex__56778__auto__ = e58492;
var statearr_58493_60356 = state_58388;
(statearr_58493_60356[(2)] = ex__56778__auto__);


if(cljs.core.seq((state_58388[(4)]))){
var statearr_58494_60357 = state_58388;
(statearr_58494_60357[(1)] = cljs.core.first((state_58388[(4)])));

} else {
throw ex__56778__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__56776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60358 = state_58388;
state_58388 = G__60358;
continue;
} else {
return ret_value__56776__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__56775__auto__ = function(state_58388){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__56775__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__56775__auto____1.call(this,state_58388);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__56775__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__56775__auto____0;
cljs$core$async$mix_$_state_machine__56775__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__56775__auto____1;
return cljs$core$async$mix_$_state_machine__56775__auto__;
})()
})();
var state__56879__auto__ = (function (){var statearr_58495 = f__56878__auto__();
(statearr_58495[(6)] = c__56877__auto___60262);

return statearr_58495;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56879__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_60361 = (function (p,v,ch,close_QMARK_){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4429__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4426__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_60361(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_60364 = (function (p,v,ch){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4429__auto__.call(null,p,v,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4426__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_60364(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_60369 = (function() {
var G__60370 = null;
var G__60370__1 = (function (p){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4429__auto__.call(null,p));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4426__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__60370__2 = (function (p,v){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4429__auto__.call(null,p,v));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4426__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__60370 = function(p,v){
switch(arguments.length){
case 1:
return G__60370__1.call(this,p);
case 2:
return G__60370__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__60370.cljs$core$IFn$_invoke$arity$1 = G__60370__1;
G__60370.cljs$core$IFn$_invoke$arity$2 = G__60370__2;
return G__60370;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__58500 = arguments.length;
switch (G__58500) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_60369(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_60369(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__58510 = arguments.length;
switch (G__58510) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__58508_SHARP_){
if(cljs.core.truth_((p1__58508_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__58508_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__58508_SHARP_.call(null,topic)))){
return p1__58508_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__58508_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async58514 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async58514 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta58515){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta58515 = meta58515;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async58514.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58516,meta58515__$1){
var self__ = this;
var _58516__$1 = this;
return (new cljs.core.async.t_cljs$core$async58514(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta58515__$1));
}));

(cljs.core.async.t_cljs$core$async58514.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58516){
var self__ = this;
var _58516__$1 = this;
return self__.meta58515;
}));

(cljs.core.async.t_cljs$core$async58514.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async58514.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async58514.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async58514.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async58514.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async58514.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async58514.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async58514.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta58515","meta58515",71345308,null)], null);
}));

(cljs.core.async.t_cljs$core$async58514.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async58514.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async58514");

(cljs.core.async.t_cljs$core$async58514.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async58514");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async58514.
 */
cljs.core.async.__GT_t_cljs$core$async58514 = (function cljs$core$async$__GT_t_cljs$core$async58514(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta58515){
return (new cljs.core.async.t_cljs$core$async58514(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta58515));
});

}

return (new cljs.core.async.t_cljs$core$async58514(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__56877__auto___60391 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56878__auto__ = (function (){var switch__56774__auto__ = (function (state_58605){
var state_val_58606 = (state_58605[(1)]);
if((state_val_58606 === (7))){
var inst_58601 = (state_58605[(2)]);
var state_58605__$1 = state_58605;
var statearr_58613_60392 = state_58605__$1;
(statearr_58613_60392[(2)] = inst_58601);

(statearr_58613_60392[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58606 === (20))){
var state_58605__$1 = state_58605;
var statearr_58614_60394 = state_58605__$1;
(statearr_58614_60394[(2)] = null);

(statearr_58614_60394[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58606 === (1))){
var state_58605__$1 = state_58605;
var statearr_58615_60397 = state_58605__$1;
(statearr_58615_60397[(2)] = null);

(statearr_58615_60397[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58606 === (24))){
var inst_58584 = (state_58605[(7)]);
var inst_58593 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_58584);
var state_58605__$1 = state_58605;
var statearr_58616_60400 = state_58605__$1;
(statearr_58616_60400[(2)] = inst_58593);

(statearr_58616_60400[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58606 === (4))){
var inst_58535 = (state_58605[(8)]);
var inst_58535__$1 = (state_58605[(2)]);
var inst_58536 = (inst_58535__$1 == null);
var state_58605__$1 = (function (){var statearr_58618 = state_58605;
(statearr_58618[(8)] = inst_58535__$1);

return statearr_58618;
})();
if(cljs.core.truth_(inst_58536)){
var statearr_58620_60404 = state_58605__$1;
(statearr_58620_60404[(1)] = (5));

} else {
var statearr_58623_60405 = state_58605__$1;
(statearr_58623_60405[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58606 === (15))){
var inst_58578 = (state_58605[(2)]);
var state_58605__$1 = state_58605;
var statearr_58624_60406 = state_58605__$1;
(statearr_58624_60406[(2)] = inst_58578);

(statearr_58624_60406[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58606 === (21))){
var inst_58598 = (state_58605[(2)]);
var state_58605__$1 = (function (){var statearr_58625 = state_58605;
(statearr_58625[(9)] = inst_58598);

return statearr_58625;
})();
var statearr_58627_60409 = state_58605__$1;
(statearr_58627_60409[(2)] = null);

(statearr_58627_60409[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58606 === (13))){
var inst_58560 = (state_58605[(10)]);
var inst_58562 = cljs.core.chunked_seq_QMARK_(inst_58560);
var state_58605__$1 = state_58605;
if(inst_58562){
var statearr_58628_60418 = state_58605__$1;
(statearr_58628_60418[(1)] = (16));

} else {
var statearr_58629_60419 = state_58605__$1;
(statearr_58629_60419[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58606 === (22))){
var inst_58590 = (state_58605[(2)]);
var state_58605__$1 = state_58605;
if(cljs.core.truth_(inst_58590)){
var statearr_58630_60420 = state_58605__$1;
(statearr_58630_60420[(1)] = (23));

} else {
var statearr_58633_60421 = state_58605__$1;
(statearr_58633_60421[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58606 === (6))){
var inst_58586 = (state_58605[(11)]);
var inst_58535 = (state_58605[(8)]);
var inst_58584 = (state_58605[(7)]);
var inst_58584__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_58535) : topic_fn.call(null,inst_58535));
var inst_58585 = cljs.core.deref(mults);
var inst_58586__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_58585,inst_58584__$1);
var state_58605__$1 = (function (){var statearr_58637 = state_58605;
(statearr_58637[(11)] = inst_58586__$1);

(statearr_58637[(7)] = inst_58584__$1);

return statearr_58637;
})();
if(cljs.core.truth_(inst_58586__$1)){
var statearr_58639_60423 = state_58605__$1;
(statearr_58639_60423[(1)] = (19));

} else {
var statearr_58640_60424 = state_58605__$1;
(statearr_58640_60424[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58606 === (25))){
var inst_58595 = (state_58605[(2)]);
var state_58605__$1 = state_58605;
var statearr_58641_60426 = state_58605__$1;
(statearr_58641_60426[(2)] = inst_58595);

(statearr_58641_60426[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58606 === (17))){
var inst_58560 = (state_58605[(10)]);
var inst_58569 = cljs.core.first(inst_58560);
var inst_58570 = cljs.core.async.muxch_STAR_(inst_58569);
var inst_58571 = cljs.core.async.close_BANG_(inst_58570);
var inst_58572 = cljs.core.next(inst_58560);
var inst_58545 = inst_58572;
var inst_58546 = null;
var inst_58547 = (0);
var inst_58548 = (0);
var state_58605__$1 = (function (){var statearr_58643 = state_58605;
(statearr_58643[(12)] = inst_58545);

(statearr_58643[(13)] = inst_58547);

(statearr_58643[(14)] = inst_58546);

(statearr_58643[(15)] = inst_58571);

(statearr_58643[(16)] = inst_58548);

return statearr_58643;
})();
var statearr_58646_60430 = state_58605__$1;
(statearr_58646_60430[(2)] = null);

(statearr_58646_60430[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58606 === (3))){
var inst_58603 = (state_58605[(2)]);
var state_58605__$1 = state_58605;
return cljs.core.async.impl.ioc_helpers.return_chan(state_58605__$1,inst_58603);
} else {
if((state_val_58606 === (12))){
var inst_58580 = (state_58605[(2)]);
var state_58605__$1 = state_58605;
var statearr_58647_60431 = state_58605__$1;
(statearr_58647_60431[(2)] = inst_58580);

(statearr_58647_60431[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58606 === (2))){
var state_58605__$1 = state_58605;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58605__$1,(4),ch);
} else {
if((state_val_58606 === (23))){
var state_58605__$1 = state_58605;
var statearr_58648_60433 = state_58605__$1;
(statearr_58648_60433[(2)] = null);

(statearr_58648_60433[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58606 === (19))){
var inst_58586 = (state_58605[(11)]);
var inst_58535 = (state_58605[(8)]);
var inst_58588 = cljs.core.async.muxch_STAR_(inst_58586);
var state_58605__$1 = state_58605;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_58605__$1,(22),inst_58588,inst_58535);
} else {
if((state_val_58606 === (11))){
var inst_58545 = (state_58605[(12)]);
var inst_58560 = (state_58605[(10)]);
var inst_58560__$1 = cljs.core.seq(inst_58545);
var state_58605__$1 = (function (){var statearr_58653 = state_58605;
(statearr_58653[(10)] = inst_58560__$1);

return statearr_58653;
})();
if(inst_58560__$1){
var statearr_58654_60435 = state_58605__$1;
(statearr_58654_60435[(1)] = (13));

} else {
var statearr_58655_60436 = state_58605__$1;
(statearr_58655_60436[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58606 === (9))){
var inst_58582 = (state_58605[(2)]);
var state_58605__$1 = state_58605;
var statearr_58656_60437 = state_58605__$1;
(statearr_58656_60437[(2)] = inst_58582);

(statearr_58656_60437[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58606 === (5))){
var inst_58542 = cljs.core.deref(mults);
var inst_58543 = cljs.core.vals(inst_58542);
var inst_58544 = cljs.core.seq(inst_58543);
var inst_58545 = inst_58544;
var inst_58546 = null;
var inst_58547 = (0);
var inst_58548 = (0);
var state_58605__$1 = (function (){var statearr_58657 = state_58605;
(statearr_58657[(12)] = inst_58545);

(statearr_58657[(13)] = inst_58547);

(statearr_58657[(14)] = inst_58546);

(statearr_58657[(16)] = inst_58548);

return statearr_58657;
})();
var statearr_58658_60438 = state_58605__$1;
(statearr_58658_60438[(2)] = null);

(statearr_58658_60438[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58606 === (14))){
var state_58605__$1 = state_58605;
var statearr_58663_60439 = state_58605__$1;
(statearr_58663_60439[(2)] = null);

(statearr_58663_60439[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58606 === (16))){
var inst_58560 = (state_58605[(10)]);
var inst_58564 = cljs.core.chunk_first(inst_58560);
var inst_58565 = cljs.core.chunk_rest(inst_58560);
var inst_58566 = cljs.core.count(inst_58564);
var inst_58545 = inst_58565;
var inst_58546 = inst_58564;
var inst_58547 = inst_58566;
var inst_58548 = (0);
var state_58605__$1 = (function (){var statearr_58666 = state_58605;
(statearr_58666[(12)] = inst_58545);

(statearr_58666[(13)] = inst_58547);

(statearr_58666[(14)] = inst_58546);

(statearr_58666[(16)] = inst_58548);

return statearr_58666;
})();
var statearr_58667_60442 = state_58605__$1;
(statearr_58667_60442[(2)] = null);

(statearr_58667_60442[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58606 === (10))){
var inst_58545 = (state_58605[(12)]);
var inst_58547 = (state_58605[(13)]);
var inst_58546 = (state_58605[(14)]);
var inst_58548 = (state_58605[(16)]);
var inst_58553 = cljs.core._nth(inst_58546,inst_58548);
var inst_58554 = cljs.core.async.muxch_STAR_(inst_58553);
var inst_58555 = cljs.core.async.close_BANG_(inst_58554);
var inst_58557 = (inst_58548 + (1));
var tmp58659 = inst_58545;
var tmp58660 = inst_58547;
var tmp58661 = inst_58546;
var inst_58545__$1 = tmp58659;
var inst_58546__$1 = tmp58661;
var inst_58547__$1 = tmp58660;
var inst_58548__$1 = inst_58557;
var state_58605__$1 = (function (){var statearr_58668 = state_58605;
(statearr_58668[(12)] = inst_58545__$1);

(statearr_58668[(17)] = inst_58555);

(statearr_58668[(13)] = inst_58547__$1);

(statearr_58668[(14)] = inst_58546__$1);

(statearr_58668[(16)] = inst_58548__$1);

return statearr_58668;
})();
var statearr_58669_60445 = state_58605__$1;
(statearr_58669_60445[(2)] = null);

(statearr_58669_60445[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58606 === (18))){
var inst_58575 = (state_58605[(2)]);
var state_58605__$1 = state_58605;
var statearr_58672_60446 = state_58605__$1;
(statearr_58672_60446[(2)] = inst_58575);

(statearr_58672_60446[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58606 === (8))){
var inst_58547 = (state_58605[(13)]);
var inst_58548 = (state_58605[(16)]);
var inst_58550 = (inst_58548 < inst_58547);
var inst_58551 = inst_58550;
var state_58605__$1 = state_58605;
if(cljs.core.truth_(inst_58551)){
var statearr_58674_60448 = state_58605__$1;
(statearr_58674_60448[(1)] = (10));

} else {
var statearr_58675_60449 = state_58605__$1;
(statearr_58675_60449[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__56775__auto__ = null;
var cljs$core$async$state_machine__56775__auto____0 = (function (){
var statearr_58678 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_58678[(0)] = cljs$core$async$state_machine__56775__auto__);

(statearr_58678[(1)] = (1));

return statearr_58678;
});
var cljs$core$async$state_machine__56775__auto____1 = (function (state_58605){
while(true){
var ret_value__56776__auto__ = (function (){try{while(true){
var result__56777__auto__ = switch__56774__auto__(state_58605);
if(cljs.core.keyword_identical_QMARK_(result__56777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__56777__auto__;
}
break;
}
}catch (e58680){var ex__56778__auto__ = e58680;
var statearr_58681_60453 = state_58605;
(statearr_58681_60453[(2)] = ex__56778__auto__);


if(cljs.core.seq((state_58605[(4)]))){
var statearr_58682_60454 = state_58605;
(statearr_58682_60454[(1)] = cljs.core.first((state_58605[(4)])));

} else {
throw ex__56778__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__56776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60458 = state_58605;
state_58605 = G__60458;
continue;
} else {
return ret_value__56776__auto__;
}
break;
}
});
cljs$core$async$state_machine__56775__auto__ = function(state_58605){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__56775__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__56775__auto____1.call(this,state_58605);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__56775__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__56775__auto____0;
cljs$core$async$state_machine__56775__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__56775__auto____1;
return cljs$core$async$state_machine__56775__auto__;
})()
})();
var state__56879__auto__ = (function (){var statearr_58683 = f__56878__auto__();
(statearr_58683[(6)] = c__56877__auto___60391);

return statearr_58683;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56879__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__58685 = arguments.length;
switch (G__58685) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__58688 = arguments.length;
switch (G__58688) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__58690 = arguments.length;
switch (G__58690) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__56877__auto___60473 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56878__auto__ = (function (){var switch__56774__auto__ = (function (state_58768){
var state_val_58769 = (state_58768[(1)]);
if((state_val_58769 === (7))){
var state_58768__$1 = state_58768;
var statearr_58771_60474 = state_58768__$1;
(statearr_58771_60474[(2)] = null);

(statearr_58771_60474[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58769 === (1))){
var state_58768__$1 = state_58768;
var statearr_58774_60476 = state_58768__$1;
(statearr_58774_60476[(2)] = null);

(statearr_58774_60476[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58769 === (4))){
var inst_58704 = (state_58768[(7)]);
var inst_58705 = (state_58768[(8)]);
var inst_58707 = (inst_58705 < inst_58704);
var state_58768__$1 = state_58768;
if(cljs.core.truth_(inst_58707)){
var statearr_58781_60478 = state_58768__$1;
(statearr_58781_60478[(1)] = (6));

} else {
var statearr_58782_60479 = state_58768__$1;
(statearr_58782_60479[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58769 === (15))){
var inst_58747 = (state_58768[(9)]);
var inst_58752 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_58747);
var state_58768__$1 = state_58768;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_58768__$1,(17),out,inst_58752);
} else {
if((state_val_58769 === (13))){
var inst_58747 = (state_58768[(9)]);
var inst_58747__$1 = (state_58768[(2)]);
var inst_58748 = cljs.core.some(cljs.core.nil_QMARK_,inst_58747__$1);
var state_58768__$1 = (function (){var statearr_58789 = state_58768;
(statearr_58789[(9)] = inst_58747__$1);

return statearr_58789;
})();
if(cljs.core.truth_(inst_58748)){
var statearr_58790_60480 = state_58768__$1;
(statearr_58790_60480[(1)] = (14));

} else {
var statearr_58795_60481 = state_58768__$1;
(statearr_58795_60481[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58769 === (6))){
var state_58768__$1 = state_58768;
var statearr_58801_60482 = state_58768__$1;
(statearr_58801_60482[(2)] = null);

(statearr_58801_60482[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58769 === (17))){
var inst_58754 = (state_58768[(2)]);
var state_58768__$1 = (function (){var statearr_58812 = state_58768;
(statearr_58812[(10)] = inst_58754);

return statearr_58812;
})();
var statearr_58816_60485 = state_58768__$1;
(statearr_58816_60485[(2)] = null);

(statearr_58816_60485[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58769 === (3))){
var inst_58762 = (state_58768[(2)]);
var state_58768__$1 = state_58768;
return cljs.core.async.impl.ioc_helpers.return_chan(state_58768__$1,inst_58762);
} else {
if((state_val_58769 === (12))){
var _ = (function (){var statearr_58817 = state_58768;
(statearr_58817[(4)] = cljs.core.rest((state_58768[(4)])));

return statearr_58817;
})();
var state_58768__$1 = state_58768;
var ex58809 = (state_58768__$1[(2)]);
var statearr_58818_60486 = state_58768__$1;
(statearr_58818_60486[(5)] = ex58809);


if((ex58809 instanceof Object)){
var statearr_58822_60487 = state_58768__$1;
(statearr_58822_60487[(1)] = (11));

(statearr_58822_60487[(5)] = null);

} else {
throw ex58809;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58769 === (2))){
var inst_58701 = cljs.core.reset_BANG_(dctr,cnt);
var inst_58704 = cnt;
var inst_58705 = (0);
var state_58768__$1 = (function (){var statearr_58824 = state_58768;
(statearr_58824[(11)] = inst_58701);

(statearr_58824[(7)] = inst_58704);

(statearr_58824[(8)] = inst_58705);

return statearr_58824;
})();
var statearr_58825_60489 = state_58768__$1;
(statearr_58825_60489[(2)] = null);

(statearr_58825_60489[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58769 === (11))){
var inst_58721 = (state_58768[(2)]);
var inst_58725 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_58768__$1 = (function (){var statearr_58826 = state_58768;
(statearr_58826[(12)] = inst_58721);

return statearr_58826;
})();
var statearr_58827_60492 = state_58768__$1;
(statearr_58827_60492[(2)] = inst_58725);

(statearr_58827_60492[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58769 === (9))){
var inst_58705 = (state_58768[(8)]);
var _ = (function (){var statearr_58828 = state_58768;
(statearr_58828[(4)] = cljs.core.cons((12),(state_58768[(4)])));

return statearr_58828;
})();
var inst_58731 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_58705) : chs__$1.call(null,inst_58705));
var inst_58732 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_58705) : done.call(null,inst_58705));
var inst_58733 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_58731,inst_58732);
var ___$1 = (function (){var statearr_58829 = state_58768;
(statearr_58829[(4)] = cljs.core.rest((state_58768[(4)])));

return statearr_58829;
})();
var state_58768__$1 = state_58768;
var statearr_58830_60498 = state_58768__$1;
(statearr_58830_60498[(2)] = inst_58733);

(statearr_58830_60498[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58769 === (5))){
var inst_58745 = (state_58768[(2)]);
var state_58768__$1 = (function (){var statearr_58831 = state_58768;
(statearr_58831[(13)] = inst_58745);

return statearr_58831;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58768__$1,(13),dchan);
} else {
if((state_val_58769 === (14))){
var inst_58750 = cljs.core.async.close_BANG_(out);
var state_58768__$1 = state_58768;
var statearr_58832_60499 = state_58768__$1;
(statearr_58832_60499[(2)] = inst_58750);

(statearr_58832_60499[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58769 === (16))){
var inst_58759 = (state_58768[(2)]);
var state_58768__$1 = state_58768;
var statearr_58833_60505 = state_58768__$1;
(statearr_58833_60505[(2)] = inst_58759);

(statearr_58833_60505[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58769 === (10))){
var inst_58705 = (state_58768[(8)]);
var inst_58736 = (state_58768[(2)]);
var inst_58739 = (inst_58705 + (1));
var inst_58705__$1 = inst_58739;
var state_58768__$1 = (function (){var statearr_58834 = state_58768;
(statearr_58834[(14)] = inst_58736);

(statearr_58834[(8)] = inst_58705__$1);

return statearr_58834;
})();
var statearr_58835_60511 = state_58768__$1;
(statearr_58835_60511[(2)] = null);

(statearr_58835_60511[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58769 === (8))){
var inst_58743 = (state_58768[(2)]);
var state_58768__$1 = state_58768;
var statearr_58836_60512 = state_58768__$1;
(statearr_58836_60512[(2)] = inst_58743);

(statearr_58836_60512[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
return (function() {
var cljs$core$async$state_machine__56775__auto__ = null;
var cljs$core$async$state_machine__56775__auto____0 = (function (){
var statearr_58840 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_58840[(0)] = cljs$core$async$state_machine__56775__auto__);

(statearr_58840[(1)] = (1));

return statearr_58840;
});
var cljs$core$async$state_machine__56775__auto____1 = (function (state_58768){
while(true){
var ret_value__56776__auto__ = (function (){try{while(true){
var result__56777__auto__ = switch__56774__auto__(state_58768);
if(cljs.core.keyword_identical_QMARK_(result__56777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__56777__auto__;
}
break;
}
}catch (e58841){var ex__56778__auto__ = e58841;
var statearr_58842_60514 = state_58768;
(statearr_58842_60514[(2)] = ex__56778__auto__);


if(cljs.core.seq((state_58768[(4)]))){
var statearr_58843_60515 = state_58768;
(statearr_58843_60515[(1)] = cljs.core.first((state_58768[(4)])));

} else {
throw ex__56778__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__56776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60517 = state_58768;
state_58768 = G__60517;
continue;
} else {
return ret_value__56776__auto__;
}
break;
}
});
cljs$core$async$state_machine__56775__auto__ = function(state_58768){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__56775__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__56775__auto____1.call(this,state_58768);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__56775__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__56775__auto____0;
cljs$core$async$state_machine__56775__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__56775__auto____1;
return cljs$core$async$state_machine__56775__auto__;
})()
})();
var state__56879__auto__ = (function (){var statearr_58852 = f__56878__auto__();
(statearr_58852[(6)] = c__56877__auto___60473);

return statearr_58852;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56879__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__58859 = arguments.length;
switch (G__58859) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__56877__auto___60522 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56878__auto__ = (function (){var switch__56774__auto__ = (function (state_58891){
var state_val_58892 = (state_58891[(1)]);
if((state_val_58892 === (7))){
var inst_58870 = (state_58891[(7)]);
var inst_58871 = (state_58891[(8)]);
var inst_58870__$1 = (state_58891[(2)]);
var inst_58871__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_58870__$1,(0),null);
var inst_58872 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_58870__$1,(1),null);
var inst_58873 = (inst_58871__$1 == null);
var state_58891__$1 = (function (){var statearr_58893 = state_58891;
(statearr_58893[(7)] = inst_58870__$1);

(statearr_58893[(9)] = inst_58872);

(statearr_58893[(8)] = inst_58871__$1);

return statearr_58893;
})();
if(cljs.core.truth_(inst_58873)){
var statearr_58894_60524 = state_58891__$1;
(statearr_58894_60524[(1)] = (8));

} else {
var statearr_58895_60525 = state_58891__$1;
(statearr_58895_60525[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58892 === (1))){
var inst_58860 = cljs.core.vec(chs);
var inst_58861 = inst_58860;
var state_58891__$1 = (function (){var statearr_58896 = state_58891;
(statearr_58896[(10)] = inst_58861);

return statearr_58896;
})();
var statearr_58897_60527 = state_58891__$1;
(statearr_58897_60527[(2)] = null);

(statearr_58897_60527[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58892 === (4))){
var inst_58861 = (state_58891[(10)]);
var state_58891__$1 = state_58891;
return cljs.core.async.ioc_alts_BANG_(state_58891__$1,(7),inst_58861);
} else {
if((state_val_58892 === (6))){
var inst_58887 = (state_58891[(2)]);
var state_58891__$1 = state_58891;
var statearr_58898_60528 = state_58891__$1;
(statearr_58898_60528[(2)] = inst_58887);

(statearr_58898_60528[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58892 === (3))){
var inst_58889 = (state_58891[(2)]);
var state_58891__$1 = state_58891;
return cljs.core.async.impl.ioc_helpers.return_chan(state_58891__$1,inst_58889);
} else {
if((state_val_58892 === (2))){
var inst_58861 = (state_58891[(10)]);
var inst_58863 = cljs.core.count(inst_58861);
var inst_58864 = (inst_58863 > (0));
var state_58891__$1 = state_58891;
if(cljs.core.truth_(inst_58864)){
var statearr_58900_60529 = state_58891__$1;
(statearr_58900_60529[(1)] = (4));

} else {
var statearr_58901_60532 = state_58891__$1;
(statearr_58901_60532[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58892 === (11))){
var inst_58861 = (state_58891[(10)]);
var inst_58880 = (state_58891[(2)]);
var tmp58899 = inst_58861;
var inst_58861__$1 = tmp58899;
var state_58891__$1 = (function (){var statearr_58902 = state_58891;
(statearr_58902[(11)] = inst_58880);

(statearr_58902[(10)] = inst_58861__$1);

return statearr_58902;
})();
var statearr_58903_60533 = state_58891__$1;
(statearr_58903_60533[(2)] = null);

(statearr_58903_60533[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58892 === (9))){
var inst_58871 = (state_58891[(8)]);
var state_58891__$1 = state_58891;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_58891__$1,(11),out,inst_58871);
} else {
if((state_val_58892 === (5))){
var inst_58885 = cljs.core.async.close_BANG_(out);
var state_58891__$1 = state_58891;
var statearr_58907_60535 = state_58891__$1;
(statearr_58907_60535[(2)] = inst_58885);

(statearr_58907_60535[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58892 === (10))){
var inst_58883 = (state_58891[(2)]);
var state_58891__$1 = state_58891;
var statearr_58908_60538 = state_58891__$1;
(statearr_58908_60538[(2)] = inst_58883);

(statearr_58908_60538[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58892 === (8))){
var inst_58861 = (state_58891[(10)]);
var inst_58870 = (state_58891[(7)]);
var inst_58872 = (state_58891[(9)]);
var inst_58871 = (state_58891[(8)]);
var inst_58875 = (function (){var cs = inst_58861;
var vec__58866 = inst_58870;
var v = inst_58871;
var c = inst_58872;
return (function (p1__58853_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__58853_SHARP_);
});
})();
var inst_58876 = cljs.core.filterv(inst_58875,inst_58861);
var inst_58861__$1 = inst_58876;
var state_58891__$1 = (function (){var statearr_58909 = state_58891;
(statearr_58909[(10)] = inst_58861__$1);

return statearr_58909;
})();
var statearr_58911_60545 = state_58891__$1;
(statearr_58911_60545[(2)] = null);

(statearr_58911_60545[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
return (function() {
var cljs$core$async$state_machine__56775__auto__ = null;
var cljs$core$async$state_machine__56775__auto____0 = (function (){
var statearr_58914 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_58914[(0)] = cljs$core$async$state_machine__56775__auto__);

(statearr_58914[(1)] = (1));

return statearr_58914;
});
var cljs$core$async$state_machine__56775__auto____1 = (function (state_58891){
while(true){
var ret_value__56776__auto__ = (function (){try{while(true){
var result__56777__auto__ = switch__56774__auto__(state_58891);
if(cljs.core.keyword_identical_QMARK_(result__56777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__56777__auto__;
}
break;
}
}catch (e58915){var ex__56778__auto__ = e58915;
var statearr_58916_60549 = state_58891;
(statearr_58916_60549[(2)] = ex__56778__auto__);


if(cljs.core.seq((state_58891[(4)]))){
var statearr_58917_60550 = state_58891;
(statearr_58917_60550[(1)] = cljs.core.first((state_58891[(4)])));

} else {
throw ex__56778__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__56776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60552 = state_58891;
state_58891 = G__60552;
continue;
} else {
return ret_value__56776__auto__;
}
break;
}
});
cljs$core$async$state_machine__56775__auto__ = function(state_58891){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__56775__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__56775__auto____1.call(this,state_58891);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__56775__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__56775__auto____0;
cljs$core$async$state_machine__56775__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__56775__auto____1;
return cljs$core$async$state_machine__56775__auto__;
})()
})();
var state__56879__auto__ = (function (){var statearr_58920 = f__56878__auto__();
(statearr_58920[(6)] = c__56877__auto___60522);

return statearr_58920;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56879__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__58924 = arguments.length;
switch (G__58924) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__56877__auto___60558 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56878__auto__ = (function (){var switch__56774__auto__ = (function (state_58948){
var state_val_58949 = (state_58948[(1)]);
if((state_val_58949 === (7))){
var inst_58930 = (state_58948[(7)]);
var inst_58930__$1 = (state_58948[(2)]);
var inst_58931 = (inst_58930__$1 == null);
var inst_58932 = cljs.core.not(inst_58931);
var state_58948__$1 = (function (){var statearr_58952 = state_58948;
(statearr_58952[(7)] = inst_58930__$1);

return statearr_58952;
})();
if(inst_58932){
var statearr_58953_60559 = state_58948__$1;
(statearr_58953_60559[(1)] = (8));

} else {
var statearr_58954_60560 = state_58948__$1;
(statearr_58954_60560[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58949 === (1))){
var inst_58925 = (0);
var state_58948__$1 = (function (){var statearr_58955 = state_58948;
(statearr_58955[(8)] = inst_58925);

return statearr_58955;
})();
var statearr_58956_60562 = state_58948__$1;
(statearr_58956_60562[(2)] = null);

(statearr_58956_60562[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58949 === (4))){
var state_58948__$1 = state_58948;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58948__$1,(7),ch);
} else {
if((state_val_58949 === (6))){
var inst_58943 = (state_58948[(2)]);
var state_58948__$1 = state_58948;
var statearr_58957_60564 = state_58948__$1;
(statearr_58957_60564[(2)] = inst_58943);

(statearr_58957_60564[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58949 === (3))){
var inst_58945 = (state_58948[(2)]);
var inst_58946 = cljs.core.async.close_BANG_(out);
var state_58948__$1 = (function (){var statearr_58958 = state_58948;
(statearr_58958[(9)] = inst_58945);

return statearr_58958;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_58948__$1,inst_58946);
} else {
if((state_val_58949 === (2))){
var inst_58925 = (state_58948[(8)]);
var inst_58927 = (inst_58925 < n);
var state_58948__$1 = state_58948;
if(cljs.core.truth_(inst_58927)){
var statearr_58959_60565 = state_58948__$1;
(statearr_58959_60565[(1)] = (4));

} else {
var statearr_58960_60566 = state_58948__$1;
(statearr_58960_60566[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58949 === (11))){
var inst_58925 = (state_58948[(8)]);
var inst_58935 = (state_58948[(2)]);
var inst_58936 = (inst_58925 + (1));
var inst_58925__$1 = inst_58936;
var state_58948__$1 = (function (){var statearr_58961 = state_58948;
(statearr_58961[(10)] = inst_58935);

(statearr_58961[(8)] = inst_58925__$1);

return statearr_58961;
})();
var statearr_58962_60569 = state_58948__$1;
(statearr_58962_60569[(2)] = null);

(statearr_58962_60569[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58949 === (9))){
var state_58948__$1 = state_58948;
var statearr_58963_60570 = state_58948__$1;
(statearr_58963_60570[(2)] = null);

(statearr_58963_60570[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58949 === (5))){
var state_58948__$1 = state_58948;
var statearr_58965_60571 = state_58948__$1;
(statearr_58965_60571[(2)] = null);

(statearr_58965_60571[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58949 === (10))){
var inst_58940 = (state_58948[(2)]);
var state_58948__$1 = state_58948;
var statearr_58968_60572 = state_58948__$1;
(statearr_58968_60572[(2)] = inst_58940);

(statearr_58968_60572[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58949 === (8))){
var inst_58930 = (state_58948[(7)]);
var state_58948__$1 = state_58948;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_58948__$1,(11),out,inst_58930);
} else {
return null;
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
return (function() {
var cljs$core$async$state_machine__56775__auto__ = null;
var cljs$core$async$state_machine__56775__auto____0 = (function (){
var statearr_58970 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_58970[(0)] = cljs$core$async$state_machine__56775__auto__);

(statearr_58970[(1)] = (1));

return statearr_58970;
});
var cljs$core$async$state_machine__56775__auto____1 = (function (state_58948){
while(true){
var ret_value__56776__auto__ = (function (){try{while(true){
var result__56777__auto__ = switch__56774__auto__(state_58948);
if(cljs.core.keyword_identical_QMARK_(result__56777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__56777__auto__;
}
break;
}
}catch (e58971){var ex__56778__auto__ = e58971;
var statearr_58972_60577 = state_58948;
(statearr_58972_60577[(2)] = ex__56778__auto__);


if(cljs.core.seq((state_58948[(4)]))){
var statearr_58973_60578 = state_58948;
(statearr_58973_60578[(1)] = cljs.core.first((state_58948[(4)])));

} else {
throw ex__56778__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__56776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60579 = state_58948;
state_58948 = G__60579;
continue;
} else {
return ret_value__56776__auto__;
}
break;
}
});
cljs$core$async$state_machine__56775__auto__ = function(state_58948){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__56775__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__56775__auto____1.call(this,state_58948);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__56775__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__56775__auto____0;
cljs$core$async$state_machine__56775__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__56775__auto____1;
return cljs$core$async$state_machine__56775__auto__;
})()
})();
var state__56879__auto__ = (function (){var statearr_58974 = f__56878__auto__();
(statearr_58974[(6)] = c__56877__auto___60558);

return statearr_58974;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56879__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async58977 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async58977 = (function (f,ch,meta58978){
this.f = f;
this.ch = ch;
this.meta58978 = meta58978;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async58977.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58979,meta58978__$1){
var self__ = this;
var _58979__$1 = this;
return (new cljs.core.async.t_cljs$core$async58977(self__.f,self__.ch,meta58978__$1));
}));

(cljs.core.async.t_cljs$core$async58977.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58979){
var self__ = this;
var _58979__$1 = this;
return self__.meta58978;
}));

(cljs.core.async.t_cljs$core$async58977.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async58977.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async58977.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async58977.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async58977.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async58987 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async58987 = (function (f,ch,meta58978,_,fn1,meta58988){
this.f = f;
this.ch = ch;
this.meta58978 = meta58978;
this._ = _;
this.fn1 = fn1;
this.meta58988 = meta58988;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async58987.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58989,meta58988__$1){
var self__ = this;
var _58989__$1 = this;
return (new cljs.core.async.t_cljs$core$async58987(self__.f,self__.ch,self__.meta58978,self__._,self__.fn1,meta58988__$1));
}));

(cljs.core.async.t_cljs$core$async58987.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58989){
var self__ = this;
var _58989__$1 = this;
return self__.meta58988;
}));

(cljs.core.async.t_cljs$core$async58987.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async58987.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async58987.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async58987.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__58976_SHARP_){
var G__58995 = (((p1__58976_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__58976_SHARP_) : self__.f.call(null,p1__58976_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__58995) : f1.call(null,G__58995));
});
}));

(cljs.core.async.t_cljs$core$async58987.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta58978","meta58978",-1769746381,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async58977","cljs.core.async/t_cljs$core$async58977",-2025810330,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta58988","meta58988",745853988,null)], null);
}));

(cljs.core.async.t_cljs$core$async58987.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async58987.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async58987");

(cljs.core.async.t_cljs$core$async58987.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async58987");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async58987.
 */
cljs.core.async.__GT_t_cljs$core$async58987 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async58987(f__$1,ch__$1,meta58978__$1,___$2,fn1__$1,meta58988){
return (new cljs.core.async.t_cljs$core$async58987(f__$1,ch__$1,meta58978__$1,___$2,fn1__$1,meta58988));
});

}

return (new cljs.core.async.t_cljs$core$async58987(self__.f,self__.ch,self__.meta58978,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__59001 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__59001) : self__.f.call(null,G__59001));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async58977.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async58977.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async58977.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta58978","meta58978",-1769746381,null)], null);
}));

(cljs.core.async.t_cljs$core$async58977.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async58977.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async58977");

(cljs.core.async.t_cljs$core$async58977.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async58977");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async58977.
 */
cljs.core.async.__GT_t_cljs$core$async58977 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async58977(f__$1,ch__$1,meta58978){
return (new cljs.core.async.t_cljs$core$async58977(f__$1,ch__$1,meta58978));
});

}

return (new cljs.core.async.t_cljs$core$async58977(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async59008 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async59008 = (function (f,ch,meta59009){
this.f = f;
this.ch = ch;
this.meta59009 = meta59009;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async59008.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_59010,meta59009__$1){
var self__ = this;
var _59010__$1 = this;
return (new cljs.core.async.t_cljs$core$async59008(self__.f,self__.ch,meta59009__$1));
}));

(cljs.core.async.t_cljs$core$async59008.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_59010){
var self__ = this;
var _59010__$1 = this;
return self__.meta59009;
}));

(cljs.core.async.t_cljs$core$async59008.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async59008.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async59008.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async59008.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async59008.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async59008.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async59008.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta59009","meta59009",-1593526858,null)], null);
}));

(cljs.core.async.t_cljs$core$async59008.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async59008.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async59008");

(cljs.core.async.t_cljs$core$async59008.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async59008");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async59008.
 */
cljs.core.async.__GT_t_cljs$core$async59008 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async59008(f__$1,ch__$1,meta59009){
return (new cljs.core.async.t_cljs$core$async59008(f__$1,ch__$1,meta59009));
});

}

return (new cljs.core.async.t_cljs$core$async59008(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async59019 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async59019 = (function (p,ch,meta59020){
this.p = p;
this.ch = ch;
this.meta59020 = meta59020;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async59019.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_59021,meta59020__$1){
var self__ = this;
var _59021__$1 = this;
return (new cljs.core.async.t_cljs$core$async59019(self__.p,self__.ch,meta59020__$1));
}));

(cljs.core.async.t_cljs$core$async59019.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_59021){
var self__ = this;
var _59021__$1 = this;
return self__.meta59020;
}));

(cljs.core.async.t_cljs$core$async59019.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async59019.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async59019.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async59019.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async59019.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async59019.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async59019.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async59019.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta59020","meta59020",-289390769,null)], null);
}));

(cljs.core.async.t_cljs$core$async59019.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async59019.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async59019");

(cljs.core.async.t_cljs$core$async59019.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async59019");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async59019.
 */
cljs.core.async.__GT_t_cljs$core$async59019 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async59019(p__$1,ch__$1,meta59020){
return (new cljs.core.async.t_cljs$core$async59019(p__$1,ch__$1,meta59020));
});

}

return (new cljs.core.async.t_cljs$core$async59019(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__59027 = arguments.length;
switch (G__59027) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__56877__auto___60605 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56878__auto__ = (function (){var switch__56774__auto__ = (function (state_59053){
var state_val_59054 = (state_59053[(1)]);
if((state_val_59054 === (7))){
var inst_59049 = (state_59053[(2)]);
var state_59053__$1 = state_59053;
var statearr_59055_60607 = state_59053__$1;
(statearr_59055_60607[(2)] = inst_59049);

(statearr_59055_60607[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59054 === (1))){
var state_59053__$1 = state_59053;
var statearr_59056_60608 = state_59053__$1;
(statearr_59056_60608[(2)] = null);

(statearr_59056_60608[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59054 === (4))){
var inst_59035 = (state_59053[(7)]);
var inst_59035__$1 = (state_59053[(2)]);
var inst_59036 = (inst_59035__$1 == null);
var state_59053__$1 = (function (){var statearr_59057 = state_59053;
(statearr_59057[(7)] = inst_59035__$1);

return statearr_59057;
})();
if(cljs.core.truth_(inst_59036)){
var statearr_59058_60614 = state_59053__$1;
(statearr_59058_60614[(1)] = (5));

} else {
var statearr_59059_60615 = state_59053__$1;
(statearr_59059_60615[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59054 === (6))){
var inst_59035 = (state_59053[(7)]);
var inst_59040 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_59035) : p.call(null,inst_59035));
var state_59053__$1 = state_59053;
if(cljs.core.truth_(inst_59040)){
var statearr_59060_60621 = state_59053__$1;
(statearr_59060_60621[(1)] = (8));

} else {
var statearr_59061_60622 = state_59053__$1;
(statearr_59061_60622[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59054 === (3))){
var inst_59051 = (state_59053[(2)]);
var state_59053__$1 = state_59053;
return cljs.core.async.impl.ioc_helpers.return_chan(state_59053__$1,inst_59051);
} else {
if((state_val_59054 === (2))){
var state_59053__$1 = state_59053;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59053__$1,(4),ch);
} else {
if((state_val_59054 === (11))){
var inst_59043 = (state_59053[(2)]);
var state_59053__$1 = state_59053;
var statearr_59062_60623 = state_59053__$1;
(statearr_59062_60623[(2)] = inst_59043);

(statearr_59062_60623[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59054 === (9))){
var state_59053__$1 = state_59053;
var statearr_59063_60624 = state_59053__$1;
(statearr_59063_60624[(2)] = null);

(statearr_59063_60624[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59054 === (5))){
var inst_59038 = cljs.core.async.close_BANG_(out);
var state_59053__$1 = state_59053;
var statearr_59064_60626 = state_59053__$1;
(statearr_59064_60626[(2)] = inst_59038);

(statearr_59064_60626[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59054 === (10))){
var inst_59046 = (state_59053[(2)]);
var state_59053__$1 = (function (){var statearr_59067 = state_59053;
(statearr_59067[(8)] = inst_59046);

return statearr_59067;
})();
var statearr_59069_60627 = state_59053__$1;
(statearr_59069_60627[(2)] = null);

(statearr_59069_60627[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59054 === (8))){
var inst_59035 = (state_59053[(7)]);
var state_59053__$1 = state_59053;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_59053__$1,(11),out,inst_59035);
} else {
return null;
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
return (function() {
var cljs$core$async$state_machine__56775__auto__ = null;
var cljs$core$async$state_machine__56775__auto____0 = (function (){
var statearr_59070 = [null,null,null,null,null,null,null,null,null];
(statearr_59070[(0)] = cljs$core$async$state_machine__56775__auto__);

(statearr_59070[(1)] = (1));

return statearr_59070;
});
var cljs$core$async$state_machine__56775__auto____1 = (function (state_59053){
while(true){
var ret_value__56776__auto__ = (function (){try{while(true){
var result__56777__auto__ = switch__56774__auto__(state_59053);
if(cljs.core.keyword_identical_QMARK_(result__56777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__56777__auto__;
}
break;
}
}catch (e59072){var ex__56778__auto__ = e59072;
var statearr_59074_60631 = state_59053;
(statearr_59074_60631[(2)] = ex__56778__auto__);


if(cljs.core.seq((state_59053[(4)]))){
var statearr_59075_60632 = state_59053;
(statearr_59075_60632[(1)] = cljs.core.first((state_59053[(4)])));

} else {
throw ex__56778__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__56776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60634 = state_59053;
state_59053 = G__60634;
continue;
} else {
return ret_value__56776__auto__;
}
break;
}
});
cljs$core$async$state_machine__56775__auto__ = function(state_59053){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__56775__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__56775__auto____1.call(this,state_59053);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__56775__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__56775__auto____0;
cljs$core$async$state_machine__56775__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__56775__auto____1;
return cljs$core$async$state_machine__56775__auto__;
})()
})();
var state__56879__auto__ = (function (){var statearr_59076 = f__56878__auto__();
(statearr_59076[(6)] = c__56877__auto___60605);

return statearr_59076;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56879__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__59078 = arguments.length;
switch (G__59078) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__56877__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56878__auto__ = (function (){var switch__56774__auto__ = (function (state_59146){
var state_val_59147 = (state_59146[(1)]);
if((state_val_59147 === (7))){
var inst_59142 = (state_59146[(2)]);
var state_59146__$1 = state_59146;
var statearr_59148_60637 = state_59146__$1;
(statearr_59148_60637[(2)] = inst_59142);

(statearr_59148_60637[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59147 === (20))){
var inst_59109 = (state_59146[(7)]);
var inst_59120 = (state_59146[(2)]);
var inst_59121 = cljs.core.next(inst_59109);
var inst_59095 = inst_59121;
var inst_59096 = null;
var inst_59097 = (0);
var inst_59098 = (0);
var state_59146__$1 = (function (){var statearr_59150 = state_59146;
(statearr_59150[(8)] = inst_59097);

(statearr_59150[(9)] = inst_59098);

(statearr_59150[(10)] = inst_59096);

(statearr_59150[(11)] = inst_59095);

(statearr_59150[(12)] = inst_59120);

return statearr_59150;
})();
var statearr_59151_60639 = state_59146__$1;
(statearr_59151_60639[(2)] = null);

(statearr_59151_60639[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59147 === (1))){
var state_59146__$1 = state_59146;
var statearr_59153_60640 = state_59146__$1;
(statearr_59153_60640[(2)] = null);

(statearr_59153_60640[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59147 === (4))){
var inst_59083 = (state_59146[(13)]);
var inst_59083__$1 = (state_59146[(2)]);
var inst_59085 = (inst_59083__$1 == null);
var state_59146__$1 = (function (){var statearr_59154 = state_59146;
(statearr_59154[(13)] = inst_59083__$1);

return statearr_59154;
})();
if(cljs.core.truth_(inst_59085)){
var statearr_59155_60643 = state_59146__$1;
(statearr_59155_60643[(1)] = (5));

} else {
var statearr_59157_60644 = state_59146__$1;
(statearr_59157_60644[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59147 === (15))){
var state_59146__$1 = state_59146;
var statearr_59163_60646 = state_59146__$1;
(statearr_59163_60646[(2)] = null);

(statearr_59163_60646[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59147 === (21))){
var state_59146__$1 = state_59146;
var statearr_59165_60647 = state_59146__$1;
(statearr_59165_60647[(2)] = null);

(statearr_59165_60647[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59147 === (13))){
var inst_59097 = (state_59146[(8)]);
var inst_59098 = (state_59146[(9)]);
var inst_59096 = (state_59146[(10)]);
var inst_59095 = (state_59146[(11)]);
var inst_59105 = (state_59146[(2)]);
var inst_59106 = (inst_59098 + (1));
var tmp59160 = inst_59097;
var tmp59161 = inst_59096;
var tmp59162 = inst_59095;
var inst_59095__$1 = tmp59162;
var inst_59096__$1 = tmp59161;
var inst_59097__$1 = tmp59160;
var inst_59098__$1 = inst_59106;
var state_59146__$1 = (function (){var statearr_59168 = state_59146;
(statearr_59168[(8)] = inst_59097__$1);

(statearr_59168[(9)] = inst_59098__$1);

(statearr_59168[(10)] = inst_59096__$1);

(statearr_59168[(11)] = inst_59095__$1);

(statearr_59168[(14)] = inst_59105);

return statearr_59168;
})();
var statearr_59169_60648 = state_59146__$1;
(statearr_59169_60648[(2)] = null);

(statearr_59169_60648[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59147 === (22))){
var state_59146__$1 = state_59146;
var statearr_59173_60649 = state_59146__$1;
(statearr_59173_60649[(2)] = null);

(statearr_59173_60649[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59147 === (6))){
var inst_59083 = (state_59146[(13)]);
var inst_59093 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_59083) : f.call(null,inst_59083));
var inst_59094 = cljs.core.seq(inst_59093);
var inst_59095 = inst_59094;
var inst_59096 = null;
var inst_59097 = (0);
var inst_59098 = (0);
var state_59146__$1 = (function (){var statearr_59174 = state_59146;
(statearr_59174[(8)] = inst_59097);

(statearr_59174[(9)] = inst_59098);

(statearr_59174[(10)] = inst_59096);

(statearr_59174[(11)] = inst_59095);

return statearr_59174;
})();
var statearr_59176_60652 = state_59146__$1;
(statearr_59176_60652[(2)] = null);

(statearr_59176_60652[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59147 === (17))){
var inst_59109 = (state_59146[(7)]);
var inst_59113 = cljs.core.chunk_first(inst_59109);
var inst_59114 = cljs.core.chunk_rest(inst_59109);
var inst_59115 = cljs.core.count(inst_59113);
var inst_59095 = inst_59114;
var inst_59096 = inst_59113;
var inst_59097 = inst_59115;
var inst_59098 = (0);
var state_59146__$1 = (function (){var statearr_59178 = state_59146;
(statearr_59178[(8)] = inst_59097);

(statearr_59178[(9)] = inst_59098);

(statearr_59178[(10)] = inst_59096);

(statearr_59178[(11)] = inst_59095);

return statearr_59178;
})();
var statearr_59179_60654 = state_59146__$1;
(statearr_59179_60654[(2)] = null);

(statearr_59179_60654[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59147 === (3))){
var inst_59144 = (state_59146[(2)]);
var state_59146__$1 = state_59146;
return cljs.core.async.impl.ioc_helpers.return_chan(state_59146__$1,inst_59144);
} else {
if((state_val_59147 === (12))){
var inst_59129 = (state_59146[(2)]);
var state_59146__$1 = state_59146;
var statearr_59182_60657 = state_59146__$1;
(statearr_59182_60657[(2)] = inst_59129);

(statearr_59182_60657[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59147 === (2))){
var state_59146__$1 = state_59146;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59146__$1,(4),in$);
} else {
if((state_val_59147 === (23))){
var inst_59140 = (state_59146[(2)]);
var state_59146__$1 = state_59146;
var statearr_59185_60660 = state_59146__$1;
(statearr_59185_60660[(2)] = inst_59140);

(statearr_59185_60660[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59147 === (19))){
var inst_59124 = (state_59146[(2)]);
var state_59146__$1 = state_59146;
var statearr_59187_60662 = state_59146__$1;
(statearr_59187_60662[(2)] = inst_59124);

(statearr_59187_60662[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59147 === (11))){
var inst_59095 = (state_59146[(11)]);
var inst_59109 = (state_59146[(7)]);
var inst_59109__$1 = cljs.core.seq(inst_59095);
var state_59146__$1 = (function (){var statearr_59192 = state_59146;
(statearr_59192[(7)] = inst_59109__$1);

return statearr_59192;
})();
if(inst_59109__$1){
var statearr_59193_60668 = state_59146__$1;
(statearr_59193_60668[(1)] = (14));

} else {
var statearr_59194_60669 = state_59146__$1;
(statearr_59194_60669[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59147 === (9))){
var inst_59131 = (state_59146[(2)]);
var inst_59135 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_59146__$1 = (function (){var statearr_59196 = state_59146;
(statearr_59196[(15)] = inst_59131);

return statearr_59196;
})();
if(cljs.core.truth_(inst_59135)){
var statearr_59199_60674 = state_59146__$1;
(statearr_59199_60674[(1)] = (21));

} else {
var statearr_59200_60675 = state_59146__$1;
(statearr_59200_60675[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59147 === (5))){
var inst_59087 = cljs.core.async.close_BANG_(out);
var state_59146__$1 = state_59146;
var statearr_59201_60676 = state_59146__$1;
(statearr_59201_60676[(2)] = inst_59087);

(statearr_59201_60676[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59147 === (14))){
var inst_59109 = (state_59146[(7)]);
var inst_59111 = cljs.core.chunked_seq_QMARK_(inst_59109);
var state_59146__$1 = state_59146;
if(inst_59111){
var statearr_59205_60678 = state_59146__$1;
(statearr_59205_60678[(1)] = (17));

} else {
var statearr_59206_60679 = state_59146__$1;
(statearr_59206_60679[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59147 === (16))){
var inst_59127 = (state_59146[(2)]);
var state_59146__$1 = state_59146;
var statearr_59209_60680 = state_59146__$1;
(statearr_59209_60680[(2)] = inst_59127);

(statearr_59209_60680[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59147 === (10))){
var inst_59098 = (state_59146[(9)]);
var inst_59096 = (state_59146[(10)]);
var inst_59103 = cljs.core._nth(inst_59096,inst_59098);
var state_59146__$1 = state_59146;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_59146__$1,(13),out,inst_59103);
} else {
if((state_val_59147 === (18))){
var inst_59109 = (state_59146[(7)]);
var inst_59118 = cljs.core.first(inst_59109);
var state_59146__$1 = state_59146;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_59146__$1,(20),out,inst_59118);
} else {
if((state_val_59147 === (8))){
var inst_59097 = (state_59146[(8)]);
var inst_59098 = (state_59146[(9)]);
var inst_59100 = (inst_59098 < inst_59097);
var inst_59101 = inst_59100;
var state_59146__$1 = state_59146;
if(cljs.core.truth_(inst_59101)){
var statearr_59214_60683 = state_59146__$1;
(statearr_59214_60683[(1)] = (10));

} else {
var statearr_59216_60684 = state_59146__$1;
(statearr_59216_60684[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__56775__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__56775__auto____0 = (function (){
var statearr_59221 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_59221[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__56775__auto__);

(statearr_59221[(1)] = (1));

return statearr_59221;
});
var cljs$core$async$mapcat_STAR__$_state_machine__56775__auto____1 = (function (state_59146){
while(true){
var ret_value__56776__auto__ = (function (){try{while(true){
var result__56777__auto__ = switch__56774__auto__(state_59146);
if(cljs.core.keyword_identical_QMARK_(result__56777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__56777__auto__;
}
break;
}
}catch (e59222){var ex__56778__auto__ = e59222;
var statearr_59223_60687 = state_59146;
(statearr_59223_60687[(2)] = ex__56778__auto__);


if(cljs.core.seq((state_59146[(4)]))){
var statearr_59224_60688 = state_59146;
(statearr_59224_60688[(1)] = cljs.core.first((state_59146[(4)])));

} else {
throw ex__56778__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__56776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60689 = state_59146;
state_59146 = G__60689;
continue;
} else {
return ret_value__56776__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__56775__auto__ = function(state_59146){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__56775__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__56775__auto____1.call(this,state_59146);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__56775__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__56775__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__56775__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__56775__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__56775__auto__;
})()
})();
var state__56879__auto__ = (function (){var statearr_59227 = f__56878__auto__();
(statearr_59227[(6)] = c__56877__auto__);

return statearr_59227;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56879__auto__);
}));

return c__56877__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__59236 = arguments.length;
switch (G__59236) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__59257 = arguments.length;
switch (G__59257) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__59276 = arguments.length;
switch (G__59276) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__56877__auto___60696 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56878__auto__ = (function (){var switch__56774__auto__ = (function (state_59307){
var state_val_59308 = (state_59307[(1)]);
if((state_val_59308 === (7))){
var inst_59301 = (state_59307[(2)]);
var state_59307__$1 = state_59307;
var statearr_59312_60698 = state_59307__$1;
(statearr_59312_60698[(2)] = inst_59301);

(statearr_59312_60698[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59308 === (1))){
var inst_59281 = null;
var state_59307__$1 = (function (){var statearr_59317 = state_59307;
(statearr_59317[(7)] = inst_59281);

return statearr_59317;
})();
var statearr_59318_60699 = state_59307__$1;
(statearr_59318_60699[(2)] = null);

(statearr_59318_60699[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59308 === (4))){
var inst_59286 = (state_59307[(8)]);
var inst_59286__$1 = (state_59307[(2)]);
var inst_59287 = (inst_59286__$1 == null);
var inst_59288 = cljs.core.not(inst_59287);
var state_59307__$1 = (function (){var statearr_59322 = state_59307;
(statearr_59322[(8)] = inst_59286__$1);

return statearr_59322;
})();
if(inst_59288){
var statearr_59324_60703 = state_59307__$1;
(statearr_59324_60703[(1)] = (5));

} else {
var statearr_59325_60704 = state_59307__$1;
(statearr_59325_60704[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59308 === (6))){
var state_59307__$1 = state_59307;
var statearr_59327_60705 = state_59307__$1;
(statearr_59327_60705[(2)] = null);

(statearr_59327_60705[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59308 === (3))){
var inst_59303 = (state_59307[(2)]);
var inst_59304 = cljs.core.async.close_BANG_(out);
var state_59307__$1 = (function (){var statearr_59331 = state_59307;
(statearr_59331[(9)] = inst_59303);

return statearr_59331;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_59307__$1,inst_59304);
} else {
if((state_val_59308 === (2))){
var state_59307__$1 = state_59307;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59307__$1,(4),ch);
} else {
if((state_val_59308 === (11))){
var inst_59286 = (state_59307[(8)]);
var inst_59295 = (state_59307[(2)]);
var inst_59281 = inst_59286;
var state_59307__$1 = (function (){var statearr_59339 = state_59307;
(statearr_59339[(10)] = inst_59295);

(statearr_59339[(7)] = inst_59281);

return statearr_59339;
})();
var statearr_59342_60709 = state_59307__$1;
(statearr_59342_60709[(2)] = null);

(statearr_59342_60709[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59308 === (9))){
var inst_59286 = (state_59307[(8)]);
var state_59307__$1 = state_59307;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_59307__$1,(11),out,inst_59286);
} else {
if((state_val_59308 === (5))){
var inst_59281 = (state_59307[(7)]);
var inst_59286 = (state_59307[(8)]);
var inst_59290 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_59286,inst_59281);
var state_59307__$1 = state_59307;
if(inst_59290){
var statearr_59347_60711 = state_59307__$1;
(statearr_59347_60711[(1)] = (8));

} else {
var statearr_59348_60712 = state_59307__$1;
(statearr_59348_60712[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59308 === (10))){
var inst_59298 = (state_59307[(2)]);
var state_59307__$1 = state_59307;
var statearr_59353_60715 = state_59307__$1;
(statearr_59353_60715[(2)] = inst_59298);

(statearr_59353_60715[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59308 === (8))){
var inst_59281 = (state_59307[(7)]);
var tmp59345 = inst_59281;
var inst_59281__$1 = tmp59345;
var state_59307__$1 = (function (){var statearr_59355 = state_59307;
(statearr_59355[(7)] = inst_59281__$1);

return statearr_59355;
})();
var statearr_59360_60718 = state_59307__$1;
(statearr_59360_60718[(2)] = null);

(statearr_59360_60718[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
return (function() {
var cljs$core$async$state_machine__56775__auto__ = null;
var cljs$core$async$state_machine__56775__auto____0 = (function (){
var statearr_59361 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_59361[(0)] = cljs$core$async$state_machine__56775__auto__);

(statearr_59361[(1)] = (1));

return statearr_59361;
});
var cljs$core$async$state_machine__56775__auto____1 = (function (state_59307){
while(true){
var ret_value__56776__auto__ = (function (){try{while(true){
var result__56777__auto__ = switch__56774__auto__(state_59307);
if(cljs.core.keyword_identical_QMARK_(result__56777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__56777__auto__;
}
break;
}
}catch (e59362){var ex__56778__auto__ = e59362;
var statearr_59363_60720 = state_59307;
(statearr_59363_60720[(2)] = ex__56778__auto__);


if(cljs.core.seq((state_59307[(4)]))){
var statearr_59364_60721 = state_59307;
(statearr_59364_60721[(1)] = cljs.core.first((state_59307[(4)])));

} else {
throw ex__56778__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__56776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60722 = state_59307;
state_59307 = G__60722;
continue;
} else {
return ret_value__56776__auto__;
}
break;
}
});
cljs$core$async$state_machine__56775__auto__ = function(state_59307){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__56775__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__56775__auto____1.call(this,state_59307);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__56775__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__56775__auto____0;
cljs$core$async$state_machine__56775__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__56775__auto____1;
return cljs$core$async$state_machine__56775__auto__;
})()
})();
var state__56879__auto__ = (function (){var statearr_59369 = f__56878__auto__();
(statearr_59369[(6)] = c__56877__auto___60696);

return statearr_59369;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56879__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__59375 = arguments.length;
switch (G__59375) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__56877__auto___60726 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56878__auto__ = (function (){var switch__56774__auto__ = (function (state_59429){
var state_val_59434 = (state_59429[(1)]);
if((state_val_59434 === (7))){
var inst_59421 = (state_59429[(2)]);
var state_59429__$1 = state_59429;
var statearr_59441_60727 = state_59429__$1;
(statearr_59441_60727[(2)] = inst_59421);

(statearr_59441_60727[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59434 === (1))){
var inst_59384 = (new Array(n));
var inst_59385 = inst_59384;
var inst_59386 = (0);
var state_59429__$1 = (function (){var statearr_59443 = state_59429;
(statearr_59443[(7)] = inst_59385);

(statearr_59443[(8)] = inst_59386);

return statearr_59443;
})();
var statearr_59448_60747 = state_59429__$1;
(statearr_59448_60747[(2)] = null);

(statearr_59448_60747[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59434 === (4))){
var inst_59390 = (state_59429[(9)]);
var inst_59390__$1 = (state_59429[(2)]);
var inst_59392 = (inst_59390__$1 == null);
var inst_59393 = cljs.core.not(inst_59392);
var state_59429__$1 = (function (){var statearr_59451 = state_59429;
(statearr_59451[(9)] = inst_59390__$1);

return statearr_59451;
})();
if(inst_59393){
var statearr_59453_60748 = state_59429__$1;
(statearr_59453_60748[(1)] = (5));

} else {
var statearr_59454_60749 = state_59429__$1;
(statearr_59454_60749[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59434 === (15))){
var inst_59415 = (state_59429[(2)]);
var state_59429__$1 = state_59429;
var statearr_59456_60783 = state_59429__$1;
(statearr_59456_60783[(2)] = inst_59415);

(statearr_59456_60783[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59434 === (13))){
var state_59429__$1 = state_59429;
var statearr_59460_60938 = state_59429__$1;
(statearr_59460_60938[(2)] = null);

(statearr_59460_60938[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59434 === (6))){
var inst_59386 = (state_59429[(8)]);
var inst_59409 = (inst_59386 > (0));
var state_59429__$1 = state_59429;
if(cljs.core.truth_(inst_59409)){
var statearr_59463_60939 = state_59429__$1;
(statearr_59463_60939[(1)] = (12));

} else {
var statearr_59465_60940 = state_59429__$1;
(statearr_59465_60940[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59434 === (3))){
var inst_59423 = (state_59429[(2)]);
var state_59429__$1 = state_59429;
return cljs.core.async.impl.ioc_helpers.return_chan(state_59429__$1,inst_59423);
} else {
if((state_val_59434 === (12))){
var inst_59385 = (state_59429[(7)]);
var inst_59413 = cljs.core.vec(inst_59385);
var state_59429__$1 = state_59429;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_59429__$1,(15),out,inst_59413);
} else {
if((state_val_59434 === (2))){
var state_59429__$1 = state_59429;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59429__$1,(4),ch);
} else {
if((state_val_59434 === (11))){
var inst_59403 = (state_59429[(2)]);
var inst_59404 = (new Array(n));
var inst_59385 = inst_59404;
var inst_59386 = (0);
var state_59429__$1 = (function (){var statearr_59476 = state_59429;
(statearr_59476[(10)] = inst_59403);

(statearr_59476[(7)] = inst_59385);

(statearr_59476[(8)] = inst_59386);

return statearr_59476;
})();
var statearr_59477_60941 = state_59429__$1;
(statearr_59477_60941[(2)] = null);

(statearr_59477_60941[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59434 === (9))){
var inst_59385 = (state_59429[(7)]);
var inst_59401 = cljs.core.vec(inst_59385);
var state_59429__$1 = state_59429;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_59429__$1,(11),out,inst_59401);
} else {
if((state_val_59434 === (5))){
var inst_59396 = (state_59429[(11)]);
var inst_59390 = (state_59429[(9)]);
var inst_59385 = (state_59429[(7)]);
var inst_59386 = (state_59429[(8)]);
var inst_59395 = (inst_59385[inst_59386] = inst_59390);
var inst_59396__$1 = (inst_59386 + (1));
var inst_59397 = (inst_59396__$1 < n);
var state_59429__$1 = (function (){var statearr_59489 = state_59429;
(statearr_59489[(12)] = inst_59395);

(statearr_59489[(11)] = inst_59396__$1);

return statearr_59489;
})();
if(cljs.core.truth_(inst_59397)){
var statearr_59492_60942 = state_59429__$1;
(statearr_59492_60942[(1)] = (8));

} else {
var statearr_59493_60943 = state_59429__$1;
(statearr_59493_60943[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59434 === (14))){
var inst_59418 = (state_59429[(2)]);
var inst_59419 = cljs.core.async.close_BANG_(out);
var state_59429__$1 = (function (){var statearr_59495 = state_59429;
(statearr_59495[(13)] = inst_59418);

return statearr_59495;
})();
var statearr_59498_60944 = state_59429__$1;
(statearr_59498_60944[(2)] = inst_59419);

(statearr_59498_60944[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59434 === (10))){
var inst_59407 = (state_59429[(2)]);
var state_59429__$1 = state_59429;
var statearr_59499_60945 = state_59429__$1;
(statearr_59499_60945[(2)] = inst_59407);

(statearr_59499_60945[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59434 === (8))){
var inst_59396 = (state_59429[(11)]);
var inst_59385 = (state_59429[(7)]);
var tmp59494 = inst_59385;
var inst_59385__$1 = tmp59494;
var inst_59386 = inst_59396;
var state_59429__$1 = (function (){var statearr_59502 = state_59429;
(statearr_59502[(7)] = inst_59385__$1);

(statearr_59502[(8)] = inst_59386);

return statearr_59502;
})();
var statearr_59503_60946 = state_59429__$1;
(statearr_59503_60946[(2)] = null);

(statearr_59503_60946[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
return (function() {
var cljs$core$async$state_machine__56775__auto__ = null;
var cljs$core$async$state_machine__56775__auto____0 = (function (){
var statearr_59504 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_59504[(0)] = cljs$core$async$state_machine__56775__auto__);

(statearr_59504[(1)] = (1));

return statearr_59504;
});
var cljs$core$async$state_machine__56775__auto____1 = (function (state_59429){
while(true){
var ret_value__56776__auto__ = (function (){try{while(true){
var result__56777__auto__ = switch__56774__auto__(state_59429);
if(cljs.core.keyword_identical_QMARK_(result__56777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__56777__auto__;
}
break;
}
}catch (e59505){var ex__56778__auto__ = e59505;
var statearr_59506_60947 = state_59429;
(statearr_59506_60947[(2)] = ex__56778__auto__);


if(cljs.core.seq((state_59429[(4)]))){
var statearr_59507_60948 = state_59429;
(statearr_59507_60948[(1)] = cljs.core.first((state_59429[(4)])));

} else {
throw ex__56778__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__56776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60949 = state_59429;
state_59429 = G__60949;
continue;
} else {
return ret_value__56776__auto__;
}
break;
}
});
cljs$core$async$state_machine__56775__auto__ = function(state_59429){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__56775__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__56775__auto____1.call(this,state_59429);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__56775__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__56775__auto____0;
cljs$core$async$state_machine__56775__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__56775__auto____1;
return cljs$core$async$state_machine__56775__auto__;
})()
})();
var state__56879__auto__ = (function (){var statearr_59508 = f__56878__auto__();
(statearr_59508[(6)] = c__56877__auto___60726);

return statearr_59508;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56879__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__59512 = arguments.length;
switch (G__59512) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__56877__auto___60951 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56878__auto__ = (function (){var switch__56774__auto__ = (function (state_59558){
var state_val_59559 = (state_59558[(1)]);
if((state_val_59559 === (7))){
var inst_59554 = (state_59558[(2)]);
var state_59558__$1 = state_59558;
var statearr_59562_60952 = state_59558__$1;
(statearr_59562_60952[(2)] = inst_59554);

(statearr_59562_60952[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59559 === (1))){
var inst_59517 = [];
var inst_59518 = inst_59517;
var inst_59519 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_59558__$1 = (function (){var statearr_59564 = state_59558;
(statearr_59564[(7)] = inst_59519);

(statearr_59564[(8)] = inst_59518);

return statearr_59564;
})();
var statearr_59566_60953 = state_59558__$1;
(statearr_59566_60953[(2)] = null);

(statearr_59566_60953[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59559 === (4))){
var inst_59522 = (state_59558[(9)]);
var inst_59522__$1 = (state_59558[(2)]);
var inst_59523 = (inst_59522__$1 == null);
var inst_59524 = cljs.core.not(inst_59523);
var state_59558__$1 = (function (){var statearr_59569 = state_59558;
(statearr_59569[(9)] = inst_59522__$1);

return statearr_59569;
})();
if(inst_59524){
var statearr_59571_60954 = state_59558__$1;
(statearr_59571_60954[(1)] = (5));

} else {
var statearr_59572_60955 = state_59558__$1;
(statearr_59572_60955[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59559 === (15))){
var inst_59548 = (state_59558[(2)]);
var state_59558__$1 = state_59558;
var statearr_59573_60956 = state_59558__$1;
(statearr_59573_60956[(2)] = inst_59548);

(statearr_59573_60956[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59559 === (13))){
var state_59558__$1 = state_59558;
var statearr_59574_60957 = state_59558__$1;
(statearr_59574_60957[(2)] = null);

(statearr_59574_60957[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59559 === (6))){
var inst_59518 = (state_59558[(8)]);
var inst_59543 = inst_59518.length;
var inst_59544 = (inst_59543 > (0));
var state_59558__$1 = state_59558;
if(cljs.core.truth_(inst_59544)){
var statearr_59575_60958 = state_59558__$1;
(statearr_59575_60958[(1)] = (12));

} else {
var statearr_59576_60959 = state_59558__$1;
(statearr_59576_60959[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59559 === (3))){
var inst_59556 = (state_59558[(2)]);
var state_59558__$1 = state_59558;
return cljs.core.async.impl.ioc_helpers.return_chan(state_59558__$1,inst_59556);
} else {
if((state_val_59559 === (12))){
var inst_59518 = (state_59558[(8)]);
var inst_59546 = cljs.core.vec(inst_59518);
var state_59558__$1 = state_59558;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_59558__$1,(15),out,inst_59546);
} else {
if((state_val_59559 === (2))){
var state_59558__$1 = state_59558;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59558__$1,(4),ch);
} else {
if((state_val_59559 === (11))){
var inst_59522 = (state_59558[(9)]);
var inst_59526 = (state_59558[(10)]);
var inst_59536 = (state_59558[(2)]);
var inst_59537 = [];
var inst_59538 = inst_59537.push(inst_59522);
var inst_59518 = inst_59537;
var inst_59519 = inst_59526;
var state_59558__$1 = (function (){var statearr_59581 = state_59558;
(statearr_59581[(7)] = inst_59519);

(statearr_59581[(8)] = inst_59518);

(statearr_59581[(11)] = inst_59538);

(statearr_59581[(12)] = inst_59536);

return statearr_59581;
})();
var statearr_59587_60961 = state_59558__$1;
(statearr_59587_60961[(2)] = null);

(statearr_59587_60961[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59559 === (9))){
var inst_59518 = (state_59558[(8)]);
var inst_59534 = cljs.core.vec(inst_59518);
var state_59558__$1 = state_59558;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_59558__$1,(11),out,inst_59534);
} else {
if((state_val_59559 === (5))){
var inst_59519 = (state_59558[(7)]);
var inst_59522 = (state_59558[(9)]);
var inst_59526 = (state_59558[(10)]);
var inst_59526__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_59522) : f.call(null,inst_59522));
var inst_59527 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_59526__$1,inst_59519);
var inst_59528 = cljs.core.keyword_identical_QMARK_(inst_59519,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_59529 = ((inst_59527) || (inst_59528));
var state_59558__$1 = (function (){var statearr_59592 = state_59558;
(statearr_59592[(10)] = inst_59526__$1);

return statearr_59592;
})();
if(cljs.core.truth_(inst_59529)){
var statearr_59593_60962 = state_59558__$1;
(statearr_59593_60962[(1)] = (8));

} else {
var statearr_59594_60963 = state_59558__$1;
(statearr_59594_60963[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59559 === (14))){
var inst_59551 = (state_59558[(2)]);
var inst_59552 = cljs.core.async.close_BANG_(out);
var state_59558__$1 = (function (){var statearr_59598 = state_59558;
(statearr_59598[(13)] = inst_59551);

return statearr_59598;
})();
var statearr_59599_60964 = state_59558__$1;
(statearr_59599_60964[(2)] = inst_59552);

(statearr_59599_60964[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59559 === (10))){
var inst_59541 = (state_59558[(2)]);
var state_59558__$1 = state_59558;
var statearr_59600_60965 = state_59558__$1;
(statearr_59600_60965[(2)] = inst_59541);

(statearr_59600_60965[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59559 === (8))){
var inst_59518 = (state_59558[(8)]);
var inst_59522 = (state_59558[(9)]);
var inst_59526 = (state_59558[(10)]);
var inst_59531 = inst_59518.push(inst_59522);
var tmp59597 = inst_59518;
var inst_59518__$1 = tmp59597;
var inst_59519 = inst_59526;
var state_59558__$1 = (function (){var statearr_59607 = state_59558;
(statearr_59607[(7)] = inst_59519);

(statearr_59607[(8)] = inst_59518__$1);

(statearr_59607[(14)] = inst_59531);

return statearr_59607;
})();
var statearr_59610_60966 = state_59558__$1;
(statearr_59610_60966[(2)] = null);

(statearr_59610_60966[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
return (function() {
var cljs$core$async$state_machine__56775__auto__ = null;
var cljs$core$async$state_machine__56775__auto____0 = (function (){
var statearr_59616 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_59616[(0)] = cljs$core$async$state_machine__56775__auto__);

(statearr_59616[(1)] = (1));

return statearr_59616;
});
var cljs$core$async$state_machine__56775__auto____1 = (function (state_59558){
while(true){
var ret_value__56776__auto__ = (function (){try{while(true){
var result__56777__auto__ = switch__56774__auto__(state_59558);
if(cljs.core.keyword_identical_QMARK_(result__56777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__56777__auto__;
}
break;
}
}catch (e59622){var ex__56778__auto__ = e59622;
var statearr_59623_60967 = state_59558;
(statearr_59623_60967[(2)] = ex__56778__auto__);


if(cljs.core.seq((state_59558[(4)]))){
var statearr_59625_60968 = state_59558;
(statearr_59625_60968[(1)] = cljs.core.first((state_59558[(4)])));

} else {
throw ex__56778__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__56776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60970 = state_59558;
state_59558 = G__60970;
continue;
} else {
return ret_value__56776__auto__;
}
break;
}
});
cljs$core$async$state_machine__56775__auto__ = function(state_59558){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__56775__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__56775__auto____1.call(this,state_59558);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__56775__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__56775__auto____0;
cljs$core$async$state_machine__56775__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__56775__auto____1;
return cljs$core$async$state_machine__56775__auto__;
})()
})();
var state__56879__auto__ = (function (){var statearr_59637 = f__56878__auto__();
(statearr_59637[(6)] = c__56877__auto___60951);

return statearr_59637;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56879__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
