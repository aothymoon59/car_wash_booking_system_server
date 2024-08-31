/* {
    "serviceId": "60d9c4e4f3b4b544b8b8d1c5",
    "slotId": "60d9c4e4f3b4b544b8b8d1c6",
    "vehicleType": "car",
    "vehicleBrand": "Toyota",
    "vehicleModel": "Camry",
    "manufacturingYear": 2020,
    "registrationPlate": "ABC123"
} */

import { Types } from 'mongoose';

export type TBooking = {
  customer: Types.ObjectId;
  service: Types.ObjectId;
  slot: Types.ObjectId;
  vehicleType: string;
  vehicleBrand: string;
  vehicleModel: string;
  manufacturingYear: number;
  registrationPlate: string;
};
