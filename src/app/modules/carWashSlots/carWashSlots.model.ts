import { model, Schema } from 'mongoose';
import { TSlot } from './carWashSlots.interface';

const carWashSlotsSchema = new Schema<TSlot>(
  {
    service: {
      type: Schema.Types.ObjectId,
      ref: 'CarService', // Reference to the Service model
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    startTime: {
      type: String,
      required: true,
    },
    endTime: {
      type: String,
      required: true,
    },
    isBooked: {
      type: String,
      enum: ['available', 'booked'],
      default: 'available',
    },
  },
  {
    timestamps: true,
  },
);

// Mongoose Model
export const CarWashSlots = model<TSlot>('CarWashSlots', carWashSlotsSchema);
