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

                
