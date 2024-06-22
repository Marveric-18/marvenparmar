import React from "react";
import classNames from 'classname';

import ProfileHeader from "./components/ProfileHeader";


import styles from "./index.module.css";

const Home = () => {
    return( <>
        <div className={classNames(styles.profileBlock, styles.sectionBlock)}>
          <ProfileHeader />
        </div>
        {/* <div style={{backgroundColor: "red", minHeight: "100vh"}}>
             Marven Home Page 2
        </div> */}
        
        </>)
}


export default Home;