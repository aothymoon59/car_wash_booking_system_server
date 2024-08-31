import { TCarService } from './carService.interface';
import { CarService } from './carService.model';

const createCarServiceIntoDB = async (payload: TCarService) => {
  const result = await CarService.create(payload);
  return result;
};

const getSingleCarServiceFromDB = async (id: string) => {
  const result = await CarService.findOne({ _id: id, isDeleted: false }).exec();
  return result;
};

const getAllCarServicesFromDB = async () => {
  const result = await CarService.find({ isDeleted: false });
  return result;
};

const updateCarServiceIntoDB = async (id: string, payload: TCarService) => {
  const data = await CarService.findOne({ _id: id, isDeleted: false }).exec();
  if (!data) {
    return null;
  }
  const result = await CarService.findByIdAndUpdate(id, payload, {
    new: true,
  });
  return result;
};

const deleteCarServiceFromDB = async (id: string) => {
  const result = CarService.findByIdAndUpdate(
    id,
    { isDeleted: true },
    { new: true },
  );
  return result;
};

export const CarServiceServices = {
  createCarServiceIntoDB,
  getSingleCarServiceFromDB,
  getAllCarServicesFromDB,
  updateCarServiceIntoDB,
  deleteCarServiceFromDB,
};
