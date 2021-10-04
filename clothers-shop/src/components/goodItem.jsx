import React from "react"
import pic from "../img/black.jpg"

const GoodItem = ({ clothersList }) => {
    return (
        // <ul className="d-flex flex-wrap col-10">
        //     {clothersList.map((item) => (
        //         <li className="goods__item" key={item.id}>
        //             {item.model}
        //             <button
        //                 type="button"
        //                 className="btn btn-primary"
        //                 data-bs-toggle="modal"
        //                 data-bs-target="#exampleModal"
        //             >
        //                 Заказать
        //             </button>
        //             <a>Подробнее</a>
        //         </li>
        //     ))}
        // </ul>
        <div className="row row-cols-2 row-cols-md-2 g-4">
            {clothersList.map((item) => (
                <div className="col">
                    <div className="card" style={{ width: "320px" }}>
                        <img src={pic} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{item.model}</h5>
                            <p className="card-text">Красивая рубашка</p>
                            <a href="#" className="btn btn-primary">
                                Купить
                            </a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default GoodItem
