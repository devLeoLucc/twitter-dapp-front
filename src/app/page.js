"use client"

import { Login } from "@/lib/Web3Service"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function Home() {

  const { push } = useRouter();
  const [message, setMessage] = useState("");

  function handleCLick() {
    setMessage("Conecting...")
    Login()
      .then(wallet => push("/timeline"))
      .catch(error => {
        console.error(error)
        setMessage(error.message)
      })
  }

  return (
    <>
      <main className="container px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <img className="d-block mx-lg-auto img-fluid" width="700" height="500" src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80" alt="" />
          </div>

          <div className="col-lg-6">
            <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">CrypTwitter</h1>
            <p className="lead">Your decentralized social media.</p>
            <p className="lead mb-3">Authenticate your wallet, send your messages and know what is happening in the world.</p>

            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <button onClick={handleCLick} type="button" className="btn btn-primary btn-lg px-4 me-md-2">
                <img src="./metamask.svg" width="64" className="me-3" alt="" />
                Conect with Metamask
              </button>
            </div>

            <p className="message">{message}</p>
          </div>
        </div>
      </main>
    </>
  )
}
