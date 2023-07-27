// useMyContext.tsx
import { useQuery } from "@apollo/client";
import {
  FC,
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { IPokemonList, IPokemonv2item } from "../../Models/IPokemon";
import { EXAMPLE_GRAPHQL_QUERY } from "../../graphql/query";
import { ExampleReducerActionTypes, stateReducer } from "./reducer";
import { IContextType } from "./types";

// Create the context
const ExampleContext = createContext<IContextType | null>(null);

// Custom hook to access the context
export const useExampleContext = () => {
  const context = useContext(ExampleContext);
  if (!context) {
    throw new Error(
      "useExampleContext must be used within a ExampleContextProvider"
    );
  }
  return context;
};

// Custom hook to fetch GraphQL data
const useExampleGraphQLQuery = () => {
  const { data, loading, error, refetch } = useQuery<IPokemonList>(
    EXAMPLE_GRAPHQL_QUERY
  );

  if (loading) {
    // Handle loading state if needed
  }

  if (error) {
    console.log(error);
  }

  return { data, refetch };
};

// Custom context provider wrapper component
export const ExampleContextProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [flag, setFlag] = useState<boolean>(false);
  const { data, refetch } = useExampleGraphQLQuery(); // Fetch data using the GraphQL query
  // Set up the context state using useReducer
  const [state, dispatch] = useReducer(stateReducer, []);
  const updateHandler = useCallback((newState: IPokemonv2item) => {
    dispatch({
      type: ExampleReducerActionTypes.update,
      payload: newState,
    });
  }, []);

  const refreshState = useCallback(async () => {
    const { data } = await refetch();
    dispatch({
      type: ExampleReducerActionTypes.refresh,
      payload: data?.pokemon_v2_item!,
    });
  }, [refetch]);

  useEffect(() => {
    dispatch({
      type: ExampleReducerActionTypes.refresh,
      payload: data?.pokemon_v2_item || [],
    });
  }, [data]);

  const flipFlag = useCallback(() => {
    setFlag(v => !v);
  }, []);

  // Define your initial context state based on the fetched data
  const initialValue: IContextType = {
    flag,
    flipFlag,
    state,
    updateHandler,
    refreshState,
  };
  return state?.length ? (
    <ExampleContext.Provider value={initialValue}>
      {children}
    </ExampleContext.Provider>
  ) : (
    <p>Loading...</p>
  );
};
