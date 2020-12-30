//const testdata = require('../../fixtures/testdata.json');
//console.log(testdata.firstname);

const fs = require('fs');
//fs.readFile is asynchronous way to read a file
/**fs.readFile('../../fixtures/testdata.json', 'utf-8', (err, jsonString) => {
    if (err){
        console.log(err);
    }else{
    //    console.log(JSON.parse(jsonString).fullname);
        try{
        const data = JSON.parse(jsonString);
        console.log(data.alertmsg);
        }catch(err1){
            console.log('Error parsing JSON', err1);
        }

    }    
});*/

function jsonReader(filePath, cb){
    fs.readFile(filePath, 'utf-8', (err, fileData) => {
        if(err){
            return cb && cb(err);
        }
        try{
            const object = JSON.parse(fileData);
            return cb && cb(null, object);
        }catch(err){
            return cb && cb(err);
        }
    })
}//jsonReader

jsonReader('../../fixtures/testdata.json', (err, data) => {
    if(err){
        console.log(err);
    }else{
        console.log(data.postcode)
    }
});    