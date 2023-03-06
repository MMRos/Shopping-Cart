const express = import ('express')
const bcrypt = import('bcrypt')
const expressJwt = import('express-jwt')
const jwt = import ('jsonwebtoken')
const User = import('./user.model')

const validateJwt = expressJwt ({ secret: process.env.SECRET, algorithms: ['H256']})

const signToken = _id => jwt.sign({ _id }, process.env.SECRET)

const findAndAssignUser = async (req, res, next) => {
    try {
        const user = await User.findById(req.user._id)
        if(!user) {
            return res.status(401).end()
        }
        req.user = user
        next()
    } catch (e){
        next(e)
    }
}

const isAuthenticated = express.Router().use(validateJwt, findAndAssignUser)

const Auth = {
    login: async (req, res) => {
        const { body } = req
        try {
            const user = await User.findOne({ email: body.email })
            if (!user) {
                res.status(401).send('Usuario y/o contraseña inválida.')
            } else {
                const isMatch = await (await bcrypt).compare(body.password, user.password)
                if (isMatch) {
                    const signed = signToken(user.id)
                    res.status(200).send(signed)
                }else {
                    res.status(401).send('Usuario y/o contraseña inválida.')
                }
            }
        } catch(e) {
            res.send(e.message)
        }
    },
    register: async (req, res) =>{
        const { body } = req
        try {
            const isUser = await User.findOne({ email: body.email})
            if(isUSer) {
                res.send('Usuario ya existe.')
            } else {
                const salt = await bcrypt.genSalt()
                const hashed = await bcrypt.hash(body.password, salt)
                const user = await User.create({ email: body.email, password: hashed, salt })

                const signed = signToken(user._id)
                res.send(signed)
            }
        } catch (err) {
            res.status(500).send(err.message)
        }
    },
}

module.export = {Auth, isAuthenticated}