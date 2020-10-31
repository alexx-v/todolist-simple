import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const ItemAddForm = ({ onItemAdd }) => {
	const [userInput, setUserInput] = useState('');

	const onUserInput = (evt) => {
		setUserInput(evt.target.value);
	};

	const onSubmit = (evt) => {
		evt.preventDefault();
		onItemAdd(userInput);
		setUserInput('');
	};

	return (
		<Form onSubmit={onSubmit}>
			<Form.Group>
				<Form.Control
					as='textarea'
					rows={3}
					onChange={onUserInput}
					value={userInput}
				/>
			</Form.Group>
			<Button variant='primary' type='submit' className='float-right'>
				Add new task
			</Button>
		</Form>
	);
};

export default ItemAddForm;
