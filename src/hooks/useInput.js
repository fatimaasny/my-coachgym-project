import { useState } from "react";

export function useInput() {
  const [editedState, setEditedState] = useState(false);
  const [validate, setValidate] = useState(true);

  function handleEditedState(state) {
    setEditedState(state);
  }
  function handleValidate(state) {
    setValidate(state);
  }

  function handleReset() {
    setEditedState(false);
    setValidate(true);
  }

  return {
    handleEditedState,
    handleValidate,
    error: editedState && !validate,
    handleReset,
  };
}
