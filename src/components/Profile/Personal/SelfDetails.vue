<template>
  <div class="bg-purple-1 shadow-1 q-ma-xs q-mb-lg ">
    <p class=" text-brown  text-h6 q-pl-sm q-pt-sm">
        About Me
    </p>
    <q-list class=" bg-purple-1 q-pt-sm">
        <q-item v-for="item in personal" :key="item.name" class="row q-pa-xs">
            <div class="col-3 bg-purple-10  q-pa-sm  text-white text-bold text-uppercase">
            {{ item.name }}
            </div>
            <div class="col-9 bg-purple-2 text-center  q-pa-sm">
            {{ item.value }}
            </div>

        </q-item>
        <q-separator/>
    </q-list>

  </div>
</template>

<script>

import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters('profile', ['personal'])
  }

}
</script>
