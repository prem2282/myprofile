
// export function updateOne (state, payload) {
//   console.log('payload in mutation', payload)
//   state.employment = payload
// }

export function updateBoxType (state, width) {
  console.log('width in mutation', width)
  state.boxType = width > 600 ? 'row' : 'column'
  const desktopViewLabel = {
    l1: 'professional',
    l2: 'educational',
    l3: 'technical',
    l4: 'personal'
  }
  const mobViewLabel = {
    l1: '',
    l2: '',
    l3: '',
    l4: ''
  }
  state.expLabel = width > 600 ? desktopViewLabel : mobViewLabel
}
