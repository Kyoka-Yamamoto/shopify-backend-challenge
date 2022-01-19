import { getInventory, deleteInventoryItem } from "../../../services/requests"

const DeleteModal = ({ item, setModalItem, setModalType, setInventory }) => {
    const handleButtonClick = async (e) => {
        e.preventDefault()

        await deleteInventoryItem(item._id)

        const updatedInventory = await getInventory()
        setModalItem(null)
        setModalType(null)
        setInventory(updatedInventory) 
    }

    return (
        <div>
            <p>Permanently the item from archive?</p>
            <br />
            <button onClick={handleButtonClick}>YES</button>
        </div>
    )
}

export default DeleteModal