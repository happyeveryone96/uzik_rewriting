import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../redux/modules/user';
import Button from '../../elements/Button';
import Input from '../../elements/Input';

function LoginPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');

  const onEmailHanlder = (event) => {
    setEmail(event.target.value);
  }
  const onPasswordHandler = (event) => {
    setPassword(event.target.value);
  }
  const onSubmitHandler = (event) => {
    event.preventDefault();

    let body = {
      email: Email,
      password: Password
    }

    dispatch(loginUser(body))
    .then(response => {
      if (response.payload.loginSuccess) {
        navigate('/')
      } else {
        alert('Error');
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
            <Input type='email' value={Email} onChange={onEmailHanlder}/>
            <label>Password</label>
            <Input type="password" value={Password} onChange={onPasswordHandler} autoComplete="on"/>
            <br/>
            <Button 
              fontSize='20px' 
              background='#f5f6fa' 
              color='black'>로그인
            </Button>
            <br/>
            <Button 
              fontSize={'20px'} 
              background={'#f5f6fa'} 
              color={'black'}
              clickEvent={()=>navigate('/register')}>회원가입
            </Button>
          </form>
    </div>
  )
}

export default LoginPage
