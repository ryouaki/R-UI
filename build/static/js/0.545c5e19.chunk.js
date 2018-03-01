webpackJsonp([0],{128:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function i(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),l=n.n(o),a=n(130),h=n.n(a),p=n(131),u=(n.n(p),n(133)),c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),g=function(e){function t(){return r(this,t),s(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),c(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"r-ui-home markdown-body",dangerouslySetInnerHTML:{__html:h()(u.a)}})}}]),t}(l.a.PureComponent);t.default=g},130:function(e,t,n){(function(t){(function(){"use strict";function t(e){this.tokens=[],this.tokens.links={},this.options=e||c.defaults,this.rules=g.normal,this.options.gfm&&(this.options.tables?this.rules=g.tables:this.rules=g.gfm)}function n(e,t){if(this.options=t||c.defaults,this.links=e,this.rules=f.normal,this.renderer=this.options.renderer||new r,this.renderer.options=this.options,!this.links)throw new Error("Tokens array requires a `links` property.");this.options.gfm?this.options.breaks?this.rules=f.breaks:this.rules=f.gfm:this.options.pedantic&&(this.rules=f.pedantic)}function r(e){this.options=e||{}}function s(){}function i(e){this.tokens=[],this.token=null,this.options=e||c.defaults,this.options.renderer=this.options.renderer||new r,this.renderer=this.options.renderer,this.renderer.options=this.options}function o(e,t){return e.replace(t?/&/g:/&(?!#?\w+;)/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function l(e){return e.replace(/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi,function(e,t){return t=t.toLowerCase(),"colon"===t?":":"#"===t.charAt(0)?"x"===t.charAt(1)?String.fromCharCode(parseInt(t.substring(2),16)):String.fromCharCode(+t.substring(1)):""})}function a(e,t){return e=e.source,t=t||"",function n(r,s){return r?(s=s.source||s,s=s.replace(/(^|[^\[])\^/g,"$1"),e=e.replace(r,s),n):new RegExp(e,t)}}function h(e,t){return d[" "+e]||(/^[^:]+:\/*[^\/]*$/.test(e)?d[" "+e]=e+"/":d[" "+e]=e.replace(/[^\/]*$/,"")),e=d[" "+e],"//"===t.slice(0,2)?e.replace(/:[\s\S]*/,":")+t:"/"===t.charAt(0)?e.replace(/(:\/*[^\/]*)[\s\S]*/,"$1")+t:e+t}function p(){}function u(e){for(var t,n,r=1;r<arguments.length;r++){t=arguments[r];for(n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}function c(e,n,r){if("undefined"==typeof e||null===e)throw new Error("marked(): input parameter is undefined or null");if("string"!=typeof e)throw new Error("marked(): input parameter is of type "+Object.prototype.toString.call(e)+", string expected");if(r||"function"===typeof n){r||(r=n,n=null),n=u({},c.defaults,n||{});var s,l,a=n.highlight,h=0;try{s=t.lex(e,n)}catch(e){return r(e)}l=s.length;var p=function(e){if(e)return n.highlight=a,r(e);var t;try{t=i.parse(s,n)}catch(t){e=t}return n.highlight=a,e?r(e):r(null,t)};if(!a||a.length<3)return p();if(delete n.highlight,!l)return p();for(;h<s.length;h++)!function(e){"code"!==e.type?--l||p():a(e.text,e.lang,function(t,n){return t?p(t):null==n||n===e.text?--l||p():(e.text=n,e.escaped=!0,void(--l||p()))})}(s[h])}else try{return n&&(n=u({},c.defaults,n)),i.parse(t.lex(e,n),n)}catch(e){if(e.message+="\nPlease report this to https://github.com/chjj/marked.",(n||c.defaults).silent)return"<p>An error occurred:</p><pre>"+o(e.message+"",!0)+"</pre>";throw e}}var g={newline:/^\n+/,code:/^( {4}[^\n]+\n*)+/,fences:p,hr:/^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/,heading:/^ *(#{1,6}) *([^\n]+?) *#* *(?:\n+|$)/,nptable:p,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( *)(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,html:/^ *(?:comment *(?:\n|\s*$)|closed *(?:\n{2,}|\s*$)|closing *(?:\n{2,}|\s*$))/,def:/^ {0,3}\[(label)\]: *\n? *<?([^\s>]+)>?(?:(?: +\n? *| *\n *)(title))? *(?:\n+|$)/,table:p,lheading:/^([^\n]+)\n *(=|-){2,} *(?:\n+|$)/,paragraph:/^([^\n]+(?:\n?(?!hr|heading|lheading| {0,3}>|tag)[^\n]+)+)/,text:/^[^\n]+/};g._label=/(?:\\[\[\]]|[^\[\]])+/,g._title=/(?:"(?:\\"|[^"]|"[^"\n]*")*"|'\n?(?:[^'\n]+\n?)*'|\([^()]*\))/,g.def=a(g.def)("label",g._label)("title",g._title)(),g.bullet=/(?:[*+-]|\d+\.)/,g.item=/^( *)(bull) [^\n]*(?:\n(?!\1bull )[^\n]*)*/,g.item=a(g.item,"gm")(/bull/g,g.bullet)(),g.list=a(g.list)(/bull/g,g.bullet)("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))")("def","\\n+(?="+g.def.source+")")(),g._tag="(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b",g.html=a(g.html)("comment",/<!--[\s\S]*?-->/)("closed",/<(tag)[\s\S]+?<\/\1>/)("closing",/<tag(?:"[^"]*"|'[^']*'|\s[^'"\/>]*)*?\/?>/)(/tag/g,g._tag)(),g.paragraph=a(g.paragraph)("hr",g.hr)("heading",g.heading)("lheading",g.lheading)("tag","<"+g._tag)(),g.blockquote=a(g.blockquote)("paragraph",g.paragraph)(),g.normal=u({},g),g.gfm=u({},g.normal,{fences:/^ *(`{3,}|~{3,})[ \.]*(\S+)? *\n([\s\S]*?)\n? *\1 *(?:\n+|$)/,paragraph:/^/,heading:/^ *(#{1,6}) +([^\n]+?) *#* *(?:\n+|$)/}),g.gfm.paragraph=a(g.paragraph)("(?!","(?!"+g.gfm.fences.source.replace("\\1","\\2")+"|"+g.list.source.replace("\\1","\\3")+"|")(),g.tables=u({},g.gfm,{nptable:/^ *(\S.*\|.*)\n *([-:]+ *\|[-| :]*)\n((?:.*\|.*(?:\n|$))*)\n*/,table:/^ *\|(.+)\n *\|( *[-:]+[-| :]*)\n((?: *\|.*(?:\n|$))*)\n*/}),t.rules=g,t.lex=function(e,n){return new t(n).lex(e)},t.prototype.lex=function(e){return e=e.replace(/\r\n|\r/g,"\n").replace(/\t/g,"    ").replace(/\u00a0/g," ").replace(/\u2424/g,"\n"),this.token(e,!0)},t.prototype.token=function(e,t){for(var n,r,s,i,o,l,a,h,p,u,e=e.replace(/^ +$/gm,"");e;)if((s=this.rules.newline.exec(e))&&(e=e.substring(s[0].length),s[0].length>1&&this.tokens.push({type:"space"})),s=this.rules.code.exec(e))e=e.substring(s[0].length),s=s[0].replace(/^ {4}/gm,""),this.tokens.push({type:"code",text:this.options.pedantic?s:s.replace(/\n+$/,"")});else if(s=this.rules.fences.exec(e))e=e.substring(s[0].length),this.tokens.push({type:"code",lang:s[2],text:s[3]||""});else if(s=this.rules.heading.exec(e))e=e.substring(s[0].length),this.tokens.push({type:"heading",depth:s[1].length,text:s[2]});else if(t&&(s=this.rules.nptable.exec(e))){for(e=e.substring(s[0].length),l={type:"table",header:s[1].replace(/^ *| *\| *$/g,"").split(/ *\| */),align:s[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:s[3].replace(/\n$/,"").split("\n")},h=0;h<l.align.length;h++)/^ *-+: *$/.test(l.align[h])?l.align[h]="right":/^ *:-+: *$/.test(l.align[h])?l.align[h]="center":/^ *:-+ *$/.test(l.align[h])?l.align[h]="left":l.align[h]=null;for(h=0;h<l.cells.length;h++)l.cells[h]=l.cells[h].split(/ *\| */);this.tokens.push(l)}else if(s=this.rules.hr.exec(e))e=e.substring(s[0].length),this.tokens.push({type:"hr"});else if(s=this.rules.blockquote.exec(e))e=e.substring(s[0].length),this.tokens.push({type:"blockquote_start"}),s=s[0].replace(/^ *> ?/gm,""),this.token(s,t),this.tokens.push({type:"blockquote_end"});else if(s=this.rules.list.exec(e)){for(e=e.substring(s[0].length),i=s[2],this.tokens.push({type:"list_start",ordered:i.length>1}),s=s[0].match(this.rules.item),n=!1,u=s.length,h=0;h<u;h++)l=s[h],a=l.length,l=l.replace(/^ *([*+-]|\d+\.) +/,""),~l.indexOf("\n ")&&(a-=l.length,l=this.options.pedantic?l.replace(/^ {1,4}/gm,""):l.replace(new RegExp("^ {1,"+a+"}","gm"),"")),this.options.smartLists&&h!==u-1&&(o=g.bullet.exec(s[h+1])[0],i===o||i.length>1&&o.length>1||(e=s.slice(h+1).join("\n")+e,h=u-1)),r=n||/\n\n(?!\s*$)/.test(l),h!==u-1&&(n="\n"===l.charAt(l.length-1),r||(r=n)),this.tokens.push({type:r?"loose_item_start":"list_item_start"}),this.token(l,!1),this.tokens.push({type:"list_item_end"});this.tokens.push({type:"list_end"})}else if(s=this.rules.html.exec(e))e=e.substring(s[0].length),this.tokens.push({type:this.options.sanitize?"paragraph":"html",pre:!this.options.sanitizer&&("pre"===s[1]||"script"===s[1]||"style"===s[1]),text:s[0]});else if(t&&(s=this.rules.def.exec(e)))e=e.substring(s[0].length),s[3]&&(s[3]=s[3].substring(1,s[3].length-1)),p=s[1].toLowerCase(),this.tokens.links[p]||(this.tokens.links[p]={href:s[2],title:s[3]});else if(t&&(s=this.rules.table.exec(e))){for(e=e.substring(s[0].length),l={type:"table",header:s[1].replace(/^ *| *\| *$/g,"").split(/ *\| */),align:s[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:s[3].replace(/(?: *\| *)?\n$/,"").split("\n")},h=0;h<l.align.length;h++)/^ *-+: *$/.test(l.align[h])?l.align[h]="right":/^ *:-+: *$/.test(l.align[h])?l.align[h]="center":/^ *:-+ *$/.test(l.align[h])?l.align[h]="left":l.align[h]=null;for(h=0;h<l.cells.length;h++)l.cells[h]=l.cells[h].replace(/^ *\| *| *\| *$/g,"").split(/ *\| */);this.tokens.push(l)}else if(s=this.rules.lheading.exec(e))e=e.substring(s[0].length),this.tokens.push({type:"heading",depth:"="===s[2]?1:2,text:s[1]});else if(t&&(s=this.rules.paragraph.exec(e)))e=e.substring(s[0].length),this.tokens.push({type:"paragraph",text:"\n"===s[1].charAt(s[1].length-1)?s[1].slice(0,-1):s[1]});else if(s=this.rules.text.exec(e))e=e.substring(s[0].length),this.tokens.push({type:"text",text:s[0]});else if(e)throw new Error("Infinite loop on byte: "+e.charCodeAt(0));return this.tokens};var f={escape:/^\\([\\`*{}\[\]()#+\-.!_>])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:p,tag:/^<!--[\s\S]*?-->|^<\/?[a-zA-Z0-9\-]+(?:"[^"]*"|'[^']*'|\s[^<'">\/]*)*?\/?>/,link:/^!?\[(inside)\]\(href\)/,reflink:/^!?\[(inside)\]\s*\[([^\]]*)\]/,nolink:/^!?\[((?:\[[^\]]*\]|\\[\[\]]|[^\[\]])*)\]/,strong:/^__([\s\S]+?)__(?!_)|^\*\*([\s\S]+?)\*\*(?!\*)/,em:/^_([^\s_](?:[^_]|__)+?[^\s_])_\b|^\*((?:\*\*|[^*])+?)\*(?!\*)/,code:/^(`+)\s*([\s\S]*?[^`]?)\s*\1(?!`)/,br:/^ {2,}\n(?!\s*$)/,del:p,text:/^[\s\S]+?(?=[\\<!\[`*]|\b_| {2,}\n|$)/};f._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/,f._email=/[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/,f.autolink=a(f.autolink)("scheme",f._scheme)("email",f._email)(),f._inside=/(?:\[[^\]]*\]|\\[\[\]]|[^\[\]]|\](?=[^\[]*\]))*/,f._href=/\s*<?([\s\S]*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*/,f.link=a(f.link)("inside",f._inside)("href",f._href)(),f.reflink=a(f.reflink)("inside",f._inside)(),f.normal=u({},f),f.pedantic=u({},f.normal,{strong:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,em:/^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/}),f.gfm=u({},f.normal,{escape:a(f.escape)("])","~|])")(),url:a(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/)("email",f._email)(),_backpedal:/(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,del:/^~~(?=\S)([\s\S]*?\S)~~/,text:a(f.text)("]|","~]|")("|","|https?://|ftp://|www\\.|[a-zA-Z0-9.!#$%&'*+/=?^_`{\\|}~-]+@|")()}),f.breaks=u({},f.gfm,{br:a(f.br)("{2,}","*")(),text:a(f.gfm.text)("{2,}","*")()}),n.rules=f,n.output=function(e,t,r){return new n(t,r).output(e)},n.prototype.output=function(e){for(var t,n,r,s,i="";e;)if(s=this.rules.escape.exec(e))e=e.substring(s[0].length),i+=s[1];else if(s=this.rules.autolink.exec(e))e=e.substring(s[0].length),"@"===s[2]?(n=o(this.mangle(s[1])),r="mailto:"+n):(n=o(s[1]),r=n),i+=this.renderer.link(r,null,n);else if(this.inLink||!(s=this.rules.url.exec(e))){if(s=this.rules.tag.exec(e))!this.inLink&&/^<a /i.test(s[0])?this.inLink=!0:this.inLink&&/^<\/a>/i.test(s[0])&&(this.inLink=!1),e=e.substring(s[0].length),i+=this.options.sanitize?this.options.sanitizer?this.options.sanitizer(s[0]):o(s[0]):s[0];else if(s=this.rules.link.exec(e))e=e.substring(s[0].length),this.inLink=!0,i+=this.outputLink(s,{href:s[2],title:s[3]}),this.inLink=!1;else if((s=this.rules.reflink.exec(e))||(s=this.rules.nolink.exec(e))){if(e=e.substring(s[0].length),t=(s[2]||s[1]).replace(/\s+/g," "),!(t=this.links[t.toLowerCase()])||!t.href){i+=s[0].charAt(0),e=s[0].substring(1)+e;continue}this.inLink=!0,i+=this.outputLink(s,t),this.inLink=!1}else if(s=this.rules.strong.exec(e))e=e.substring(s[0].length),i+=this.renderer.strong(this.output(s[2]||s[1]));else if(s=this.rules.em.exec(e))e=e.substring(s[0].length),i+=this.renderer.em(this.output(s[2]||s[1]));else if(s=this.rules.code.exec(e))e=e.substring(s[0].length),i+=this.renderer.codespan(o(s[2].trim(),!0));else if(s=this.rules.br.exec(e))e=e.substring(s[0].length),i+=this.renderer.br();else if(s=this.rules.del.exec(e))e=e.substring(s[0].length),i+=this.renderer.del(this.output(s[1]));else if(s=this.rules.text.exec(e))e=e.substring(s[0].length),i+=this.renderer.text(o(this.smartypants(s[0])));else if(e)throw new Error("Infinite loop on byte: "+e.charCodeAt(0))}else s[0]=this.rules._backpedal.exec(s[0])[0],e=e.substring(s[0].length),"@"===s[2]?(n=o(s[0]),r="mailto:"+n):(n=o(s[0]),r="www."===s[1]?"http://"+n:n),i+=this.renderer.link(r,null,n);return i},n.prototype.outputLink=function(e,t){var n=o(t.href),r=t.title?o(t.title):null;return"!"!==e[0].charAt(0)?this.renderer.link(n,r,this.output(e[1])):this.renderer.image(n,r,o(e[1]))},n.prototype.smartypants=function(e){return this.options.smartypants?e.replace(/---/g,"\u2014").replace(/--/g,"\u2013").replace(/(^|[-\u2014\/(\[{"\s])'/g,"$1\u2018").replace(/'/g,"\u2019").replace(/(^|[-\u2014\/(\[{\u2018\s])"/g,"$1\u201c").replace(/"/g,"\u201d").replace(/\.{3}/g,"\u2026"):e},n.prototype.mangle=function(e){if(!this.options.mangle)return e;for(var t,n="",r=e.length,s=0;s<r;s++)t=e.charCodeAt(s),Math.random()>.5&&(t="x"+t.toString(16)),n+="&#"+t+";";return n},r.prototype.code=function(e,t,n){if(this.options.highlight){var r=this.options.highlight(e,t);null!=r&&r!==e&&(n=!0,e=r)}return t?'<pre><code class="'+this.options.langPrefix+o(t,!0)+'">'+(n?e:o(e,!0))+"\n</code></pre>\n":"<pre><code>"+(n?e:o(e,!0))+"\n</code></pre>"},r.prototype.blockquote=function(e){return"<blockquote>\n"+e+"</blockquote>\n"},r.prototype.html=function(e){return e},r.prototype.heading=function(e,t,n){return"<h"+t+' id="'+this.options.headerPrefix+n.toLowerCase().replace(/[^\w]+/g,"-")+'">'+e+"</h"+t+">\n"},r.prototype.hr=function(){return this.options.xhtml?"<hr/>\n":"<hr>\n"},r.prototype.list=function(e,t){var n=t?"ol":"ul";return"<"+n+">\n"+e+"</"+n+">\n"},r.prototype.listitem=function(e){return"<li>"+e+"</li>\n"},r.prototype.paragraph=function(e){return"<p>"+e+"</p>\n"},r.prototype.table=function(e,t){return"<table>\n<thead>\n"+e+"</thead>\n<tbody>\n"+t+"</tbody>\n</table>\n"},r.prototype.tablerow=function(e){return"<tr>\n"+e+"</tr>\n"},r.prototype.tablecell=function(e,t){var n=t.header?"th":"td";return(t.align?"<"+n+' style="text-align:'+t.align+'">':"<"+n+">")+e+"</"+n+">\n"},r.prototype.strong=function(e){return"<strong>"+e+"</strong>"},r.prototype.em=function(e){return"<em>"+e+"</em>"},r.prototype.codespan=function(e){return"<code>"+e+"</code>"},r.prototype.br=function(){return this.options.xhtml?"<br/>":"<br>"},r.prototype.del=function(e){return"<del>"+e+"</del>"},r.prototype.link=function(e,t,n){if(this.options.sanitize){try{var r=decodeURIComponent(l(e)).replace(/[^\w:]/g,"").toLowerCase()}catch(e){return n}if(0===r.indexOf("javascript:")||0===r.indexOf("vbscript:")||0===r.indexOf("data:"))return n}this.options.baseUrl&&!b.test(e)&&(e=h(this.options.baseUrl,e));var s='<a href="'+e+'"';return t&&(s+=' title="'+t+'"'),s+=">"+n+"</a>"},r.prototype.image=function(e,t,n){this.options.baseUrl&&!b.test(e)&&(e=h(this.options.baseUrl,e));var r='<img src="'+e+'" alt="'+n+'"';return t&&(r+=' title="'+t+'"'),r+=this.options.xhtml?"/>":">"},r.prototype.text=function(e){return e},s.prototype.strong=s.prototype.em=s.prototype.codespan=s.prototype.del=s.prototype.text=function(e){return e},s.prototype.link=s.prototype.image=function(e,t,n){return""+n},s.prototype.br=function(){return""},i.parse=function(e,t){return new i(t).parse(e)},i.prototype.parse=function(e){this.inline=new n(e.links,this.options),this.inlineText=new n(e.links,u({},this.options,{renderer:new s})),this.tokens=e.reverse();for(var t="";this.next();)t+=this.tok();return t},i.prototype.next=function(){return this.token=this.tokens.pop()},i.prototype.peek=function(){return this.tokens[this.tokens.length-1]||0},i.prototype.parseText=function(){for(var e=this.token.text;"text"===this.peek().type;)e+="\n"+this.next().text;return this.inline.output(e)},i.prototype.tok=function(){switch(this.token.type){case"space":return"";case"hr":return this.renderer.hr();case"heading":return this.renderer.heading(this.inline.output(this.token.text),this.token.depth,l(this.inlineText.output(this.token.text)));case"code":return this.renderer.code(this.token.text,this.token.lang,this.token.escaped);case"table":var e,t,n,r,s="",i="";for(n="",e=0;e<this.token.header.length;e++)n+=this.renderer.tablecell(this.inline.output(this.token.header[e]),{header:!0,align:this.token.align[e]});for(s+=this.renderer.tablerow(n),e=0;e<this.token.cells.length;e++){for(t=this.token.cells[e],n="",r=0;r<t.length;r++)n+=this.renderer.tablecell(this.inline.output(t[r]),{header:!1,align:this.token.align[r]});i+=this.renderer.tablerow(n)}return this.renderer.table(s,i);case"blockquote_start":for(var i="";"blockquote_end"!==this.next().type;)i+=this.tok();return this.renderer.blockquote(i);case"list_start":for(var i="",o=this.token.ordered;"list_end"!==this.next().type;)i+=this.tok();return this.renderer.list(i,o);case"list_item_start":for(var i="";"list_item_end"!==this.next().type;)i+="text"===this.token.type?this.parseText():this.tok();return this.renderer.listitem(i);case"loose_item_start":for(var i="";"list_item_end"!==this.next().type;)i+=this.tok();return this.renderer.listitem(i);case"html":var a=this.token.pre||this.options.pedantic?this.token.text:this.inline.output(this.token.text);return this.renderer.html(a);case"paragraph":return this.renderer.paragraph(this.inline.output(this.token.text));case"text":return this.renderer.paragraph(this.parseText())}};var d={},b=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;p.exec=p,c.options=c.setOptions=function(e){return u(c.defaults,e),c},c.defaults={gfm:!0,tables:!0,breaks:!1,pedantic:!1,sanitize:!1,sanitizer:null,mangle:!0,smartLists:!1,silent:!1,highlight:null,langPrefix:"lang-",smartypants:!1,headerPrefix:"",renderer:new r,xhtml:!1,baseUrl:null},c.Parser=i,c.parser=i.parse,c.Renderer=r,c.TextRenderer=s,c.Lexer=t,c.lexer=t.lex,c.InlineLexer=n,c.inlineLexer=n.output,c.parse=c,e.exports=c}).call(function(){return this||("undefined"!==typeof window?window:t)}())}).call(t,n(7))},131:function(e,t,n){var r=n(132);"string"===typeof r&&(r=[[e.i,r,""]]);var s={hmr:!1};s.transform=void 0;n(127)(r,s);r.locals&&(e.exports=r.locals)},132:function(e,t,n){t=e.exports=n(126)(!0),t.push([e.i,".r-ui-home{margin:36px;border:1px solid #e1e4e8;padding:32px;border-radius:3px}","",{version:3,sources:["/Users/bjqxdn0702/R-UI/src/styles/home/index.css"],names:[],mappings:"AAAA,WACE,YAAa,AACb,yBAA0B,AAC1B,aAAc,AACd,iBAAmB,CACpB",file:"index.css",sourcesContent:[".r-ui-home {\n  margin: 36px;\n  border: 1px solid #e1e4e8;\n  padding: 32px;\n  border-radius: 3px;\n}\n"],sourceRoot:""}])},133:function(e,t,n){"use strict";t.a='\n# \u6982\u8981\n\n## R-UI \u7684\u76ee\u6807\n\u8fd9\u4e2a\u9879\u76ee\u4e3b\u8981\u662f\u7528\u4e8e\u6211\u4e2a\u4eba\u5bf9\u4e8e\u8fc7\u53bb\u4e24\u5e74\u5e74\u505a\u7684\u51e0\u4e2a\u9879\u76ee\u7684 React \u76f8\u5173\u6280\u672f\u603b\u7ed3\uff0c\u5e76\u4e14\uff0c\u901a\u8fc7\u6574\u4e2a\u5e93\u7684\u5f00\u53d1\u8fc7\u7a0b\u4ee5\u53ca\u8fd9\u4e2a\u7f51\u7ad9\u7684\u5185\u5bb9\u90fd\u662f\u4ece\u6d45\u5165\u6df1\u7684\u6559\u6750\u5f0f\u7684\u3002\u901a\u8fc7\u8fd9\u4e2a UI \u5e93\uff0c\u4e86\u89e3 R-UI \u7684\u5f00\u53d1\u8fc7\u7a0b\uff0c\u4ece\u800c\u5b66\u4f1a\u5982\u4f55\u4f7f\u7528 React\uff0c\u5982\u4f55\u521b\u5efa React \u7ec4\u4ef6\u3002\u5e76\u907f\u5f00\u5728 React \u5f00\u53d1\u8fc7\u7a0b\u4e2d\u6240\u9700\u8981\u9762\u4e34\u7684\u5404\u79cd\u95ee\u9898\u3002\n\n## \u4e3a\u4ec0\u4e48\u662f React\uff1f\n\u524d\u7aef\u6846\u67b6\u76ee\u524d\u662f Angular\uff0cReact(+Redux)\uff0cVue(+Vuex) \u4e09\u5206\u5929\u4e0b\u3002\u4ed6\u4eec\u90fd\u662f\u975e\u5e38\u51fa\u8272\u7684\u524d\u7aef\u6846\u67b6\uff0c\u90fd\u53ef\u4ee5\u7528\u4e8e\u89e3\u51b3\u76ee\u524d\u524d\u7aef\u6280\u672f\u4e0a\u7edd\u5927\u591a\u6570\u95ee\u9898\uff0c\u5176\u5b9e\u4e0d\u5fc5\u7ea0\u7ed3\u54ea\u4e2a\u597d\uff0c\u54ea\u4e2a\u6846\u67b6\u80fd\u7ed9\u4f60\u5e26\u6765\u7684\u5f00\u53d1\u4f53\u9a8c\u6700\u597d\uff0c\u5c31\u7528\u54ea\u4e2a\u3002\u4e09\u4e2a\u6846\u67b6\u6211\u90fd\u7528\u8fc7\uff0c\u4f46\u662f\u6700\u7ec8\u8fd8\u662f\u6700\u559c\u6b22 React\u3002\u6211\u53ea\u5217\u51fa\u6211\u559c\u6b22 React \u7684\u7406\u7531\uff1a\n\n- \u4e0d\u518d\u9700\u8981\u6211\u4eec\u53bb\u5173\u5fc3\u90a3\u8be5\u6b7b\u7684 Dom \u64cd\u4f5c\uff0c\u8fd9\u57fa\u672c\u4e0a\u662f\u9009\u62e9\u4e09\u5927\u6846\u67b6\u7684\u4e3b\u8981\u539f\u56e0\n- \u5b98\u65b9\u63d0\u4f9b\u811a\u624b\u67b6\u7528\u4e8e\u652f\u6301 React \u9879\u76ee\u7684\u521d\u671f\u521b\u5efa (create-react-app)\uff0c\u96c6\u6210\u975e\u5e38\u4e30\u5bcc\u7684\u5f00\u53d1\u5de5\u5177\uff0c\u5f00\u53d1\u4f53\u9a8c\u53ef\u4ee5\u8bf4\u662f\u4e09\u5927\u6846\u67b6\u4e2d\u6700\u597d\u7684\uff0c\u53ef\u4ee5\u5728 Chrome \u4e2d\u76f4\u63a5\u8c03\u8bd5 React \u6e90\u7801(\u5728\u8fd9\u65b9\uff0cVue\u7684\u5f00\u53d1\u4f53\u9a8c\u662f\u6700\u5dee\u7684\uff0c\u65e0\u6cd5\u5728\u6d4f\u89c8\u5668\u4e2d\u76f4\u63a5\u8c03\u8bd5\u4ee3\u7801\u3002\u53ef\u89c1\u793e\u533a\u89c4\u6a21\u7684\u5927\u5c0f\u6709\u591a\u91cd\u8981\u3002)\n- \u53ea\u8981\u4f1a JS(ES6/ES7) \u5373\u53ef\u4f7f\u7528\uff0cJSX \u7684\u5c31\u548c\u666e\u901a\u6a21\u7248\u6280\u672f\u5dee\u4e0d\u591a\u3002\u53ef\u4ee5\u8bf4 React \u6ca1\u6709\u4ec0\u4e48\u989d\u5916\u5b66\u4e60\u6210\u672c\n- \u8d34\u8fd1\u4f20\u7edf Client-side \u5f00\u53d1\u4f53\u9a8c\uff0c\u6211\u6bd4\u8f83\u559c\u6b22\u8fd9\u79cd\u5f00\u53d1\u65b9\u5f0f\n- React \u7684\u5f00\u53d1\u6587\u6863\u603b\u662f\u5728\u6559\u5927\u5bb6\u5982\u4f55\u5199\u51fa\u66f4\u5408\u7406\uff0c\u66f4\u6613\u4e8e\u7ef4\u62a4\u7684\u4ee3\u7801 (best practice)\u3002\u5e76\u4e14\u544a\u8bc9\u4f60\u4ec0\u4e48\u662f\u4e0d\u597d\u7684\u4ee3\u7801 (bad practice)\n- FB\u8fd9\u79cd\u5927\u516c\u53f8\u8d1f\u8d23\u5f00\u53d1\u548c\u7ef4\u62a4\uff0c\u5e76\u4e14\u6709\u6700\u5e9e\u5927\u7684\u524d\u7aef\u793e\u533a\u652f\u6301\u3002\u65e0\u9700\u62c5\u5fc3\u540e\u7eed\u95ee\u9898\n- \u5347\u7ea7\u53cb\u597d\u3002\u7248\u672c\u5347\u7ea7\u51e0\u4e4e\u4e0d\u4f1a\u5e26\u6765\u4efb\u4f55\u95ee\u9898\n- \u9700\u8981\u638c\u63e1\u7684 Api \u975e\u5e38\u5c11\u3002\u4e0a\u624b\u5feb\n- \u6027\u80fd\u51fa\u8272\uff0c\u867d\u7136\u6709\u6027\u80fd\u66f4\u597d\u7684\u6846\u67b6\u6bd4\u5982 Vue\uff0c\u4f46\u662f\uff0c\u5728\u8fc7\u53bb\u7684\u5de5\u4f5c\u7ecf\u9a8c\u544a\u8bc9\u6211\uff0c\u771f\u6b63\u5f71\u54cd\u6027\u80fd\u7684\u5730\u65b9\u5f80\u5f80\u662f\u5b9e\u73b0\u4e1a\u52a1\u7684\u903b\u8f91\u3002\u6846\u67b6\u5e26\u6765\u7684\u6027\u80fd\u5f71\u54cd\uff0c\u5927\u591a\u6570\u60c5\u51b5\u4e0b\u5fae\u4e4e\u5176\u5fae (\u9664\u4e86 Angularjs)\n- \u867d\u7136 Github \u4e2d Star \u6570\u91cf\u548c Vue \u5dee\u8ddd\u8d8a\u6765\u8d8a\u5c0f\uff0c\u4f46\u662f\u4ece Npmjs \u7684\u4e0b\u8f7d\u7edf\u8ba1\u4e2d\u3002React \u7684\u65e5\u5747\u4e0b\u8f7d\u6570\u91cf\u662f Angular/Vue \u76846\uff0c7\u500d\u3002\u53ef\u89c1\u5168\u4e16\u754c\u8303\u56f4 React \u7684\u7528\u6237\u662f\u9065\u9065\u9886\u5148\u7684\n\n\u5976\u4e86\u4e00\u6ce2 React \u7684\u597d\u5904\uff0c\u4f46\u662f\u76ee\u524d React \u7684\u95ee\u9898\u4e5f\u662f\u975e\u5e38\u591a\uff1a\n\n- \u6587\u6863\u5e76\u4e0d\u662f\u5f00\u53d1\u6307\u5bfc\uff0c\u4e14\u96be\u4e8e\u7406\u89e3\u3002\u867d\u7136 React16 \u51fa\u6765\u6587\u6863\u6539\u7248\u4ee5\u540e\u6bd4\u4e4b\u524d\u597d\u4e86\u8bb8\u591a\u3002\u4f46\u662f\u8fd9\u771f\u7684\u4e0d\u662f\u4e00\u4e2a "\u7528\u6237\u4f7f\u7528\u8bf4\u660e\u4e66"\uff0c\u800c\u50cf\u662f\u524d\u7aef\u54f2\u5b66 Blog\n- React \u7684\u8bbe\u8ba1\u592a\u6fc0\u8fdb\u4e86\u3002\u98a0\u8986\u4e86\u4f20\u7edf\u524d\u7aef\u5f00\u53d1\u7684\u5f88\u591a\u6a21\u5f0f\uff0c\u5176\u4e2d\u9700\u8981\u7406\u89e3\u5927\u91cf\u7684\u8bbe\u8ba1\u6a21\u5f0f\n- \u5728\u5927\u578b\uff0c\u590d\u6742\u524d\u7aef\u9879\u76ee\u4e2d\uff0c\u9700\u8981\u7406\u89e3\u590d\u6742\u7684 Flux \u67b6\u6784\n- \u4e00\u7fa4\u4e71\u4e03\u516b\u7cdf\u7684\u72b6\u6001(state, props)\u4f1a\u4ee4\u4eba\u82e6\u607c\n- \u5f88\u591a\u4eba\u4e0d\u592a\u4e60\u60ef JSX\uff0c\u4f46\u662f\u6211\u771f\u7684\u641e\u4e0d\u61c2\u4ed6\u548c\u4ed6\u4eec\u559c\u6b22\u7684 Vue \u6216\u8005 Angular \u6a21\u7248\u6709\u4ec0\u4e48\u533a\u522b\n- React \u7684\u601d\u60f3\u592a\u6fc0\u8fdb\u4e86\uff0c\u9700\u8981\u5177\u5907\u4e00\u5b9a\u7684\u4e1a\u52a1\u62bd\u8c61\u80fd\u529b(\u72b6\u6001)\uff0c\u5426\u5219\u4f1a\u975e\u5e38\u82e6\u607c\u3002\u4f46\u662f\u5bf9\u4e8e\u56fd\u5185\u7684\u5927\u591a\u6570\u524d\u7aef\u6280\u672f\u4eba\u5458\u662f\u6ca1\u6709\u8fd9\u65b9\u9762\u7ecf\u9a8c\u7684\n- React \u4e0d\u662f\u6e10\u8fdb\u5f0f\u7684\uff0c\u76f8\u6bd4\u8f83\u4e8e Vue \u80fd\u591f\u8f7b\u677e\u7684\u5e94\u7528\u4e8e\u8001\u65e7\u9879\u76ee\u4e0d\u540c\uff0cReact \u867d\u7136\u4e5f\u53ef\u4ee5\u7528\u4e8e\u8001\u65e7\u9879\u76ee\uff0c\u4f46\u662f\u4e2a\u4eba\u8ba4\u4e3a\u5f00\u53d1\u4f53\u9a8c\u975e\u5e38\u7684\u4e0d\u53cb\u597d\n- \u540e\u7aef\u6e32\u67d3\u76f8\u6bd4\u4f20\u7edf\u5f00\u53d1\u6709\u4e00\u5b9a\u4e0a\u624b\u96be\u5ea6\uff0c\u867d\u7136\u5b98\u65b9\u4e00\u76f4\u5f3a\u8c03\uff0c\u8fd9\u662f\u503c\u5f97\u7684\uff0c\u56e0\u4e3a\u4f60\u4f1a\u5728\u5c06\u6765\u83b7\u5229\u66f4\u591a\u3002\u4f46\u662f\u4ee5\u56fd\u5185\u4e92\u8054\u7f51\u5f00\u53d1\u73b0\u72b6\u3002\u6ca1\u4eba\u539f\u610f\u82b1\u8d39\u90a3\u4e2a\u6210\u672c\u53bb\u7814\u7a76\uff0c\u8fd9\u4e5f\u662f Angular \u5728\u4e2d\u56fd\u4e92\u8054\u7f51\u9879\u76ee\u4e2d\u4f7f\u7528\u5f88\u5c11\u7684\u539f\u56e0\u5427\n- \u540e\u7aef\u6e32\u67d3\u6027\u80fd\u4f9d\u7136\u5b58\u5728\u95ee\u9898\uff0c\u67e5\u9605\u8fc7\u8bb8\u591a\u6587\u7ae0\u3002\u5728 React \u4ece\u7ec4\u4ef6\u6e32\u67d3\u6210\u9875\u9762\u6027\u80fd\u4e00\u76f4\u4e0d\u662f\u5f88\u597d\u3002\u6240\u4ee5\u76ee\u524d\u4e00\u822c\u4ec5\u7528\u4e8e\u540c\u6784\u76f4\u51fa\n\n_**Note**_: _*\u5176\u5b9e\u771f\u7684\u4e0d\u5fc5\u7ea0\u7ed3\u90a3\u4e48\u591a\u524d\u7aef\u6846\u67b6\u54ea\u4e2a\u597d\uff0c\u54ea\u4e2a\u4e0d\u597d\u3002\u4ed6\u4eec\u90fd\u80fd\u89e3\u51b3\u524d\u7aef\u95ee\u9898\uff0c\u5e2e\u52a9\u6211\u4eec\u5feb\u901f\u843d\u5730\u9700\u6c42\u3002\u552f\u4e00\u7684\u4e0d\u540c\u662f\u4e0d\u540c\u7684\u5f00\u53d1\u4f53\u9a8c\uff0c\u559c\u6b22\u54ea\u79cd\u5f00\u53d1\u4f53\u9a8c\uff0c\u5c31\u53bb\u5b66\u4e60\u597d\u4e86*_\n\n## \u672c\u7ad9\u7684\u4e3b\u8981\u5185\u5bb9\n\n- \u8ba4\u8bc6 React\n- \u4ece create-react-app \u5f00\u59cb\n- React \u7684\u57fa\u672c\u8bed\u6cd5\n- Thinking in React(\u91cd\u8981)\n- Flux(\u91cd\u8981)\n\n## \u597d\u4e86\u8bf4\u8fd9\u4e48\u591a\u5e9f\u8bdd\uff0c\u90a3\u8ba9\u6211\u4eec\u5f00\u59cb\u5427\uff01\n[\u8fdb\u5165-\u6982\u8981](/main)\n'}});
//# sourceMappingURL=0.545c5e19.chunk.js.map