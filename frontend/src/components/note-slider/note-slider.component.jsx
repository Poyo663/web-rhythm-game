import "./note-slider.style.css";

function NoteSlider({ children, info }) {
  return (
    <div
      tabIndex="0"
      className="note-slider"
      onKeyDown={(event) => {
        console.log(info.key);
        if (event.key === info.key) {
          info.removeNote(info.index);
        }
      }}
    >
      {children}
      <div className="delimiter"></div>
    </div>
  );
}
export default NoteSlider;
