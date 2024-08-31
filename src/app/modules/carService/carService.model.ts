import { model, Schema } from 'mongoose';
import { TCarService } from './carService.interface';

const carServiceSchema = new Schema<TCarService>(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    duration: {
      type: Number,
      required: true,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true },
);

export const CarService = model<TCarService>('CarService', carServiceSchema);
