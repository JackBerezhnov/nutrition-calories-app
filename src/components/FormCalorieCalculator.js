import React from 'react';
import { useForm } from 'react-hook-form';

function FormCalorieCalculator() {
    const {register, handleSubmit} = useForm();
    const onSubmit = (data) => {
        console.log(data);
    }

    return(
        <form onSubmit={handleSubmit(onSubmit)}>
          <input type="number" placeholder="Age" name="age" ref={register}/>
          <label>
            Gender:
              <input type="radio" value="Male" name="gender" ref={register} /> Male
              <input type="radio" value="Female" name="gender" ref={register} /> Female
          </label>
          <input type="number" placeholder="Height cm" name="height" ref={register}/>
          <input type="number" placeholder="Weight kg" name="weight" ref={register}/>
          <input type="submit" value="Calculate" />
        </form>
    );
}

export default FormCalorieCalculator;