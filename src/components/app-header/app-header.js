import React from 'react';
import './app-header.css';

const AppHeader = ({ toDo, done }) => {
	return (
		<div
			className='app-header d-flex align-items-end mb-3'
			style={{ outline: '1px solid red' }}
		>
			<h1>Todo List</h1>
			<p className='ml-auto text-muted'>
				<span>{toDo}</span> more to do, <span>{done}</span> done
			</p>
		</div>
	);
};

export default AppHeader;
