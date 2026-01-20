import useEditableList from "../../../hooks/useEditableList";
import deleteIcon from "../../../assets/icons/delete.svg";
import { emptyData } from "../../../data";

function Skills({ data, setData }) {
  const {
    activeId,
    setActiveId,
    activeItem: skill,
    updateItem,
    deleteItem,
    addItem,
  } = useEditableList(data.skills, setData, "skills", emptyData.skills);

  return (
    <section>
      <h2>Skills</h2>

      {activeId === null ? (
        <>
          {/* LIST VIEW — shown when no item is selected */}
          <ul>
            {data.skills.map((item) => (
              <li key={item.id}>
                {/* Clicking the item selects it for editing */}
                <button
                  className="list-item"
                  onClick={() => setActiveId(item.id)}
                >
                  {item.groupName || "Untitled"}
                </button>

                {/* Button to delete the skills entry */}
                <button
                  className="delete-button"
                  onClick={() => deleteItem(item.id)}
                >
                  <img src={deleteIcon} alt="Delete" className="delete-icon" />
                </button>
              </li>
            ))}
          </ul>

          {/* Button to add a new skills entry */}
          <button className="add-button" onClick={addItem}>
            + Add Skills
          </button>
        </>
      ) : (
        <>
          {/* EDIT VIEW — shown when an item is selected */}

          <div className="form-group">
            <label htmlFor="groupName">SKILL GROUP</label>
            <input
              className="form-control"
              name="groupName"
              id="groupName"
              value={skill.groupName}
              onChange={(e) => updateItem(e.target.name, e.target.value)}
            ></input>
          </div>

          <div className="form-group">
            <label htmlFor="items">LIST OF SKILLS</label>

            <textarea
              className="form-control"
              name="items"
              id="items"
              value={skill.items}
              onChange={(e) => updateItem(e.target.name, e.target.value)}
            />
          </div>

          {/* Action buttons for the active item */}
          <div className="action-buttons">
            {/* Delete the currently edited item */}
            <button
              className="delete-button"
              onClick={() => deleteItem(skill.id)}
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

export default Skills;
