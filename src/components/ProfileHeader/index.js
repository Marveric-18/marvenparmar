import React from "react";
import classNames from "classname";

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import ArticleIcon from '@mui/icons-material/Article';
import IconButton from '@mui/material/IconButton';
import MarvenProfileHeader from "../../assets/images/HeadShot.png";
import MavrenResumePDF from '../../assets/files/MavrenResumePDF.pdf';
import styles from "./index.module.css";

const ProfileHeader = () => {
    return(
        <div className={classNames(styles.profileHeader)}>
            <div className={classNames(styles.profilePictureBlock1)}>
                <img alt="MyProfilePicture" className={classNames(styles.profileHeaderImage, styles.profilePicture)} src={MarvenProfileHeader} /> 
            </div>
            <div className={classNames(styles.profilePictureBlock2)}>
                <div className={classNames(styles.profileTitle)}>
                    <h1 className={classNames(styles.profileTitleText)}>Marven Parmar</h1>
                    <h4 className={classNames(styles.profileSemiTitle)}>Software Engineer / Full Stack Developer</h4>
                </div> 
                <div className={classNames(styles.profileFooter)}>
                    <IconButton onClick={ () => window.open('https://github.com/Marveric-18', '_blank')}>
                        <GitHubIcon className={classNames(styles.largeIcon)}/>
                    </IconButton> 
                    <IconButton onClick={ () => window.open('https://www.linkedin.com/in/marven-parmar/', '_blank')}>
                        <LinkedInIcon className={classNames(styles.largeIcon)}/>
                    </IconButton> 
                    <IconButton onClick={ () => window.open('https://www.instagram.com/captain_marveric_018/', '_blank')} >
                        <InstagramIcon className={classNames(styles.largeIcon)}/>
                    </IconButton>
                    <IconButton onClick={ () => window.location.href = 'mailto:marvenparmar@gmail.com'} >
                        <EmailIcon className={classNames(styles.largeIcon)}/>
                    </IconButton>
                    <IconButton >
                        <a href={MavrenResumePDF} target="_blank" rel="noreferrer">
                            <ArticleIcon download="resume.pdf" className={classNames(styles.largeIcon)}/>
                        </a>
                    </IconButton>
                </div>
            </div>
        </div>
    )
}



export default ProfileHeader;