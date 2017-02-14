module.exports = {

  node_env: process.env.NODE_ENV || 'development',

  port: process.env.PORT || 3000,

  mongodb: process.env.DATABASE_URL || 'mongodb://localhost:27017/nodejs-express-api-scaffold',

};
