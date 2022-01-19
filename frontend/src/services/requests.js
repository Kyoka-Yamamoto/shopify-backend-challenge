export const createInventoryItem = async ( query) => {
    const response = await fetch("http://localhost:8000/inventory/", {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            items: [
                query
            ]
        })
    });

    await response.json()

    return true
}

export const getInventory = async () => {
    const response = await fetch("http://localhost:8000/inventory");
    const inventory = await response.json()

    return inventory;
}

export const updateInventoryItem = async (itemId, query) => {
    const response = await fetch(`http://localhost:8000/inventory/${itemId}`, {
        method: "PATCH",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(query)
    });

    await response.json()

    return true
}

export const deleteInventoryItem = async (itemId) => {
    const response = await fetch(`http://localhost:8000/inventory/${itemId}`, {
        method: "DELETE",
    });

    await response.json()

    return true
}