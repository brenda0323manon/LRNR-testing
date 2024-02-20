import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Footer from '../components/Footer';
test("Example 1 renders successfully", () => {
    render( <Router>
                <Footer/>
            </Router>);
    const element = screen.getByText(/Home/i);
    expect(element).toBeInTheDocument();
})