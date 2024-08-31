import { z } from 'zod';

const createCarServiceValidationSchema = z.object({
  body: z.object({
    name: z.string({ required_error: 'name is required.' }),
    description: z.string({ required_error: 'description is required.' }),
    price: z.number({ required_error: 'price is required.' }),
    duration: z.number({ required_error: 'duration is required.' }),
    isDeleted: z.boolean().default(false),
  }),
});

const updateCarServiceValidationSchema = z.object({
  body: z.object({
    name: z.string().optional(),
    description: z.string().optional(),
    price: z.number().optional(),
    duration: z.number().optional(),
    isDeleted: z.boolean().default(false),
  }),
});

export const carServiceValidations = {
  createCarServiceValidationSchema,
  updateCarServiceValidationSchema,
};
