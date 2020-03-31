// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'


Vue.config.productionTip = false
/* import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    invested: 100,
    loss: 0
  },
  methods: {
    getBitcoinPrice: (date) => {
      var price = this.$http
        .get(
        `api.condesk/v1/bpi/historical/close.json?start=${date.toLocaleFormat(
          "%Y-%m-%d"
        )}?end=${date.toLocaleFormat("%Y-%m-%d")}`
        )
        .then(json => {
          try {
            return JSON.parse(json, (bpi, dateAndPrice) => {
              JSON.parse(dateAndPrice, (date, price) => price)
            }
            );
          } catch (e) {
            console.log("Error during parsing of the price", e);
          }
        });
      return price;
    }
  },
  mutations: {
    computeLoss: () => {
      var valueAtThisTime = this.getBitcoinPrice(this.date)

      var numberOfBitcoinYouCouldHaveHad = Math.floor(
        this.invested / valueAtThisTime
      );

      var priceOfBitcoinToday = this.getBitcoinPrice(Date.now());

      var loss = Math.abs(
        this.invested - numberOfBitcoinYouCouldHaveHad * priceOfBitcoinToday
      );

      this.loss = loss;
    }
  }
}) */
/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)

})
