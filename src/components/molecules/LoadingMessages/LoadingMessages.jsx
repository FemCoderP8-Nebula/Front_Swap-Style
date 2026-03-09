import { useEffect, useState } from "react"
import styles from "./loading-messages.module.css"

function LoadingMessages({ messages, interval = 2000 }) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % messages.length)
    }, interval)

    return () => clearInterval(timer)
  }, [messages, interval])

  return (
    <div className={styles.message}>
      {messages[index]}
    </div>
  )
}

export default LoadingMessages