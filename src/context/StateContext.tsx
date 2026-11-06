"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

interface StateContextProps {
  _dark_mode: boolean;
  _handle_set_dark_mode: () => void;
}

const StateContext = createContext<StateContextProps | null>(null);

const StateContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [_dark_mode, _set_dark_mode] = useState<boolean>(true);

  const _handle_set_dark_mode = useCallback(
    () => _set_dark_mode((_dark_mode) => !_dark_mode),
    []
  );

  const contextValue = useMemo<StateContextProps>(
    () => ({ _dark_mode, _handle_set_dark_mode }),
    [_dark_mode, _handle_set_dark_mode]
  );

  return (
    <StateContext.Provider value={contextValue}>
      {children}
    </StateContext.Provider>
  );
};

const useStateContext = () => {
  const context = useContext(StateContext);

  if (!context) {
    throw new Error(
      "useStateContext harus digunakan di dalam StateContextProvider"
    );
  }

  return context;
};

export { StateContextProvider, StateContext, useStateContext };
