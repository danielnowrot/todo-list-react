import "./style.css";

const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone }) => (
    tasks.length > 0 && (
        <div className="section__buttons">
            <button
                onClick={toggleHideDone}
                className="button__hideAll">
                {hideDone ? "Pokaż " : "Ukryj "}ukończone
            </button>
            <button
                onClick={setAllDone}
                className="button__doneAll"
                disabled={tasks.every(({ done }) => done)}>
                Ukończ wszystkie
            </button>
        </div>
    )
);

export default Buttons;