import React from 'react';

import Image from 'next/image';

import imgRightBottom from '../pages/images/Image (Bottom-Right).png';
import imgLeft from '../pages/images/Image (Left).png';
import imgRightTop from '../pages/images/Image (Top-Right).png';
import styles from '../styles/Service.module.css';

const Service = () => {
    return (
        <div className='container-fluid py-5'>
            <h1 className={styles.serviceContent}>Glimpses</h1>
            <h6  className={styles.serviceDescription}>Our workplace can be best previewed in photos</h6>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6'>
                        <Image src={imgLeft} alt="" />

                    </div>
                    <div className='col-md-5'>
                    <Image className='' src={imgRightTop} alt="" />
                    <Image className="pt-3" src={imgRightBottom} alt="" />
                    </div>

                </div>


            </div>
            
        </div>
    );
};

export default Service;