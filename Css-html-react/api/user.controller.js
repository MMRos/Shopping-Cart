const Users = import('./User')

const User = {
    get: async (req, res) => {
        const { id } = req.params
        const user = await Users.findOne ({ _id: id })
        res.status(200).send(user)
    },
    list: async (req, res) => {
        const users = await Users.find()
        res.status(200).send(users)
    }, 
    create: async (req, res) => {
        const user = new Users(req.body)
        const savedUser = await user.save()
        res.status(201).send(savedUser._id)
    },
    update: async (req, res) => {
        const { id } = req.params
        const user = await Users.findOne({ _id: id })
        Object.assign(user, req.body)
        user.save()
        res.sendStatus(204)
    },
    destroy: async (req, res) => {
        const { id } = req.params
        const users = await Users.find()
        if (user) {
            user.remove()
        }
        res.sendStatus(204)
    }
}

module.exports = User