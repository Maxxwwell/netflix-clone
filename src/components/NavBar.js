import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

function NavBar() {

    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 200) {
                handleShow(true);
            } else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll");
        }
    }, []);

    return (
        show ? (
            <NavContainerBlack>
                <Logo
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png"
                    alt="Netflix Logo"
                />

                <Avatar
                    src="https://i.pinimg.com/originals/7c/c7/a6/7cc7a630624d20f7797cb4c8e93c09c1.png"
                    alt="Avatar"
                />

            </NavContainerBlack>
        ) : (
            <NavTransparent>
                <Logo
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png"
                    alt="Netflix Logo"
                />

                <Avatar
                    src="https://i.pinimg.com/originals/7c/c7/a6/7cc7a630624d20f7797cb4c8e93c09c1.png"
                    alt="Avatar"
                />
            </NavTransparent>
        )

    )
}

export default NavBar

const NavContainerBlack = styled.div`
    position: fixed;
    display: flex;
    top: 0;
    width: 100%;
    justify-content: space-between;
    padding: 20px;
    background-color: #111;
    height: 10px;
    z-index: 1;
    transition-timing-function: ease-in;
    transition: all 1s;
`

const NavTransparent = styled.div`
    position: fixed;
    display: flex;
    top: 0;
    width: 100%;
    justify-content: space-between;
    padding: 15px;
    height: 10px;
    z-index: 1;
    transition-timing-function: ease-in;
    transition: all 1s;
`

const Logo = styled.img`
    width: 80px;
    object-fit: contain;
    position: fixed;
    left: 10px;
    cursor: pointer;
`

const Avatar = styled.img`
    width: 30px;
    object-fit: contain;
    position: fixed;
    right: 20px;
    top: 10px;
    cursor: pointer;
`