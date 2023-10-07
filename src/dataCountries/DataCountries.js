export const ProductService = {
    getProductsData() {
        return [
            {
                name: 'Bamboo Watch',
            },
            {

                name: 'Black Watch',
            },
            {

                name: 'Blue Band',

            },
            {
                separator: true
            },

            {

                name: 'Blue T-Shirt',

            },
            {

                name: 'Bracelet',

            },
            {

                name: 'Brown Purse',

            },
            {

                name: 'Chakra Bracelet',

            },
            {

                name: 'Galaxy Earrings',

            },
            {

                name: 'Game Controller',

            },

        ]
    },
    getProductsMini() {
        return Promise.resolve(this.getProductsData().slice(0, 5));
    },

    getProductsSmall() {
        return Promise.resolve(this.getProductsData().slice(0, 10));
    },

    getProducts() {
        return Promise.resolve(this.getProductsData());
    },

    getProductsWithOrdersSmall() {
        return Promise.resolve(this.getProductsWithOrdersData().slice(0, 10));
    },

    getProductsWithOrders() {
        return Promise.resolve(this.getProductsWithOrdersData());
    }
};