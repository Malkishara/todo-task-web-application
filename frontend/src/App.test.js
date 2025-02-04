import { render, screen } from '@testing-library/react';
import App from './App';

test('renders MainPage component', () => {
  render(<App />);
  
  expect(screen.getByText(/Add Task/i)).toBeInTheDocument();
});
