import React from 'react';

class SWStatChange extends React.Component {
    constructor() {
        super();
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        this.props.onClick(event.target.value)
    }

    render() {
        return (
            
            
                <p className='yellow'>Displayed Stats:
                    <button
                    className={this.props.className}
                    value='more'
                    onClick={this.handleClick}>More</button>
                    <button
                    className={this.props.className}
                    value='less'
                    onClick={this.handleClick}>Less</button>
                </p>
            
        )
    }
}

export default SWStatChange;