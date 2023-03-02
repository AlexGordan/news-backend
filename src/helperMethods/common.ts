import express from "express";
import { validationResult } from "express-validator";
import { STATUS_BAD_REQUEST, STATUS_INTERNAL_ERROR, STATUS_SUCCESS } from "../constants/statusCodes";

export type Result<T> = [{ code: number; message: string } | null, T | null];

export function errorMessage<T>(message: string, code: number = STATUS_BAD_REQUEST): Result<T> {
  return [{ message, code }, null];
}

export function ok<T>(result: T): Result<T> {
  return [null, result];
}

export function handleResult<T>(res: express.Response, result: Result<T>) {
  const [err, obj] = result;

  if (err) {
    return res.status(STATUS_INTERNAL_ERROR).send(err);
  }

  return res.status(STATUS_SUCCESS).send(obj);
}

export function handleValidationResult(req: express.Request, res: express.Response, message: string) {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(STATUS_INTERNAL_ERROR).json({
      errors: errors.array(),
      message,
    });
  }

  return false;
}
