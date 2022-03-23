import React, {useState, useEffect} from 'react';
import { Title, StyledDiv } from '../../styles/styles';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../../styles/global';
import lightTheme from "../../styles/theme/light";
import darkTheme from "../../styles/theme/dark";
import Container from "../../styles/theme/components/Container";
import { darkModeAction } from '../../actions/config_action';

import { useSelector, useDispatch } from "react-redux";


function Login() {
    const dispatch = useDispatch();
    const config = useSelector(state => state.config)
  
    useEffect(() => {
      if (!config.darkMode) {
        dispatch(darkModeAction(window.localStorage.getItem('theme')))
      }
    }, [config.darkMode, dispatch])
  
    const themeChange = (value) => {
      window.localStorage.setItem('theme', value)
      dispatch(darkModeAction(value))
    }
    return(
        <div>
        <nav style={{ width: '100%', padding: '2rem 0 ', backgroundColor: 'gray', textAlign: 'center' }}>
          <button onClick={() => themeChange('dark')}>Dark Mode</button>
          <button onClick={() => themeChange('light')}>Light Mode</button>
        </nav>
  
        <Container >
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </Container>
      </div>

    )

}

export default Login;