import Nav from './Nav';
import Header from './Header';
import { ThemeProvider } from 'styled-components';
import { useDarkMode } from './Toggle/UseDarkMode';
import { GlobalStyles } from './Themes/GlobalStyle';
import { ThemeToggle } from './Toggle/Toggler';
import { lightTheme, darkTheme } from './Themes/Themes';

const Layout = ({ children }) => {
  const [theme, themeToggler, mountedComponent] = useDarkMode();

  const themeMode = theme === 'light' ? lightTheme : darkTheme;
  /* 
    if(!mountedComponent) return <div/> */

  return (
    <>
      <ThemeProvider theme={themeMode}>
          <ThemeToggle theme={theme} toggleTheme={themeToggler} />
            <GlobalStyles/>
      <Header />
      <Nav />
      <div>
        <main>{children}</main>
      </div>
       </ThemeProvider>
    </>
  );
};

export default Layout;
