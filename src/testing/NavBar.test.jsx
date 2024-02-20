import React from 'react';
import { render, screen } from '@testing-library/react';
import NavBar from '../components/NavBar';
import { BrowserRouter as Router } from 'react-router-dom';

describe('NavBar component should appear', () => {
  it('renders without crashing', () => {
    render( <Router><NavBar /></Router>);
  });
  it('should render navigation links', () => {
    render( <Router><NavBar /></Router>);
    expect(screen.getAllByRole('link')).toHaveLength(4);
  });
});

