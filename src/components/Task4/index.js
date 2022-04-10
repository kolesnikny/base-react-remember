import React from 'react';
import ProductsList from './ProductsList';

const Task4 = () => {
    const productsList = [
        'Мука',
        'Вода',
        'Яйца',
        'Томатная паста',
        'Пеперони',
        'Моцарелла',
    ];

    return (
        <section className="task-container">
            <h2 className="task-header">Task 4. Списки</h2>
            <p className="task-description">
                Задание: создать компоненту, которая принимает в качестве
                пропсов набор продуктов: const array = ["Мука", "Вода", "Яйца",
                "Томатная паста", "Пеперони", "Моцарелла"] Компонента должна
                вывести заголовок "Ингредиенты для пиццы" и принятый массив в
                качестве ненумерованного списка.
            </p>
            <div className="task-main">
                <ProductsList products={productsList} />
            </div>
        </section>
    );
};

export default Task4;
