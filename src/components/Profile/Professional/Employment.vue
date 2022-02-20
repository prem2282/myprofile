<template>
  <div>
    <div class="bg-yellow-1 shadow-1 q-ma-xs q-mb-lg">
      <p class=" text-brown  text-h6 q-pl-sm q-pt-sm">
          Current Employment Details
      </p>
      <q-list  class=" bg-yellow-1 q-pt-sm">
          <q-item v-for="item in employment" :key="item.name" class="row q-pa-xs">
              <div class="col-xs-6 col-sm-3 bg-amber-14  q-pa-sm  text-white text-bold text-uppercase">
              {{ item.name }}
              </div>
              <div class="col-xs-6 col-sm-9 bg-amber-2  q-pa-sm">
              {{ item.value }}
              </div>
          </q-item>
          <q-separator/>
      </q-list>
    </div>
    <div class="bg-yellow-1 shadow-1 q-ma-xs q-mb-lg">
      <p class=" text-brown  text-h6 q-pl-sm q-pt-sm">
          Previous Employment Details
      </p>
      <q-list  class=" bg-yellow-1 q-pt-sm">
          <q-item v-for="item in prev_employment" :key="item.name" class="row q-pa-xs">
              <div class="col-xs-6 col-sm-3 bg-amber-14  q-pa-sm  text-white text-bold text-uppercase">
              {{ item.name }}
              </div>
              <div class="col-xs-6 col-sm-9 bg-amber-2  q-pa-sm">
              {{ item.value }}
              </div>
          </q-item>
          <q-separator/>
      </q-list>
    </div>  
  </div>
</template>

<script>

import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters('profile', ['employment', 'prev_employment'])
  }
}
</script>
