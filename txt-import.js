const fs=require('fs');
console.log(fs)
fs.writeFile('welcome-txt',"Hello Node",(err)=>{
    if(err) return console.log('err');
    console.log('file created')
})
//async await
fs.readFile('./welcome.txt','utf-8',(err,data)=>{
    if(err) return console.log(err)
    console.log(data)
})