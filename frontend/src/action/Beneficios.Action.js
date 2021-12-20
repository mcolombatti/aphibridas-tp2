
export function BeneficioRemove(id) {
    return {
        type: 'remove',
        payload: { id }
    };
}

export function BeneficioAdd(beneficio) {
    return {
        type: 'add',
        payload: beneficio
    };
}
export default {
    BeneficioRemove, BeneficioAdd
}
