const ArticleModel = require('./model/article.js')

// 查询文章信息
// ArticleModel.find({}, (err, data) => {
//     console.log(data);
// })


// 查询文章信息 并显示文章的分类 以及文章的作者信息
//两个表的关联查询 
ArticleModel.aggregate([
    {
        $lookup: {
            from: "articlecate",//与articlecate表关联
            localField: "cid",//关联条件
            foreignField: '_id',//article表的cid和articlecate的_id关联
            as: "cate"
        }
    }
], (err, data) => {
    console.log(data[1].cate);
})