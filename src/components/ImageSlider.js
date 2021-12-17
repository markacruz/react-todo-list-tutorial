import React from 'react';

export default class ImageSlider extends React.Component {
    
    state = {
        images: [
            "https://images.fineartamerica.com/images-medium-large-5/niagara-falls-in-fall-colors-orchidpoet.jpg",
            "https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/valley-of-gods-john-b-mueller-photography.jpg",
            "https://images.fineartamerica.com/images-medium-large-5/niagara-falls-in-autumn-frozen-in-time-fine-art-photography.jpg"
        ],
        idx: 0
    };
    
    handleNext = () => {
            this.setState({
                idx: this.state.idx + 1
            });
    }

    handlePrev = () => {
            this.setState({
                idx: this.state.idx - 1
            });
    }

    render() {
        return (
            <div>

                <button onClick={this.handlePrev}>
                    previous
                </button>


                <img
                style={{ width: 100, height: 100 }} 
                src={this.state.images[this.state.idx]} alt="hello"
                />

                <button onClick={this.handleNext}>
                    next
                </button>
                
            </div>
            )
        }
    }
