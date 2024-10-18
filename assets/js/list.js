// Kullanıcıya listeye kaç adet isim eklemek istediğini soralım. 
// Kullanıcı cevabına göre isimleri girelim ve daha sonra console'da yazdıralım. (isimler birden fazla eklenebilir)
// Kullanıcıya liste içinden hangi ismi aradığını soralım.
// Kullanıcının vereceği cevaba göre "... ismi listenizde .... adet bulundu" gibi mesaj çıkartalım.

let isimler = [];

let adet = parseInt(prompt("Kac adet isim eklemek istersiniz? "));

for (let i =0; i < adet; i++) {
  let isim =prompt("Bir isim giriniz? ")
  isimler.push(isim);
}

console.log("Girilen isimler: ");
for (let isim of isimler) {
  console.log(isim);
}

let arananIsim = prompt("Listede hangi ism ariyonuz? ");

let sayac = 0;
for (let isim of isimler) {
  if (isim === arananIsim) {
    sayac++;
  }
}
if (sayac > 0) {
  console.log(arananIsim + ' ismi listenizde ' + sayac + ' adet bulundu ');
} else {
  console.log(arananIsim + ' listenizde bulunamadi. ');
}