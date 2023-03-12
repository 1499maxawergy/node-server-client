const ApiError = require('../error/ApiError');
const bcrypt = require('bcrypt');
const {User} = require('../models/models');
const jwt = require('jsonwebtoken');
const {where} = require("sequelize");

const generateJWT = (id, email, role) =>{
    return jwt.sign(
        {id, email, role},
        process.env.SECRET_KEY,
        {expiresIn: '24h'}
    )
}

class UserController{
    async registration(req, res, next){
        const {email, password, role} = req.body;
        if (!email || !password) {
            return next(ApiError.badRequest('Incorrect data'))
        }
        const candidate = await User.findOne({where: {email}});
        if (candidate){
            return next(ApiError.badRequest('There is User with this email address already'))
        }
        const hashPassword = await bcrypt.hash(password, 5);
        const user = await User.create({email, role, password: hashPassword});
        const token = generateJWT(user.id, email, user.role);
        return res.json({token})
    }

    async login(req, res, next){
        const {email, password} = req.body;
        const user = await User.findOne({where: {email}});
        if (!user){
            return next(ApiError.badRequest('There is no User with this credentials'));
        }
        let comparePassword = bcrypt.compareSync(password, user.password)
        if (!comparePassword){
            return next(ApiError.badRequest('Incorrect password'));
        }
        const token = generateJWT(user.id, user.email, user.role);
        return res.json({token});
    }

    async check(req, res, next){
        const token = generateJWT(req.user.id, req.user.email, req.user.role);
        return res.json({token});
    }

    async getAll(req, res, next){
        const users = await User.findAll();
        return res.json(users);
    }

    async delete(req, res, next){
        const {id} = req.body;
        const deleted = await User.destroy({where: {id}});
        if (deleted === 0){
            return next(ApiError.badRequest('There is no User with this ID'));
        }
        return res.json({message: 'Successfully deleted'});
    }

    async patch(req, res, next) {
        const {id, email, role, password} = req.body;
        const user = await User.findOne({where: {id}});
        if (!user) {
            return next(ApiError.badRequest('There is no User with this ID'));
        }
        const hashPassword = await bcrypt.hash(password, 5);
        user.email = email;
        user.password = hashPassword;
        user.role = role;
        await user.save();
        return res.json({message: 'Successfully updated'});
    }
}

module.exports = new UserController();