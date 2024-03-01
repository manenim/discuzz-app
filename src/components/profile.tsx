'use client'

import { useSession } from "next-auth/react"


const Profile = () => {
    const session = useSession()


  return (
      <div>
          profile
          {session.data?.user ? <div>user is signed from client</div> : <div>no user </div>}
    </div>
  )
}

export default Profile