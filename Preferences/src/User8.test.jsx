import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen, fireEvent, getAllByAltText } from '@testing-library/react';
import User8 from './User8';
describe('Settings Component', () => {
    beforeEach(() => {
        render(<User8 />);
    });
    test('navigate the back click on button', () => {
        expect(screen.getByText('Back')).toBeInTheDocument();
    });
    test('change the image click on the card', () => {
        expect(screen.getByAltText('Clickable card')).toHaveAttribute('src', 'Image2.jpeg');
    })
    test('heart-icon on click', () => {
        const heartIcon = screen.getByTestId('heart-icon');
        fireEvent.click(heartIcon);
        expect('heart-icon').toHaveClass('FaMinusSquare')
    })
    test('minus-icon on click', () => {
        const minusIcon = screen.getByTestId('minus-icon');
        fireEvent.click(minusIcon);
        expect('minu-icon').toHaveClass('FaHeart');
    })
    test('render the components', () => {
    
        expect(screen.getByText('Date Of Birth:')).toBeInTheDocument();
        expect(screen.getByText('Time Of Birth:')).toBeInTheDocument();
        expect(screen.getByText('Religion:')).toBeInTheDocument();
        expect(screen.getByText('Mother Tongue :')).toBeInTheDocument();
        expect(screen.getByText('Language Proficiency:')).toBeInTheDocument();
        expect(screen.getByText('Instagram id:')).toBeInTheDocument();
        expect(screen.getByText('LinkedIn id:')).toBeInTheDocument();
        expect(screen.getByText('Address :')).toBeInTheDocument();
        expect(screen.getByText('Citizenship:')).toBeInTheDocument();
    });
});