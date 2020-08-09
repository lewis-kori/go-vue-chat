<template>
  <div id="app">
    <Header />
    <Index />

  </div>
</template>

<script>
import Index from './components/Index.vue'
import Header from './components/Header/Header.vue'

export default {
  name: 'App',
  components: {
    Header,
    Index
  }
}
</script>


