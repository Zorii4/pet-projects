import React from "react"

const GoodFilterList = ({ goods, onItemSelect, clearFilter }) => {
    const unicKey = []
    goods.forEach((item) => {
        if (!unicKey.includes(item.type)) {
            unicKey.push(item.type)
        }
        return unicKey
    })

    return (
        <>
            <div className="list__filter">
                <ul className="list-group">
                    {unicKey.map((good) => (
                        <li
                            key={good}
                            className="list-group-item"
                            onClick={() => {
                                onItemSelect(good)
                            }}
                            role="button"
                        >
                            {good}
                        </li>
                    ))}
                </ul>
                <button
                    type="button"
                    className="btn btn-info btn__clear"
                    onClick={() => {
                        clearFilter()
                    }}
                >
                    Сбросить фильтр
                </button>
            </div>
        </>
    )
}

export default GoodFilterList
