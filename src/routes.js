import React, { useEffect } from 'react';
import {
  Routes,
  BrowserRouter,
  Route,
} from "react-router-dom";
import lightTheme from "./styles/theme/light";
import darkTheme from "./styles/theme/dark";
import { ThemeProvider } from "styled-components";
import { darkModeAction } from './actions/config_action';
import Login from './pages/login';

import { useSelector, useDispatch } from "react-redux";


function AllRoutes() {
    const dispatch = useDispatch();
    const config = useSelector(state => state.config)
    
    useEffect(() => {
      if (!config.darkMode) {
        dispatch(darkModeAction(window.localStorage.getItem('theme')))
      }
    }, [config.darkMode, dispatch])
    


    return (
        <ThemeProvider theme={config.darkMode === "light" ? lightTheme : darkTheme}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />} />
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    )
}

export default AllRoutes;