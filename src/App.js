import React , {Component} from 'react';
import CardList from './CardList';
import{ monsters }from './monsters.js';
import SearchBox from './SearchBox.js';


class App extends Component{
	constructor()
	{	super()
		this.state=
		{
			monsters: monsters,
			searchfield: ''

		}



	}

	onSearchChange =(event) =>
	{
		this.setState({searchfield : event.target.value})
		// console.log(event.target.value);
		
		// console.log(filteredMonsters);


	}

	render()
	{	const filteredMonsters = this.state.monsters.filter(monsters=>{
		return monsters.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
			})
		return(
		<div className= 'tc'>
		<h1> Monsters are Here </h1>
		<SearchBox searchChange={this.onSearchChange}/>
		<CardList monsters={filteredMonsters} />
		</div>

	);
	}
}
export default App;