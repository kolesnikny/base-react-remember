import React, { Component } from 'react';
import NameInputForm from './NameInputForm';
import GreatingWindow from './GreatingWindow';
import './Task5.css';

class Task5 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
        };
    }

    changeUsername = (event) => {
        event.preventDefault();
        this.setState({
            username: event.target[0].value,
        });
    };

    render() {
        console.log(this.state.username);
        const nameComponent =
            this.state.username.length > 0 ? (
                <GreatingWindow name={this.state.username} />
            ) : (
                <NameInputForm changeName={this.changeUsername} />
            );
        return (
            <section className="task-container">
                <h2 className="task-header">Task 5. Формы</h2>
                <p className="task-description">
                    Задание: создайте компоненту, которая содержит форму с
                    инпутом для имени пользователя и кнопку "Отправить". При
                    отправке формы должна вывести на экран "Здравствуйте" + имя
                    пользователя, которое ввели в инпут.
                </p>
                <div className="task-main">{nameComponent}</div>
            </section>
        );
    }
}

export default Task5;
