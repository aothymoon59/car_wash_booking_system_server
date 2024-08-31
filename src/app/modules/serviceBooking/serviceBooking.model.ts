import mongoose from 'mongoose';
import { TBooking } from './serviceBooking.interface';

const bookingSchema = new mongoose.Schema<TBooking>(
  {
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    service: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'CarService',
      required: true,
    },
    slot: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'CarWashSlots',
      required: true,
    },
    vehicleType: { type: String, required: true },
    vehicleBrand: { type: String, required: true },
    vehicleModel: { type: String, required: true },
    manufacturingYear: { type: Number, required: true },
    registrationPlate: { type: String, required: true },
  },
  { timestamps: true },
);

export const ServiceBooking = mongoose.model<TBooking>(
  'ServiceBooking',
  bookingSchema,
);
