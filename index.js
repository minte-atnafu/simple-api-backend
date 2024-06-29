const express = require("express");
const mongoose = require("mongoose");

const Product = require('./models/product.model.js');
const productRoute = require('./routes/Product.routes.js')
const app = express();

//midle were
app.use(express.json()); 
app.use(express.urlencoded({ extended: false}));



//routes
app.use('/api/products', productRoute);

// used to send message from the server 
app.get('/', (req, res) => {
    res.send("hello there!!!");
});


//connect with MongoDB inser the password after you insert the url and include the cluster name of your database
mongoose.connect("mongodb+srv://admin:pPr1HmYEkz7aDIo3@backenddb.u36ykvl.mongodb.net/BackendDB?retryWrites=true&w=majority&appName=BackendDB")
    .then(() => {
        console.log("The database connected!!!");
        app.listen(5000, () => {
            console.log("Am listening port 5000")
        });
    })
    .catch((error) => {
        console.log("Not connected", error);
    })
//




