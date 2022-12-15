import "./style.css";

const Form = () => (
    <form className="form">
        <input className="form__input" name="taskName" type="text" autofocus onfocus="this.value=''"
            placeholder="Co jest do zrobienia?" />
        <button className="form__button">Dodaj zadanie</button>
    </form>
);
export default Form;