import React from 'react'
import { Helmet } from 'react-helmet'
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children, title, description, keywords, author }) => {
    return (
        <>
            <Helmet>
                <meta charset="UTF-8" />
                <meta name="description" content={description} />
                <meta name="keywords" content={keywords} />
                <meta name="author" content={author} />
                <title>{title}</title>
            </Helmet>
            <Navbar />
            <main style={{ width: "auto", height: "auto" }}>
                {children}

            </main>

            <Footer />
        </>
    )
}

Layout.defaultProps = {
    title: "Employee System",
    description: "React Js Projects",
    keywords: "React JS, API",
    author: "Sahil Mallick",
};

export default Layout