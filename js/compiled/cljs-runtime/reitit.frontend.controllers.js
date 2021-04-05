goog.provide('reitit.frontend.controllers');
reitit.frontend.controllers.pad_same_length = (function reitit$frontend$controllers$pad_same_length(a,b){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(a,cljs.core.take.cljs$core$IFn$_invoke$arity$2((cljs.core.count(b) - cljs.core.count(a)),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null)));
});
reitit.frontend.controllers.params_warning = (new cljs.core.Delay((function (){
return console.warn("Reitit-frontend controller :params is deprecated. Replace with :identity or :parameters option.");
}),null));
/**
 * Get controller identity given controller and match.
 * 
 *   To select interesting properties from Match :parameters option can be set.
 *   Value should be param-type => [param-key]
 *   Resulting value is map of param-type => param-key => value.
 * 
 *   For other uses, :identity option can be used to provide function from
 *   Match to identity.
 * 
 *   Default value is nil, i.e. controller identity doesn't depend on Match.
 */
reitit.frontend.controllers.get_identity = (function reitit$frontend$controllers$get_identity(p__84092,match){
var map__84093 = p__84092;
var map__84093__$1 = (((((!((map__84093 == null))))?(((((map__84093.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__84093.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__84093):map__84093);
var identity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84093__$1,new cljs.core.Keyword(null,"identity","identity",1647396035));
var parameters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84093__$1,new cljs.core.Keyword(null,"parameters","parameters",-1229919748));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84093__$1,new cljs.core.Keyword(null,"params","params",710516235));
if(cljs.core.not((function (){var and__4115__auto__ = identity;
if(cljs.core.truth_(and__4115__auto__)){
return parameters;
} else {
return and__4115__auto__;
}
})())){
} else {
throw (new Error(["Assert failed: ","Use either :identity or :parameters for controller, not both.","\n","(not (and identity parameters))"].join('')));
}

if(cljs.core.truth_(params)){
cljs.core.deref(reitit.frontend.controllers.params_warning);
} else {
}

if(cljs.core.truth_(parameters)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4529__auto__ = (function reitit$frontend$controllers$get_identity_$_iter__84101(s__84102){
return (new cljs.core.LazySeq(null,(function (){
var s__84102__$1 = s__84102;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__84102__$1);
if(temp__5735__auto__){
var s__84102__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__84102__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__84102__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__84104 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__84103 = (0);
while(true){
if((i__84103 < size__4528__auto__)){
var vec__84105 = cljs.core._nth(c__4527__auto__,i__84103);
var param_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__84105,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__84105,(1),null);
cljs.core.chunk_append(b__84104,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_type,cljs.core.select_keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parameters","parameters",-1229919748).cljs$core$IFn$_invoke$arity$1(match),param_type),ks)], null));

var G__84139 = (i__84103 + (1));
i__84103 = G__84139;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__84104),reitit$frontend$controllers$get_identity_$_iter__84101(cljs.core.chunk_rest(s__84102__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__84104),null);
}
} else {
var vec__84108 = cljs.core.first(s__84102__$2);
var param_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__84108,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__84108,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_type,cljs.core.select_keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parameters","parameters",-1229919748).cljs$core$IFn$_invoke$arity$1(match),param_type),ks)], null),reitit$frontend$controllers$get_identity_$_iter__84101(cljs.core.rest(s__84102__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(parameters);
})());
} else {
if(cljs.core.truth_(identity)){
return (identity.cljs$core$IFn$_invoke$arity$1 ? identity.cljs$core$IFn$_invoke$arity$1(match) : identity.call(null,match));
} else {
if(cljs.core.truth_(params)){
return (params.cljs$core$IFn$_invoke$arity$1 ? params.cljs$core$IFn$_invoke$arity$1(match) : params.call(null,match));
} else {
return null;

}
}
}
});
/**
 * Run side-effects (:start or :stop) for controller.
 *   The side-effect function is called with controller identity value.
 */
reitit.frontend.controllers.apply_controller = (function reitit$frontend$controllers$apply_controller(controller,method){
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(controller,method);
if(cljs.core.truth_(temp__5735__auto__)){
var f = temp__5735__auto__;
var G__84114 = new cljs.core.Keyword("reitit.frontend.controllers","identity","reitit.frontend.controllers/identity",-806277693).cljs$core$IFn$_invoke$arity$1(controller);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__84114) : f.call(null,G__84114));
} else {
return null;
}
});
/**
 * Applies changes between current controllers and
 *   those previously enabled. Reinitializes controllers whose
 *   identity has changed.
 */
reitit.frontend.controllers.apply_controllers = (function reitit$frontend$controllers$apply_controllers(old_controllers,new_match){
var new_controllers = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (controller){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(controller,new cljs.core.Keyword("reitit.frontend.controllers","identity","reitit.frontend.controllers/identity",-806277693),reitit.frontend.controllers.get_identity(controller,new_match));
}),new cljs.core.Keyword(null,"controllers","controllers",-1120410624).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(new_match)));
var changed_controllers = cljs.core.vec(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (old,new$){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(old,new$)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"old","old",-1825222690),old,new cljs.core.Keyword(null,"new","new",-2085437848),new$], null);
} else {
return null;
}
}),reitit.frontend.controllers.pad_same_length(old_controllers,new_controllers),reitit.frontend.controllers.pad_same_length(new_controllers,old_controllers))));
var seq__84118_84149 = cljs.core.seq(cljs.core.reverse(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"old","old",-1825222690),changed_controllers)));
var chunk__84119_84150 = null;
var count__84120_84151 = (0);
var i__84121_84152 = (0);
while(true){
if((i__84121_84152 < count__84120_84151)){
var controller_84153 = chunk__84119_84150.cljs$core$IIndexed$_nth$arity$2(null,i__84121_84152);
reitit.frontend.controllers.apply_controller(controller_84153,new cljs.core.Keyword(null,"stop","stop",-2140911342));


var G__84154 = seq__84118_84149;
var G__84155 = chunk__84119_84150;
var G__84156 = count__84120_84151;
var G__84157 = (i__84121_84152 + (1));
seq__84118_84149 = G__84154;
chunk__84119_84150 = G__84155;
count__84120_84151 = G__84156;
i__84121_84152 = G__84157;
continue;
} else {
var temp__5735__auto___84163 = cljs.core.seq(seq__84118_84149);
if(temp__5735__auto___84163){
var seq__84118_84164__$1 = temp__5735__auto___84163;
if(cljs.core.chunked_seq_QMARK_(seq__84118_84164__$1)){
var c__4556__auto___84165 = cljs.core.chunk_first(seq__84118_84164__$1);
var G__84166 = cljs.core.chunk_rest(seq__84118_84164__$1);
var G__84167 = c__4556__auto___84165;
var G__84168 = cljs.core.count(c__4556__auto___84165);
var G__84169 = (0);
seq__84118_84149 = G__84166;
chunk__84119_84150 = G__84167;
count__84120_84151 = G__84168;
i__84121_84152 = G__84169;
continue;
} else {
var controller_84170 = cljs.core.first(seq__84118_84164__$1);
reitit.frontend.controllers.apply_controller(controller_84170,new cljs.core.Keyword(null,"stop","stop",-2140911342));


var G__84171 = cljs.core.next(seq__84118_84164__$1);
var G__84172 = null;
var G__84173 = (0);
var G__84174 = (0);
seq__84118_84149 = G__84171;
chunk__84119_84150 = G__84172;
count__84120_84151 = G__84173;
i__84121_84152 = G__84174;
continue;
}
} else {
}
}
break;
}

var seq__84127_84175 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"new","new",-2085437848),changed_controllers));
var chunk__84128_84176 = null;
var count__84129_84177 = (0);
var i__84130_84178 = (0);
while(true){
if((i__84130_84178 < count__84129_84177)){
var controller_84179 = chunk__84128_84176.cljs$core$IIndexed$_nth$arity$2(null,i__84130_84178);
reitit.frontend.controllers.apply_controller(controller_84179,new cljs.core.Keyword(null,"start","start",-355208981));


var G__84180 = seq__84127_84175;
var G__84181 = chunk__84128_84176;
var G__84182 = count__84129_84177;
var G__84183 = (i__84130_84178 + (1));
seq__84127_84175 = G__84180;
chunk__84128_84176 = G__84181;
count__84129_84177 = G__84182;
i__84130_84178 = G__84183;
continue;
} else {
var temp__5735__auto___84184 = cljs.core.seq(seq__84127_84175);
if(temp__5735__auto___84184){
var seq__84127_84185__$1 = temp__5735__auto___84184;
if(cljs.core.chunked_seq_QMARK_(seq__84127_84185__$1)){
var c__4556__auto___84186 = cljs.core.chunk_first(seq__84127_84185__$1);
var G__84187 = cljs.core.chunk_rest(seq__84127_84185__$1);
var G__84188 = c__4556__auto___84186;
var G__84189 = cljs.core.count(c__4556__auto___84186);
var G__84190 = (0);
seq__84127_84175 = G__84187;
chunk__84128_84176 = G__84188;
count__84129_84177 = G__84189;
i__84130_84178 = G__84190;
continue;
} else {
var controller_84191 = cljs.core.first(seq__84127_84185__$1);
reitit.frontend.controllers.apply_controller(controller_84191,new cljs.core.Keyword(null,"start","start",-355208981));


var G__84192 = cljs.core.next(seq__84127_84185__$1);
var G__84193 = null;
var G__84194 = (0);
var G__84195 = (0);
seq__84127_84175 = G__84192;
chunk__84128_84176 = G__84193;
count__84129_84177 = G__84194;
i__84130_84178 = G__84195;
continue;
}
} else {
}
}
break;
}

return new_controllers;
});

//# sourceMappingURL=reitit.frontend.controllers.js.map
