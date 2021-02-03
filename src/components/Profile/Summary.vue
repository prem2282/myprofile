<template>
  <div class="q-pa-md q-gutter-sm shadow-4 row q-mb-md">
    <div class="col-2 ">
      <q-img class="shadow-24 rounded-borders col profile-pic"
        :src="summary.url"
        spinner-color="white"
      />
      <q-img class="shadow-1 rounded-borders"
        src='../../assets/aws-certified-logo_color-horz_270x45.jpg'
        spinner-color="white"
        style="max-width: 150px"
      />
      <q-img class="shadow-1 rounded-borders"
        src='../../assets/solutions-architect-associate-tag_270x24.jpg'
        spinner-color="white"
        style="max-width: 150px"
      />
    </div>
    <div class="col-9 ">
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
  },
  mounted () {
    console.log('mounted')
    // this.updateOne()
  }

}
</script>

<style scoped>
.profile-pic {
   height : 140px;
   max-width: 150px;
   /* border-radius: 1em; */
}
</style>
