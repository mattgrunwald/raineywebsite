import type { NextPage } from 'next'
import Head from 'next/head'

import ComingSoon from '../../util/ComingSoon'

const Contact: NextPage = () => {
    return (
        <>
            <Head>
                <title>Contact | Portfolio</title>
            </Head>
            <ComingSoon path='contact'/>
        </>
    )

}

export default Contact