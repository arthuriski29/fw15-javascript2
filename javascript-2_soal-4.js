//syarat nilaiAwal < nilaiAkhir &
//jumlah data pada dataArray > 5
//fungsi akan mencari data dalam dataArray antara nilaiAwal dan nilaiAkhir
//mengurutkan hasil pencarian
//dan menampilkannya ke layar/console



function sebuahFunction(nilaiAwal, nilaiAkhir, dataArray) {
  if ((nilaiAwal < nilaiAkhir) && (dataArray.length > 5)) {
    
    
    //urutkan dataArray
    let sortedArray = dataArray.sort(function(a, b) {
      return a - b
    });
    
    //isi kode untuk memberi batasan filter dari nilaiAwal dan nilaiAkhir 
    
    const filteredArray = sortedArray.filter(function(value) {
      return value >= nilaiAwal && value <= nilaiAkhir;
    });
  
    //buat variabel baru setelah remove

    console.log(filteredArray);

  } else if ((nilaiAwal >= nilaiAkhir) && (dataArray.length <= 5)) {
    console.log('Nilai Akhir harus lebih besar dari nilai awal dan Jumlah angka dalam data Array harus lebih besar dari 5') 
  } else if (nilaiAwal >= nilaiAkhir) {
    console.log('Nilai Akhir harus lebih besar dari nilai awal')
  } else if (dataArray.length <= 5) {
    console.log('Jumlah angka dalam data Array harus lebih besar dari 5')
  } 

};

sebuahFunction(11, 90, [98, 67, 40, 5, 3, 287, 51, 19, 68]);
sebuahFunction(34, 31,[12, 45, 77, 23, 35, 87, 11, 76, 8]);
sebuahFunction(34, 31,[11, 76, 8]);
sebuahFunction(9, 99,[11, 76, 8]);

