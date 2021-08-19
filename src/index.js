import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { ThemeProvider } from "./hooks/ThemeContext";
import { PlaybackSettingsProvider } from "./hooks/PlaybackSettingsContext";
import { SongsProvider } from 'hooks/SongsContext';
import { PlayingSongProvider } from "./hooks/PlayingSongContext";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <SongsProvider>
        <PlaybackSettingsProvider>
          <PlayingSongProvider>
            <App />
          </PlayingSongProvider>
        </PlaybackSettingsProvider>
      </SongsProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
