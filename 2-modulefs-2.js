// learning about asynchrounous in file system module

const {readFile, writeFile} = require('fs')

console.log("start")
readFile('./content/first.txt','utf8', (err, result) => {
    if(err){
        console.log(err)
        return
    }
    console.log("working now")
    const first = result

    readFile('./content/second.txt','utf8', (err, result) =>{
        if(err){
            console.log(err)
        }
        const second = result
        writeFile('./content/result-async.txt',
        `Here is the result for callback async with fs: ${first}, ${second}`,
        (err, result) =>{
        if(err){
            console.log(err)
        }
        console.log("done with this call")
        }
        )

    })
})

console.log("starting the call")

// asynchrous approach wont wait the code to finish for it to run the next code.
