import { useState } from "react"
import { getInventory, createInventoryItem } from "../../../services/requests"

const CreateModal = ({ setModalItem, setModalType, setInventory }) => {
    const [newItem, setNewItem] = useState({ 
        name: "", 
        quantity: 0
    })
    const [createNew, setCreateNew] = useState(false)

    const { 
        name,
        quantity,
    } = newItem

    const handleChange = (e, type) => {
        e.preventDefault()

        setNewItem({
            ...newItem,
            [type]: e.target.value
        })
    }

    const handleButtonClick = async (e) => {
        e.preventDefault()

        await createInventoryItem(newItem)

        const updatedInventory = await getInventory()
        setModalItem(null)
        setCreateNew(false)
        setNewItem({ name: "", quantity: 0 })
        setModalType(createNew ? "CREATE" : null)
        setInventory(updatedInventory) 
    }

    const handleCheckboxClick = () => {
        setCreateNew(!createNew)
    }

    return (
        <div>
            <h3>Name</h3>
            <input onChange={e => handleChange(e, "name")} value={name || ""} />
            <h3>Quantity</h3>
            <input onChange={e => handleChange(e, "quantity")} value={quantity || 0} type="number"/>
            <br />
            <input onChange={handleCheckboxClick} checked={createNew} type="checkbox"/>
            <span>Create Another</span>
            <button onClick={handleButtonClick}>SUBMIT</button>
        </div>
    )
}

export default CreateModal