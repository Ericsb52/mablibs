import React, {Component} from 'react';
import Input from './input';

class Card extends Component{
    render(){
        return(
            <div className='card'>
                {Input("Lable")}
                {Input("noun")}
                {Input("color")}
            </div>
        )
    }
}
export default Card;