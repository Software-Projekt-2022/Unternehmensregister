import React, { useEffect } from 'react'
import { useSession } from "next-auth/react"
import NoPerm from "../components/NoPerm"

export default function Profile(userID) {
    const { data: session } = useSession()

    if (session) {
        return (
            <>
                <img src={session.user.image} className="rounded img-fluid" />
                <h1>{session.user.name}`s Profile (userID)</h1>
                <h2>Email: {session.user.email}</h2>
            </>
        )
      }
      return (
        <>
          <NoPerm />
        </>
      )
}