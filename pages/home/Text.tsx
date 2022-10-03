import styled from 'styled-components'

export default function Text() {
    return (
        <Container>
            <div>
            <Salutation>HELLO THERE!</Salutation>
            <About>
                Nice to meet you! My name is Rainey, and I&#39m a lover of all things art and design. I have over 6 years experience in graphic design and illustration work, and 3 years experience owning my own business. I think design should be meaningful, accessible, and fun! I love learning new things and using empathy to produce unique solutions to everyday problems.
            </About>
            </div>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    max-width: 28%;
    height: 70vh;
    margin: 2rem;
    align-items: center;
`

const Salutation = styled.h1`
    font-size: 84px;
    margin: 0;
    /* padding-bottom: 0; */
    color: rgb(190, 211, 196);
    line-height: 1.25; 
    max-width: 1px;
    font-family: 'Bungee Shade'
`

const About = styled.p`
    margin-top: 1rem;
`