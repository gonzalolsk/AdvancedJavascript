// Type                 Result

// Undefined            undefined
// Null                 object*
// Boolean              boolean
// Number               number
// BigInt               (new in ECMAScript 2020) bigint
// String               string
// Symbol               (new in ECMAScript 2015) symbol
// Function             object function
// Any other object     object


// *Null - Why does the typeof null return object? When JavaScript was first
// implemented, values were represented as a type tag and a value. The
// objects type tag was 0 and the NULL pointer (0x00 in most platforms)
// consequently had 0 as a type tag as well. A fix was proposed that would
// have made typeof null === 'null', but it was rejected due to legacy code that
// would have broken.