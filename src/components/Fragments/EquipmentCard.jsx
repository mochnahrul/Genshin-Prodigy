const EquipmentCard = (props) => {
  const { children, src, alt, rarity, piece } = props;

  const shouldRenderPiece = piece && piece !== "R0";

  return (
    <div className="flex flex-row items-center justify-start gap-x-2">
      <div
        className={`rarity-${rarity} h-12 w-12 flex-shrink-0 overflow-hidden rounded-sm`}
      >
        <img src={src} className="h-full w-full" alt={alt} />
      </div>
      <p className="text-sm text-slate-100">{children}</p>
      {shouldRenderPiece && (
        <div className="rounded-md bg-emerald-600 px-2 py-1">
          <p className="text-xs text-slate-100">{piece}</p>
        </div>
      )}
    </div>
  );
};

export default EquipmentCard;
