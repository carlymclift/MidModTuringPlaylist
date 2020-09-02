import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import SongCard from './SongCard';

describe('SongCard', () => {
    it('Should render a form', () => {
        render(<SongCard />)

        const heading = screen.getByRole('heading')
        const artist = screen.getByText('by:', {exact: false})
        const link = screen.getByText('Next Song')
        const button = screen.getByRole('button')

        expect(heading).toBeInTheDocument()
        expect(artist).toBeInTheDocument()
        expect(link).toBeInTheDocument()
        expect(button).toBeInTheDocument()
    });
  });