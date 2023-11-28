const Number = (props) => {
  const { children } = props;
  return (
    <div className="rounded-md bg-slate-600 px-2 py-1">
      <p className="text-sm text-slate-100">{children}</p>
    </div>
  );
};
``;

export default Number;
