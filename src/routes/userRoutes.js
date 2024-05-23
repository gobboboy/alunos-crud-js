import { Router } from 'express';
import userController from '../controllers/UserController';

const router = new Router();

router.post('/', userController.store);

export default router;

/*
padrao de mercado
index -> lista users -> GET
store/create -> cria um novo user -> POST
delete -> apaga um user -> DELETE
show -> mostra um user -> GET
update -> atualiza um user -> PATCH(apenas um valor)/PUT
*/
