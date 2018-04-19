import React,{ Components } from 'react';
import  {connect} from 'react-redux';

class BookDetail extends Components{
	render(){
		if(!this.props.book){
			return(
			<div> Please, select a book</div>
			)
		}
		return(
			<h3>Details for:</h3>
			<div>{this.props.book.title}</div>
		)
	}	
}

function mapStateToProps(state){
	book: state.activeBook
} 
export default connect(mapStateToProps)(BookDetail);
