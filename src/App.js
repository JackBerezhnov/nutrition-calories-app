import React from 'react';
import Title from './components/Title';
import { useForm } from 'react-hook-form';
import './App.css';

function App() {
  const {register, handleSubmit, errors} = useForm();
  const onSubmit = (data) => {
    console.log(data);
  }

    return (
      <div className="App">
        <Title/>
        <input />
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
      </div>
    );
}

export default App;