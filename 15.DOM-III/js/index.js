'use strict';

class CryptocurrencyExchange {
  constructor() {
    this.apiURL = `https://api.coinbase.com/v2/prices`;
    this.init();
  }

  init() {
    this.form = document.querySelector('form');
    this.cryptoOption = document.querySelector('#crypto-option');
    this.currencyOption = document.querySelector('#currency-option');
    this.cryptoValue = document.querySelector('#crypto-value');
    this.currencyValue = document.querySelector('#currency-value');
    this.registerEvents();
  }

  getData() {
    const buildURL = `${this.apiURL}/${this.cryptoOption.value}-${this.currencyOption.value}/spot`;

    fetch(buildURL)
      .then((response) => response.json())
      .then((dataObject) => {
        let price = dataObject.data.amount;
        let exchange = this.cryptoValue.value * price;
        this.currencyValue.value = exchange;
      });
  }

  registerEvents() {
    this.form.addEventListener('submit', (e) => {
      e.preventDefault();
      this.getData();
    });
  }
}

let cryptoExchange = new CryptocurrencyExchange();
