import React from 'react';

import TodoListItem from '../todo-list-item';

import ListGroup from 'react-bootstrap/ListGroup';

const TodoList = ({ todos, onTaskDone, onTaskDelete, onTaskImportant }) => {
	const content = todos.map((elem) => {
		const { id, ...restProps } = elem;
		return (
			<ListGroup.Item as='li' key={id}>
				<TodoListItem
					{...restProps}
					onTaskDone={() => onTaskDone(id)}
					onTaskImportant={() => onTaskImportant(id)}
					onTaskDelete={() => onTaskDelete(id)}
				/>
			</ListGroup.Item>
		);
	});

	return (
		<ListGroup as='ul' className='todo-list mb-3'>
			{content}
		</ListGroup>
	);
};

export default TodoList;
