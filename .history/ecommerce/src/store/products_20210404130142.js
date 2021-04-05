

export default {

    state: {
    },
    mutations: {
    },
    actions: {
        getProducts: async ({commit}) => {
            const res = await axios.get('http://localhost:9999/api/products')
            commit('SET_PRODUCTS', res.data)
        },
        getProduct: async ({commit}, _id) => {
            const res = await axios.get('http://localhost:9999/api/products/${_id}')
            commit('SET_PRODUCT', res.data)
        }
    },


    modules: {
    }

}
