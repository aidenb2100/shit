const express = require("express");

const app = express();
const port = 3001;

app.get("/chart", async (req, res) => {});

app.get("/stock", async (req, res) => {});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

const StockService = require("./StockService");

const stockService = new StockService();

app.get("/chart", async (req, res) => {
    const { ticker } = req.query;
    const stockInfo = await stockService.getChart(ticker);
    res.send(stockInfo.data);
});

app.get("/stock", async (req, res) => {
    const { ticker } = req.query;
    const stockInfo = await stockService.getStockInfo(ticker);
    res.send(stockInfo?.data?.quoteSummary?.result);
});