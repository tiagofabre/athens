goog.provide('tick.interval');
tick.interval.make_interval = (function tick$interval$make_interval(beginning,end){
if(cljs.core.truth_(tick.core._LT_(beginning,end))){
} else {
throw (new Error("Assert failed: (t/< beginning end)"));
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("tick","beginning","tick/beginning",82659968),beginning,new cljs.core.Keyword("tick","end","tick/end",-269896517),end], null);
});
tick.interval.temporal_QMARK_ = (function tick$interval$temporal_QMARK_(o){
return java.time.temporal.Temporal.isPrototypeOf(cljs.core.type(o));
});
tick.interval.temporal_amount_QMARK_ = (function tick$interval$temporal_amount_QMARK_(o){
return java.time.temporal.TemporalAmount.isPrototypeOf(cljs.core.type(o));
});

/**
 * @interface
 */
tick.interval.ITimeSpanable = function(){};

var tick$interval$ITimeSpanable$temporal_value$dyn_74201 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (tick.interval.temporal_value[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (tick.interval.temporal_value["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("ITimeSpanable.temporal-value",_);
}
}
});
/**
 * Return a value of a type that satisfies t/ITimeSpan
 */
tick.interval.temporal_value = (function tick$interval$temporal_value(_){
if((((!((_ == null)))) && ((!((_.tick$interval$ITimeSpanable$temporal_value$arity$1 == null)))))){
return _.tick$interval$ITimeSpanable$temporal_value$arity$1(_);
} else {
return tick$interval$ITimeSpanable$temporal_value$dyn_74201(_);
}
});

(java.time.YearMonth.prototype.tick$interval$ITimeSpanable$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.YearMonth.prototype.tick$interval$ITimeSpanable$temporal_value$arity$1 = (function (ym){
var ym__$1 = this;
return ym__$1;
}));

(java.time.Year.prototype.tick$interval$ITimeSpanable$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.Year.prototype.tick$interval$ITimeSpanable$temporal_value$arity$1 = (function (y){
var y__$1 = this;
return y__$1;
}));

(java.time.ZonedDateTime.prototype.tick$interval$ITimeSpanable$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.ZonedDateTime.prototype.tick$interval$ITimeSpanable$temporal_value$arity$1 = (function (zdt){
var zdt__$1 = this;
return zdt__$1;
}));

(java.time.Instant.prototype.tick$interval$ITimeSpanable$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.Instant.prototype.tick$interval$ITimeSpanable$temporal_value$arity$1 = (function (i){
var i__$1 = this;
return i__$1;
}));

(Date.prototype.tick$interval$ITimeSpanable$ = cljs.core.PROTOCOL_SENTINEL);

(Date.prototype.tick$interval$ITimeSpanable$temporal_value$arity$1 = (function (d){
var d__$1 = this;
return tick.core.instant(d__$1);
}));

(java.time.LocalDate.prototype.tick$interval$ITimeSpanable$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.LocalDate.prototype.tick$interval$ITimeSpanable$temporal_value$arity$1 = (function (d){
var d__$1 = this;
return d__$1;
}));

goog.object.set(tick.interval.ITimeSpanable,"string",true);

goog.object.set(tick.interval.temporal_value,"string",(function (s){
return tick.interval.temporal_value(tick.core.parse(s));
}));

goog.object.set(tick.interval.ITimeSpanable,"function",true);

goog.object.set(tick.interval.temporal_value,"function",(function (f){
return tick.interval.temporal_value((f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null)));
}));

(java.time.LocalTime.prototype.tick$interval$ITimeSpanable$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.LocalTime.prototype.tick$interval$ITimeSpanable$temporal_value$arity$1 = (function (t){
var t__$1 = this;
return t__$1;
}));

(java.time.OffsetDateTime.prototype.tick$interval$ITimeSpanable$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.OffsetDateTime.prototype.tick$interval$ITimeSpanable$temporal_value$arity$1 = (function (odt){
var odt__$1 = this;
return odt__$1;
}));

(java.time.LocalDateTime.prototype.tick$interval$ITimeSpanable$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.LocalDateTime.prototype.tick$interval$ITimeSpanable$temporal_value$arity$1 = (function (ldt){
var ldt__$1 = this;
return ldt__$1;
}));
tick.interval.new_interval = (function tick$interval$new_interval(v1,v2){
var t1 = tick.core.beginning(tick.interval.temporal_value(v1));
var t2 = tick.core.end(tick.interval.temporal_value(v2));
if(cljs.core.truth_(tick.core._LT_(t1,t2))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("tick","beginning","tick/beginning",82659968),t1,new cljs.core.Keyword("tick","end","tick/end",-269896517),t2], null);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Interval must span between two times, the first must be before the second",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("tick","beginning","tick/beginning",82659968),v1,new cljs.core.Keyword("tick","end","tick/end",-269896517),v2], null));
}
});
tick.interval.extend = (function tick$interval$extend(ival,dur){
return tick.interval.make_interval(tick.core.beginning(ival),tick.core.forward_duration(tick.core.end(ival),dur));
});
tick.interval.scale = (function tick$interval$scale(ival,factor){
return tick.interval.make_interval(tick.core.beginning(ival),tick.core.forward_duration(tick.core.beginning(ival),cljc.java_time.duration.multiplied_by(tick.core.duration(ival),factor)));
});
(cljs.core.PersistentArrayMap.prototype.tick$core$ITimeShift$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentArrayMap.prototype.tick$core$ITimeShift$forward_duration$arity$2 = (function (ival,d){
var ival__$1 = this;
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(ival__$1,new cljs.core.Keyword("tick","beginning","tick/beginning",82659968),(function (p1__73688_SHARP_){
return tick.core.forward_duration(p1__73688_SHARP_,d);
})),new cljs.core.Keyword("tick","end","tick/end",-269896517),(function (p1__73690_SHARP_){
return tick.core.forward_duration(p1__73690_SHARP_,d);
}));
}));

(cljs.core.PersistentArrayMap.prototype.tick$core$ITimeShift$backward_duration$arity$2 = (function (ival,d){
var ival__$1 = this;
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(ival__$1,new cljs.core.Keyword("tick","beginning","tick/beginning",82659968),(function (p1__73691_SHARP_){
return tick.core.backward_duration(p1__73691_SHARP_,d);
})),new cljs.core.Keyword("tick","end","tick/end",-269896517),(function (p1__73692_SHARP_){
return tick.core.backward_duration(p1__73692_SHARP_,d);
}));
}));
(cljs.core.PersistentArrayMap.prototype.tick$core$ITimeReify$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentArrayMap.prototype.tick$core$ITimeReify$on$arity$2 = (function (i,date){
var i__$1 = this;
return tick.interval.new_interval(tick.core.on(tick.core.beginning(i__$1),date),tick.core.on(tick.core.end(i__$1),date));
}));

(cljs.core.PersistentArrayMap.prototype.tick$core$ITimeReify$in$arity$2 = (function (i,zone){
var i__$1 = this;
return tick.interval.new_interval(tick.core.in$(tick.core.beginning(i__$1),zone),tick.core.in$(tick.core.end(i__$1),zone));
}));
tick.interval.bounds = (function tick$interval$bounds(var_args){
var args__4742__auto__ = [];
var len__4736__auto___74229 = arguments.length;
var i__4737__auto___74230 = (0);
while(true){
if((i__4737__auto___74230 < len__4736__auto___74229)){
args__4742__auto__.push((arguments[i__4737__auto___74230]));

var G__74232 = (i__4737__auto___74230 + (1));
i__4737__auto___74230 = G__74232;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return tick.interval.bounds.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(tick.interval.bounds.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return tick.interval.make_interval(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(tick.core.min,cljs.core.map.cljs$core$IFn$_invoke$arity$2(tick.core.beginning,args)),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(tick.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(tick.core.end,args)));
}));

(tick.interval.bounds.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(tick.interval.bounds.cljs$lang$applyTo = (function (seq73698){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq73698));
}));

tick.interval.am = (function tick$interval$am(date){
return tick.interval.new_interval(tick.core.beginning(date),tick.core.noon.cljs$core$IFn$_invoke$arity$1(date));
});
tick.interval.pm = (function tick$interval$pm(date){
return tick.interval.new_interval(tick.core.noon.cljs$core$IFn$_invoke$arity$1(date),tick.core.end(date));
});
tick.interval.precedes_QMARK_ = (function tick$interval$precedes_QMARK_(x,y){
return tick.core._LT_(tick.core.end(x),tick.core.beginning(y));
});
tick.interval.equals_QMARK_ = (function tick$interval$equals_QMARK_(x,y){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tick.core.beginning(x),tick.core.beginning(y))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tick.core.end(x),tick.core.end(y))));
});
tick.interval.meets_QMARK_ = (function tick$interval$meets_QMARK_(x,y){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tick.core.end(x),tick.core.beginning(y));
});
tick.interval.overlaps_QMARK_ = (function tick$interval$overlaps_QMARK_(x,y){
var and__4115__auto__ = tick.core._LT_(tick.core.beginning(x),tick.core.beginning(y));
if(cljs.core.truth_(and__4115__auto__)){
var and__4115__auto____$1 = tick.core._GT_(tick.core.end(x),tick.core.beginning(y));
if(cljs.core.truth_(and__4115__auto____$1)){
return tick.core._LT_(tick.core.end(x),tick.core.end(y));
} else {
return and__4115__auto____$1;
}
} else {
return and__4115__auto__;
}
});
tick.interval.during_QMARK_ = (function tick$interval$during_QMARK_(x,y){
var and__4115__auto__ = tick.core._GT_(tick.core.beginning(x),tick.core.beginning(y));
if(cljs.core.truth_(and__4115__auto__)){
return tick.core._LT_(tick.core.end(x),tick.core.end(y));
} else {
return and__4115__auto__;
}
});
tick.interval.starts_QMARK_ = (function tick$interval$starts_QMARK_(x,y){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tick.core.beginning(x),tick.core.beginning(y))){
return tick.core._LT_(tick.core.end(x),tick.core.end(y));
} else {
return false;
}
});
tick.interval.finishes_QMARK_ = (function tick$interval$finishes_QMARK_(x,y){
var and__4115__auto__ = tick.core._GT_(tick.core.beginning(x),tick.core.beginning(y));
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tick.core.end(x),tick.core.end(y));
} else {
return and__4115__auto__;
}
});
/**
 * The converse of a basic relation.
 */
tick.interval.conv = (function tick$interval$conv(f){
return (function (x,y){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(y,x) : f.call(null,y,x));
});
});
tick.interval.preceded_by_QMARK_ = (function tick$interval$preceded_by_QMARK_(x,y){
return tick.interval.conv(tick.interval.precedes_QMARK_)(x,y);
});
tick.interval.met_by_QMARK_ = (function tick$interval$met_by_QMARK_(x,y){
return tick.interval.conv(tick.interval.meets_QMARK_)(x,y);
});
tick.interval.overlapped_by_QMARK_ = (function tick$interval$overlapped_by_QMARK_(x,y){
return tick.interval.conv(tick.interval.overlaps_QMARK_)(x,y);
});
tick.interval.finished_by_QMARK_ = (function tick$interval$finished_by_QMARK_(x,y){
return tick.interval.conv(tick.interval.finishes_QMARK_)(x,y);
});
tick.interval.contains_QMARK_ = (function tick$interval$contains_QMARK_(x,y){
return tick.interval.conv(tick.interval.during_QMARK_)(x,y);
});
tick.interval.started_by_QMARK_ = (function tick$interval$started_by_QMARK_(x,y){
return tick.interval.conv(tick.interval.starts_QMARK_)(x,y);
});
tick.interval.relation__GT_kw = cljs.core.PersistentHashMap.fromArrays([tick.interval.contains_QMARK_,tick.interval.starts_QMARK_,tick.interval.started_by_QMARK_,tick.interval.overlaps_QMARK_,tick.interval.equals_QMARK_,tick.interval.meets_QMARK_,tick.interval.met_by_QMARK_,tick.interval.finished_by_QMARK_,tick.interval.preceded_by_QMARK_,tick.interval.precedes_QMARK_,tick.interval.during_QMARK_,tick.interval.overlapped_by_QMARK_,tick.interval.finishes_QMARK_],[new cljs.core.Keyword(null,"contains","contains",676899812),new cljs.core.Keyword(null,"starts","starts",-1501572425),new cljs.core.Keyword(null,"started-by","started-by",1211835163),new cljs.core.Keyword(null,"overlaps","overlaps",1398230580),new cljs.core.Keyword(null,"equals","equals",-463033970),new cljs.core.Keyword(null,"meets","meets",-1936224493),new cljs.core.Keyword(null,"met-by","met-by",-2020460159),new cljs.core.Keyword(null,"finished-by","finished-by",-1361081637),new cljs.core.Keyword(null,"preceded-by","preceded-by",1381560976),new cljs.core.Keyword(null,"precedes","precedes",-1540274203),new cljs.core.Keyword(null,"during","during",351301349),new cljs.core.Keyword(null,"overlapped-by","overlapped-by",1890442040),new cljs.core.Keyword(null,"finishes","finishes",-431359586)]);
tick.interval.basic_relations = new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [tick.interval.precedes_QMARK_,tick.interval.meets_QMARK_,tick.interval.overlaps_QMARK_,tick.interval.finished_by_QMARK_,tick.interval.contains_QMARK_,tick.interval.starts_QMARK_,tick.interval.equals_QMARK_,tick.interval.started_by_QMARK_,tick.interval.during_QMARK_,tick.interval.finishes_QMARK_,tick.interval.overlapped_by_QMARK_,tick.interval.met_by_QMARK_,tick.interval.preceded_by_QMARK_], null);

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IFn}
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
tick.interval.GeneralRelation = (function (relations,__meta,__extmap,__hash){
this.relations = relations;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716171;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(tick.interval.GeneralRelation.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(tick.interval.GeneralRelation.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k73732,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__73742 = k73732;
var G__73742__$1 = (((G__73742 instanceof cljs.core.Keyword))?G__73742.fqn:null);
switch (G__73742__$1) {
case "relations":
return self__.relations;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k73732,else__4383__auto__);

}
}));

(tick.interval.GeneralRelation.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__73747){
var vec__73749 = p__73747;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73749,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73749,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(tick.interval.GeneralRelation.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#tick.interval.GeneralRelation{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"relations","relations",-427124442),self__.relations],null))], null),self__.__extmap));
}));

(tick.interval.GeneralRelation.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__73731){
var self__ = this;
var G__73731__$1 = this;
return (new cljs.core.RecordIter((0),G__73731__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"relations","relations",-427124442)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(tick.interval.GeneralRelation.prototype.call = (function (unused__10806__auto__){
var self__ = this;
var self__ = this;
var G__73762 = (arguments.length - (1));
switch (G__73762) {
case (2):
return self__.cljs$core$IFn$_invoke$arity$2((arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(tick.interval.GeneralRelation.prototype.apply = (function (self__,args73736){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args73736)));
}));

(tick.interval.GeneralRelation.prototype.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
var self__ = this;
var _ = this;
return cljs.core.some((function (f){
if(cljs.core.truth_((f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(x,y) : f.call(null,x,y)))){
return f;
} else {
return null;
}
}),self__.relations);
}));

(tick.interval.GeneralRelation.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(tick.interval.GeneralRelation.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new tick.interval.GeneralRelation(self__.relations,self__.__meta,self__.__extmap,self__.__hash));
}));

(tick.interval.GeneralRelation.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(tick.interval.GeneralRelation.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-248703908 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(tick.interval.GeneralRelation.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this73733,other73734){
var self__ = this;
var this73733__$1 = this;
return (((!((other73734 == null)))) && ((this73733__$1.constructor === other73734.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this73733__$1.relations,other73734.relations)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this73733__$1.__extmap,other73734.__extmap)));
}));

(tick.interval.GeneralRelation.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"relations","relations",-427124442),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new tick.interval.GeneralRelation(self__.relations,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(tick.interval.GeneralRelation.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__73731){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__73772 = cljs.core.keyword_identical_QMARK_;
var expr__73773 = k__4388__auto__;
if(cljs.core.truth_((pred__73772.cljs$core$IFn$_invoke$arity$2 ? pred__73772.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"relations","relations",-427124442),expr__73773) : pred__73772.call(null,new cljs.core.Keyword(null,"relations","relations",-427124442),expr__73773)))){
return (new tick.interval.GeneralRelation(G__73731,self__.__meta,self__.__extmap,null));
} else {
return (new tick.interval.GeneralRelation(self__.relations,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__73731),null));
}
}));

(tick.interval.GeneralRelation.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"relations","relations",-427124442),self__.relations,null))], null),self__.__extmap));
}));

(tick.interval.GeneralRelation.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__73731){
var self__ = this;
var this__4379__auto____$1 = this;
return (new tick.interval.GeneralRelation(self__.relations,G__73731,self__.__extmap,self__.__hash));
}));

(tick.interval.GeneralRelation.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(tick.interval.GeneralRelation.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"relations","relations",1213407085,null)], null);
}));

(tick.interval.GeneralRelation.cljs$lang$type = true);

(tick.interval.GeneralRelation.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"tick.interval/GeneralRelation",null,(1),null));
}));

(tick.interval.GeneralRelation.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"tick.interval/GeneralRelation");
}));

/**
 * Positional factory function for tick.interval/GeneralRelation.
 */
tick.interval.__GT_GeneralRelation = (function tick$interval$__GT_GeneralRelation(relations){
return (new tick.interval.GeneralRelation(relations,null,null,null));
});

/**
 * Factory function for tick.interval/GeneralRelation, taking a map of keywords to field values.
 */
tick.interval.map__GT_GeneralRelation = (function tick$interval$map__GT_GeneralRelation(G__73735){
var extmap__4419__auto__ = (function (){var G__73790 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__73735,new cljs.core.Keyword(null,"relations","relations",-427124442));
if(cljs.core.record_QMARK_(G__73735)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__73790);
} else {
return G__73790;
}
})();
return (new tick.interval.GeneralRelation(new cljs.core.Keyword(null,"relations","relations",-427124442).cljs$core$IFn$_invoke$arity$1(G__73735),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

tick.interval.new_relation = (function tick$interval$new_relation(var_args){
var args__4742__auto__ = [];
var len__4736__auto___74269 = arguments.length;
var i__4737__auto___74270 = (0);
while(true){
if((i__4737__auto___74270 < len__4736__auto___74269)){
args__4742__auto__.push((arguments[i__4737__auto___74270]));

var G__74276 = (i__4737__auto___74270 + (1));
i__4737__auto___74270 = G__74276;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return tick.interval.new_relation.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(tick.interval.new_relation.cljs$core$IFn$_invoke$arity$variadic = (function (basic_relations){
return tick.interval.__GT_GeneralRelation(basic_relations);
}));

(tick.interval.new_relation.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(tick.interval.new_relation.cljs$lang$applyTo = (function (seq73794){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq73794));
}));

/**
 * A function to determine the (basic) relation between two intervals.
 */
tick.interval.basic_relation = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(tick.interval.new_relation,tick.interval.basic_relations);
tick.interval.relation = (function tick$interval$relation(x,y){
var G__73809 = (tick.interval.basic_relation.cljs$core$IFn$_invoke$arity$2 ? tick.interval.basic_relation.cljs$core$IFn$_invoke$arity$2(x,y) : tick.interval.basic_relation.call(null,x,y));
return (tick.interval.relation__GT_kw.cljs$core$IFn$_invoke$arity$1 ? tick.interval.relation__GT_kw.cljs$core$IFn$_invoke$arity$1(G__73809) : tick.interval.relation__GT_kw.call(null,G__73809));
});
/**
 * Return the complement of the general relation. The complement ~r of
 *   a relation r is the relation consisting of all basic relations not
 *   in r.
 */
tick.interval.complement_r = (function tick$interval$complement_r(r){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(r,new cljs.core.Keyword(null,"relations","relations",-427124442),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.set(new cljs.core.Keyword(null,"relations","relations",-427124442).cljs$core$IFn$_invoke$arity$1(r)),tick.interval.basic_relations));
});
tick.interval.not_yet_implemented = (function tick$interval$not_yet_implemented(){
return (new Error("Not yet implemented"));
});
/**
 * Return the composition of r and s
 */
tick.interval.compose_r = (function tick$interval$compose_r(r,s){
throw tick.interval.not_yet_implemented();
});
/**
 * Return the converse of the given general relation. The converse !r
 *   of a relation r is the relation consisting of the converses of all
 *   basic relations in r.
 */
tick.interval.converse_r = (function tick$interval$converse_r(r){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(r,new cljs.core.Keyword(null,"relations","relations",-427124442),cljs.core.map.cljs$core$IFn$_invoke$arity$2(tick.interval.conv,new cljs.core.Keyword(null,"relations","relations",-427124442).cljs$core$IFn$_invoke$arity$1(r)));
});
/**
 * Return the intersection of the r with s
 */
tick.interval.intersection_r = (function tick$interval$intersection_r(r,s){
if(cljs.core.truth_(cljs.spec.alpha._STAR_compile_asserts_STAR_)){
if(cljs.core.truth_(cljs.core.deref(new cljs.core.Var(function(){return cljs.spec.alpha._STAR_runtime_asserts_STAR_;},new cljs.core.Symbol("cljs.spec.alpha","*runtime-asserts*","cljs.spec.alpha/*runtime-asserts*",-1060443587,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.spec.alpha","cljs.spec.alpha",505122844,null),new cljs.core.Symbol(null,"*runtime-asserts*","*runtime-asserts*",1632801956,null),"cljs/spec/alpha.cljs",20,1,true,1480,1482,cljs.core.List.EMPTY,null,(cljs.core.truth_(cljs.spec.alpha._STAR_runtime_asserts_STAR_)?cljs.spec.alpha._STAR_runtime_asserts_STAR_.cljs$lang$test:null)]))))){
cljs.spec.alpha.assert_STAR_(r,(function (p1__73819_SHARP_){
return (p1__73819_SHARP_ instanceof tick.interval.GeneralRelation);
}));
} else {
}
} else {
}

tick.interval.__GT_GeneralRelation(clojure.set.intersection.cljs$core$IFn$_invoke$arity$1(cljs.core.set(new cljs.core.Keyword(null,"relations","relations",-427124442).cljs$core$IFn$_invoke$arity$1(r))));

throw tick.interval.not_yet_implemented();
});
tick.interval.disjoint_QMARK_ = tick.interval.new_relation.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tick.interval.precedes_QMARK_,tick.interval.preceded_by_QMARK_,tick.interval.meets_QMARK_,tick.interval.met_by_QMARK_], 0));
tick.interval.concur_QMARK_ = tick.interval.complement_r(tick.interval.disjoint_QMARK_);
tick.interval.precedes_or_meets_QMARK_ = tick.interval.new_relation.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tick.interval.precedes_QMARK_,tick.interval.meets_QMARK_], 0));

/**
 * @interface
 */
tick.interval.IIntervalOps = function(){};

var tick$interval$IIntervalOps$slice$dyn_74322 = (function (this$,beginning,end){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (tick.interval.slice[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(this$,beginning,end) : m__4429__auto__.call(null,this$,beginning,end));
} else {
var m__4426__auto__ = (tick.interval.slice["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(this$,beginning,end) : m__4426__auto__.call(null,this$,beginning,end));
} else {
throw cljs.core.missing_protocol("IIntervalOps.slice",this$);
}
}
});
/**
 * Fit the interval between beginning and end, slicing off one or both ends as necessary
 */
tick.interval.slice = (function tick$interval$slice(this$,beginning,end){
if((((!((this$ == null)))) && ((!((this$.tick$interval$IIntervalOps$slice$arity$3 == null)))))){
return this$.tick$interval$IIntervalOps$slice$arity$3(this$,beginning,end);
} else {
return tick$interval$IIntervalOps$slice$dyn_74322(this$,beginning,end);
}
});

var tick$interval$IIntervalOps$splice$dyn_74335 = (function (this$,ival){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (tick.interval.splice[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(this$,ival) : m__4429__auto__.call(null,this$,ival));
} else {
var m__4426__auto__ = (tick.interval.splice["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(this$,ival) : m__4426__auto__.call(null,this$,ival));
} else {
throw cljs.core.missing_protocol("IIntervalOps.splice",this$);
}
}
});
/**
 * Splice another interval on to this one
 */
tick.interval.splice = (function tick$interval$splice(this$,ival){
if((((!((this$ == null)))) && ((!((this$.tick$interval$IIntervalOps$splice$arity$2 == null)))))){
return this$.tick$interval$IIntervalOps$splice$arity$2(this$,ival);
} else {
return tick$interval$IIntervalOps$splice$dyn_74335(this$,ival);
}
});

var tick$interval$IIntervalOps$split$dyn_74345 = (function (this$,t){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (tick.interval.split[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(this$,t) : m__4429__auto__.call(null,this$,t));
} else {
var m__4426__auto__ = (tick.interval.split["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(this$,t) : m__4426__auto__.call(null,this$,t));
} else {
throw cljs.core.missing_protocol("IIntervalOps.split",this$);
}
}
});
/**
 * Split ival into 2 intervals at t, returned as a 2-element vector
 */
tick.interval.split = (function tick$interval$split(this$,t){
if((((!((this$ == null)))) && ((!((this$.tick$interval$IIntervalOps$split$arity$2 == null)))))){
return this$.tick$interval$IIntervalOps$split$arity$2(this$,t);
} else {
return tick$interval$IIntervalOps$split$dyn_74345(this$,t);
}
});

tick.interval.split_with_assert = (function tick$interval$split_with_assert(ival,t){
if(cljs.core.truth_((function (){var and__4115__auto__ = tick.core._LT_(tick.core.beginning(ival),t);
if(cljs.core.truth_(and__4115__auto__)){
return tick.core._LT_(t,tick.core.end(ival));
} else {
return and__4115__auto__;
}
})())){
} else {
throw (new Error("Assert failed: (and (t/< (t/beginning ival) t) (t/< t (t/end ival)))"));
}

return tick.interval.split(ival,t);
});
tick.interval.slice_interval = (function tick$interval$slice_interval(ival,beginning,end){
var beginning__$1 = tick.core.max.cljs$core$IFn$_invoke$arity$variadic(tick.core.beginning(ival),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([beginning], 0));
var end__$1 = tick.core.min.cljs$core$IFn$_invoke$arity$variadic(tick.core.end(ival),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([end], 0));
if(cljs.core.truth_(tick.core._LT_(beginning__$1,end__$1))){
if(cljs.core.associative_QMARK_(ival)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(ival,new cljs.core.Keyword("tick","beginning","tick/beginning",82659968),beginning__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("tick","end","tick/end",-269896517),end__$1], 0));
} else {
return tick.interval.make_interval(beginning__$1,end__$1);
}
} else {
return null;
}
});
tick.interval.split_interval = (function tick$interval$split_interval(ival,t){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tick.interval.slice_interval(ival,tick.core.beginning(ival),t),tick.interval.slice_interval(ival,t,tick.core.end(ival))], null);
});
tick.interval.flatten = (function tick$interval$flatten(s){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (x){
var temp__5733__auto__ = new cljs.core.Keyword("tick","intervals","tick/intervals",2091945314).cljs$core$IFn$_invoke$arity$1(x);
if(cljs.core.truth_(temp__5733__auto__)){
var ivals = temp__5733__auto__;
return ivals;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([s], 0));
});
(cljs.core.PersistentArrayMap.prototype.tick$interval$IIntervalOps$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentArrayMap.prototype.tick$interval$IIntervalOps$slice$arity$3 = (function (this$,beginning,end){
var this$__$1 = this;
var temp__5733__auto__ = new cljs.core.Keyword("tick","intervals","tick/intervals",2091945314).cljs$core$IFn$_invoke$arity$1(this$__$1);
if(cljs.core.truth_(temp__5733__auto__)){
var intervals = temp__5733__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(this$__$1,new cljs.core.Keyword("tick","intervals","tick/intervals",2091945314),cljs.core.vec(cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p1__73832_SHARP_){
return tick.interval.slice(p1__73832_SHARP_,beginning,end);
}),intervals)));
} else {
return tick.interval.slice_interval(this$__$1,beginning,end);
}
}));

(cljs.core.PersistentArrayMap.prototype.tick$interval$IIntervalOps$splice$arity$2 = (function (this$,other){
var this$__$1 = this;
var this_intervals = new cljs.core.Keyword("tick","intervals","tick/intervals",2091945314).cljs$core$IFn$_invoke$arity$1(this$__$1);
var other_intervals = new cljs.core.Keyword("tick","intervals","tick/intervals",2091945314).cljs$core$IFn$_invoke$arity$1(other);
if(cljs.core.truth_((function (){var and__4115__auto__ = this_intervals;
if(cljs.core.truth_(and__4115__auto__)){
return other_intervals;
} else {
return and__4115__auto__;
}
})())){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(this$__$1,new cljs.core.Keyword("tick","intervals","tick/intervals",2091945314),cljs.core.concat,other_intervals);
} else {
if(cljs.core.truth_(this_intervals)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(this$__$1,new cljs.core.Keyword("tick","intervals","tick/intervals",2091945314),cljs.core.conj,other);
} else {
if(cljs.core.truth_(other_intervals)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(other,new cljs.core.Keyword("tick","intervals","tick/intervals",2091945314),cljs.core.conj,this$__$1);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("tick","intervals","tick/intervals",2091945314),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1,other], null)], null);

}
}
}
}));

(cljs.core.PersistentArrayMap.prototype.tick$interval$IIntervalOps$split$arity$2 = (function (this$,t){
var this$__$1 = this;
var temp__5733__auto__ = new cljs.core.Keyword("tick","intervals","tick/intervals",2091945314).cljs$core$IFn$_invoke$arity$1(this$__$1);
if(cljs.core.truth_(temp__5733__auto__)){
var intervals = temp__5733__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(this$__$1,new cljs.core.Keyword("tick","intervals","tick/intervals",2091945314),cljs.core.vec(cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p1__73833_SHARP_){
return tick.interval.slice(p1__73833_SHARP_,tick.core.beginning(this$__$1),t);
}),intervals))),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(this$__$1,new cljs.core.Keyword("tick","intervals","tick/intervals",2091945314),cljs.core.vec(cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p1__73834_SHARP_){
return tick.interval.slice(p1__73834_SHARP_,t,tick.core.end(this$__$1));
}),intervals)))], null);
} else {
return tick.interval.split_interval(this$__$1,t);
}
}));

(java.time.LocalDate.prototype.tick$interval$IIntervalOps$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.LocalDate.prototype.tick$interval$IIntervalOps$slice$arity$3 = (function (this$,beginning,end){
var this$__$1 = this;
return tick.interval.slice_interval(this$__$1,beginning,end);
}));

(java.time.LocalDate.prototype.tick$interval$IIntervalOps$splice$arity$2 = (function (this$,ival){
var this$__$1 = this;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("splice not implemented",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"this","this",-611633625),this$__$1,new cljs.core.Keyword(null,"interval","interval",1708495417),ival], null));
}));

(java.time.LocalDate.prototype.tick$interval$IIntervalOps$split$arity$2 = (function (this$,t){
var this$__$1 = this;
return tick.interval.split_interval(this$__$1,t);
}));

(java.time.YearMonth.prototype.tick$interval$IIntervalOps$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.YearMonth.prototype.tick$interval$IIntervalOps$slice$arity$3 = (function (this$,beginning,end){
var this$__$1 = this;
return tick.interval.slice_interval(this$__$1,beginning,end);
}));

(java.time.YearMonth.prototype.tick$interval$IIntervalOps$splice$arity$2 = (function (this$,ival){
var this$__$1 = this;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("splice not implemented",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"this","this",-611633625),this$__$1,new cljs.core.Keyword(null,"interval","interval",1708495417),ival], null));
}));

(java.time.YearMonth.prototype.tick$interval$IIntervalOps$split$arity$2 = (function (this$,t){
var this$__$1 = this;
return tick.interval.split_interval(this$__$1,t);
}));

(java.time.Year.prototype.tick$interval$IIntervalOps$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.Year.prototype.tick$interval$IIntervalOps$slice$arity$3 = (function (this$,beginning,end){
var this$__$1 = this;
return tick.interval.slice_interval(this$__$1,beginning,end);
}));

(java.time.Year.prototype.tick$interval$IIntervalOps$splice$arity$2 = (function (this$,ival){
var this$__$1 = this;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("splice not implemented",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"this","this",-611633625),this$__$1,new cljs.core.Keyword(null,"interval","interval",1708495417),ival], null));
}));

(java.time.Year.prototype.tick$interval$IIntervalOps$split$arity$2 = (function (this$,t){
var this$__$1 = this;
return tick.interval.split_interval(this$__$1,t);
}));
/**
 * Return the interval representing the interval, if there is one,
 *   representing the interval of time the given intervals are
 *   concurrent.
 */
tick.interval.concur = (function tick$interval$concur(x,y){
var G__73845 = tick.interval.relation(x,y);
var G__73845__$1 = (((G__73845 instanceof cljs.core.Keyword))?G__73845.fqn:null);
switch (G__73845__$1) {
case "overlaps":
return tick.interval.slice(x,tick.core.beginning(y),tick.core.end(x));

break;
case "overlapped-by":
return tick.interval.slice(x,tick.core.beginning(x),tick.core.end(y));

break;
case "starts":
case "finishes":
case "during":
case "equals":
return x;

break;
case "started-by":
case "finished-by":
case "contains":
return tick.interval.slice(x,tick.core.beginning(y),tick.core.end(y));

break;
default:
return null;

}
});
/**
 * Return a sequence of occurances where intervals coincide (having
 *   non-nil concur intervals).
 */
tick.interval.concurrencies = (function tick$interval$concurrencies(var_args){
var args__4742__auto__ = [];
var len__4736__auto___74387 = arguments.length;
var i__4737__auto___74388 = (0);
while(true){
if((i__4737__auto___74388 < len__4736__auto___74387)){
args__4742__auto__.push((arguments[i__4737__auto___74388]));

var G__74389 = (i__4737__auto___74388 + (1));
i__4737__auto___74388 = G__74389;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return tick.interval.concurrencies.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(tick.interval.concurrencies.cljs$core$IFn$_invoke$arity$variadic = (function (intervals){
var intervals__$1 = cljs.core.vec(intervals);
var iter__4529__auto__ = (function tick$interval$iter__73850(s__73851){
return (new cljs.core.LazySeq(null,(function (){
var s__73851__$1 = s__73851;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__73851__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var xi = cljs.core.first(xs__6292__auto__);
var iterys__4525__auto__ = ((function (s__73851__$1,xi,xs__6292__auto__,temp__5735__auto__,intervals__$1){
return (function tick$interval$iter__73850_$_iter__73852(s__73853){
return (new cljs.core.LazySeq(null,((function (s__73851__$1,xi,xs__6292__auto__,temp__5735__auto__,intervals__$1){
return (function (){
var s__73853__$1 = s__73853;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__73853__$1);
if(temp__5735__auto____$1){
var s__73853__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__73853__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__73853__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__73855 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__73854 = (0);
while(true){
if((i__73854 < size__4528__auto__)){
var yi = cljs.core._nth(c__4527__auto__,i__73854);
if((xi < yi)){
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(intervals__$1,xi);
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(intervals__$1,yi);
var conc = tick.interval.concur(x,y);
if(cljs.core.truth_(conc)){
cljs.core.chunk_append(b__73855,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"relation","relation",-693437925),tick.interval.relation(x,y),new cljs.core.Keyword(null,"concur","concur",4812827),conc], null));

var G__74395 = (i__73854 + (1));
i__73854 = G__74395;
continue;
} else {
var G__74396 = (i__73854 + (1));
i__73854 = G__74396;
continue;
}
} else {
var G__74397 = (i__73854 + (1));
i__73854 = G__74397;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__73855),tick$interval$iter__73850_$_iter__73852(cljs.core.chunk_rest(s__73853__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__73855),null);
}
} else {
var yi = cljs.core.first(s__73853__$2);
if((xi < yi)){
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(intervals__$1,xi);
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(intervals__$1,yi);
var conc = tick.interval.concur(x,y);
if(cljs.core.truth_(conc)){
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"relation","relation",-693437925),tick.interval.relation(x,y),new cljs.core.Keyword(null,"concur","concur",4812827),conc], null),tick$interval$iter__73850_$_iter__73852(cljs.core.rest(s__73853__$2)));
} else {
var G__74400 = cljs.core.rest(s__73853__$2);
s__73853__$1 = G__74400;
continue;
}
} else {
var G__74401 = cljs.core.rest(s__73853__$2);
s__73853__$1 = G__74401;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__73851__$1,xi,xs__6292__auto__,temp__5735__auto__,intervals__$1))
,null,null));
});})(s__73851__$1,xi,xs__6292__auto__,temp__5735__auto__,intervals__$1))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(intervals__$1))));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,tick$interval$iter__73850(cljs.core.rest(s__73851__$1)));
} else {
var G__74403 = cljs.core.rest(s__73851__$1);
s__73851__$1 = G__74403;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(intervals__$1)));
}));

(tick.interval.concurrencies.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(tick.interval.concurrencies.cljs$lang$applyTo = (function (seq73847){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq73847));
}));

tick.interval.interval = (function tick$interval$interval(t){
return tick.interval.new_interval(tick.core.beginning(t),tick.core.end(t));
});
(cljs.core.PersistentArrayMap.prototype.tick$core$ITimeComparison$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentArrayMap.prototype.tick$core$ITimeComparison$_LT_$arity$2 = (function (x,y){
var x__$1 = this;
var G__73871 = (tick.interval.basic_relation.cljs$core$IFn$_invoke$arity$2 ? tick.interval.basic_relation.cljs$core$IFn$_invoke$arity$2(x__$1,y) : tick.interval.basic_relation.call(null,x__$1,y));
var fexpr__73870 = cljs.core.PersistentHashSet.createAsIfByAssoc([tick.interval.meets_QMARK_,tick.interval.precedes_QMARK_]);
return (fexpr__73870.cljs$core$IFn$_invoke$arity$1 ? fexpr__73870.cljs$core$IFn$_invoke$arity$1(G__73871) : fexpr__73870.call(null,G__73871));
}));

(cljs.core.PersistentArrayMap.prototype.tick$core$ITimeComparison$_LT__EQ_$arity$2 = (function (x,y){
var x__$1 = this;
var G__73873 = (tick.interval.basic_relation.cljs$core$IFn$_invoke$arity$2 ? tick.interval.basic_relation.cljs$core$IFn$_invoke$arity$2(x__$1,y) : tick.interval.basic_relation.call(null,x__$1,y));
var fexpr__73872 = cljs.core.PersistentHashSet.createAsIfByAssoc([tick.interval.starts_QMARK_,tick.interval.overlaps_QMARK_,tick.interval.equals_QMARK_,tick.interval.meets_QMARK_,tick.interval.finished_by_QMARK_,tick.interval.precedes_QMARK_]);
return (fexpr__73872.cljs$core$IFn$_invoke$arity$1 ? fexpr__73872.cljs$core$IFn$_invoke$arity$1(G__73873) : fexpr__73872.call(null,G__73873));
}));

(cljs.core.PersistentArrayMap.prototype.tick$core$ITimeComparison$_GT_$arity$2 = (function (x,y){
var x__$1 = this;
var G__73875 = (tick.interval.basic_relation.cljs$core$IFn$_invoke$arity$2 ? tick.interval.basic_relation.cljs$core$IFn$_invoke$arity$2(x__$1,y) : tick.interval.basic_relation.call(null,x__$1,y));
var fexpr__73874 = cljs.core.PersistentHashSet.createAsIfByAssoc([tick.interval.met_by_QMARK_,tick.interval.preceded_by_QMARK_]);
return (fexpr__73874.cljs$core$IFn$_invoke$arity$1 ? fexpr__73874.cljs$core$IFn$_invoke$arity$1(G__73875) : fexpr__73874.call(null,G__73875));
}));

(cljs.core.PersistentArrayMap.prototype.tick$core$ITimeComparison$_GT__EQ_$arity$2 = (function (x,y){
var x__$1 = this;
var G__73877 = (tick.interval.basic_relation.cljs$core$IFn$_invoke$arity$2 ? tick.interval.basic_relation.cljs$core$IFn$_invoke$arity$2(x__$1,y) : tick.interval.basic_relation.call(null,x__$1,y));
var fexpr__73876 = cljs.core.PersistentHashSet.createAsIfByAssoc([tick.interval.started_by_QMARK_,tick.interval.equals_QMARK_,tick.interval.met_by_QMARK_,tick.interval.preceded_by_QMARK_,tick.interval.overlapped_by_QMARK_,tick.interval.finishes_QMARK_]);
return (fexpr__73876.cljs$core$IFn$_invoke$arity$1 ? fexpr__73876.cljs$core$IFn$_invoke$arity$1(G__73877) : fexpr__73876.call(null,G__73877));
}));
/**
 * Are all the intervals in the given set time-ordered and
 *   disjoint? This is a useful property of a collection of
 *   intervals. The given collection must contain proper intervals (that
 *   is, intervals that have finite greater-than-zero durations).
 */
tick.interval.ordered_disjoint_intervals_QMARK_ = (function tick$interval$ordered_disjoint_intervals_QMARK_(s){
var rel = tick.interval.new_relation.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tick.interval.precedes_QMARK_,tick.interval.meets_QMARK_], 0));
return (!(((function (){var G__73885 = s;
var vec__73886 = G__73885;
var seq__73887 = cljs.core.seq(vec__73886);
var first__73888 = cljs.core.first(seq__73887);
var seq__73887__$1 = cljs.core.next(seq__73887);
var x = first__73888;
var xs = seq__73887__$1;
var G__73885__$1 = G__73885;
while(true){
var vec__73889 = G__73885__$1;
var seq__73890 = cljs.core.seq(vec__73889);
var first__73891 = cljs.core.first(seq__73890);
var seq__73890__$1 = cljs.core.next(seq__73890);
var x__$1 = first__73891;
var xs__$1 = seq__73890__$1;
if((((x__$1 == null)) || ((cljs.core.first(xs__$1) == null)))){
return true;
} else {
if(cljs.core.truth_((function (){var G__73892 = x__$1;
var G__73893 = cljs.core.first(xs__$1);
return (rel.cljs$core$IFn$_invoke$arity$2 ? rel.cljs$core$IFn$_invoke$arity$2(G__73892,G__73893) : rel.call(null,G__73892,G__73893));
})())){
var G__74407 = xs__$1;
G__73885__$1 = G__74407;
continue;
} else {
return null;
}
}
break;
}
})() == null)));
});
/**
 * Is the first interval in a sequence time-ordered and disjoint with
 *   respect to the second? Note, only compares first two in a
 *   sequence. Used by functions to ensure the head of the (possibly
 *   lazy) sequence satisfies this invariant.
 */
tick.interval.assert_proper_head = (function tick$interval$assert_proper_head(s){
var vec__73898 = s;
var initial = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73898,(0),null);
var subsequent = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73898,(1),null);
if(cljs.core.truth_((((initial == null))?subsequent:false))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Unexpected nil in sequence",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"nil-before","nil-before",1412757500),subsequent], null));
} else {
}

if(cljs.core.truth_(subsequent)){
if(cljs.core.truth_((tick.interval.precedes_or_meets_QMARK_.cljs$core$IFn$_invoke$arity$2 ? tick.interval.precedes_or_meets_QMARK_.cljs$core$IFn$_invoke$arity$2(initial,subsequent) : tick.interval.precedes_or_meets_QMARK_.call(null,initial,subsequent)))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Intervals in sequence violate requirement that intervals are time-ordered and disjoint",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"interval1","interval1",1775723179),initial,new cljs.core.Keyword(null,"interval2","interval2",-1652593797),subsequent], null));
}
} else {
}

return s;
});
/**
 * Unite concurrent intervals. Intervals must be ordered by beginning
 *   but not necessarily disjoint (the purpose of this function is to
 *   splice together intervals that are concurrent resulting in a
 *   time-ordered sequence of disjoint intervals that is returned.
 */
tick.interval.unite = (function tick$interval$unite(intervals){
var unite = (function tick$interval$unite_$_unite(intervals__$1){
return (new cljs.core.LazySeq(null,(function (){
var vec__73912 = intervals__$1;
var seq__73913 = cljs.core.seq(vec__73912);
var first__73914 = cljs.core.first(seq__73913);
var seq__73913__$1 = cljs.core.next(seq__73913);
var ival1 = first__73914;
var first__73914__$1 = cljs.core.first(seq__73913__$1);
var seq__73913__$2 = cljs.core.next(seq__73913__$1);
var ival2 = first__73914__$1;
var r = seq__73913__$2;
if((ival2 == null)){
if(cljs.core.truth_(ival1)){
return (new cljs.core.List(null,ival1,null,(1),null));
} else {
return cljs.core.List.EMPTY;
}
} else {
var G__73915 = tick.interval.relation(ival1,ival2);
var G__73915__$1 = (((G__73915 instanceof cljs.core.Keyword))?G__73915.fqn:null);
switch (G__73915__$1) {
case "precedes":
case "meets":
return cljs.core.cons(ival1,tick$interval$unite_$_unite(cljs.core.rest(intervals__$1)));

break;
case "overlaps":
case "contains":
case "starts":
case "started-by":
case "finished-by":
return tick$interval$unite_$_unite(cljs.core.cons(tick.interval.splice(ival1,ival2),r));

break;
default:
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Intervals in sequence violate requirement that intervals are time-ordered",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"interval1","interval1",1775723179),ival1,new cljs.core.Keyword(null,"interval2","interval2",-1652593797),ival2,new cljs.core.Keyword(null,"relation","relation",-693437925),tick.interval.relation(ival1,ival2)], null));

}

}
}),null,null));
});
return unite(intervals);
});
/**
 * Return an interval group. Interval groups are maps with
 *   a :tick/intervals entry that contain a time-ordered sequence of
 *   disjoint intervals.
 */
tick.interval.new_interval_group = (function tick$interval$new_interval_group(x){
if(cljs.core.truth_(new cljs.core.Keyword("tick","intervals","tick/intervals",2091945314).cljs$core$IFn$_invoke$arity$1(x))){
return x;
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("tick","intervals","tick/intervals",2091945314),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null)], null);
}
});
/**
 * Within a time-ordered sequence of disjoint intervals, return a
 *   sequence of interval groups, splicing together meeting intervals.
 */
tick.interval.normalize = (function tick$interval$normalize(intervals){
var normalize = (function tick$interval$normalize_$_normalize(intervals__$1){
return (new cljs.core.LazySeq(null,(function (){
var vec__73926 = intervals__$1;
var seq__73927 = cljs.core.seq(vec__73926);
var first__73928 = cljs.core.first(seq__73927);
var seq__73927__$1 = cljs.core.next(seq__73927);
var ival1 = first__73928;
var first__73928__$1 = cljs.core.first(seq__73927__$1);
var seq__73927__$2 = cljs.core.next(seq__73927__$1);
var ival2 = first__73928__$1;
var r = seq__73927__$2;
if((ival2 == null)){
if(cljs.core.truth_(ival1)){
return (new cljs.core.List(null,tick.interval.new_interval_group(ival1),null,(1),null));
} else {
return cljs.core.List.EMPTY;
}
} else {
var G__73934 = tick.interval.relation(ival1,ival2);
var G__73934__$1 = (((G__73934 instanceof cljs.core.Keyword))?G__73934.fqn:null);
switch (G__73934__$1) {
case "meets":
return tick$interval$normalize_$_normalize(cljs.core.cons(tick.interval.splice(ival1,ival2),r));

break;
default:
return cljs.core.cons(tick.interval.new_interval_group(ival1),tick$interval$normalize_$_normalize(tick.interval.assert_proper_head(cljs.core.rest(intervals__$1))));

}
}
}),null,null));
});
return normalize(tick.interval.assert_proper_head(intervals));
});
/**
 * Merge multiple time-ordered sequences of disjoint intervals into a
 *   single sequence of time-ordered disjoint intervals.
 */
tick.interval.union = (function tick$interval$union(var_args){
var args__4742__auto__ = [];
var len__4736__auto___74420 = arguments.length;
var i__4737__auto___74421 = (0);
while(true){
if((i__4737__auto___74421 < len__4736__auto___74420)){
args__4742__auto__.push((arguments[i__4737__auto___74421]));

var G__74426 = (i__4737__auto___74421 + (1));
i__4737__auto___74421 = G__74426;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return tick.interval.union.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(tick.interval.union.cljs$core$IFn$_invoke$arity$variadic = (function (colls){
var union = (function tick$interval$union(colls__$1){
return (new cljs.core.LazySeq(null,(function (){
if((cljs.core.count(colls__$1) <= (1))){
return cljs.core.first(colls__$1);
} else {
var vec__73956 = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__73939_SHARP_){
return tick.core.beginning(cljs.core.first(p1__73939_SHARP_));
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,colls__$1));
var seq__73957 = cljs.core.seq(vec__73956);
var first__73958 = cljs.core.first(seq__73957);
var seq__73957__$1 = cljs.core.next(seq__73957);
var c1 = first__73958;
var first__73958__$1 = cljs.core.first(seq__73957__$1);
var seq__73957__$2 = cljs.core.next(seq__73957__$1);
var c2 = first__73958__$1;
var r = seq__73957__$2;
if((c2 == null)){
return c1;
} else {
if(cljs.core.truth_((function (){var G__73959 = cljs.core.first(c1);
var G__73960 = cljs.core.first(c2);
return (tick.interval.disjoint_QMARK_.cljs$core$IFn$_invoke$arity$2 ? tick.interval.disjoint_QMARK_.cljs$core$IFn$_invoke$arity$2(G__73959,G__73960) : tick.interval.disjoint_QMARK_.call(null,G__73959,G__73960));
})())){
return cljs.core.cons(cljs.core.first(c1),tick$interval$union(cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.list,cljs.core.next(c1),c2,r)));
} else {
return tick$interval$union(cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.list,cljs.core.cons(tick.interval.splice(cljs.core.first(c1),cljs.core.first(c2)),cljs.core.next(c1)),cljs.core.next(c2),r));
}
}
}
}),null,null));
});
return union((function (){var iter__4529__auto__ = (function tick$interval$iter__73967(s__73968){
return (new cljs.core.LazySeq(null,(function (){
var s__73968__$1 = s__73968;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__73968__$1);
if(temp__5735__auto__){
var s__73968__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__73968__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__73968__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__73970 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__73969 = (0);
while(true){
if((i__73969 < size__4528__auto__)){
var coll = cljs.core._nth(c__4527__auto__,i__73969);
if(cljs.core.truth_(coll)){
cljs.core.chunk_append(b__73970,cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(tick.core.beginning,coll));

var G__74439 = (i__73969 + (1));
i__73969 = G__74439;
continue;
} else {
var G__74440 = (i__73969 + (1));
i__73969 = G__74440;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__73970),tick$interval$iter__73967(cljs.core.chunk_rest(s__73968__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__73970),null);
}
} else {
var coll = cljs.core.first(s__73968__$2);
if(cljs.core.truth_(coll)){
return cljs.core.cons(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(tick.core.beginning,coll),tick$interval$iter__73967(cljs.core.rest(s__73968__$2)));
} else {
var G__74441 = cljs.core.rest(s__73968__$2);
s__73968__$1 = G__74441;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(colls);
})());
}));

(tick.interval.union.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(tick.interval.union.cljs$lang$applyTo = (function (seq73940){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq73940));
}));

tick.interval.conj = (function tick$interval$conj(coll,interval){
return tick.interval.union.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([coll,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [interval], null)], 0));
});
/**
 * Return a time-ordered sequence of disjoint intervals where two or
 *   more intervals of the given sequences are concurrent. Arguments must
 *   be time-ordered sequences of disjoint intervals.
 */
tick.interval.intersection = (function tick$interval$intersection(var_args){
var G__74002 = arguments.length;
switch (G__74002) {
case 1:
return tick.interval.intersection.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tick.interval.intersection.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___74443 = arguments.length;
var i__4737__auto___74444 = (0);
while(true){
if((i__4737__auto___74444 < len__4736__auto___74443)){
args_arr__4757__auto__.push((arguments[i__4737__auto___74444]));

var G__74445 = (i__4737__auto___74444 + (1));
i__4737__auto___74444 = G__74445;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((2)),(0),null));
return tick.interval.intersection.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4758__auto__);

}
});

(tick.interval.intersection.cljs$core$IFn$_invoke$arity$1 = (function (s1){
return s1;
}));

(tick.interval.intersection.cljs$core$IFn$_invoke$arity$2 = (function (s1,s2){
var intersection = (function tick$interval$intersection(xs,ys){
return (new cljs.core.LazySeq(null,(function (){
var x = cljs.core.first(xs);
var y = cljs.core.first(ys);
if(cljs.core.truth_((function (){var and__4115__auto__ = x;
if(cljs.core.truth_(and__4115__auto__)){
return y;
} else {
return and__4115__auto__;
}
})())){
var G__74015 = tick.interval.relation(x,y);
var G__74015__$1 = (((G__74015 instanceof cljs.core.Keyword))?G__74015.fqn:null);
switch (G__74015__$1) {
case "precedes":
case "meets":
return tick$interval$intersection(tick.interval.assert_proper_head(cljs.core.next(xs)),ys);

break;
case "preceded-by":
case "met-by":
return tick$interval$intersection(xs,tick.interval.assert_proper_head(cljs.core.next(ys)));

break;
case "started-by":
return cljs.core.cons(tick.interval.slice(x,tick.core.beginning(y),tick.core.end(y)),tick$interval$intersection(tick.interval.assert_proper_head(cljs.core.cons(tick.interval.slice(x,tick.core.end(y),tick.core.end(x)),cljs.core.next(xs))),tick.interval.assert_proper_head(cljs.core.next(ys))));

break;
case "finished-by":
return cljs.core.cons(tick.interval.slice(x,tick.core.beginning(y),tick.core.end(y)),tick$interval$intersection(tick.interval.assert_proper_head(cljs.core.next(xs)),tick.interval.assert_proper_head(cljs.core.next(ys))));

break;
case "overlaps":
return cljs.core.cons(tick.interval.slice(x,tick.core.beginning(y),tick.core.end(x)),tick$interval$intersection(tick.interval.assert_proper_head(cljs.core.cons(tick.interval.slice(x,tick.core.beginning(y),tick.core.end(x)),cljs.core.next(xs))),tick.interval.assert_proper_head(cljs.core.cons(tick.interval.slice(y,tick.core.end(x),tick.core.end(y)),cljs.core.next(ys)))));

break;
case "overlapped-by":
return cljs.core.cons(tick.interval.slice(x,tick.core.beginning(x),tick.core.end(y)),tick$interval$intersection(tick.interval.assert_proper_head(cljs.core.cons(tick.interval.slice(x,tick.core.end(y),tick.core.end(x)),cljs.core.next(xs))),tick.interval.assert_proper_head(cljs.core.next(ys))));

break;
case "contains":
return cljs.core.cons(tick.interval.slice(x,tick.core.beginning(y),tick.core.end(y)),tick$interval$intersection(tick.interval.assert_proper_head(cljs.core.cons(tick.interval.slice(x,tick.core.end(y),tick.core.end(x)),cljs.core.next(xs))),tick.interval.assert_proper_head(cljs.core.next(ys))));

break;
case "during":
return cljs.core.cons(x,tick$interval$intersection(tick.interval.assert_proper_head(cljs.core.next(xs)),tick.interval.assert_proper_head(cljs.core.cons(tick.interval.slice(y,tick.core.end(x),tick.core.end(y)),cljs.core.next(ys)))));

break;
case "equals":
return cljs.core.cons(x,tick$interval$intersection(tick.interval.assert_proper_head(cljs.core.next(xs)),tick.interval.assert_proper_head(cljs.core.next(ys))));

break;
case "finishes":
return cljs.core.cons(x,tick$interval$intersection(tick.interval.assert_proper_head(cljs.core.next(xs)),tick.interval.assert_proper_head(cljs.core.next(ys))));

break;
case "starts":
return cljs.core.cons(x,tick$interval$intersection(tick.interval.assert_proper_head(cljs.core.next(xs)),tick.interval.assert_proper_head(cljs.core.cons(tick.interval.slice(y,tick.core.end(x),tick.core.end(y)),cljs.core.next(ys)))));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__74015__$1)].join('')));

}
} else {
return cljs.core.List.EMPTY;
}
}),null,null));
});
return intersection(tick.interval.assert_proper_head(s1),tick.interval.assert_proper_head(s2));
}));

(tick.interval.intersection.cljs$core$IFn$_invoke$arity$variadic = (function (s1,s2,sets){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(tick.interval.intersection,s1,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sets,s2));
}));

/** @this {Function} */
(tick.interval.intersection.cljs$lang$applyTo = (function (seq73997){
var G__73999 = cljs.core.first(seq73997);
var seq73997__$1 = cljs.core.next(seq73997);
var G__74000 = cljs.core.first(seq73997__$1);
var seq73997__$2 = cljs.core.next(seq73997__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__73999,G__74000,seq73997__$2);
}));

(tick.interval.intersection.cljs$lang$maxFixedArity = (2));

tick.interval.intersects_QMARK_ = (function tick$interval$intersects_QMARK_(ivals,interval){
return cljs.core.not_empty(tick.interval.intersection.cljs$core$IFn$_invoke$arity$2(ivals,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [interval], null)));
});
/**
 * Return an interval set that is the first set without elements of
 *   the remaining sets.
 */
tick.interval.difference = (function tick$interval$difference(var_args){
var G__74026 = arguments.length;
switch (G__74026) {
case 1:
return tick.interval.difference.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tick.interval.difference.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___74463 = arguments.length;
var i__4737__auto___74464 = (0);
while(true){
if((i__4737__auto___74464 < len__4736__auto___74463)){
args_arr__4757__auto__.push((arguments[i__4737__auto___74464]));

var G__74465 = (i__4737__auto___74464 + (1));
i__4737__auto___74464 = G__74465;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((2)),(0),null));
return tick.interval.difference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4758__auto__);

}
});

(tick.interval.difference.cljs$core$IFn$_invoke$arity$1 = (function (s1){
return s1;
}));

(tick.interval.difference.cljs$core$IFn$_invoke$arity$2 = (function (s1,s2){
var difference = (function tick$interval$difference(xs,ys){
var vec__74044 = xs;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74044,(0),null);
var vec__74047 = ys;
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74047,(0),null);
if(cljs.core.truth_(x)){
if(cljs.core.truth_(y)){
return (new cljs.core.LazySeq(null,(function (){
var G__74050 = tick.interval.relation(x,y);
var G__74050__$1 = (((G__74050 instanceof cljs.core.Keyword))?G__74050.fqn:null);
switch (G__74050__$1) {
case "precedes":
case "meets":
return cljs.core.cons(x,tick$interval$difference(tick.interval.assert_proper_head(cljs.core.next(xs)),ys));

break;
case "preceded-by":
case "met-by":
return tick$interval$difference(xs,tick.interval.assert_proper_head(cljs.core.next(ys)));

break;
case "finishes":
case "during":
case "equals":
return tick$interval$difference(tick.interval.assert_proper_head(cljs.core.next(xs)),tick.interval.assert_proper_head(ys));

break;
case "starts":
return tick$interval$difference(tick.interval.assert_proper_head(cljs.core.next(xs)),ys);

break;
case "started-by":
case "overlapped-by":
return tick$interval$difference(tick.interval.assert_proper_head(cljs.core.cons(tick.interval.slice(x,tick.core.end(y),tick.core.end(x)),cljs.core.next(xs))),tick.interval.assert_proper_head(cljs.core.next(ys)));

break;
case "finished-by":
return cljs.core.cons(tick.interval.slice(x,tick.core.beginning(x),tick.core.beginning(y)),tick$interval$difference(tick.interval.assert_proper_head(cljs.core.next(xs)),tick.interval.assert_proper_head(cljs.core.next(ys))));

break;
case "overlaps":
return cljs.core.cons(tick.interval.slice(x,tick.core.beginning(x),tick.core.beginning(y)),tick$interval$difference(tick.interval.assert_proper_head(cljs.core.next(xs)),ys));

break;
case "contains":
return cljs.core.cons(tick.interval.slice(x,tick.core.beginning(x),tick.core.beginning(y)),tick$interval$difference(tick.interval.assert_proper_head(cljs.core.cons(tick.interval.slice(x,tick.core.end(y),tick.core.end(x)),cljs.core.next(xs))),tick.interval.assert_proper_head(cljs.core.next(ys))));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__74050__$1)].join('')));

}
}),null,null));
} else {
return xs;
}
} else {
return cljs.core.List.EMPTY;
}
});
tick.interval.assert_proper_head(s1);

tick.interval.assert_proper_head(s2);

return difference(s1,s2);
}));

(tick.interval.difference.cljs$core$IFn$_invoke$arity$variadic = (function (s1,s2,sets){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(tick.interval.difference,s1,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sets,s2));
}));

/** @this {Function} */
(tick.interval.difference.cljs$lang$applyTo = (function (seq74023){
var G__74024 = cljs.core.first(seq74023);
var seq74023__$1 = cljs.core.next(seq74023);
var G__74025 = cljs.core.first(seq74023__$1);
var seq74023__$2 = cljs.core.next(seq74023__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__74024,G__74025,seq74023__$2);
}));

(tick.interval.difference.cljs$lang$maxFixedArity = (2));

tick.interval.complement = (function tick$interval$complement(coll){
if(cljs.core.empty_QMARK_(coll)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tick.interval.new_interval(tick.core.min_of_type(tick.core.now()),tick.core.max_of_type(tick.core.now()))], null);
} else {
var r = cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p__74062){
var vec__74063 = p__74062;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74063,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74063,(1),null);
if(tick.interval.meets_QMARK_(x,y)){
return null;
} else {
return tick.interval.new_interval(tick.core.end(x),tick.core.beginning(y));
}
}),cljs.core.partition.cljs$core$IFn$_invoke$arity$3((2),(1),coll));
var G__74070 = r;
var G__74070__$1 = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(tick.core.beginning(cljs.core.first(coll)),tick.core.min_of_type(tick.core.beginning(cljs.core.first(coll)))))?(function (p1__74060_SHARP_){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tick.interval.new_interval(tick.core.min_of_type(tick.core.beginning(cljs.core.first(coll))),tick.core.beginning(cljs.core.first(coll)))], null),p1__74060_SHARP_);
})(G__74070):G__74070);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(tick.core.end(cljs.core.last(coll)),tick.core.max_of_type(tick.core.end(cljs.core.last(coll))))){
return (function (p1__74061_SHARP_){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(p1__74061_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tick.interval.new_interval(tick.core.end(cljs.core.last(coll)),tick.core.max_of_type(tick.core.end(cljs.core.last(coll))))], null));
})(G__74070__$1);
} else {
return G__74070__$1;
}
}
});
/**
 * Split s1 across the grating defined by s2
 */
tick.interval.disjoin = (function tick$interval$disjoin(var_args){
var G__74075 = arguments.length;
switch (G__74075) {
case 1:
return tick.interval.disjoin.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tick.interval.disjoin.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___74484 = arguments.length;
var i__4737__auto___74485 = (0);
while(true){
if((i__4737__auto___74485 < len__4736__auto___74484)){
args_arr__4757__auto__.push((arguments[i__4737__auto___74485]));

var G__74487 = (i__4737__auto___74485 + (1));
i__4737__auto___74485 = G__74487;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((2)),(0),null));
return tick.interval.disjoin.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4758__auto__);

}
});

(tick.interval.disjoin.cljs$core$IFn$_invoke$arity$1 = (function (s1){
return s1;
}));

(tick.interval.disjoin.cljs$core$IFn$_invoke$arity$2 = (function (s1,s2){
var xs = s1;
var ys = s2;
var result = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.truth_(cljs.core.not_empty(xs))){
if(cljs.core.truth_(cljs.core.not_empty(ys))){
var x = cljs.core.first(xs);
var y = cljs.core.first(ys);
var G__74078 = tick.interval.relation(x,y);
var G__74078__$1 = (((G__74078 instanceof cljs.core.Keyword))?G__74078.fqn:null);
switch (G__74078__$1) {
case "precedes":
case "meets":
var G__74489 = cljs.core.next(xs);
var G__74490 = ys;
var G__74491 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,x);
xs = G__74489;
ys = G__74490;
result = G__74491;
continue;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__74078__$1)].join('')));

}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,result,xs);
}
} else {
return result;
}
break;
}
}));

(tick.interval.disjoin.cljs$core$IFn$_invoke$arity$variadic = (function (s1,s2,sets){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(tick.interval.difference,s1,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sets,s2));
}));

/** @this {Function} */
(tick.interval.disjoin.cljs$lang$applyTo = (function (seq74072){
var G__74073 = cljs.core.first(seq74072);
var seq74072__$1 = cljs.core.next(seq74072);
var G__74074 = cljs.core.first(seq74072__$1);
var seq74072__$2 = cljs.core.next(seq74072__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__74073,G__74074,seq74072__$2);
}));

(tick.interval.disjoin.cljs$lang$maxFixedArity = (2));

/**
 * Return a lazy sequence of java.time.Temporal instances over the
 *   given (local) interval.
 */
tick.interval.divide_by_apply = (function tick$interval$divide_by_apply(ival,f){
var G__74092 = tick.core.range((function (){var G__74093 = tick.core.beginning(ival);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__74093) : f.call(null,G__74093));
})(),(function (){var G__74094 = tick.core.end(ival);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__74094) : f.call(null,G__74094));
})());
if(cljs.core.truth_(tick.interval.concur((function (){var G__74095 = tick.core.end(ival);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__74095) : f.call(null,G__74095));
})(),ival))){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(G__74092,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__74096 = tick.core.end(ival);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__74096) : f.call(null,G__74096));
})()], null));
} else {
return G__74092;
}
});
/**
 * Divide an interval by a duration, returning a sequence of
 *   intervals. If the interval cannot be wholly sub-divided by the
 *   duration divisor, the last interval will represent the 'remainder'
 *   of the division and not be as long as the other preceeding
 *   intervals.
 */
tick.interval.divide_by_duration = (function tick$interval$divide_by_duration(ival,dur){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,(function (p1__74097_SHARP_){
return tick.core.min.cljs$core$IFn$_invoke$arity$variadic(tick.core.forward_duration(p1__74097_SHARP_,dur),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tick.core.end(ival)], 0));
})),tick.core.range(tick.core.beginning(ival),tick.core.end(ival),dur));
});
tick.interval.divide_by_period = (function tick$interval$divide_by_period(ival,period){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,(function (p1__74104_SHARP_){
return tick.core.min.cljs$core$IFn$_invoke$arity$variadic(tick.core.forward_duration(p1__74104_SHARP_,period),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tick.core.end(ival)], 0));
})),tick.core.range(tick.core.beginning(ival),tick.core.end(ival),period));
});
tick.interval.divide_by_divisor = (function tick$interval$divide_by_divisor(ival,divisor){
return tick.interval.divide_by_duration(ival,cljc.java_time.duration.divided_by(tick.core.duration(ival),divisor));
});

/**
 * @interface
 */
tick.interval.IDivisibleInterval = function(){};

var tick$interval$IDivisibleInterval$divide_interval$dyn_74513 = (function (divisor,ival){
var x__4428__auto__ = (((divisor == null))?null:divisor);
var m__4429__auto__ = (tick.interval.divide_interval[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(divisor,ival) : m__4429__auto__.call(null,divisor,ival));
} else {
var m__4426__auto__ = (tick.interval.divide_interval["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(divisor,ival) : m__4426__auto__.call(null,divisor,ival));
} else {
throw cljs.core.missing_protocol("IDivisibleInterval.divide-interval",divisor);
}
}
});
/**
 * Divide an interval by a given divisor
 */
tick.interval.divide_interval = (function tick$interval$divide_interval(divisor,ival){
if((((!((divisor == null)))) && ((!((divisor.tick$interval$IDivisibleInterval$divide_interval$arity$2 == null)))))){
return divisor.tick$interval$IDivisibleInterval$divide_interval$arity$2(divisor,ival);
} else {
return tick$interval$IDivisibleInterval$divide_interval$dyn_74513(divisor,ival);
}
});

goog.object.set(tick.interval.IDivisibleInterval,"function",true);

goog.object.set(tick.interval.divide_interval,"function",(function (f,ival){
return tick.interval.divide_by_apply(ival,f);
}));

(java.time.Duration.prototype.tick$interval$IDivisibleInterval$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.Duration.prototype.tick$interval$IDivisibleInterval$divide_interval$arity$2 = (function (dur,ival){
var dur__$1 = this;
return tick.interval.divide_by_duration(ival,dur__$1);
}));

(java.time.Period.prototype.tick$interval$IDivisibleInterval$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.Period.prototype.tick$interval$IDivisibleInterval$divide_interval$arity$2 = (function (period,ival){
var period__$1 = this;
return tick.interval.divide_by_period(ival,period__$1);
}));

goog.object.set(tick.interval.IDivisibleInterval,"number",true);

goog.object.set(tick.interval.divide_interval,"number",(function (divisor,ival){
return tick.interval.divide_by_divisor(ival,divisor);
}));
(java.time.LocalDate.prototype.tick$core$IDivisible$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.LocalDate.prototype.tick$core$IDivisible$divide$arity$2 = (function (ld,d){
var ld__$1 = this;
return tick.interval.divide_interval(d,ld__$1);
}));

(java.time.Year.prototype.tick$core$IDivisible$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.Year.prototype.tick$core$IDivisible$divide$arity$2 = (function (n,d){
var n__$1 = this;
return tick.interval.divide_interval(d,n__$1);
}));

(java.time.YearMonth.prototype.tick$core$IDivisible$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.YearMonth.prototype.tick$core$IDivisible$divide$arity$2 = (function (n,d){
var n__$1 = this;
return tick.interval.divide_interval(d,n__$1);
}));

(cljs.core.PersistentArrayMap.prototype.tick$core$IDivisible$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentArrayMap.prototype.tick$core$IDivisible$divide$arity$2 = (function (ival,o){
var ival__$1 = this;
return tick.interval.divide_interval(o,ival__$1);
}));
/**
 * Divide intervals in s1 by (disjoint ordered) intervals in s2,
 *   splitting if necessary, grouping by s2. Complexity is O(n) rather
 *   than O(n^2)
 */
tick.interval.group_by_intervals = (function tick$interval$group_by_intervals(intervals_to_group_by,ivals){
if(tick.interval.ordered_disjoint_intervals_QMARK_(intervals_to_group_by)){
} else {
throw (new Error("Assert failed: (ordered-disjoint-intervals? intervals-to-group-by)"));
}

if(tick.interval.ordered_disjoint_intervals_QMARK_(ivals)){
} else {
throw (new Error("Assert failed: (ordered-disjoint-intervals? ivals)"));
}

var intervals = ivals;
var groups = intervals_to_group_by;
var result = cljs.core.PersistentArrayMap.EMPTY;
var current_intervals = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.truth_(cljs.core.not_empty(intervals))){
if(cljs.core.truth_(cljs.core.not_empty(groups))){
var ival = cljs.core.first(intervals);
var group = cljs.core.first(groups);
var G__74154 = tick.interval.relation(ival,group);
var G__74154__$1 = (((G__74154 instanceof cljs.core.Keyword))?G__74154.fqn:null);
switch (G__74154__$1) {
case "precedes":
case "meets":
var G__74543 = cljs.core.next(intervals);
var G__74544 = groups;
var G__74545 = result;
var G__74546 = current_intervals;
intervals = G__74543;
groups = G__74544;
result = G__74545;
current_intervals = G__74546;
continue;

break;
case "preceded-by":
case "met-by":
var G__74549 = intervals;
var G__74550 = cljs.core.next(groups);
var G__74551 = (function (){var G__74161 = result;
if(cljs.core.truth_(cljs.core.not_empty(current_intervals))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__74161,group,current_intervals);
} else {
return G__74161;
}
})();
var G__74552 = cljs.core.PersistentVector.EMPTY;
intervals = G__74549;
groups = G__74550;
result = G__74551;
current_intervals = G__74552;
continue;

break;
case "finishes":
var G__74557 = cljs.core.next(intervals);
var G__74558 = cljs.core.next(groups);
var G__74559 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,group,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current_intervals,ival));
var G__74560 = cljs.core.PersistentVector.EMPTY;
intervals = G__74557;
groups = G__74558;
result = G__74559;
current_intervals = G__74560;
continue;

break;
case "equals":
var G__74567 = cljs.core.next(intervals);
var G__74568 = cljs.core.next(groups);
var G__74569 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,group,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current_intervals,ival));
var G__74570 = cljs.core.PersistentVector.EMPTY;
intervals = G__74567;
groups = G__74568;
result = G__74569;
current_intervals = G__74570;
continue;

break;
case "finished-by":
var vec__74163 = tick.interval.split_with_assert(ival,tick.core.beginning(group));
var seg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74163,(0),null);
var seg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74163,(1),null);
var G__74575 = cljs.core.next(intervals);
var G__74576 = cljs.core.next(groups);
var G__74577 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,group,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current_intervals,seg2));
var G__74578 = cljs.core.PersistentVector.EMPTY;
intervals = G__74575;
groups = G__74576;
result = G__74577;
current_intervals = G__74578;
continue;

break;
case "started-by":
var vec__74166 = tick.interval.split_with_assert(ival,tick.core.end(group));
var seg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74166,(0),null);
var seg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74166,(1),null);
var G__74587 = cljs.core.cons(seg2,cljs.core.next(intervals));
var G__74588 = cljs.core.next(groups);
var G__74589 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,group,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current_intervals,seg1));
var G__74590 = cljs.core.PersistentVector.EMPTY;
intervals = G__74587;
groups = G__74588;
result = G__74589;
current_intervals = G__74590;
continue;

break;
case "overlapped-by":
var vec__74175 = tick.interval.split_with_assert(ival,tick.core.end(group));
var seg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74175,(0),null);
var seg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74175,(1),null);
var G__74602 = cljs.core.cons(seg2,cljs.core.next(intervals));
var G__74603 = cljs.core.next(groups);
var G__74604 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,group,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current_intervals,seg1));
var G__74605 = cljs.core.PersistentVector.EMPTY;
intervals = G__74602;
groups = G__74603;
result = G__74604;
current_intervals = G__74605;
continue;

break;
case "starts":
case "during":
var G__74606 = cljs.core.next(intervals);
var G__74607 = groups;
var G__74608 = result;
var G__74609 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current_intervals,ival);
intervals = G__74606;
groups = G__74607;
result = G__74608;
current_intervals = G__74609;
continue;

break;
case "contains":
var G__74610 = cljs.core.next(intervals);
var G__74611 = cljs.core.next(groups);
var G__74612 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,group,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tick.interval.slice(ival,tick.core.beginning(group),tick.core.end(group))], null));
var G__74613 = cljs.core.PersistentVector.EMPTY;
intervals = G__74610;
groups = G__74611;
result = G__74612;
current_intervals = G__74613;
continue;

break;
case "overlaps":
var G__74620 = cljs.core.next(intervals);
var G__74621 = groups;
var G__74622 = result;
var G__74623 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current_intervals,tick.interval.slice(ival,tick.core.beginning(group),tick.core.end(ival)));
intervals = G__74620;
groups = G__74621;
result = G__74622;
current_intervals = G__74623;
continue;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__74154__$1)].join('')));

}
} else {
return result;
}
} else {
var G__74178 = result;
if(cljs.core.truth_((function (){var and__4115__auto__ = cljs.core.first(groups);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not_empty(current_intervals);
} else {
return and__4115__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__74178,cljs.core.first(groups),current_intervals);
} else {
return G__74178;
}
}
break;
}
});

/**
 * @interface
 */
tick.interval.IGroupable = function(){};

var tick$interval$IGroupable$group_by$dyn_74636 = (function (grouping,ivals){
var x__4428__auto__ = (((grouping == null))?null:grouping);
var m__4429__auto__ = (tick.interval.group_by[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(grouping,ivals) : m__4429__auto__.call(null,grouping,ivals));
} else {
var m__4426__auto__ = (tick.interval.group_by["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(grouping,ivals) : m__4426__auto__.call(null,grouping,ivals));
} else {
throw cljs.core.missing_protocol("IGroupable.group-by",grouping);
}
}
});
tick.interval.group_by = (function tick$interval$group_by(grouping,ivals){
if((((!((grouping == null)))) && ((!((grouping.tick$interval$IGroupable$group_by$arity$2 == null)))))){
return grouping.tick$interval$IGroupable$group_by$arity$2(grouping,ivals);
} else {
return tick$interval$IGroupable$group_by$dyn_74636(grouping,ivals);
}
});

goog.object.set(tick.interval.IGroupable,"function",true);

goog.object.set(tick.interval.group_by,"function",(function (f,ivals){
if(cljs.core.empty_QMARK_(ivals)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
var r = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(tick.interval.bounds,ivals);
var b = (function (){var G__74183 = tick.core.beginning(r);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__74183) : f.call(null,G__74183));
})();
var e = (function (){var G__74184 = tick.core.end(r);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__74184) : f.call(null,G__74184));
})();
var groups = tick.core.range(b,tick.core.inc(e));
return tick.interval.group_by(groups,ivals);
}
}));

(cljs.core.LazySeq.prototype.tick$interval$IGroupable$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.tick$interval$IGroupable$group_by$arity$2 = (function (groups,ivals){
var groups__$1 = this;
return tick.interval.group_by_intervals(groups__$1,ivals);
}));

(cljs.core.PersistentVector.prototype.tick$interval$IGroupable$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.tick$interval$IGroupable$group_by$arity$2 = (function (groups,ivals){
var groups__$1 = this;
return tick.interval.group_by_intervals(groups__$1,ivals);
}));

//# sourceMappingURL=tick.interval.js.map
