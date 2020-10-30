import React from 'react';

import './todo-list-item.css';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';

const TodoListItem = ({ label, important = false }) => {
	return (
		<div className='todo-list-item d-flex align-items-center'>
			<p>{label}</p>
			<ButtonToolbar className='ml-auto'>
				<Button variant='outline-danger' size='sm' className='mr-1'>
					<i className='fa fa-trash' aria-hidden='true'></i>
				</Button>
				<Button variant='outline-success' size='sm'>
					<i className='fa fa-exclamation' aria-hidden='true'></i>
				</Button>
			</ButtonToolbar>
		</div>
	);
};

export default TodoListItem;
