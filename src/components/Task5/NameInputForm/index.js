import React from 'react';

const NameInputForm = (props) => {
    const { changeName } = props;

    const editName = (event) => {
        changeName(event);
    };

    return (
        <form className="form-container" name="signIn" onSubmit={editName}>
            <label>Твое имя?</label>
            <input type="text" className="form-input" />
            <input className="form-button" type="submit" value="Отправить" />
        </form>
    );
};

export default NameInputForm;
