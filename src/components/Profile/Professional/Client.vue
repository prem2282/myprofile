<template>
  <div class="bg-grey-1 shadow-1 q-ma-xs q-mb-lg ">
    <p class=" text-brown  text-h6 q-pl-sm q-pt-sm">
        Client Details
    </p>
    <q-list class=" bg-grey-1 q-pt-sm">
        <q-item v-for="item in items" :key="item.name" class="row q-pa-xs">
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
export default {
  data () {
    return {
      items: [
        {
          name: 'UnitedHealth Group',
          period: '2003 - 2005',
          role: 'Developer',
          loc: 'Chennai, India',
          BU: 'Healthcare'
        },
        {
          name: 'UnitedHealth Group',
          period: '2006 - 2012',
          role: 'Lead Developer - Project Manager',
          loc: 'Hartford, CT, USA',
          BU: 'Healthcare'
        },
        {
          name: 'UnitedHealth Group',
          period: '2012 - 2017',
          role: 'Solution Architect/Project Manager(multiple)',
          BU: 'Healthcare',
          loc: 'Coimbatore - India'
        },
        {
          name: 'Emblem Health',
          period: '2018 - 2019',
          role: 'Enterprise/Solution Architect',
          BU: 'Healthcare',
          loc: 'Coimbatore - India'
        },
        {
          name: 'Abbott Laboratories',
          period: '2019 - 2020',
          role: 'Program Manager',
          BU: 'Life Sciences',
          loc: 'Coimbatore - India'
        },
        {
          name: 'Sanofi',
          period: '2019 - 2020',
          role: 'Techinical Solution Architect (ML/NLP)',
          BU: 'Life Sciences',
          loc: 'Coimbatore - India'
        }
      ]
    }
  }
}
</script>
