<template>
  <div class="bg-grey-1 shadow-1 q-ma-xs q-mb-lg ">
    <p class=" text-brown  text-h6 q-pl-sm q-pt-sm">
        Academics
    </p>
    <q-list class=" bg-grey-1 q-pt-sm">
        <q-item v-for="item in items" :key="item.name" class="row q-pa-xs">
            <div class="col-3 bg-teal  q-pa-sm  text-white text-bold text-uppercase">
            {{ item.name }}
            </div>
            <div class="col-1 bg-teal-1 text-center  q-pa-sm">
            {{ item.period }}
            </div>
            <div class="col-2 bg-teal-2 text-center q-pa-sm">
            {{ item.major }}
            </div>
            <div class="col-3 bg-teal-1  q-pa-sm">
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
export default {
  data () {
    return {
      items: [
        {
          name: 'Bachlor of Engineering',
          period: '2003',
          major: 'Electrical & Electronics Engineering',
          college: 'Vellore Institute of Technology (VIT)',
          university: 'Madras University',
          score: '81%'
        },
        {
          name: 'Higher Secondary (10+2)',
          period: '1999',
          major: 'Computer Science Group',
          college: 'Atomic Energy Higher Secondar School',
          university: 'Kalpakkam, Tamil Nadu',
          score: '89%'
        },
        {
          name: 'Secondary',
          period: '1997',
          major: 'Tamil Nadu State Board',
          college: 'Government High School, Pudupattinam',
          university: 'Kalpakkam, Tamil Nadu',
          score: '84.5%'
        }
      ]
    }
  }
}
</script>
