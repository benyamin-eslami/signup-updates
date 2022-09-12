import React, { useState } from "react";
import Form from "./components/Form";
import List from "./components/List";
function App() {
  const [id, setId] = useState("");
  const [isEdited, setIsEdited] = useState(false);

  const getId = (id) => {
    setId(id);
  };
  const getIsEdited = (value) => {
    setIsEdited(value);
  };

  return (
    <React.Fragment>
      <div style={{ display: "flex" }}>
        <Form isEdited={isEdited} onGetId={getId} />
        <List onGetIsEdited={getIsEdited} id={id} />
      </div>
    </React.Fragment>
  );
}

export default App;
