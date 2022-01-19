import ArchiveModal from "./ArchiveModal"
import CreateModal from "./CreateModal"
import DeleteModal from "./DeleteModal"
import EditModal from "./EditModal"
import RestoreModal from "./RestoreModal"

import "./styles.css"

const Modal = ({ item, type, setModalItem, setModalType, setInventory }) => {
    const modals = {
        EDIT: <EditModal item={item} setModalItem={setModalItem} setModalType={setModalType} setInventory={setInventory} />,
        ARCHIVE: <ArchiveModal item={item} setModalItem={setModalItem} setModalType={setModalType} setInventory={setInventory} />,
        DELETE: <DeleteModal item={item} setModalItem={setModalItem} setModalType={setModalType} setInventory={setInventory} />,
        RESTORE: <RestoreModal item={item} setModalItem={setModalItem} setModalType={setModalType} setInventory={setInventory} />,
        CREATE: <CreateModal setModalItem={setModalItem} setModalType={setModalType} setInventory={setInventory} />
    }

    const handleClose = () => {
        setModalItem(null)
        setModalType(null)
    }

    return (
        <div style={{ display: (item || (!item && type === "CREATE")) ? "flex" : "none" }} className="modal-container">
            <div className="modal">
                <div className="top-section">
                    <h2>{type}</h2>
                    <h2 className="button-close" onClick={handleClose}>X</h2>
                </div>
                {modals[type]}
            </div>
        </div>
    )
}

export default Modal