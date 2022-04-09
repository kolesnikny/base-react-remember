import React from 'react';
import WarmOrCold from './WarmOrCold';

const Task2 = () => {
    let currentTemperature = 25;

    return (
        <section className="task-container">
            <h2 className="task-header">Task 2. Компоненты и Пропсы</h2>
            <p className="task-description">
                Задание: создать компоненту (подумайте, какая здесь будет лучше
                - функциональная или классовая), которая принимает температуру
                (числом) и на основании этого, если температура выше +18,
                выводит на экран "Сегодня тепло!", если меньше - то "Сегодня
                холодно!
            </p>
            <div className="task-main">
                <p>Input temperature {currentTemperature}</p>
                <WarmOrCold temperature={currentTemperature} />
            </div>
        </section>
    );
};

export default Task2;
