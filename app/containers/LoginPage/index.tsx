import * as React from 'react';
import styled from "styled-components";
import './styles.css';
import UserCard from '../../components/UserCard';

export default function LoginPage() {
  return (
    <div className='login'>
      <div className='login__top'>
        <H1 className='login__title text-center font-weight-regular'>
          Welcome back
        </H1>
        <H3 className='text-center font-weight-regular'>Join the world's largest community</H3>
        <div className='odd-item'>
          <div className='recent-login'>
            <span className='recent-login__title'>Recent logins</span>
            <div className='recent-login__list'>
              <UserCard />
              <UserCard />
            </div>
          </div>
          <div className='link-group'>
            <ul className='link-list'>
              <li><a href="">Sign up</a></li>
              <li><a href="">Help</a></li>
            </ul>
          </div>
          <div className='help-center'>
            <button>Play</button>
            <a href="">This video will help you to create a new account</a>
          </div>
        </div>
      </div>
      <div className='login__bottom'>
        <form action="">
          <input type="text" placeholder='Phone number, username or email' />
          <input type="password" placeholder='Password' />
          <input type="checkbox" />
        </form>
        <SigninButton>Sign in</SigninButton>
        <CreateNewButton>Create New Account</CreateNewButton>
        <span>Or continue with</span>
        <div className='login-group'>

        </div>
        <p>
          By clicking button above, you agree to our <a href="">term of use</a> and <a href="">privacy policies</a>
        </p>
      </div>
    </div>
  );
}

const H1 = styled.h1`
  font-size: 2em;
  margin-bottom: 0.25em;
`
const H2 = styled.h2`
  font-size: 1.5em;
`

const H3 = styled.h3`
  font-size: 1em;
`

const SigninButton = styled.button`
  background-color: #043730;
  color: #FFF;
  border: none;
  border-radius: 4px;
  padding: 12px 0;
  min-width: 400px;
`;
const CreateNewButton = styled.button`
  background-color: #EE5B47;
  color: #FFF;
  border: none;
  border-radius: 4px;
  padding: 12px 0;
  min-width: 400px;
`;