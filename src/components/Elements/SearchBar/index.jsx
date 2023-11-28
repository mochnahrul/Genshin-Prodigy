import IconSVG from "./IconSVG";
import Input from "./Input";

const SearchBar = ({ value, onChange }) => {
  return (
    <div className="flex w-full items-center justify-start gap-x-2 overflow-hidden rounded-md bg-slate-100 p-2 ring-emerald-500 ring-offset-2 ring-offset-emerald-700 focus-within:ring-2">
      <IconSVG />
      <Input value={value} onChange={onChange} />
    </div>
  );
};

export default SearchBar;
