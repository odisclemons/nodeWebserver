const express = require('express');
const app = express();
const hbs = require('hbs');
const curYear = new Date().getFullYear();
const fs = require('fs');
const port = process.env.PORT || 3000;

hbs.registerPartials(__dirname + '/views/partials');
hbs.registerHelper('screamIt', (text)=>{
  return text.toUpperCase();
})
app.set('view engine', 'hbs');


app.use((req, res, next)=>{
  var now = new Date().toString();
  var log = `${now}: ${req.method} ${req.url} ${req.ip}`;
  fs.appendFile('server.log', log + '\n', (err)=>{
    console.log(log);
    if (err){
      console.log("Can't save log file");
    }
  });
  next();
})

//maintenance handling middleware
// app.use((req, res, next)=>{
//         //console.error(err.stack);
//         res.status(500).render('maint.hbs', {
//             pageTitle: 'Error Page',
//             errorMessage: 'Site is under maintenance.'
//         });
// });

//app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/nhasf'));

app.get('/about', (req, res)=>{
  res.render('about.hbs',{
    pageTitle: 'About Page',
    curYear: curYear
  });
});

app.get('/bad', (req, res)=>{
  res.status(200).send({errorMessage: 'Bad request'});
});

// app.get('/', (req, res)=> {
//   res.render('index.hbs', {
//     pageTitle: 'Home Page',
//     welcomeMessage: 'Welcome to the jungle!',
//     curYear: curYear
//   })
// })



app.listen(port, ()=>{
  console.log(`Server is up on port ${port} \n Waiting on requests...`);
});
