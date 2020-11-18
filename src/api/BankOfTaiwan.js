import axios from "axios";

export default axios.create({
    // three months: ltm, six months: l6m
    baseURL: 'https://cors-anywhere.herokuapp.com/https://rate.bot.com.tw/xrt/quote/ltm/'
});
