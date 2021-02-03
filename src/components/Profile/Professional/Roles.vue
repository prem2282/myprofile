<template>
  <div class="bg-purple-1 shadow-1 q-ma-xs q-mb-lg">
    <p class=" text-brown  text-h6 q-pl-sm q-pt-sm">
        Roles
    </p>
    <q-list class=" bg-purple-1 q-pt-sm">
        <q-item v-for="(item,key) in roles" :key="key" class="row q-pa-xs">
            <div class="col-3 bg-purple-10  q-pa-sm  text-white text-h5 text-bold text-uppercase">
            {{ item.name }}
            </div>
            <div class="col-9 bg-purple-2  q-pa-sm">
            {{ item.value }}
            <q-separator/>
            <q-badge class="text-white q-ma-xs q-pa-xs" v-for="badge in item.badge" :key="badge" align="middle">
              {{badge }}
            </q-badge>
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
    ...mapGetters('profile', ['roles'])
  }

}
</script>
