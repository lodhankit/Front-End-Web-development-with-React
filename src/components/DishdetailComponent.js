import React,{Component} from 'react';
import {Card,CardImg,CardText,CardBody, CardTitle} from 'reactstrap';

class DishDetail extends Component {
    constructor(props){
        super(props);
    }
    renderDish(card){
        if(card!=null){
            return (
                <Card>
                    <CardImg width="100%" src={card.image} alt={card.name} />
                    <CardBody>
                        <CardTitle>{card.name}</CardTitle>
                        <CardText>{card.description}</CardText>
                    </CardBody>
                </Card>
            );
        }
        else{
            return <div></div>
        }
    }
    renderComments(comment){
        const cmt = comment.map((ct)=>{
            const dt = new Intl.DateTimeFormat('en-US', {day:'2-digit' , month: 'long' , year:'numeric'}).format(new Date(ct.date));
            return (
                <li key={ct.id}>
                    <p>{ct.comment}</p>
                    <p>--{ct.author}, {dt}</p>
                </li>
            )
        })
        if(comment!=null){
            return (
                <div>
                    <h4>Comments</h4>
                    <ul class="list-unstyled">
                        {cmt}
                    </ul>
                </div>
            );
        }
        else{
            return <div></div>
        }
    }
    render(){
        const card = this.props.dish;
        if(card == null){
            return (<div></div>)
        }
        //const comment = this.renderComments();
        const comment = this.props.dish.comments;
        return (
            <div class="container">
                <div class="row">
                    <div class="col-12 col-sm-12 col-md-5 m-1">
                        {this.renderDish(card)}
                    </div>
                    <div class="col-12 col-sm-12 col-md-5 m-1">
                        {this.renderComments(comment)}
                    </div>
                </div>
            </div>
        )
    }
}
export default DishDetail