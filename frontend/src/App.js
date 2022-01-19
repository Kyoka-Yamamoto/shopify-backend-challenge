import { useState, useEffect } from "react";
import { getInventory } from "./services/requests";

import TableContainer from "./components/TableContainer";

import './App.css';

function App() {
    const [inventory, setInventory] = useState(null)

    const initializeData = async () => {
        const inventory = await getInventory()

        setInventory(inventory)
    }

    useEffect(() => {
        initializeData();
    }, [])

    return (
        <div className="App">
            <h1>INVENTORY</h1>
            <TableContainer inventory={inventory} setInventory={setInventory}/>
        </div>
    );
}

export default App;
