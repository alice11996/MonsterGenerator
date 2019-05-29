import React from 'react';

const SearchBox = ({ searchfield , searchChange}) =>
{
	return (
			<div className='pa2'>
			<input
				className='ba b--light-pink  black dim pa2 br2 ba b--black-10 shadow-1'
			 type='search' 
			 placeholder = 'search Monsters'
			 onChange={searchChange}

			 />
			 </div>
		);



}

export default SearchBox;