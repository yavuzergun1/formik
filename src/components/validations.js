import React from 'react'
import { object, string, number, date, InferType, ref} from 'yup'

const validations= object({
// Bunlar signUp componentinde bulunan initial values kısmındaki email, password, confirmPassword ile eşleşiyor
  age: number().required(),  /* numara girilmesi şartı */
  email: string().email().required(),
    password: string().min(5).required(), /* minimum 5 karakter olması şartı */
    passwordConfirm: string().oneOf([ref('password')]).required() /* password ile passwordConfirm'in aynı olmaları şartı */
  });

  export default validations