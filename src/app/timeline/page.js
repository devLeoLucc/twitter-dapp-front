"use client"

import { NewTweet } from "@/components/NewTweet"
import { Tweet } from "@/components/Tweet"
import { getLastTweets } from "@/lib/Web3Service"

import { useState, useEffect } from "react"

export default function Timeline() {

  const [tweets, setTweets] = useState([])
  const [page, setPage] = useState(1)

  async function loadTweets(page = 1) {
    try {
      const results = await getLastTweets(page)
      setTweets(results)
    }
    catch(err) {
      console.error(err)
      alert(err.message)
    }
  }

  useEffect(() => {
    loadTweets(page)
  }, [page])

  function handleNextTweetsPage() {
    setPage(page + 1)
  }

  return (
    <>
      <main className="container">
        <div className="row">
          <div className="layout">
            <NewTweet />

            {
              tweets && tweets.length 
              ? tweets.map(tweet => <Tweet key={Number(tweet.timestamp)} data={tweet} />)
              : <p>No tweets</p>
            }
            
            {
              tweets.length > 0 && tweets.length % 10 === 0
              ? (
                  <div className="center">
                    <input type="button" onClick={handleNextTweetsPage} className="btn btn-primary" value="Next Tweets" />
                  </div> 
                )
              : <></>
            }
          </div>
        </div>
      </main>
    </>
  )
}