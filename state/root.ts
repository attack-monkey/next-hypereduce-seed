import { manageState, d } from 'hypereduce/lib/fns/state.api'

const INC = state => state + 1

export const manageStateWithHypeReduce = () => {
  manageState({
    counter: d({
      connects: ['counter'],
      init: 1,
      actions: {
        INC
      }
    })
  })
}