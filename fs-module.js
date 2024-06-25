//SYnchronous: blocking the code till it is completeed

// const {readFileSync,writeFileSync} = require('fs');


// const first = readFileSync('./content/fs-first.txt','utf-8')
// const second = readFileSync('./content/fs-second.txt','utf-8')

// console.log(first,second);      //Hello this is the first file Hello THis is the second file 



// //this overrides the file or creates if it doesnot exist 
// writeFileSync('./content/write-FileSync.txt',`Here is the result:${first}, ${second}`)

// //to append 
// writeFileSync('./content/write-FileSync.txt',`Here is the result:${first}, ${second}`,{flag:'a'})


//ASYNCHRONOUS

const {readFile,writeFile} = require('fs');

readFile ('./content/fs-first.txt','utf-8',(err,res)=>{
    if(err){
        return err;
    }
    console.log(res)                    //result is the buffer value/ we need to give utf-8 to get the string
    
    writeFile('./content/fs-second.txt', 'this is written from the Write File Asynchronous', (err) => {
        if (err) {
            console.error('Error writing file:', err);
            return;
        }
        console.log('File has been written');
    })
})
