const express = require("express");
const cors = require("cors");
var faker = require("faker");
const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());


// var randomName = faker.name.findName(); //Rowan Nikolaus
// console.log("*********", randomName)
// var randomEmail = faker.internet.email(); // Kassandra.haley@erich.biz
// console.log("***********", randomEmail)
// var randomCard = faker.helpers.createCard(); // random contact card containing many properties


class User {
    constructor(){
        this._id = faker.random.uuid()
        this.firstName = faker.name.firstName()
        this.lastName = faker.name.lastName()
        this.phoneNumber = faker.phone.phoneNumber()
        this.email = faker.internet.email()
        this.password = faker.internet.password()

    }
}

class Company {
    constructor(){
        this._id = faker.random.uuid()
        this.name = faker.company.companyName
        this.address = {
            street: faker.address.streetName(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country()
        }
    }
}




// let company1 = new Company()
// console.log(company1, "********************************************************************************************************************************************************")


app.get("/api/greeting", (req, res) => {
    res.json({"message": "Hello World" });
});


app.get("/api/users/new", (req, res) => {
    let user1 = new User()
    console.log(user1)
    res.json({"result": user1});
});


app.get("/api/companies/new", (req, res) => {
    let company1 = new Company()
    console.log(Company1)
    res.json({"result": company1});
});


app.get("/api/user/company", (req, res) => {
    let user1 = new User()
    let company1 = new Company()
    res.json({"user": user1, "company": company1});
});



// this needs to below the other code blocks
app.listen( port, () => console.log(`Listening on port: ${port}`));
