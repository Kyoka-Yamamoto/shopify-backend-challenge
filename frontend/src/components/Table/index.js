import { useState } from "react";
import Modal from "../Modal"

import "./styles.css"

function Table({ inventory, activeTab, setInventory }) {
    const [modalItem, setModalItem] = useState(null)
    const [modalType, setModalType] = useState(null)

    const handleButtonClick = (item, type) => {
        setModalItem(item)
        setModalType(type)
    }

    const getInventoryHeaders = (activeTab) => {
        let headers = []
    
        if (activeTab === 0 || activeTab === 1) {
            headers = ["Name", "Quantity", "Archived", "Created At", "Updated At", "", "", ""]
        } else if (activeTab === 2) {
            headers = ["Name", "Quantity", "Archived", "Archive Comment", "Created At", "Updated At", "", "", ""]
        }
    
        return headers
    }
    
    const getInventoryRow = (item, activeTab) => {
        const { 
            name,
            quantity,
            archived,
            archive_comment: archiveComment,
            created_at: createdAt,
            updated_at: updatedAt
        } = item
    
        let inventoryRow = null
    
        if (activeTab === 0 || activeTab === 1) {
            const archiveButtonText = archived ? "RESTORE" : "ARCHIVE"
            inventoryRow = (
                <tr key={`${name}-${createdAt}`}>
                    <td>{name}</td>
                    <td>{quantity || 0}</td>
                    <td>{archived ? "True" : "False"}</td>
                    <td>{createdAt}</td>
                    <td>{updatedAt}</td>
                    <td onClick={() => handleButtonClick(item, "EDIT")} className="button-active">EDIT</td>
                    <td onClick={() => handleButtonClick(item, archiveButtonText)}className="button-active">{archiveButtonText}</td>
                    <td onClick={() => archived ? handleButtonClick(item, "DELETE") : null}className={`button${archived ? "-active" : ""}`}>{"DELETE"}</td>
                </tr>
            )
        } else if (activeTab === 2) {
            inventoryRow = (
                <tr key={`${name}-${createdAt}`}>
                    <td>{name}</td>
                    <td>{quantity || 0}</td>
                    <td>{archived ? "True" : "False"}</td>
                    <td>{archiveComment}</td>
                    <td>{createdAt}</td>
                    <td>{updatedAt}</td>
                    <td onClick={() => handleButtonClick(item, "EDIT")} className="button-active">EDIT</td>
                    <td onClick={() => handleButtonClick(item, "RESTORE")} className="button-active">RESTORE</td>
                    <td onClick={() => handleButtonClick(item, "DELETE")} className="button-active">DELETE</td>
                </tr>
            )
        }
    
        return inventoryRow
    }
    
    const renderInventoryHeaders = (activeTab) => {
        const headers = getInventoryHeaders(activeTab)
    
        const headersToRender = headers && headers.map((header, index) => (
            <th key={`${header}-${index}`}>{header}</th>
        ))
    
        return headersToRender
    }
    
    const renderInventoryRows = (inventory, activeTab) => {
        const rowsToRender = inventory && inventory.map(item => getInventoryRow(item, activeTab))
    
        return rowsToRender
    }

    return (
        <div>
            <Modal item={modalItem} type={modalType} setModalItem={setModalItem} setModalType={setModalType} setInventory={setInventory}/>
            <button onClick={() => handleButtonClick(null, "CREATE")}>CREATE</button>
            <table className="table">
                <thead>
                    <tr>
                        {inventory && renderInventoryHeaders(activeTab)}
                    </tr>
                </thead>
                <tbody>
                    {inventory && renderInventoryRows(inventory, activeTab)}
                </tbody>
            </table>
        </div>
    );
}

export default Table;
