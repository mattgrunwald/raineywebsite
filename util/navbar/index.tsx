
import styled from 'styled-components'
import Title from './Title'
import NavItems from './NavItems'
import { COMPUTER } from '../constants'

const Header = styled.header`
    height: 10vh;
`

const Nav = styled.div`
    margin: 0 1rem;
    display: flex;
    justify-content: space-between;
    ${COMPUTER}
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