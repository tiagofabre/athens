goog.provide('athens.effects');
/**
 * Filter: node/title doesn't exist yet in the db or in the titles being asserted (e.g. when renaming a page and changing it's references).
 *   Map: new node/title entity.
 */
athens.effects.new_titles_to_tx_data = (function athens$effects$new_titles_to_tx_data(new_titles,assert_titles){
var now = athens.util.now_ts();
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (t){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("node","title","node/title",628940777),t,new cljs.core.Keyword("block","uid","block/uid",-1623585167),athens.util.gen_block_uid(),new cljs.core.Keyword("create","time","create/time",-1563077754),now,new cljs.core.Keyword("edit","time","edit/time",1384867476),now], null);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (x){
return (((athens.db.search_exact_node_title(x) == null)) && ((!(cljs.core.contains_QMARK_(assert_titles,x)))));
}),new_titles));
});
/**
 * Purpose is to remove orphan pages. However, if entire entity is retracted, orphan pages are still created.
 * 
 *   Filter: new-str doesn't include link, page exists, page has no children, and has no other [[linked refs]].
 *   Map: retractEntity
 */
athens.effects.old_titles_to_tx_data = (function athens$effects$old_titles_to_tx_data(old_titles,new_str,with_db){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (title){
var temp__5735__auto__ = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(athens.db.pull_nil(with_db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("node","title","node/title",628940777),title], null)));
if(cljs.core.truth_(temp__5735__auto__)){
var eid = temp__5735__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retractEntity","db/retractEntity",-1452737935),eid], null);
} else {
return null;
}
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (title){
var node = athens.db.pull_nil(with_db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("node","title","node/title",628940777),title], null));
if((!(clojure.string.includes_QMARK_(new_str,title)))){
var and__4115__auto__ = node;
if(cljs.core.truth_(and__4115__auto__)){
return ((cljs.core.empty_QMARK_(new cljs.core.Keyword("block","children","block/children",-1040716209).cljs$core$IFn$_invoke$arity$1(node))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),athens.db.linked_refs_count(title))));
} else {
return and__4115__auto__;
}
} else {
return false;
}
}),old_titles));
});
/**
 * Filter: ((ref-uid)) points to a valid block (no :node/title).
 *   Map: add block/ref relationship.
 */
athens.effects.new_refs_to_tx_data = (function athens$effects$new_refs_to_tx_data(new_block_refs,e){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (ref_uid){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),e,new cljs.core.Keyword("block","refs","block/refs",-1214495349),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),ref_uid], null)], null);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (ref_uid){
var block = (function (){var G__90023 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),cljs.core.list(new cljs.core.Symbol(null,"pull","pull",779986722,null),new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null)),new cljs.core.Symbol(null,".",".",1975675962,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?uid","?uid",-1894399761,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("block","uid","block/uid",-1623585167),new cljs.core.Symbol(null,"?uid","?uid",-1894399761,null)], null)], null);
var G__90024 = cljs.core.deref(athens.db.dsdb);
var G__90025 = ref_uid;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$3 ? datascript.core.q.cljs$core$IFn$_invoke$arity$3(G__90023,G__90024,G__90025) : datascript.core.q.call(null,G__90023,G__90024,G__90025));
})();
var map__90022 = block;
var map__90022__$1 = (((((!((map__90022 == null))))?(((((map__90022.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__90022.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__90022):map__90022);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90022__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var and__4115__auto__ = block;
if(cljs.core.truth_(and__4115__auto__)){
return (title == null);
} else {
return and__4115__auto__;
}
}),new_block_refs));
});
/**
 * Filter: No filter.
 *   Map: add block/ref relationship.
 */
athens.effects.new_page_refs_to_tx_data = (function athens$effects$new_page_refs_to_tx_data(new_page_refs,source_eid){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (page_id){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),source_eid,new cljs.core.Keyword("block","refs","block/refs",-1214495349),page_id], null);
}),new_page_refs);
});
/**
 * Filter: new-str doesn't include block ref anymore, ((ref-uid)) points to an actual block, and block/ref relationship exists.
 *   Map: retract relationship.
 */
athens.effects.old_block_refs_to_tx_data = (function athens$effects$old_block_refs_to_tx_data(old_block_refs,e,new_str){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (ref_uid){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retract","db/retract",-1549825231),e,new cljs.core.Keyword("block","refs","block/refs",-1214495349),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),ref_uid], null)], null);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (ref_uid){
var eid = athens.db.e_by_av(new cljs.core.Keyword("block","uid","block/uid",-1623585167),ref_uid);
var and__4115__auto__ = eid;
if(cljs.core.truth_(and__4115__auto__)){
return (!(clojure.string.includes_QMARK_(new_str,["((",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ref_uid),"))"].join(''))));
} else {
return and__4115__auto__;
}
}),old_block_refs));
});
/**
 * Filter: [[page]] points to a page and block/ref relationship does exist.
 *   Map: retract block/ref relationship.
 * 
 *   Edge Cases:
 *   1. Merging two pages (renaming a page to a title that already exists).
 *   - This attempt to update all the Linked References strings
 *   - Querying with-db rather than the current-db to check that entity retraction already takes care of block/ref retraction.
 * 
 *   2. Deleting an orphan page, i.e. deleting a [[link]] when the [[link]] has no children and no other linked references
 *   - In this case, we can't use with-db, because the orphan page retraction happens in old-titles-to-tx-data.
 *   - Pass `old-titles` and check that the block/ref being deleted is not there to avoid double retraction.
 *   - Don't use :db.fn/retractAttribute because :db.cardinality/many
 */
athens.effects.old_page_refs_to_tx_data = (function athens$effects$old_page_refs_to_tx_data(old_page_refs,source_eid,new_str,with_db,old_titles){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (page_id){
var temp__5735__auto__ = athens.db.pull_nil(with_db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),page_id);
if(cljs.core.truth_(temp__5735__auto__)){
var page = temp__5735__auto__;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retract","db/retract",-1549825231),source_eid,new cljs.core.Keyword("block","refs","block/refs",-1214495349),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),new cljs.core.Keyword("block","uid","block/uid",-1623585167).cljs$core$IFn$_invoke$arity$1(page)], null)], null);
} else {
return null;
}
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (page_id){
var page = athens.db.pull_nil(with_db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),page_id);
var old_pages_eids = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,old_titles));
var map__90041 = page;
var map__90041__$1 = (((((!((map__90041 == null))))?(((((map__90041.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__90041.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__90041):map__90041);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90041__$1,new cljs.core.Keyword("node","title","node/title",628940777));
if((!(clojure.string.includes_QMARK_(new_str,["[[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(title),"]]"].join(''))))){
var and__4115__auto__ = page;
if(cljs.core.truth_(and__4115__auto__)){
var and__4115__auto____$1 = title;
if(cljs.core.truth_(and__4115__auto____$1)){
return cljs.core.not(cljs.core.get.cljs$core$IFn$_invoke$arity$2(old_pages_eids,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(page)));
} else {
return and__4115__auto____$1;
}
} else {
return and__4115__auto__;
}
} else {
return false;
}
}),old_page_refs));
});
/**
 * When block/string is asserted, parse for links and block refs to add.
 *   When block/string is retracted, parse for links and block refs to remove.
 *   Retractions need to look at asserted block/string. Use empty string if only retract.
 */
athens.effects.parse_for_links = (function athens$effects$parse_for_links(with_tx){
var with_tx_data = new cljs.core.Keyword(null,"tx-data","tx-data",934159761).cljs$core$IFn$_invoke$arity$1(with_tx);
var with_db = new cljs.core.Keyword(null,"db-after","db-after",-571884666).cljs$core$IFn$_invoke$arity$1(with_tx);
var assert_titles = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__90057_SHARP_){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p1__90057_SHARP_,(2));
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__90056_SHARP_){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.second(p1__90056_SHARP_),new cljs.core.Keyword("node","title","node/title",628940777))) && (cljs.core.last(p1__90056_SHARP_) === true));
}),with_tx_data)));
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__90068){
var vec__90069 = p__90068;
var assertion = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__90069,(0),null);
var retraction = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__90069,(1),null);
if(((cljs.core.last(assertion) === true) && (cljs.core.last(retraction) === false))){
var eid = cljs.core.first(assertion);
var assert_string = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(assertion,(2));
var retract_string = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(retraction,(2));
var assert_data = athens.walk.walk_string(assert_string);
var retract_data = athens.walk.walk_string(retract_string);
var new_block_refs = athens.effects.new_refs_to_tx_data(new cljs.core.Keyword("block","refs","block/refs",-1214495349).cljs$core$IFn$_invoke$arity$1(assert_data),eid);
var old_titles = athens.effects.old_titles_to_tx_data(new cljs.core.Keyword("node","titles","node/titles",783660933).cljs$core$IFn$_invoke$arity$1(retract_data),assert_string,with_db);
var new_titles = athens.effects.new_titles_to_tx_data(new cljs.core.Keyword("node","titles","node/titles",783660933).cljs$core$IFn$_invoke$arity$1(assert_data),assert_titles);
var new_page_refs = athens.effects.new_page_refs_to_tx_data(new cljs.core.Keyword("page","refs","page/refs",-1563352171).cljs$core$IFn$_invoke$arity$1(assert_data),eid);
var old_block_refs = athens.effects.old_block_refs_to_tx_data(new cljs.core.Keyword("block","refs","block/refs",-1214495349).cljs$core$IFn$_invoke$arity$1(retract_data),eid,assert_string);
var old_page_refs = athens.effects.old_page_refs_to_tx_data(new cljs.core.Keyword("page","refs","page/refs",-1563352171).cljs$core$IFn$_invoke$arity$1(retract_data),eid,assert_string,with_db,old_titles);
var tx_data = cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.PersistentVector.EMPTY,new_titles,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new_block_refs,new_page_refs,old_titles,old_block_refs,old_page_refs], 0));
return tx_data;
} else {
if(((cljs.core.last(assertion) === true) && ((retraction == null)))){
var eid = cljs.core.first(assertion);
var assert_string = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(assertion,(2));
var assert_data = athens.walk.walk_string(assert_string);
var new_titles = athens.effects.new_titles_to_tx_data(new cljs.core.Keyword("node","titles","node/titles",783660933).cljs$core$IFn$_invoke$arity$1(assert_data),assert_titles);
var new_page_refs = athens.effects.new_page_refs_to_tx_data(new cljs.core.Keyword("page","refs","page/refs",-1563352171).cljs$core$IFn$_invoke$arity$1(assert_data),eid);
var new_block_refs = athens.effects.new_refs_to_tx_data(new cljs.core.Keyword("block","refs","block/refs",-1214495349).cljs$core$IFn$_invoke$arity$1(assert_data),eid);
var tx_data = cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.PersistentVector.EMPTY,new_titles,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new_block_refs,new_page_refs], 0));
return tx_data;
} else {
if(((cljs.core.last(assertion) === false) && ((retraction == null)))){
var eid = cljs.core.first(retraction);
var assert_string = "";
var retract_string = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(retraction,(2));
var retract_data = athens.walk.walk_string(retract_string);
var old_titles = athens.effects.old_titles_to_tx_data(new cljs.core.Keyword("node","titles","node/titles",783660933).cljs$core$IFn$_invoke$arity$1(retract_data),assert_string,with_db);
var old_block_refs = athens.effects.old_block_refs_to_tx_data(new cljs.core.Keyword("block","refs","block/refs",-1214495349).cljs$core$IFn$_invoke$arity$1(retract_data),eid,assert_string);
var old_page_refs = athens.effects.old_page_refs_to_tx_data(new cljs.core.Keyword("page","refs","page/refs",-1563352171).cljs$core$IFn$_invoke$arity$1(retract_data),eid,assert_string,with_db,old_titles);
var tx_data = cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.PersistentVector.EMPTY,old_titles,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([old_block_refs,old_page_refs], 0));
return tx_data;
} else {
return null;
}
}
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__90092){
var vec__90093 = p__90092;
var _eid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__90093,(0),null);
var datoms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__90093,(1),null);
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__90062_SHARP_){
return cljs.core.not(cljs.core.last(p1__90062_SHARP_));
}),datoms);
}),cljs.core.group_by(cljs.core.first,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__90058_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.second(p1__90058_SHARP_),new cljs.core.Keyword("block","string","block/string",-2066596447));
}),with_tx_data)))], 0));
});
/**
 * Only creates `link-created` events for now.
 *   TODO: link-deleted events
 */
athens.effects.ph_link_created_BANG_ = (function athens$effects$ph_link_created_BANG_(outputs){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (x){
return posthog.capture("link-created",cljs.core.clj__GT_js(x));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__90122){
var vec__90123 = p__90122;
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__90123,(0),null);
var _a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__90123,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__90123,(2),null);
var _t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__90123,(3),null);
var _t_or_f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__90123,(4),null);
var num_refs = cljs.core.count(new cljs.core.Keyword("block","_refs","block/_refs",830218531).cljs$core$IFn$_invoke$arity$1((function (){var G__90128 = cljs.core.deref(athens.db.dsdb);
var G__90129 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","_refs","block/_refs",830218531)], null);
var G__90130 = v;
return (datascript.core.pull.cljs$core$IFn$_invoke$arity$3 ? datascript.core.pull.cljs$core$IFn$_invoke$arity$3(G__90128,G__90129,G__90130) : datascript.core.pull.call(null,G__90128,G__90129,G__90130));
})()));
var block_or_page = (cljs.core.truth_(new cljs.core.Keyword("node","title","node/title",628940777).cljs$core$IFn$_invoke$arity$1((function (){var G__90131 = cljs.core.deref(athens.db.dsdb);
var G__90132 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("node","title","node/title",628940777),new cljs.core.Keyword("block","string","block/string",-2066596447)], null);
var G__90133 = e;
return (datascript.core.pull.cljs$core$IFn$_invoke$arity$3 ? datascript.core.pull.cljs$core$IFn$_invoke$arity$3(G__90131,G__90132,G__90133) : datascript.core.pull.call(null,G__90131,G__90132,G__90133));
})()))?new cljs.core.Keyword(null,"page","page",849072397):new cljs.core.Keyword(null,"block","block",664686210));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"refs","refs",-1560051448),num_refs,new cljs.core.Keyword(null,"attr","attr",-604132353),block_or_page], null);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__90138){
var vec__90139 = p__90138;
var _e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__90139,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__90139,(1),null);
var _v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__90139,(2),null);
var _t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__90139,(3),null);
var t_or_f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__90139,(4),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,new cljs.core.Keyword("block","refs","block/refs",-1214495349))){
return t_or_f;
} else {
return false;
}
}),outputs))));
});
athens.effects.walk_transact = (function athens$effects$walk_transact(tx_data){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["TX RAW INPUTS"], 0));

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(tx_data);

try{var with_tx = datascript.core.with$.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(athens.db.dsdb),tx_data);
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["TX WITH"], 0));

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"tx-data","tx-data",934159761).cljs$core$IFn$_invoke$arity$1(with_tx));

var more_tx_data = athens.effects.parse_for_links(with_tx);
var final_tx_data = cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(tx_data,more_tx_data));
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["TX MORE"], 0));

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(more_tx_data);

cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["TX FINAL INPUTS"], 0));

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(final_tx_data);

var outputs = new cljs.core.Keyword(null,"tx-data","tx-data",934159761).cljs$core$IFn$_invoke$arity$1(posh.reagent.transact_BANG_(athens.db.dsdb,final_tx_data));
athens.effects.ph_link_created_BANG_(outputs);

cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["TX OUTPUTS"], 0));

return cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(outputs);
}catch (e90145){if((e90145 instanceof Error)){
var e = e90145;
alert(cljs.core.str.cljs$core$IFn$_invoke$arity$1(e));

return cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["EXCEPTION",e], 0));
} else {
throw e90145;

}
}});
re_frame.core.reg_fx(new cljs.core.Keyword(null,"transact!","transact!",-822725810),(function (tx_data){
return athens.effects.walk_transact(tx_data);
}));
re_frame.core.reg_fx(new cljs.core.Keyword(null,"reset-conn!","reset-conn!",-325354379),(function (new_db){
return datascript.core.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,new_db);
}));
re_frame.core.reg_fx(new cljs.core.Keyword("local-storage","set!","local-storage/set!",901741855),(function (p__90149){
var vec__90150 = p__90149;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__90150,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__90150,(1),null);
return localStorage.setItem(key,value);
}));
re_frame.core.reg_fx(new cljs.core.Keyword("local-storage","set-db!","local-storage/set-db!",581380949),(function (db){
return localStorage.setItem("datascript/DB",datascript.transit.write_transit_str(db));
}));
re_frame.core.reg_fx(new cljs.core.Keyword(null,"http","http",382524695),(function (p__90153){
var map__90154 = p__90153;
var map__90154__$1 = (((((!((map__90154 == null))))?(((((map__90154.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__90154.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__90154):map__90154);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90154__$1,new cljs.core.Keyword(null,"url","url",276297046));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90154__$1,new cljs.core.Keyword(null,"method","method",55703592));
var opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90154__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90154__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90154__$1,new cljs.core.Keyword(null,"on-failure","on-failure",842888245));
var c__56877__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56878__auto__ = (function (){var switch__56774__auto__ = (function (state_90212){
var state_val_90213 = (state_90212[(1)]);
if((state_val_90213 === (7))){
var inst_90175 = (state_90212[(7)]);
var inst_90175__$1 = (state_90212[(2)]);
var inst_90178 = (inst_90175__$1 == null);
var inst_90179 = cljs.core.not(inst_90178);
var state_90212__$1 = (function (){var statearr_90224 = state_90212;
(statearr_90224[(7)] = inst_90175__$1);

return statearr_90224;
})();
if(inst_90179){
var statearr_90225_90338 = state_90212__$1;
(statearr_90225_90338[(1)] = (8));

} else {
var statearr_90226_90339 = state_90212__$1;
(statearr_90226_90339[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90213 === (1))){
var state_90212__$1 = state_90212;
var G__90227_90340 = method;
var G__90227_90341__$1 = (((G__90227_90340 instanceof cljs.core.Keyword))?G__90227_90340.fqn:null);
switch (G__90227_90341__$1) {
case "post":
var statearr_90228_90343 = state_90212__$1;
(statearr_90228_90343[(1)] = (3));


break;
case "get":
var statearr_90229_90344 = state_90212__$1;
(statearr_90229_90344[(1)] = (4));


break;
case "put":
var statearr_90230_90345 = state_90212__$1;
(statearr_90230_90345[(1)] = (5));


break;
case "delete":
var statearr_90231_90346 = state_90212__$1;
(statearr_90231_90346[(1)] = (6));


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__90227_90341__$1)].join('')));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90213 === (4))){
var state_90212__$1 = state_90212;
var statearr_90235_90347 = state_90212__$1;
(statearr_90235_90347[(2)] = cljs_http.client.get);

(statearr_90235_90347[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90213 === (15))){
var inst_90175 = (state_90212[(7)]);
var state_90212__$1 = state_90212;
var statearr_90236_90348 = state_90212__$1;
(statearr_90236_90348[(2)] = inst_90175);

(statearr_90236_90348[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90213 === (13))){
var inst_90189 = (state_90212[(2)]);
var state_90212__$1 = state_90212;
var statearr_90237_90349 = state_90212__$1;
(statearr_90237_90349[(2)] = inst_90189);

(statearr_90237_90349[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90213 === (6))){
var state_90212__$1 = state_90212;
var statearr_90238_90350 = state_90212__$1;
(statearr_90238_90350[(2)] = cljs_http.client.delete$);

(statearr_90238_90350[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90213 === (17))){
var inst_90200 = (state_90212[(8)]);
var inst_90202 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_success,inst_90200);
var inst_90203 = re_frame.core.dispatch(inst_90202);
var state_90212__$1 = state_90212;
var statearr_90242_90351 = state_90212__$1;
(statearr_90242_90351[(2)] = inst_90203);

(statearr_90242_90351[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90213 === (3))){
var state_90212__$1 = state_90212;
var statearr_90245_90352 = state_90212__$1;
(statearr_90245_90352[(2)] = cljs_http.client.post);

(statearr_90245_90352[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90213 === (12))){
var state_90212__$1 = state_90212;
var statearr_90247_90353 = state_90212__$1;
(statearr_90247_90353[(2)] = false);

(statearr_90247_90353[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90213 === (2))){
var inst_90170 = (state_90212[(2)]);
var inst_90173 = (inst_90170.cljs$core$IFn$_invoke$arity$2 ? inst_90170.cljs$core$IFn$_invoke$arity$2(url,opts) : inst_90170.call(null,url,opts));
var state_90212__$1 = state_90212;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_90212__$1,(7),inst_90173);
} else {
if((state_val_90213 === (19))){
var inst_90208 = (state_90212[(2)]);
var state_90212__$1 = state_90212;
return cljs.core.async.impl.ioc_helpers.return_chan(state_90212__$1,inst_90208);
} else {
if((state_val_90213 === (11))){
var state_90212__$1 = state_90212;
var statearr_90249_90354 = state_90212__$1;
(statearr_90249_90354[(2)] = true);

(statearr_90249_90354[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90213 === (9))){
var state_90212__$1 = state_90212;
var statearr_90251_90355 = state_90212__$1;
(statearr_90251_90355[(2)] = false);

(statearr_90251_90355[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90213 === (5))){
var state_90212__$1 = state_90212;
var statearr_90254_90356 = state_90212__$1;
(statearr_90254_90356[(2)] = cljs_http.client.put);

(statearr_90254_90356[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90213 === (14))){
var inst_90175 = (state_90212[(7)]);
var inst_90194 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_90175);
var state_90212__$1 = state_90212;
var statearr_90255_90357 = state_90212__$1;
(statearr_90255_90357[(2)] = inst_90194);

(statearr_90255_90357[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90213 === (16))){
var inst_90197 = (state_90212[(9)]);
var inst_90197__$1 = (state_90212[(2)]);
var inst_90198 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_90197__$1,new cljs.core.Keyword(null,"success","success",1890645906));
var inst_90200 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_90197__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var state_90212__$1 = (function (){var statearr_90257 = state_90212;
(statearr_90257[(8)] = inst_90200);

(statearr_90257[(9)] = inst_90197__$1);

return statearr_90257;
})();
if(cljs.core.truth_(inst_90198)){
var statearr_90258_90358 = state_90212__$1;
(statearr_90258_90358[(1)] = (17));

} else {
var statearr_90259_90359 = state_90212__$1;
(statearr_90259_90359[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90213 === (10))){
var inst_90192 = (state_90212[(2)]);
var state_90212__$1 = state_90212;
if(cljs.core.truth_(inst_90192)){
var statearr_90261_90360 = state_90212__$1;
(statearr_90261_90360[(1)] = (14));

} else {
var statearr_90263_90364 = state_90212__$1;
(statearr_90263_90364[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90213 === (18))){
var inst_90197 = (state_90212[(9)]);
var inst_90205 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_failure,inst_90197);
var inst_90206 = re_frame.core.dispatch(inst_90205);
var state_90212__$1 = state_90212;
var statearr_90264_90365 = state_90212__$1;
(statearr_90264_90365[(2)] = inst_90206);

(statearr_90264_90365[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90213 === (8))){
var inst_90175 = (state_90212[(7)]);
var inst_90181 = inst_90175.cljs$lang$protocol_mask$partition0$;
var inst_90182 = (inst_90181 & (64));
var inst_90183 = inst_90175.cljs$core$ISeq$;
var inst_90184 = (cljs.core.PROTOCOL_SENTINEL === inst_90183);
var inst_90185 = ((inst_90182) || (inst_90184));
var state_90212__$1 = state_90212;
if(cljs.core.truth_(inst_90185)){
var statearr_90266_90366 = state_90212__$1;
(statearr_90266_90366[(1)] = (11));

} else {
var statearr_90268_90367 = state_90212__$1;
(statearr_90268_90367[(1)] = (12));

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
});
return (function() {
var athens$effects$state_machine__56775__auto__ = null;
var athens$effects$state_machine__56775__auto____0 = (function (){
var statearr_90269 = [null,null,null,null,null,null,null,null,null,null];
(statearr_90269[(0)] = athens$effects$state_machine__56775__auto__);

(statearr_90269[(1)] = (1));

return statearr_90269;
});
var athens$effects$state_machine__56775__auto____1 = (function (state_90212){
while(true){
var ret_value__56776__auto__ = (function (){try{while(true){
var result__56777__auto__ = switch__56774__auto__(state_90212);
if(cljs.core.keyword_identical_QMARK_(result__56777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__56777__auto__;
}
break;
}
}catch (e90270){var ex__56778__auto__ = e90270;
var statearr_90271_90368 = state_90212;
(statearr_90271_90368[(2)] = ex__56778__auto__);


if(cljs.core.seq((state_90212[(4)]))){
var statearr_90272_90369 = state_90212;
(statearr_90272_90369[(1)] = cljs.core.first((state_90212[(4)])));

} else {
throw ex__56778__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__56776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__90370 = state_90212;
state_90212 = G__90370;
continue;
} else {
return ret_value__56776__auto__;
}
break;
}
});
athens$effects$state_machine__56775__auto__ = function(state_90212){
switch(arguments.length){
case 0:
return athens$effects$state_machine__56775__auto____0.call(this);
case 1:
return athens$effects$state_machine__56775__auto____1.call(this,state_90212);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
athens$effects$state_machine__56775__auto__.cljs$core$IFn$_invoke$arity$0 = athens$effects$state_machine__56775__auto____0;
athens$effects$state_machine__56775__auto__.cljs$core$IFn$_invoke$arity$1 = athens$effects$state_machine__56775__auto____1;
return athens$effects$state_machine__56775__auto__;
})()
})();
var state__56879__auto__ = (function (){var statearr_90273 = f__56878__auto__();
(statearr_90273[(6)] = c__56877__auto__);

return statearr_90273;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56879__auto__);
}));

return c__56877__auto__;
}));
re_frame.core.reg_fx(new cljs.core.Keyword(null,"timeout","timeout",-318625318),(function (){var timers = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
return (function (p__90277){
var map__90278 = p__90277;
var map__90278__$1 = (((((!((map__90278 == null))))?(((((map__90278.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__90278.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__90278):map__90278);
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90278__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90278__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90278__$1,new cljs.core.Keyword(null,"event","event",301435442));
var wait = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90278__$1,new cljs.core.Keyword(null,"wait","wait",-260664777));
var G__90280 = action;
var G__90280__$1 = (((G__90280 instanceof cljs.core.Keyword))?G__90280.fqn:null);
switch (G__90280__$1) {
case "start":
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(timers,cljs.core.assoc,id,setTimeout((function (){
return re_frame.core.dispatch(event);
}),wait));

break;
case "clear":
clearTimeout(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(timers),id));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(timers,cljs.core.dissoc,id);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__90280__$1)].join('')));

}
});
})());
re_frame.core.reg_fx(new cljs.core.Keyword("editing","focus","editing/focus",-1669016321),(function (p__90286){
var vec__90287 = p__90286;
var uid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__90287,(0),null);
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__90287,(1),null);
if((uid == null)){
var temp__5735__auto__ = document.activeElement;
if(cljs.core.truth_(temp__5735__auto__)){
var active_el = temp__5735__auto__;
return active_el.blur();
} else {
return null;
}
} else {
return setTimeout((function (){
var vec__90290 = athens.db.uid_and_embed_id(uid);
var uid__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__90290,(0),null);
var embed_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__90290,(1),null);
var html_id = ["editable-uid-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$1)].join('');
var el = document.querySelector((cljs.core.truth_(embed_id)?(function (){var or__4126__auto__ = ["textarea[id='",html_id,"-embed-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(embed_id),"']"].join('');
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return ["textarea[id^='",html_id,"-embed-']"].join('');
}
})():["#",html_id].join('')));
if(cljs.core.truth_(el)){
el.focus();

if(cljs.core.truth_(index)){
return goog.dom.selection.setCursorPosition(el,index);
} else {
return null;
}
} else {
return null;
}
}),(100));
}
}));
re_frame.core.reg_fx(new cljs.core.Keyword(null,"set-cursor-position","set-cursor-position",1058534914),(function (p__90299){
var vec__90301 = p__90299;
var uid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__90301,(0),null);
var start = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__90301,(1),null);
var end = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__90301,(2),null);
return setTimeout((function (){
var temp__5735__auto__ = document.querySelector(["#editable-uid-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid)].join(''));
if(cljs.core.truth_(temp__5735__auto__)){
var target = temp__5735__auto__;
target.focus();

(target.selectionStart = start);

return (target.selectionEnd = end);
} else {
return null;
}
}),(100));
}));
re_frame.core.reg_fx(new cljs.core.Keyword("stylefy","tag","stylefy/tag",1120934997),(function (p__90309){
var vec__90310 = p__90309;
var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__90310,(0),null);
var properties = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__90310,(1),null);
return stylefy.core.tag(tag,properties);
}));
re_frame.core.reg_fx(new cljs.core.Keyword("alert","js!","alert/js!",-1297535531),(function (message){
return alert(message);
}));

//# sourceMappingURL=athens.effects.js.map
