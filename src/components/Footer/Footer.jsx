import React from "react";
import Container from "../Container/Container";
import FooterNavigation from '../FooterNavigation'
import SubscriptionForm from "../SubscriptionForm";
import s from './Footer.module.css'

const Footer = () => {
    return (
        <Container>
            <div className={s.section}>
                <SubscriptionForm/>
                <FooterNavigation />
            </div>
           
        </Container>
    )
}

export default Footer