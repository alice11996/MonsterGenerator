import React from 'react';

const Card = ({name,email,id}) => 
{ 
	return(
		<div className="tc mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10 f4 fw7 dib pa2 no-underline bg-animate bg-white hover-bg-light-blue black shadow-5">
			<img alt ='robots ' src={`https://robohash.org/${id}?set=set2`}/>
		
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
		</div>
		</div>



		);



}
export default Card;