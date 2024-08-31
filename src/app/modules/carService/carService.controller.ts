import httpStatus from 'http-status';
import sendResponse from '../../utils/sendResponse';
import catchAsync from '../../utils/catchAsync';
import { CarServiceServices } from './carService.service';

const createCarService = catchAsync(async (req, res) => {
  const result = await CarServiceServices.createCarServiceIntoDB(req.body);
  // send response
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Service created successfully',
    data: result,
  });
});

const getSingleCarService = catchAsync(async (req, res) => {
  const result = await CarServiceServices.getSingleCarServiceFromDB(
    req.params.id,
  );
  // send response
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Service retrieved successfully',
    data: result,
  });
});

const getAllCarServices = catchAsync(async (req, res) => {
  const result = await CarServiceServices.getAllCarServicesFromDB();
  // send response
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Services retrieved successfully',
    data: result,
  });
});

const updateCarService = catchAsync(async (req, res) => {
  const result = await CarServiceServices.updateCarServiceIntoDB(
    req.params.id,
    req.body,
  );
  // send response
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Service updated successfully',
    data: result,
  });
});

const deleteCarService = catchAsync(async (req, res) => {
  const result = await CarServiceServices.deleteCarServiceFromDB(req.params.id);
  // send response
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Service deleted successfully',
    data: result,
  });
});

export const CarServiceControllers = {
  createCarService,
  getSingleCarService,
  getAllCarServices,
  updateCarService,
  deleteCarService,
};
