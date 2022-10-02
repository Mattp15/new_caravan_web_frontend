import { Component } from 'react';
import Slider from 'react-slick';
import Card from './Card';

class CardSliderbad extends Component{
    // constructor(props) {
    //     super(props);
        
    //     const { ownedCards, cardsInDeck, onClick } = props;
    // }
        
    render() {
        // const settings = {
        //     className: "center",
        //     centerMode: true,
        //     infinite: true,
        //     centerPadding: "60px",
        //     slidesToShow: 3,
        //     speed: 500,
        //     rows: 2,
        //     slidesPerRow: 2
        // };
        const settings = {
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 5,
            slidesToScroll: 3,
            rows: 2,
        };

        return (
            <div>
                <Slider {...settings}>
                    {/* {this.props.ownedCards.map((card, idx) => {      */}
                            <>
                                {/* {console.log({idx}, 'ownedCards.length : ', this.props.ownedCards.length)} */}
                         {/*       <Card key={idx} card={card} idx={idx} isFaceUp={this.props.cardsInDeck[idx]?true:false} onClick={this.props.onClick} />    {/*cards in deck*/}
                         {/*       <Card key={idx + this.props.ownedCards.length} card={card} idx={idx} isFaceUp={this.props.cardsInDeck[idx]?false:true} onClick={this.props.onClick} />    {/*cards owned*/}
                            </>
                        
                     {/* })}; */}
                    <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
          <div>
            <h3>7</h3>
          </div>
          <div>
            <h3>8</h3>
          </div>
          <div>
            <h3>9</h3>
          </div>
          <div>
            <h3>10</h3>
          </div>
          <div>
            <h3>11</h3>
          </div>
          <div>
            <h3>12</h3>
          </div>
          <div>
            <h3>13</h3>
          </div>
          <div>
            <h3>14</h3>
          </div>
          <div>
            <h3>15</h3>
          </div>
          <div>
            <h3>16</h3>
          </div>
                </Slider>
            </div>
        );
    };
}
export default CardSliderbad;
