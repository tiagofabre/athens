goog.provide('instaparse.print');
instaparse.print.paren_for_tags = (function instaparse$print$paren_for_tags(tag_set,hidden_QMARK_,parser){
if(cljs.core.truth_(((cljs.core.not(hidden_QMARK_))?(function (){var G__71983 = (parser.cljs$core$IFn$_invoke$arity$1 ? parser.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"tag","tag",-1290361223)) : parser.call(null,new cljs.core.Keyword(null,"tag","tag",-1290361223)));
return (tag_set.cljs$core$IFn$_invoke$arity$1 ? tag_set.cljs$core$IFn$_invoke$arity$1(G__71983) : tag_set.call(null,G__71983));
})():false))){
return ["(",cljs.core.str.cljs$core$IFn$_invoke$arity$1((instaparse.print.combinators__GT_str.cljs$core$IFn$_invoke$arity$2 ? instaparse.print.combinators__GT_str.cljs$core$IFn$_invoke$arity$2(parser,false) : instaparse.print.combinators__GT_str.call(null,parser,false))),")"].join('');
} else {
return (instaparse.print.combinators__GT_str.cljs$core$IFn$_invoke$arity$2 ? instaparse.print.combinators__GT_str.cljs$core$IFn$_invoke$arity$2(parser,false) : instaparse.print.combinators__GT_str.call(null,parser,false));
}
});
instaparse.print.paren_for_compound = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(instaparse.print.paren_for_tags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"cat","cat",-1457810207),null,new cljs.core.Keyword(null,"ord","ord",1142548323),null,new cljs.core.Keyword(null,"alt","alt",-3214426),null], null), null));
/**
 * Replaces whitespace characters with escape sequences for better printing
 */
instaparse.print.regexp_replace = (function instaparse$print$regexp_replace(s){
var G__71986 = s;
switch (G__71986) {
case "\n":
return "\\n";

break;
case "\b":
return "\\b";

break;
case "\f":
return "\\f";

break;
case "\r":
return "\\r";

break;
case "\t":
return "\\t";

break;
default:
return s;

}
});
instaparse.print.regexp__GT_str = (function instaparse$print$regexp__GT_str(r){
return clojure.string.replace(["#\"",cljs.core.subs.cljs$core$IFn$_invoke$arity$2(r.source,(1)),"\""].join(''),/[\s]/,instaparse.print.regexp_replace);
});
instaparse.print.number__GT_hex_padded = (function instaparse$print$number__GT_hex_padded(n){
if((n <= (4095))){
return ["0000",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n.toString((16)))].join('').substr((-4));
} else {
return n.toString((16));
}
});

instaparse.print.char_range__GT_str = (function instaparse$print$char_range__GT_str(p__71998){
var map__71999 = p__71998;
var map__71999__$1 = (((((!((map__71999 == null))))?(((((map__71999.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71999.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71999):map__71999);
var lo = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71999__$1,new cljs.core.Keyword(null,"lo","lo",-931799889));
var hi = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71999__$1,new cljs.core.Keyword(null,"hi","hi",-1821422114));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(lo,hi)){
return ["%x",cljs.core.str.cljs$core$IFn$_invoke$arity$1(instaparse.print.number__GT_hex_padded(lo))].join('');
} else {
return ["%x",cljs.core.str.cljs$core$IFn$_invoke$arity$1(instaparse.print.number__GT_hex_padded(lo)),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(instaparse.print.number__GT_hex_padded(hi))].join('');
}
});
/**
 * Stringifies a parser built from combinators
 */
instaparse.print.combinators__GT_str = (function instaparse$print$combinators__GT_str(var_args){
var G__72002 = arguments.length;
switch (G__72002) {
case 1:
return instaparse.print.combinators__GT_str.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return instaparse.print.combinators__GT_str.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(instaparse.print.combinators__GT_str.cljs$core$IFn$_invoke$arity$1 = (function (p){
return instaparse.print.combinators__GT_str.cljs$core$IFn$_invoke$arity$2(p,false);
}));

(instaparse.print.combinators__GT_str.cljs$core$IFn$_invoke$arity$2 = (function (p__72003,hidden_QMARK_){
var map__72004 = p__72003;
var map__72004__$1 = (((((!((map__72004 == null))))?(((((map__72004.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72004.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72004):map__72004);
var p = map__72004__$1;
var parser = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72004__$1,new cljs.core.Keyword(null,"parser","parser",-1543495310));
var parser1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72004__$1,new cljs.core.Keyword(null,"parser1","parser1",-439601422));
var parser2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72004__$1,new cljs.core.Keyword(null,"parser2","parser2",1013754688));
var parsers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72004__$1,new cljs.core.Keyword(null,"parsers","parsers",-804353827));
var tag = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72004__$1,new cljs.core.Keyword(null,"tag","tag",-1290361223));
if(cljs.core.truth_(((cljs.core.not(hidden_QMARK_))?new cljs.core.Keyword(null,"hide","hide",-596913169).cljs$core$IFn$_invoke$arity$1(p):false))){
return ["<",cljs.core.str.cljs$core$IFn$_invoke$arity$1(instaparse.print.combinators__GT_str.cljs$core$IFn$_invoke$arity$2(p,true)),">"].join('');
} else {
var G__72006 = tag;
var G__72006__$1 = (((G__72006 instanceof cljs.core.Keyword))?G__72006.fqn:null);
switch (G__72006__$1) {
case "epsilon":
return "\u03B5";

break;
case "opt":
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(instaparse.print.paren_for_compound(hidden_QMARK_,parser)),"?"].join('');

break;
case "plus":
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(instaparse.print.paren_for_compound(hidden_QMARK_,parser)),"+"].join('');

break;
case "star":
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(instaparse.print.paren_for_compound(hidden_QMARK_,parser)),"*"].join('');

break;
case "rep":
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(p))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(instaparse.print.paren_for_compound(hidden_QMARK_,parser)),"{",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(p)),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(p)),"}"].join('');
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(instaparse.print.paren_for_compound(hidden_QMARK_,parser)),"{",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(p)),"}"].join('');
}

break;
case "alt":
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" | ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(instaparse.print.paren_for_tags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ord","ord",1142548323),null], null), null),hidden_QMARK_),parsers));

break;
case "ord":
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(instaparse.print.paren_for_tags(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"alt","alt",-3214426),null], null), null),hidden_QMARK_,parser1))," / ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(instaparse.print.paren_for_tags(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"alt","alt",-3214426),null], null), null),hidden_QMARK_,parser2))].join('');

break;
case "cat":
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(instaparse.print.paren_for_tags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ord","ord",1142548323),null,new cljs.core.Keyword(null,"alt","alt",-3214426),null], null), null),hidden_QMARK_),parsers));

break;
case "string":
var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__72008_72048 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__72009_72049 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__72010_72050 = true;
var _STAR_print_fn_STAR__temp_val__72011_72051 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__72010_72050);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__72011_72051);

try{cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"string","string",-1989541586).cljs$core$IFn$_invoke$arity$1(p)], 0));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__72009_72049);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__72008_72048);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);

break;
case "string-ci":
var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__72012_72052 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__72013_72053 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__72014_72054 = true;
var _STAR_print_fn_STAR__temp_val__72015_72055 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__72014_72054);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__72015_72055);

try{cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"string","string",-1989541586).cljs$core$IFn$_invoke$arity$1(p)], 0));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__72013_72053);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__72012_72052);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);

break;
case "char":
return instaparse.print.char_range__GT_str(p);

break;
case "regexp":
return instaparse.print.regexp__GT_str(new cljs.core.Keyword(null,"regexp","regexp",-541372782).cljs$core$IFn$_invoke$arity$1(p));

break;
case "nt":
return cljs.core.subs.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"keyword","keyword",811389747).cljs$core$IFn$_invoke$arity$1(p)),(1));

break;
case "look":
return ["&",cljs.core.str.cljs$core$IFn$_invoke$arity$1(instaparse.print.paren_for_compound(hidden_QMARK_,parser))].join('');

break;
case "neg":
return ["!",cljs.core.str.cljs$core$IFn$_invoke$arity$1(instaparse.print.paren_for_compound(hidden_QMARK_,parser))].join('');

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__72006__$1)].join('')));

}
}
}));

(instaparse.print.combinators__GT_str.cljs$lang$maxFixedArity = 2);

/**
 * Takes a non-terminal symbol and a parser built from combinators,
 * and returns a string for the rule.
 */
instaparse.print.rule__GT_str = (function instaparse$print$rule__GT_str(non_terminal,parser){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"reduction-type","reduction-type",-488293450).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"red","red",-969428204).cljs$core$IFn$_invoke$arity$1(parser)),new cljs.core.Keyword(null,"raw","raw",1604651272))){
return ["<",cljs.core.name(non_terminal),">"," = ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(instaparse.print.combinators__GT_str.cljs$core$IFn$_invoke$arity$1(parser))].join('');
} else {
return [cljs.core.name(non_terminal)," = ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(instaparse.print.combinators__GT_str.cljs$core$IFn$_invoke$arity$1(parser))].join('');
}
});
/**
 * Takes a Parser object, i.e., something with a grammar map and a start 
 * production keyword, and stringifies it.
 */
instaparse.print.Parser__GT_str = (function instaparse$print$Parser__GT_str(p__72017){
var map__72018 = p__72017;
var map__72018__$1 = (((((!((map__72018 == null))))?(((((map__72018.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72018.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72018):map__72018);
var grammar = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72018__$1,new cljs.core.Keyword(null,"grammar","grammar",1881328267));
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72018__$1,new cljs.core.Keyword(null,"start-production","start-production",687546537));
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.cons(instaparse.print.rule__GT_str(start,(grammar.cljs$core$IFn$_invoke$arity$1 ? grammar.cljs$core$IFn$_invoke$arity$1(start) : grammar.call(null,start))),(function (){var iter__4529__auto__ = (function instaparse$print$Parser__GT_str_$_iter__72022(s__72023){
return (new cljs.core.LazySeq(null,(function (){
var s__72023__$1 = s__72023;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__72023__$1);
if(temp__5735__auto__){
var s__72023__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__72023__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__72023__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__72025 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__72024 = (0);
while(true){
if((i__72024 < size__4528__auto__)){
var vec__72026 = cljs.core._nth(c__4527__auto__,i__72024);
var non_terminal = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72026,(0),null);
var parser = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72026,(1),null);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(non_terminal,start)){
cljs.core.chunk_append(b__72025,instaparse.print.rule__GT_str(non_terminal,parser));

var G__72060 = (i__72024 + (1));
i__72024 = G__72060;
continue;
} else {
var G__72061 = (i__72024 + (1));
i__72024 = G__72061;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__72025),instaparse$print$Parser__GT_str_$_iter__72022(cljs.core.chunk_rest(s__72023__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__72025),null);
}
} else {
var vec__72029 = cljs.core.first(s__72023__$2);
var non_terminal = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72029,(0),null);
var parser = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72029,(1),null);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(non_terminal,start)){
return cljs.core.cons(instaparse.print.rule__GT_str(non_terminal,parser),instaparse$print$Parser__GT_str_$_iter__72022(cljs.core.rest(s__72023__$2)));
} else {
var G__72065 = cljs.core.rest(s__72023__$2);
s__72023__$1 = G__72065;
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
return iter__4529__auto__(grammar);
})()));
});

//# sourceMappingURL=instaparse.print.js.map
