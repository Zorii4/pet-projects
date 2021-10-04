const goods = [
    {
        id: 1,
        type: "Рубашки",
        model: "Рубашка1",
        price: 700,
        gender: "male",
        color: "синий",
        size: "L",
    },
    {
        id: 2,
        type: "Рубашки",
        model: "Рубашка2",
        price: 600,
        gender: "female",
        color: "красный",
        size: "M",
    },
    {
        id: 3,
        type: "Платья",
        model: "Платье1",
        price: 1700,
        gender: "female",
        color: "синий",
        size: "S",
    },
    {
        id: 4,
        type: "Платья",
        model: "Платье2",
        price: 1600,
        gender: "female",
        color: "белый",
        size: "M",
    },
    {
        id: 5,
        type: "Джинсы",
        model: "Джинсы1",
        price: 900,
        gender: "female",
        color: "синий",
        size: "S",
    },
    {
        id: 6,
        type: "Джинсы",
        model: "Джинсы2",
        price: 1000,
        gender: "male",
        color: "голубой",
        size: "M",
    },
    {
        id: 7,
        type: "Джинсы",
        model: "Джинсы3",
        price: 950,
        gender: "male",
        color: "синий",
        size: "XL",
    },
]

const fetchAll = () =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            resolve(goods)
        }, 2000)
    })

export default { fetchAll }
