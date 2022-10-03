import Link from 'next/link'
import styled from 'styled-components'

type NavItemProps = {
    href: string
    children?: React.ReactNode;
}
export default function NavItem(props: NavItemProps) {
    return (
        <Item>
            <Link href={props.href} passHref>
                <CoolLink>{props.children}</CoolLink>
            </Link>
        </Item>
    )
}

const Item = styled.span`
    padding: 0 1rem;
`

const CoolLink = styled.a`
    outline: none;
    text-decoration: none;

    &:link,
    &:visited,
    &:focus {
    color: black;
    }
`