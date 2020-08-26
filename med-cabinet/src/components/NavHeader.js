import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const Header = styled.div`
    width: 100%;
    height: 90px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 40px 10px 40px;
    background: rgba(0, 100, 0, .2);
    color: white;
    span {
        width: 50px;
        height: 50px;
        img {
            max-width: 100%;
        }
    }
    div {
        width: 50%;
        display: flex;
        justify-content: space-between;
        a {
            color: #007e00;
            &:hover {
                color: #04f204;
            }
        }
    }
`;

const NavHeader = () => {

    return (
        <Header>
            <span><img src='https://smallimg.pngkey.com/png/small/60-600941_cannabis-registration-green-medical-cross-logo.png' alt='medicinal marijuana cross' /></span>
            <div>
                <a href='https://medcabinet4.netlify.app/'>Marketing Page</a>
                <NavLink to='/'>Login / SignUp</NavLink>
                {window.localStorage.getItem('token') ? <NavLink to='/user-form'>Find Recommendations</NavLink> : null}
            </div>
        </Header>
    )
}

export default NavHeader