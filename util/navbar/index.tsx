
import styled from 'styled-components'
import Title from './Title'
import NavItems from './NavItems'
import Burger from './Burger'

export default function Navbar() {
    return (
        <Header>
            <Nav>
                <Title />
                <NavItems />
                <Burger />
            </Nav>
        </Header>
    )
}

const Header = styled.header`
    height: 10vh;
`

const Nav = styled.div`
    margin: 0 .5rem;
    display: flex;
    justify-content: space-between;
`