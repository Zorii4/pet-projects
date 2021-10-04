import React from "react"
import logo from "../img/logo6.png"
import { Link } from "react-router-dom"

const NavBar = () => {
    return (
        <div className="d-flex justify-content-between header">
            <div>
                <img src={logo} />
                <Link to="/female">Женское</Link>
                <Link to="/male">Мужское</Link>
            </div>

            <form class="d-flex">
                <input
                    class="form-control me-2 col-6"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                />
                <button class="btn btn-outline-success" type="submit">
                    Search
                </button>
            </form>
            <a href="#">Вход/Регистрация</a>
        </div>
    )
}

export default NavBar
