import type { ReactNode } from "react"
import Index from "./Index"

type ContentProps = {
  children: ReactNode
}

export default function Content({children}:ContentProps) {
  return (
    <>
      <section className="content_index">
        <Index />
      </section>
      <section className="content_info">
        {children}
      </section>
    </>
  )
}