import React from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';


    function RenderDish({dish}){
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

    function RenderComments({theDish}){
        if (theDish != null){    

            const commentList = theDish.comments.map((number) => 
                <li>{number.comment}<br/><p>--{number.author},&nbsp;{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(number.date)))}</p></li> 
           );           

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
            //console.log(theDish);
             return(<div></div>);
         }
    }

    const DishDetail = (props) => {
        
        return (
            <div className="row">
                <RenderDish dish={props.dish} />
                <RenderComments theDish={props.dish} />
            </div>
        );
    }


export default DishDetail;