import yup from 'schemas/instance';

const PASSWORD_MAX_LENGTH = 8
const PASSWORD_MIN_LENGTH = 2

const ERROR_MESSAGE_REQUIRED = "required"
const ERROR_MESSAGE_INTEGER = "integer"
const ERROR_MESSAGE_POSITIVE = "positive"
const ERROR_MESSAGE_TYPE = "type"
const ERROR_MESSAGE_MIN = "min"
const ERROR_MESSAGE_NOT_MATCHED = "not matched"

export const nameSchema = yup.string()
  .required(ERROR_MESSAGE_REQUIRED)

export const passwordSchema = yup.string()
  .required(ERROR_MESSAGE_REQUIRED)
  .min(PASSWORD_MIN_LENGTH, ERROR_MESSAGE_MIN)
  .max(PASSWORD_MAX_LENGTH);

export const ageSchema = yup.number()
  .typeError(ERROR_MESSAGE_TYPE)
  .positive(ERROR_MESSAGE_POSITIVE)
  .integer(ERROR_MESSAGE_INTEGER)
  .required(ERROR_MESSAGE_REQUIRED)

export const passwordConfirmSchema = yup.string()
  .oneOf([yup.ref("password")], ERROR_MESSAGE_NOT_MATCHED)
