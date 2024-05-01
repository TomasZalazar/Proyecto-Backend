// dependecias
import express from 'express'
import  {config}  from './config.js';
import logger from 'morgan'
import handlebars from 'express-handlebars';
// routes
import productsRoutes from './routes/routes.products.js';
import cartRoutes from './routes/routes.carts.js'
import viewsRoutes from './routes/routes.views.js'
import usersRoutes from './routes/routes.users.js';
import initSocket from './initSocket.js';

const app = express()

const expressInstance = app.listen(config.PORT, () => {
    console.log(`Servidor escuchando en el puerto http://localhost:${config.PORT}`);
});

const socketServer = initSocket(expressInstance);
app.set('socketServer', socketServer);
 
app.use(logger('dev'))
//configuracion del server
app.disable('x-powered-by')
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// motor plantilla config 
app.engine('handlebars', handlebars.engine());
app.set('views',`${config.DIRNAME}/views`);
app.set('view engine', 'handlebars');



// endpoints
app.use('/', viewsRoutes)
app.use('/api/products',productsRoutes)
app.use('/api/users',usersRoutes)
app.use('/api/cart',cartRoutes)
app.use('/static', express.static(`${config.DIRNAME}/public`))


