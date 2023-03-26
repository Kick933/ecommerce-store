import { Link } from "react-router-dom"

export const LayOut = (props) => {
  return (
    <>
    <nav className="w-full h-12 shadow-lg border-b-2 flex items-center justify-between px-4">
      <Link to='/' className="text-2xl text-indigo-400">Logo Here</Link>
      <ul className="px-8 text-xl">
        <Link to='/cart'>Cart</Link>
      </ul>
    </nav>
    {props.children}
    </>
  )
}
