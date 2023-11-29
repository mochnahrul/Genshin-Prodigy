import { useEffect, useMemo, useState } from "react";
import Vision from "../Elements/Vision";
import SearchBar from "../Elements/SearchBar";
import CharacterCard from "../Fragments/CharacterCard";
import { getVisions } from "../../services/vision.service";
import { getCharacters } from "../../services/character.service";

const Main = () => {
  const [visions, setVisions] = useState([]);
  const [characters, setCharacters] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [selectedVision, setSelectedVision] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getVisions((data) => {
      setVisions(data);
    });
  }, []);

  useEffect(() => {
    setIsLoading(true);
    getCharacters((data) => {
      setCharacters(data);
      setIsLoading(false);
    });
  }, [setIsLoading]);

  const filteredCharacters = useMemo(() => {
    const trimmedInput = searchInput.trim().toLowerCase();

    let filtered = characters;

    // Filter based on search input
    if (trimmedInput !== "") {
      filtered = filtered.filter((character) =>
        character.name.toLowerCase().includes(trimmedInput),
      );
    }

    // Filter based on selected vision
    if (selectedVision) {
      filtered = filtered.filter(
        (character) => character.vision.name === selectedVision,
      );
    }

    return filtered;
  }, [characters, searchInput, selectedVision]);

  const handleVisionClick = (clickedVision) => {
    // Toggle the selection
    setSelectedVision((prevSelectedVision) =>
      prevSelectedVision === clickedVision ? null : clickedVision,
    );
  };

  return (
    <div className="min-h-screen bg-slate-900">
      <div className="container">
        {/* Hero */}
        <div className="flex flex-row flex-wrap items-center justify-center pb-[2rem] pt-[5rem]">
          <div className="w-full px-3 lg:w-2/3">
            <div className="flex flex-col gap-y-4 text-center">
              <h2 className="text-3xl font-bold leading-tight text-slate-100 lg:text-5xl">
                Professional Character Guidance for{" "}
                <span className="bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">
                  Travelers
                </span>
              </h2>
              <p className="text-base text-slate-400 lg:text-lg">
                Learn how to maximize your characters potential, embark on your
                epic adventure with confidence, and build your character
                limitlessly!
              </p>
            </div>
          </div>
        </div>
        {/* End of Hero */}

        {/* Character List */}
        <div className="flex flex-row flex-wrap items-center justify-center pb-[5rem] pt-[1rem]">
          <div className="w-full px-3 lg:w-4/5">
            {isLoading ? (
              <div className="text-center">
                <p className="text-lg text-slate-100">Loading...</p>
              </div>
            ) : (
              <div className="overflow-hidden rounded-xl shadow-xl">
                <div className="flex flex-row flex-wrap items-center justify-between gap-y-4 bg-emerald-700 px-3 py-6 md:px-5 md:py-8">
                  <div className="w-full px-3 lg:w-[60%]">
                    <div className="flex flex-row flex-wrap items-center justify-center lg:justify-start">
                      {visions.length > 0 &&
                        visions.map((vision, index) => (
                          <div
                            key={index + 1}
                            className="w-[14.28571428571429%] md:w-[10%]"
                            onClick={() => handleVisionClick(vision.name)}
                          >
                            <Vision
                              src={vision.image}
                              alt={vision.name}
                              selected={vision.name === selectedVision}
                            />
                          </div>
                        ))}
                    </div>
                  </div>
                  <div className="w-full px-3 lg:w-[40%]">
                    <SearchBar
                      value={searchInput}
                      onChange={(e) => setSearchInput(e.target.value)}
                    />
                  </div>
                </div>
                <div className="flex flex-row flex-wrap gap-y-6 bg-slate-800 px-3 py-6 md:px-5 md:py-8">
                  {filteredCharacters.map((character, index) => (
                    <div
                      key={index + 1}
                      className="w-1/4 px-3 md:w-1/6 lg:w-[12.5%]"
                    >
                      <CharacterCard
                        id={character.name}
                        src={character.image}
                        alt={character.name}
                        rarity={character.rarity}
                      >
                        {character.name}
                      </CharacterCard>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
        {/* End of Character List */}
      </div>
    </div>
  );
};

export default Main;
