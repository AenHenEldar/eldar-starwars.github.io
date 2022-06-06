<template>
  <router-link to='/'>back</router-link>

<!--Тут правильнее было бы еще один компонент использовать. Не стал париться =)-->
  <ul>
    <li v-for="(param, paramKey) in ship">
      <strong>{{paramKey}}</strong>: {{param}}
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      ship: [],
    }
  },
  mounted() {
    fetch(`https://swapi.dev/api/starships/${this.$route.params.id}`)
        .then(response => response.json())
        .then(json => {
          this.ship = json;
        })
  }
}
</script>

<style scoped>
  ul {
    margin-left: 35%;
    text-align: left;
    list-style: none;
  }
</style>
