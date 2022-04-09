import { Component } from 'react';
import './Bulb.css';

class Bulb extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSwitchedOn: false,
        };
    }

    changeSwitched = () => {
        this.setState({
            isSwitchedOn: !this.state.isSwitchedOn,
        });
    };

    render() {
        const cn = this.state.isSwitchedOn ? 'light on' : 'light';

        return (
            <div className={cn}>
                <div className="wire"></div>
                <div className="bulb">
                    <span></span>
                    <span></span>
                </div>
                <div className="switch">
                    <div className="btn" onClick={this.changeSwitched}></div>
                </div>
            </div>
        );
    }
}

export default Bulb;
