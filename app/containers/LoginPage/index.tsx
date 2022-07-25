import * as React from 'react';
import styled from "styled-components";
import './styles.css';
import UserCard from '../../components/UserCard';
import AddMore from '../../components/UserCard/more';

import { signInGoogle } from './googleAuth';

export default function LoginPage() {

  return (
    <div className='login'>
      <div className='container'>
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
                <AddMore />
              </div>
            </div>
            <div className='link-group'>
              <ul className='link-list'>
                <li><a href="">Sign up</a></li>
                <li><a href="">Help</a></li>
                <li><a onClick={() => signInGoogle()}>Sign In With Google</a></li>
              </ul>
            </div>
            <div className='help-center'>
              <button>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
              </button>
              <a href="">This video will help you to <br /> create a new account</a>
            </div>
          </div>
        </div>
        <div className='login__center'>
          <span className='login__center-title'>or</span>
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