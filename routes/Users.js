const express = require('express')
const users = express.Router()
const cors = require('cors')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')


users.use(cors())

process.env.SECRET_KEY = 'secret'

users.post('/registeralumno', (req, res) => {
  //const today = new Date()
  const data = req.body;
  console.log(data);
  req.getConnection((err, connection) => {
    const query = connection.query('INSERT INTO alumno set ?', data, (err, customer) => {
      console.log(customer)
      res.redirect('/');
    })
  })
  
})
users.get('/alumno', async (req, res) => {
  const sqlRequest = 'SELECT cedula,nombre,apellido,edad from alumno';
  let dict =[]
  await req.getConnection((err, connection) => {
    connection.query(sqlRequest, true, (err, result) => {
      if (result) {   
          res.send(result);
      } else {
          res.status(500).send(err);
      }
  });
  });
})

users.get('/alumn:id', async (req, res) => {
  const sqlRequest = 'SELECT cedula,nombre,apellido,edad from alumno where cedula = ?';
  const data = req.params.id;
  let dict =[]
  await req.getConnection((err, connection) => {
    connection.query(sqlRequest, data, (err, result) => {
      if (result) {   
          res.send(result);
      } else {
          res.status(500).send(err);
      }
  });
  });
})

users.delete('/borraralumno/:id', (req, res) => {
  const data = req.params.id;
  console.log(data)
  req.getConnection((err, connection) => {
    const query = connection.query('DELETE FROM alumno WHERE cedula = ?', data, (err, customer) => {
      console.log(customer)
      res.redirect('/');
    })
  })
})

users.delete('/borraralumno/:id', (req, res) => {
  const data = req.params.id;
  console.log(data)
  req.getConnection((err, connection) => {
    const query = connection.query('DELETE FROM alumno WHERE cedula = ?', data, (err, customer) => {
      console.log(customer)
      res.redirect('/');
    })
  })
})

module.exports = users


/*
User.findOne({
    where: {
      email: req.body.email
    }
  })
    //TODO bcrypt
    .then(user => {
      if (!user) {
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          userData.password = hash
          User.create(userData)
            .then(user => {
              res.json({ status: user.email + 'Registered!' })
            })
            .catch(err => {
              res.send('error: ' + err)
            })
        })
      } else {
        res.json({ error: 'User already exists' })
      }
    })
    .catch(err => {
      res.send('error: ' + err)
    })

    users.post('/login', (req, res) => {
  User.findOne({
    where: {
      email: req.body.email
    }
  })
    .then(user => {
      if (user) {
        if (bcrypt.compareSync(req.body.password, user.password)) {
          let token = jwt.sign(user.dataValues, process.env.SECRET_KEY, {
            expiresIn: 1440
          })
          res.send(token)
        }
      } else {
        res.status(400).json({ error: 'User does not exist' })
      }
    })
    .catch(err => {
      res.status(400).json({ error: err })
    })
})

users.get('/profile', (req, res) => {
  var decoded = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY)

  User.findOne({
    where: {
      id: decoded.id
    }
  })
    .then(user => {
      if (user) {
        res.json(user)
      } else {
        res.send('User does not exist')
      }
    })
    .catch(err => {
      res.send('error: ' + err)
    })
})


*/