<template>
  <div class="bg-grey-1 shadow-1 q-ma-xs q-mb-lg ">
    <p class=" text-brown  text-h6 q-pl-sm q-pt-sm">
        Programming Skills
    </p>
    <q-list class=" bg-grey-1 q-pt-sm">
        <q-item v-for="(item, key) in languages" :key="key" class="q-pa-xs" :class="boxType" >
            <div class="col-3 bg-brown  q-pa-sm  text-center text-white text-bold text-uppercase">
            {{ item.type }}
            </div>
            <div class="col bg-brown-3 q-pa-sm" >
              <div class="row justify-center">
                <q-badge class="text-white  q-ma-xs q-pa-xs" v-for="name in item.name" :key="name" align="middle">
                  {{name}}
                </q-badge>
              </div>

            </div>
            <div class="col-1 bg-brown-2 text-brown text-center q-pa-sm">
            {{ item.period }}
            </div>
            <div class="col-2 bg-brown-1 text-grey text-center q-pa-sm">
            {{ item.role }}
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
    ...mapGetters('profile', ['languages', 'boxType'])
  }

}
</script>
