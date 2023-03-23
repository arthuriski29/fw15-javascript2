let data = {
  id: 1,
  name: 'Leanne Graham',
  username: 'Bret',
  email: 'Sincere@april.biz',
  address: {
    street: 'Kulas Light',
    suite: 'Apt. 556',
    city: 'Gwenborough',
    zipcode: '92998-3874',
    },
  phone: ' 1-770-736-8031 x56442',
  website: 'hildegard.org'
};

//5.a
let data2 = {
  name : 'Fajar Fathur RB',
  email : 'fajar.fathurriskyb@gmail.com',
  hobby : ['Playing guitar', 'Listening to Music', 'Singing']
};


let dataUpdate = { ...data, ...data2 };

console.log(dataUpdate);

//5.b
function destructuringData() {
  
  const {street, city} = data.address;
  return `Dia bertempat tinggal di Jalan ${street}, pada kota ${city}`; 
}

console.log(destructuringData());

