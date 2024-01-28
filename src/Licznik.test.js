import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Licznik from './Licznik';

test('increment licznik on left click', () => {
  const { getByText } = render(<Licznik />);
  const licznikElement = getByText(/Licznik/i);
  
  fireEvent.mouseDown(licznikElement, { button: 0 });
  
  expect(licznikElement).toHaveTextContent('Licznik: 1');
});

test('decrement licznik on right click', () => {
  const { getByText } = render(<Licznik />);
  const licznikElement = getByText(/Licznik/i);
  
  fireEvent.contextMenu(licznikElement);
  
  expect(licznikElement).toHaveTextContent('Licznik: -1');
});
