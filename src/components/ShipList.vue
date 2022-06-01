<template>
  <div>
    <input v-model="filter" class="ship-filter" type="text">
    <ul>
      <ShipItem
        v-for="ship of filterShips"
        :ship="ship"
        :key="ship"
      />
    </ul>
    <nav class="nav">
      <button
          class="prev"
          :class="{ prev_disabled: !prev, prev_active: prev }"
          @click="$emit('prevShips', prev)">
        prev
      </button>
      <button
          class="next"
          :class="{ next_disabled: !next, next_active: next }"
          @click="$emit('nextShips', next)">
        next
      </button>
    </nav>
  </div>
</template>

<script>
import ShipItem from '@/components/ShipItem';

export default {
  props: ['ships', 'prev', 'next'],
  data() {
    return {
      filter: ''
    }
  },
  computed: {
    filterShips() {
      return this.ships.filter(ship => ship.name.toLowerCase().includes(this.filter.toLowerCase()))
    }
  },
  components: {
    ShipItem
  }
}
</script>

<style scoped>
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  li {
    cursor: pointer;
    margin: 20px 0;
  }
  li:hover {
    color: greenyellow;
  }
  .prev, .next {
    font-size: 15px;
    font-weight: bold;
    cursor: pointer;
    padding: 10px 20px;
    margin: 10px;
    color: black;
    background: #999900;
    border: none;
    border-radius: 20px;
  }
  .prev_active:hover, .next_active:hover {
    background-color: #CCCC00;
  }
  .prev_disabled, .next_disabled {
    background-color: #333300;
  }
  .ship-filter {
    margin-bottom: 20px;
  }
</style>
