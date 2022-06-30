const fetch = require("node-fetch");
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

const path = require("path");

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

  

// fetch("https://redventures.udemy.com/api-2.0/courses/", {
//   headers: {
//     Authorization:
//       "Basic " +
//       Buffer.from(
//         "IG9vYlZHamE2YnNSa1U1cVUxUFdqY01uakVLMG5JTWZnQnR0VDBWOFY6bjhNTGN4Y1RiNHhTMGNiS0U0c3RZVldlYXdRMnU2b1Z4ZUhaREFEMjFQR0ZYZk04U3F0RDU5UFNITW9tYWI5bjIzM3A1QjBNcmtMZUdBaks5eE16N1lxSm9lUUtyeFJxSE54ZWNibXlxdm5QdWduZW1md1FyNHlLRjBSbU53N0w"
//       ).toString("base64"),
//   },
// })
//   .then((res) => res.json())
//   .then((json) => console.log(json))
//   .catch((err) => {
//     console.log(err);
//   });
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
