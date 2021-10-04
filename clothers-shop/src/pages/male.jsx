import { useState, useEffect } from "react"
import api from "../api"

const Male = () => {
    const [clothes, setClothes] = useState([])

    useEffect(() => {
        api.goods.fetchAll().then((data) => {
            setClothes(data)
        })
    }, [])

    const maleClothes = clothes.filter((item) => item.gender === "male")

    return (
        <ul className="d-flex flex-wrap col-10">
            {maleClothes.map((item) => (
                <li className="goods__item" key={item.id}>
                    {item.model}
                </li>
            ))}
        </ul>
    )
}

export default Male
