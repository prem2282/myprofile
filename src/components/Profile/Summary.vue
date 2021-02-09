<template>
  <div class="q-pa-md q-gutter-sm shadow-4 row q-mb-md">
    <div class="col-2 ">
      <q-img class="shadow-24 rounded-borders col profile-pic"
        :src="summary.url"
        spinner-color="white"
      />
      <!-- <q-img class="shadow-1 rounded-borders"
        src='../../assets/aws-certified-logo_color-horz_270x45.jpg'
        spinner-color="white"
        style="max-width: 150px"
      />
      <q-img class="shadow-1 rounded-borders"
        src='../../assets/solutions-architect-associate-tag_270x24.jpg'
        spinner-color="white"
        style="max-width: 150px"
      /> -->
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
            <q-btn class="glossy float-right q-mr-sm" size="sm" round  color="deep-orange" icon="fab fa-facebook-f"  @click.native="onClick(links.fblink)"/>
            <q-btn class="glossy float-right q-mr-sm" size="sm" round  color="deep-orange" icon="fab fa-linkedin-in"  @click.native="onClick(links.linkedin)"/>
            <q-btn class="glossy float-right q-mr-sm" size="sm" round  color="deep-orange" icon="fab fa-github"  @click.native="onClick(links.github)"/>

        </div>
        <div>

        </div>

    </div>
  </div>
</template>

<script>

import { mapGetters } from 'vuex'
import { openURL } from 'quasar'
export default {

  computed: {
    ...mapGetters('profile', ['summary', 'links'])
  },
  methods: {
    onClick: function (link) {
      openURL(link)
    }
  },
  mounted () {
    console.log('mounted')
    console.log("Cookies: " + navigator.cookieEnabled);
    console.log("Browser Language: " + navigator.browserLanguage);
    console.log("Language: " + navigator.language);
    console.log("Platform: " + navigator.platform);
    console.log("Connection Speed: " + navigator.connectionSpeed);
    console.log("User Agent: " + navigator.userAgent);
    console.log("Webdriver: " + navigator.webdriver);
    console.log("Geolocation: " + navigator.geolocation);
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
