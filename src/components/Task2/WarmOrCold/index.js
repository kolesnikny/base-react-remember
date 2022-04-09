import './WarmOrCold.css';

const WarmOrCold = (props) => {
    const comparableValue = 18;
    const response =
        props.temperature >= comparableValue
            ? 'Сегодня тепло!'
            : 'Сегодня холодно!';
    return <p className="task2-temperatue-response">{response}</p>;
};

export default WarmOrCold;
