import React from 'react';
import A from "./A";
import Head from "next/head";

const MainContainer = ({children, keywords}) => {
    return (
        <>
            <Head>
            <meta keywords={'Juliana, nextjs, '+ keywords}></meta>
            <title>Главная страница</title>
            </Head>
            <div className='navBar'>
                <A text = 'Главная' href='/'/>
                <A text = 'Пользователи' href='/users'/>
            </div>
            <div>
                {children}
            </div>

            <style>
                {`
                  .navBar {
                    background: orange;
                    padding: 15px;
                  }
            `}
            </style>
        </>
    );
};

export default MainContainer;