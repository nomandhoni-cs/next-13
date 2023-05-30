import { Suspense } from "react"
import Repo from "@/app/componenets/Repo"
import Link from "next/link"
import RepoDirs from "@/app/componenets/RepoDirs"

const RepoPage = ({params: {name}}) => {
  return (
    <div className="card">
        <Link className="btn btn-back" href="/code/repos">Back to Repos</Link>
        <Suspense fallback={<h3>Loading Repos...</h3>}>
        <Repo name={name} />
        </Suspense>
        <Suspense fallback={<h3>Loading Directories...</h3>}>
        <RepoDirs name={name} />
        </Suspense>
    </div>
  )
}

export default RepoPage