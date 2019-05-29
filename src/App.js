import React , {Component} from 'react';
import CardList from './CardList';
// import{ monsters }from './monsters.js';
import SearchBox from './SearchBox.js';
import './App.css';

class App extends Component{
	constructor()
	{	super()
		this.state=
		{
			monsters: [],
			searchfield: ''

		}



	}


	componentDidMount()
	{	fetch('https://jsonplaceholder.typicode.com/users')


			.then(response =>{

				return response.json();


	})

		.then(users => {

			this.setState({monsters:users});

		})

		

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

	if (this.state.monsters.length ===0)
	{	
		return <h1 className='pa4 tc'> Loading </h1>

	}
	else{return(
		<div className= 'tc'>
		<h1 className='f1'> Monsters are Here </h1>
		<SearchBox searchChange={this.onSearchChange}/>
		<CardList monsters={filteredMonsters} />
		</div>

	);
}
		
	}
}
export default App;