<template>
  <div>
    <h1>BitRegret</h1>
    <h2>If you had invested <input v-model.number="this.invested" type="number" placeholder="number"> in Bitcoin the {{this.date.toString()}} you would now have :</h2>
    <div class="loss">{{computeLoss(this.date,this.invested)}}</div>
  </div>
</template>

<script>
import axios from "axios";
import moment from "moment";
export default {
  name: "app",
  data() {
    return {
      invested: 100,
      loss: 0,
      date: new Date(2012, 5, 28),
      price: 0
    };
  },
  methods: {
    computeLoss: (date, invested) => {
      var dateFormat = date => moment(date, "YYYY-MM-DD");
      var getPrices = date =>
        axios
          .get(
            `https://api.coindesk.com/v1/bpi/historical/close.json?start=${date}?end=${date}`
          )
          .then(json => {
            try {
              return JSON.parse(json, (bpi, dateAndPrice) => {
                JSON.parse(dateAndPrice, (date, price) => price);
              });
            } catch (e) {
              console.log("Error during parsing of the price", e);
            }
          });
      var valueAtThisTime = getPrices(dateFormat(date));
      var numberOfBitcoinYouCouldHaveHad = invested / valueAtThisTime;
      var priceOfBitcoinToday = getPrices(dateFormat(Date.now()));
      return Math.abs(
        invested - numberOfBitcoinYouCouldHaveHad * priceOfBitcoinToday
      );
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
