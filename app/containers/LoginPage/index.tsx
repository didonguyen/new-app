import * as React from 'react';
import styled from 'styled-components';
import './styles.css';
import UserCard from '../../components/UserCard';
import AddMore from '../../components/UserCard/more';

export default function LoginPage() {
    return (
        <div className="login">
            <div className="container">
                <div className="login__top">
                    <H1 className="login__title text-center font-weight-regular">
                        Welcome back
                    </H1>
                    <H3 className="text-center font-weight-regular">
                        Join the world's largest community
                    </H3>
                    <div className="odd-item">
                        <div className="recent-login">
                            <span className="recent-login__title">
                                Recent logins
                            </span>
                            <div className="recent-login__list">
                                <UserCard />
                                <UserCard />
                                <AddMore />
                            </div>
                        </div>
                        <div className="link-group">
                            <ul className="link-list">
                                <li>
                                    <a href="">Sign up</a>
                                </li>
                                <li>
                                    <a href="">Help</a>
                                </li>
                            </ul>
                        </div>
                        <div className="help-center">
                            <button>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </button>
                            <a href="">
                                This video will help you to <br /> create a new
                                account
                            </a>
                        </div>
                    </div>
                </div>
                <div className="login__center">
                    <span className="login__center-title">or</span>
                </div>
                <div className="login__bottom">
                    <form action="">
                        <div className="form__container">
                            <div className="form__container-left">
                                <input
                                    className="form-input"
                                    type="text"
                                    placeholder="Phone number, username or email"
                                />
                                <div className="form__checkbox">
                                    <input
                                        id="remember"
                                        type="checkbox"
                                        name="remember"
                                    />
                                    <label htmlFor="remember">
                                        Remember for 30s days
                                    </label>
                                </div>
                            </div>
                            <div className="form__container-right">
                                <input
                                    className="form-input"
                                    type="password"
                                    placeholder="Password"
                                />
                                <a className="form__forgot-password" href="">
                                    Forgot password
                                </a>
                            </div>
                        </div>
                    </form>
                    <div className="action-button-group">
                        <SigninButton>Sign In</SigninButton>
                        <CreateNewButton>Create New Account</CreateNewButton>
                    </div>
                    <div className="continue-access">
                        <span className="continue-title">Or continue with</span>
                    </div>
                    <div className="login-group">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            x="0px"
                            y="0px"
                            width="48"
                            height="48"
                            viewBox="0 0 48 48"
                        >
                            <path
                                fill="#FFC107"
                                d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                            ></path>
                            <path
                                fill="#FF3D00"
                                d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                            ></path>
                            <path
                                fill="#4CAF50"
                                d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                            ></path>
                            <path
                                fill="#1976D2"
                                d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                            ></path>
                        </svg>

                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            x="0px"
                            y="0px"
                            width="48"
                            height="48"
                            viewBox="0 0 48 48"
                        >
                            <linearGradient
                                id="Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1"
                                x1="9.993"
                                x2="40.615"
                                y1="9.993"
                                y2="40.615"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop offset="0" stop-color="#2aa4f4"></stop>
                                <stop offset="1" stop-color="#007ad9"></stop>
                            </linearGradient>
                            <path
                                fill="url(#Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1)"
                                d="M24,4C12.954,4,4,12.954,4,24s8.954,20,20,20s20-8.954,20-20S35.046,4,24,4z"
                            ></path>
                            <path
                                fill="#fff"
                                d="M26.707,29.301h5.176l0.813-5.258h-5.989v-2.874c0-2.184,0.714-4.121,2.757-4.121h3.283V12.46 c-0.577-0.078-1.797-0.248-4.102-0.248c-4.814,0-7.636,2.542-7.636,8.334v3.498H16.06v5.258h4.948v14.452 C21.988,43.9,22.981,44,24,44c0.921,0,1.82-0.084,2.707-0.204V29.301z"
                            ></path>
                        </svg>

                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            x="0px"
                            y="0px"
                            width="48"
                            height="48"
                            viewBox="0 0 48 48"
                        >
                            <path
                                fill="#03A9F4"
                                d="M42,12.429c-1.323,0.586-2.746,0.977-4.247,1.162c1.526-0.906,2.7-2.351,3.251-4.058c-1.428,0.837-3.01,1.452-4.693,1.776C34.967,9.884,33.05,9,30.926,9c-4.08,0-7.387,3.278-7.387,7.32c0,0.572,0.067,1.129,0.193,1.67c-6.138-0.308-11.582-3.226-15.224-7.654c-0.64,1.082-1,2.349-1,3.686c0,2.541,1.301,4.778,3.285,6.096c-1.211-0.037-2.351-0.374-3.349-0.914c0,0.022,0,0.055,0,0.086c0,3.551,2.547,6.508,5.923,7.181c-0.617,0.169-1.269,0.263-1.941,0.263c-0.477,0-0.942-0.054-1.392-0.135c0.94,2.902,3.667,5.023,6.898,5.086c-2.528,1.96-5.712,3.134-9.174,3.134c-0.598,0-1.183-0.034-1.761-0.104C9.268,36.786,13.152,38,17.321,38c13.585,0,21.017-11.156,21.017-20.834c0-0.317-0.01-0.633-0.025-0.945C39.763,15.197,41.013,13.905,42,12.429"
                            ></path>
                        </svg>
                    </div>
                    <p className="privacy-title">
                        By clicking button above, you agree to our{' '}
                        <a href="">term of use</a> and{' '}
                        <a href="">privacy policies</a>
                    </p>
                </div>
            </div>
        </div>
    );
}

const H1 = styled.h1`
    font-size: 2em;
    margin-bottom: 0.25em;
`;
const H2 = styled.h2`
    font-size: 1.5em;
`;

const H3 = styled.h3`
    font-size: 1em;
`;

const SigninButton = styled.button`
    display: block;
    cursor: pointer;
    background-color: #043730;
    color: #fff;
    border: none;
    border-radius: 4px;
    padding: 12px 0;
    width: 400px;
    margin: 12px auto;
`;
const CreateNewButton = styled.button`
    display: block;
    cursor: pointer;
    background-color: #ee5b47;
    color: #fff;
    border: none;
    border-radius: 4px;
    padding: 12px 0;
    width: 400px;
    margin: 12px auto;
`;

