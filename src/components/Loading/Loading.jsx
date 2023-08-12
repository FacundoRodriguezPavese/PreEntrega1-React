import React from 'react';
import { Spinner } from 'reactstrap';

const Loading = () => {

  return (
    <>
      <Spinner/>
    </>
  )
}

export default function App() {
    return <Loading/>
}