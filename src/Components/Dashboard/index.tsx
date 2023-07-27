// App.tsx (or any other component that uses the context)
import { useExampleContext } from "../../Context/ExampleContext";

export const Dashboard = () => {
  const { state, updateHandler } = useExampleContext();
  console.log(state);
  // Dispatch actions to update the context state
  const handleButtonClick = () => {
    updateHandler({ name: "New Poke", cost: 20 });
  };

  return (
    <div>
      <p>Name: {state[0].name}</p>
      <p>Cost: ${state[0].cost}</p>
      <button onClick={handleButtonClick}>Update Property</button>
    </div>
  );
};
