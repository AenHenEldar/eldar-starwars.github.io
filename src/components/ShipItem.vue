<template>
  <li>
    <strong><router-link :to="getShipUrl">{{ ship.name }}</router-link></strong>
  </li>
</template>

<script>
export default {
  props: {
    ship: {
      type: Object,
      required: true
    }
  },
  computed: {
    getShipUrl() {
      return `/${this.ship.url.split('/').slice(-2).join('')}`
    }
  }
}
</script>
