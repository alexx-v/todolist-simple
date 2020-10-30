import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import TodoList from '../todo-list';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';

import './app.css';

const createId = () => Math.random().toString().slice(-6);

const App = () => {
	const todoData = [
		{ label: 'Drink Coffee', important: false, id: createId() },
		{ label: 'Make App', important: true, id: createId() },
		{ label: 'Rest', important: false, id: createId() },
	];

	return (
		<Container className='app'>
			<Row>
				<Col md='8' lg='6' className='col m-auto'>
					<AppHeader />
					<SearchPanel />
					<TodoList todos={todoData} />
				</Col>
			</Row>
		</Container>
	);
};

export default App;
