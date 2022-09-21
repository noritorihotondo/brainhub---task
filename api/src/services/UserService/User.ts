import { StatusCodes } from 'http-status-codes';
import { User } from '../../entities/User';
import { APIError } from '../../lib/utils/api-error';
import { CreateUserRequest, ApiErrorCode } from '../../types';

export const createUser = async (body: CreateUserRequest): Promise<User> => {
  const isEmailTaken = await User.findOne({ where: { email: body.email } });

  if (isEmailTaken) {
    throw new APIError(
      'Email already taken',
      StatusCodes.BAD_REQUEST,
      false,
      ApiErrorCode.UserAlreadyExists,
      'CreateUser',
    );
  }

  let user = new User();
  user.firstname = body.firstname;
  user.lastname = body.lastname;
  user.email = body.email;

  await user.save();

  if (!user) {
    throw new APIError(
      "Can't find the user",
      StatusCodes.NOT_FOUND,
      false,
      ApiErrorCode.CantFindUser,
      'CreateUser',
    );
  }

  return user;
};
