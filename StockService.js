const axios = require("axios");

class StockService {
    async getStockInfo(AAPL) {
        return await axios.get(
            `https://query1.finance.yahoo.com/v11/finance/quoteSummary/${ticker}?modules=financialData`
        );
    }

    async getChart(AAPL) {
        return await axios.get(
            `https://query1.finance.yahoo.com/v8/finance/chart/${ticker}?&interval=1d&range=10d`
        );
    }
}

module.exports = StockService;