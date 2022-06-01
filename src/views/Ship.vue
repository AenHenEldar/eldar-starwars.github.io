<template>
  <router-link to='/'>back</router-link>

<!--Тут правильнее было бы еще один компонент использовать. Не стал париться =)-->
  <ul>
    <li><strong>MGLT</strong>: {{this.ship.MGLT}}</li>
    <li><strong>cargo_capacity</strong>: {{this.ship.cargo_capacity}}</li>
    <li><strong>consumables</strong>: {{this.ship.consumables}} </li>
    <li><strong>cost_in_credits</strong>: {{this.ship.cost_in_credits}} </li>
    <li><strong>created</strong>: {{this.ship.created}} </li>
    <li><strong>crew</strong>: {{this.ship.crew}}</li>
    <li><strong>edited</strong>: {{this.ship.edited}}</li>
    <li><strong>films</strong>: {{this.ship.films?.length}}</li>
    <li><strong>hyperdrive_rating</strong>: {{this.ship.hyperdrive_rating}}</li>
    <li><strong>length</strong>: {{this.ship.length}}</li>
    <li><strong>manufacturer</strong>: {{this.ship.manufacturer}}</li>
    <li><strong>max_atmosphering_speed</strong>: {{this.ship.max_atmosphering_speed}}</li>
    <li><strong>model</strong>: {{this.ship.model}}</li>
    <li><strong>name</strong>: {{this.ship.name}}</li>
    <li><strong>passengers</strong>: {{this.ship.passengers}}</li>
    <li><strong>pilots</strong>: {{this.ship.pilots}}</li>
    <li><strong>starship_class</strong>: {{this.ship.starship_class}}</li>
    <li><strong>url</strong>: {{this.ship.url}}</li>
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

<style>
  ul {
    list-style: none;
  }
</style>
