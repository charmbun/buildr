import useEditableList from "../../../hooks/useEditableList";
import deleteIcon from "../../../assets/icons/delete.svg";
import { emptyData } from "../../../data";

const EDUCATION_FIELDS = [
  ["school", "SCHOOL *"],
  ["degree", "DEGREE *"],
  ["dateGraduated", "DATE OF GRADUATION *"],
];

function Education({ data, setData }) {
  const {
    activeId,
    setActiveId,
    activeItem: edu,
    updateItem,
    deleteItem,
    addItem,
  } = useEditableList(
    data.education,
    setData,
    "education",
    emptyData.education
  );

  return (
    <section>
      <h2>Education</h2>

      {/* LIST VIEW — shown when no item is selected */}
      {activeId === null ? (
        <>
          <ul>
            {data.education.map((item) => (
              <li key={item.id}>
                {/* Clicking the item selects it for editing */}
                <button
                  className="list-item"
                  onClick={() => setActiveId(item.id)}
                >
                  {item.school || "Untitled"}
                </button>

                {/* Button to delete the education entry */}
                <button
                  className="delete-button"
                  onClick={() => deleteItem(item.id)}
                >
                  <img src={deleteIcon} alt="Delete" className="delete-icon" />
                </button>
              </li>
            ))}
          </ul>

          {/* Button to add a new education entry */}
          <button className="add-button" onClick={addItem}>
            + Add Education
          </button>
        </>
      ) : (
        <>
          {/* EDIT VIEW — shown when an item is selected */}
          {EDUCATION_FIELDS.map(([name, label]) => (
            <div className="form-group" key={name}>
              <label htmlFor={name}>{label}</label>
              <input
                className="form-control"
                name={name}
                id={name}
                value={edu[name]}
                onChange={(e) => updateItem(e.target.name, e.target.value)}
              />
            </div>
          ))}

          <div className="form-group">
            <label htmlFor="description">DESCRIPTION</label>

            <textarea
              className="form-control"
              name="description"
              id="description"
              value={edu.description}
              onChange={(e) => updateItem(e.target.name, e.target.value)}
            />
          </div>

          {/* Action buttons for the active item */}
          <div className="action-buttons">
            {/* Delete the currently edited item */}
            <button
              className="delete-button"
              onClick={() => deleteItem(edu.id)}
            >
              Delete
            </button>

            {/* Exit edit mode and return to list view */}
            <button className="save-button" onClick={() => setActiveId(null)}>
              Save
            </button>
          </div>
        </>
      )}
    </section>
  );
}

export default Education;
