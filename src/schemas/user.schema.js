import joi from 'joi';

export const userRegister = joi.object({
	email: joi.string().email().required().messages({
		'string.email': 'Email must be a valid email',
		'any.required': 'Email is required',
		'string.empty': 'Email is not allowed to be empty',
	}),
	password: joi.string().min(6).required().messages({
		'string.min': 'Password must be at least 6 characters long',
		'any.required': 'Password is required',
		'string.empty': 'Password is not allowed to be empty',
	}),
	role: joi.number().required().messages({
		'any.required': 'Role is required',
		'string.empty': 'Role is not allowed to be empty',
	}),
});

export const userLogin = joi.object({
	email: joi.string().email().required().messages({
		'string.email': 'Email must be a valid email',
		'any.required': 'Email is required',
		'string.empty': 'Email is not allowed to be empty',
	}),
	password: joi.string().min(6).required().messages({
		'string.min': 'Password must be at least 6 characters long',
		'any.required': 'Password is required',
		'string.empty': 'Password is not allowed to be empty',
	}),
});
