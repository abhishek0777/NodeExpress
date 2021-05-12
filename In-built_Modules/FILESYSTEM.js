//------------------------------sync(blocking)--------------------------
// const {readFileSync,writeFileSync}=require('fs')

// const inputFile=readFileSync('./content/input.txt','utf8')
// console.log(inputFile);


// writeFileSync('./content/output.txt',inputFile)

// const outputFile=readFileSync('./content/output.txt','utf8')
// console.log(outputFile);

// ----------------async(non blocking)---------------------------------
const {readFile,writeFile}=require('fs')

// if we don't provide utf8 coding,we will get buffer
readFile('./content/input.txt','utf8',(err,result)=>{
    if(err){
        console.log(err)
        return
    }
    const inputFile=result
    writeFile(
        './content/output.txt',
        `Here is the result: ${inputFile}`,
        (err,result)=>{
            if(err){
                console.log(err)
                return
            }
            console.log(result);
        }
    )
    
})