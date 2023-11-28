const Vision = (props) => {
  const { src, alt, selected } = props;
  return (
    <div
      className={`cursor-pointer rounded-md p-2 md:hover:bg-emerald-600 ${
        selected ? "bg-emerald-600" : ""
      }`}
    >
      <img src={src} className="h-full w-full" alt={alt} />
    </div>
  );
};

export default Vision;
