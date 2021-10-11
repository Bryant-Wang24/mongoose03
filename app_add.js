const ArticleCateModel = require('./model/articlecate.js')
const UserModel = require('./model/user.js')

// 分类的增加
// const cate = new ArticleCateModel({
//     title: '国内新闻',
//     description: '国际新闻'
// })

// cate.save()

// 增加用户
const user = new UserModel({
    username: 'lisi',
    password: '485969746lll',
    name: '李四',
    age: 22,
    sex: '男',
    tel: 17355552748
})
user.save()