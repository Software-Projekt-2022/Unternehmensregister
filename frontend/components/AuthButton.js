import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import React from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

export default function AuthButton() {
  const { data: session } = useSession();
  const router = useRouter();
  if (session) {
    return (
      <>
        <Popup
          trigger={
            <button className="btn btn-primary fs-6 me-0 py-2 px-4">
              {" "}
              <img
                src={session.user.image}
                className="rounded-circle"
                width="32"
              />{" "}
              Account{" "}
            </button>
          }
          position="bottom top"
        >
          <img src={session.user.image} className="rounded img-fluid" />
          <button
            className="btn btn-info fs-6 me-0 py-2 px-4"
            onClick={() => {
              router.push(
                {
                  pathname: "/profile",
                  query: { id: session.user.token.content.account_id },
                },
                "/profile"
              );
            }}
          >
            Profil
          </button>
          <button
            className="btn btn-danger fs-6 me-0 py-2 px-4"
            onClick={() => signOut()}
          >
            Logout
          </button>
          <button
            className="btn btn-warning fs-6 me-0 py-2 px-4"
            onClick={() => {
              router.push(
                {
                  pathname: "/edit",
                  query: { id: session.user.token.content.account_id },
                },
                "/edit"
              );
            }}
          >
            Einstellungen
          </button>
        </Popup>
      </>
    );
  }
  return (
    <>
      <button
        className="btn btn-warning fs-6 me-0 py-2 px-4"
        onClick={() => signIn()}
      >
        Log in
      </button>
    </>
  );
}
