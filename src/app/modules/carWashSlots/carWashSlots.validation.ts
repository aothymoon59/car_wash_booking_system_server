import { z } from 'zod';

const createSlotsValidationSchema = z.object({
  body: z.object({
    service: z.string({ required_error: 'service is required.' }),
    date: z.string({ required_error: 'date is required.' }),
    startTime: z.string({ required_error: 'startTime is required.' }),
    endTime: z.string({ required_error: 'endTime is required.' }),
  }),
});

export const carWashSlotsValidations = {
  createSlotsValidationSchema,
};
