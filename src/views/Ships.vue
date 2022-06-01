<template>
  <Loader v-if="loading" />
  <ShipList
      :ships="ships"
      :prev="prevShips"
      :next="nextShips"
      @prev-ships="prevShipsHandler"
      @next-ships="nextShipsHandler"
  />
</template>

<script>
import Loader from '@/components/Loader';
import ShipList from '@/components/ShipList';

export default {
  name: 'App',
  components: {
    ShipList,
    Loader
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
    fetch('https://swapi.dev/api/starships')
        .then(response => response.json())
        .then(json => {
          this.loading = false;
          this.ships = json.results;
          this.prevShips = json.previous;
          this.nextShips = json.next;
          console.log(666, json)
        })
  },
  methods: {
    prevShipsHandler: function(prev) {
      if(prev) {
        fetch(prev)
            .then(response => response.json())
            .then(json => {
              this.ships = json.results;
              this.prevShips = json.previous;
              this.nextShips = json.next;
              console.log(666, json)
            })
      }
    },
    nextShipsHandler: function(next) {
      if(next) {
        fetch(next)
            .then(response => response.json())
            .then(json => {
              this.ships = json.results;
              this.prevShips = json.previous;
              this.nextShips = json.next;
              console.log(666, json)
            })
      }
    }
  }
}
</script>
