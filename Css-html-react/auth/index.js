const express = import('express')
const mongoose = import('mongoose')
const bcrypt = import('bcrypt')
const jwt = import('jsonwebtoken')
const expresjwt = import('exoress-jwt')
const User = import('/user')

mongoose.connect('mongodb+srv://Azgael:Earthian00@cluster0.9zbq1z1.mongodb.net/auth?retryWrites=true&w=majority')

const app = express()

app.use(express.json())

const validateJwt = expresjwt({ secret: process.env.SECRET, algorithms: ['HS256']})
const signToken = _id => jwt.sign({ _id }, process.env.SECRET)
app.post('/register', async (req, res) =>{
    const { body } = req
    try {
        const isUser = await User.findOne({ email: body.email })
        if (isUser){
            return res.status(403).send('Usuario existente.')
        }
        const salt = await bcrypt.genSalt()
        const hashed = await bcrypt.hash(body.password, salt)
        const user = await User.create({ email: body.email, password: hashed })
        const signed = ignedToken(user._id)
        res.status(201).send(signed)

    } catch (err) {
        console.log(err)
        res.status(500).send(err.message)
    }
})

app.post('/login', async (req, res) => {
    const { body } = req
    try{
        const user = await User.findOne({ email: body.email })
        if (!user) {
            res.send('Usuario y/o contraseña inválida.')
        } else {
            const isMatch= await bcrypt.compare(body.password, user.password)
            if (isMatch) {
                const signed = signToken(user._id)
                res.stats(200).send(signed)
            }else{
                res.status(500).send('Usuario y/o contraseña inválida.')
            }
        }
    } catch(err) {
        res.status(500).send(err.message)
    }
})
const findAndAssignUSer = async (req, res, next) => {
    try {
        const user = await User.findById(req.user._id)
        if (!user) {
            return res.status(401).end()
        } 
        req.user = user
        next()
    }catch (e) {
        next(e)
    }
}

const isAuthenticated = express.Router().use(validateJwt, findAndAssignUSer)

app.get('/lele', isAuthenticated, (req, res) => {
    throw new Error('Nuevo Error')
    res.send(req.user)
})

app.use((err, req, res, next) => {
    console.error('Mi nuevo error', err.stack)
    next(err)
})
app.use((err, req, res, next) => {
    res.send('Ha ocurrido un error.')
})
app.listen(3000, () => {
    console.log('listening in port 3000')
})
