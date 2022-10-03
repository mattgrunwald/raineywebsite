import styled, {css} from 'styled-components'
import Link from 'next/link'

import { containerStyle } from '../../util/shared'

export default function Circles() {
    return (
        <Container>
            <Img src='/rainey.webp' alt="This is Rainey Grunwald"/>
            <CircleLinks>
                <Link href='/projects'>
                    <Projects>Projects</Projects>
                </Link>
                <Link href='/contact'>
                    <Contact>Contact</Contact>
                </Link>
            </CircleLinks>
        </Container>
    )
}

const Container = styled.div`
    ${containerStyle}
    padding-top: 4rem;
    flex-direction: column;
`

const Img = styled.img`
    object-fit: contain;
    border: 5px solid rgb(190, 211, 196);
    border-radius: 50%;
    max-width: 425px;
    `

const CircleLinks = styled.div`
    margin-top: 2rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

const circleLink = css`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    height: 8rem;
    width: 8rem;
    font-size: 24px;   
    &:hover {
        cursor: pointer
    }
`

const Projects = styled.div`
    ${circleLink}
    background-color: rgb(255, 195, 195);
    margin-right: .5rem;

    &:hover {
        background-color:  rgb(255, 134, 135);
        color: #f2f2f2;
    }
`

const Contact = styled.div`
    ${circleLink}
    background-color: rgb(202, 223, 228);
    margin-left: .5rem;

    &:hover {
        background-color:  rgb(162, 178, 182);
        color: #f2f2f2;
    }
`