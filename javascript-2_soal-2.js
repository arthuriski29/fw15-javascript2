//10 method built-in function bawaan Javascript:

//1  .includes()
         // Pada string 
                // adalah metode untuk mencocokan string yang berada dalam variabel yang kita cari
                // contoh :

                var string1 = 'Komputer yang selalu diam';
                let hasil = string1.includes('lal');
                console.log(hasil); // output adalah true, karena terdapat 'lal' di dalam string1

         // Pada array
                // metode untuk dapat mencocokkan string pada seluruh elemen dalam array, sesuay dengan value yang diinputkan dalam includes()nya
                // contoh :

                var array1 = ['Robert', 'Bartolomeu', 'Cristopher', 'Pablo', 'Montesquieu']
                let periksa = array1.includes('eu');
                console.log(periksa); // output false, karena tidak dapat mendeteksi langsung 'eu' dalam array

                //berikut agar dapat berfungsi pada string nya yang dipanggil :

                let periksa1 = array1[1].includes('eu'); //spesifik hanya pada index[1] dari array
                console.log(periksa1);

//2. charAt()
              // Adalah metode built in untuk mengakses setiap character index pada sebuah string
              // metode ini hanya bekerja pada string
              const kata = 'Pagi'
              const ambilIndex = kata.charAt(0)
              //output : P

//3. .map()
              // method built in untuk membuat array baru dari suatu array
              // dimana map ini bisa dijalankan fungsi di dalamnya untuk memanipulasi array lama
              // untuk ditampikan resultnya pada array baru
              const sebuahWord = [{
                     "id"   : 1,
                     "nama"  : "Adi",
                     "kerja" : "Pengusaha",
                     "no telp" : 1234,
              },
              {
                     "id"   : 2,
                     "nama" : "Rio",
                     "kerja": "Petani",
                     "no telp": 2345,

              }] 

              const ambilMap = sebuahWord.map(ambil => ambil.nama)
              console.log(ambilMap) // output ["Rio","Adi"]

//4. .find()
              // untuk menemukan suatu string pada array
              // penggunaannya hanya mendeteksi string pertama ditemukan yang sesuai
              // jika ada banyak, maka yang pertama dideteksi, yang lain diabaikan
              // mengharuskan fungsi
              const penemu = ['Einstein', 'Newton', 'Galileo', 'Tesla'];
              const ambilFind = penemu.find((temu) => temu[2])
              console.log(ambilFind); // output 'Galileo'

//5.

