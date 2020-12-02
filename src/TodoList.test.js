import { render, screen } from '@testing-library/react';
import TodoList from './TodoList';

it('renders correctly', () => {
    render(<TodoList/>)
});

it('matches snapshot', () => {
    const {asFragment} = render(<TodoList/>);
    expect(asFragment()).toMatchSnapshot;
});
