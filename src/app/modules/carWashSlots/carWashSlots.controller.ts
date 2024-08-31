import { carWashSlots } from './carWashSlots.service';
import sendResponse from '../../utils/sendResponse';
import catchAsync from '../../utils/catchAsync';
import httpStatus from 'http-status';
import { TQuery } from '../../interface/query.interface';

const createSlots = catchAsync(async (req, res) => {
  const result = await carWashSlots.createSlotsIntoDB(req.body);
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: 'Slots created successfully',
    data: result,
  });
});

const getAvailableSlots = catchAsync(async (req, res) => {
  //   const { serviceId, date } = req.query;

  //   console.log(serviceId, date);

  const result = await carWashSlots.getAvailableSlotsFromDB(
    req.query as TQuery,
  );
  //   console.log(result);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Available slots retrieved successfully',
    data: result,
  });
});

export const CarWashSlotsControllers = {
  createSlots,
  getAvailableSlots,
};
