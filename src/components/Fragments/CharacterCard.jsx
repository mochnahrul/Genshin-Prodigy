import { Link } from "react-router-dom";

const CharacterCard = (props) => {
  const { children, id, src, alt, rarity } = props;

  // Function to clean and create slug-friendly URLs
  const generateSlug = (text) => {
    const cleanedText = text
      .toLowerCase()
      .replace(/\s+/g, "-") // Replace spaces with hyphens
      .replace(/[^a-z0-9-]/g, ""); // Remove special characters other than lowercase letters, numbers, and hyphens
    return cleanedText;
  };

  const slug = generateSlug(id);

  return (
    <Link to={`/${slug}`}>
      <div className="group flex flex-col items-center justify-center gap-y-3 text-center">
        <div
          className={`rarity-${rarity} flex-shrink-0 overflow-hidden rounded-lg transition-all group-hover:scale-105`}
        >
          <img src={src} className="h-full w-full" alt={alt} />
        </div>
        <p className="text-sm text-slate-100 transition-all group-hover:text-emerald-200">
          {children}
        </p>
      </div>
    </Link>
  );
};

export default CharacterCard;
