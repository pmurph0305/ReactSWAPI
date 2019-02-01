import React, { Component } from 'react';
import SWButton from './SWButton'

class SWButtonList extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        console.log("ONLIST EVENT: " + event)
        this.props.onClick(event)
    }

    render() {
        if (this.props.buttons !== null) {
            return (
                
                    
                        this.props.buttons.map((btn,i) => {
                            return (
                                <SWButton
                                    className ={this.props.className}
                                    key={'key-'+i}
                                    id={btn}
                                    name={btn}
                                    onClick={this.handleClick}
                                />
                            )
                        })
                    
                
            )
        }
    }
}

export default SWButtonList;