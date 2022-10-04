import styled, {keyframes} from 'styled-components'
import Hamburger from 'hamburger-react'

import { computerHide } from '../shared'
import { useState } from 'react'
import Link from 'next/link'

export default function Burger() {
    const [isOpen, setOpen] = useState(false)
    
    function close() {
        setOpen(false)
    }

    function handleChange(state: any) {
        setOpen(state.isOpen)
    }

    function handleClick() {
        setOpen(!isOpen)
    }
    return (
        <BurgerContainer>
            <Hamburger toggled={isOpen} toggle={handleClick}/>
            { isOpen && 
                <Menu>
                    <Item>
                        <Link id="home" href="/home"><A onClick={close}>Home</A></Link>
                    </Item>
                    <Item>
                        <Link id="projects" href="/projects"><A onClick={close}>Projects</A></Link>
                    </Item>
                    <Item>
                        <Link id="contact" href="/contact"><A onClick={close}>Contact</A></Link>
                    </Item>
                </Menu>
            
            }
        </BurgerContainer>
    )
}

const BurgerContainer = styled.div`
    ${computerHide}
`

const Item = styled.div`
 margin: 1rem 0;
`

const A = styled.span`
    color: white;
    font-size: 24px;
    cursor: pointer;
`

const fadeIn = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`

const Menu = styled.div`
    width: 250px;
    height: 100vh;
    position: fixed;
    left: 0;
    top: 0;
    background-color: var(--mint-green);
    padding: 2.5em 1.5em 0;
    fontSize: 1.15em;
    animation: ${fadeIn} .25s linear;
    transition: 10s;
    left: 0;
`