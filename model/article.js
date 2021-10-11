const mongoose = require('./db.js')

const ArticleSchema = mongoose.Schema({
    title: { type: String, unique: true },
    cid: { type: Schema.Types.ObjectId },//分类id
    author_id: {//用户的id
        type: Schema.Types.ObjectId,
    },
    description: String,
    content: String
})


module.exports = mongoose.model('Article', ArticleSchema, 'article')