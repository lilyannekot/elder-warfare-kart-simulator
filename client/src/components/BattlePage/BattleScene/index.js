import React, { useState } from "react";
import HPbar from "../HPbar/HPbar";

// state for character HP(hitpoints)
const [HP, setHP] = useState(100);

return (
  <div className="App">
    <HPbar currentHP={50} maxHP={100} />
  </div>
);
