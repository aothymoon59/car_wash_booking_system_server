import { TQuery } from '../../interface/query.interface';
import { TSlot } from './carWashSlots.interface';
import { CarWashSlots } from './carWashSlots.model';

const createSlotsIntoDB = async (payload: TSlot) => {
  const { service, date, startTime, endTime } = payload;
  const duration = 60; // Assuming service duration is 60 minutes

  // Convert start and end times to minutes
  const startMinutes =
    parseInt(startTime.split(':')[0]) * 60 + parseInt(startTime.split(':')[1]);
  const endMinutes =
    parseInt(endTime.split(':')[0]) * 60 + parseInt(endTime.split(':')[1]);

  const slots = [];
  for (let time = startMinutes; time < endMinutes; time += duration) {
    const slotStartTime = `${Math.floor(time / 60)
      .toString()
      .padStart(2, '0')}:${(time % 60).toString().padStart(2, '0')}`;
    const slotEndTime = `${Math.floor((time + duration) / 60)
      .toString()
      .padStart(
        2,
        '0',
      )}:${((time + duration) % 60).toString().padStart(2, '0')}`;

    const slot = {
      service,
      date,
      startTime: slotStartTime,
      endTime: slotEndTime,
      isBooked: 'available',
    };

    slots.push(slot);
  }

  const result = await CarWashSlots.insertMany(slots);
  return result;
};

export const getAvailableSlotsFromDB = async (queryParams: TQuery) => {
  const { serviceId, date } = queryParams;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const query: any = {
    isBooked: 'available',
  };

  if (serviceId) {
    query.service = serviceId;
  }

  if (date) {
    query.date = date;
  }

  const result = await CarWashSlots.find(query).populate('service');
  return result;
};

export const carWashSlots = { createSlotsIntoDB, getAvailableSlotsFromDB };
