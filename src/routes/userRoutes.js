import { Router } from 'express';
import userController from '../controllers/UserController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

// nao deveria existir
// router.get('/:id', userController.show); // lista user
// router.get('/', userController.index); // lista users

router.post('/', userController.store)
router.put('/', loginRequired, userController.update);
router.delete('/', loginRequired, userController.delete);


export default router;

/*
padrao de mercado
index -> lista users -> GET
store/create -> cria um novo user -> POST
delete -> apaga um user -> DELETE
show -> mostra um user -> GET
update -> atualiza um user -> PATCH(apenas um valor)/PUT
*/
