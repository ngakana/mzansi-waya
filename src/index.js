import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { ThemeProvider } from "./hooks/ThemeContext";
import { PlaybackSettingsProvider } from "./hooks/PlaybackSettingsContext";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <PlaybackSettingsProvider>
        <App />
      </PlaybackSettingsProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
