'use client'

import { useEffect, useRef, useState } from 'react'

const FULL_TEXT = "Smokey Joe's"
const CHAR_MS = 85
const HOLD_MS = 900
const EXIT_MS = 560

export default function SmokeyIntro() {
  const [charCount, setCharCount] = useState(0)
  const [exiting, setExiting] = useState(false)
  const [gone, setGone] = useState(false)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    const beginExit = () => {
      setExiting(true)
      setTimeout(() => setGone(true), EXIT_MS)
    }

    let i = 0
    intervalRef.current = setInterval(() => {
      i++
      setCharCount(i)
      if (i >= FULL_TEXT.length) {
        if (intervalRef.current) clearInterval(intervalRef.current)
        setTimeout(beginExit, HOLD_MS)
      }
    }, CHAR_MS)

    return () => { if (intervalRef.current) clearInterval(intervalRef.current) }
  }, [])

  if (gone) return null

  return (
    <div className={`sj-intro${exiting ? ' sj-intro--exit' : ''}`} aria-hidden="true">
      <p className="sj-intro__name">
        {FULL_TEXT.slice(0, charCount)}
        <span className={`sj-intro__cursor${charCount >= FULL_TEXT.length ? ' sj-intro__cursor--blink' : ''}`} />
      </p>
    </div>
  )
}
