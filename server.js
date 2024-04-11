const express=require('express')
const path=require('path')

const app=express();
const PORT=5000

//view engine setup
app.set('view engine','hbs');

//app config
app.use(express.static(path.join(__dirname, 'public')));

//routes
app.get('/', (req, res) => {
    res.render('index')
})
app.get('/index', (req, res) => {
    res.render('index')
})
app.get('/about',(req,res)=>{
    res.render('about')
})
app.get('/doctors',(req,res)=>{
    res.render('doctors')
})
app.get('/blog',(req,res)=>{
    res.render('blog')
})
app.get('/gallery',(req,res)=>{
    res.render('gallery')
})
app.get('/login',(req,res)=>{
    res.render('login')
})
app.get('/privacy',(req,res)=>{
    res.render('privacy')
})
app.get('/registration',(req,res)=>{
    res.render('registration')
})
app.get('/appointment',(req,res)=>{
    res.render('appointment')
})
app.get('/terms',(req,res)=>{
    res.render('terms')
})
app.get('/contact',(req,res)=>{
    res.render('contact')
})

//server start
app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})