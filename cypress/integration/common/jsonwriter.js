
const fs = require('fs');

const newObject = {
    name: 'Val Williams',
    age : 51,
    address : '26 Martini Drive'
};

fs.writeFile('./valwill.json', JSON.stringify(newObject, null, 2), err => {
    if(err){
        console.log(err);
    }else{
        console.log('File successfully written!');
    }
});


