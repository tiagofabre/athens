goog.provide('cljs_http.core');
cljs_http.core.pending_requests = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
/**
 * Attempt to close the given channel and abort the pending HTTP request
 *   with which it is associated.
 */
cljs_http.core.abort_BANG_ = (function cljs_http$core$abort_BANG_(channel){
var temp__5735__auto__ = (function (){var fexpr__89515 = cljs.core.deref(cljs_http.core.pending_requests);
return (fexpr__89515.cljs$core$IFn$_invoke$arity$1 ? fexpr__89515.cljs$core$IFn$_invoke$arity$1(channel) : fexpr__89515.call(null,channel));
})();
if(cljs.core.truth_(temp__5735__auto__)){
var req = temp__5735__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

cljs.core.async.close_BANG_(channel);

if(cljs.core.truth_(req.hasOwnProperty("abort"))){
return req.abort();
} else {
return new cljs.core.Keyword(null,"jsonp","jsonp",226119588).cljs$core$IFn$_invoke$arity$1(req).cancel(new cljs.core.Keyword(null,"request","request",1772954723).cljs$core$IFn$_invoke$arity$1(req));
}
} else {
return null;
}
});
cljs_http.core.aborted_QMARK_ = (function cljs_http$core$aborted_QMARK_(xhr){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(xhr.getLastErrorCode(),goog.net.ErrorCode.ABORT);
});
/**
 * Takes an XhrIo object and applies the default-headers to it.
 */
cljs_http.core.apply_default_headers_BANG_ = (function cljs_http$core$apply_default_headers_BANG_(xhr,headers){
var formatted_h = cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs_http.util.camelize,cljs.core.keys(headers)),cljs.core.vals(headers));
return cljs.core.dorun.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__89528){
var vec__89531 = p__89528;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__89531,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__89531,(1),null);
return xhr.headers.set(k,v);
}),formatted_h));
});
/**
 * Takes an XhrIo object and sets response-type if not nil.
 */
cljs_http.core.apply_response_type_BANG_ = (function cljs_http$core$apply_response_type_BANG_(xhr,response_type){
return xhr.setResponseType((function (){var G__89542 = response_type;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"array-buffer","array-buffer",519008380),G__89542)){
return goog.net.XhrIo.ResponseType.ARRAY_BUFFER;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"blob","blob",1636965233),G__89542)){
return goog.net.XhrIo.ResponseType.BLOB;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"document","document",-1329188687),G__89542)){
return goog.net.XhrIo.ResponseType.DOCUMENT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"text","text",-1790561697),G__89542)){
return goog.net.XhrIo.ResponseType.TEXT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"default","default",-1987822328),G__89542)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__89542)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__89542)].join('')));

}
}
}
}
}
}
})());
});
/**
 * Builds an XhrIo object from the request parameters.
 */
cljs_http.core.build_xhr = (function cljs_http$core$build_xhr(p__89553){
var map__89554 = p__89553;
var map__89554__$1 = (((((!((map__89554 == null))))?(((((map__89554.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89554.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89554):map__89554);
var request = map__89554__$1;
var with_credentials_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89554__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var default_headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89554__$1,new cljs.core.Keyword(null,"default-headers","default-headers",-43146094));
var response_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89554__$1,new cljs.core.Keyword(null,"response-type","response-type",-1493770458));
var timeout = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"timeout","timeout",-318625318).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (0);
}
})();
var send_credentials = (((with_credentials_QMARK_ == null))?true:with_credentials_QMARK_);
var G__89569 = (new goog.net.XhrIo());
cljs_http.core.apply_default_headers_BANG_(G__89569,default_headers);

cljs_http.core.apply_response_type_BANG_(G__89569,response_type);

G__89569.setTimeoutInterval(timeout);

G__89569.setWithCredentials(send_credentials);

return G__89569;
});
cljs_http.core.error_kw = cljs.core.PersistentHashMap.fromArrays([(0),(7),(1),(4),(6),(3),(2),(9),(5),(8)],[new cljs.core.Keyword(null,"no-error","no-error",1984610064),new cljs.core.Keyword(null,"abort","abort",521193198),new cljs.core.Keyword(null,"access-denied","access-denied",959449406),new cljs.core.Keyword(null,"custom-error","custom-error",-1565161123),new cljs.core.Keyword(null,"http-error","http-error",-1040049553),new cljs.core.Keyword(null,"ff-silent-error","ff-silent-error",189390514),new cljs.core.Keyword(null,"file-not-found","file-not-found",-65398940),new cljs.core.Keyword(null,"offline","offline",-107631935),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"timeout","timeout",-318625318)]);
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.xhr = (function cljs_http$core$xhr(p__89577){
var map__89578 = p__89577;
var map__89578__$1 = (((((!((map__89578 == null))))?(((((map__89578.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89578.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89578):map__89578);
var request = map__89578__$1;
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89578__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89578__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89578__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var with_credentials_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89578__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var cancel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89578__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var progress = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89578__$1,new cljs.core.Keyword(null,"progress","progress",244323547));
var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var request_url = cljs_http.util.build_url(request);
var method = cljs.core.name((function (){var or__4126__auto__ = request_method;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"get","get",1683182755);
}
})());
var headers__$1 = cljs_http.util.build_headers(headers);
var xhr = cljs_http.core.build_xhr(request);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs_http.core.pending_requests,cljs.core.assoc,channel,xhr);

xhr.listen(goog.net.EventType.COMPLETE,(function (evt){
var target = evt.target;
var response = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"status","status",-1997798413),target.getStatus(),new cljs.core.Keyword(null,"success","success",1890645906),target.isSuccess(),new cljs.core.Keyword(null,"body","body",-2049205669),target.getResponse(),new cljs.core.Keyword(null,"headers","headers",-835030129),cljs_http.util.parse_headers(target.getAllResponseHeaders()),new cljs.core.Keyword(null,"trace-redirects","trace-redirects",-1149427907),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [request_url,target.getLastUri()], null),new cljs.core.Keyword(null,"error-code","error-code",180497232),(function (){var G__89582 = target.getLastErrorCode();
return (cljs_http.core.error_kw.cljs$core$IFn$_invoke$arity$1 ? cljs_http.core.error_kw.cljs$core$IFn$_invoke$arity$1(G__89582) : cljs_http.core.error_kw.call(null,G__89582));
})(),new cljs.core.Keyword(null,"error-text","error-text",2021893718),target.getLastError()], null);
if((!(cljs_http.core.aborted_QMARK_(xhr)))){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,response);
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
}));

if(cljs.core.truth_(progress)){
var listener_89670 = (function (direction,evt){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(progress,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"direction","direction",-633359395),direction,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),evt.loaded], null),(cljs.core.truth_(evt.lengthComputable)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"total","total",1916810418),evt.total], null):null)], 0)));
});
var G__89587_89672 = xhr;
G__89587_89672.setProgressEventsEnabled(true);

G__89587_89672.listen(goog.net.EventType.UPLOAD_PROGRESS,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(listener_89670,new cljs.core.Keyword(null,"upload","upload",-255769218)));

G__89587_89672.listen(goog.net.EventType.DOWNLOAD_PROGRESS,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(listener_89670,new cljs.core.Keyword(null,"download","download",-300081668)));

} else {
}

xhr.send(request_url,method,body,headers__$1);

if(cljs.core.truth_(cancel)){
var c__56877__auto___89673 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56878__auto__ = (function (){var switch__56774__auto__ = (function (state_89600){
var state_val_89601 = (state_89600[(1)]);
if((state_val_89601 === (1))){
var state_89600__$1 = state_89600;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_89600__$1,(2),cancel);
} else {
if((state_val_89601 === (2))){
var inst_89591 = (state_89600[(2)]);
var inst_89592 = xhr.isComplete();
var inst_89593 = cljs.core.not(inst_89592);
var state_89600__$1 = (function (){var statearr_89602 = state_89600;
(statearr_89602[(7)] = inst_89591);

return statearr_89602;
})();
if(inst_89593){
var statearr_89603_89686 = state_89600__$1;
(statearr_89603_89686[(1)] = (3));

} else {
var statearr_89604_89688 = state_89600__$1;
(statearr_89604_89688[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89601 === (3))){
var inst_89595 = xhr.abort();
var state_89600__$1 = state_89600;
var statearr_89605_89689 = state_89600__$1;
(statearr_89605_89689[(2)] = inst_89595);

(statearr_89605_89689[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89601 === (4))){
var state_89600__$1 = state_89600;
var statearr_89606_89693 = state_89600__$1;
(statearr_89606_89693[(2)] = null);

(statearr_89606_89693[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89601 === (5))){
var inst_89598 = (state_89600[(2)]);
var state_89600__$1 = state_89600;
return cljs.core.async.impl.ioc_helpers.return_chan(state_89600__$1,inst_89598);
} else {
return null;
}
}
}
}
}
});
return (function() {
var cljs_http$core$xhr_$_state_machine__56775__auto__ = null;
var cljs_http$core$xhr_$_state_machine__56775__auto____0 = (function (){
var statearr_89607 = [null,null,null,null,null,null,null,null];
(statearr_89607[(0)] = cljs_http$core$xhr_$_state_machine__56775__auto__);

(statearr_89607[(1)] = (1));

return statearr_89607;
});
var cljs_http$core$xhr_$_state_machine__56775__auto____1 = (function (state_89600){
while(true){
var ret_value__56776__auto__ = (function (){try{while(true){
var result__56777__auto__ = switch__56774__auto__(state_89600);
if(cljs.core.keyword_identical_QMARK_(result__56777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__56777__auto__;
}
break;
}
}catch (e89608){var ex__56778__auto__ = e89608;
var statearr_89610_89698 = state_89600;
(statearr_89610_89698[(2)] = ex__56778__auto__);


if(cljs.core.seq((state_89600[(4)]))){
var statearr_89611_89700 = state_89600;
(statearr_89611_89700[(1)] = cljs.core.first((state_89600[(4)])));

} else {
throw ex__56778__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__56776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__89701 = state_89600;
state_89600 = G__89701;
continue;
} else {
return ret_value__56776__auto__;
}
break;
}
});
cljs_http$core$xhr_$_state_machine__56775__auto__ = function(state_89600){
switch(arguments.length){
case 0:
return cljs_http$core$xhr_$_state_machine__56775__auto____0.call(this);
case 1:
return cljs_http$core$xhr_$_state_machine__56775__auto____1.call(this,state_89600);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$xhr_$_state_machine__56775__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$xhr_$_state_machine__56775__auto____0;
cljs_http$core$xhr_$_state_machine__56775__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$xhr_$_state_machine__56775__auto____1;
return cljs_http$core$xhr_$_state_machine__56775__auto__;
})()
})();
var state__56879__auto__ = (function (){var statearr_89615 = f__56878__auto__();
(statearr_89615[(6)] = c__56877__auto___89673);

return statearr_89615;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56879__auto__);
}));

} else {
}

return channel;
});
/**
 * Execute the JSONP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.jsonp = (function cljs_http$core$jsonp(p__89617){
var map__89618 = p__89617;
var map__89618__$1 = (((((!((map__89618 == null))))?(((((map__89618.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89618.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89618):map__89618);
var request = map__89618__$1;
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89618__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318));
var callback_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89618__$1,new cljs.core.Keyword(null,"callback-name","callback-name",336964714));
var cancel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89618__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var keywordize_keys_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__89618__$1,new cljs.core.Keyword(null,"keywordize-keys?","keywordize-keys?",-254545987),true);
var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var jsonp = (new goog.net.Jsonp(cljs_http.util.build_url(request),callback_name));
jsonp.setRequestTimeout(timeout);

var req_89707 = jsonp.send(null,(function cljs_http$core$jsonp_$_success_callback(data){
var response = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),(200),new cljs.core.Keyword(null,"success","success",1890645906),true,new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),keywordize_keys_QMARK_], 0))], null);
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,response);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
}),(function cljs_http$core$jsonp_$_error_callback(){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
}));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs_http.core.pending_requests,cljs.core.assoc,channel,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"jsonp","jsonp",226119588),jsonp,new cljs.core.Keyword(null,"request","request",1772954723),req_89707], null));

if(cljs.core.truth_(cancel)){
var c__56877__auto___89715 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56878__auto__ = (function (){var switch__56774__auto__ = (function (state_89626){
var state_val_89627 = (state_89626[(1)]);
if((state_val_89627 === (1))){
var state_89626__$1 = state_89626;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_89626__$1,(2),cancel);
} else {
if((state_val_89627 === (2))){
var inst_89623 = (state_89626[(2)]);
var inst_89624 = jsonp.cancel(req_89707);
var state_89626__$1 = (function (){var statearr_89633 = state_89626;
(statearr_89633[(7)] = inst_89623);

return statearr_89633;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_89626__$1,inst_89624);
} else {
return null;
}
}
});
return (function() {
var cljs_http$core$jsonp_$_state_machine__56775__auto__ = null;
var cljs_http$core$jsonp_$_state_machine__56775__auto____0 = (function (){
var statearr_89637 = [null,null,null,null,null,null,null,null];
(statearr_89637[(0)] = cljs_http$core$jsonp_$_state_machine__56775__auto__);

(statearr_89637[(1)] = (1));

return statearr_89637;
});
var cljs_http$core$jsonp_$_state_machine__56775__auto____1 = (function (state_89626){
while(true){
var ret_value__56776__auto__ = (function (){try{while(true){
var result__56777__auto__ = switch__56774__auto__(state_89626);
if(cljs.core.keyword_identical_QMARK_(result__56777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__56777__auto__;
}
break;
}
}catch (e89638){var ex__56778__auto__ = e89638;
var statearr_89640_89727 = state_89626;
(statearr_89640_89727[(2)] = ex__56778__auto__);


if(cljs.core.seq((state_89626[(4)]))){
var statearr_89644_89728 = state_89626;
(statearr_89644_89728[(1)] = cljs.core.first((state_89626[(4)])));

} else {
throw ex__56778__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__56776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__89732 = state_89626;
state_89626 = G__89732;
continue;
} else {
return ret_value__56776__auto__;
}
break;
}
});
cljs_http$core$jsonp_$_state_machine__56775__auto__ = function(state_89626){
switch(arguments.length){
case 0:
return cljs_http$core$jsonp_$_state_machine__56775__auto____0.call(this);
case 1:
return cljs_http$core$jsonp_$_state_machine__56775__auto____1.call(this,state_89626);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$jsonp_$_state_machine__56775__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$jsonp_$_state_machine__56775__auto____0;
cljs_http$core$jsonp_$_state_machine__56775__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$jsonp_$_state_machine__56775__auto____1;
return cljs_http$core$jsonp_$_state_machine__56775__auto__;
})()
})();
var state__56879__auto__ = (function (){var statearr_89645 = f__56878__auto__();
(statearr_89645[(6)] = c__56877__auto___89715);

return statearr_89645;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56879__auto__);
}));

} else {
}

return channel;
});
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.request = (function cljs_http$core$request(p__89650){
var map__89651 = p__89650;
var map__89651__$1 = (((((!((map__89651 == null))))?(((((map__89651.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89651.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89651):map__89651);
var request = map__89651__$1;
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89651__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(request_method,new cljs.core.Keyword(null,"jsonp","jsonp",226119588))){
return cljs_http.core.jsonp(request);
} else {
return cljs_http.core.xhr(request);
}
});

//# sourceMappingURL=cljs_http.core.js.map
