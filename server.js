const http=require('http')
const serveur=http.createServer((req,res)=>{
    res.write('<h1>Hello Node</h1>\n')
    res.end()
})
const port=3000
serveur.listen(port,()=>{
    console.log("serveur running")
})
