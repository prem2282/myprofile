<template>
  <div class="bg-grey-1 shadow-1 q-ma-xs q-mb-lg ">
    <p class=" text-brown  text-h6 q-pl-sm q-pt-sm">
        Programming Skills
    </p>
    <q-list class=" bg-grey-1 q-pt-sm">
        <q-item v-for="item in items" :key="item.name" class="row q-pa-xs">
            <div class="col-3 bg-brown  q-pa-sm  text-white text-bold text-uppercase">
            {{ item.type }}
            </div>
            <div class="col-6 bg-brown-3  q-pa-sm">
              <q-badge class="text-white q-ma-xs q-pa-xs" v-for="name in item.name" :key="name" align="middle">
                {{name}}
              </q-badge>
            </div>
            <div class="col-2 bg-brown-2 text-brown text-center q-pa-sm">
            {{ item.period }}
            </div>
            <div class="col-1 bg-brown-1 text-grey q-pa-sm">
            {{ item.role }}
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
          name: ['COBOL', 'JCL', 'CICS', 'REXX'],
          period: '2003 - 2012',
          role: 'Expert',
          type: 'Mainframe Programming'
        },
        {
          name: ['IMS DB/DC', 'DB2', 'VSAM'],
          period: '2003 - 2012',
          role: 'Expert',
          type: 'Mainframe Datastore/Filesystem'
        },
        {
          name: ['z/OS', 'RACF', 'Endevor', 'Xpeditor', 'FileAid'],
          period: '2003 - 2012',
          role: 'Expert',
          type: 'Mainframe Env & tools'
        },
        {
          name: ['Python', 'Flask', 'Djongo'],
          period: '2015 to till date',
          role: 'Expert',
          type: 'Backend'
        },
        {
          name: ['Pandas', 'Numpy', 'Matplotlib', 'Tenserflow Keras', 'Scikit learn', 'Spacy', 'NLTK', 'expert.ai', 'Tika', 'PDFPlumber', 'Tesseract', 'scispacy', 'Bert', 'pyTest'],
          period: '2018 to till date',
          role: 'Practioner',
          type: 'Key Python Packages'
        },
        {
          name: ['Javascript', 'ReactJs', 'ReactNative', 'VueJs', 'HTML', 'CSS', 'SASS'],
          period: '2015 to till date',
          role: 'Expert',
          type: 'Frontend'
        },
        {
          name: ['ReactNative', 'PhoneGap', 'Ionic', 'Native Scripts'],
          period: '2018 to till date',
          role: 'Explorer',
          type: 'Mobile Platform'
        },
        {
          name: ['SQL Server', 'MySQL', 'MongoDB', 'PostgreSQL', 'DynamoDB', 'Amazon RDS', 'Amazon Arora DB', 'DocumentDB', 'SQlite', 'MS Access'],
          period: '2015 to till date',
          role: 'Practitioner',
          type: 'Databases'
        },
        {
          name: ['REST', 'SOAP', 'Djongo Rest Framework', 'AWS API Gateway', 'GraphQL'],
          period: '2015 to till date',
          role: 'Practitioner',
          type: 'API'
        },
        {
          name: ['PostMan', 'SoapUI', 'GraphiQl'],
          period: '2015 to till date',
          role: 'Practitioner',
          type: 'API testing tools'
        },
        {
          name: ['Mulesoft', 'Informatica', 'Talend', 'Marklogic'],
          period: '2015 to till date',
          role: 'Explorer',
          type: 'Data Integration'
        },
        {
          name: ['IAM', 'Conginito', 'EC2', 'S3', 'SQS', 'Lambda', 'Route53', 'Lightsail', 'API Gateway', 'CloudWatch', 'CloudTrail', 'Comprehend', 'EFS'],
          period: '2015 to till date',
          role: 'Practitioner',
          type: 'AWS Services'
        }
      ]
    }
  }
}
</script>
