/* eslint-disable max-len */
import React from 'react'; 
import Styles from './social.css'; 

const SocialButtons = (currentPage) => {
  return (
    <div>
      <ul className={Styles.socialShareLinks}>
        <li>
          <a className={Styles.facebook} href={`https://www.facebook.com/sharer.php?u=${currentPage}`} target="_blank" rel="nofollow noreferrer">
            <img src="fb.svg" alt="Facebook"/>
          </a>
        </li>
        <li>
          <a className={Styles.twitter} href={`https://twitter.com/intent/tweet?url=${currentPage}&text=Check%20this%20out:`} target="_blank" rel="nofollow noreferrer">
            <img src="twitter.svg" alt="Twitter"/>
          </a>
        </li>
        <li>
          <a className={Styles.linkedin} href={`https://www.linkedin.com/shareArticle?mini=true&url=${currentPage}&title=Check%20this%20out&summary=An amazing article!&source=`} target="_blank" rel="nofollow noreferrer">
            <img src="linkedin.svg" alt="Linkedin"/>
          </a>
        </li>  
        <li>
          <a className={Styles.reddit} href={`http://reddit.com/submit?url=${currentPage}&title=Check%20this%20out`} target="_blank" rel="nofollow noreferrer">
            <img src="reddit.svg" alt="Reddit"/>
          </a>
        </li>
        <li>
          <a className={Styles.mail} href={`mailto:?subject=Check out this website&body=Thought you might like this: ${currentPage}`} target="_blank" rel="noreferrer">
            <img src="mail.svg" alt="Email to a friend"/>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialButtons;
