import { useRouter } from "next/router"
import { useEffect, useState } from "react"

export default function Look() {
  const router = useRouter()

  const [blog, setBlog] = useState({} as any)
  const [error, setError] = useState(false)

  useEffect(() => {
    const { id } = router.query
    fetch(`http://localhost:8000/blogs/${id}`)
      .then((resp) => resp.json())
      .then((json) => setBlog(json))
      .catch((e) => {
        alert(`Error displayed in console.`)
        console.error(e)
        setError(true)
      })
  }, [router])

  return (
    <>
      {!error ? (
        <div key={blog.id}>
          <h2>{blog.title}</h2>

          <h3>{blog.email}</h3>
          <h4>Created at {blog.created_at}</h4>
          <h4>Updated at {blog.updated_at}</h4>

          <p>{blog.body}</p>
          <br />
        </div>
      ) : undefined}
      <br />
      <button type="button" onClick={() => router.push("/")}>
        Go Back
      </button>
    </>
  )
}
