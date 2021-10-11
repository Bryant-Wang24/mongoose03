const ArticleCateModel = require('./model/articlecate.js')
const UserModel = require('./model/user.js')
const ArticleModel = require('./model/article.js')

// 分类的增加
// const cate = new ArticleCateModel({
//     title: '国际新闻',
//     description: 'nba获得冠军'
// })

// cate.save()

// 增加用户
// const user = new UserModel({
//     username: 'lisi',
//     password: '485969746lll',
//     name: '李四',
//     age: 22,
//     sex: '男',
//     tel: 17355552748
// })
// user.save()

const article = new ArticleModel()
article.title = '全运会开幕'
article.cid = '6164568af9f08512dabdc555'//国际新闻
article.author_id = '61644fff048089d535f33e9a'
article.author_name = '张三'
article.description = '全运会开幕圆满结束'
article.content = '全运会开幕圆满结束 此处省略1000字'

article.save()