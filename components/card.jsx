import { useRouter } from 'next/dist/client/router'
import React from 'react'

export const Card = () => {
  const routes = useRouter();
  console.log(routes);

  return (
    <div>
      1
    </div>
  )
}
