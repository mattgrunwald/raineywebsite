import{css} from 'styled-components'
import { MOBILE, COMPUTER } from '../../util/constants'

export const containerStyle = css`
    display: flex;
    margin: 2rem;
    align-items: center;
    @media (${COMPUTER}) {
        max-width: 28%;
        min-width: 425px;
        height: 70vh;
    }
    @media (${MOBILE}) {
        width: 100%
        height: 50vh;
    }
`