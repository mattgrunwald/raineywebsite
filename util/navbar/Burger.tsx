import styled from 'styled-components'
import { slide as Menu } from 'react-burger-menu'

import { computerHide } from '../shared'
import { useState } from 'react'
import Link from 'next/link'

export default function Burger() {
    const [isOpen, setOpen] = useState(false)
    
    function handleClick() {
        setOpen(false)
    }

    function handleChange(state: any) {
        setOpen(state.isOpen)
    }
    return (
        <BurgerContainer>
            <Menu right isOpen={isOpen} onStateChange={handleChange} styles={styles}>
                <Item>
                    <Link id="home" className="menu-item" href="/home"><A onClick={handleClick}>Home</A></Link>
                </Item>
                <Item>
                    <Link id="projects" className="menu-item" href="/projects"><A onClick={handleClick}>Projects</A></Link>
                </Item>
                <Item>
                    <Link id="contact" className="menu-item" href="/contact"><A onClick={handleClick}>Contact</A></Link>
                </Item>
            </Menu>
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

const styles = {
    bmBurgerButton: {
      position: 'fixed',
      width: '36px',
      height: '30px',
      right: '18px',
      top: '18px'
    },
    bmBurgerBars: {
      background: '#373a47'
    },
    bmBurgerBarsHover: {
      background: '#a90000'
    },
    bmCrossButton: {
      height: '36px',
      width: '36px'
    },
    bmCross: {
      background: 'white'
    },
    bmMenuWrap: {
      position: 'fixed',
      height: '100%'
    },
    bmMenu: {
      background: 'var(--mint-green)',
      padding: '2.5em 1.5em 0',
      fontSize: '1.15em'
    },
    bmMorphShape: {
      fill: '#373a47'
    },
    bmItemList: {
      color: '#b8b7ad',
      padding: '0.8em'
    },
  }