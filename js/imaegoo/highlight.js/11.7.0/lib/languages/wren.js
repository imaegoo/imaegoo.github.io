function wren(e){var a=e.regex,s=/[a-zA-Z]\w*/,c=["as","break","class","construct","continue","else","for","foreign","if","import","in","is","return","static","var","while"],n=["true","false","null"],t=["this","super"],i=["-","~",/\*/,"%",/\.\.\./,/\.\./,/\+/,"<<",">>",">=","<=","<",">",/\^/,/!=/,/!/,/\bis\b/,"==","&&","&",/\|\|/,/\|/,/\?:/,"="],r={relevance:0,match:a.concat(/\b(?!(if|while|for|else|super)\b)/,s,/(?=\s*[({])/),className:"title.function"},o={match:a.concat(a.either(a.concat(/\b(?!(if|while|for|else|super)\b)/,s),a.either(...i)),/(?=\s*\([^)]+\)\s*\{)/),className:"title.function",starts:{contains:[{begin:/\(/,end:/\)/,contains:[{relevance:0,scope:"params",match:s}]}]}},l={variants:[{match:[/class\s+/,s,/\s+is\s+/,s]},{match:[/class\s+/,s]}],scope:{2:"title.class",4:"title.class.inherited"},keywords:c},i={relevance:0,match:a.either(...i),className:"operator"},m={className:"property",begin:a.concat(/\./,a.lookahead(s)),end:s,excludeBegin:!0,relevance:0},b={relevance:0,match:a.concat(/\b_/,s),scope:"variable"},h={relevance:0,match:/\b[A-Z]+[a-z]+([A-Z]+[a-z]+)*/,scope:"title.class",keywords:{_:["Bool","Class","Fiber","Fn","List","Map","Null","Num","Object","Range","Sequence","String","System"]}},p=e.C_NUMBER_MODE,s={match:[s,/\s*/,/=/,/\s*/,/\(/,s,/\)\s*\{/],scope:{1:"title.function",3:"operator",6:"params"}},u=e.COMMENT(/\/\*\*/,/\*\//,{contains:[{match:/@[a-z]+/,scope:"doctag"},"self"]}),g={scope:"subst",begin:/%\(/,end:/\)/,contains:[p,h,r,b,i]},d={scope:"string",begin:/"/,end:/"/,contains:[g,{scope:"char.escape",variants:[{match:/\\\\|\\["0%abefnrtv]/},{match:/\\x[0-9A-F]{2}/},{match:/\\u[0-9A-F]{4}/},{match:/\\U[0-9A-F]{8}/}]}]},g=(g.contains.push(d),[...c,...t,...n]),a={relevance:0,match:a.concat("\\b(?!",g.join("|"),"\\b)",/[a-zA-Z_]\w*(?:[?!]|\b)/),className:"variable"};return{name:"Wren",keywords:{keyword:c,"variable.language":t,literal:n},contains:[{scope:"comment",variants:[{begin:[/#!?/,/[A-Za-z_]+(?=\()/],beginScope:{},keywords:{literal:n},contains:[],end:/\)/},{begin:[/#!?/,/[A-Za-z_]+/],beginScope:{},end:/$/}]},p,d,{className:"string",begin:/"""/,end:/"""/},u,e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,h,l,s,o,r,i,b,m,a]}}module.exports=wren;