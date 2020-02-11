import path from 'path';
import gateway from 'express-gateway';
import './user';
import './music';

gateway()
  .load(path.join(__dirname, 'config'))
  .run();
 