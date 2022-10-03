
import styled from 'styled-components'
import Title from './Title'
import NavItems from './NavItems'

const Header = styled.header`
height: 10vh;
`

const Nav = styled.div`
    margin: 0 1rem;
    display: flex;
    justify-content: space-between;
`

export default function Navbar() {
    return (
        <Header>
            <Nav>
                <Title />
                <NavItems />
            </Nav>
        </Header>
    )
}