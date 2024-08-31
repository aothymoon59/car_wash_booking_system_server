import { Router } from 'express';
import { AuthRoutes } from '../modules/auth/auth.routes';
import { CarServiceRoutes } from '../modules/carService/carService.routes';
import { CarWashServiceRoutes } from '../modules/carWashSlots/carWashSlots.routes';
import { ServiceBookingsRoutes } from '../modules/serviceBooking/serviceBooking.routes';

const router = Router();

const moduleRoutes = [
  {
    path: '/auth',
    routes: AuthRoutes,
  },
  {
    path: '/services',
    routes: CarServiceRoutes,
  },
  {
    path: '/',
    routes: CarWashServiceRoutes,
  },
  {
    path: '/',
    routes: ServiceBookingsRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.routes));

export default router;
