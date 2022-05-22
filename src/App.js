/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import iphone from './image/archive.png';
import cleanemail from './image/clean-email.png';
import fireball from './image/daring-fireball.png';
import appstore from './image/download.svg';
import hero from './image/hero.png';
import icon from './image/hero.svg';
import phone from './image/keep.png';
import maclife from './image/maclife.png';
import macstories from './image/macstories.png';
import macworld from './image/macworld.svg';
import verge from './image/the-verge.svg';

// import { ReactComponent as hero } from './image/hero.svg';

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
height: 610px;`;

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
    <svg css={firstContainerIcon} className="h-8 w-8 lg:h-12 lg:w-12 mb-4" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" />
            <path d="M0 24C0 10.7452 10.7452 0 24 0V0C37.2548 0 48 10.7452 48 24V24C48 37.2548 37.2548 48 24 48V48C10.7452 48 0 37.2548 0 24V24Z" fill="white" fillOpacity="0.2" />
            <path d="M14.625 34.6562H33.5742C36.0586 34.6562 37.5117 33.1914 37.5117 30.543V17.5703C37.5117 14.9102 36.0469 13.457 33.375 13.457H14.4375C11.9531 13.457 10.4883 14.9102 10.4883 17.5703V30.543C10.4883 33.2031 11.9531 34.6562 14.625 34.6562ZM22.8047 24.168L14.8594 16.3047H33.1641L25.2187 24.168C24.75 24.625 24.3984 24.8125 24.0117 24.8125C23.625 24.8125 23.2734 24.6133 22.8047 24.168ZM13.2773 18.2031L19.0898 23.9219L13.2773 29.6992V18.2031ZM28.9219 23.9219L34.7227 18.2148V29.6758L28.9219 23.9219ZM14.7422 31.8086C14.6836 31.7969 14.707 31.8086 14.6602 31.7969L20.8477 25.6445L21.293 26.0898C22.1836 26.957 23.0625 27.3555 24.0117 27.3555C24.9609 27.3555 25.8398 26.957 26.7187 26.0898L27.1758 25.6445L33.3633 31.7969C33.3281 31.7969 33.293 31.8086 33.2578 31.8086H14.7422Z" fill="white" />

    </div>
    <div>
    <h1 css={blueSectionText}>Works with Gmail,
iCloud & IMAP
    </h1>
    </div>
  </div>



  <div css={yellowSectionStyles}>
  <div>
    <svg css={secondContainerIcon} className="h-8 w-8 lg:h-12 lg:w-12 mb-4" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" />
            <path d="M0 24C0 10.7452 10.7452 0 24 0V0C37.2548 0 48 10.7452 48 24V24C48 37.2548 37.2548 48 24 48V48C10.7452 48 0 37.2548 0 24V24Z" fill="black" fillOpacity="0.1" />
            <path d="M14.8633 33.9531H18.5312V34.9727C18.5312 35.6289 19.0234 36.1211 19.6914 36.1211C20.3477 36.1211 20.8398 35.6289 20.8398 34.9727V33.9531H22.4805V34.9727C22.4805 35.6289 22.9844 36.1211 23.6406 36.1211C24.2969 36.1211 24.8008 35.6289 24.8008 34.9727V33.9531H26.4531V34.9727C26.4531 35.6289 26.9453 36.1211 27.6016 36.1211C28.2695 36.1211 28.7617 35.6289 28.7617 34.9727V33.9531H32.418C33.0977 33.9531 33.543 33.5078 33.543 32.8281V29.1484H34.5742C35.2305 29.1484 35.7227 28.6445 35.7227 27.9883C35.7227 27.332 35.2305 26.8281 34.5742 26.8281H33.543V25.1875H34.5742C35.2305 25.1875 35.7227 24.6953 35.7227 24.0391C35.7227 23.3828 35.2305 22.8789 34.5742 22.8789H33.543V21.2383H34.5742C35.2305 21.2383 35.7227 20.7461 35.7227 20.0898C35.7227 19.4219 35.2305 18.9297 34.5742 18.9297H33.543V15.2734C33.543 14.6055 33.0977 14.1484 32.418 14.1484H28.75V13.1289C28.75 12.4609 28.2461 11.9687 27.5898 11.9687C26.9336 11.9687 26.4297 12.4609 26.4297 13.1289V14.1484H24.8008V13.1289C24.8008 12.4609 24.2969 11.9687 23.6406 11.9687C22.9844 11.9687 22.4805 12.4609 22.4805 13.1289V14.1484H20.8398V13.1289C20.8398 12.4609 20.3477 11.9687 19.6914 11.9687C19.0234 11.9687 18.5312 12.4609 18.5312 13.1289V14.1484H14.8633C14.1836 14.1484 13.7383 14.6055 13.7383 15.2734V18.9414H12.6484C11.9805 18.9414 11.4883 19.4336 11.4883 20.0898C11.4883 20.7461 11.9805 21.25 12.6484 21.25H13.7383V22.8906H12.6484C11.9805 22.8906 11.4883 23.3828 11.4883 24.0391C11.4883 24.707 11.9805 25.1992 12.6484 25.1992H13.7383V26.8398H12.6484C11.9805 26.8398 11.4883 27.332 11.4883 28C11.4883 28.6562 11.9805 29.1484 12.6484 29.1484H13.7383V32.8281C13.7383 33.5078 14.1836 33.9531 14.8633 33.9531ZM17.0898 30.9297C16.8672 30.9297 16.7617 30.8242 16.7617 30.6133V17.5C16.7617 17.2773 16.8672 17.1719 17.0898 17.1719H30.1914C30.4141 17.1719 30.5195 17.2773 30.5195 17.5V30.6133C30.5195 30.8242 30.4141 30.9297 30.1914 30.9297H17.0898ZM19.6445 28.8906H27.6367C28.1875 28.8906 28.4922 28.5859 28.4922 28.0352V20.0664C28.4922 19.5039 28.1875 19.1992 27.6367 19.1992H19.6445C19.0937 19.1992 18.7891 19.5039 18.7891 20.0664V28.0352C18.7891 28.5859 19.0937 28.8906 19.6445 28.8906ZM21.0625 26.8516C20.9219 26.8516 20.8281 26.7578 20.8281 26.6172V21.4844C20.8281 21.332 20.9219 21.2383 21.0625 21.2383H26.2187C26.3594 21.2383 26.4531 21.332 26.4531 21.4844V26.6172C26.4531 26.7578 26.3594 26.8516 26.2187 26.8516H21.0625Z" fill="black" />
    </div>
    <div>
    <h1 css={yellowSectionText}>All processing
happens on device
    </h1>
    </div>
  </div>


  <div css={pinkSectionStyles}>
  <div>
    <svg css={thirdContainerIcon} className="h-8 w-8 lg:h-12 lg:w-12 mb-4" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" />
            <path d="M0 24C0 10.7452 10.7452 0 24 0V0C37.2548 0 48 10.7452 48 24V24C48 37.2548 37.2548 48 24 48V48C10.7452 48 0 37.2548 0 24V24Z" fill="white" fillOpacity="0.3" />
            <path d="M13.7422 26.4062C13.7422 30.6719 16.168 32.5234 23.0352 36.1094C23.3398 36.2617 23.6797 36.3672 23.9141 36.3672C24.1484 36.3672 24.4883 36.2617 24.8047 36.1094C31.6602 32.5352 34.0977 30.6719 34.0977 26.4062V17.7344C34.0977 16.0586 33.5352 15.3789 32.082 14.7578C30.9219 14.2656 26.6562 12.8359 25.5664 12.4844C25.0508 12.3203 24.418 12.2148 23.9141 12.2148C23.4102 12.2148 22.7773 12.3437 22.2617 12.4844C21.1836 12.7891 16.9062 14.2773 15.7578 14.7578C14.293 15.3789 13.7422 16.0586 13.7422 17.7344V26.4062ZM24.043 33.2734V15.0039C24.2422 15.0156 24.4297 15.0625 24.7812 15.1797C26 15.6367 29.1875 16.7383 30.8633 17.3594C31.1914 17.4883 31.2969 17.6758 31.2969 18.1211V25.9609C31.2969 29.1367 29.5977 30.0273 24.5 33.0625C24.2773 33.1914 24.1602 33.25 24.043 33.2734Z" fill="white" />
    </div>
    <div>
    <h1 css={pinkSectionText}>Your data is
yours to stay
    </h1>
    </div>
  </div>



  <div css={blackSectionStyles}>
  <div>
    <svg css={forthContainerIcon} className="h-8 w-8 lg:h-12 lg:w-12 mb-4" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" />
            <path d="M0 24C0 10.7452 10.7452 0 24 0V0C37.2548 0 48 10.7452 48 24V24C48 37.2548 37.2548 48 24 48V48C10.7452 48 0 37.2548 0 24V24Z" fill="white" fillOpacity="0.2" />
            <path d="M27.3125 16.082C27.5 16.082 27.6172 15.9531 27.6406 15.7891C27.957 13.8672 27.957 13.8437 29.9375 13.4805C30.1367 13.4453 30.2539 13.3281 30.2539 13.1523C30.2539 12.9766 30.1367 12.8594 29.9609 12.8242C27.9453 12.4141 27.9687 12.4023 27.6406 10.5273C27.6172 10.3398 27.5 10.2227 27.3125 10.2227C27.1367 10.2227 27.0195 10.3398 26.9961 10.5156C26.6562 12.4492 26.6914 12.4844 24.6875 12.8242C24.5117 12.8477 24.3828 12.9766 24.3828 13.1523C24.3828 13.3281 24.5 13.4453 24.6758 13.4805C26.6914 13.8789 26.668 13.8906 26.9961 15.7891C27.0195 15.9531 27.1367 16.082 27.3125 16.082ZM23.8555 36.8008C28.4609 36.8008 32.3867 34.2812 34.1797 30.2148C34.5547 29.3594 34.4375 28.7031 34.0508 28.3281C33.6641 27.9766 33.0312 27.8945 32.3398 28.2109C31.4609 28.5859 30.3477 28.7969 29.1055 28.7969C23.9609 28.7969 20.6797 25.6562 20.6797 20.6289C20.6797 19.2461 20.9727 17.875 21.3711 17.0078C21.7109 16.2227 21.6641 15.625 21.3125 15.2266C20.9258 14.793 20.2578 14.7227 19.4492 15.0391C15.3125 16.7031 12.5586 20.875 12.5586 25.5859C12.5586 31.9844 17.2695 36.8008 23.8555 36.8008ZM32.9844 24.4258C33.2656 24.4258 33.4766 24.2266 33.5117 23.9219C33.8867 20.8516 34.0039 20.7578 37.1445 20.2773C37.4844 20.2305 37.6719 20.043 37.6719 19.75C37.6719 19.4687 37.4844 19.2812 37.2148 19.2227C34.0156 18.5781 33.8867 18.625 33.5117 15.5781C33.4766 15.2734 33.2656 15.0742 32.9844 15.0742C32.7031 15.0742 32.4922 15.2734 32.457 15.5547C32.0703 18.6953 31.9766 18.7891 28.7656 19.2227C28.4961 19.2578 28.2969 19.4687 28.2969 19.75C28.2969 20.0312 28.4961 20.2187 28.7656 20.2773C31.9883 20.9219 32.0586 20.8867 32.457 23.957C32.4922 24.2266 32.7148 24.4258 32.9844 24.4258ZM23.8672 33.8359C19.0039 33.8359 15.5234 30.2617 15.5234 25.5039C15.5234 23.1016 16.5195 20.7812 18.2187 19.2109C18.0664 19.7734 17.9727 20.5234 17.9727 21.2617C17.9727 27.4492 22.0977 31.4922 28.4258 31.4922C29.0234 31.4922 29.5859 31.4219 29.8906 31.3281C28.4727 32.9102 26.2461 33.8359 23.8672 33.8359Z" fill="white" />

    </div>
    <div>
    <h1 css={blackSectionText}>Supports
dark mode
    </h1>
    </div>
  </div>

  <div css={purpleSectionStyles}>
  <div>
    <svg css={fifthContainerIcon} className="h-8 w-8 lg:h-12 lg:w-12 mb-4" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" />
            <path d="M0 24C0 10.7452 10.7452 0 24 0V0C37.2548 0 48 10.7452 48 24V24C48 37.2548 37.2548 48 24 48V48C10.7452 48 0 37.2548 0 24V24Z" fill="white" fillOpacity="0.2" />
            <path d="M10.5977 28.6562C10.5977 33.0859 13.3867 36.6367 17.2305 36.6367H21.0742C22.7031 37.4336 24.5898 37.8789 26.6172 37.8789H28.2812C29.8984 37.8789 31.2461 37.7734 32.1133 37.5508C33.9883 37.0937 35.1953 35.6992 35.1953 34.0117C35.1953 33.7773 35.1719 33.5664 35.1016 33.3437C35.9102 32.6641 36.3672 31.6914 36.3672 30.6484C36.3672 30.1914 36.2852 29.7461 36.1328 29.3711C36.6602 28.7617 36.9648 27.918 36.9648 27.0391C36.9648 26.4531 36.8359 25.9023 36.6016 25.4453C36.9297 24.8945 37.1172 24.2031 37.1172 23.4297C37.1172 21.3789 35.582 19.8203 33.543 19.8203H29.3008C29.1133 19.8203 28.9844 19.7383 29.0078 19.5391C29.1719 18.4258 30.918 15.625 30.918 13.2461C30.918 11.3008 29.5234 9.85938 27.625 9.85938C26.2539 9.85938 25.293 10.5742 24.4258 12.2383C22.9141 15.1562 21.0156 17.6875 18.6719 20.6172H16.7852C13.1523 20.6172 10.5977 24.1562 10.5977 28.6562ZM18.6484 28.5156C18.6484 26.0898 19.1875 24.5547 20.7695 22.4219C22.5508 20.0312 25.0469 17.125 26.8398 13.5508C27.0977 13.0234 27.2969 12.8828 27.5898 12.8828C27.9297 12.8828 28.1523 13.1406 28.1523 13.5625C28.1523 15.0508 26.1836 17.9922 26.1836 19.9961C26.1836 21.543 27.3906 22.5977 29.1484 22.5977H33.4023C33.9531 22.5977 34.3516 22.9844 34.3516 23.5234C34.3516 23.8867 34.2227 24.1445 33.9062 24.4727C33.4492 24.9414 33.3906 25.6914 33.8008 26.125C34.0703 26.4883 34.1875 26.7344 34.1875 27.0391C34.1875 27.4023 34 27.7187 33.6367 27.9883C33.0742 28.3867 32.8984 29.1016 33.2031 29.7344C33.4023 30.1094 33.4961 30.3203 33.4961 30.6016C33.4961 31.0586 33.2031 31.4102 32.6406 31.7266C32.0898 32.0312 31.9258 32.7227 32.1484 33.2617C32.3242 33.6953 32.3594 33.7891 32.3477 33.9883C32.3477 34.3867 32.0547 34.7148 31.375 34.8789C30.6953 35.043 29.5937 35.125 27.9648 35.1016L26.6289 35.0898C21.8711 35.043 18.6484 32.4062 18.6484 28.5156ZM13.2812 28.6562C13.2812 25.7734 14.6406 23.5234 16.3164 23.3359C16.5391 23.3242 16.7617 23.3242 16.9844 23.3125C16.2227 24.9062 15.8828 26.5703 15.8828 28.5625C15.8828 30.6484 16.5625 32.5352 17.8398 34.082C17.5469 34.082 17.2187 34.0703 16.9141 34.0586C14.8984 33.8711 13.2812 31.5742 13.2812 28.6562Z" fill="white" />

    </div>
    <div>
    <h1 css={purpleSectionText}>Free to use. Or pay
for more features.
    </h1>
    </div>
  </div>


  <div css={whiteSectionStyles}>
  <div>
    <svg css={sixthContainerIcon} className="h-8 w-8 lg:h-12 lg:w-12 mb-4" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" />
            <path d="M0 24C0 10.7452 10.7452 0 24 0V0C37.2548 0 48 10.7452 48 24V24C48 37.2548 37.2548 48 24 48V48C10.7452 48 0 37.2548 0 24V24Z" fill="black" fillOpacity="0.05" />
            <path d="M12.311 32.6338L14.1016 34.4336C15.0664 35.3984 16.2539 35.3335 17.2559 34.2202L27.3218 23.0874C27.6001 23.1523 27.8877 23.1431 28.2217 23.0688L29.0195 22.9111L29.437 23.3379L29.3906 23.7832C29.335 24.3027 29.5298 24.7666 30.0493 25.2769L30.7822 26.0005C31.3853 26.5942 32.1553 26.6221 32.7212 26.0562L35.5508 23.2173C36.126 22.6421 36.0981 21.8813 35.5044 21.2876L34.7715 20.5454C34.2705 20.0352 33.8066 19.8403 33.2871 19.8867L32.8325 19.9331L32.4243 19.5342L32.6099 18.6992C32.7676 17.9478 32.582 17.4189 31.8398 16.6768L29.8916 14.7378C26.6074 11.4536 21.9502 11.4072 18.9907 14.3667C18.5176 14.8306 18.4897 15.4707 18.7402 15.9346C19.0186 16.417 19.6123 16.7417 20.373 16.5469C21.7646 16.1943 23.0728 16.2129 24.251 16.9272L23.7778 18.1147C23.6108 18.5415 23.5552 18.9126 23.6108 19.2651L12.5059 29.4795C11.4204 30.4722 11.3462 31.6597 12.311 32.6338ZM21.2266 14.8584C23.416 13.5132 26.2549 13.9399 28.1846 15.8789L30.3926 18.0684C30.6245 18.3003 30.6616 18.4951 30.606 18.8198L30.3462 20.1743L31.9419 21.7607L32.8696 21.7144C33.0645 21.7144 33.1294 21.7329 33.2778 21.8721L33.6118 22.2061L31.6729 24.145L31.3389 23.811C31.1997 23.6719 31.1719 23.5977 31.1812 23.4028L31.2275 22.4844L29.6411 20.8887L28.2588 21.1113C27.9434 21.167 27.7671 21.1392 27.5352 20.9072L25.9209 19.293C25.6797 19.061 25.6147 18.8569 25.7446 18.5322L26.5889 16.5283C25.0859 15.0439 23.1377 14.5151 21.2822 14.979C21.1802 15.0068 21.1338 14.9233 21.2266 14.8584ZM15.1406 32.5039L14.2314 31.5854C13.9438 31.2979 13.9995 31.0845 14.2593 30.8525L24.7612 20.9072L25.7261 21.8813L15.8828 32.4854C15.6509 32.7358 15.4375 32.7915 15.1406 32.5039Z" fill="black" />

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
  <svg css={footerIcons} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />

    </div>
  <div>
  <svg css={footerIcons} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 248 204" stroke="currentColor" />
          <path d="M221.95,51.29c0.15,2.17,0.15,4.34,0.15,6.53c0,66.73-50.8,143.69-143.69,143.69v-0.04
      		C50.97,201.51,24.1,193.65,1,178.83c3.99,0.48,8,0.72,12.02,0.73c22.74,0.02,44.83-7.61,62.72-21.66
      		c-21.61-0.41-40.56-14.5-47.18-35.07c7.57,1.46,15.37,1.16,22.8-0.87C27.8,117.2,10.85,96.5,10.85,72.46c0-0.22,0-0.43,0-0.64
      		c7.02,3.91,14.88,6.08,22.92,6.32C11.58,63.31,4.74,33.79,18.14,10.71c25.64,31.55,63.47,50.73,104.08,52.76
      		c-4.07-17.54,1.49-35.92,14.61-48.25c20.34-19.12,52.33-18.14,71.45,2.19c11.31-2.23,22.15-6.38,32.07-12.26
      		c-3.77,11.69-11.66,21.62-22.2,27.93c10.01-1.18,19.79-3.86,29-7.95C240.37,35.29,231.83,44.14,221.95,51.29z" />
    </div>

 </footer>

      </div>
    );
  }

   export default App;
