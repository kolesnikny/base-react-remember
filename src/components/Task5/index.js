import React from 'react';

const Task5 = (props) => {
    return (
        <section className="task-container">
            <h2 className="task-header">Task 5. Формы</h2>
            <p className="task-description">
                Задание: создайте компоненту, которая содержит форму с инпутом
                для имени пользователя и кнопку "Отправить". При отправке формы
                должна вывести на экран "Здравствуйте" + имя пользователя,
                которое ввели в инпут.
            </p>
            <div className="task-main"></div>
        </section>
    );
};

export default Task5;
