import React, { Component } from 'react';

class CatList extends Component {

	render() {
		
        const cats = this.props.catPics.map(cat => <img src={cat.url} alt="just cats"/>);
		return (
		<div>
            {this.props.loading ?  "Loading..." : cats}	
		</div>
		)
	}

}

export default CatList;