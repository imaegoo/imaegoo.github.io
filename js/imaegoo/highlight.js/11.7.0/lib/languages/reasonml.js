function reasonml(e){var n="~?[a-z$_][0-9a-zA-Z$_]*",a="`?[A-Z$_][0-9a-zA-Z$_]*",s="("+["||","++","**","+.","*","/","*.","/.","..."].map(function(e){return e.split("").map(function(e){return"\\"+e}).join("")}).join("|")+"|\\|>|&&|==|===)",i="\\s+"+s+"\\s+",r={keyword:"and as asr assert begin class constraint do done downto else end exception external for fun function functor if in include inherit initializer land lazy let lor lsl lsr lxor match method mod module mutable new nonrec object of open or private rec sig struct then to try type val virtual when while with",built_in:"array bool bytes char exn|5 float int int32 int64 list lazy_t|5 nativeint|5 ref string unit ",literal:"true false"},l="\\b(0[xX][a-fA-F0-9_]+[Lln]?|0[oO][0-7_]+[Lln]?|0[bB][01_]+[Lln]?|[0-9][0-9_]*([Lln]|(\\.[0-9_]*)?([eE][-+]?[0-9_]+)?)?)",l={className:"number",relevance:0,variants:[{begin:l},{begin:"\\(-"+l+"\\)"}]},s={className:"operator",relevance:0,begin:s},t=[{className:"identifier",relevance:0,begin:n},s,l],c=[e.QUOTE_STRING_MODE,s,{className:"module",begin:"\\b"+a,returnBegin:!0,relevance:0,end:".",contains:[{className:"identifier",begin:a,relevance:0}]}],o=[{className:"module",begin:"\\b"+a,returnBegin:!0,end:".",relevance:0,contains:[{className:"identifier",begin:a,relevance:0}]}],g={className:"function",relevance:0,keywords:r,variants:[{begin:"\\s(\\(\\.?.*?\\)|"+n+")\\s*=>",end:"\\s*=>",returnBegin:!0,relevance:0,contains:[{className:"params",variants:[{begin:n},{begin:"~?[a-z$_][0-9a-zA-Z$_]*(\\s*:\\s*[a-z$_][0-9a-z$_]*(\\(\\s*('?[a-z$_][0-9a-z$_]*\\s*(,'?[a-z$_][0-9a-z$_]*\\s*)*)?\\))?){0,2}"},{begin:/\(\s*\)/}]}]},{begin:"\\s\\(\\.?[^;\\|]*\\)\\s*=>",end:"\\s=>",returnBegin:!0,relevance:0,contains:[{className:"params",relevance:0,variants:[{begin:n,end:"(,|\\n|\\))",relevance:0,contains:[s,{className:"typing",begin:":",end:"(,|\\n)",returnBegin:!0,relevance:0,contains:o}]}]}]},{begin:"\\(\\.\\s"+n+"\\)\\s*=>"}]},b=(c.push(g),{className:"constructor",begin:a+"\\(",end:"\\)",illegal:"\\n",keywords:r,contains:[e.QUOTE_STRING_MODE,s,{className:"params",begin:"\\b"+n}]}),s={className:"pattern-match",begin:"\\|",returnBegin:!0,keywords:r,end:"=>",relevance:0,contains:[b,s,{relevance:0,className:"constructor",begin:a}]},m={className:"module-access",keywords:r,returnBegin:!0,variants:[{begin:"\\b("+a+"\\.)+"+n},{begin:"\\b("+a+"\\.)+\\(",end:"\\)",returnBegin:!0,contains:[g,{begin:"\\(",end:"\\)",relevance:0,skip:!0}].concat(c)},{begin:"\\b("+a+"\\.)+\\{",end:/\}/}],contains:c};return o.push(m),{name:"ReasonML",aliases:["re"],keywords:r,illegal:"(:-|:=|\\$\\{|\\+=)",contains:[e.COMMENT("/\\*","\\*/",{illegal:"^(#,\\/\\/)"}),{className:"character",begin:"'(\\\\[^']+|[^'])'",illegal:"\\n",relevance:0},e.QUOTE_STRING_MODE,{className:"literal",begin:"\\(\\)",relevance:0},{className:"literal",begin:"\\[\\|",end:"\\|\\]",relevance:0,contains:t},{className:"literal",begin:"\\[",end:"\\]",relevance:0,contains:t},b,{className:"operator",begin:i,illegal:"--\x3e",relevance:0},l,e.C_LINE_COMMENT_MODE,s,g,{className:"module-def",begin:"\\bmodule\\s+"+n+"\\s+"+a+"\\s+=\\s+\\{",end:/\}/,returnBegin:!0,keywords:r,relevance:0,contains:[{className:"module",relevance:0,begin:a},{begin:/\{/,end:/\}/,relevance:0,skip:!0}].concat(c)},m]}}module.exports=reasonml;