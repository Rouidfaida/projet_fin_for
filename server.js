let express = require('express');
const connectDB = require('./config/connectDB');
const user = require('./routes/user');
const products=require('./routes/product')
const categorie=require('./routes/categorie')
const commande=require('./routes/commande')

let app=express();
connectDB()
app.use(express.json())
app.use('/user',user)
app.use('/product',products)
app.use('/categorie',categorie)
app.use('/commande',commande)


app.use('/uploads',express.static('uploads'))

let PORT = process.env.PORT ||5000;
app.listen(PORT,(err)=>err? console.log(err):console.log(`server is running ${PORT}`));