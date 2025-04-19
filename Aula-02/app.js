const express = require('express')
const app = express()

app.use(express.json())

let customers = [
    {id: 1, name: "Dev Samurai", site: "http://devsamurai.com.br"},
    {id: 2, name: "Google", site: "http://google.com.br"},
    {id: 3, name: "Uol", site: "http://uol.com.br"}
]

// Listagens 
app.get("/customers", (req, res) => {
    return res.json(customers)
})

// Buscar Id

app.get("/customers:id", (req, res) => {
    const id = parseInt(req.params.id)
    const customer = customers.find(item => item.id == id)
    const status = customer ? 200 : 404

    console.log("GET :: /customers/:id")

    return res.status(status).json(customer)
})

// Adicionar

app.post("/customers", (req, res) => {
    const { name, site } = req.body 
    const id = customers[customers.length - 1].id + 1

    const newCustomer = { id, name, site }
    customers.push(newCustomer)

    return res.status(201).json(newCustomer)
})

// Update

app.put("/customers/:id", (req, res) => {
    const id = parseInt(req.params.id)
    const {name, site } = req.body

    const index = customers.findIndex(item => item.id === id)
    const status = index >= 0 ? 200 : 404

    if (index >= 0) {
        customers[index] = { id: parseInt(id), name, site}
    }

    return res.status(status).json(customers[index])
})

// Exclusão
app.delete("/customers/:id", (req, res) => {
    const id = parseInt(req.params.id)
    const index = customers.findIndex(item => item.id === id)
    const status = index >= 0 ? 200 : 404

    if (index >= 0) {
        customers.splice(index, 1)
    }

    return res.status(status).json()
})

app.listen(8080)