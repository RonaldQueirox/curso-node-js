import { Router } from 'express'
const routers = new Router();

import customers from './app/controllers/CustomerController';

routers.get('/customers', customers.index);
routers.get('/customers/:id', customers.show);
routers.post('/customers', customers.create);
routers.put('/customers/:id', customers.update);
routers.delete('/customers/:id', customers.destroy);

export default routers;
