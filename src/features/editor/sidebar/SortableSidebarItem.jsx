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
    <div className={styles.sidebarItemWrapper}>
      {/* Grip handle — sits outside the button, only handles drag */}
      <span className={styles.dragHandle} {...attributes} {...listeners} />

      {/* Button — only handles click/navigation */}
      <button
        ref={setNodeRef}
        style={style}
        className={`${styles.sidebarItem} ${active ? styles.active : ""}`}
        onClick={onClick}
      >
        <img src={icon} className={styles.icon} />
      </button>
    </div>
  );
}

export default SortableSidebarItem;
