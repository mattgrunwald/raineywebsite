import styled, {css, keyframes} from 'styled-components'
import { MOBILE, COMPUTER } from './constants'

export const containerStyle = css`
    display: flex;
    margin: 2rem;
    justify-content: center;
    align-items: center;
    @media (${COMPUTER}) {
        max-width: 28%;
        min-width: 400px;
        height: 75vh;
    }
    @media (${MOBILE}) {
        width: 100%
        height: 50vh;
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

export const Salutation = styled.h1`
    font-size: 84px;
    margin: 0;
    color: rgb(190, 211, 196);
    line-height: 1.25; 
    width: 25rem;
    font-family: 'Bungee Shade'
`