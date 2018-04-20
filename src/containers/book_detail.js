import React,{ Components } from 'react';
import  {connect} from 'react-redux';

class BookDetail extends Components{
	render(){
		if(!this.props.book){
			return(
			<div> Please, select a book</div>
			);
		}
		return(
			<div>
			<h3>Details:</h3>
			<div> { this.props.book.title } </div>
			</div>
		);
	}	
}

function mapStateToProps(state){
	book: state.activeBook
} 
export default connect(mapStateToProps)(BookDetail);
