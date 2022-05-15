import './App.css';
import {Formik} from 'formik';

function App() {
  return (
    <div className="App">
       <h1>Sign Up</h1>
    <Formik
      initialValues={{  /* Burayı doldurmana gerek yok. boş kalabilir. Burayı doldurur ve alttada value kısmında mesela  value= value.firstName yazarsan ilk başlangıçta firstname kısmı yavuz olarak görülür. Bunu placeholderla yapılabilir aslında.  */
        firstName: 'yavuz',
        lastName: '',        
        email: '',
        gender:'male',
        hobbies: [],
        country: 'England',
      }}
      onSubmit={ (values) =>  { 
      console.log(values);
      console.log(values.firstName);
      
      }}
    >
     {
       ({handleSubmit, handleChange, values})=>(
        <form onSubmit={handleSubmit}>

        <label htmlFor="firstName">First Name</label>
        <input type="text" name='firstName' onChange={handleChange} value={values.firstName} /> 
<br />                {/* örnek olması için sadece firstname inputuna value verdik. normalde çok gerekli değil. */}
<br />
        <label htmlFor="lastName">Last Name</label>
        <input type="text" name='lastName' onChange={handleChange}/>
        
<br />
<br />
        <label htmlFor="email">Email</label>
        <input type="email" name='email' onChange={handleChange}/>

        
        <br />
        <br /> 

        {/* RADİO */}
        <span>  Male</span>
        <input 
        type="radio" 
        value="male" 
        name='gender' 
        onChange={handleChange} 
        checked= {values.gender=== 'male' } /* eğer yukarıda initial values kısmında gender='male olarak yazılıysa en başta default olarak male işaretli olur. veya yine buranın seçili olmasını istiyorsak aşağıdaki gibi "defaultChecked" yazılması yeterli. ' */
        /* defaultChecked *//>
        <span>Female</span>
        <input 
        type="radio" 
        value="female" 
        name='gender' 
        onChange={handleChange}  />
<br />
<br />
{/* CHECKBOX */}
<div>
Football
<input type="checkbox" name='hobbies' value="Football" onChange={handleChange} />
</div>
  <div>
  Cinema
  <input type="checkbox" name='hobbies' value="Cinema" onChange={handleChange}/>
  </div>
    <div>
    Photography
    <input type="checkbox" name='hobbies' value="Photography" onChange={handleChange}/>
    </div>

{/* DROPDOWN */}
    <br /><br />
    <select onChange={handleChange} name="country" value={values.country} >
      <option value="Turkey">Turkey</option>    {/* Buraya values değeri verip yukarıdaki inital values'daki country'e England yazdık. böylece default olarak England seçili olacak. */}
      <option value="England">England</option>
      <option value="ABD">ABD</option>
    </select>
<br /><br />

        <button type="submit">Submit</button>
        <br />

        <br />
       <p> {JSON.stringify(values)} </p>
      </form>
        )
     }
    </Formik>
    </div>
  );
}

export default App;
