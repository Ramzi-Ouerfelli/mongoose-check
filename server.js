const express = require("express");
// import connectDB
const connectDB = require("./config/connectDB");
// import model .....
const Persons = require("./model/personsModal");
const app = express();
//connect data base
connectDB();

// app.get("/",(req,res)=>{
//     res.send("hello ramsey !!!")
// })


// create persons in our database  :
const createPersonDoc = async()=>{
    try {
        const doc = new Persons({name:"mouadh", age:21, favoriteFoods:['couscous', 'm7amas', 'keftaji']});
        await doc.save();
        console.log("new person :" , doc )
    } catch (error) {
        console.log(error)
    }
}
// createPersonDoc()
////////////////////////////////////////////////:
// find all persons:
const findPersons = async ()=>{
    try {
        const personsData = await Persons.find({});
        console.log(personsData)
    } catch (error) {
        console.log(error)
    }
};

// findPersons()
/////////////////////////////////////:////////////
//
// find one person :
const findPerson = async ()=>{
    try {
        const personData = await Persons.findOne({name:"bilel"});
        console.log(personData)
    } catch (error) {
        console.log(error)
    }
}; 

// findPerson()
/////////////////////////////////////////////////////::::::///
// find one person By ID : 
const findPersonById = async ()=>{
    try {
        const personData = await Persons.findById("65a8e41d2f981b804aed471e");
        console.log(personData)
    } catch (error) {
        console.log(error)
    }
}; 

// findPersonById()
/////////////////////////////////////////////////////////////////::
// Update persons doc :
const updatePersonById = async ()=>{
    try {
        const personData = await Persons.findByIdAndUpdate("65a8e41d2f981b804aed471e" ,{favoriteFoods:['couscous', 'm7amas', 'ma9arouna']} );
        console.log(personData)
    } catch (error) {
        console.log(error)
    }
}; 

// updatePersonById()
/////////////////////////////////////
//  find by ID and remove :
const removePersonById = async ()=>{
    try {
        const personData = await Persons.findByIdAndDelete("65a8e6988c5973c5684aa946");
        console.log(personData)
    } catch (error) {
        console.log(error)
    }
};

// removePersonById()
///////////////////////////////////////////////:
// people who like keftaji :
const peopleLikes = async ()=>{
    try {
        const personsData = await Persons.find({favoriteFoods:['couscous', 'm7amas', 'keftaji']});
        console.log(personsData)
    } catch (error) {
        console.log(error)
    }
};

peopleLikes()






const PORT = 5002;

app.listen(PORT,(err)=>
err? console.log(err):
console.log(`server is running on port ${PORT}`));
