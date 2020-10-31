import React from 'react';
import './app-header.css';

const AppHeader = ({ doneTasksNum, tasksToDo }) => {
	return (
		<div className='app-header d-flex align-items-end mb-3'>
			<h1>Todo List</h1>
			<p className='ml-auto text-muted'>
				<span>{tasksToDo}</span> more to do, <span>{doneTasksNum}</span> done
			</p>
		</div>
	);
};

export default AppHeader;
