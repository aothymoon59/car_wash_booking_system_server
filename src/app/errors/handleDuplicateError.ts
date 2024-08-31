/* eslint-disable @typescript-eslint/no-explicit-any */
// import { TErrorSources, TGenericErrorResponse } from '../interface/error';

import {
  TErrorMessages,
  TGenericErrorResponse,
} from '../interface/error.interface';

const handleDuplicateError = (err: any): TGenericErrorResponse => {
  const errorMessages: TErrorMessages = [
    {
      path: '',
      message: err.message,
    },
  ];

  const statusCode = 400;

  return {
    statusCode,
    message: err.message,
    errorMessages,
  };
};

export default handleDuplicateError;
