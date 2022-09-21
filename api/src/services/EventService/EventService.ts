import { StatusCodes } from 'http-status-codes';
import { Event } from '../../entities/Event';
import { APIError } from '../../lib/utils/api-error';
import { CreateEventRequest, CreateEventResponse, ApiErrorCode } from '../../types';

export const createEvent = async (body: CreateEventRequest): Promise<CreateEventResponse> => {
  const isNameTaken = await Event.findOne({ where: { name: body.name } });

  if (isNameTaken) {
    throw new APIError(
      'Event name taken',
      StatusCodes.BAD_REQUEST,
      false,
      ApiErrorCode.EventAlreadyExists,
      'CreateEvent',
    );
  }

  const event = new Event();
  event.name = body.name;
  event.date = body.date;

  await event.save();

  if (!event) {
    throw new APIError(
      "Can't find the event",
      StatusCodes.NOT_FOUND,
      false,
      ApiErrorCode.CantFindUser,
      'CreateEvent',
    );
  }

  return event;
};
