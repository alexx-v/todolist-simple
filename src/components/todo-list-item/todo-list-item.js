import React from 'react';

import './todo-list-item.css';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';

const TodoListItem = ({
	label,
	done,
	important,
	onTaskDone,
	onTaskImportant,
	onTaskDelete,
}) => {
	let classNames = 'task text-wrap';

	if (done) {
		classNames += ' done';
	}

	if (important) {
		classNames += ' important';
	}

	return (
		<div className='todo-list-item d-flex align-items-center'>
			<p className={classNames} onClick={onTaskDone}>
				{label}
			</p>
			<ButtonToolbar className='ml-auto buttons'>
				<Button
					variant='outline-danger'
					size='sm'
					className='mr-1'
					onClick={onTaskDelete}
				>
					<i className='fa fa-trash' aria-hidden='true'></i>
				</Button>
				<Button variant='outline-success' size='sm' onClick={onTaskImportant}>
					<i className='fa fa-exclamation' aria-hidden='true'></i>
				</Button>
			</ButtonToolbar>
		</div>
	);
};

export default TodoListItem;
