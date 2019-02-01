import React from 'react';
 
class SWButton extends React.Component {
    constructor() {
        super();
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        console.log("FROM BTN NAMED: " + this.props.name);
        this.props.onClick(this.props.name)
    }

    render() {
        return (
            <button
                id={this.props.id}
                className = {this.props.className}
                onClick = {this.handleClick}
                >
                {this.props.name}
                
            </button>
        )
    }
}



export default SWButton;