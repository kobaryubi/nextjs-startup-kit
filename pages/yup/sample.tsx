import { NextPage } from 'next'
import Link from 'next/link';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import yup from "schemas/instance";
import { passwordSchema, nameSchema, ageSchema, passwordConfirmSchema } from "schemas";

const schema = yup.object({
  name: nameSchema,
  age: ageSchema,
  password: passwordSchema,
  passwordConfirm: passwordConfirmSchema,
})

type FormType = yup.InferType<typeof schema>;

const YupSample: NextPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormType>({
    resolver: yupResolver(schema)
  });

  const onSubmit = (data: FormType) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name")} />
      <p>{errors.name?.message}</p>
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
      <Link href="/">HOME</Link>
    </form>
  );
};

export default YupSample
