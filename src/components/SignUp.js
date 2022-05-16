import React from 'react';
import {useFormik} from 'formik';
import validationSchema from './validations'


function SignUp() {
    const {handleSubmit, handleChange, handleBlur, values, errors, touched} = useFormik ({
        initialValues:{ 
      
        email: '',
        password:'',
        passwordConfirm:'',
        age:''
      },
      onSubmit: ( values) =>  { 
      console.log(values);
      console.log(values.firstName);
        },

        validationSchema,
    });
  return (
    <div> <h1>Sign Up</h1>
     
    {
      
       <form onSubmit={handleSubmit}>

      
        <label >Age</label>         {/*  onBlur={handleBlur} forma yazarken değil formu yazıp bitirdikten sonra diğer forma tıkladığımızda uyarı vermesi için yapıyoruz. yoksa yazmaya başladığımız anda bitmesini beklemeden uyarı verir. Yine "touched" hookunu da aynı amaç için koyduk.*/}
        <input name='age' onChange={handleChange} onBlur={handleBlur} />
        {errors.age && touched.age && <div className='error'>{errors.age} </div> }
       
       <br />
       <br /> 

       <label>e-Mail </label>
       <input type="email" name='email' onChange={handleChange} onBlur={handleBlur} />
       {errors.email && touched.email && <div className='error' >{errors.email} </div> }
       {/*  kendi istediğimiz uyarı mesajını validations kısmındaki email()içerisine de yazabiliriz. */}
       <br />
       <br /> 
       <label >password</label>
       <input type="password" name='password' onChange={handleChange} onBlur={handleBlur} />
       {errors.password && touched.password && <div className='error'>{errors.password} </div> }


       <br />
       <br />
       <label >passwordConfirm</label>
       <input type="password" name='passwordConfirm' onChange={handleChange} onBlur={handleBlur} />
       {errors.passwordConfirm && touched.passwordConfirm && <div className='error'> Şifreler Eşleşmedi</div> } {/* Görüldüğü gibi burada istersek kendi spesifik olarak sadece bu input için de istediğimiz mesajı yazabiliriz.  */}

       <br />
       <br />

       <button type="submit">Submit</button>
       <br />

       <br />
      <p> {JSON.stringify(values)} </p>
     </form>
}
     </div>
  )
}

export default SignUp