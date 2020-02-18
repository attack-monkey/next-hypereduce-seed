import React from 'react'
import { useConnect } from './use-connect.fn'
export const HypeReduce = ({ connectKey, Component }: { connectKey: string, Component: any }) => {
  const connection = useConnect(connectKey)
  return (
    <Component connection={connection}></Component>
  )
}