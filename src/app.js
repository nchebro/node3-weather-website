
const path=require('path');
const express=require('express');
const hbs=require('hbs');
const current=require('./utils/current.js')
const app=express();

//define paths for express config
app.use(express.static(path.join(__dirname,'../public')));

console.log(__dirname);
const viewspath=path.join(__dirname,'../templates/views');
const partialspath=path.join(__dirname,'../templates/partials');


//setup handlebars engine
app.set('view engine','hbs');

app.set('views',viewspath);
hbs.registerPartials(partialspath);

app.get('',(req,res)=>{
    res.render('index',{title:'Weather app'})
})



app.get('/help',(req,res)=>{
    res.render('help',{
        title:'Help using HBS'
    })
})

app.get('/about',(req,res)=>{
    res.render('about',{
        title:'About'
    })
})
app.get('/weather',(req,res)=>{
    if(!req.query.address)
    {
      return res.send({
         error:'You must provide address'
     });
    }else {}
       current(req.query.address,(err,data)=>{
        res.send(
            {"temperature":data.temp}
            
       )
       })
    
})
app.get('/products',(req,res)=>{
    if(!req.query.name)
    {
      return res.send({
         error:'You must provide name'
     });
    }else {}
       console.log(req.query.name);
    res.send({
        products:[]
    })
}
)
app.listen(3000,()=>{
    console.log('Server is up on port 3000');
});