import React from 'react';

import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';

const SearchPanel = () => {
	return (
		<InputGroup className='mb-3' type='text' placeholder='Search'>
			<FormControl
				placeholder='Search'
				aria-label='Search'
				aria-describedby='basic-addon2'
			/>
			<InputGroup.Append>
				<Button variant='info'>All</Button>
				<Button variant='outline-secondary'>Active</Button>
				<Button variant='outline-secondary'>Done</Button>
			</InputGroup.Append>
		</InputGroup>
	);
};

export default SearchPanel;
