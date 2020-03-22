const fs = require('fs');
const path = require('path');


//Create folder
//fs.mkdir(path.join(__dirname, '/test'),{}, function(err){
 //   if(err) throw err;
  //  console.log('Folder Created!!');
//});


//Create and write to file
//fs.writeFile(path.join(__dirname, '/test','hello.txt'),'I love nodejs',err => {
//if(err) throw err;
//console.log('File written to....');
//});

//Read File
//fs.readFile(path.join(__dirname,'/test', 'hello.txt'),'utf8', (err,data) => {

   // if(err) throw err;
    //console.log(data);
//});


//Rename File
fs.rename(path.join(__dirname,'/test', 'hello.txt'),path.join(__dirname,'/test', 'helloworld.txt'), (err,data) => {

    if(err) throw err;
    console.log('Yes renamed...');
});

