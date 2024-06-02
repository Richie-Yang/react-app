import { useState } from "react";
import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";

export default function App() {
  const items = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix"];
  const [alertState, setAlert] = useState({ isOn: false, item: "" });

  const handleSelectItem = (item: string) => {
    console.log(item);
    setAlert({ isOn: true, item });
  };

  return (
    <div>
      {alertState.isOn && (
        <Alert onClose={() => setAlert({ isOn: false, item: "" })}>
          Omg! this is {alertState.item}!
        </Alert>
      )}
      <ListGroup items={items} title="Cities" onSelectItem={handleSelectItem} />
    </div>
  );
}
