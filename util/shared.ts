import styled, {css, keyframes} from 'styled-components'
import { MOBILE, COMPUTER } from './constants'

export const containerStyle = css`
    display: flex;
    margin: 2rem;
    justify-content: center;
    align-items: center;
    @media (${COMPUTER}) {
        max-width: 45%;
        min-width: 350px;
        height: 75vh;
    }
    @media (${MOBILE}) {
        width: 90vw%;
    }
`

const fadeIn = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`

export const Container = styled.div`
    display: flex;   
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    animation: ${fadeIn} .5s linear;
    transition: visibility .5s linear;

`

export const textStyles = css`
    @media(${COMPUTER}) {
        width: 25rem;
    }

    @media(${MOBILE}) {
        width: 20rem;
    }
`

const salutationStyles = css`
    margin: 0;
    color: rgb(190, 211, 196);
    line-height: 1.25; 
    ${textStyles}
    font-family: 'Bungee Shade';
`

export const Salutation = styled.h1`
    ${salutationStyles}
    @media (${COMPUTER}) {
        font-size: 84px;
    }

    @media (${MOBILE}) {
        font-size: 72px;
    }
`

export const SmallSalutation = styled.h1`
    ${salutationStyles}
    @media (${COMPUTER}) {
        font-size: 84px;
    }

    @media (${MOBILE}) {
        font-size: 64px;
    }
`

export const About = styled.p`
    margin-top: 1rem;
    ${textStyles}
`