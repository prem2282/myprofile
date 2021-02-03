// import axios from 'axios'

// async function apidata () {
//   const targetUrl = 'http://127.0.0.1:8000'
//   console.log('apidata called')
//   axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*'
//   const res = await axios.get(targetUrl)
//   return res
// }

// export async function updateData ({ commit }, payload) {
//   console.log('payload', payload)
//   const targetUrl = 'http://127.0.0.1:8000/add/' + payload.section
//   console.log('updateData called')
//   // axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*'
//   const res = await axios.post(targetUrl,
//     {
//       name: payload.data.name,
//       value: payload.data.value
//     })
//   return res
// }

// export async function updateOne ({ commit }, payload) {
//   console.log('payload in updateOne', payload.section)
//   const data = await apidata()
//   commit('updateOne', data.data)
//   console.log(data)
// }

export function updateBoxType ({ commit }, payload) {
  console.log('payload in updateBoxType', payload.width)
  commit('updateBoxType', payload.width)
//   console.log(data)
}
