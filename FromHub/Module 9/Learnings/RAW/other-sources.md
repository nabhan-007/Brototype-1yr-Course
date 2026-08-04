// Http server

// const http=require('http')
// const server=http.createServer((req,res)=>{
// res.write('hello world')
// res.end()
// })
// server.listen(3002)

//Express

// const express=require('express')
// const app=express()
// app.get('/',(req,res)=>{
// res.send('hello')
// })
// app.listen(3002)

// File Sync

// const fs=require('fs')
// fs.writeFileSync('file.txt','helll nahh')
// const data=fs.readFileSync('file.txt','utf-8')
// console.log(data)

// Async File

// const fs=require('fs')
// fs.writeFile('file.txt','helll nahh',(err)=>{
// if(err)
// throw err

// })
// fs.readFile('file.txt','utf-8',(err,data)=>{
// if(err)
// throw err
// console.log(data)
// })

// File Date

// const fs=require('fs')
// const current=new Date().toString()
// fs.writeFile('date.txt',current,(err)=>{
// if(err){
// console.log('error')
// }else{
// console.log('done')
// }
// })

//Multiplication Table

// const express=require('express')
// const app=express()
// app.get('/table/:num',(req,res)=>{
// const num=parseInt(req.params.num)
// let r=''
// for(let i=1;i<=10;i++){
// r+=`${num}x${i}=${num*i}\n`
// }
// res.send(r)
// })
// app.listen(3001)

//sum

// const express=require('express')
// const app=express()
// app.get('/add/:num1/:num2',(req,res)=>{
// const num1=parseInt(req.params.num1)
// const num2=parseInt(req.params.num2)
// let sum=num1+num2
// res.send(`sum:${sum}`)
// })
// app.listen(3001)

//Application middleware

// const express=require('express')
// const app=express()
// app.use((req,res,next)=>{
// console.log('Application middleware')
// next()
// })
// app.get('/',(req,res,next)=>{
// res.send('Home')
// })
// app.get('/about',(req,res)=>{
// res.send('about')
// })
// app.listen(3001)

// Authentication

// const express=require('express')
// const app=express()
// function auth(req,res,next){
// const isloggedin=true
// if(isloggedin){
// next()
// }else{
// res.send('required')
// }
// }
// app.get('/dashboard',(req,res)=>{
// res.send('welcome to dashboard')
// })
// app.listen(3001)

// Router Middleware

// const express=require('express')
// const app=express()
// function checkUser(req,res,next){
// console.log('router middleware')
// next()
// }
// app.get('/profile',checkUser,
// (req,res)=>{
// res.send('welcome to profile ')
// })
// app.get('/',(req,res)=>{
// res.send('Home')
// })
// app.listen(3001)

// Logger Middleware

// const express=require('express')
// const app=express()
// function logger(req,res,next){
// console.log('Method:',req.method)
// console.log('URL:',req.url)
// next()
// }
// app.use(logger)
// app.get('/',(req,res)=>{
// res.send('Home')
// })
// app.get('/about',(req,res)=>{
// res.send('about')
// })
// app.listen(3001)

// error handling

// const express=require('express')
// const app=express()
// app.get('/',(req,res)=>{
// throw new Error('something is wrong')
// })

// app.use((err,req,res,next)=>{
// console.log(err.message)
// res.status(400).send('Internal issue')
// })
// app.listen(3004)

// Log-Parameter

// const express=require('express')
// const app=express()
// function logParams(req,res,next){
// const paramname=Object.keys(req.params)
// console.log('parameter name:',paramname)
// next()
// }
// app.get('/user/:userId/book/:bookId',(req,res)=>{
// res.send('check console')
// })
// app.listen(3001)

// Process.nextTick

// console.log('start')
// process.nextTick(()=>{
// console.log('middle')
// })
// console.log('end')

// Stream

// const fs=require('fs')
// const readStream=fs.createReadStream('input.txt')
// const writeStream=fs.createWriteStream('output.txt')
// readStream.pipe(writeStream)

// Query Parameter

// const express=require('express')
// const app=express()
// app.get('/login',(req,res)=>{
// const a=Number(req.query.a)
// const b=Number(req.query.b)
// res.send(`sum:${a+b}`)
// })
// app.listen(3000)

// const express=require('express')
// const app=express()
// app.get('/login/:a/:b',(req,res)=>{
// const a=Number(req.params.a)
// const b=Number(req.params.a)
// res.send(`sum:${a+b}`)
// })
// app.listen(3000)

---

autherization
-https
-streams (need clarity)
-transform stream
-cors
-preflight request
-package.json vs package. lock. json
-app.set()
-view engine

---

Event Loop
Micro and macro
Concept of execution con
Npm
Package.json
Advantages of express
Middleware
Rest api,
Http methods

---

Authorization
CORS
express.json()
express.urlencoded()
query and params

---

- achieving concurrency in nodejs: need clarity
- Parallelism: need more clarity
- what is scripts in package.json
- cors and preflight req

---

NODE.JS
1.CREATE A SERVER (HTTP,EXPRESS)
2.CREATE A ROUTE IN HTTP
3.CREATE APPLICATION MIDDLEWARE AND ERROR HANDLING MIDDLEWARE
4.FS MODULE(WRITE AND READ)
5.WRITE CURRENT DATE TO A FILE USING FS

---

Event Emitter: Creating and handling custom events.
Server Creation (HTTP, Express): Creating servers using HTTP or Express.
FS Modules: File system operations (fs.readFile, fs.writeFile, etc.).
Middleware: Using and creating middleware in Express.
Query Parameters: Handling query parameters in requests.
Path Parameters: Handling path parameters in routes.
Set Timeout: Delaying execution with setTimeout.
Set Interval: Repeated execution with setInterval.
Read File Sync: Synchronous file reading with fs.readFileSync.
Child Process: Creating child processes with child_process.
Streams: Handling data streams with Node.js.

---

Router Chaining
HTTP Methods
CORS
NVM
NPM vs NPX
Types of Middlewares
API
app.locals
Query Params vs Path Params
Logout API Logic
Cookie

Move all routes & controller functions to separate files
Implement middlewares for session handling

---

- how to write custom middlewares in express js
- how to enable CORS in express js
- what is client side validation

---

Js validation is needed
nocache
express.static
Urlencoded
Patch vs put
Option method
Type of middleware
Httpmodules
Routing
400 status code
500 status code
Body parser
Cors
Morgan
Postman

---

Theory
Content Negotiation
Built in Modules
Dynamic Routing
Environmental Variables
CORS & Preflight Req
res.write() vs res.send()
Cookie size & Expiry
Types of Streams
Router Chaining Syntax
npm init
Dev Dependency Installation

---

- client side input validation
- package-lock.json
- script in package.json
- nvm
- working of libuv
- process vs threads
- workout: display current username in home page
- working of sessions and cookies
- router chaining
- PUT vs Patch

---

> node features
> REPL
> Single threaded vs multi-threaded
> Synchronous & Asynchronous
> V8 engine
> Node concurrency
> LIBUV
> Event loop & working
> Microstask vs Macrotask
> process.nexttick
> Threadpool
> Set-immediate
> Process
> Thread vs Task
> worker threads
> Multiprocessing vs multithreading
> Cluster module
> Child process
> fork, spawn, exec, execfile
> web server
> server, client
> HTTP
> HTTP vs HTTPS
> DNS
> Components of a HTTP request & response
> User-agent
> status codes
> TCP/IP
> Routing
> URL & components
> Query string
> Query Parameters & Path params
> Set header
> Modules
> Types of modules
> fs module
> fs.stat
> Os module
> Event-driven architecture
> Event emitter, handler& listner
> Streams & types
> zlib
> Techniques used for streams(piping and chaining)
> Read buffer & Write buffer
> Back pressure
> Pipe method
> NPM
> NVM
> Dependencies
> Regular & Dev dependencies
> Package.json vs package-lock.js file
> Full Domain - Topics  
> Package.json vs package-lock.js file
> Nodemon
> Express features
> HTTP methods
> Get, Post, Put, Patch, Delete
> Options, Head, Trace, Connect
> Static vs Dynamic websites
> Front end& Back end
> Rendering
> View engine
> Html vs view engine
> EJS
> API
> Web API vs REST API
> Advantages of API
> Postman
> Route parameters
> Middleware
> Types of middleware
> app. use
> HTTP modules
> Session and cookie
> Cookies vs cache
> Cookie expiry
> Hbs
> CORS in detail
> Pre-flight request
> CSRF
> Body parser
> Multer
> Applied file, write file
> PM2
> Error handling in express
> Types of errors
> Design patterns
> MVC
> node global object
> Token
> res.send vs res.write
> logger
> https
> nodemon
> Secret
> Yarn
> debug
> util
> unique identifier
> payload
> ENV
> TLS
> Authentication vs authorisation
> app.all()
> Structure of http request and response
> express.static
> express.urlencoded
> express.json
> error firstcallback
> processs.env
> Full Domain - Topics  
> processs.env
> environment variables
> app.use() vs app.set()
> app.locals
> fetch()
> Idempotency
> Reactor pattern
> CommonJS
> express.urlencoded
> content negotiation
> Web Socket
> Problems:
> Create a server using node js.
> Create a server using express js.
> Read & write files synchronously & asynchronously.
> Write the current date and time to a file using the FS module.
> Create an HTTP get endpoint to return the multiplication table.
> Create an API to add 2 numbers.
> Create application middleware.
> Create route-level middleware.
> Create error handling middleware.
> Create custom middleware to validate data in req.body.
> Create a middleware to log all parameter names.
> Create Process.nextTick.
> Promise with timing features.
> Create Get, Post request.
> Changing the status code of a response.
> Create streams (pipe method)
