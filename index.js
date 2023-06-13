const express=require('express')
const bodyParser=require('body-parser')
const mongoose=require('mongoose')

const app=express()

app.use(bodyParser.json())
app.use(express.static('public'))
app.use(bodyParser.urlencoded({
    extended:true,
}))


mongoose.connect('mongodb+srv://Joy2612:Joy%402612@cluster0.s9huflr.mongodb.net/TripKar',{
    useNewUrlParser:true,
    useUnifiedTopoLogy:true
});
const db=mongoose.connection;

db.on('error',()=>{
    console.log("Error in Connection");
})
db.once('open',()=>{
    console.log("Connected to Data");
})

app.post("/book",(req,res)=> {
    var name=req.body.name;
    var email=req.body.email;
    var phone=req.body.phone;
    var address=req.body.address;
    var location=req.body.location;
    var guest=req.body.guest;
    var arrival=req.body.arrival;
    var leaving=req.body.leaving;

    var data = {
        "name" : name,
        "email" : email,
        "phone" : phone,
        "address" : address,
        "location" : location,
        "guest" : guest,
        "arrival" : arrival,
        "leaving" : leaving,
    }


    db.collection('Bookings').insertOne(data,(err,collection)=>{
        if (err){
            throw err;
        }
        console.log("Booked Successfully");
    }) 
    return res.redirect('book_form.html')

})



app.get('/',(req,res) => {
    res.set({
        "Allow-access-Allow-Origin" : '*'
    })
    return res.redirect('home.html');
}).listen(3000);

console.log("Listening on PORT 3000");