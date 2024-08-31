import { Response } from 'express';
import httpStatus from 'http-status';

type TResponse<T> = {
  success: boolean;
  statusCode: number;
  message?: string;
  token?: string;
  data: T;
  meta?: {
    page: number;
    limit: number;
    total: number;
  };
};

const sendResponse = <T>(res: Response, data: TResponse<T>) => {
  const meta = data?.meta;
  if (!data?.data || (Array.isArray(data?.data) && data?.data.length === 0)) {
    res.status(httpStatus.NOT_FOUND).json({
      success: false,
      statusCode: 404,
      message: 'No Data Found',
      data: [],
    });
  } else {
    res.status(data?.statusCode).json({
      success: data.success,
      statusCode: data.statusCode,
      message: data.message,
      meta,
      token: data?.token,
      data: data?.data,
    });
  }
};
export default sendResponse;
