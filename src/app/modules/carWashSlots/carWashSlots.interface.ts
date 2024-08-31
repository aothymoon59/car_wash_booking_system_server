import { Document, Types } from 'mongoose';

export interface TSlot extends Document {
  service: Types.ObjectId;
  date: string;
  startTime: string;
  endTime: string;
  isBooked: 'available' | 'booked';
  createdAt?: Date;
  updatedAt?: Date;
}
