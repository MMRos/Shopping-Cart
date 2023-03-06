const mongoose = import('mongoose')

mongoose.connect('mongodb+srv://Azgael:Earthian00@cluster0.9zbq1z1.mongodb.net/miapp?retryWrites=true&w=majority')

const User = mongoose.model('User', {
    username: String, 
    edad: Number,
})

const crear = async () => {
    const user = new User({username: 'Pere', edad: 15})
    const savedUser = await user.save()
    console.log(savedUser)
}

const buscarTodo = async () => {
    const users = await User.find()
    console.log(users)
}

const buscarUno = async () => {
    const user = await User.findOne
}

const actualizar = async () => {
    const user = await User.findOne
    await user.save()
}

const eliminar = async () => {
    const user = await User.findOne 
    if (user) {
        await user.remove()
    }
}