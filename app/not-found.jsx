import Link from "next/link"

const NotFound = () => {
  return (
    <div className="flex flex-col justify-between items-center max-w-[1200px] mx-auto h-full px-8">
    <h2>Page NotFound</h2>
    <p>Page your are searching does not Exist</p>
    <Link href="/"> Return to Homepage</Link>
    </div>
  )
}

export default NotFound;