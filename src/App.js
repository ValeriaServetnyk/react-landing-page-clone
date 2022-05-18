/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import {ReactComponent as TwitterLogo} from './twitter.svg';
import {ReactComponent as InstaLogo} from './insta.svg';
import {ReactComponent as FacebookLogo} from './facebook.svg';
import {ReactComponent as ShopLogo} from './shop.svg';
import header from './Header.jpeg';


const heroStyles = css`
  background: url(/Header.svg) center -50px / cover no-repeat,
   #38383b;
  display: flex;
  justify-content: center;
`;


const wrapperStyles = css`
  max-width: 1200px;
  width: 100%;
`;

const headerStyles = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px;

`;
const logoStyles = css`
letter-spacing: 0em;
font-size: 36.36px;
font-weight: 400;
color: #ffff;
`;
const navigationMenuListStyles = css`
  list-style-type: none;
  background-color: none;
  padding: 0px;
  margin: 0px;
  display: flex;
  align-items: center;
  gap: 20px;
  font-family: 'Cormorant Garamond';


  li > a {

    text-decoration: none;
    color: #ffff;
    font-size: 19.072px;
    font-weight: 400;
    display: flex;
    align-items: center;
  }
`;

const socialStyles = css`
list-style-type: none;
  background-color: none;
  padding: 0px;
  margin: 0px;
  display: flex;
  align-items: center;
  gap: 10px;


li > a {
text-decoration: none;
color: #ffff;

}
`;

const heroSectionStyles = css`
  display: flex;
  flex-direction: column;
  color: white;
  margin: 96px 16px;
  gap: 64px;
  align-items: center;
`;

const heroHeadingStyles = css`
  font-size: 62.08px;
  font-weight: 400;
  line-height: 110%;
  margin-top: 10px;
  margin-bottom: 4px;
  text-align: center;
  white-space: pre-wrap;
`;


const heroButtonStyles = css`
text-decoration: none;
color: #fff;
background-color: #a8a6a1;
border-color: #a8a6a1;
display: inline-block;
padding: 1.2em 2.004em;
text-align: center;
opacity: 1;
font-size: 17.536px;
  font-weight: 500;
  margin-top: 40px;
  margin-left: 106px;
  margin-bottom: 75px;

&:hover {
  opacity: .8;
}
`;

const mainFavouritesSection = css`
font-size: 43.648px;
  font-weight: 400;
  color: #ffff;
  text-align: center;

`;

const favoritesStyles = css`
list-style-type: none;
background-color: none;
padding: 0px;
margin: 0px;
display: flex;
align-items: center;
justify-content: space-between;



li > a {

  text-decoration: none;
  color: #ffff;
  font-size: 34.432px;
  font-weight: 400;
  display: flex;

}
`;


function App() {
  return (
      <div>
        <main>
          <div css={heroStyles}>
            <div css={wrapperStyles}>
              <header css={headerStyles}>
                <h1 css={logoStyles}>Crosby</h1>
                <nav>
                  <ul css={navigationMenuListStyles}>
                    <li>
                      <a href="/">Shop</a>
                    </li>
                    <li>
                      <a href="/">Our Story</a>
                    </li>
                    <li>
                      <a href="/">Journal</a>
                    </li>
                    <li>
                      <a href="/">Contact</a>
                    </li>
                  </ul>
                </nav>
                 <div> <ul css={socialStyles}>
                    <li>
                      <a href="/"><InstaLogo /></a>
                    </li>
                    <li>
                      <a href="/"><FacebookLogo /></a>
                    </li>
                    <li>
                      <a href="/"><TwitterLogo /></a>
                    </li>
                    <li>
                      <a href="/"><ShopLogo /></a>
                    </li>
                  </ul></div>
              </header>
              <section css={heroSectionStyles}>
                <div>
                  <p css={heroHeadingStyles}>Plants and Pots</p>
                  <p css={heroHeadingStyles}>For Your Home</p>

                  <a href="/" css={heroButtonStyles}>
                    Shop Now
                  </a>
                </div>
              </section>
              <section css={mainFavouritesSection}>
<p>Fan Favourites</p>
<div><ul css={favoritesStyles}>
                    <li>
                      <a href="/">Lil' Guys</a>
                    </li>
                    <li>
                      <a href="/">Bigger Statements</a>
                    </li>
                    <li>
                      <a href="/">Low Maintenance</a>
                    </li>
                  </ul></div>
              </section>
            </div>
          </div>
        </main>
        <footer>Footer</footer>
      </div>
    );
  }

   export default App;
