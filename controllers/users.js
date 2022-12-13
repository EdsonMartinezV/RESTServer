const { response, request } = require('express')

const getUsers = (req = request, res = response) => {
  const { q, name, role = 'none', apikey } = req.query

  res.json({
    message: 'get users from controller',
    q,
    name,
    role,
    apikey
  })
}

const postUsers = (req, res = response) => {
  const { name, age } = req.body

  res.status(201).json({
    message: 'post users from controller',
    name,
    age
  })
}

const putUsers = (req, res = response) => {
  const { id } = req.params

  res.json({
    message: 'put users from controller',
    id
  })
}

const patchUsers = (req, res = response) => {
  res.json({
    message: 'patch users from controller'
  })
}

const deleteUsers = (req, res = response) => {
  res.json({
    message: 'delete users from controller'
  })
}

module.exports = {
  getUsers,
  postUsers,
  putUsers,
  patchUsers,
  deleteUsers
}
