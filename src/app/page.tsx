import Image from "next/image";
import Link from "next/link"


export default function Home() {
  return (
    <>
      <Link href="/select-mode">
        Go to Mode Selection
      </Link>
      <br />
      <Link href="/select-player">
        Go to Player Selection
      </Link>
    </>
  )
}