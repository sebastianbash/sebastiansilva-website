import React, { Suspense, lazy } from 'react';
import './contact.css';
import Header from '../../components/ui/Header/Header';

const ContactForm = lazy(() => import('../../components/contact/ContactForm/ContactForm'));



function Contact() {
    return (
        <div className="g__footer-pin">
            <Header
                title="Contacto"
                subTitleOne={`Estamos a un paso de lograr cosas asombrosas.`}
            />

            <Suspense fallback={<div>Cargando…</div>}>
                <ContactForm />

            </Suspense>

        </div>
    )
}


export default Contact;