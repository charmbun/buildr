import useEditableList from "../../../hooks/useEditableList";
import deleteIcon from "../../../assets/icons/delete.svg";
import { emptyData } from "../../../data";

const PROJECT_FIELDS = [
  ["title", "TITLE *"],
  ["link", "LINK *"],
];

function Projects({ data, setData }) {
  const {
    activeId,
    setActiveId,
    activeItem: proj,
    updateItem,
    deleteItem,
    addItem,
  } = useEditableList(data.projects, setData, "projects", emptyData.projects);

  return (
    <section>
      <h2>Projects</h2>
      {/* LIST VIEW — shown when no item is selected */}
      {activeId === null ? (
        <>
          <ul>
            {data.projects.map((item) => (
              <li key={item.id}>
                {/* Clicking the item selects it for editing */}
                <button
                  className="list-item"
                  onClick={() => setActiveId(item.id)}
                >
                  {item.title || "Untitled"}
                </button>

                {/* Button to delete the project entry */}
                <button
                  className="delete-button"
                  onClick={() => deleteItem(item.id)}
                >
                  <img src={deleteIcon} alt="Delete" className="delete-icon" />
                </button>
              </li>
            ))}
          </ul>

          {/* Button to add a new project entry */}
          <button className="add-button" onClick={addItem}>
            + Add Project
          </button>
        </>
      ) : (
        <>
          {/* EDIT VIEW — shown when an item is selected */}
          {PROJECT_FIELDS.map(([name, label]) => (
            <div className="form-group" key={name}>
              <label htmlFor={name}>{label}</label>
              <input
                className="form-control"
                name={name}
                id={name}
                value={proj[name]}
                required
                onChange={(e) => updateItem(e.target.name, e.target.value)}
              />
            </div>
          ))}

          <div className="form-group">
            <label htmlFor="description">DESCRIPTION *</label>

            <textarea
              className="form-control"
              name="description"
              id="description"
              value={proj.description}
              onChange={(e) => updateItem(e.target.name, e.target.value)}
            />
          </div>

          {/* Action buttons for the active item */}
          <div className="action-buttons">
            {/* Delete the currently edited item */}
            <button
              className="delete-button"
              onClick={() => deleteItem(proj.id)}
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

export default Projects;
