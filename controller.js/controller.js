const { user } = require("../model/user");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError } = require('../errors');
const mongoose = require("mongoose");


const home = async (req,res,next)=>{
    try {
        res.status(StatusCodes.OK).json(`welcome to user management rest api`);
    } catch (error) {
        next(error);
    }
}

const createUser = async (req, res, next) => {
    try {
        const newUser = await user.create(req.body);
        res.status(StatusCodes.CREATED).json(newUser);
    } catch (error) {
        next(error);
    }
};

const getUser = async (req, res, next) => {
    try {
        const { user_id } = req.params;
        if (user_id.length < 1) {
            throw new BadRequestError("Please provide user id");
        }
        // Check if user_id is a valid ObjectId
        if (!mongoose.Types.ObjectId.isValid(user_id)) {
            throw new BadRequestError('Invalid user_id format', StatusCodes.BAD_REQUEST);
        }
        const foundUser = await user.findOne({ _id: user_id });
        if (!foundUser) {
            return res.status(StatusCodes.NOT_FOUND).json({ message: `User with id ${user_id} not found` });
        }
        res.status(StatusCodes.OK).json(foundUser);
    } catch (error) {
        next(error);
    }
};

const updateUser = async (req, res, next) => {
    try {
        const { user_id } = req.params;
        if (user_id.length < 1) {
            throw new BadRequestError("Please provide user id");
        }
        // Check if user_id is a valid ObjectId
        if (!mongoose.Types.ObjectId.isValid(user_id)) {
            throw new BadRequestError('Invalid user_id format', StatusCodes.BAD_REQUEST);
        }
        if (!req.body.name) {
            throw new BadRequestError("Please provide a value to update");
        }
        const updatedUser = await user.findOneAndUpdate({ _id: user_id }, { name: req.body.name }, { new: true, runValidators: true });
        if (!updatedUser) {
            return res.status(StatusCodes.NOT_FOUND).json({ message: `User with id ${user_id} not found` });
        }
        res.status(StatusCodes.OK).json(updatedUser);
    } catch (error) {
        next(error);
    }
};

const deleteUser = async (req, res, next) => {
    try {
        const { user_id } = req.params;
        if (user_id.length < 1) {
            throw new BadRequestError("Please provide user id");
        }
        // Check if user_id is a valid ObjectId
        if (!mongoose.Types.ObjectId.isValid(user_id)) {
            throw new BadRequestError('Invalid user_id format', StatusCodes.BAD_REQUEST);
        }
        const deletedUser = await user.findOneAndDelete({ _id: user_id });
        if (!deletedUser) {
            return res.status(StatusCodes.NOT_FOUND).json({ message: `User with id ${user_id} not found` });
        }
        res.status(StatusCodes.OK).json({ message: `User with id ${user_id} has been deleted` });
    } catch (error) {
        next(error);
    }
};

module.exports = { createUser, getUser, updateUser, deleteUser,home };
