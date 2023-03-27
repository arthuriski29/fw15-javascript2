const nameList = [
  'Abigail', 'Alexandra', 'Alison',
  'Amanda', 'Angela', 'Bella',
  'Carol', 'Caroline', 'Carolyn',
  'Deirdre', 'Diana', 'Elizabeth',
  'Ella', 'Faith', 'Olivia', 'Penelope'
];

// fungsi 3 parameter (search, limit, callback)
// search untuk mencari value yang sama dengan masing masing objek dalam array name
// limit untuk membatasi batas index yang ditampilkan
// callback untuk memanggil kembali fungsi lain dalam fungsi

function searchMachine(search, limit, callback) {
  const results = [];
  const jadiTulisanKecil = search.toLowerCase(); // input pada parameter search diconvert jadi lowercase
  for (let i = 0; i < nameList.length; i++) {
    const namaKecil = nameList[i].toLowerCase(); // masing2 elemen dalam array diconvert menjadi lowercase
    if (namaKecil.includes(jadiTulisanKecil)) {
      results.push(nameList[i]);
      if (results.length === limit) {
        break;
      }
    }
  }
  callback(results);
}
function hasilSearchMachine(results) {  //ini fungsi yang akan di callback
  console.log(results);
}


//pencarian nama
searchMachine('an', 3, hasilSearchMachine) //disini callbacknya



