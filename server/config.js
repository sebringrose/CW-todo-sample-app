const config = {
  dbUrl: process.env.DB_URL 
    ? process.env.DB_URL
    : 'mongodb+srv://admin:admin123@cw-todo-sample-app.tikr14v.mongodb.net/?retryWrites=true&w=majority',

  dbName: process.env.DB_NAME 
    ? process.env.DB_NAME
    :'cw-todo-sample-app',

  port: process.env.PORT 
    ? process.env.PORT
    : 4000
};

export default config;