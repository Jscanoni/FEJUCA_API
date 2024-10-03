import User from '../models/User';
import * as Yup from 'yup';

class SessionController{
    async store(req,res){

        const schema = Yup.object().shape({
            email: Yup.string().email().required(),
        });

        const { email } = req.body;

        if(! ( await schema.isValid(req.body))){
            return res.status(400).json({ error: 'Falha na validação.'});
        }

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