import React, { useState } from 'react';

import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

const SearchPanel = ({ onSearch }) => {
	const [userInput, setUserInput] = useState('');

	const onUserInput = (evt) => {
		const request = evt.target.value;
		setUserInput(request);
		onSearch(request);
	};

	return (
		<InputGroup type='text' placeholder='Search'>
			<FormControl
				placeholder='Search'
				aria-label='Search'
				aria-describedby='basic-addon2'
				onChange={onUserInput}
				value={userInput}
			/>
		</InputGroup>
	);
};

export default SearchPanel;
