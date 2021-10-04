import React from "react"

const GoodItem = ({ clothersList }) => {
    return (
        <ul className="d-flex flex-wrap col-10">
            {clothersList.map((item) => (
                <li className="goods__item" key={item.id}>
                    {item.model}
                    <button
                        type="button"
                        class="btn btn-primary"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                    >
                        Заказать
                    </button>
                    <a>Подробнее</a>
                </li>
            ))}
        </ul>
    )
}

export default GoodItem
