import React,{ Component } from 'react';
import  {connect} from 'react-redux';

class BookDetail extends Component{
	render(){
		if(!this.props.book){
			return(
			<div> Please, select a book</div>
			);
		}

		return(
			<div>
			<h3>Details:</h3>
			<div> 
				<p>Title: { this.props.book.title }</p> 
				<p>Pages: { this.props.book.pages }</p> 
			 </div>
			</div>
		);
	}	
}

function mapStateToProps(state){
	return{
		book: state.activeBook
	}	
} 
export default connect(mapStateToProps)(BookDetail);
