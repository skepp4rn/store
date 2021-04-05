

export default {

    state: {
    },
    mutations: {
        SET_PRODUCTS: (state, products) => {
            state.products = products
        },
        SET_PRODUCT: (state, product) => {
            state.product = product
        }
    },
    actions: {
        getProducts: async ({commit}) => {
            const res = await axios.get('http://localhost:9999/api/products')
            commit('SET_PRODUCTS', res.data)
        },
        getProduct: async ({commit}, _id) => {
            const res = await axios.get(`http://localhost:9999/api/products/${_id}`)
            commit('SET_PRODUCT', res.data)
        }
    },


    modules: {
    }

}
