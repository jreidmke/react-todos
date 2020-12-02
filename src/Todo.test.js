import { render, screen } from '@testing-library/react';
import Todo from './Todo';

it('renders correctly', () => {
    render(<Todo/>)
});

it('matches snapshot', () => {
    const {asFragment} = render(<Todo/>);
    expect(asFragment()).toMatchSnapshot;
});
