import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../_actions/user_action';
import Button from '../elements/Button';
import Input from '../elements/Input';

function RegisterPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [Name, setName] = useState('');
  const [ConfirmPassword, setConfirmPassword] = useState('');

  const onEmailHanlder = (event) => {
    setEmail(event.target.value);
  }
  const onNameHandler = (event) => {
    setName(event.target.value);
  }
  const onPasswordHandler = (event) => {
    setPassword(event.target.value);
  }
  const onConfirmPasswordHandler = (event) => {
    setConfirmPassword(event.target.value);
  }
  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (Password !== ConfirmPassword) {
      return alert('비밀번호와 비밀번화 확인은 같아야 합니다.')
    }
    let body = {
      email: Email,
      password: Password,
      name: Name
    }

    dispatch(registerUser(body))
    .then(response => {
      if (response.payload.success) {
        navigate('/login');
      } else {
        alert('Failed to sign up');
      }
    })
  }

  return (
    <div 
      style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center',
        width: '100%',
        height: '100vh'}}>
          <form style={{ display: 'flex', flexDirection: 'column' }}
            onSubmit={onSubmitHandler}>
            <label>Email</label>
            <Input type="email" value={Email} onChange={onEmailHanlder} />
            <label>Name</label>
            <Input type="text" value={Name} onChange={onNameHandler} />
            <label>Password</label>
            <Input type="password" value={Password} onChange={onPasswordHandler} />
            <label>Confirm Password</label>
            <Input type="password" value={ConfirmPassword} onChange={onConfirmPasswordHandler} />
            <br/>
            <Button 
              fontSize={'20px'} 
              background={'#718093'} 
              color={'white'}
              clickEvent={()=>navigate('/register')}>회원가입
            </Button>
          </form>
    </div>
  )
}

export default RegisterPage
