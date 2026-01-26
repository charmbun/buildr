import { DndContext, closestCenter } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
  arrayMove,
} from "@dnd-kit/sortable";
import { restrictToVerticalAxis } from "@dnd-kit/modifiers";

import SortableSidebarItem from "./SortableSidebarItem";

import personalIcon from "../../../assets/icons/personal.svg";
import skillsIcon from "../../../assets/icons/skills.svg";
import experienceIcon from "../../../assets/icons/experience.svg";
import projectsIcon from "../../../assets/icons/projects.svg";
import educationIcon from "../../../assets/icons/education.svg";
import certificateIcon from "../../../assets/icons/certificate.svg";

const sectionIcons = {
  personal: personalIcon,
  skills: skillsIcon,
  experience: experienceIcon,
  projects: projectsIcon,
  education: educationIcon,
  certificates: certificateIcon,
};

function Sidebar({
  sectionOrder,
  setSectionOrder,
  activeSection,
  setActiveSection,
}) {
  function handleDragEnd(event) {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    setSectionOrder((prev) =>
      arrayMove(prev, prev.indexOf(active.id), prev.indexOf(over.id)),
    );
  }

  return (
    <nav className="sidebar">
      <DndContext
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
        modifiers={[restrictToVerticalAxis]}
      >
        <SortableContext
          items={sectionOrder}
          strategy={verticalListSortingStrategy}
        >
          {sectionOrder.map((id) => (
            <SortableSidebarItem
              key={id}
              id={id}
              icon={sectionIcons[id]}
              active={activeSection === id}
              onClick={() => setActiveSection(id)}
            />
          ))}
        </SortableContext>
      </DndContext>
    </nav>
  );
}

export default Sidebar;
