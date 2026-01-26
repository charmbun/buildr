import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

function SortableSidebarItem({ id, icon, active, onClick }) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <button
      ref={setNodeRef}
      style={style}
      className={`sidebar-item ${active ? "active" : ""}`}
      onClick={onClick}
    >
      <span className="drag-handle" {...attributes} {...listeners}>
        ☰
      </span>

      <img src={icon} className="icon" />
    </button>
  );
}

export default SortableSidebarItem;
