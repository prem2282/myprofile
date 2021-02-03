<template>
  <div class="bg-grey-1 shadow-1 q-ma-xs q-mb-lg ">
    <p class=" text-brown  text-h6 q-pl-sm q-pt-sm">
        Academics
    </p>
    <q-list class=" bg-grey-1 q-pt-sm">
        <q-item v-for="(item,key) in academics" :key="key" class="q-pa-xs" :class="boxType">
            <div class="col-3 bg-teal  text-center q-pa-sm  text-white text-bold text-uppercase">
            {{ item.name }}
            </div>
            <div class="col-1 bg-teal-1 text-center  q-pa-sm">
            {{ item.period }}
            </div>
            <div class="col-2 bg-teal-2 text-center q-pa-sm">
            {{ item.major }}
            </div>
            <div class="col-3 bg-teal-1  text-center q-pa-sm">
            {{ item.college }}
            </div>
            <div class="col-2 bg-teal-3 text-center q-pa-sm">
            {{ item.university }}
            </div>
            <div class="col-1 bg-teal-1 text-center q-pa-sm">
            {{ item.score }}
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
    ...mapGetters('profile', ['academics', 'boxType'])
  }

}
</script>
