import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"

type Heading = {
  id: string
  text: string
  level: number
  numbering: string
}

type IndexProps = {
  
}

export default function Index({}:IndexProps) {

  const location = useLocation()
  const [indexToggle, setIndexToggle] = useState(false)
  const [headings, setHeadings] = useState<Heading[]>([])

  useEffect(() => {
    const counters = [0, 0, 0, 0, 0, 0] // soporta h1-h6
    const elements = Array.from(
      document.querySelectorAll("h1, h2, h3, h4, h5, h6")
    ).map((el) => {
      const level = parseInt(el.tagName.replace("H", "")) // 1, 2, 3, 4...
      counters[level]++                                // aumentar el contador del nivel actual
      for (let i = level + 1; i < counters.length; i++) {
        counters[i] = 0 // resetear los subniveles
      }

      const numbering = counters.slice(1, level + 1).join(".")

      let id = el.id
      if (!id) {
        id = el.textContent?.toLowerCase().replace(/\s+/g, "-") + "_" + level || ""
        el.id = id
      }

      return {
        id,
        text: el.textContent || "",
        level,
        numbering,
      }
    })

    setHeadings(elements)
  }, [location])

  return (
    <>
      <button
        onClick={() => {
          setIndexToggle(!indexToggle)
        }}
      >Index List</button>
        { indexToggle ? (
            <section className="content_index_info">
              {
              headings.map((e, i) => (
                <a
                  key={`${e.id}_${e.level}_${i}`}
                  className={`content_index_info_a_${e.level}`}
                  href={`#${e.id}`}
                ><span>{e.numbering}</span> <p>{e.text}</p></a>
              ))
              }
            </section>
          )  : ""
        }
    </>
  )
}