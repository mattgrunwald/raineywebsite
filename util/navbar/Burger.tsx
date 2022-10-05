import styled, {keyframes, css} from 'styled-components'
import Hamburger from 'hamburger-react'

import { computerHide } from '../shared'
import { useState } from 'react'
import Link from 'next/link'

export default function Burger() {
    const [isOpen, setOpen] = useState(false)
    
    function close() {
        setOpen(false)
    }

    function handleClick() {
        setOpen(!isOpen)
    }

    return (
        <BurgerContainer>
            <Hamburger toggled={isOpen} toggle={handleClick}/>
                <div style={{
                    width: '250px',
                    position: 'fixed',
                    height: '100vh',
                    left: '-300px',
                    top: '0',
                    backgroundColor: 'var(--mint-green)',
                    padding: '2.5em 1.5em 0',
                    transform: isOpen?  'translate3d(300px, 0, 0)': '',
                    transition: 'all 0.5s',
                }}>
                    <Item>
                        <Link id="home" href="/home"><A onClick={close}>Home</A></Link>
                    </Item>
                    <Item>
                        <Link id="projects" href="/projects"><A onClick={close}>Projects</A></Link>
                    </Item>
                    <Item>
                        <Link id="contact" href="/contact"><A onClick={close}>Contact</A></Link>
                    </Item>
                </div>
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
