import * as React from 'react';
import styled from "styled-components";
import './styles.css';

export default function AddMore () {
    return (
        <Card>
            <CardIcon className='card-icon'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
            </CardIcon>
            <CardName>Add Account</CardName>
        </Card>
    )
}

const Card = styled.div`
    width: 100px;
    height: 100px;
    background-color: #EE5B47;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const CardIcon = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: rgba(255,255,255, .4);
`

const CardName = styled.div`
    font-size: 12px;
    color: #fff;
    margin-top: 12px;
    font-weight: 500;
`