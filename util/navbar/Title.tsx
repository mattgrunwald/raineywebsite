import Link from 'next/link'
import styled from 'styled-components'


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
                <div>UX/UI Designer / Graphic Designer / Illustrator</div>
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
`