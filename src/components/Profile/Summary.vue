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
        <p class="text-subtitle2">
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
            <q-chip class="glossy shadow-5" text-color="white"  color="teal" icon="phone">{{ summary.phone }}</q-chip>
            <q-chip class="glossy shadow-5" text-color="white"  color="primary" icon="email">
              <a class="emaillink" :href="summary.mailto">{{ summary.email }}</a>
              </q-chip>
            <q-chip class="glossy shadow-5" text-color="white"  color="deep-orange"  icon="house"> {{ summary.loc }} </q-chip>
            <q-btn class="social glossy float-right q-mr-sm" size="sm" round  color="deep-orange" icon="fab fa-facebook-f"  @click.native="onClick(links.fblink)"/>
            <q-btn class="social glossy float-right q-mr-sm" size="sm" round  color="deep-orange" icon="fab fa-linkedin-in"  @click.native="onClick(links.linkedin)"/>
            <q-btn class="social glossy float-right q-mr-sm" size="sm" round  color="deep-orange" icon="fab fa-github"  @click.native="onClick(links.github)"/>

        </div>
        <div>

        </div>

    <div class="rain">'</div>
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
    },
    success: function (pos) {
    }
  },
  mounted () {
    // navigator.geolocation.getCurrentPosition(this.success)

    // console.log('Geolocation: ' + navigator.geolocation.getCurrentPosition(this.success))
    // this.updateOne()
  }

}
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Ballet&family=Long+Cang&display=swap');

.rain {
  /* padding: 0;
  margin: 0; */
  text-align: center;
  animation: rainani 1s ease-in-out 0s infinite alternate;
  color: aliceblue;
}

@keyframes rainani {
  0% {
    left: 0px;
    top: 0px;
    font-size: 100%;
  }
  100% {
    left: 0px;
    top: 100px;
    font-size: 200%;
  }
}
.text-subtitle2 {
  font-size: 150%;
  /* font-family: 'Long Cang', cursive; */
  letter-spacing: .1em;
  text-shadow: .1em .2em .5em gray ;;
  animation: textappear 2s linear 1s 1;
}

@keyframes textappear {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }

}
.emaillink {
  color: white;
  text-decoration: none;
}

.profile-pic {
   height : 140px;
   max-width: 150px;
   border-radius: 0em 0em 3em 3em;
   box-shadow:  0em 0em 1em .5em white,
               .5em .5em 1em .1em rebeccapurple
   ;
   border-top: solid 1em sienna;
   border-right: solid .5em rebeccapurple;

   transition: all .5s linear;
   /* animation: mymove 2s ease-in-out 1s infinite alternate  ; */
}

.profile-pic:hover {
  transform: scale(.9);
  border-top: solid 1em gainsboro;
  border-right: solid .5em rebeccapurple;
  /* transform: rotateZ(10deg);
  transform: rotateY(20deg); */
}

.social {
transition: all .5s linear;
opacity: .8;

}

.social:hover {
transform: translateY(-5px);
box-shadow: 0em 1em 1em grey;
opacity: 1;
}

@keyframes mymove {
  0% {left: -10px;
        top: 0px;
   box-shadow:  0em 0em 1em .5em white,
               -.5em .5em 1em .1em rebeccapurple;
   opacity: 100%;

  }
  50% {
    top:10px;
   box-shadow:  0em 0em 1em .5em white,
                0em 0em 1em .1em rebeccapurple;
   opacity: 90%;

  }
  100% {left: 10vw;
      top:0px}
   box-shadow:  0em 0em 1em .5em white,
               .5em .5em 1em .1em rebeccapurple;
   opacity: 100%;

}

</style>
