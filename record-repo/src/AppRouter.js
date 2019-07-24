import React from 'react'
import { Route } from 'react-router-dom'
import Record from './Record'
import Replay from './Replay'

const AppRouter = () => (
    <>
      <Route path="/" exact component={Record} />
      <Route path="/replay" exact component={Replay} />
    </>
  )

export default AppRouter