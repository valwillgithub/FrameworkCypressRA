
const fs = require('fs');

const newObject = {
    name: 'Vasty Jay',
    age : 62,
    address : '266 Martini Drive'
};

fs.writeFile('./valwill.json', JSON.stringify(newObject, null, 2), err => {
    if(err){
        console.log(err)
    }else{
        console.log('File successfully written!')
    }
});


