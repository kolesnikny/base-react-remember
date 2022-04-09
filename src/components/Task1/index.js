import React from 'react';

const Task1 = () => {
    return (
        <section className="task-container">
            <h2 className="task-header">Task 1. JSX и Рендеринг</h2>
            <p className="task-description">
                Задание: создать React-элемент - строку-приветствие (например,
                "Здравствуйте, пользователь" или что-то вроде этого). Вывести ее
                на экран.
            </p>
            <div className="task-main">
                <h3>Hello User!</h3>
            </div>
        </section>
    );
};

export default Task1;
