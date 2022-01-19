import React from "react";
import Footer from '../../components/Footer'
import s from './HomePageView.module.css'

const HomePageView = () => {
    return (
        <div className={s.wrapper}>
            <div className={s.header}>
                <h1 className={s.sectionTitle}> Header</h1>
            </div>
            <div className={s.main}>
                <h2 className={s.sectionTitle}>Main</h2>
            </div>
            <div className={s.footer}>
                <Footer/>
            </div>
            
        </div>
    )
}

export default HomePageView