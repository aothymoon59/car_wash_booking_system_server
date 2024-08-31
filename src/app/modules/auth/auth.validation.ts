import { z } from 'zod';

const userSignUpValidationSchema = z.object({
  body: z.object({
    name: z.string({ required_error: 'name is required.' }),
    email: z.string({ required_error: 'email is required.' }).email(),
    password: z.string({ required_error: 'Password is required' }),
    phone: z.string({ required_error: 'Phone is required' }),
    role: z.enum(['user', 'admin']).default('user'),
    address: z.string({ required_error: 'Address is required' }),
  }),
});

const userLoginValidationSchema = z.object({
  body: z.object({
    email: z.string({ required_error: 'email is required.' }).email(),
    password: z.string({ required_error: 'Password is required' }),
  }),
});

export const userValidations = {
  userSignUpValidationSchema,
  userLoginValidationSchema,
};
