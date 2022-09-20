import React, { useCallback, useRef } from 'react';
import { addTodo, removeTodo } from '../slices';
import { useAppSelector, useAppDispatch } from '../hooks';
import { Todo } from '../slices';

const Heading = ({ title }: { title: string }) => <h2>{title}</h2>;

const Button: React.FC<
  React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
    title?: string;
  }
> = ({ title, children, style, ...rest }) => (
  <button
    {...rest}
    style={{
      ...style,
      backgroundColor: 'red',
      color: 'white',
      fontSize: 'xx-large',
    }}
  >
    {title ?? children}
  </button>
);

interface ULProps {
  items: Todo[];
  render: (item: Todo) => React.ReactNode;
  itemClick: (item: Todo) => void;
}

const UL: React.FC<ULProps> = ({ items, render, itemClick }) => {
  return (
    <ul>
      {items.map((item, index) => (
        <li onClick={() => itemClick(item)} key={index}>
          {render(item)}
        </li>
      ))}
    </ul>
  );
};

const Home = () => {
  const { items } = useAppSelector(({ todos }) => todos);
  const dispatch = useAppDispatch();

  const newUserRef = useRef<HTMLInputElement>(null);

  const onAddUser = useCallback(() => {
    if (newUserRef.current) {
      dispatch(addTodo(newUserRef.current.value));
      newUserRef.current.value = '';
    }
  }, [dispatch]);

  return (
    <>
      <h1>Home</h1>
      <div>
        <Heading title="Introduction" />

        <Heading title="Todos" />
        <UL
          items={items}
          itemClick={(item) => alert(item.id)}
          render={(todo) => (
            <>
              {todo.text}
              <button onClick={() => dispatch(removeTodo(todo.id))}>Remove</button>
            </>
          )}
        />
        <div>
          <input type="text" ref={newUserRef} />
          <Button onClick={onAddUser}>Add Todo</Button>
        </div>
      </div>
    </>
  );
};

export default Home;
