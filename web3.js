// Uint8Array
let bytes= new Uint8Array([0,255,127,128]);
console.log(bytes);

/* 1.1 Bytes
 * In Javascript each elm in an array takes 8 bytes (64bits), 
 * but in an Uint8Array it takes 1 byte. (makes sure every element doesn’t exceed 255 by mod.)
 */
