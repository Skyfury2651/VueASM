export async function loadProducts({commit}) {
    commit('fetchProductsBegin')
    fetch('http://localhost:3000/api/v1/products')
        .then(response => response.json())
        .then((data) => {
            commit('fetchProductsSuccess', {
                data: data
            })
        })
}
