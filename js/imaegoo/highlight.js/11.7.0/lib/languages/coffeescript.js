const KEYWORDS=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends"],LITERALS=["true","false","null","undefined","NaN","Infinity"],TYPES=["Object","Function","Boolean","Symbol","Math","Date","Number","BigInt","String","RegExp","Array","Float32Array","Float64Array","Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Int32Array","Uint16Array","Uint32Array","BigInt64Array","BigUint64Array","Set","Map","WeakSet","WeakMap","ArrayBuffer","SharedArrayBuffer","Atomics","DataView","JSON","Promise","Generator","GeneratorFunction","AsyncFunction","Reflect","Proxy","Intl","WebAssembly"],ERROR_TYPES=["Error","EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"],BUILT_IN_GLOBALS=["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],BUILT_INS=[].concat(BUILT_IN_GLOBALS,TYPES,ERROR_TYPES);function coffeescript(e){var n,r={keyword:KEYWORDS.concat(["then","unless","until","loop","by","when","and","or","is","isnt","not"]).filter((n=["var","const","let","function","static"],e=>!n.includes(e))),literal:LITERALS.concat(["yes","no","on","off"]),built_in:BUILT_INS.concat(["npm","print"])},t="[A-Za-z$_][0-9A-Za-z$_]*",a={className:"subst",begin:/#\{/,end:/\}/,keywords:r},i=[e.BINARY_NUMBER_MODE,e.inherit(e.C_NUMBER_MODE,{starts:{end:"(\\s*/)?",relevance:0}}),{className:"string",variants:[{begin:/'''/,end:/'''/,contains:[e.BACKSLASH_ESCAPE]},{begin:/'/,end:/'/,contains:[e.BACKSLASH_ESCAPE]},{begin:/"""/,end:/"""/,contains:[e.BACKSLASH_ESCAPE,a]},{begin:/"/,end:/"/,contains:[e.BACKSLASH_ESCAPE,a]}]},{className:"regexp",variants:[{begin:"///",end:"///",contains:[a,e.HASH_COMMENT_MODE]},{begin:"//[gim]{0,3}(?=\\W)",relevance:0},{begin:/\/(?![ *]).*?(?![\\]).\/[gim]{0,3}(?=\W)/}]},{begin:"@"+t},{subLanguage:"javascript",excludeBegin:!0,excludeEnd:!0,variants:[{begin:"```",end:"```"},{begin:"`",end:"`"}]}],a=(a.contains=i,e.inherit(e.TITLE_MODE,{begin:t})),s="(\\(.*\\)\\s*)?\\B[-=]>",o={className:"params",begin:"\\([^\\(]",returnBegin:!0,contains:[{begin:/\(/,end:/\)/,keywords:r,contains:["self"].concat(i)}]},c={variants:[{match:[/class\s+/,t,/\s+extends\s+/,t]},{match:[/class\s+/,t]}],scope:{2:"title.class",4:"title.class.inherited"},keywords:r};return{name:"CoffeeScript",aliases:["coffee","cson","iced"],keywords:r,illegal:/\/\*/,contains:[...i,e.COMMENT("###","###"),e.HASH_COMMENT_MODE,{className:"function",begin:"^\\s*"+t+"\\s*=\\s*"+s,end:"[-=]>",returnBegin:!0,contains:[a,o]},{begin:/[:\(,=]\s*/,relevance:0,contains:[{className:"function",begin:s,end:"[-=]>",returnBegin:!0,contains:[o]}]},c,{begin:t+":",end:":",returnBegin:!0,returnEnd:!0,relevance:0}]}}module.exports=coffeescript;