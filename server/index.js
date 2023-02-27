const express = require('express')
const mongoose = require('mongoose');
var cors = require('cors');
const bodyParser = require('body-parser');
const regster = require('./routes/RouterUser')
const Poset = require('./routes/routerPo')
const http = require('http')

const errorMiddleware = require("./middleware/error");
var fileupload = require("express-fileupload");






//const mobile = require("./models/post")
//const gameModule = require("./models/game")



const app = express()

app.use(cors());
app.use(fileupload());
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }))

const uri = "mongodb+srv://sakib24:23568923@cluster0.cpnnn.mongodb.net/sisir?retryWrites=true&w=majority";


mongoose.set('strictQuery', true);
mongoose.connect(uri, {
  useNewUrlParser: true,
   useUnifiedTopology: true
}).then(()=>{
  console.log('connect successful');
}).catch((err)=>console.log('connect file'));

const port = 5000

const server = http.createServer(app)

app.use(regster);
app.use(Poset);

app.use(errorMiddleware);
server.listen(port, () => {
  console.log(`Server is runing ${port}`)
})