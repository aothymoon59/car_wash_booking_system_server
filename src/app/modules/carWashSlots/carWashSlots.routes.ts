import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import auth from '../../middlewares/auth';
import { carWashSlotsValidations } from './carWashSlots.validation';
import { CarWashSlotsControllers } from './carWashSlots.controller';

const router = express.Router();

router.post(
  '/services/slots',
  auth('admin'),
  validateRequest(carWashSlotsValidations.createSlotsValidationSchema),
  CarWashSlotsControllers.createSlots,
);

router.get('/slots/availability', CarWashSlotsControllers.getAvailableSlots);

export const CarWashServiceRoutes = router;
