import type { NextPage } from 'next'
import styled from 'styled-components'

import Circles from './Circles'
import Text from './Text'

const Home: NextPage = () => {
    return (
    <Container>
        <Circles/>
        <Text />
    </Container>
    )
}

const Container = styled.div`
    display: flex;   
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

export default Home