import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

const Filters = ({ onFilter, activeFilter }) => {
	const buttons = [
		{ name: 'all', label: 'All' },
		{ name: 'active', label: 'Active' },
		{ name: 'done', label: 'Done' },
	].map(({ name, label }) => {
		const clazz = name === activeFilter ? 'info' : 'outline-secondary';
		return (
			<Button
				key={name}
				variant={clazz}
				name={name}
				onClick={(e) => onFilter(e.target.name)}
			>
				{label}
			</Button>
		);
	});

	return (
		<ButtonGroup className='d-flex justify-content-center'>
			{buttons}
		</ButtonGroup>
	);
};

export default Filters;
