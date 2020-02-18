import { connect, getConnections, disconnect } from 'hypereduce/lib/fns/state.api'
import { useEffect, useState } from 'react'
export const useConnect = <T>(connectKey: string): T => {
  const init = getConnections('counter')
  const [state, setState] = useState(init)
  useEffect(() =>
    connect(connectKey, newValue => {
      setState(newValue)
      return disconnect(connectKey)
    })
  )
  return state
}