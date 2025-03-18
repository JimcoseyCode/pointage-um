

import React from 'react'
import getUserEmploye from './getEmploye';
import { console } from 'inspector';
export default function page() {
    const user = getUserEmploye();
    console.log(user);
  return (
    <div>{user}</div>
  )
}
