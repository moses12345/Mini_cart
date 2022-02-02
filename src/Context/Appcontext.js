import React from "react";

// Creating the context object and passing the default values.
const AppContext = React.createContext({ items: [], updatingItems: () => {} });

export default AppContext;
