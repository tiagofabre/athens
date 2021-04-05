goog.provide('instaparse.failure');
/**
 * Takes an index into text, and determines the line and column info
 */
instaparse.failure.index__GT_line_column = (function instaparse$failure$index__GT_line_column(index,text){
var line = (1);
var col = (1);
var counter = (0);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(index,counter)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),col], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.get.cljs$core$IFn$_invoke$arity$2(text,counter))){
var G__72085 = (line + (1));
var G__72086 = (1);
var G__72087 = (counter + (1));
line = G__72085;
col = G__72086;
counter = G__72087;
continue;
} else {
var G__72088 = line;
var G__72089 = (col + (1));
var G__72090 = (counter + (1));
line = G__72088;
col = G__72089;
counter = G__72090;
continue;

}
}
break;
}
});
instaparse.failure.get_line = (function instaparse$failure$get_line(n,text){
var chars = cljs.core.seq(clojure.string.replace(text,"\r\n","\n"));
var n__$1 = n;
while(true){
if(cljs.core.empty_QMARK_(chars)){
return "";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n__$1,(1))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["\n",null], null), null)),chars));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.first(chars))){
var G__72091 = cljs.core.next(chars);
var G__72092 = (n__$1 - (1));
chars = G__72091;
n__$1 = G__72092;
continue;
} else {
var G__72093 = cljs.core.next(chars);
var G__72094 = n__$1;
chars = G__72093;
n__$1 = G__72094;
continue;

}
}
}
break;
}
});
/**
 * Creates string with caret at nth position, 1-based
 */
instaparse.failure.marker = (function instaparse$failure$marker(n){
if(cljs.core.integer_QMARK_(n)){
if((n <= (1))){
return "^";
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((n - (1))," "),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["^"], null)));
}
} else {
return null;
}
});
/**
 * Adds text, line, and column info to failure object.
 */
instaparse.failure.augment_failure = (function instaparse$failure$augment_failure(failure,text){
var lc = instaparse.failure.index__GT_line_column(new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(failure),text);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([failure,lc,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),instaparse.failure.get_line(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(lc),text)], null)], 0));
});
/**
 * Provides special case for printing negative lookahead reasons
 */
instaparse.failure.print_reason = (function instaparse$failure$print_reason(r){
if(cljs.core.truth_(new cljs.core.Keyword(null,"NOT","NOT",-1689245341).cljs$core$IFn$_invoke$arity$1(r))){
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["NOT "], 0));

return cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"NOT","NOT",-1689245341).cljs$core$IFn$_invoke$arity$1(r)], 0));
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"char-range","char-range",1443391389).cljs$core$IFn$_invoke$arity$1(r))){
return cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.print.char_range__GT_str(r)], 0));
} else {
if((r instanceof RegExp)){
return cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.print.regexp__GT_str(r)], 0));
} else {
return cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([r], 0));

}
}
}
});
/**
 * Takes an augmented failure object and prints the error message
 */
instaparse.failure.pprint_failure = (function instaparse$failure$pprint_failure(p__72057){
var map__72058 = p__72057;
var map__72058__$1 = (((((!((map__72058 == null))))?(((((map__72058.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72058.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72058):map__72058);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72058__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72058__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72058__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var reason = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72058__$1,new cljs.core.Keyword(null,"reason","reason",-2070751759));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["Parse error at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column),":"].join('')], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([text], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.failure.marker(column)], 0));

var full_reasons = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expecting","expecting",-57706705),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"full","full",436801220),reason)));
var partial_reasons = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expecting","expecting",-57706705),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(new cljs.core.Keyword(null,"full","full",436801220)),reason)));
var total = (cljs.core.count(full_reasons) + cljs.core.count(partial_reasons));
if((total === (0))){
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),total)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Expected:"], 0));
} else {
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Expected one of:"], 0));

}
}

var seq__72066_72101 = cljs.core.seq(full_reasons);
var chunk__72067_72102 = null;
var count__72068_72103 = (0);
var i__72069_72104 = (0);
while(true){
if((i__72069_72104 < count__72068_72103)){
var r_72105 = chunk__72067_72102.cljs$core$IIndexed$_nth$arity$2(null,i__72069_72104);
instaparse.failure.print_reason(r_72105);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" (followed by end-of-string)"], 0));


var G__72106 = seq__72066_72101;
var G__72107 = chunk__72067_72102;
var G__72108 = count__72068_72103;
var G__72109 = (i__72069_72104 + (1));
seq__72066_72101 = G__72106;
chunk__72067_72102 = G__72107;
count__72068_72103 = G__72108;
i__72069_72104 = G__72109;
continue;
} else {
var temp__5735__auto___72110 = cljs.core.seq(seq__72066_72101);
if(temp__5735__auto___72110){
var seq__72066_72111__$1 = temp__5735__auto___72110;
if(cljs.core.chunked_seq_QMARK_(seq__72066_72111__$1)){
var c__4556__auto___72112 = cljs.core.chunk_first(seq__72066_72111__$1);
var G__72113 = cljs.core.chunk_rest(seq__72066_72111__$1);
var G__72114 = c__4556__auto___72112;
var G__72115 = cljs.core.count(c__4556__auto___72112);
var G__72116 = (0);
seq__72066_72101 = G__72113;
chunk__72067_72102 = G__72114;
count__72068_72103 = G__72115;
i__72069_72104 = G__72116;
continue;
} else {
var r_72117 = cljs.core.first(seq__72066_72111__$1);
instaparse.failure.print_reason(r_72117);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" (followed by end-of-string)"], 0));


var G__72118 = cljs.core.next(seq__72066_72111__$1);
var G__72119 = null;
var G__72120 = (0);
var G__72121 = (0);
seq__72066_72101 = G__72118;
chunk__72067_72102 = G__72119;
count__72068_72103 = G__72120;
i__72069_72104 = G__72121;
continue;
}
} else {
}
}
break;
}

var seq__72072 = cljs.core.seq(partial_reasons);
var chunk__72073 = null;
var count__72074 = (0);
var i__72075 = (0);
while(true){
if((i__72075 < count__72074)){
var r = chunk__72073.cljs$core$IIndexed$_nth$arity$2(null,i__72075);
instaparse.failure.print_reason(r);

cljs.core.println();


var G__72122 = seq__72072;
var G__72123 = chunk__72073;
var G__72124 = count__72074;
var G__72125 = (i__72075 + (1));
seq__72072 = G__72122;
chunk__72073 = G__72123;
count__72074 = G__72124;
i__72075 = G__72125;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__72072);
if(temp__5735__auto__){
var seq__72072__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__72072__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__72072__$1);
var G__72126 = cljs.core.chunk_rest(seq__72072__$1);
var G__72127 = c__4556__auto__;
var G__72128 = cljs.core.count(c__4556__auto__);
var G__72129 = (0);
seq__72072 = G__72126;
chunk__72073 = G__72127;
count__72074 = G__72128;
i__72075 = G__72129;
continue;
} else {
var r = cljs.core.first(seq__72072__$1);
instaparse.failure.print_reason(r);

cljs.core.println();


var G__72130 = cljs.core.next(seq__72072__$1);
var G__72131 = null;
var G__72132 = (0);
var G__72133 = (0);
seq__72072 = G__72130;
chunk__72073 = G__72131;
count__72074 = G__72132;
i__72075 = G__72133;
continue;
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=instaparse.failure.js.map
