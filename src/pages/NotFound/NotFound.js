import React from 'react';
import './notFound.css';
import Header from '../../components/ui/Header/Header';

// This is static top section of the page and gives it semantic value.
function NotFound() {
    return (
        <div className="g__footer-pin">
            <Header
                backWord="NOT FOUND"
                title="404"
                subTitleOne={`Ups! Esta página no existe o está en manteniemiento.`}
            />
           
        </div>
    )
}


export default NotFound;