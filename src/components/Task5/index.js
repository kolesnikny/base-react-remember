import React, { Component } from 'react';
import GreatingForm from './GreatingForm';

class Task5 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
        };
    }

    changeUsername = () => {};

    render() {
        return (
            <section className="task-container">
                <h2 className="task-header">Task 5. Формы</h2>
                <p className="task-description">
                    Задание: создайте компоненту, которая содержит форму с
                    инпутом для имени пользователя и кнопку "Отправить". При
                    отправке формы должна вывести на экран "Здравствуйте" + имя
                    пользователя, которое ввели в инпут.
                </p>
                <div className="task-main">
                    <GreatingForm />
                </div>
            </section>
        );
    }
}

export default Task5;
