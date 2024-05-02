import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import EventsPage from './pages/EventsPage';
import LoginPage from './pages/LoginPage';
import CoursesPage from './pages/CoursesPage';
import HomePage from './pages/HomePage';
import PlansPage from './pages/PlansPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PlansPage />
  </React.StrictMode>
);