const express = require('express')
const postRoute = express.Router()

// model
let PostModel = require('../models/Post')

postRoute.route('/create-post').post((req, res, next) => {
  PostModel.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

postRoute.route('/').get((req, res, next) => {
  PostModel.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

postRoute.route('/edit-post/:id').get((req, res, next) => {
  PostModel.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Update
postRoute.route('/update-post/:id').put((req, res, next) => {
  PostModel.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    (error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data)
        console.log('Post successfully updated!')
      }
    },
  )
})

// Delete
postRoute.route('/delete-post/:id').delete((req, res, next) => {
  PostModel.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.status(200).json({
        msg: data,
      })
    }
  })
})

module.exports = postRoute
