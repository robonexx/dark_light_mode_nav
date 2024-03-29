import React from 'react';
/* import { func, string } from 'prop-types'; */
import styled from 'styled-components';
import { Sun } from '@styled-icons/feather/Sun';
import { Moon } from '@styled-icons/feather/Moon';

const SunLight = styled(Sun)`
  outline: none;
`;
const MoonDark = styled(Moon)`
  outline: none;
`;

const Button = styled.button`
  background: transparent;
  color: ${({ theme }) => theme.btnColor};
  border-radius: 50%;
  border: none;
  cursor: pointer;
  padding: 0.3rem;
  position: fixed;
  top: 2vh;
  left: 1vw;
  z-index: 50;
  outline: none;
`;

export const ThemeToggle = ({ theme, toggleTheme }) => {
  return (
    <>
      <Button onClick={toggleTheme}>
        {theme === 'light' ? (
          <MoonDark
            width='26'
            height='26'
            viewBox='0 0 26 26'
            style={{ fill: '#fafafa' }}
          ></MoonDark>
        ) : (
          <SunLight
            width='26'
            height='26'
            viewBox='0 0 26 26'
            style={{ fill: '#Fec' }}
          ></SunLight>
        )}
      </Button>
    </>
  );
};
/* ThemeToggle.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
}; */
export default ThemeToggle;
