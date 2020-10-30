import React from 'react';

import TodoListItem from '../todo-list-item';

import './todo-list.css';
import ListGroup from 'react-bootstrap/ListGroup';

const TodoList = ({ todos }) => {
	const items = todos.map((elem) => {
		const { id, ...restProps } = elem;
		return (
			<ListGroup.Item as='li' key={id}>
				{/* Имена свойств элементов совпадают с именами атрибутов. Каждое свойство передается как есть. */}
				<TodoListItem {...restProps} />
			</ListGroup.Item>
		);
	});

	return (
		<ListGroup as='ul' className='todo-list'>
			{items}
		</ListGroup>
	);
};

export default TodoList;
