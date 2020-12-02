import { render, screen } from '@testing-library/react';
import TodoForm from './TodoForm';

it('renders correctly', () => {
    render(<TodoForm/>)
});

it('matches snapshot', () => {
    const {asFragment} = render(<TodoForm/>);
    expect(asFragment()).toMatchSnapshot;
});
