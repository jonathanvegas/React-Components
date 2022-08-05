import React from "react";
import { useState } from "react";

function Main() {
  const [count, setCount] = useState(0);
  const handleClick = () => setCount(count+1);
  return (
    <main>
      <h2>Main section here...</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis officia
        repellendus eum nemo dolorum quidem fuga earum, enim sapiente fugit
        repudiandae illo, itaque vero possimus porro optio reprehenderit,
        voluptas pariatur?
      <h3>Counter: {count}</h3>
      <button onClick={handleClick}>
        Click Me!
      </button>
      </p>
    </main>
  );
}

export default Main;
