import useEditableList from "../../../hooks/useEditableList";
import deleteIcon from "../../../assets/icons/delete.svg";
import { emptyData } from "../../../data";

const CERTIFICATE_FIELDS = [
  ["name", "NAME *"],
  ["organization", "ORGANIZATION *"],
  ["dateIssued", "ISSUE DATE *"],
];

function Certificates({ data, setData }) {
  const {
    activeId,
    setActiveId,
    activeItem: cert,
    updateItem,
    deleteItem,
    addItem,
  } = useEditableList(
    data.certificates,
    setData,
    "certificates",
    emptyData.certificates[0],
  );

  return (
    <section>
      <h2>Certificates</h2>
      {/* LIST VIEW — shown when no item is selected */}
      {activeId === null ? (
        <>
          <ul>
            {data.certificates.map((item) => (
              <li key={item.id}>
                {/* Clicking the item selects it for editing */}
                <button
                  className="list-item"
                  onClick={() => setActiveId(item.id)}
                >
                  {item.name || "Untitled"}
                </button>

                {/* Button to delete the certificate entry */}
                <button
                  className="delete-button"
                  onClick={() => deleteItem(item.id)}
                >
                  <img src={deleteIcon} alt="Delete" className="delete-icon" />
                </button>
              </li>
            ))}
          </ul>

          {/* Button to add a new certificate entry */}
          <button className="add-button" onClick={addItem}>
            + Add Certificate
          </button>
        </>
      ) : (
        <>
          {/* EDIT VIEW — shown when an item is selected */}
          {CERTIFICATE_FIELDS.map(([name, label]) => (
            <div className="form-group" key={name}>
              <label htmlFor={name}>{label}</label>
              <input
                className="form-control"
                name={name}
                id={name}
                value={cert[name]}
                onChange={(e) => updateItem(e.target.name, e.target.value)}
              />
            </div>
          ))}

          {/* Action buttons for the active item */}
          <div className="action-buttons">
            {/* Delete the currently edited item */}
            <button
              className="delete-button"
              onClick={() => deleteItem(cert.id)}
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

export default Certificates;
