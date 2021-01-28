<template>
  <div class="bg-grey-1 shadow-1 q-ma-xs q-mb-lg ">
    <p class=" text-brown  text-h6 q-pl-sm q-pt-sm">
        Client Details
    </p>
    <q-list class=" bg-grey-1 q-pt-sm">
        <q-item v-for="item in client" :key="item.name" class=" row q-pa-xs">
            <div class="col-3 bg-teal  q-pa-sm  text-white text-bold text-uppercase">
            {{ item.name }}
            </div>
            <div class="col-2 bg-teal-1 text-center  q-pa-sm">
            {{ item.loc }}
            </div>
            <div class="col-1 bg-teal-2 text-center q-pa-sm">
            {{ item.period }}
            </div>
            <div class="col-4 bg-teal-1  q-pa-sm">
            {{ item.role }}
            </div>
            <div class="col-2 bg-teal-3 text-center q-pa-sm">
            {{ item.BU }}
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
    ...mapGetters('profile', ['client'])
  }

}
</script>
