
export function ProductRemove(id) {
    return {
        type: 'remove',
        payload: id
    };
}

export function ProductAdd(product) {
    return {
        type: 'add',
        payload: product
    };
}
export function ProductsGet(product) {
    return {
        type: 'get',
        payload: product
    };
}
