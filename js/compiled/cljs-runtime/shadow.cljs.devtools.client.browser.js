goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___68036 = arguments.length;
var i__4737__auto___68038 = (0);
while(true){
if((i__4737__auto___68038 < len__4736__auto___68036)){
args__4742__auto__.push((arguments[i__4737__auto___68038]));

var G__68039 = (i__4737__auto___68038 + (1));
i__4737__auto___68038 = G__68039;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq67715){
var G__67716 = cljs.core.first(seq67715);
var seq67715__$1 = cljs.core.next(seq67715);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__67716,seq67715__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__67732 = cljs.core.seq(sources);
var chunk__67733 = null;
var count__67734 = (0);
var i__67735 = (0);
while(true){
if((i__67735 < count__67734)){
var map__67764 = chunk__67733.cljs$core$IIndexed$_nth$arity$2(null,i__67735);
var map__67764__$1 = (((((!((map__67764 == null))))?(((((map__67764.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67764.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67764):map__67764);
var src = map__67764__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67764__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67764__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67764__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67764__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e67767){var e_68049 = e67767;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_68049);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_68049.message)].join('')));
}

var G__68053 = seq__67732;
var G__68054 = chunk__67733;
var G__68055 = count__67734;
var G__68056 = (i__67735 + (1));
seq__67732 = G__68053;
chunk__67733 = G__68054;
count__67734 = G__68055;
i__67735 = G__68056;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__67732);
if(temp__5735__auto__){
var seq__67732__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__67732__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__67732__$1);
var G__68058 = cljs.core.chunk_rest(seq__67732__$1);
var G__68059 = c__4556__auto__;
var G__68060 = cljs.core.count(c__4556__auto__);
var G__68061 = (0);
seq__67732 = G__68058;
chunk__67733 = G__68059;
count__67734 = G__68060;
i__67735 = G__68061;
continue;
} else {
var map__67769 = cljs.core.first(seq__67732__$1);
var map__67769__$1 = (((((!((map__67769 == null))))?(((((map__67769.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67769.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67769):map__67769);
var src = map__67769__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67769__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67769__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67769__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67769__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e67772){var e_68065 = e67772;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_68065);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_68065.message)].join('')));
}

var G__68066 = cljs.core.next(seq__67732__$1);
var G__68067 = null;
var G__68068 = (0);
var G__68069 = (0);
seq__67732 = G__68066;
chunk__67733 = G__68067;
count__67734 = G__68068;
i__67735 = G__68069;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__67776 = cljs.core.seq(js_requires);
var chunk__67777 = null;
var count__67778 = (0);
var i__67779 = (0);
while(true){
if((i__67779 < count__67778)){
var js_ns = chunk__67777.cljs$core$IIndexed$_nth$arity$2(null,i__67779);
var require_str_68071 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_68071);


var G__68072 = seq__67776;
var G__68073 = chunk__67777;
var G__68074 = count__67778;
var G__68075 = (i__67779 + (1));
seq__67776 = G__68072;
chunk__67777 = G__68073;
count__67778 = G__68074;
i__67779 = G__68075;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__67776);
if(temp__5735__auto__){
var seq__67776__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__67776__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__67776__$1);
var G__68076 = cljs.core.chunk_rest(seq__67776__$1);
var G__68077 = c__4556__auto__;
var G__68078 = cljs.core.count(c__4556__auto__);
var G__68079 = (0);
seq__67776 = G__68076;
chunk__67777 = G__68077;
count__67778 = G__68078;
i__67779 = G__68079;
continue;
} else {
var js_ns = cljs.core.first(seq__67776__$1);
var require_str_68084 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_68084);


var G__68085 = cljs.core.next(seq__67776__$1);
var G__68086 = null;
var G__68087 = (0);
var G__68088 = (0);
seq__67776 = G__68085;
chunk__67777 = G__68086;
count__67778 = G__68087;
i__67779 = G__68088;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__67785){
var map__67786 = p__67785;
var map__67786__$1 = (((((!((map__67786 == null))))?(((((map__67786.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67786.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67786):map__67786);
var msg = map__67786__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67786__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67786__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__67793(s__67794){
return (new cljs.core.LazySeq(null,(function (){
var s__67794__$1 = s__67794;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__67794__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__67801 = cljs.core.first(xs__6292__auto__);
var map__67801__$1 = (((((!((map__67801 == null))))?(((((map__67801.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67801.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67801):map__67801);
var src = map__67801__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67801__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67801__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4525__auto__ = ((function (s__67794__$1,map__67801,map__67801__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__67786,map__67786__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__67793_$_iter__67795(s__67796){
return (new cljs.core.LazySeq(null,((function (s__67794__$1,map__67801,map__67801__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__67786,map__67786__$1,msg,info,reload_info){
return (function (){
var s__67796__$1 = s__67796;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__67796__$1);
if(temp__5735__auto____$1){
var s__67796__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__67796__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__67796__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__67798 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__67797 = (0);
while(true){
if((i__67797 < size__4528__auto__)){
var warning = cljs.core._nth(c__4527__auto__,i__67797);
cljs.core.chunk_append(b__67798,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__68100 = (i__67797 + (1));
i__67797 = G__68100;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__67798),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__67793_$_iter__67795(cljs.core.chunk_rest(s__67796__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__67798),null);
}
} else {
var warning = cljs.core.first(s__67796__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__67793_$_iter__67795(cljs.core.rest(s__67796__$2)));
}
} else {
return null;
}
break;
}
});})(s__67794__$1,map__67801,map__67801__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__67786,map__67786__$1,msg,info,reload_info))
,null,null));
});})(s__67794__$1,map__67801,map__67801__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__67786,map__67786__$1,msg,info,reload_info))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(warnings));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__67793(cljs.core.rest(s__67794__$1)));
} else {
var G__68102 = cljs.core.rest(s__67794__$1);
s__67794__$1 = G__68102;
continue;
}
} else {
var G__68103 = cljs.core.rest(s__67794__$1);
s__67794__$1 = G__68103;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
var seq__67808_68104 = cljs.core.seq(warnings);
var chunk__67809_68105 = null;
var count__67810_68106 = (0);
var i__67811_68107 = (0);
while(true){
if((i__67811_68107 < count__67810_68106)){
var map__67823_68108 = chunk__67809_68105.cljs$core$IIndexed$_nth$arity$2(null,i__67811_68107);
var map__67823_68109__$1 = (((((!((map__67823_68108 == null))))?(((((map__67823_68108.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67823_68108.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67823_68108):map__67823_68108);
var w_68110 = map__67823_68109__$1;
var msg_68111__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67823_68109__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_68112 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67823_68109__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_68113 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67823_68109__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_68114 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67823_68109__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_68114)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_68112),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_68113),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_68111__$1)].join(''));


var G__68120 = seq__67808_68104;
var G__68121 = chunk__67809_68105;
var G__68122 = count__67810_68106;
var G__68123 = (i__67811_68107 + (1));
seq__67808_68104 = G__68120;
chunk__67809_68105 = G__68121;
count__67810_68106 = G__68122;
i__67811_68107 = G__68123;
continue;
} else {
var temp__5735__auto___68124 = cljs.core.seq(seq__67808_68104);
if(temp__5735__auto___68124){
var seq__67808_68125__$1 = temp__5735__auto___68124;
if(cljs.core.chunked_seq_QMARK_(seq__67808_68125__$1)){
var c__4556__auto___68126 = cljs.core.chunk_first(seq__67808_68125__$1);
var G__68127 = cljs.core.chunk_rest(seq__67808_68125__$1);
var G__68128 = c__4556__auto___68126;
var G__68129 = cljs.core.count(c__4556__auto___68126);
var G__68130 = (0);
seq__67808_68104 = G__68127;
chunk__67809_68105 = G__68128;
count__67810_68106 = G__68129;
i__67811_68107 = G__68130;
continue;
} else {
var map__67825_68134 = cljs.core.first(seq__67808_68125__$1);
var map__67825_68135__$1 = (((((!((map__67825_68134 == null))))?(((((map__67825_68134.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67825_68134.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67825_68134):map__67825_68134);
var w_68136 = map__67825_68135__$1;
var msg_68137__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67825_68135__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_68138 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67825_68135__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_68139 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67825_68135__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_68140 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67825_68135__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_68140)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_68138),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_68139),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_68137__$1)].join(''));


var G__68145 = cljs.core.next(seq__67808_68125__$1);
var G__68146 = null;
var G__68147 = (0);
var G__68148 = (0);
seq__67808_68104 = G__68145;
chunk__67809_68105 = G__68146;
count__67810_68106 = G__68147;
i__67811_68107 = G__68148;
continue;
}
} else {
}
}
break;
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__67784_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__67784_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$)){
return new$;
} else {
return false;
}
} else {
return false;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__67837){
var map__67838 = p__67837;
var map__67838__$1 = (((((!((map__67838 == null))))?(((((map__67838.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67838.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67838):map__67838);
var msg = map__67838__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67838__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__67840 = cljs.core.seq(updates);
var chunk__67842 = null;
var count__67843 = (0);
var i__67844 = (0);
while(true){
if((i__67844 < count__67843)){
var path = chunk__67842.cljs$core$IIndexed$_nth$arity$2(null,i__67844);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__67930_68167 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__67933_68168 = null;
var count__67934_68169 = (0);
var i__67935_68170 = (0);
while(true){
if((i__67935_68170 < count__67934_68169)){
var node_68173 = chunk__67933_68168.cljs$core$IIndexed$_nth$arity$2(null,i__67935_68170);
var path_match_68174 = shadow.cljs.devtools.client.browser.match_paths(node_68173.getAttribute("href"),path);
if(cljs.core.truth_(path_match_68174)){
var new_link_68175 = (function (){var G__67945 = node_68173.cloneNode(true);
G__67945.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_68174),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__67945;
})();
(new_link_68175.onload = ((function (seq__67930_68167,chunk__67933_68168,count__67934_68169,i__67935_68170,seq__67840,chunk__67842,count__67843,i__67844,new_link_68175,path_match_68174,node_68173,path,map__67838,map__67838__$1,msg,updates){
return (function (){
return goog.dom.removeNode(node_68173);
});})(seq__67930_68167,chunk__67933_68168,count__67934_68169,i__67935_68170,seq__67840,chunk__67842,count__67843,i__67844,new_link_68175,path_match_68174,node_68173,path,map__67838,map__67838__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_68174], 0));

goog.dom.insertSiblingAfter(new_link_68175,node_68173);


var G__68182 = seq__67930_68167;
var G__68183 = chunk__67933_68168;
var G__68184 = count__67934_68169;
var G__68185 = (i__67935_68170 + (1));
seq__67930_68167 = G__68182;
chunk__67933_68168 = G__68183;
count__67934_68169 = G__68184;
i__67935_68170 = G__68185;
continue;
} else {
var G__68190 = seq__67930_68167;
var G__68191 = chunk__67933_68168;
var G__68192 = count__67934_68169;
var G__68193 = (i__67935_68170 + (1));
seq__67930_68167 = G__68190;
chunk__67933_68168 = G__68191;
count__67934_68169 = G__68192;
i__67935_68170 = G__68193;
continue;
}
} else {
var temp__5735__auto___68194 = cljs.core.seq(seq__67930_68167);
if(temp__5735__auto___68194){
var seq__67930_68195__$1 = temp__5735__auto___68194;
if(cljs.core.chunked_seq_QMARK_(seq__67930_68195__$1)){
var c__4556__auto___68200 = cljs.core.chunk_first(seq__67930_68195__$1);
var G__68201 = cljs.core.chunk_rest(seq__67930_68195__$1);
var G__68202 = c__4556__auto___68200;
var G__68203 = cljs.core.count(c__4556__auto___68200);
var G__68204 = (0);
seq__67930_68167 = G__68201;
chunk__67933_68168 = G__68202;
count__67934_68169 = G__68203;
i__67935_68170 = G__68204;
continue;
} else {
var node_68206 = cljs.core.first(seq__67930_68195__$1);
var path_match_68208 = shadow.cljs.devtools.client.browser.match_paths(node_68206.getAttribute("href"),path);
if(cljs.core.truth_(path_match_68208)){
var new_link_68209 = (function (){var G__67950 = node_68206.cloneNode(true);
G__67950.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_68208),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__67950;
})();
(new_link_68209.onload = ((function (seq__67930_68167,chunk__67933_68168,count__67934_68169,i__67935_68170,seq__67840,chunk__67842,count__67843,i__67844,new_link_68209,path_match_68208,node_68206,seq__67930_68195__$1,temp__5735__auto___68194,path,map__67838,map__67838__$1,msg,updates){
return (function (){
return goog.dom.removeNode(node_68206);
});})(seq__67930_68167,chunk__67933_68168,count__67934_68169,i__67935_68170,seq__67840,chunk__67842,count__67843,i__67844,new_link_68209,path_match_68208,node_68206,seq__67930_68195__$1,temp__5735__auto___68194,path,map__67838,map__67838__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_68208], 0));

goog.dom.insertSiblingAfter(new_link_68209,node_68206);


var G__68215 = cljs.core.next(seq__67930_68195__$1);
var G__68216 = null;
var G__68217 = (0);
var G__68218 = (0);
seq__67930_68167 = G__68215;
chunk__67933_68168 = G__68216;
count__67934_68169 = G__68217;
i__67935_68170 = G__68218;
continue;
} else {
var G__68219 = cljs.core.next(seq__67930_68195__$1);
var G__68220 = null;
var G__68221 = (0);
var G__68222 = (0);
seq__67930_68167 = G__68219;
chunk__67933_68168 = G__68220;
count__67934_68169 = G__68221;
i__67935_68170 = G__68222;
continue;
}
}
} else {
}
}
break;
}


var G__68224 = seq__67840;
var G__68225 = chunk__67842;
var G__68226 = count__67843;
var G__68227 = (i__67844 + (1));
seq__67840 = G__68224;
chunk__67842 = G__68225;
count__67843 = G__68226;
i__67844 = G__68227;
continue;
} else {
var G__68229 = seq__67840;
var G__68230 = chunk__67842;
var G__68231 = count__67843;
var G__68232 = (i__67844 + (1));
seq__67840 = G__68229;
chunk__67842 = G__68230;
count__67843 = G__68231;
i__67844 = G__68232;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__67840);
if(temp__5735__auto__){
var seq__67840__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__67840__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__67840__$1);
var G__68234 = cljs.core.chunk_rest(seq__67840__$1);
var G__68235 = c__4556__auto__;
var G__68236 = cljs.core.count(c__4556__auto__);
var G__68237 = (0);
seq__67840 = G__68234;
chunk__67842 = G__68235;
count__67843 = G__68236;
i__67844 = G__68237;
continue;
} else {
var path = cljs.core.first(seq__67840__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__67952_68241 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__67955_68242 = null;
var count__67956_68243 = (0);
var i__67957_68244 = (0);
while(true){
if((i__67957_68244 < count__67956_68243)){
var node_68247 = chunk__67955_68242.cljs$core$IIndexed$_nth$arity$2(null,i__67957_68244);
var path_match_68248 = shadow.cljs.devtools.client.browser.match_paths(node_68247.getAttribute("href"),path);
if(cljs.core.truth_(path_match_68248)){
var new_link_68252 = (function (){var G__67967 = node_68247.cloneNode(true);
G__67967.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_68248),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__67967;
})();
(new_link_68252.onload = ((function (seq__67952_68241,chunk__67955_68242,count__67956_68243,i__67957_68244,seq__67840,chunk__67842,count__67843,i__67844,new_link_68252,path_match_68248,node_68247,path,seq__67840__$1,temp__5735__auto__,map__67838,map__67838__$1,msg,updates){
return (function (){
return goog.dom.removeNode(node_68247);
});})(seq__67952_68241,chunk__67955_68242,count__67956_68243,i__67957_68244,seq__67840,chunk__67842,count__67843,i__67844,new_link_68252,path_match_68248,node_68247,path,seq__67840__$1,temp__5735__auto__,map__67838,map__67838__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_68248], 0));

goog.dom.insertSiblingAfter(new_link_68252,node_68247);


var G__68256 = seq__67952_68241;
var G__68257 = chunk__67955_68242;
var G__68258 = count__67956_68243;
var G__68259 = (i__67957_68244 + (1));
seq__67952_68241 = G__68256;
chunk__67955_68242 = G__68257;
count__67956_68243 = G__68258;
i__67957_68244 = G__68259;
continue;
} else {
var G__68260 = seq__67952_68241;
var G__68261 = chunk__67955_68242;
var G__68262 = count__67956_68243;
var G__68263 = (i__67957_68244 + (1));
seq__67952_68241 = G__68260;
chunk__67955_68242 = G__68261;
count__67956_68243 = G__68262;
i__67957_68244 = G__68263;
continue;
}
} else {
var temp__5735__auto___68267__$1 = cljs.core.seq(seq__67952_68241);
if(temp__5735__auto___68267__$1){
var seq__67952_68268__$1 = temp__5735__auto___68267__$1;
if(cljs.core.chunked_seq_QMARK_(seq__67952_68268__$1)){
var c__4556__auto___68269 = cljs.core.chunk_first(seq__67952_68268__$1);
var G__68270 = cljs.core.chunk_rest(seq__67952_68268__$1);
var G__68271 = c__4556__auto___68269;
var G__68272 = cljs.core.count(c__4556__auto___68269);
var G__68273 = (0);
seq__67952_68241 = G__68270;
chunk__67955_68242 = G__68271;
count__67956_68243 = G__68272;
i__67957_68244 = G__68273;
continue;
} else {
var node_68275 = cljs.core.first(seq__67952_68268__$1);
var path_match_68276 = shadow.cljs.devtools.client.browser.match_paths(node_68275.getAttribute("href"),path);
if(cljs.core.truth_(path_match_68276)){
var new_link_68277 = (function (){var G__67969 = node_68275.cloneNode(true);
G__67969.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_68276),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__67969;
})();
(new_link_68277.onload = ((function (seq__67952_68241,chunk__67955_68242,count__67956_68243,i__67957_68244,seq__67840,chunk__67842,count__67843,i__67844,new_link_68277,path_match_68276,node_68275,seq__67952_68268__$1,temp__5735__auto___68267__$1,path,seq__67840__$1,temp__5735__auto__,map__67838,map__67838__$1,msg,updates){
return (function (){
return goog.dom.removeNode(node_68275);
});})(seq__67952_68241,chunk__67955_68242,count__67956_68243,i__67957_68244,seq__67840,chunk__67842,count__67843,i__67844,new_link_68277,path_match_68276,node_68275,seq__67952_68268__$1,temp__5735__auto___68267__$1,path,seq__67840__$1,temp__5735__auto__,map__67838,map__67838__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_68276], 0));

goog.dom.insertSiblingAfter(new_link_68277,node_68275);


var G__68279 = cljs.core.next(seq__67952_68268__$1);
var G__68280 = null;
var G__68281 = (0);
var G__68282 = (0);
seq__67952_68241 = G__68279;
chunk__67955_68242 = G__68280;
count__67956_68243 = G__68281;
i__67957_68244 = G__68282;
continue;
} else {
var G__68283 = cljs.core.next(seq__67952_68268__$1);
var G__68284 = null;
var G__68285 = (0);
var G__68286 = (0);
seq__67952_68241 = G__68283;
chunk__67955_68242 = G__68284;
count__67956_68243 = G__68285;
i__67957_68244 = G__68286;
continue;
}
}
} else {
}
}
break;
}


var G__68287 = cljs.core.next(seq__67840__$1);
var G__68288 = null;
var G__68289 = (0);
var G__68290 = (0);
seq__67840 = G__68287;
chunk__67842 = G__68288;
count__67843 = G__68289;
i__67844 = G__68290;
continue;
} else {
var G__68293 = cljs.core.next(seq__67840__$1);
var G__68294 = null;
var G__68295 = (0);
var G__68296 = (0);
seq__67840 = G__68293;
chunk__67842 = G__68294;
count__67843 = G__68295;
i__67844 = G__68296;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__67974){
var map__67976 = p__67974;
var map__67976__$1 = (((((!((map__67976 == null))))?(((((map__67976.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67976.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67976):map__67976);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67976__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.client_info = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null);
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__67988){
var map__67989 = p__67988;
var map__67989__$1 = (((((!((map__67989 == null))))?(((((map__67989.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67989.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67989):map__67989);
var _ = map__67989__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67989__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__67991,done,error){
var map__67992 = p__67991;
var map__67992__$1 = (((((!((map__67992 == null))))?(((((map__67992.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67992.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67992):map__67992);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67992__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__67994,done,error){
var map__67995 = p__67994;
var map__67995__$1 = (((((!((map__67995 == null))))?(((((map__67995.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67995.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67995):map__67995);
var msg = map__67995__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67995__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67995__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67995__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__68000){
var map__68001 = p__68000;
var map__68001__$1 = (((((!((map__68001 == null))))?(((((map__68001.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68001.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68001):map__68001);
var src = map__68001__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68001__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4115__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4115__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__68007 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__68007) : done.call(null,G__68007));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__68008){
var map__68009 = p__68008;
var map__68009__$1 = (((((!((map__68009 == null))))?(((((map__68009.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68009.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68009):map__68009);
var msg__$1 = map__68009__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68009__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e68011){var ex = e68011;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__68012){
var map__68013 = p__68012;
var map__68013__$1 = (((((!((map__68013 == null))))?(((((map__68013.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68013.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68013):map__68013);
var env = map__68013__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68013__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__68017){
var map__68018 = p__68017;
var map__68018__$1 = (((((!((map__68018 == null))))?(((((map__68018.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68018.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68018):map__68018);
var msg = map__68018__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68018__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__68025){
var map__68026 = p__68025;
var map__68026__$1 = (((((!((map__68026 == null))))?(((((map__68026.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68026.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68026):map__68026);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68026__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68026__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__68029){
var map__68030 = p__68029;
var map__68030__$1 = (((((!((map__68030 == null))))?(((((map__68030.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68030.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68030):map__68030);
var svc = map__68030__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68030__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
