
export function fetchProductsBegin(state) {
  state.products = []
}

export function fetchProductsSuccess(state, { data }) {
    state.products = data
}



