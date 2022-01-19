import { useState } from "react"
import { getInventory, updateInventoryItem } from "../../../services/requests"

const ArchiveModal = ({ item, setModalItem, setModalType, setInventory }) => {
    const [updatedFields, setUpdatedFields] = useState({
        archive_comment: item && item.archive_comment,
        archived: true,
    })

    const {
        archive_comment: archiveComment
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
            <h3>Archive Comment</h3>
            <input onChange={e => handleChange(e, "archive_comment")} value={archiveComment || ""} />
            <br />
            <button onClick={handleButtonClick}>Archive</button>
        </div>
    )
}

export default ArchiveModal