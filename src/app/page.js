'use client'

import Image from 'next/image'
import axios from "axios";

export default function Home() {
    const clickHandler = () => {
        try {
            const res = axios.get(`https://open.assembly.go.kr/portal/openapi/nzmimeepazxkubdpn?KEY=50b78347af744f948636c93034c6ec56&Type=json&pIndex=1&pSize=5&BILL_ID=PRC_Z2Z1Z0Z3X2L4M0H9A2V6K5R0V7P2H1&AGE='21'`)
                .then(res => console.log(res))
        } catch (err) {
            throw new Error(err)
        }
    }

  return (
    <div>
      <button onClick={clickHandler}>log</button>
    </div>
  )
}





