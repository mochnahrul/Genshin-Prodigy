import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import GuideWrapper from "../Fragments/GuideWrapper";
import Number from "../Elements/Number";
import EquipmentCard from "../Fragments/EquipmentCard";
import { getCharacterBuild } from "../../services/build.service";

const DetailLayout = () => {
  const { name } = useParams();
  const [character, setCharacter] = useState([]);
  const [selectedRole, setSelectedRole] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getCharacterBuild(name, (data) => {
      setCharacter(data);
      setIsLoading(false);
    });
  }, [name]);

  useEffect(() => {
    if (character.build && selectedRole === "") {
      setSelectedRole(character.build[0].role);
    }
  }, [character, selectedRole]);

  const handleRoleChange = (e) => {
    setSelectedRole(e.target.value);
  };

  return (
    <div className="min-h-screen bg-slate-900">
      <div className="container">
        <div className="flex flex-row flex-wrap py-[5rem]">
          <div className="w-full px-3">
            {isLoading ? (
              <div className="text-center">
                <p className="text-lg text-slate-100">Loading...</p>
              </div>
            ) : (
              <div className="overflow-hidden rounded-xl shadow-xl">
                <div className="flex flex-row flex-wrap bg-emerald-700 px-0 py-6 md:px-2 md:py-8">
                  <div className="w-full px-3">
                    <div className="flex flex-col flex-wrap items-center justify-start gap-y-4 md:flex-row">
                      <div className="w-1/2 px-3 md:w-[15%]">
                        <div
                          className={`rarity-${character.rarity} h-full w-full flex-shrink-0 overflow-hidden rounded-full border-4 border-slate-100 shadow-lg`}
                        >
                          <img
                            src={character.image}
                            className="h-full w-full"
                            alt={character.name}
                          />
                        </div>
                      </div>
                      <div className="w-full px-3 md:w-[85%]">
                        <div className="flex flex-col items-center justify-between gap-y-6 md:flex-row">
                          <div className="flex flex-col items-center justify-center gap-y-3 md:items-start">
                            <div className="flex flex-row items-center justify-start gap-x-2">
                              <h2 className="text-2xl font-semibold text-slate-100">
                                {character.name}
                              </h2>
                              <img
                                src={character.vision.image}
                                className="h-[24px] w-[24px]"
                                alt={character.vision.name}
                              />
                            </div>
                            <div className="flex flex-row flex-wrap gap-3">
                              <div className="rounded-md bg-emerald-600 px-3 py-2">
                                <p className="text-sm text-slate-200">
                                  {character.weapon}
                                </p>
                              </div>
                              <div className="rounded-md bg-emerald-600 px-3 py-2">
                                <p className="text-sm text-slate-200">
                                  {character.region}
                                </p>
                              </div>
                            </div>
                          </div>
                          <select
                            className="min-w-full rounded-md border border-emerald-500 bg-emerald-600 px-3 py-2 text-sm text-slate-100 ring-emerald-500 ring-offset-2 ring-offset-emerald-700 focus:outline-0 focus:ring-2 md:min-w-[12rem]"
                            onChange={handleRoleChange}
                            value={selectedRole}
                          >
                            {character.build.map((build, index) => (
                              <option key={index} value={build.role}>
                                {build.role}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row flex-wrap gap-y-8 bg-slate-800 px-0 py-6 md:px-2 md:py-8">
                  <div className="w-full px-3">
                    <div className="flex flex-row flex-wrap gap-y-8">
                      <div className="w-full lg:w-1/2">
                        <GuideWrapper title="Weapon">
                          {character.build
                            .find((build) => build.role === selectedRole)
                            ?.weapon.map((weapon, index) => (
                              <div key={index + 1} className="w-full px-3">
                                <div className="flex flex-row items-center justify-start gap-x-3 rounded-md bg-slate-700 px-3">
                                  <Number>{index + 1}</Number>
                                  <EquipmentCard
                                    src={weapon.image}
                                    alt={weapon.name}
                                    rarity={weapon.rarity}
                                    piece={"R" + weapon.refine}
                                  >
                                    {weapon.name}
                                  </EquipmentCard>
                                </div>
                              </div>
                            ))}
                        </GuideWrapper>
                      </div>
                      <div className="w-full lg:w-1/2">
                        <GuideWrapper title="Artifact">
                          {character.build
                            .find((build) => build.role === selectedRole)
                            ?.artifact.map((artifact, index) => (
                              <div key={index + 1} className="w-full px-3">
                                {Array.isArray(artifact.mix) ? (
                                  // Handle the case where the artifact has "mix" property
                                  <div className="flex flex-row items-center justify-start gap-x-3 rounded-md bg-slate-700 px-3">
                                    <Number>{index + 1}</Number>
                                    <div className="flex flex-col gap-y-2">
                                      {artifact.mix.map((mix, index) => (
                                        <EquipmentCard
                                          key={index + 1}
                                          src={mix.image}
                                          alt={mix.name}
                                          rarity={mix.rarity}
                                          piece={mix.piece}
                                        >
                                          {mix.name}
                                        </EquipmentCard>
                                      ))}
                                    </div>
                                  </div>
                                ) : (
                                  // Handle the case where the artifact is a single item
                                  <div className="flex flex-row items-center justify-start gap-x-3 rounded-md bg-slate-700 px-3">
                                    <Number>{index + 1}</Number>
                                    <EquipmentCard
                                      src={artifact.image}
                                      alt={artifact.name}
                                      rarity={artifact.rarity}
                                      piece={artifact.piece}
                                    >
                                      {artifact.name}
                                    </EquipmentCard>
                                  </div>
                                )}
                              </div>
                            ))}
                        </GuideWrapper>
                      </div>
                    </div>
                  </div>
                  <div className="w-full px-3">
                    <GuideWrapper title="Artifact Stats">
                      {character.build
                        .find((build) => build.role === selectedRole)
                        ?.artifactStats[0].mainStats.map((stat, index) => (
                          <div key={index + 1} className="w-full px-3 md:w-1/3">
                            <div className="rounded-md bg-slate-700 px-3 py-4 text-center">
                              <p className="text-sm text-slate-100">
                                {stat.name}
                              </p>
                            </div>
                          </div>
                        ))}
                      {character.build
                        .find((build) => build.role === selectedRole)
                        ?.artifactStats[1].subStats.map((stat, index) => (
                          <div key={index + 1} className="w-full px-3">
                            <div className="rounded-md bg-slate-700 px-3 py-4 text-center">
                              <p className="text-sm text-slate-100">
                                {stat.name}
                              </p>
                            </div>
                          </div>
                        ))}
                    </GuideWrapper>
                  </div>
                  <div className="w-full px-3">
                    <GuideWrapper title="Talent Priority">
                      {character.build
                        .find((build) => build.role === selectedRole)
                        ?.talentPriority.map((talent, index) => (
                          <div key={index + 1} className="w-full px-3 md:w-1/3">
                            <div className="flex flex-row items-center justify-start gap-x-2 rounded-md bg-slate-700 p-3">
                              <Number>{index + 1}</Number>
                              <p className="text-sm text-slate-100">
                                {talent.name}
                              </p>
                            </div>
                          </div>
                        ))}
                    </GuideWrapper>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailLayout;
