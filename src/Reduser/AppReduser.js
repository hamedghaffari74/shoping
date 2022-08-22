

function AppReduser(state, action) {
    switch (action.type) {
        case 'add-list':
            return listProduct(state, action);
            break;
       

    }
}


let listProduct = (state, action) => {
    let { Fee, Title } = action.payload;

    return {
        ...state,
        products: [
            ...state.products,
            { key: Date.now(), Fee, Title }],


    }

}

// let listCart = (state, action) => {
    
// }

export default AppReduser
