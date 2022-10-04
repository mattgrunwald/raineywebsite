import Link from 'next/link'
import styled from 'styled-components'
import { MOBILE } from '../constants'

import { mobileHide } from '../shared'


export default function Title() {
    return (
        <TitleContainer>
            <LogoContainer>
                <Link href='/'>
                    <Logo src='/raindrops.webp'/>
                </Link>
            </LogoContainer>
            <div >
                <Link href='/'>
                    <Name><b>Rainey Grunwald</b></Name>
                </Link>
                <Subheading>UX/UI Designer / Graphic Designer / Illustrator</Subheading>
            </div>
        </TitleContainer>
    )
}

const TitleContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin-left: 1rem;
`
const LogoContainer = styled.div`
    margin-top: .5rem;
    flex: 1;
`

const Logo = styled.img`
    height: 3.6rem;
    margin-right: 1rem;
    object-fit: contain;

    &:hover {
        cursor: pointer;
    }
`

const Name = styled.div`
    margin-right: 1rem;
    font-size: 24px;   
    
    &:hover {
        cursor: pointer;
    }

    @media(${MOBILE}) {
        margin-top: .25rem;
    }
`

const Subheading = styled.div`
    ${mobileHide}
`