//pulling all Models and stating relationships
const Comment = require('./comment');
const User = require('./user');
const Post = require('./post');

User.hasMany(Post, {
    foreignKey: 'user_id',
});

Post.belongsTo(User, {
    foreignKey: 'user_id',
});

User.hasMany(Comment, {
    foreignKey: 'user_id',
});

Comment.belongsTo(User, {
    foreignKey: 'user_id',
});

Post.hasMany(Comment, {
    foreignKey : 'post_id'
})

Comment.belongsTo(Post, {
    foreignKey: 'post_id'
})

//exporting all Models
module.exports = { User, Post, Comment };