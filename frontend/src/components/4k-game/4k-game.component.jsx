import { useEffect, useState } from "react";
import NoteSlider from "../note-slider/note-slider.component";
import Note from "../note/note.component";

const keys = ["d", "f", "j", "k"];

function FourKGame() {
  const [sliders, setSliders] = useState([
    [<Note key="0" />],
    [<Note key="1" />],
    [<Note key="2" />],
    [<Note key="3" />],
  ]);

  return (
    <div>
      {sliders.map((element, index) => {
        return (
          <NoteSlider
            key={index}
            info={{
              index,
              key: keys[index],
              removeNote: (i) => {
                const newArr = [...sliders];
                newArr[i].pop();
                setSliders(newArr);
              },
            }}
          >
            {element[0]}
          </NoteSlider>
        );
      })}
    </div>
  );
}
// onKeyDown={(event) => {
//   console.log(event);
// }}
export default FourKGame;
