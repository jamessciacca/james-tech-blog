//deconstructing the Model and DataTypes to use in the file
const { Model, DataTypes }  = require('sequelize');
//pulling in our connection to the db
const sequelize = require('../config/connection');

//creating a class that extends the Model class
class Comment extends Model {}

//creating the Comments table
Comment.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    contents: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
            len: [1, 200],
        },
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'user',
            key: 'id'
        },
    },
    post_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'post',
            key: 'id'
        },
    },
 },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'comment',
    }
);

//exporting the Model 
module.exports = Comment;