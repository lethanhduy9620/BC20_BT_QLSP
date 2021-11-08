function ProductService() {
    this.getListProductApi = function () {
        return axios({
            url: "https://6183cae691d76c00172d1b55.mockapi.io/api/products",
            method: "GET",
        });
    };
}