import db from './config/db';
import UserDao from './dao/userDAO';

(async function () {
    let dbs = new db();
    let userDao = new UserDao();

    await dbs.conectar();

    await userDao.crear({ username: 'Gomez1', email: 'gomez1@gmail.com'});
    await userDao.crear({ username: 'Gomez2', email: 'gomez2@gmail.com'});
    await userDao.crear({ username: 'Gomez3', email: 'gomez3@gmail.com'});
    await userDao.crear({ username: 'Gomez4', email: 'gomez4@gmail.com'});

    await userdao.eliminar('');

    const usuarios = await userDao.obtenerTodos();

    console.log(usuarios);

    dbs.desconectar();
})();