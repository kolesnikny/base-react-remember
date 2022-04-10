import './Bulb.css';

const Bulb = (props) => {
    const cn = props.switchState ? 'light on' : 'light';

    return (
        <div className={cn}>
            <div className="wire"></div>
            <div className="bulb">
                <span></span>
                <span></span>
            </div>
            <div className="switch">
                <div className="btn" onClick={props.lightSwitcher}></div>
            </div>
        </div>
    );
};

export default Bulb;
