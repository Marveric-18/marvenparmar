import classNames from 'classname';

import ProfileHeader from "./components/ProfileHeader";
import AboutMe from "./components/AboutMe";

import styles from "./index.module.css";
import Experience from "./components/Experience";
import Skills from "./components/Skills";

const Home = () => {
    return( <>
          
        <div id="home"  className={classNames(styles.profileBlock, styles.sectionBlock)}>
          <div className={styles.navbarSection}>
               <nav className={styles.navbar}>
                    <ul className={styles.navLinks}>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#experience">Experience</a></li>
                    <li><a href="mailto:marvenparmar@gmail.com">Contact</a></li>
                    </ul>
               </nav>
          </div>
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