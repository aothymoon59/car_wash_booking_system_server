import { z } from 'zod';

const createServiceBookingValidationSchema = z.object({
  body: z.object({
    serviceId: z.string({ required_error: 'serviceId is required' }),
    slotId: z.string({ required_error: 'slotId is required' }),
    vehicleType: z.string({ required_error: 'vehicleType is required' }),
    vehicleBrand: z.string({ required_error: 'vehicleBrand is required' }),
    vehicleModel: z.string({ required_error: 'vehicleModel is required' }),
    manufacturingYear: z.number({
      required_error: 'manufacturingYear is required',
    }),
    registrationPlate: z.string({
      required_error: 'registrationPlate is required',
    }),
  }),
});

export const serviceBookingValidations = {
  createServiceBookingValidationSchema,
};
