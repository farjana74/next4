import React from 'react';

import Image from 'next/image';

import teamBg from '../pages/images/Badge.png';
import styles from '../styles/Team.module.css';

const Team = () => {
    return (
        <div className='position-relative'>
            <div className={styles.team}>
            <div className={`${styles.award} position-absolute top-20 start-50 translate-middle`}>
                        <Image className='w-100' src={teamBg} alt="" />
                    </div>
            
            </div>
        </div>
    );
};

export default Team;