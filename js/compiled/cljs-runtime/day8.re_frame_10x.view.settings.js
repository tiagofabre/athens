goog.provide('day8.re_frame_10x.view.settings');
day8.re_frame_10x.view.settings.comp_section_width = "400px";
day8.re_frame_10x.view.settings.instruction__section_width = "190px";
day8.re_frame_10x.view.settings.horizontal_gap = day8.re_frame_10x.common_styles.gs_7s;
day8.re_frame_10x.view.settings.vertical_gap = day8.re_frame_10x.common_styles.gs_12s;
day8.re_frame_10x.view.settings.settings_box_vertical_padding = day8.re_frame_10x.common_styles.gs_7;
day8.re_frame_10x.view.settings.settings_box_padding = day8.re_frame_10x.utils.re_com.css_join.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["7px","0"], 0));
day8.re_frame_10x.view.settings.settings_box_81 = day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.render_css(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.units.px_(day8.re_frame_10x.common_styles.gs_81,day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.units.px_STAR_((2),day8.re_frame_10x.view.settings.settings_box_vertical_padding)));
day8.re_frame_10x.view.settings.settings_box_131 = day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.render_css(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.units.px_(day8.re_frame_10x.common_styles.gs_131,day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.units.px_STAR_((2),day8.re_frame_10x.view.settings.settings_box_vertical_padding)));
day8.re_frame_10x.view.settings.settings_styles = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"#--re-frame-10x--","#--re-frame-10x--",-1788857107),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".settings",".settings",1002597819),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),day8.re_frame_10x.common_styles.white_background_color], null)], null)], null);
day8.re_frame_10x.view.settings.closeable_text_box = (function day8$re_frame_10x$view$settings$closeable_text_box(var_args){
var args__4742__auto__ = [];
var len__4736__auto___49591 = arguments.length;
var i__4737__auto___49592 = (0);
while(true){
if((i__4737__auto___49592 < len__4736__auto___49591)){
args__4742__auto__.push((arguments[i__4737__auto___49592]));

var G__49595 = (i__4737__auto___49592 + (1));
i__4737__auto___49592 = G__49595;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return day8.re_frame_10x.view.settings.closeable_text_box.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(day8.re_frame_10x.view.settings.closeable_text_box.cljs$core$IFn$_invoke$arity$variadic = (function (p__49459){
var map__49460 = p__49459;
var map__49460__$1 = (((((!((map__49460 == null))))?(((((map__49460.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49460.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49460):map__49460);
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49460__$1,new cljs.core.Keyword(null,"model","model",331153215));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49460__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var on_close = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49460__$1,new cljs.core.Keyword(null,"on-close","on-close",-761178394));
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49460__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.h_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.input_text,new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"height","height",1025178622),"25px",new cljs.core.Keyword(null,"padding","padding",1660304693),day8.re_frame_10x.utils.re_com.css_join.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["0px",day8.re_frame_10x.common_styles.gs_5s], 0))], null),new cljs.core.Keyword(null,"model","model",331153215),model,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),false,new cljs.core.Keyword(null,"on-change","on-change",-732046149),on_change], null),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.close_button,new cljs.core.Keyword(null,"div-size","div-size",1661625995),(25),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(25),new cljs.core.Keyword(null,"top-offset","top-offset",1235816245),(-4),new cljs.core.Keyword(null,"left-offset","left-offset",-331155643),(10),new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_close], null)], null)], null);
}));

(day8.re_frame_10x.view.settings.closeable_text_box.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(day8.re_frame_10x.view.settings.closeable_text_box.cljs$lang$applyTo = (function (seq49458){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49458));
}));

day8.re_frame_10x.view.settings.explanation_text = (function day8$re_frame_10x$view$settings$explanation_text(children){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.v_box,new cljs.core.Keyword(null,"width","width",-384071477),day8.re_frame_10x.view.settings.instruction__section_width,new cljs.core.Keyword(null,"gap","gap",80255254),day8.re_frame_10x.common_styles.gs_19s,new cljs.core.Keyword(null,"children","children",-940561982),children], null);
});
/**
 * settings and explanation are both children of re-com boxes
 */
day8.re_frame_10x.view.settings.settings_box = (function day8$re_frame_10x$view$settings$settings_box(settings,explanation,min_height){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.h_box,new cljs.core.Keyword(null,"gap","gap",80255254),day8.re_frame_10x.common_styles.gs_19s,new cljs.core.Keyword(null,"min-height","min-height",398480837),min_height,new cljs.core.Keyword(null,"padding","padding",1660304693),day8.re_frame_10x.view.settings.settings_box_padding,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.v_box,new cljs.core.Keyword(null,"width","width",-384071477),day8.re_frame_10x.view.settings.comp_section_width,new cljs.core.Keyword(null,"gap","gap",80255254),day8.re_frame_10x.view.settings.vertical_gap,new cljs.core.Keyword(null,"children","children",-940561982),settings], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.view.settings.explanation_text,explanation], null)], null)], null);
});
day8.re_frame_10x.view.settings.render = (function day8$re_frame_10x$view$settings$render(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.v_box,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),day8.re_frame_10x.common_styles.gs_12s,new cljs.core.Keyword(null,"margin-right","margin-right",809689658),day8.re_frame_10x.common_styles.gs_19s], null),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var num_epochs = cljs.core.deref((function (){var G__49511 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","number-of-matches","epochs/number-of-matches",1018247531)], null);
return (day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__49511) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.subscribe.call(null,G__49511));
})());
var num_traces = cljs.core.deref((function (){var G__49512 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","number-of-traces","traces/number-of-traces",-1195045241)], null);
return (day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__49512) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.subscribe.call(null,G__49512));
})());
var epochs_to_retain = (function (){var G__49514 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","number-of-retained-epochs","settings/number-of-retained-epochs",347300150)], null);
return (day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__49514) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.subscribe.call(null,G__49514));
})();
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.view.settings.settings_box,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.h_box,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"gap","gap",80255254),day8.re_frame_10x.view.settings.horizontal_gap,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.label,new cljs.core.Keyword(null,"label","label",1718410804),"Retain last"], null),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.input_text,new cljs.core.Keyword(null,"width","width",-384071477),day8.re_frame_10x.common_styles.gs_31s,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),"35px",new cljs.core.Keyword(null,"height","height",1025178622),"25px",new cljs.core.Keyword(null,"padding","padding",1660304693),day8.re_frame_10x.utils.re_com.css_join.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["0px",day8.re_frame_10x.common_styles.gs_5s], 0))], null),new cljs.core.Keyword(null,"model","model",331153215),epochs_to_retain,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),true,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__49494_SHARP_){
var G__49519 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","set-number-of-retained-epochs","settings/set-number-of-retained-epochs",-1910736736),p1__49494_SHARP_], null);
return (day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__49519) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.dispatch.call(null,G__49519));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.label,new cljs.core.Keyword(null,"label","label",1718410804),"epochs"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.gap_f,new cljs.core.Keyword(null,"size","size",1098693007),day8.re_frame_10x.common_styles.gs_31s], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.button,new cljs.core.Keyword(null,"class","class",-2030961996),"bm-muted-button app-db-panel-button",new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.v_box,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["clear all epochs"], null)], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__49524 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","reset","epochs/reset",1592438868)], null);
return (day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__49524) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.dispatch.call(null,G__49524));
})], null)], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),num_epochs," epochs currently retained, involving ",num_traces," traces."], null)], null),day8.re_frame_10x.view.settings.settings_box_81], null);
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.line], null),(function (){var follows_events_QMARK_ = cljs.core.deref((function (){var G__49531 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","app-db-follows-events?","settings/app-db-follows-events?",-115495889)], null);
return (day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__49531) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.subscribe.call(null,G__49531));
})());
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.view.settings.settings_box,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.checkbox,new cljs.core.Keyword(null,"model","model",331153215),follows_events_QMARK_,new cljs.core.Keyword(null,"label","label",1718410804),"sync app-db with epoch navigation",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__49495_SHARP_){
var G__49532 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","app-db-follows-events?","settings/app-db-follows-events?",-115495889),p1__49495_SHARP_], null);
return (day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__49532) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.dispatch.call(null,G__49532));
})], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"When you navigate to an epoch, update app-db to match. Causes UI to \"time travel\"."], null)], null),day8.re_frame_10x.view.settings.settings_box_81], null);
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.line], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.view.settings.settings_box,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.h_box,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"gap","gap",80255254),day8.re_frame_10x.view.settings.horizontal_gap,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.label,new cljs.core.Keyword(null,"label","label",1718410804),"Ignore epochs for:"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.button,new cljs.core.Keyword(null,"class","class",-2030961996),"bm-muted-button app-db-panel-button",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),day8.re_frame_10x.common_styles.gs_81s], null),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.v_box,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["+ event-id"], null)], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__49533 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","add-ignored-event","settings/add-ignored-event",-1185281607)], null);
return (day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__49533) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.dispatch.call(null,G__49533));
})], null)], null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.v_box,new cljs.core.Keyword(null,"width","width",-384071477),day8.re_frame_10x.view.settings.comp_section_width,new cljs.core.Keyword(null,"gap","gap",80255254),day8.re_frame_10x.view.settings.vertical_gap,new cljs.core.Keyword(null,"children","children",-940561982),(function (){var iter__4529__auto__ = (function day8$re_frame_10x$view$settings$render_$_iter__49535(s__49536){
return (new cljs.core.LazySeq(null,(function (){
var s__49536__$1 = s__49536;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__49536__$1);
if(temp__5735__auto__){
var s__49536__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__49536__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__49536__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__49538 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__49537 = (0);
while(true){
if((i__49537 < size__4528__auto__)){
var item = cljs.core._nth(c__4527__auto__,i__49537);
var id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item);
cljs.core.chunk_append(b__49538,cljs.core.with_meta(new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.view.settings.closeable_text_box,new cljs.core.Keyword(null,"model","model",331153215),new cljs.core.Keyword(null,"event-str","event-str",381347778).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"width","width",-384071477),"212px",new cljs.core.Keyword(null,"on-close","on-close",-761178394),((function (i__49537,id,item,c__4527__auto__,size__4528__auto__,b__49538,s__49536__$2,temp__5735__auto__){
return (function (){
var G__49548 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","remove-ignored-event","settings/remove-ignored-event",-391073521),id], null);
return (day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__49548) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.dispatch.call(null,G__49548));
});})(i__49537,id,item,c__4527__auto__,size__4528__auto__,b__49538,s__49536__$2,temp__5735__auto__))
,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (i__49537,id,item,c__4527__auto__,size__4528__auto__,b__49538,s__49536__$2,temp__5735__auto__){
return (function (p1__49497_SHARP_){
var G__49552 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","update-ignored-event","settings/update-ignored-event",-407164743),id,p1__49497_SHARP_], null);
return (day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__49552) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.dispatch.call(null,G__49552));
});})(i__49537,id,item,c__4527__auto__,size__4528__auto__,b__49538,s__49536__$2,temp__5735__auto__))
], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)));

var G__49623 = (i__49537 + (1));
i__49537 = G__49623;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__49538),day8$re_frame_10x$view$settings$render_$_iter__49535(cljs.core.chunk_rest(s__49536__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__49538),null);
}
} else {
var item = cljs.core.first(s__49536__$2);
var id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.view.settings.closeable_text_box,new cljs.core.Keyword(null,"model","model",331153215),new cljs.core.Keyword(null,"event-str","event-str",381347778).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"width","width",-384071477),"212px",new cljs.core.Keyword(null,"on-close","on-close",-761178394),((function (id,item,s__49536__$2,temp__5735__auto__){
return (function (){
var G__49557 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","remove-ignored-event","settings/remove-ignored-event",-391073521),id], null);
return (day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__49557) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.dispatch.call(null,G__49557));
});})(id,item,s__49536__$2,temp__5735__auto__))
,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (id,item,s__49536__$2,temp__5735__auto__){
return (function (p1__49497_SHARP_){
var G__49560 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","update-ignored-event","settings/update-ignored-event",-407164743),id,p1__49497_SHARP_], null);
return (day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__49560) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.dispatch.call(null,G__49560));
});})(id,item,s__49536__$2,temp__5735__auto__))
], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)),day8$re_frame_10x$view$settings$render_$_iter__49535(cljs.core.rest(s__49536__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.deref((function (){var G__49562 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","ignored-events","settings/ignored-events",1377799632)], null);
return (day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__49562) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.subscribe.call(null,G__49562));
})()));
})()], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"All trace associated with these events will be ignored."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Useful if you want to ignore a periodic background polling event."], null)], null),day8.re_frame_10x.view.settings.settings_box_131], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.line], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.view.settings.settings_box,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.h_box,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"gap","gap",80255254),day8.re_frame_10x.view.settings.horizontal_gap,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.label,new cljs.core.Keyword(null,"label","label",1718410804),"Filter out trace for views in:"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.button,new cljs.core.Keyword(null,"class","class",-2030961996),"bm-muted-button app-db-panel-button",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"100px"], null),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.v_box,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["+ namespace"], null)], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__49563 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","add-filtered-view-trace","settings/add-filtered-view-trace",1856187997)], null);
return (day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__49563) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.dispatch.call(null,G__49563));
})], null)], null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.v_box,new cljs.core.Keyword(null,"width","width",-384071477),day8.re_frame_10x.view.settings.comp_section_width,new cljs.core.Keyword(null,"gap","gap",80255254),day8.re_frame_10x.view.settings.vertical_gap,new cljs.core.Keyword(null,"children","children",-940561982),(function (){var iter__4529__auto__ = (function day8$re_frame_10x$view$settings$render_$_iter__49564(s__49565){
return (new cljs.core.LazySeq(null,(function (){
var s__49565__$1 = s__49565;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__49565__$1);
if(temp__5735__auto__){
var s__49565__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__49565__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__49565__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__49567 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__49566 = (0);
while(true){
if((i__49566 < size__4528__auto__)){
var item = cljs.core._nth(c__4527__auto__,i__49566);
var id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item);
cljs.core.chunk_append(b__49567,cljs.core.with_meta(new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.view.settings.closeable_text_box,new cljs.core.Keyword(null,"model","model",331153215),new cljs.core.Keyword(null,"ns-str","ns-str",-2062616499).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"width","width",-384071477),"343px",new cljs.core.Keyword(null,"on-close","on-close",-761178394),((function (i__49566,id,item,c__4527__auto__,size__4528__auto__,b__49567,s__49565__$2,temp__5735__auto__){
return (function (){
var G__49574 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","remove-filtered-view-trace","settings/remove-filtered-view-trace",970685301),id], null);
return (day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__49574) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.dispatch.call(null,G__49574));
});})(i__49566,id,item,c__4527__auto__,size__4528__auto__,b__49567,s__49565__$2,temp__5735__auto__))
,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (i__49566,id,item,c__4527__auto__,size__4528__auto__,b__49567,s__49565__$2,temp__5735__auto__){
return (function (p1__49503_SHARP_){
var G__49576 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","update-filtered-view-trace","settings/update-filtered-view-trace",-530575796),id,p1__49503_SHARP_], null);
return (day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__49576) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.dispatch.call(null,G__49576));
});})(i__49566,id,item,c__4527__auto__,size__4528__auto__,b__49567,s__49565__$2,temp__5735__auto__))
], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)));

var G__49637 = (i__49566 + (1));
i__49566 = G__49637;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__49567),day8$re_frame_10x$view$settings$render_$_iter__49564(cljs.core.chunk_rest(s__49565__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__49567),null);
}
} else {
var item = cljs.core.first(s__49565__$2);
var id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.view.settings.closeable_text_box,new cljs.core.Keyword(null,"model","model",331153215),new cljs.core.Keyword(null,"ns-str","ns-str",-2062616499).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"width","width",-384071477),"343px",new cljs.core.Keyword(null,"on-close","on-close",-761178394),((function (id,item,s__49565__$2,temp__5735__auto__){
return (function (){
var G__49577 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","remove-filtered-view-trace","settings/remove-filtered-view-trace",970685301),id], null);
return (day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__49577) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.dispatch.call(null,G__49577));
});})(id,item,s__49565__$2,temp__5735__auto__))
,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (id,item,s__49565__$2,temp__5735__auto__){
return (function (p1__49503_SHARP_){
var G__49578 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","update-filtered-view-trace","settings/update-filtered-view-trace",-530575796),id,p1__49503_SHARP_], null);
return (day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__49578) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.dispatch.call(null,G__49578));
});})(id,item,s__49565__$2,temp__5735__auto__))
], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)),day8$re_frame_10x$view$settings$render_$_iter__49564(cljs.core.rest(s__49565__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.deref((function (){var G__49579 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","filtered-view-trace","settings/filtered-view-trace",818098350)], null);
return (day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__49579) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.subscribe.call(null,G__49579));
})()));
})()], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Sometimes you want to focus on your own views, and the trace associated with library views is just noise."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Nominate one or more namespaces."], null)], null),day8.re_frame_10x.view.settings.settings_box_131], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.line], null),(function (){var low_level_trace = cljs.core.deref((function (){var G__49581 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","low-level-trace","settings/low-level-trace",191054289)], null);
return (day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__49581) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.subscribe.call(null,G__49581));
})());
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.view.settings.settings_box,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.label,new cljs.core.Keyword(null,"label","label",1718410804),"Remove low level trace"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.checkbox,new cljs.core.Keyword(null,"model","model",331153215),new cljs.core.Keyword(null,"reagent","reagent",2131627322).cljs$core$IFn$_invoke$arity$1(low_level_trace),new cljs.core.Keyword(null,"label","label",1718410804),"reagent internals",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__49505_SHARP_){
var G__49582 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","low-level-trace","settings/low-level-trace",191054289),new cljs.core.Keyword(null,"reagent","reagent",2131627322),p1__49505_SHARP_], null);
return (day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__49582) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.dispatch.call(null,G__49582));
})], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.checkbox,new cljs.core.Keyword(null,"model","model",331153215),new cljs.core.Keyword(null,"re-frame","re-frame",-1039473033).cljs$core$IFn$_invoke$arity$1(low_level_trace),new cljs.core.Keyword(null,"label","label",1718410804),"re-frame internals",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__49506_SHARP_){
var G__49583 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","low-level-trace","settings/low-level-trace",191054289),new cljs.core.Keyword(null,"re-frame","re-frame",-1039473033),p1__49506_SHARP_], null);
return (day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__49583) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.dispatch.call(null,G__49583));
})], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Most of the time, low level trace is noisy and you want it filtered out."], null)], null),day8.re_frame_10x.view.settings.settings_box_131], null);
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.line], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.view.settings.settings_box,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.button,new cljs.core.Keyword(null,"class","class",-2030961996),"bm-muted-button app-db-panel-button",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"100px"], null),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.v_box,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Factory Reset"], null)], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__49589 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","factory-reset","settings/factory-reset",1863855805)], null);
return (day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__49589) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.dispatch.call(null,G__49589));
})], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null),day8.re_frame_10x.view.settings.settings_box_81], null)], null)], null);
});

//# sourceMappingURL=day8.re_frame_10x.view.settings.js.map
