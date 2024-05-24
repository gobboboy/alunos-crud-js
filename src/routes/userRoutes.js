import { Router } from 'express';
import userController from '../controllers/UserController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.post('/', userController.store);
router.get('/', loginRequired, userController.index);
router.get('/:id', userController.show);
router.put('/:id', userController.update);
router.delete('/:id', userController.delete);


export default router;

/*
padrao de mercado
index -> lista users -> GET
store/create -> cria um novo user -> POST
delete -> apaga um user -> DELETE
show -> mostra um user -> GET
update -> atualiza um user -> PATCH(apenas um valor)/PUT
*/
