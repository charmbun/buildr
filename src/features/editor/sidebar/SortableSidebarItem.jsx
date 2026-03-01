import styles from "./Sidebar.module.css";

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
      className={`${styles.sidebarItem} ${active ? styles.active : ""}`}
      onClick={onClick}
    >
      <span className={styles.dragHandle} {...attributes} {...listeners}>
        ☰
      </span>

      <img src={icon} className={styles.icon} />
    </button>
  );
}

export default SortableSidebarItem;
