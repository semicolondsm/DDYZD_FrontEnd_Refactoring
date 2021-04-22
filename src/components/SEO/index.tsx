import Head from 'next/head'
import { FC } from 'react'
interface Props{
    title: string,
    description?: string,
    image : string,
}
const SEO : FC<Props> = ({title, description, image}) =>{
    return(
        <Head>
            <title>{title} - DDYZD 대동여지도</title>
            {description && <meta name='description' content={description} />}
            <meta name='og:site_name' content='DDYZD 대동여지도' />
            {description && <meta name='og:description' content={description} />}
            <meta name='og:image' content={`${process.env.NEXT_PUBLIC_BASEURL}/file/${image}`} />
        </Head>
    )
}
export default SEO;