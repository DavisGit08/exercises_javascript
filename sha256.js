var palabraAleatoria = require("./palabraAleatoria.js")

function hash(string) {
  const utf8 = new TextEncoder().encode(string);
  return crypto.subtle.digest('SHA-256', utf8).then((hashBuffer) => {
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray
      .map((bytes) => bytes.toString(16).padStart(2, '0'))
      .join('');
    return hashHex;
  });
}

console.log(palabraAleatoria)


for(i=0;i<10;i++){
  const palabraAleatoria = require("./palabraAleatoria.js")
  hash(palabraAleatoria).then((hex) => console.log(hex))
}
