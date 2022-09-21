import { CreateUserSchema } from '../../dto/User/create.user.dto';
import { createUser } from '../../services';
import { CreateUserResponse, HTTPMethod, ApiErrorCode, APIRoute } from '../../types';
import { Event } from '../../entities/Event';
import { APIError } from '../../lib/utils/api-error';
import { StatusCodes } from 'http-status-codes';

export default {
  method: HTTPMethod.POST,
  url: '/user',
  schema: CreateUserSchema,
  controller: async (req, res, next): Promise<CreateUserResponse> => {
    const { firstname, lastname, email, event } = req.body;
    const user = await createUser({ firstname, lastname, email });
    const eventToAttach = await Event.findOne({ where: { id: event } });

    if (!eventToAttach) {
      throw new APIError(
        "Can't find the event",
        StatusCodes.NOT_FOUND,
        false,
        ApiErrorCode.CantFindUser,
        'CreateUser',
      );
    }
    user.event = eventToAttach;
    await user.save();
    return user;
  },
} as APIRoute;
