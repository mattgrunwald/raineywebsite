import styled from "styled-components"
import { COLUMN } from "./constants"

import { SmallSalutation, About} from './shared'

type ComingSoonProps = {
    path: string
}
export default function ComingSoon(props: ComingSoonProps) {
    const url = `https://raineywullenweber.wixsite.com/portfolio/${props.path}`
    return (
        <Container>
            <Centered>
                <SmallSalutation>Coming Soon!</SmallSalutation>
                <About>In the meantime you can check out my Wix site <a href={url}>here</a></About>
            </Centered>
        </Container>
    )
}

const Centered = styled.div`
    width: 30rem;
    height: 70vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const P = styled.div`
    margin-top: 1rem;
`
const Container = styled.div`
    display: flex;   
    justify-content: center;
    align-items: center;
    // ${COLUMN}
`
