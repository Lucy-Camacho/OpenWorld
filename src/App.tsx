import HomePage from "./components/HomePage";
import { placeholderCampaigns, placeholderWorlds } from "./placeholderData";
import "./App.css";

// The root component. It gives the placeholder data to the main page.
function App() {
  return (
    <HomePage worlds={placeholderWorlds} campaigns={placeholderCampaigns} />
  );
}

export default App;
