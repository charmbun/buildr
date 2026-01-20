import { useState } from "react";

/**
 * Reusable hook for editing lists of items
 *
 * Responsibilities:
 * - Track which item is currently being edited
 * - Update fields on the active item
 * - Add new items to the list
 * - Delete items from the list
 *
 * @param {Array} items - The array of items to manage
 * @param {Function} setData - The setState function from App.jsx
 * @param {String} key - The property name in the global data object
 * @param {Object} emptyItem - Template object for creating a new item
 */
export default function useEditableList(items, setData, key, emptyItem) {
  const [activeId, setActiveId] = useState(null);
  const activeItem = items.find((item) => item.id === activeId);

  /**
   * Update a single field on the active item
   * Keeps the rest of the list unchanged (immutable update)
   *
   * @param {String} name - Field name to update
   * @param {any} value - New value for the field
   */
  function updateItem(name, value) {
    setData((prev) => ({
      ...prev,
      [key]: prev[key].map((item) =>
        item.id === activeId ? { ...item, [name]: value } : item
      ),
    }));
  }

  /**
   * Delete an item from the list by id
   * If the deleted item is currently active, exit edit mode
   *
   * @param {String} id - ID of the item to delete
   */
  function deleteItem(id) {
    setData((prev) => ({
      ...prev,
      [key]: prev[key].filter((item) => item.id !== id),
    }));

    if (id === activeId) setActiveId(null);
  }

  /**
   * Add a new item to the list
   * Uses the emptyItem template and immediately sets it as active.
   */
  function addItem() {
    const newItem = {
      id: crypto.randomUUID(),
      ...emptyItem,
    };

    setData((prev) => ({
      ...prev,
      [key]: [...prev[key], newItem],
    }));

    // Immediately open the new item for editing
    setActiveId(newItem.id);
  }

  return {
    activeId,
    setActiveId,
    activeItem,
    updateItem,
    deleteItem,
    addItem,
  };
}
