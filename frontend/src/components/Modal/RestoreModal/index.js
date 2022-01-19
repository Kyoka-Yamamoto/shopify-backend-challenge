import { getInventory, updateInventoryItem } from "../../../services/requests"

const RestoreModal = ({ item, setModalItem, setModalType, setInventory }) => {
    const handleButtonClick = async (e) => {
        e.preventDefault()

        await updateInventoryItem(item._id, { archived: false })

        const updatedInventory = await getInventory()
        setModalItem(null)
        setModalType(null)
        setInventory(updatedInventory) 
    }

    return (
        <div>
            <p>Restore the item from archive?</p>
            <br />
            <button onClick={handleButtonClick}>YES</button>
        </div>
    )
}

export default RestoreModal