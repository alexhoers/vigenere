const vigenere = require('./index.js');
const test = require('tape');

test('Test vigenere encrypts', (assert) => {
  
  const p = 'thisisaneasyunderstandableexampletoillustratevigenereandtoshowhowtosuccessfullycryptanalysethecipher';
  const k = 'brown';
  const c = 'uywovtrbantpijqfigpnouoxyfvlwzqcspbjczqfuioprwzuaafiswaekcoupnvkjufgqpdvgosvczupspdpnorzuffkvapjgvae';

  const cv = vigenere.encrypt(p, k);

  assert.equal(c, cv);

  assert.end();
})

test('Test vigenere decrypts', (assert) => {
  const p = 'thisisaneasyunderstandableexampletoillustratevigenereandtoshowhowtosuccessfullycryptanalysethecipher';
  const k = 'brown';
  const c = 'uywovtrbantpijqfigpnouoxyfvlwzqcspbjczqfuioprwzuaafiswaekcoupnvkjufgqpdvgosvczupspdpnorzuffkvapjgvae';

  const pv = vigenere.decrypt(c, k);

  assert.equal(p, pv);

  assert.end();
})