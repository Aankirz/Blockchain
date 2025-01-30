# Blockchain
Blockchain somehow manages balances, so who's checking that ?

### How Banks do Auth ?
`username` and `password` enough for you to look at funds, transfer funds.

How Blockchains do Auth ?
Through public and private keypair (`asymmetric cryptography`)

### Bits and Bytes
Bit 0,1
Byte 8 bits together

computer understands 0 & 1

```js
let bytes = new Uint8Array([0,255,127,128]);
console.log(bytes);
```

- buffers and uint8 array are similar but buffer don't work in browsers.

Why use `Uint8` Array over `native` Array?
private keys => array of bytes (32 Bytes)
- They use less space. Every number takes 64 bits (8 bytes). But every value in a Uint8Array takes 1 byte.
- Uint8Array enforces constraints - it makes sure every element doesn't exceed 255.

- alphabets represnted in ascii -> binary


### Encodings
Bytes are unreadable that's why introduced encodings (human readable)
- ASCII
  ```
  1 char = 7bits
  ```
  -  7 bits allow 128 characters (2⁷ = 128), which was enough for English letters, numbers, punctuation, and control characters.  At the time, computers used 8-bit storage units (bytes), but early systems often reserved 1 bit for parity (error checking), leaving 7 bits for data.
  
  ```js
  function bytesToAscii(byteArray){
    return byteArray.map(byte => String.fromCharCode(byte)).join('')
  }

  const bytes=[72,101,108,111,108];
  const asciiString = bytesToAscii(bytes);
  console.log(asciiString);

  function asciiToBytes(asciiString){
    const bytesArray=[];
    for(let i=0;i<asciiString.length;i++){
        byteArray.push(asciiString.charCodeAt(i));
    }
    return byteArray;
  }

  const ascii="hello"
  const byteArray=asciiToBytes(asciiString);
  ```

  - TextDecoder: as the name suggest a built in js api that converts binary data(bytes) into human readable text.
  ```js
  function bytesToAscii(bytesArray){
    return new TextDecoder().decode(byteArray);
  }

  const bytesArray=new Uint8Array([72,100,108,101,111]);
  const asciiString=bytesToAscii(bytesArray);
  ```
 - Spread Op: expand an iterable (like an array, string, or object) into individual elements.
  ```js
  function asciiToUint8Array(str){
    return new Uint8Array([...str].map(char=>char.charCodeAt(0)));
  }
  ```
### Hashing
- process of converting data like a file or message into a fixed size string of chars 
- like sha-256, md-5
  
### Encryption
- converting plaintext data into an unreadable format called ciphertext. using **algorithm and key**.
- Symmetric and Aymmetric Encryption
  
### Asymmetric Encryption
Common Asymmetric Encryption Algorithms:
RSA - Rivest–Shamir–Adleman
ECC - Elliptic Curve Cryptography (ECDSA) - ETH and BTC
EdDSA - Edwards-curve Digital Signature Algorithm  - SOL

- Elliptic Curve Cryptography
  Uses a concept of Trapdoor function: fn **easy to compute in one direction, yet difficult to compute in the opposite direction (finding it's inverse)** without special information called **trapdoor**.
  
