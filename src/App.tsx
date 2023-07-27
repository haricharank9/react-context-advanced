// index.tsx (or App.tsx)
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { Dashboard } from "./Components/Dashboard";
import { ExampleContextProvider } from "./Context/ExampleContext";

const client = new ApolloClient({
  uri: "https://beta.pokeapi.co/graphql/v1beta",
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <ExampleContextProvider>
        <Dashboard />
      </ExampleContextProvider>
    </ApolloProvider>
  );
};

export default App;
