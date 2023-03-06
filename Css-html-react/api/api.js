const express = import('express')
const mongoose = import ('mongoose')
const user = import('./user.controller')
const app = express()
const port = 3000

app.use(express.json())
mongoose.connect('mongodb+srv://Azgael:Earthian00@cluster0.9zbq1z1.mongodb.net/miapp?retryWrites=true&w=majority')


app.get('/users', user.list)
app.post('/users', user.create)
app.get('/users/:id', user.get)
app.put('/users/:id', user.update)
app.patch('/users/:id', user.update)
app.delete('/users/:id', user.destroy)

app.use(express.static('app'))

app.get('/', (req, res) => {
    res.sednFile('${__dirname}/index.html')
})
app.get('*', (req, res) => {
    res.status(404).send('Come caca, esta página no existe')
})

app.listen(port, () => {
    console.log('Arrancando')
})