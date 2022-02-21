import React,{Component} from 'react';
import DishDetail from './DishdetailComponent';
import {Card,CardImg,CardImgOverlay,CardText,CardBody, CardTitle} from 'reactstrap';
class Menu extends Component{
    constructor(props){
        super(props);
        this.state = {
            selectDish: null
        };

    }

    onDishSelect(dish){
        this.setState({selectDish:dish})
    }

    renderDish(dish){
        if(dish!=null){
            return (
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        }
        else{
            return <div></div>
        }
    }
    render(){
        const menu = this.props.dishes.map((dish)=>{
            return (
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    <Card onClick={()=>this.onDishSelect(dish)}>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });
        console.log(this.state.selectDish)
        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>
                <DishDetail dish = {this.state.selectDish}/>
            </div>
        );
    }
}
export default Menu;