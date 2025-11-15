import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import App from './App';
import './index.css';

export function createApp() {
  return <App />;
}

if (typeof window !== 'undefined') {
  hydrateRoot(document.getElementById('root'), <App />);
}
