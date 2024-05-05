<template>
  <div id="app" :class="theme">
    <HelloWorld @toggleTheme="toggleTheme"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data() {
    return {
      theme: 'light',
    };
  },
  methods: {
    toggleTheme() {
      this.theme = this.theme === 'light' ? 'dark' : 'light';
      document.body.className = this.theme;
    },
  },
};
</script>

<style>
  body.light {
    background-color: #fff;
    color: #000;
  }

  body.dark {
    background-color: #363636;
    color: #fff;
  }
</style>