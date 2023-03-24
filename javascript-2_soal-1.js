// Perbedaan antara  variable 'var','let', dan 'const'. Beserta scope nya

// Dari saat ditemukannya 'var' lebih dahulu digunakan dari tahun 1995-2005
// Kemudian 'let' beserta 'const' versi deklarasi variabel baru ditambahkan sejak tahun 2005
// Jadi jika ingin menggunakan browser versi lama (<2005) maka gunakan var.

// Dari segi Scope :

// 1.'var'
//           'var' penggunaannya adalah Global Scoped atau function scoped, artinya dapat digunakan dimanapun jika deklarasi awalnya di paling luar program (global)  
          
//           jadi jika 'var' dideklarasikan diluar fungsi kemudian dipanggil ke dalam fungsi . 'var' akan terakses

//           tapi jika deklarasi awal dalam fungsi, kemudian dipanggil diluar maka tidak dapat diakses

                      function f() {
 
                      // variabel dapat diakses dimanapun
                      // didalam fungsi ini

                      var a = 10;
                      console.log(a)
                      }
                      f();  
 
                      // variabel a tidak dapat diakses
                      // diluar fungsi (karena deklarasinya
                      // di dalam)
                      console.log(a);

        //   deklarasi ulang variabel dapat dilakukan menggunakan 'var'. begitupun untuk update variabel (tanpa deklarasi)
          
// 2. 'let'
//           'let' penggunaannya adalah Block Scoped, artinya variabel hanya dapat diakses didalam block {(block)}

        
	                    let a = 10;
	                    function f() {
	                    	if (true) {
	                    		let b = 9

	                    		// hasilnya 9
	                    		console.log(b);
	                    	}

	                    	// hasil akan error
	                    	// karena sudah diluar blok if
	                    	console.log(b);
	                    }
	                    f()

	                    // akan mem print 10 (deklarasi a nya di blok global)
	                    console.log(a)




        //   'let' tidak dapat men-declare variabel yang sama 2 kali , sebab jika dijalankan akan enimbulkan error

                      let a = 5

                      let a = 6

                      console.log(a)
                      // hasilnya akan error 'a' has already defined

        //    variabel 'let' yang sama, jika berada di dua blok berbeda akan ditafsirkan berbeda pula masing masing nya

                      let a = 10
                      if (true) {
                      	let a=9
                      	console.log(a) // hasil 9
                      }
                      console.log(a) // hasil 10


// 3. const

            // 'const' sama saja dengan properti pada 'let' perbedaannya variabel tidak dapat di update (const artinya constant)

                      const a = 9
                      const a = 10  // tidak dapat di deklarasikan ulang

                      a = 12 //tidak dapat diupdate

                      console.log(a) // akan memberikan hasil error

            // pemanggilan variabel 'const' yang di deklarasikan diluar blok pemanggil, akan menjadi error

                      const a = 10;
                          function f() {
                              a = 9
                              console.log(a)
                          }
                          f();  //hasil akan error

            // user tidak dapat mengganti properti dari objek 'const'.
            // namun dapat mengganti value dari properti dari objek 'const' tersebut.


                        	const a = {
                        		prop1: 10,
                        		prop2: 9
                        	}
	
                        	// It is allowed
                        	a.prop1 = 3

                        	// It is not allowed
                        	a = {
                        		b: 10,
                        		prop2: 9
                        	}




            
                          


