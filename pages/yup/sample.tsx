import { NextPage } from 'next'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const PASSWORD_MAX_LENGTH = 8
const PASSWORD_MIN_LENGTH = 2

const ERROR_MESSAGE_REQUIRED = "required"
const ERROR_MESSAGE_INTEGER = "integer"
const ERROR_MESSAGE_POSITIVE = "positive"
const ERROR_MESSAGE_TYPE = "type"
const ERROR_MESSAGE_MIN = "min"
const ERROR_MESSAGE_MAX = "max"
const ERROR_MESSAGE_NOT_MATCHED = "not matched"

const schema = yup.object({
  firstName: yup.string()
    .required(ERROR_MESSAGE_REQUIRED),
  age: yup.number()
    .typeError(ERROR_MESSAGE_TYPE)
    .positive(ERROR_MESSAGE_POSITIVE)
    .integer(ERROR_MESSAGE_INTEGER)
    .required(ERROR_MESSAGE_REQUIRED),
  password: yup.string()
    .required(ERROR_MESSAGE_REQUIRED)
    .min(PASSWORD_MIN_LENGTH, ERROR_MESSAGE_MIN)
    .max(PASSWORD_MAX_LENGTH, ERROR_MESSAGE_MAX),
  passwordConfirm: yup.string().oneOf([yup.ref("password")], ERROR_MESSAGE_NOT_MATCHED),
})

type FormType = yup.InferType<typeof schema>;

const YupSample: NextPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormType>({
    resolver: yupResolver(schema)
  });

  const onSubmit = (data: FormType) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("firstName")} />
      <p>{errors.firstName?.message}</p>
      <input {...register("age")} />
      <p>{errors.age?.message}</p>
      <input
        type="password"
        {...register("password")}
      />
      <p>{errors.password?.message}</p>
      <input
        type="password"
        {...register("passwordConfirm")}
      />
      <p>{errors.passwordConfirm?.message}</p>
      <input type="submit" />
    </form>
  );
};

export default YupSample
