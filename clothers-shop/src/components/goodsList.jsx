import { useEffect, useState } from "react"
import GoodFilterList from "./goodFilterList"
import GoodItem from "./goodItem"
import api from "../api"

const GoodsList = (props) => {
    const [goods, setGoods] = useState([])
    const [selectedGood, setSelectedGood] = useState()

    useEffect(() => {
        api.goods.fetchAll().then((data) => {
            setGoods(data)
        })
    }, [])

    const handleGoodSelect = (item) => {
        setSelectedGood(item)
    }

    const hadleClearFilter = () => {
        setSelectedGood()
    }

    const filteredGoods = selectedGood ? goods.filter((good) => good.type === selectedGood) : goods
    const maleClothes = filteredGoods.filter((item) => item.gender === "male")
    const femaleClothes = filteredGoods.filter((item) => item.gender === "female")

    return (
        <div className="my__container d-flex justify-content-between">
            {
                <GoodFilterList
                    goods={props.male ? maleClothes : props.female ? femaleClothes : goods}
                    onItemSelect={handleGoodSelect}
                    clearFilter={hadleClearFilter}
                />
            }
            {props.male && <GoodItem clothersList={maleClothes} />}
            {props.female && <GoodItem clothersList={femaleClothes} />}
            <GoodItem clothersList={filteredGoods} />
        </div>
    )
}

export default GoodsList
