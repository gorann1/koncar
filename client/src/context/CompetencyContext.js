import React, { useState, createContext } from "react";

export const CompetencyContext = createContext();

export const CompetencyContextProvider = (props) => {
  const [competencies, setCompetencies] = useState([]);
  const [selectedCompetency, setSelectedCompetency] = useState(null);

  const addCompetency = (competency) => {
    setCompetencies([...competencies, competency]);
  };
  return (
    <CompetencyContext.Provider
      value={{
        competencies,
        setCompetencies,
        addCompetency,
        selectedCompetency,
        setSelectedCompetency,
      }}
    >
      {props.children}
    </CompetencyContext.Provider>
  );
};