<template>
  <div class="bg-grey-1 shadow-1 q-ma-xs q-mb-lg ">
    <p class=" text-brown  text-h6 q-pl-sm q-pt-sm">
        Certification
    </p>
    <q-list class=" bg-grey-1 q-pt-sm">
        <q-item v-for="item in certs" :key="item.name" class="row q-pa-xs">
            <div class="col-4 bg-teal  q-pa-sm  text-white text-bold text-uppercase">
            {{ item.name }}
            </div>
            <div class="col-2 bg-teal-1 text-center  q-pa-sm">
            {{ item.partner }}
            </div>
            <div class="col-3 bg-teal-2 text-center q-pa-sm">
            {{ item.link }}
            </div>
            <div class="col-3 bg-teal-1  q-pa-sm">
            {{ item.area }}
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
    ...mapGetters('profile', ['certs'])
  }

}
</script>
