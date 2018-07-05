import React, {Component} from 'react';

class Content extends Component{
    render () {
        
        const data = this.props.data;
        return (
           <p>
               Ladies and gentemen. this is <b>{data.color }</b> Barber. your sportscaster. bringing you the last inning of the game between the cleveland <b>{data.pnoun}</b> and the <b>{data.adjectiveOne}</b> yankees <b>{data.celebOne}</b> is pitching for the Yankees. Here's the pitch! it's a low <b>{data.adjectiveTwo}</b> ball that just cuts the inside of the <b>{data.nounOne}</b> for a strike. That makes the count <b>{data.numberOne}</b> strikes <b>{data.numberTwo}</b> balls, Now here's the next pitch. the batter swings and connects. it's a long high<b>{data.nounTwo}</b> out to <b>{data.adjectiveThree}</b> feild. But <b>{data.celebTwo}</b> is coming up fast and has it for the second out. The next batter up is <b>{data.celebThree}</b>. the Cleveland <b>{data.adjectiveFour}</b>-stop Here's the pitch... and it's a hit... a short ground ball to third <b>{data.nounThree}</b>. <b>{data.celebFour}</b> scoops it up and throws it to first base for an out. and the game is over the yankees move into second place in the <b>{data.adjectiveFive}</b> league 
           </p>
        )
    }
}
export default Content;