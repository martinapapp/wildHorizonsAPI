import http from 'node:http'

const PORT = 8000
const server = http.createServer((req, res)=>{
    res.write('Here comes some data \n')
    res.end('hello from this demo server')
})

server.listen(PORT, ()=>{
     console.log(`this my port: ${PORT}. Juhuu!`)
})