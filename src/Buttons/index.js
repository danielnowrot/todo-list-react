import "./style.css";

const Buttons = ({ tasks, hideDone, toggleHideDone }) => (
    tasks.length > 0 && (
        <div className="section__buttons">
            <button
                onClick={toggleHideDone}
                className={`button__hideAll 
               ${tasks.some(({ done }) => done) ? "" : "disabled"}`}>
                {hideDone ? "Pokaż " : "Ukryj "}ukończone
            </button>
            <button
                className="button__doneAll"
                disabled={tasks.every(({ done }) => done)}>
                Ukończ wszystkie
            </button>
        </div>
    )
);


export default Buttons;