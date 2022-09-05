import React, { useState } from "react";
import HPbar from "../HPbar/HPbar";
import enemyHPbar from "../HPbar/enemyHPbar";


return (
  <div className="App">
    <HPbar currentHP={50} maxHP={100} />
    <enemyHPbar enemyHP={50} enemyMaxHP={100}/>
  </div>
);
