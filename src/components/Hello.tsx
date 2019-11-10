import React, { SFC } from 'react'

export interface HelloProps {
  name: string
}

const Hello: SFC<HelloProps> = ({ name }) => <h1>{name}</h1>

export default Hello
