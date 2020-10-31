import React, { useState } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import TodoList from '../todo-list';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import Filters from '../filters';
import ItemAddForm from '../item-add-form';

import './app.css';

const createId = () => Math.random().toString().slice(-6);

const App = () => {
	const data = [
		createTodoItem('Drink Coffee'),
		createTodoItem('Make an Awesome App'),
		createTodoItem('Workout'),
	];

	const [todoData, setTodoData] = useState(data);
	const [activeFilter, setActiveFilter] = useState('all');
	const [searchRequest, setSearchRequest] = useState('');

	function createTodoItem(label) {
		return {
			label,
			id: createId(),
			important: false,
			done: false,
		};
	}

	const toggleProperty = (arr, id, prop) => {
		const idx = arr.findIndex((elem) => elem.id === id);
		const oldItem = arr[idx];
		const newItem = { ...oldItem, [prop]: !oldItem[prop] };
		return [...arr.slice(0, idx), newItem, ...arr.slice(idx + 1)];
	};

	const markAsDone = (id) => {
		setTodoData((state) => toggleProperty(state, id, 'done'));
	};

	const markAsImportant = (id) => {
		setTodoData((state) => toggleProperty(state, id, 'important'));
	};

	const deleteItem = (id) => {
		setTodoData((state) => state.filter((elem) => elem.id !== id));
	};

	const addItem = (label) => {
		if (label.trim()) {
			setTodoData((state) => [...state, createTodoItem(label)]);
		}
		return;
	};

	const onSearch = (text) => {
		setSearchRequest(text);
	};

	const search = (arr, request) => {
		if (request) {
			return arr.filter((elem) =>
				elem.label.toLowerCase().includes(request.toLowerCase())
			);
		} else {
			return arr;
		}
	};

	const onFilter = (filter) => {
		setActiveFilter(filter);
	};

	const filterItems = (arr, filter) => {
		switch (filter) {
			case 'all': {
				return arr;
			}
			case 'active': {
				return arr.filter(({ done }) => done === false);
			}
			case 'done': {
				return arr.filter(({ done }) => done === true);
			}
			default: {
				return arr;
			}
		}
	};

	const getNumOfProperties = (prop, isTrue) => {
		return todoData.filter((elem) => elem[prop] === isTrue).length;
	};

	const todosToShow = filterItems(
		search(todoData, searchRequest),
		activeFilter
	);

	return (
		<Container className='app'>
			<Row>
				<Col md='8' lg='6' className='col m-auto'>
					<AppHeader
						tasksToDo={getNumOfProperties('done', false)}
						doneTasksNum={getNumOfProperties('done', true)}
					/>
					<Row noGutters className='mb-3'>
						<Col sm className='outline mr-sm-1 mb-3 mb-sm-0'>
							<SearchPanel
								onSearch={onSearch}
								onFilter={onFilter}
								activeFilter={activeFilter}
							/>
						</Col>
						<Col sm>
							<Filters onFilter={onFilter} activeFilter={activeFilter} />
						</Col>
					</Row>
					<TodoList
						todos={todosToShow}
						onTaskDone={markAsDone}
						onTaskImportant={markAsImportant}
						onTaskDelete={deleteItem}
					/>
					<ItemAddForm onItemAdd={addItem} />
				</Col>
			</Row>
		</Container>
	);
};

export default App;
