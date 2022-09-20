import React from "react";

export const SideSheetsDrawerContext = React.createContext({
  open: true,
  toggleDrawer: () => {},
});

export const SideSheetsDrawerContextProvider = ({ children }) => {
  const [open, setOpen] = React.useState(true);

  const toggleDrawer = () => setOpen((pS) => !pS);

  const context = { open, toggleDrawer };

  return (
    <SideSheetsDrawerContext.Provider value={context}>
      {children}
    </SideSheetsDrawerContext.Provider>
  );
};
