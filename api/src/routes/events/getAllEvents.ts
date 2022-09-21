import { HTTPMethod, APIRoute, GetAllEvents } from '../../types';
import { Event } from '../../entities/Event';

export default {
  method: HTTPMethod.GET,
  url: '/events',
  controller: async (req, res, next): Promise<GetAllEvents> => {
    const events = await Event.find();

    return events;
  },
} as APIRoute;
