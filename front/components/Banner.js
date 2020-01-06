import React from 'react';
import Head from 'next/head';
import { Menu, Icon, Carousel } from 'antd';

const Banner = () => {
    return (
        <>
        <Head>
            <title>대출해드림</title>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.16.2/antd.css" />
            <link
                rel="stylesheet"
                href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
                integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
                crossorigin="anonymous"
            />
        </Head>
        <Carousel autoplay>
            <img 
                src="http://www.a-lemon.co.kr/theme/daontheme_business07/html/image/pc_bg1.jpg"
                alt="new"
            />
            <img 
                src="http://www.a-lemon.co.kr/theme/daontheme_business07/html/image/pc_bg2.jpg"
                alt="new"
            />
            <img 
                src="http://www.a-lemon.co.kr/theme/daontheme_business07/html/image/pc_bg3.jpg"
                alt="new"
            />
        </Carousel>
        </>
    )
}

export default Banner;