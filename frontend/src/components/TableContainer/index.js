import { useState, useEffect } from "react";
import Table from "../Table"

import "./styles.css"

const tableTabs = ["All", "Active", "Archived"]

const getFilteredInventory = (inventory, activeTab) => {
    let filteredInventory = inventory

    if (activeTab === 1) {
        filteredInventory = inventory.filter(item => !item.archived)
    } else if (activeTab === 2) {
        filteredInventory = inventory.filter(item => item.archived)
    }

    return filteredInventory
}

const getInventoryCount = (inventory, tab) => {
    let inventoryCount = inventory.length

    if (tab === 1) {
        inventoryCount = inventory.filter(item => !item.archived).length
    } else if (tab === 2) {
        inventoryCount = inventory.filter(item => item.archived).length
    }

    return inventoryCount
}

function TableContainer({ inventory, setInventory }) {
    const [activeTab, setActiveTab] = useState(0)

    const filteredInventory = getFilteredInventory(inventory, activeTab)

    useEffect(() => {

    }, [])

    const handleTabClick = (tab) => {
        setActiveTab(tab)
    }
    
    const renderTableTabs = (activeTab) => {
        const tabsToRender = tableTabs.map((tab, index) => {
            const isActiveTab = activeTab === index
            const inventoryCount = inventory && getInventoryCount(inventory, index)

            return (
                <span key={tab} className={`table-tab ${isActiveTab && "active"}`} onClick={() => handleTabClick(index)}>{`${tab} (${inventoryCount})`}</span>
            )
        })
    
        return tabsToRender
    }

    return (
        <div className="table-container">
            <div className="table-tabs-container">
                {renderTableTabs(activeTab)}
            </div>
            <Table inventory={filteredInventory} activeTab={activeTab} setInventory={setInventory}/>
        </div>
    );
}

export default TableContainer;
