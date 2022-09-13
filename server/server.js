import app from './app.js';
import conf from './config.js';

app.listen(conf.port, () => {
  console.log(`Server listening on port ${conf.port}`)
});