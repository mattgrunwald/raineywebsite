import styled from 'styled-components'
import { containerStyle, Salutation, About } from '../../util/shared'

export default function Text() {
    return (
        <Container>
            <div>
                <Salutation>HELLO THERE!</Salutation>
                <About>
                    Nice to meet you! My name is Rainey, and I&#39;m a lover of all things art and design. I have over 6 years experience in graphic design and illustration work, and 3 years experience owning my own business. I think design should be meaningful, accessible, and fun! I love learning new things and using empathy to produce unique solutions to everyday problems.
                </About>
            </div>
        </Container>
    )
}

const Container = styled.div`
    ${containerStyle}
`

