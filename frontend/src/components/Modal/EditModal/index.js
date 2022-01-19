import { useState } from "react"
import { getInventory, updateInventoryItem } from "../../../services/requests"

const EditModal = ({ item, setModalItem, setModalType, setInventory }) => {
    const [updatedFields, setUpdatedFields] = useState({ 
        name: item && item.name, 
        quantity: item && item.quantity
    })

    const { 
        name,
        quantity,
    } = updatedFields

    const handleChange = (e, type) => {
        e.preventDefault()

        setUpdatedFields({
            ...updatedFields,
            [type]: e.target.value
        })
    }

    const handleButtonClick = async (e) => {
        e.preventDefault()

        await updateInventoryItem(item._id, updatedFields)

        const updatedInventory = await getInventory()
        setModalItem(null)
        setModalType(null)
        setInventory(updatedInventory) 
    }

    return (
        <div>
            <h3>Name</h3>
            <input onChange={e => handleChange(e, "name")} value={name || ""} />
            <h3>Quantity</h3>
            <input onChange={e => handleChange(e, "quantity")} value={quantity || 0} type="number"/>
            <br />
            <button onClick={handleButtonClick}>SUBMIT</button>
        </div>
    )
}

export default EditModal