<template>
  <q-page padding>
    <div>
      <Summary></Summary>
      <Experience></Experience>
    </div>

  </q-page>
</template>

<script>

import Summary from '../components/Profile/Summary.vue'
import Experience from '../components/Profile/Experience.vue'

export default {
  data () {
    return {
      header1: 'Skill Buddy',
      header2: 'Learn,Share and Grow'
    }
  },
  methods: {
    clearText () {
      this.header1 = ''
    },
    handlekeyup (e) {
      if (e.keyCode === 27) {
        this.clearText()
      }
    }
  },
  components: {
    Summary: Summary,
    Experience: Experience
  }
}
</script>

<style>
  .border_1 {
    color: slategray;
    border: seashell;
    border-style: solid;
    border-width: .1rem;
    padding : .1rem 1rem .1rem 1rem;
    margin: 1rem;
    border-radius: .5rem;
    background-color: snow;

  }

  .border_2 {
    color: aqua;
    border: seashell;
    border-style: solid;
    border-width: .1rem;
    padding : .1rem 1rem .1rem 1rem;
    margin: 1rem;
    border-radius: .5rem;
    background-color:blueviolet;

  }

</style>
