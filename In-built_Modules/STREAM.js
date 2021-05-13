// create big txt first
const {writeFileSync}=require('fs')
for(let i=0;i<10000;i++)
{
    writeFileSync('./In-built_Modules/content/big.txt',`hello world ${i}\n`,{flag:'a'})
}


const {createReadStream}=require('fs')

const stream=createReadStream('./In-built_Modules/content/big.txt',{highWaterMark:9000,encoding:'utf8'})

//default 64kb
//last buffer-remainder
//highwatermarks-control size
//const stream=createReadStream('./...',{highwaterMark:90000})
//const stream=createReadStream('./....',{encoding:'utf8})
stream.on('data',(result)=>{
    console.log(result)
})

stream.on('error',(err)=>{
    console.log(err);
})

const http=require('http')
const fs=require('fs')

http.createServer((req,res)=>{
    const fileStream=fs.createReadStream('./In-built_Modules/content/big.txt','utf8')
    fileStream.on('open',()=>{
        //we reading data in chunk,we can write data in chunk too
        fileStream.pipe(res)
    })
    fileStream.on('error',(err)=>{
        res.end(err)
    })
}).listen(5000,console.log('Server listening on port no 5000'))