<template>
  <div>
    <p>This is the home page component</p>
    <input @keyup.enter.prevent="addStock" type="text" v-model="newStock">
    <button @click="addStock">Add Stock</button>
    <p v-for="stock in stocks" :key="stock.id">
      {{stock.symbol}}
      <button @click="deleteStock(stock.id)">X</button>
    </p>
  </div>
</template>

<script>
export default {
  name: 'MainBoard',
  props: {
    msg: String,
  },
  data() {
    return {
      stocks: [
        {
          id: 1,
          symbol: 'aapl',
        },
        {
          id: 2,
          symbol: 'amzn',
        },
      ],
      newStock: '',
      stockIdCounter: 0,
    };
  },
  methods: {
    addStock() {
      this.stocks.push(
        {
          id: this.stockIdCounter,
          symbol: this.newStock,
        },
      );
      this.stockIdCounter += 1;
      this.newStock = '';
    },
    deleteStock(id) {
      const stockToDelete = this.stocks.find((x) => x.id === id);
      const index = this.stocks.indexOf(stockToDelete.id);
      this.stocks.splice(index, 1);
    },
  },
  mounted() {
    this.stockIdCounter = this.stocks.length + 1;
  },
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
