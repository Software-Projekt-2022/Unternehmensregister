import React, { useEffect } from 'react'
import { useRouter } from "next/router";
import { useSession } from "next-auth/react"
import NoPerm from "../components/NoPerm"

export default function Profile() {
    const { data: session } = useSession()
    const router = useRouter();

    if (session) {
        return (
            <>
                <img src={session.user.image} className="rounded img-fluid" />
                <h1>{session.user.name}`s Profile ({router.query.id})</h1>
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