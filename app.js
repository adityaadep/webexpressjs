const express=require('express');
const path=require('path');
const hbs=require('hbs');
const app=express();

console.log(path.join(__dirname,"/public"));

const statpath=path.join(__dirname,"/public");

// app.use(express.static(statpath));
const templatepath=path.join(__dirname,"/templates/views");
const partialpath=path.join(__dirname,"/templates/partials");

hbs.registerPartials(partialpath);

app.set('view engine',"hbs");
app.set('views',templatepath);
app.get("",(req,res)=>{
    res.render("index");
})
app.get("/about",(req,res)=>{
    res.render("about");
})

// app.get('/',(req,res)=>{
//     res.send("Hello from express Aditya Adep");
// })

// app.get('/about',(req,res)=>{    
//     res.status(200).send("Hello from express About");
// })
// app.get('/temp',(req,res)=>{
//     res.send("Hello from express Temp");
// })

// app.get('/contact',(req,res)=>{
//     res.send("Hello from express contact");
// })
app.listen('8000',()=>{
    console.log("listening atport 8080");
})