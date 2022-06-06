<template>
  <div>
    <input @input="$emit('searchShips', $event)" class="ship-filter" type="text">
    <ul>
      <ShipItem
        v-for="ship of ships"
        :ship="ship"
        :key="ship"
      />
    </ul>
    <Loader v-if="loading" />
    <nav class="nav">
      <button
          class="prev"
          :class="{ prev_active: prev && !loading }"
          @click="$emit('prevShips')">
        prev
      </button>
      <button
          class="next"
          :class="{ next_active: next && !loading }"
          @click="$emit('nextShips')">
        next
      </button>
    </nav>
  </div>
</template>

<script>
import Loader from '@/components/Loader';
import ShipItem from '@/components/ShipItem';

export default {
  props: ['ships', 'prev', 'next', 'loading'],
  data() {
    return {
      filter: ''
    }
  },
  components: {
    ShipItem,
    Loader
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
    position: absolute;
    font-size: 15px;
    font-weight: bold;
    cursor: pointer;
    padding: 10px 20px;
    margin: 10px;
    color: black;
    background-color: #333300;
    border: none;
    border-radius: 20px;
  }
  .prev {
    bottom: 10%;
    left: 30%;
  }
  .next {
    bottom: 10%;
    right: 30%;
  }
  .prev.prev_active, .next.next_active {
    background: #999900;
  }
  .prev.prev_active:hover, .next.next_active:hover {
    background-color: #CCCC00;
  }
  .ship-filter {
    margin-bottom: 20px;
  }
</style>
