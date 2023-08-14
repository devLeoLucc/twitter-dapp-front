"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"

import { addTweet } from "@/lib/Web3Service"

export function NewTweet() {

  const [text, setText] = useState("");
  const [message, setMessage] = useState("")
  
  const { push } = useRouter()

  function handlePublish() {
    setMessage("Publishing your tweet...")
    addTweet(text)
      .then(result => {
        setText("")
        setMessage("Tweet Published! Wait a minute and refresh the page.")
      })
      .catch(err => {
        setMessage(err.message)
        console.error(err)
      })
  }

  useEffect(() => {
    const wallet = localStorage.getItem("wallet")
    if(!wallet) {
      push("/")
    }
  }, [])

  return (
    <section className="top">
      <div className="left">
        <img src="/twitter.svg" alt="" className="brand" />
      </div>

      <h1>Welcome back!</h1>
      <p>What's happening?</p>
      <textarea className="form-control my-3" value={text} onChange={evt => setText(evt.target.value)}></textarea>

      <div>
        <input type="button" onClick={handlePublish} className="btn btn-primary" value="Submit" />
      </div>

      <p className="message">
        {message}
      </p>
    </section>
  )
}