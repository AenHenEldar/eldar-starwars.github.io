<template>
  <li>
    <strong><router-link :to="`/${ship.url.split('/')[5]}`">{{ ship.name }}</router-link></strong>
  </li>
</template>

<script>
export default {
  props: {
    ship: {
      type: Object,
      required: true
    }
  }
}
</script>
