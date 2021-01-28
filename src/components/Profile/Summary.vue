<template>
  <div class="q-pa-md q-gutter-sm shadow-4 row  q-mb-md">
    <q-img class="shadow-24 rounded-borders col"
      :src="summary.url"
      spinner-color="white"
      style="height: 140px; max-width: 150px"
    />
    <div class="q-pa-md col">
        <p class='text-subtitle1'>
            {{summary.summary_text}}
        </p>
        <p>
            {{summary.text_2}}
            {{summary.text_3}}
        </p>
        <!-- <p class="text-italic text-right text-weight-medium">
            {{text_3}}
        </p> -->
        <div>
            <q-chip class="shadow-5" text-color="white"  color="teal" icon="phone">{{ summary.phone }}</q-chip>
            <q-chip class="shadow-5" text-color="white"  color="primary" icon="email">{{ summary.email }}</q-chip>
            <q-chip class="shadow-5" text-color="white"  color="deep-orange"  icon="house"> {{ summary.loc }} </q-chip>
        </div>

    </div>
  </div>
</template>

<script>

import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters('profile', ['summary'])
  }

}
</script>

<style scoped>
.profile-pic {
   height : 150px;
   width : 150px;
   border-radius: 1em;
}
</style>
