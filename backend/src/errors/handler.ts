import { ErrorRequestHandler } from "express";
import { ValidationError } from "yup";

interface ValidationErrors {
  [key: string]: string[];
}

const errorHandler: ErrorRequestHandler = (error, request, response, next) => {
  if (error instanceof ValidationError) {
    let validationErrors: ValidationErrors = {};
    error.inner.forEach((validationError) => {
      validationErrors[validationError.path] = validationError.errors;
    });
    return response
      .status(400)
      .json({ message: "Validation fails", validationErrors });
  }
  console.log(error);
  return response.status(500).json({ message: "Internal server error" });
};

export default errorHandler;
