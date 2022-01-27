import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {
    constructor(props) {
        super(props);
        /*this.state = {
            selectedDish: null
        };*/
    }

    renderDish(dish){
        if (dish != null){

           return(
            
            <div className='col-12 col-md-5 m-1'>
                   <Card>
                       <CardImg width="100%" src={dish.image} alt={dish.name}></CardImg>
                       <CardBody>
                           <CardTitle>{dish.name}</CardTitle>
                           <CardText>{dish.description}</CardText>
                       </CardBody>
                   </Card>
            </div>        
            
            );
        }
        else {
            return(<div></div>);
        }
    }

    renderComments(theDish){
        if (theDish != null){            
            const commentList = theDish.comments.map((number) => {
                var date = new Date(number.date);
                var thisdate = date.toDateString();
                return <li>{number.comment}<br/><p>--{number.author},&nbsp;{thisdate}</p></li> 
           });           

            return(
                <div className='col-12 col-md-5 m-1'>
                    <h4>Comments</h4>
                        <ul>
                        {commentList}
                        </ul>
                </div>             
            );
        }
        else {
             return(<div></div>);
         }
    }

    render() {

        return (
            <div className="row">
                {this.renderDish(this.props.selectedDish)}
                {this.renderComments(this.props.selectedDish)}
            </div>
        );
    }
}

export default DishDetail;