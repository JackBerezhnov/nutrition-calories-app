import React from 'react';
import { useForm } from 'react-hook-form';

function FormCalorieCalculator() {
    const {register, handleSubmit, errors} = useForm();
    const onSubmit = (data) => {
        console.log(data);
    }

    return(
        <form onSubmit={handleSubmit(onSubmit)}>
          <input type="text" placeholder="Email" name="email" ref={register}/>
          <input 
            type="password" 
            placeholder="Password" 
            name="password" 
            ref={register({ required: true, minLength: 8 })}
          />
          {errors.password && <p>Password is invalid</p>}
          <input type="submit" value="Submit" />
        </form>
    );
}

export default FormCalorieCalculator;