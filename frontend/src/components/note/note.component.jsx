import { useState } from "react";
import "./note.style.css";
import { useEffect } from "react";

function Note() {
  const [distance, setDistance] = useState(4);

  useEffect(() => {
    setTimeout(() => {
      setDistance(distance >= 100 ? 100 : distance + 0.7);
    }, 10);
  });

  return (
    <div className="note" style={{ top: `calc(${distance}% - 1rem)` }}></div>
  );
}
export default Note;
