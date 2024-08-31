import httpStatus from 'http-status';
import sendResponse from '../../utils/sendResponse';
import catchAsync from '../../utils/catchAsync';
import { BookingServiceServices } from './serviceBooking.service';

const createBooking = catchAsync(async (req, res) => {
  const { _id: customer } = req.user;

  const validatedData = {
    ...req.body,
    customer,
    service: req.body.serviceId,
    slot: req.body.slotId,
  };

  const result =
    await BookingServiceServices.createBookingIntoDB(validatedData);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Booking successful',
    data: result,
  });
});

const getAllBookings = catchAsync(async (req, res) => {
  const result = await BookingServiceServices.getAllBookingsFromDB();
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'All bookings retrieved successfully',
    data: result,
  });
});

const getMyBookings = catchAsync(async (req, res) => {
  const { _id: user } = req.user;
  const result = await BookingServiceServices.getMyBookingsFromDB(user);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'User bookings retrieved successfully',
    data: result,
  });
});

export const BookingServiceControllers = {
  createBooking,
  getAllBookings,
  getMyBookings,
};
