const express = require("express");
const app = express();
const port = 8000;

    
// req is shorthand for request
// res is shorthand for response
// app.get("/api", (req, res) => {
//     res.json({ message: "Hello World" });
// });
const {faker} = require('@faker-js/faker')

const createUser = () => ({
        password: faker.internet.password(),
        email: faker.internet.email(),
        phone: faker.phone.number(),
        lastName: faker.name.firstName(),
        firstName: faker.name.lastName(),
        _id: faker.database.mongodbObjectId()
    })
    app.get("/api/users/new", (req, res) => {
        res.json(createUser)
    })

const createCompany = () => ({
        _id: faker.database.mongodbObjectId(),
        name: faker.company.name(),
        address: {
            street: faker.address.streetAddress(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country()
        }
    })
    app.get("/api/companies/new", (req, res) => {
        res.json(createCompany)
    })
const createUserCompany = {
        createCompany,
        createUser
    }
    app.get("/api/user/company", (req, res) => {
        res.json(createUserCompany)
    })

app.listen( port, () => console.log(`Listening on port: ${port}`) );