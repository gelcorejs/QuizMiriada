var path = require('path');
var Sequelize = require('sequelize');

var sequelize = new Sequelize(null,null,null,{
    dialect : 'sqlite',
    storage :'quiz.sqlite'
});