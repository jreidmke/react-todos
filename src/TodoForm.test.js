import { fireEvent, render, screen } from '@testing-library/react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';


it('renders correctly', () => {
    render(<TodoForm/>)
});

it('matches snapshot', () => {
    const {asFragment} = render(<TodoForm/>);
    expect(asFragment()).toMatchSnapshot;
});

it('allows user to create new todo', () => {
    const {getByLabelText, queryByText} = render(<TodoList/>);
    expect(queryByText('Clean room!')).not.toBeInTheDocument();
    fireEvent.change(getByLabelText("Task"), {target: {value: 'Clean room!'}});
    fireEvent.click(queryByText('Add Todo'));
    expect(queryByText('Clean room!')).toBeInTheDocument();
})