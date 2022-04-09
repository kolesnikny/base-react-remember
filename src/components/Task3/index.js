import React from 'react';
import Bulb from './Bulb';

const Task3 = () => {
    return (
        <section className="task-container">
            <h2 className="task-header">Task 3. Состояние</h2>
            <p className="task-description">
                Задание: создать компоненту "Лампочка". В качестве лампочки -
                кружок с желтым бордером. Лампочка включена - кружок заполнен
                цветом. Лампочка выключена - кружок пуст. Рядом с лампочкой
                приделать кнопку-переключатель. Можно стилизовать и сделать
                toggle button, чтоб как выключатель прям)
            </p>
            <div className="task-main">
                <Bulb />
            </div>
        </section>
    );
};

export default Task3;
