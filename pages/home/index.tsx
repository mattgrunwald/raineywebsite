import type { NextPage } from 'next'

import { Container } from '../../util/shared'

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

export default Home