export default function Colorbutton({ colorName, setColor }) {
  return (
    <button
      onClick={() => {
        setColor(colorName);
      }}
      className="outline-none px-4 py-1 rounded-full text-white"
      style={{ backgroundColor: colorName }}
    >
      {colorName}
    </button>
  );
}
