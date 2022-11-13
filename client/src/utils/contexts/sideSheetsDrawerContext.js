import React from "react";

export const SideSheetsDrawerContext = React.createContext({
  open: true,
  toggleDrawer: () => {},
  openDrawer: () => {},
  closeDrawer: () => {},
});

export const SideSheetsDrawerContextProvider = ({ children }) => {
  const [open, setOpen] = React.useState(true);

  const toggleDrawer = () => setOpen((pS) => !pS);

  const openDrawer = () => setOpen(true);

  const closeDrawer = () => setOpen(false);

  const context = { open, toggleDrawer, openDrawer, closeDrawer };

  return (
    <SideSheetsDrawerContext.Provider value={context}>
      {children}
    </SideSheetsDrawerContext.Provider>
  );
};
