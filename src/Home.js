import React from "react";
import classNames from 'classname';

import ProfileHeader from "./components/ProfileHeader";
import AboutMe from "./components/AboutMe";

import styles from "./index.module.css";
import Experience from "./components/Experience";
import Skills from "./components/Skills";

const Home = () => {
    return( <>
        <div className={classNames(styles.profileBlock, styles.sectionBlock)}>
          <ProfileHeader />
        </div>
        <div className={classNames(styles.deviderBlock)}>

        </div>
        <div className={classNames(styles.sectionBlock)}>
             <AboutMe />
        </div>
        <div className={classNames(styles.deviderBlock)}>

        </div>
        <div className={classNames(styles.sectionBlock)}>
             <Skills />
        </div>
        <div className={classNames(styles.deviderBlock)}>

        </div>
        <div className={classNames(styles.sectionBlock)}>
             <Experience />
        </div>
        
        </>)
}


export default Home;