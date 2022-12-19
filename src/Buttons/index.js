import "./style.css";

const Buttons = ({ tasks, hideDoneTasks }) => (
    tasks.length > 0 && (
        <div className="section__buttons">
            <button
                className={`button__hideAll 
               ${tasks.some(({ done }) => done) ? "" : "disabled"}`}>
                {hideDoneTasks ? "Pokaż " : "Ukryj "}ukończone
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