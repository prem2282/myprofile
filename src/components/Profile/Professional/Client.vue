<template>
<div>

  <div class="bg-grey-1 shadow-1 q-ma-xs q-mb-lg">
    <p class=" text-brown  text-h6 q-pl-sm q-pt-sm">
        Client Details
    </p>
    <q-list class=" bg-grey-1 q-pa-sm " >
        <q-item v-for="(item,key) in client" :key="key"
        class="q-ma-xs q-pa-xs shadow-1 bg-blue-grey-1"
        :class="boxType"
        >
            <div class=" col-3 bg-teal text-center q-pa-sm text-bold text-white text-uppercase customfont" >
            {{ item.name }}
            </div>
            <div class="col-2 bg-teal-1 text-center q-pa-sm">
            {{ item.loc }}
            </div>
            <div class="col-2 bg-teal-2 text-center q-pa-sm">
            {{ item.period }}
            </div>
            <div class="col-3 bg-teal-1 text-center q-pa-sm">
            {{ item.role }}
            </div>
            <div class="col-2 bg-teal-3 text-center q-pa-sm">
            {{ item.BU }}
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
  data () {
    return {
      report: ''
    }
  },
  computed: {
    ...mapGetters('profile', ['client', 'boxType'])
  }

}
</script>
