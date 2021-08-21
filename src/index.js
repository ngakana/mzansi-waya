import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { ThemeProvider } from "./hooks/ThemeContext";
import { PlaybackSettingsProvider } from "./hooks/PlaybackSettingsContext";
import { SongsProvider } from 'hooks/SongsContext';
import { PlayingSongProvider } from "./hooks/PlayingSongContext";
import { MediaPlayControlsProvider } from "./hooks/MediaPlayControlsContext";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <SongsProvider>
        <PlaybackSettingsProvider>
          <PlayingSongProvider>
            <MediaPlayControlsProvider>
              <App />
            </MediaPlayControlsProvider>
          </PlayingSongProvider>
        </PlaybackSettingsProvider>
      </SongsProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
