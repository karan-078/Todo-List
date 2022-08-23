import React from "react";

const Mainu = ({ items }) => {
  return (
    <section className="containers" >
      {items.map((meanu) => {
        const { id, title, img, desc, price } = meanu;

        return (
          <>
           <div  className="image-container" key={id}>

              <img src={img} alt={title} />
              </div>
            <header>
              <h4>{title}</h4>
              <h2>{price}</h2>
            </header>
            <p>{desc}</p>

           
          </>
        );
      })}
    </section>
  );
};

export default Mainu;
