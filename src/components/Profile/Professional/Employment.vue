<template>
  <div class="bg-yellow-1 shadow-1 q-ma-xs q-mb-lg">
    <p class=" text-brown  text-h6 q-pl-sm q-pt-sm">
        Current Employment Details
    </p>
    <q-list class=" bg-yellow-1 q-pt-sm">
        <q-item v-for="item in items" :key="item.name" class="row q-pa-xs">
            <div class="col-3 bg-amber-14  q-pa-sm  text-white text-bold text-uppercase">
            {{ item.name }}
            </div>
            <div class="col-9 bg-amber-2  q-pa-sm">
            {{ item.value }}
            </div>
        </q-item>
        <q-separator/>
    </q-list>

  </div>
</template>

<script>
export default {
  data () {
    return {
      items: [
        {
          name: 'Currently Employed',
          value: 'Cognizant Technology Solutions'
        },
        {
          name: 'Joined in',
          value: 'Sep 2003'
        },
        {
          name: 'Designation',
          value: 'Sr. Architect - Technology'
        },
        {
          name: 'Reports to',
          value: 'Chief Technology Officer'
        },
        {
          name: 'Business Units',
          value: 'Healthcare, Life Sciences'
        }
      ]
    }
  }
}
</script>
