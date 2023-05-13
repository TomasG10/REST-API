export const queries = {
    getAllProducers: 'SELECT * FROM producers',

    getProducerById: 'SELECT * FROM producers WHERE producer_id = @id',

    getStoredProcedure: 'EXEC get_products_by_sale_price_with_weight @min_price = 10.00, @max_price = 100.00, @start_date = "2023-05-13 20:16:58.200", @end_date = "2023-05-13 20:18:13.010"'
}