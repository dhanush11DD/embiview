import { Link } from "react-router-dom"

function Header() {
  return (
    <header className="container text-white flex justify-between items-center">
      <div className="text-3xl font-bold ">
        EMBIVIEW
      </div>
      <div className="flex gap-11">
        <Link to="/"><p className="content-2 header-list">Home</p></Link>
        <Link to="/"><p className="content-2 header-list">Products</p></Link>
        <Link to="/"><p className="content-2 header-list">About Us</p></Link>
        <Link to="/"><p className="content-2 header-list">Careers</p></Link>
      </div>
      <div className="">
        <button className="btn btn-fill">
          <p className="">Talk to our team</p>
        </button>
      </div>
    </header>
  )
}

export default Header
