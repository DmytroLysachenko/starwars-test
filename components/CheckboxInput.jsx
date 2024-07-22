const CheckboxInput = ({ film, index, changeNodesAndEdges }) => {
  // Chechbox Input component to render in React chart flow checkboxes for hidding films connections

  return (
    <div
      className="absolute left-2.5 text-white"
      style={{
        top: 20 * index,
        zIndex: 4,
      }}
    >
      <label htmlFor={`${film.id}-ishidden`}>
        {`"${film.title}" - hidden`}
        <input
          id={`${film.id}-ishidden`}
          type="checkbox"
          onChange={(event) => {
            changeNodesAndEdges(`film-${film.id}`, event.target.checked);
          }}
          className="ml-2"
        />
      </label>
    </div>
  );
};

export default CheckboxInput;
