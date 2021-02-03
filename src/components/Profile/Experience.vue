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
          mobile-arrows
          narrow-indicator
        >
          <q-tab icon="person" name="professional" :label=expLabel.l1 />
          <q-tab icon="book" name="educational" :label=expLabel.l2 />
          <q-tab  icon="engineering" name="technical" :label=expLabel.l3 />
          <q-tab  icon="remember_me" name="personal" :label=expLabel.l4 />
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
      <q-resize-observer @resize="updateBoxType" />
      <!-- <div class="q-gutter-sm">
        Reported:
        <q-badge>width: {{ report.width }}</q-badge>
        <q-badge>height: {{ report.height }}</q-badge>
      </div> -->
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
import { mapGetters, mapActions } from 'vuex'
export default {

  data () {
    return {
      tab: 'professional'
    }
  },
  computed: {
    ...mapGetters('profile', ['expLabel'])
  },
  methods: {
    ...mapActions('profile', ['updateBoxType'])
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
