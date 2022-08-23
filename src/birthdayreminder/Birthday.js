import React, { useState } from "react";
import data from "./Birthdaydata";
const Birthday = () => {
  const [people, setpeople] = useState(data);

  return (
    <>
      <sectioon className="section-center">
        <div className="center">
          <h2>TODAY-BIRTHDAY {people.length}</h2>
          {people.map((person) => {
            const { id, name, image } = person;

            return (
              //  <div className="center" key={id}>
              <li key={id}>
                <img src={image} alt={name} />
                <h4>{name}</h4>
              </li>
            );
          })}
        </div>
        <button onClick={()=>setpeople([])}>CLEAR-LIST</button>
      </sectioon>
    </>
  );
};

export default Birthday;
