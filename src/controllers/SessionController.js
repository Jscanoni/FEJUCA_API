import User from '../models/User';

class SessionController{
    async store(req,res){
        const { email } = req.body;

        //Verificando se esse usuário já existe
        let user = await User.findOne({ email });
        
        //se não existir, ele vai criar um novo usuário
        if(!user){
            user = await User.create({ email });
        }

        //caso já exista o usuário, ele ia retornar
        return res.json(user);
    }

}

export default new SessionController();