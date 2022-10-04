import type { NextPage } from 'next'
import Head from 'next/head'

import { Container } from '../../util/shared'

import Circles from './Circles'
import Text from './Text'

const Home: NextPage = () => {
    return (
    <Container>
        <Head>
            <title>Home | Portfolio</title>
        </Head>
        <Circles/>
        <Text />
    </Container>
    )
}

export default Home