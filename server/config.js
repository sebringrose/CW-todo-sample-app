const config = {
  dbUrl: process.env.DB_URL 
    ? process.env.DB_URL
    : 'mongodb://localhost:27017',

  dbName: process.env.DB_NAME 
    ? process.env.DB_NAME
    :'cw-todo-sample-app',

  port: process.env.PORT 
    ? process.env.PORT
    : 4000
};

export default config;