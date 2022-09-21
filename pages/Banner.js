import React from 'react';

import Image from 'next/image';

import bannerSecond from '../pages/images/Blob.png';
import styles from '../styles/Banner.module.css';

const Banner = () => {
    return (
        <div className={styles.banner}>
            <div className='container'>
                <div className='row  align-items-center justify-content-center'>
                <div className='col-md-7 '>
               <div className={styles.bannerFirst}>
                     
               <div>
               <h1 className={styles.bannerContent}>
                A Venture with Passion
                </h1>
              <p className={styles.bannerDescription}>
              Continually whiteboard viral ROI with functional e-services. <br/> Enthusiastically fabricate equity invested communities rather than cross <br/>
              -media markets.
              </p>

              <button type="button" className={styles.button}>GET QUOTE</button>
               </div>
               </div>
                

                </div>

                 <div className='col-md-5 '>

                    <Image className='w-100' src={bannerSecond} alt="" />
                           </div>

                </div>

            </div>
            
        </div>
    );
};

export default Banner;