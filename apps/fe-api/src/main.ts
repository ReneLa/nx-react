/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import * as express from 'express';
import { json, urlencoded } from 'body-parser'
import * as morgan from 'morgan'
import * as cors from 'cors'


const app = express();
app.disable('x-powered-by')
const router= express.Router()


app.use(cors())
app.use(json())
app.use(urlencoded({ extended: true }))
app.use(morgan('dev'))

const routes = ['get /cat', 'get /cat/:id', 'post /cat', 'put /cat/:id', 'delete /cat/:id']


router.route('./cat')
.get()
.post()

router.route('/cat/:id')
.get()
.post()
const log =(req,res, next)=>{
  console.log('logging')
  next()
}


// app.get('/api',log, (req, res) => {

//   res.send({ message: 'Welcome to fe-api!' });
// });

app.get('/',(req, res) => {
  res.send({data:[1,2,3,4,]})
})

app.post('/',(req, res)=>{
   res.send(req.body)
})

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
