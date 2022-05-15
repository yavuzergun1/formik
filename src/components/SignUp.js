import React from 'react';
import {useFormik} from 'formik';
import validationSchema from './validations'


function SignUp() {
    const {handleSubmit, handleChange, values} = useFormik ({
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

      
        <label >Age</label>
        <input  name='age' onChange={handleChange}/>

       
       <br />
       <br /> 

       <label>e-Mail </label>
       <input type="email" name='email' onChange={handleChange}/>

       
       <br />
       <br /> 
       <label >password</label>
       <input type="password" name='password' onChange={handleChange}/>
       
       <br />
<br />
       <label >passwordConfirm</label>
       <input type="password" name='passwordConfirm' onChange={handleChange}/>
<br /><br />

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