import * as React from 'react';
import styled from "styled-components";

export default function UserCard () {
    return (
        <Card>
            <CardAvatar src="https://i.pravatar.cc/300" alt="" />
            <CardName>Zain Sajid</CardName>
        </Card>
    )
}

const Card = styled.div`
    width: 100px;
    height: 100px;
    background-color: #FFF;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const CardAvatar = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
`

const CardName = styled.div`
    font-size: 12px;
    color: #043730;
    margin-top: 12px;
    font-weight: 500;
`