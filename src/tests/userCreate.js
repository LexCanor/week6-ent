const User = require('../models/User')

const userCreate = async() => {
    const user = {
        firstName: 'Hector',
        lastName: 'Armijos',
        email: 'hector@gmail.com',
        password: 'hector1234',
        phone: '1245631'
    }

    await User.create(user)

}

module.exports = userCreate