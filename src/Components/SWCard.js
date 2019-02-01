import React, { Component } from 'react';

class SWCard extends Component {
    render() {
        return (
            <div className='tc bg-near-black dib br3 pa3 ma2 grow bw2 moon-gray shadow-5 shadow-white '>
                <h2 className='tc ttc yellow'>{this.props.name}</h2>
                <ul className="list ttc p10 tl">
                    {
                        this.props.keys.slice(0,this.props.statsDisplayed).map((key,index) => {
                            return <li key={key+index}>{key.replace(/[_-]/g, " ")}: {this.props.values[index]}</li>
                        })
                    }
                 
                </ul>
            </div>
        )
    }
}

export default SWCard;