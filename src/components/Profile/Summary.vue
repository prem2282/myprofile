<template>
  <div class="q-pa-md q-gutter-sm shadow-4 row  q-mb-md">
    <q-img class="shadow-24 rounded-borders col"
      :src="url"
      spinner-color="white"
      style="height: 140px; max-width: 150px"
    />
    <div class="q-pa-md col">
        <p class='text-subtitle1'>
            {{summary_text}}
        </p>
        <p>
            {{text_2}}
            {{text_3}}
        </p>
        <!-- <p class="text-italic text-right text-weight-medium">
            {{text_3}}
        </p> -->
        <div>
            <q-chip class="shadow-5" text-color="white"  color="teal" icon="phone">822 082 9666</q-chip>
            <q-chip class="shadow-5" text-color="white"  color="primary" icon="email">prem2282@gmail.com</q-chip>
            <q-chip class="shadow-5" text-color="white"  color="deep-orange"  icon="house">Coimbatore, TN, India</q-chip>
        </div>

    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      url: 'https://media-exp1.licdn.com/dms/image/C5603AQEo1Z0ms8QHmQ/profile-displayphoto-shrink_400_400/0/1610038046775?e=1616025600&v=beta&t=BJOW99Q242GubLguTKKl813VzCFTINtr4xStOtN50aU',
      summary_text: 'I am PremAnand, a senior Enterprise/Technology Solutions Architect cum Program Manager in a leading IT organization.',
      text_2: 'Learning is my passion! Sharing what I learn is my duty!',
      text_3: 'Knowledge is the only thing that grows the more we share.'
    }
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
