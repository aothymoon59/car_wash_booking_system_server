import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import auth from '../../middlewares/auth';
import { serviceBookingValidations } from './serviceBooking.validation';
import { BookingServiceControllers } from './serviceBooking.controller';

const router = express.Router();

router.post(
  '/bookings',
  auth('user'),
  validateRequest(
    serviceBookingValidations.createServiceBookingValidationSchema,
  ),
  BookingServiceControllers.createBooking,
);

router.get(
  '/bookings',
  auth('admin'),
  BookingServiceControllers.getAllBookings,
);

router.get(
  '/my-bookings',
  auth('user'),
  BookingServiceControllers.getMyBookings,
);

export const ServiceBookingsRoutes = router;
