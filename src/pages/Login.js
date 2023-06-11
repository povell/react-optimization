import { useState } from 'react';
import { TextInput } from '../components/TextInput';
import { useAuth } from '../context/AuthProvider';
import { useNavigate, useLocation } from 'react-router-dom';

export default function Login() {
  const [user, setUser] = useState('');

  const auth = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from || '/';

  const resetHandler = (e) => {
    setUser('');
  }
  
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(user);
    auth.signin(user, () => {
      navigate(from, {
        replace: true,
      });
    })
    e.target.reset();
  }

  const changeHandler = (e) => {
    setUser(e.target.value);
  }
  
  return (
    <div className='sign-in_wrapper'>
      <form className="sign-in_form"
        onSubmit={submitHandler}
        onChange={changeHandler}
        onReset={resetHandler}
      >
        <h3>Sign in</h3>
        <div className='sign-in_inputs'>
          <TextInput
            name="name"
            type="text"
            placeholder="name"
            label="name"
            withAsterisk
          />
        </div>
        <button>Login</button>
      </form>
    </div>
  )
}
