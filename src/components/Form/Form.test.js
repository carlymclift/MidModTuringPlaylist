import React from 'react';
import { render, screen, setup, fireEvent } from '@testing-library/react';
import Form from './Form';
import '@testing-library/jest-dom'

describe('Form', () => {
    it('Should render a form', () => {
        render(<Form />)

        const heading = screen.getByRole('heading', {name: 'Add song to queue'})
        const song = screen.getByPlaceholderText('Song')
        const artist = screen.getByPlaceholderText('Artist')
        const link = screen.getByPlaceholderText('Link')

        expect(heading).toBeInTheDocument()
        expect(song).toBeInTheDocument()
        expect(artist).toBeInTheDocument()
        expect(link).toBeInTheDocument()
    });
  
    it('Should have inputs that hold their value when interacted with', () => {
        const setup = () => {
            const utils = render(<Form />)
            const input = utils.getByPlaceholderText('Song')
            return {
              input,
              ...utils,
            }
          }

        const { input } = setup()
        expect(input.value).toBe('')
        fireEvent.change(input, { target: { value: 'Song' } })
        expect(input.value).toBe('Song')
    });
  
    it('Should be able to submit the form', () => {
        const mockFun = jest.fn()

        render(<Form 
            addNewSong={mockFun}
        />)
    
        const button = screen.getByRole('button', {name: 'Submit'})
        fireEvent.click(button)

        expect(mockFun).toBeCalledTimes(1)
    });
  });