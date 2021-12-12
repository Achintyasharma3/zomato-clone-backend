const User = require('../Models/users');

exports.userSignUp = (req, res) => {
    let { email, password, firstname, lastname } = req.body;
    
    const user = new User({
        email: email,
        password: password,
        firstname: firstname,
        lastname: lastname
    });
    user.save()
        .then(response => {
            res.status(200).json({ message: " User Registered Sucessfully", user: response })
        })
        .catch(err => {
            res.status(500).json({ error: err })
        })
}

exports.userLogin = (req, res) => {
    const { email, password } = req.body;
    User.find({ email: email, password: password })
        .then(response => {
            if (response.length > 0) {
                res.status(200).json({ message: "User Authenticated Succesfully", isAuthenticated: true, user: response })
            }
            else {
                res.status(200).json({ message: "User Not Authenticated Succesfully", isAuthenticated: false, user: response })
            }
        })
        .catch(err => {
            res.status(500).json({ error: err })
        })
}