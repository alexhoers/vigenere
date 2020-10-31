const assert = require('assert');

const ALPHABET = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const mapToNum = [];
const mapToChar = [];

const init = () => {
  for (let i = 0; i < 26; i++) {
    mapToChar[i] = ALPHABET[i];
    mapToNum[ALPHABET[i]] = i;
  }
}

const mod = (n, m) => {
  return ((n % m) + m) % m;
}

init();

module.exports = {

  /**
   * Vignere cipher encryption and decryption
   * @param {string} p plaintext message
   * @param {string} k key
   */
  encrypt: (p, k) => {
    let charCode = 0;
    let c = '';
    
    for(let i = 0; i < p.length; i++) { 
      charCode = mod((mapToNum[p[i]] + mapToNum[k[i % (k.length)]]), 26);
      c += mapToChar[charCode];
       }
    return c;
  },

  /**
   * Vignere cipher encryption and decryption
   * @param {string} c ciphertext
   * @param {string} k key
   */
  decrypt: (c, k) => {
    let charCode = 0;
    let p = '';
    
    for(let i = 0; i < c.length; i++) {
      charCode = mod((mapToNum[c[i]] - mapToNum[k[i % (k.length)]]), 26);
      p += mapToChar[charCode];
    }
    return p;
  },
  
}