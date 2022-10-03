import styled from 'styled-components'

import NavItem from './NavItem'

const Container = styled.div`
    margin-top: 1rem;
`

export default function NavItems() {
    return (
        <Container>
            <NavItem href='/home'>Home</NavItem><NavItem href='/projects'>Projects</NavItem><NavItem href='/contact'>Contact</NavItem>
        </Container>
    )
}