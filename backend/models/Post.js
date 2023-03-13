const mongoose = require('mongoose')
const Schema = mongoose.Schema

let postSchema = new Schema(
  {
    blogCoverPhoto: {
      type: String,
    },
    blogCoverPhotoName: {
      type: String,
    },
    blogHTML: {
      type: String,
    },
    blogId: {
        type: String,
      },
      blogTitle: {
        type: String,
      },
      date: {
        type: Date,
      },
      profileId: {
        type: String,
      },
  },
  {
    collection: 'posts',
  },
)

module.exports = mongoose.model('Post', postSchema)
