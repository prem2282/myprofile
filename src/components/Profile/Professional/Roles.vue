<template>
  <div class="bg-purple-1 shadow-1 q-ma-xs q-mb-lg">
    <p class=" text-brown  text-h6 q-pl-sm q-pt-sm">
        Roles
    </p>
    <q-list class=" bg-purple-1 q-pt-sm">
        <q-item v-for="item in items" :key="item.name" class="row q-pa-xs">
            <div class="col-3 bg-purple-10  q-pa-sm  text-white text-h5 text-bold text-uppercase">
            {{ item.name }}
            </div>
            <div class="col-9 bg-purple-2  q-pa-sm">
            {{ item.value }}
            <q-separator/>
            <q-badge class="text-white q-ma-xs q-pa-xs" v-for="badge in item.badge" :key="badge" align="middle">
              {{badge }}
            </q-badge>
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
          name: 'Delivery Lead',
          value: 'Program Management has been my bread and butter for years. Being transparant and honest, with the client, top management and the team has been my simple mantra all along. I like to keep it simple, be it a program review or a casual team talk.',
          badge: ['10+ years', '25+ Projects', 'Rev +6M USD/year', '20+ RFPs won', 'Project of the year Award', '100+ Peak head count']
        },
        {
          name: 'Technical Consultant',
          value: 'I like to be on the ground with the team even if I am managing a large program. I believe Technology should never be a constraint for Program management and never miss a chance to get my hands dirty with the code. Right from Mainframes, to front end java script frameworks, to backend services in python, java, C# etc, to alexa skills and IOS/Android platforms, I have explored and had my hands dirty with the code. Being a certified AWS solutions architect & practicing Data Science specialist, I love performing as an Enterprise/Solution/Technical Architect.',
          badge: ['AWS - CSA', 'Cloud and hybrid Architecture', 'Machine Learning', 'NLP', 'Data Science', 'Mobile', 'Fullstack', 'Modernization', 'Transformation', 'Mainframes', 'Test Driven Development']
        },
        {
          name: 'Coder',
          value: 'I am proud to say I am still a coder! Its  my passion and love. Starting my career as a mainframe developer, I have developed love for programming and spend my quality time to keep it alive even after 17 years!',
          badge: ['python', 'javascript', 'ReactJs', 'VueJs', 'COBOL', 'CICS', 'REXX', 'C++', 'C#', 'Djongo', 'SQL']
        },
        {
          name: 'People Leader',
          value: 'When it comes to people management, I like to lead from the front and avoid manage from the top. I believe in individuals and let them play to their strengths. Being extremely open and transparent has given me great results and I am blessed to have worked with great leaders with values and virtues!',
          badge: ['I trust my team', 'I grow with my team', 'I learn from the team', 'I guide from the front']
        },
        {
          name: 'Learner',
          value: 'I have failed a lot. Thanks to the failures, I have taken learning very seriously. I am sure I will never stop learning at any point of time. Youtube, Udemy, DataCamp, StackOverflow are my best friends.',
          badge: ['Evergrowing Technology', 'Being Relevent', 'Explore for fun']
        },
        {
          name: 'Trainer',
          value: 'Knowledge is the only thing that grows the more we share! Teaching and trianing is part of day to day job and I take pride in doing the same. Mentoring fresher batches, Contributing to Academy & Rendering guest lectures to colleges keeps my engaged with Training.',
          badge: ['Programming', 'Blockchain', 'Cloud Computing', 'Full stack Development', 'Interpersonal Skills']
        },
        {
          name: 'Interviewer',
          value: 'Every year, never will miss a chance to be part of recruitment drive for freshers and skilled professionals.',
          badge: ['200+ freshers interviewed', '10+ colleges', '60+ skilled professionals']

        },
        {
          name: 'Outreach',
          value: 'Regular contributor for outreach activities for Organization supporting rural schools. Also has been an outreach coordinator for a few years.',
          badge: ['teaching', 'facilitating talent programs', 'skill development', 'career guidance']
        }
      ]
    }
  }
}
</script>
