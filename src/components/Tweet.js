import { generateAvatarURL } from "@cfx-kit/wallet-avatar"

export function Tweet(props) {
  return (
    <>
      <section className="tweet">
        <img src={generateAvatarURL(props.data.author)} className="tweet_author_logo" alt="" />
        <div>
          <div className="tweet_header">
            <div className="tweet_authot_name">
              {props.data.username}
            </div>
            
            <div className="tweet_authot_slug">
              @{props.data.author}
            </div>
          </div>

          <div className="tweet_publish_time">
            at {new Date(Number(props.data.timestamp) * 1000).toLocaleString()}
          </div>

          <div>{props.data.text}</div>
        </div>
      </section>
    </>
  )
}