
export default function BeneficioReducer(state, action) {
    switch (action.type) {
        case 'add':
            return [...state, action.payload];
        case 'remove':
            return state.filter((item) => item.id !== action.payload);
        case 'update':
            return state.map(beneficio => {
                if (beneficio.id === action.payload.id) {
                    return action.payload;
                }
                return beneficio;
            });
        default:
            return state;
    }
}