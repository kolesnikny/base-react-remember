import React, { Component } from 'react';
import Bulb from './Bulb';

class Task3 extends Component {
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
        return (
            <section className="task-container">
                <h2 className="task-header">Task 3. Состояние</h2>
                <p className="task-description">
                    Задание: создать компоненту "Лампочка". В качестве лампочки
                    - кружок с желтым бордером. Лампочка включена - кружок
                    заполнен цветом. Лампочка выключена - кружок пуст. Рядом с
                    лампочкой приделать кнопку-переключатель. Можно стилизовать
                    и сделать toggle button, чтоб как выключатель прям)
                </p>
                <div className="task-main">
                    <Bulb
                        switchState={this.state.isSwitchedOn}
                        lightSwitcher={this.changeSwitched}
                    />
                </div>
            </section>
        );
    }
}

export default Task3;
