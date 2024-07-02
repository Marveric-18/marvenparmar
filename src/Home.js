import React from "react";
import classNames from 'classname';

import ProfileHeader from "./components/ProfileHeader";
import AboutMe from "./components/AboutMe";

import styles from "./index.module.css";

const Home = () => {
    return( <>
        <div className={classNames(styles.profileBlock, styles.sectionBlock)}>
          <ProfileHeader />
        </div>
        <div className={classNames(styles.sectionBlock)}>
             <AboutMe />
        </div>
        
        </>)
}


export default Home;