import type { NextPage } from 'next'
import Head from 'next/head'

import ComingSoon from '../../util/ComingSoon'

const Projects: NextPage = () => {
    return (
        <>
            <Head>
                <title>Projects | Portfolio</title>
            </Head>
            <ComingSoon path='projects'/>
        </>
    )

}

export default Projects