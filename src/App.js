import React from 'react';

import CardList from './CardList';
import{ monsters }from './monsters.js'


const App= () =>
{ return(
		<CardList monsters={monsters} />


	)



}
export default App;