import type { NextPage } from 'next'
import styled, {keyframes} from 'styled-components'

import Circles from './Circles'
import Text from './Text'

const Home: NextPage = () => {
    return (
    <Containers>
        <Circles/>
        <Text />
    </Containers>
    )
}

const fadeIn = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`

const Containers = styled.div`
    display: flex;   
    flex-direction: row;
    justify-content: center;
    align-items: center;
    animation: ${fadeIn} .5s linear;
    transition: visibility .5s linear;
`



export default Home