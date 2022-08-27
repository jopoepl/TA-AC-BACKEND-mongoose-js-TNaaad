var express = require(`express`)
var mongoose = require(`mongoose`)
var app = express()

//importing models
var User = require(`./models/user`)

//middleware

app.use(express.json())

mongoose.connect(`mongodb://localhost/sample`, (err) => {
    console.log(err ? err: "Connected Succesfully")
})

//creating db

app.post(`/users`, (req, res, next) => {
    User.create(req.body, (err, user) => {
        console.log(err)
        res.send(user)
    })
})

//finding db

app.get(`/users`, (req, res, next) => {
    User.find({_id: "6309b6d46599125060bd42a2"}, (err, users) => {
        console.log(err);
        res.send(users)
    })
})

app.get(`/users/:id`, (req, res, next) => {
    User.findById(req.params.id, (err, users) => {
        console.log(err);
        res.send(users)
    })
})

//Diff between the three methods is that find by id returns a single object while the other two methods returns an array even if one single object was found


//updating db

// app.put(`/users/:id`,  (req, res, next) => {
//     User.update({_id: req.params.id}, req.body, (err, updated) => {
//         console.log(err);
//         res.send(updated)
//     })
// })

// app.put(`/users/:id`,  (req, res, next) => {
//     User.findByIdAndUpdate(req.params.id, req.body, (err, updated) => {
//         console.log(err);
//         res.send(updated)
//     })
// }) // returns the updated object while other two update methods return the changes

app.put(`/users/:id`,  (req, res, next) => {
    User.updateOne({name: "Joel"}, req.body, (err, updated) => {
        console.log(err);
        res.send(updated)
    })
})

//Handling Delete

app.delete(`/users/:id`, (req, res, next) => {
    User.findByIdAndDelete(req.params.id, (err, deletedUser) => {
        console.log(err);
        res.send(`User ${deletedUser.name} is successfully deleted`)
    })
})





app.listen(4000, () => {
    console.log(`server listening on port 4K`)
})