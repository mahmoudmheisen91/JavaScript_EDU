//  Modern JS
"use strict";

/* 
Comments increase the overall code footprint, but that’s not a problem at all. 
There are many tools which minify code before publishing to a production server. 
They remove comments, so they don’t appear in the working scripts. 
Therefore, comments do not have negative effects on production at all.
*/

const BIRTHDAY = "01.01.2000";
const age = 25; // calculated at runtime

let msg = "Hello JS";
let name = "Mahmoud";
let admin = name;

// Numbers
let a = 12;
let b = 4.3;
let c = -Infinity;
let c2 = 1 / 0;
let d = NaN;
let d2 = "fs" / 2;

// BigInt:
let big = 10n;

//  Strings:
let s1 = "a";
let s2 = "b";
let s3 = `d= ${s1}`;

// Bool, Null, Undefined:
let bl = true;
let n = null;
let csx;

typeof Math; // "object"  (1) (operator)
typeof null; // "object"  (2) (function)
typeof alert; // "function"  (3)

document.write(s3);
