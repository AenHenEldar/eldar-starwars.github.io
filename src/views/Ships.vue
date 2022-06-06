<template>
  <ShipList
      :ships="ships"
      :prev="prevShips"
      :next="nextShips"
      :loading="loading"
      @prev-ships="prevShipsHandler"
      @next-ships="nextShipsHandler"
      @search-ships="searchShipsHandler"
  />
</template>

<script>
import ShipList from '@/components/ShipList';

export default {
  name: 'App',
  components: {
    ShipList
  },
  data() {
    return {
      ships: [],
      loading: true,
      prevShips: null,
      nextShips: null
    }
  },
  mounted() {
    fetch('https://swapi.dev/api/starships/')
        .then(response => response.json())
        .then(json => {
          this.loading = false;
          this.ships = json.results;
          this.prevShips = json.previous;
          this.nextShips = json.next;
        })
  },
  methods: {
    prevShipsHandler: function() {
      if(this.prevShips && !this.loading) {
        this.ships = [];
        this.loading = true;
        fetch(this.prevShips)
            .then(response => response.json())
            .then(json => {
              this.loading = false;
              this.ships = json.results;
              this.prevShips = json.previous;
              this.nextShips = json.next;
            })
      }
    },
    nextShipsHandler: function() {
      if(this.nextShips && !this.loading) {
        this.ships = [];
        this.loading = true;
        fetch(this.nextShips)
            .then(response => response.json())
            .then(json => {
              this.loading = false;
              this.ships = json.results;
              this.prevShips = json.previous;
              this.nextShips = json.next;
            })
      }
    },
    searchShipsHandler: function(e) {
      this.ships = [];
      this.loading = true;
      fetch(`https://swapi.dev/api/starships/?search=${e.target.value}`)
          .then(response => response.json())
          .then(json => {
            this.loading = false;
            this.ships = json.results;
            this.prevShips = json.previous;
            this.nextShips = json.next;
          })
    }
  }
}
</script>
