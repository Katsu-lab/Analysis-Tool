<template>
  <div>
    <router-link to="/">Verbal</router-link> |
    <router-link to="/about">Non-verbal</router-link> |
    <router-link to="/input">Organism</router-link>
  </div>
  <router-view />
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ResultSection',

});
</script>