var express = require('express');
var cors = require('cors');
const fileUpload = require('express-fileupload')
require('dotenv').config()

var app = express();

app.use(fileUpload())


 app.use(express.urlencoded({extended : false}))
 app.use(express.json())

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});


app.post("/api/fileanalyse", (req,res)=>{

  if(!req.files) return res.end('no such file')
     const {name, size} = req.files.upfile

     const type =  req.files.upfile. mimetype
  res.send({name ,type , size })

 
})



const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});
