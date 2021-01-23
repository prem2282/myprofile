<template>
  <div class="q-pa-md">
    <div class="q-gutter-y-md" >
      <q-card>
        <q-tabs
          v-model="tab"
          dense
          class="text-grey"
          active-color="primary"
          indicator-color="primary"
          align="justify"
          narrow-indicator
        >
          <q-tab name="professional" label="Professional" />
          <q-tab name="educational" label="Educational" />
          <q-tab name="technical" label="Technical" />
          <q-tab name="personal" label="Personal" />
        </q-tabs>

        <q-separator />

        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="professional">
            <Employment/>
            <Client/>
            <Roles/>
          </q-tab-panel>

          <q-tab-panel name="educational">
            <div class="text-h6">Educational</div>
            <Academics/>
            <Certification/>
          </q-tab-panel>

          <q-tab-panel name="technical">
            <div class="text-h6">Technical</div>
            <Languages/>
          </q-tab-panel>

          <q-tab-panel name="personal">
            <div class="text-h6">Personal</div>
            <SelfDetails/>
          </q-tab-panel>
        </q-tab-panels>

      </q-card>

    </div>
  </div>
</template>

<script>
import Employment from './Professional/Employment.vue'
import Client from './Professional/Client.vue'
import Roles from './Professional/Roles.vue'
import Languages from './Technical/Languages.vue'

import Academics from './Educational/Academics.vue'

import SelfDetails from './Personal/SelfDetails.vue'
import Certification from './Educational/Certification.vue'

export default {

  data () {
    return {
      tab: 'professional'
    }
  },
  components: {
    Employment: Employment,
    Client: Client,
    Roles: Roles,
    Academics: Academics,
    Certification: Certification,
    SelfDetails: SelfDetails,
    Languages: Languages

  }
}
</script>
