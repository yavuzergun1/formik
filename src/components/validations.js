import React from 'react'
import { object, string, number, date, InferType, ref} from 'yup'

const validations= object({
// Bunlar signUp componentinde bulunan initial values kısmındaki email, password, confirmPassword ile eşleşiyor
    age: number().required('zorunlu alan'),  /* numara girilmesi şartı */
    email: string().email('geçerli bir email adresi giriniz').required(), /* istersek bu şekilde kendi email uyarımızı kendimiz oluşturabiliriz. */
    password: string().min(5).required(), /* minimum 5 karakter olması şartı */
    passwordConfirm: string().oneOf([ref('password')]).required() /* password ile passwordConfirm'in aynı olmaları şartı */
  });

  export default validations