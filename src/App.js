/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import logo from './logo.png';
import picture from './Picture.png';

const heroStyles = css`
  background-color: rgba(255, 255, 255, 1);
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
  padding: 24px 34px;
`;

const navigationMenuListStyles = css`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  gap: 40px;

  li > a {
    text-decoration: none;
    color: #18181b;
    font-size: 1rem;
    font-weight: 500;
    display: flex;
    align-items: center;
  }
`;

const heroSectionStyles = css`
  display: flex;
  padding-top: 3rem;


  h1 {
    color: #191f23;
    font-size: 38px;
    font-weight: 800;
    text-align: left;
    width: auto;
    margin-bottom: 1.5rem;
  }

  p {
    color: #51636f;
    font-size: 1.25rem;
    font-weight: 400;
    text-align:left;
    width: auto;
    margin-bottom: 2rem;
  }
`;

const heroButtonStyles = css`
  text-decoration: none;
  background: linear-gradient(180deg, #22a2f8, #1c9bef);
  font-size: 16px;
  font-weight: 500;
  color: #ffff;
  border-radius: 0.5rem;
  padding: 1rem 1.5rem 1rem 1.5rem;

  &:hover {
    transform: scale(1.5);}
`;

function App() {
  return (
    <div>
      <main>
        <div css={heroStyles}>
          <div css={wrapperStyles}>
            <header css={headerStyles}>
              <img src={logo} alt="Ditto" width="68" height="32" />
              <nav>
                <ul css={navigationMenuListStyles}>
                  <li>
                    <a
                      href="https://joinditto.freshteam.com/jobs"
                      class="inline-flex items-center justify-center px-3 py-2 ml-2 mr-2 text-base font-bold leading-none text-black border-none rounded shadow-sm cursor-pointer group 2xl:rounded-md 2xl:text-xl whitespace-nowrap bg-primary-175 hover:bg-primary-500 hover:text-white"
                      target="blank"
                    >
                      👋🏼 We're hiring!
                    </a>
                  </li>
                  <li>
                    <a href="/">Health Insurance</a>
                  </li>
                  <li>
                    <a href="/">Life Insurance</a>
                  </li>
                  <li>
                    <a href="/">Buy Insurance</a>
                  </li>
                  <li>
                    <a href="/">Ditto Hotline</a>
                  </li>
                </ul>
              </nav>
            </header>
            <section css={heroSectionStyles}>
              <div>
                <h1>Insurance made easy</h1>
                <p>
                  With Ditto, you get the best advice on insurance. Understand
                  your policy, get answers to your burning questions, and buy
                  insurance, all at the same place.
                </p>
                <a href="/" css={heroButtonStyles}>
                  Book a free call
                </a>
              </div>
              <img src={picture} alt="Ditto" width="600px" />
            </section>
          </div>
        </div>
      </main>
      <footer>Footer</footer>
    </div>
  );
}

export default App;
