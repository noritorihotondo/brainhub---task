import { CreateEventSchema } from '../../dto/Event/create.event.dto';
import { createEvent } from '../../services';
import { CreateEventResponse, HTTPMethod, APIRoute } from '../../types';

export default {
  method: HTTPMethod.POST,
  url: '/event',
  schema: CreateEventSchema,
  controller: async (req, res, next): Promise<CreateEventResponse> => {
    const { name, date } = req.body;

    return await createEvent({ name, date });
  },
} as APIRoute;
