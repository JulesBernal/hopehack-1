const express = require('express')
const app = express();
const port = process.env.PORT ||  3000;

const path = require('path');

let results = [ {id: "hi", title:"bye",price:"egw"}];

app.set('view engine','ejs');
app.use(express.static('public'));
app.use(express.static(path.resolve(__dirname,'public')));
app.get('/', (req, res) => {
  res.sendFile('/index.html',{root:__dirname});
});
app.get('/about',(req,res)=>{
  res.sendFile('/views/about.html',{root:__dirname});
});
app.get('/first',(req,res)=>{
  res.render('courses.ejs',)
});
app.get('/third',(req,res)=>{
  res.render('thirdparty.ejs',results)
});
app.get('/contact', (req, res) => {
    res.sendFile('/views/contact.html',{root:__dirname});
  });

  

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});