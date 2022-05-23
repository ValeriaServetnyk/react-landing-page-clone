/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import iphone from './image/archive.png';
import cleanemail from './image/clean-email.png';
import fireball from './image/daring-fireball.png';
import appstore from './image/download.svg';
import email from './image/email.svg';
import envelop from './image/envelop.svg';
import hammer from './image/hammer.svg';
import hero from './image/hero.png';
import icon from './image/hero.svg';
import phone from './image/keep.png';
import like from './image/like.svg';
import maclife from './image/maclife.png';
import macstories from './image/macstories.png';
import macworld from './image/macworld.svg';
import moon from './image/moon.svg';
import protection from './image/protection.svg';
import stamp from './image/stamp.svg';
import verge from './image/the-verge.svg';
import twitter from './image/twitter.svg';

const heroPageStyles = css`
background-color: rgba(0, 122, 255, 1);
max-width: 1280px;
width: 100%;
`;

const heroTextContainer = css`
max-width: 72rem;
padding-top: 6rem;
display: flex;
flex-direction: row;
padding-left: 8rem;
gap: 171px;
`;

const heroAppIcon = css`
width: 80px;
margin-top: 6rem;
`;

const heroAppStore = css`
width: 186px;
height: 61px;
margin-top: 1.5rem;
`;

const heroPhoneIcon = css`
width: 395px;
height: 610px;
`;

const heroHeaderStyles = css`
font-size: 48px;
line-height: 1;
font-weight: 600;
color: rgba(255,255,255,1);
margin-top: 1.5rem;
margin-bottom: 1rem;
`;

const heroParagraphStyles = css`
 font-size: 24px;
  line-height: 2rem;
  opacity: 0.7;
  color: rgba(255,255,255,1);
  font-weight: bold;
  margin-top: 1rem;
`;

const redPageStyles = css`
background-color: rgba(255,45,85, 1);
max-width: 1280px;
width: 100%;
`;

const redTextContainer = css`
max-width: 72rem;
display: flex;
flex-direction: row;
padding-left: 8rem;
padding-right: 3rem;
padding-bottom: 5rem;
gap: 180px;
width: 85%;
`;

const redPhoneIcon = css`
width: 395px;
height: 610px;
`;

const redHeaderStyles = css`
font-size: 30px;
line-height: 1;
font-weight: 600;
color: rgba(255,255,255,1);
margin-top: 1.5rem;
margin-bottom: 1rem;
`;

const redParagraphStyles = css`
font-size: 24px;
  line-height: 2rem;
  opacity: 0.7;
  color: rgba(255,255,255,1);
  font-weight: bold;
  margin-top: 1rem;
`;

const redArrowIcon = css`
width: 3rem;
padding-top: 6rem;
`;


const blackPageStyles = css`
background-color: rgba(0, 0, 0, 1);
max-width: 1280px;
width: 100%;
`;

const blackTextContainer = css`
max-width: 72rem;
padding-top: 0rem;
display: flex;
flex-direction: row;
padding-left: 8rem;
gap: 171px;
padding-bottom: 5rem;
`;

const blackPhoneIcon = css`
width: 395px;
height: 610px;
`;

const blackHeaderStyles = css`
font-size: 30px;
line-height: 1;
font-weight: 600;
color: rgba(255,255,255,1);
margin-top: 1.5rem;
margin-bottom: 1rem;
`;

const blackParagraphStyles = css`
font-size: 24px;
  line-height: 2rem;
  opacity: 0.7;
  color: rgba(255,255,255,1);
  font-weight: bold;
  margin-top: 1rem;
`;

const blackArrowIcon = css`
width: 3rem;
padding-top: 6rem;
`;

const whitePageStyles = css`
background-color: rgba(229,231,235,0);
max-width: 1280px;
width: 100%;
`;

const firstCommentPic = css`
width: 173px;
height: 32px;
margin-top: 1rem;
`;

const secondCommentPic = css`
width: auto;
height: 1.25rem;
margin-top: 1.5rem;
`;

const thirdCommentPic = css`
width: auto;
height: 1.25rem;
margin-top: 1.5rem;
`;

const forthCommentPic = css`
width: auto;
height: 1.5rem;
margin-top: 1rem;
`;

const fifthCommentPic = css`
width: auto;
height: 2rem;
margin-top: 0.8rem;
`;

const sixthCommentPic = css`
width: auto;
height: 2rem;
margin-top: 4rem;
`;

const feedbackContainer =css`
display: grid;
grid-template-columns: repeat(3,minmax(0,1fr));
max-width: 70rem;
padding-top: 3rem;
padding-bottom: 3rem;
padding-left: 8rem;
gap: 2rem;
`;

const whiteHeaderStyles = css`
font-size: 30px;
line-height: 1;
font-weight: 600;
color: rgba(0,0,0,1);
margin-top: 4.5rem;
margin-bottom: 1rem;
padding-left: 8rem;
`;

const feedbackIconsStyles = css`
text-decoration: none;
font-size: 20px;
font-weight: 300;
color: rgba(0,0,0);
`;

const commentSectionStyles = css`
border-radius: 0.75rem;
background-color: rgba(242,242,242,1);
padding: 2rem;

&:hover {
  background-color: rgba(229,231,235, 1);
}
`;

const greyPageStyles = css`
background-color: rgba(242,242,242,1);
max-width: 1280px;
width: 100%;
`;

const colorosContainer = css`
grid-template-columns: repeat(3,minmax(0,1fr));
display: grid;
grid-template-columns: repeat(3,minmax(0,1fr));
max-width: 70rem;
padding-top: 3rem;
padding-bottom: 3rem;
padding-left: 8rem;
gap: 2rem;
`;

const blueSectionStyles = css`
background-color: rgba(0,122,255,1);
padding: 1.5rem 2rem 1rem 2rem;
border-radius: 0.75rem;
`;

const blueSectionText = css`
font-size: 24px;
font-weight: 600;
color: rgba(255,255,255,1);
margin-top: 0.8rem;
`;

const firstContainerIcon = css`
width: 48px;
`;

const yellowSectionStyles = css`
background-color: rgba(255,184,0,1);
padding: 1.5rem 2rem 1rem 2rem;
border-radius: 0.75rem;
`;

const yellowSectionText = css`
font-size: 24px;
font-weight: 600;
color: rgba(0,0,0,1);
margin-top: 0.8rem;
`;

const secondContainerIcon = css`
width: 48px;
`;

const pinkSectionStyles = css`
background-color: rgba(255,45,85,1);
padding: 1.5rem 6rem 1rem 2rem;
border-radius: 0.75rem;
`;

const pinkSectionText = css`
font-size: 24px;
font-weight: 600;
color: rgba(255,255,255,1);
margin-top: 0.8rem;
`;

const thirdContainerIcon = css`
width: 48px;
`;

const blackSectionStyles = css`
background-color: rgba(0,0,0,1);
padding: 1.5rem 4rem 1rem 2rem;
border-radius: 0.75rem;
`;

const blackSectionText = css`
font-size: 24px;
font-weight: 600;
color: rgba(255,255,255,1);
margin-top: 0.8rem;
`;

const forthContainerIcon = css`
width: 48px;
`;

const purpleSectionStyles = css`
background-color: rgba(112,0,255,1);
padding: 1.5rem 2rem 1rem 2rem;
border-radius: 0.75rem;
`;

const purpleSectionText = css`
font-size: 24px;
font-weight: 600;
color: rgba(255,255,255,1);
margin-top: 0.8rem;
`;

const fifthContainerIcon = css`
width: 48px;
`;

const whiteSectionStyles = css`
background-color: rgba(255,255,255,1);
padding: 1.5rem 2rem 1rem 2rem;
border-radius: 0.75rem;
`;

const whiteSectionText = css`
font-size: 24px;
font-weight: 600;
color: rgba(0,0,0,1);
margin-top: 0.8rem;
`;

const sixthContainerIcon = css`
width: 48px;
`;

const navigationMenuStyles =css`
list-style-type: none;
display: flex;
justify-content: center;
align-items: center;
gap: 1.5rem;
font-size: 1.125rem;
line-height: 1.75rem;
margin-top: 0;
padding-top: 2rem;
padding-bottom: 1rem;

li > a {
    text-decoration: none;
    color: rgba(0,0,0,0.75);
    font-size: 1.125rem;
    line-height: 1.75rem;
    display: flex;
    align-items: center;

    &:hover {
      color: rgba(0,0,0,0.5);
    }
  }
`;

const socialMenuStyles =css`
display: flex;
justify-content: center;
gap: 1.5rem;
padding-bottom: 2rem;
`;

const footerIcons =css`
width: 24px;
display: flex;
align-items: center;
color: rgba(0,0,0,0.75);
`;

function App() {
  return (
<div>
<section css={heroPageStyles}>
<section css={heroTextContainer}>
<div>
<img css={heroAppIcon} src={icon} alt="app icon" />
<h1 css={heroHeaderStyles}>Triage is first aid for your inbox.</h1>
<p css={heroParagraphStyles}>Everything you loved about the original Triage is back, only better. Download Triage 2 on the App Store today.</p>
<img css={heroAppStore} src={appstore} alt= "app store" />
</div>
<div>
<img css={heroPhoneIcon} src={hero} alt="phone"/>
</div>
</section>
</section>
<main>
<section css={redPageStyles}>
<section css={redTextContainer}>
<div>
<img css={redPhoneIcon} src={iphone} alt="phone screen" />
</div>
<div>
<svg css={redArrowIcon} className="h-8 w-8 lg:h-12 lg:w-12 mb-4" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 24C0 10.7452 10.7452 0 24 0V0C37.2548 0 48 10.7452 48 24V24C48 37.2548 37.2548 48 24 48V48C10.7452 48 0 37.2548 0 24V24Z" fill="white" fillOpacity="0.3" />
          <path d="M12.4883 24.0039C12.4883 24.4609 12.6875 24.9414 13.0039 25.2578L20.6445 32.875C20.9961 33.2266 21.418 33.4023 21.8281 33.4023C22.8242 33.4023 23.5039 32.7109 23.5039 31.7969C23.5039 31.293 23.2812 30.8828 22.9648 30.5781L20.3398 27.9531L17.7383 25.5625L20.3047 25.7031H33.5469C34.6016 25.7031 35.3047 25.0117 35.3047 24.0039C35.3047 22.9844 34.6016 22.3047 33.5469 22.3047H20.3047L17.75 22.4453L20.3398 20.0547L22.9648 17.418C23.2812 17.1133 23.5039 16.7148 23.5039 16.1992C23.5039 15.2852 22.8242 14.5937 21.8281 14.5937C21.418 14.5937 20.9961 14.7695 20.6328 15.1328L13.0039 22.75C12.6875 23.0664 12.4883 23.5469 12.4883 24.0039Z" fill="white" />
        </svg>
<h1 css={redHeaderStyles}>Drag left to archive.</h1>
<p css={redParagraphStyles}>Unread messages appear in a stack of cards, like this.</p>
</div>
</section>
</section>
<section css={blackPageStyles}>
<section css={blackTextContainer}>
<div>
  <svg css={blackArrowIcon} className="h-8 w-8 lg:h-12 lg:w-12 mb-4" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" />
          <path d="M0 24C0 10.7452 10.7452 0 24 0V0C37.2548 0 48 10.7452 48 24V24C48 37.2548 37.2548 48 24 48V48C10.7452 48 0 37.2548 0 24V24Z" fill="white" fillOpacity="0.2" />
          <path d="M35.3047 24.0039C35.3047 23.5469 35.1055 23.0664 34.7891 22.75L27.1602 15.1328C26.7969 14.7695 26.375 14.5937 25.9648 14.5937C24.9687 14.5937 24.2891 15.2852 24.2891 16.1992C24.2891 16.7148 24.5117 17.1133 24.8281 17.418L27.4531 20.0547L30.043 22.4453L27.4883 22.3047H14.2461C13.1914 22.3047 12.4883 22.9844 12.4883 24.0039C12.4883 25.0117 13.1914 25.7031 14.2461 25.7031H27.4883L30.0547 25.5625L27.4531 27.9531L24.8281 30.5781C24.5117 30.8828 24.2891 31.293 24.2891 31.7969C24.2891 32.7109 24.9687 33.4023 25.9648 33.4023C26.375 33.4023 26.7969 33.2266 27.1484 32.875L34.7891 25.2578C35.1055 24.9414 35.3047 24.4609 35.3047 24.0039Z" fill="white" />
<h1 css={blackHeaderStyles}>Drag right to keep</h1>
<p css={blackParagraphStyles}>Or create your own custom workflow.</p>
</div>
<div>
<img css={blackPhoneIcon} src={phone} alt="phone" />
</div>
</section>
</section>
<section css={greyPageStyles}>
<div css={colorosContainer}>
  <div css={blueSectionStyles}>
  <div>
    <img css={firstContainerIcon} src={envelop} alt="" />
    </div>
    <div>
    <h1 css={blueSectionText}>Works with Gmail,
iCloud & IMAP
    </h1>
    </div>
  </div>
  <div css={yellowSectionStyles}>
  <div>
    <img css={secondContainerIcon} src={stamp} alt="" />
    </div>
    <div>
    <h1 css={yellowSectionText}>All processing
happens on device
    </h1>
    </div>
  </div>
  <div css={pinkSectionStyles}>
  <div>
    <img css={thirdContainerIcon} src={protection} alt=""/>
    </div>
    <div>
    <h1 css={pinkSectionText}>Your data is
yours to stay
    </h1>
    </div>
  </div>
  <div css={blackSectionStyles}>
  <div>
    <img css={forthContainerIcon} src={moon} alt="" />
    </div>
    <div>
    <h1 css={blackSectionText}>Supports
dark mode
    </h1>
    </div>
  </div>

  <div css={purpleSectionStyles}>
  <div>
    <img css={fifthContainerIcon} src={like} alt="" />

    </div>
    <div>
    <h1 css={purpleSectionText}>Free to use. Or pay
for more features.
    </h1>
    </div>
  </div>
  <div css={whiteSectionStyles}>
  <div>
    <img css={sixthContainerIcon} src={hammer} alt="" />
    </div>
    <div>
    <h1 css={whiteSectionText}>Built & maintained
by indie developers
    </h1>
    </div>
  </div>
</div>
</section>
<section css={whitePageStyles}>
<h1 css={whiteHeaderStyles}>Praise for Triage 1</h1>
<div css={feedbackContainer}>
<a href="/" css={feedbackIconsStyles}>
  <div css={commentSectionStyles}>
    <div>
    <span>Since I`ve been using Triage, I`m more caught up on my email than I have been in years.
    </span>
    </div>
    <div>
    <img css={firstCommentPic} src={fireball} alt="fireball" />
    </div>
  </div>
</a>
<a href="/" css={feedbackIconsStyles}>
  <div css={commentSectionStyles}>
    <div>
    <span>If you're constantly battling to keep your email account at inbox zero, Triage for iOS could be worth a look.
    </span>
    </div>
    <div>
    <img css={secondCommentPic} src={verge} alt="verge icon" />
    </div>
  </div>
</a>

<a href="/" css={feedbackIconsStyles}>
  <div css={commentSectionStyles}>
    <div>
    <span>Triage makes it feel seamless, and even fun, to achieve — if not Inbox Zero — at least Inbox Zen.
    </span>
    </div>
    <div>
    <img css={thirdCommentPic} src={macworld} alt="macworld icon" />
    </div>
  </div>
</a>

<a href="/" css={feedbackIconsStyles}>
  <div css={commentSectionStyles}>
    <div>
    <span>Triage provides the first aid necessary to get your inbox back in fighting shape.
    </span>
    </div>
    <div>
    <img css={forthCommentPic} src={maclife} alt="maclife" />
    </div>
  </div>
</a>

<a href="/" css={feedbackIconsStyles}>
  <div css={commentSectionStyles}>
    <div>
    <span>Triage is a boon to those who have struggled to keep their inboxes clean
          and organized.
    </span>
    </div>
    <div>
    <img css={fifthCommentPic} src={cleanemail} alt="cleanemail" />
    </div>
  </div>
</a>

<a href="/" css={feedbackIconsStyles}>
  <div css={commentSectionStyles}>
    <div>
    <span>Triage is my new favorite email app for iPhone.
    </span>
    </div>
    <div>
    <img css={sixthCommentPic} src={macstories} alt="macstories logo" />
    </div>
  </div>
</a>
</div>
</section>
</main>

<nav>
  <ul css={navigationMenuStyles}>
  <li>
    <a href="/">FAQ</a>
    </li>
  <li>
    <a href="/">Privacy</a>
    </li>
  <li>
    <a href="/">Terms</a>
    </li>
  <li>
    <a href="/">Security</a>
    </li>
  </ul>
  </nav>

 <footer css={socialMenuStyles}>
  <div>
  <img css={footerIcons} src={email} alt="" />
    </div>
  <div>
  <img css={footerIcons} src={twitter} alt="" />
    </div>
 </footer>
      </div>
    );
  }
   export default App;
