import React from 'react';
import Pepperoni from './images/pepperoni.jpg';
import MeatLover from './images/meat.jpg';
import Veggie from './images/veggie.jpeg';
import Hawaiian from './images/hawaiian.jpg';
import Bbq from './images/bbq.jpg';
import plain from './images/plain.jpg';
import Slice from './slice'
import './css/menu.css';

function Menu() {
  return(
    <div className='Menu container-fluid'>
      <h1 className='primary-text'>New York's World Famous</h1>
      <h1 className='secondary-text'>Pizza Menu</h1>
      <div className='row'>
       <Slice 
       img= {plain}
       title= "plain"
       description="It's got cheese, it's got tomato sauce, and it's only  a dollar. What more could you ask for?"
       price="$1.00" />
       <Slice 
       img={Bbq}
       title="BBQ"
       description="Perhaps the most popular slicewe offer. BBQ chicken over a delicious dollar pizza. What more could one want in life ?."
       price="$2.00"/>
       <Slice 
       img={Pepperoni}
       description= "It's got cheese, it's got tomato sauce, and it's got pepperoni. One of the best topping you could hope for."
       price= "$5.00"/>
       <Slice 
       img= {Hawaiian}
       title= "Hawaiian"
       description="We know, you think this is gross. But try this once and we swear you'll be hooked on this pineapple and ham pizza."
       price="$2.00" />
       <Slice 
       img= {Veggie}
       title= "Veggie"
       description="You trying to be health but you still can't resist pizza ? Well then the veggie slice is for you! This is gluit-free pizza at it's finest."
       price="$3.00" />
       <Slice 
       img= {MeatLover}
       title= "Meat Lover"
       description="pepperoni not enough meat for you ? Well this slice has pepperoni, meatbslls, and sausage."
       price="$10.00" />
      </div>
    </div>
  );
}

export default Menu;

