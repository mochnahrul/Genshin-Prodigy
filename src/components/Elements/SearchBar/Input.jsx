const Input = ({ value, onChange }) => {
  return (
    <input
      className="h-full w-full bg-slate-100 pr-2 text-sm text-slate-900 outline-none"
      type="text"
      placeholder="Search for characters"
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
