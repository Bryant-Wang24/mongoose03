const mongoose = require('./db.js')

const ArticleCateSchema = mongoose.Schema({
    title: { type: String, unique: true },
    description: String,
    addtime: {
        type: Date
    }
})


module.exports = mongoose.model('Articlecate', ArticleCateSchema, 'articlecate')