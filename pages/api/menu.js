
export const Menu = [
    {
        id: 1,
        link: '/',
        nav: 'Statitika',
        icon:"fa-solid fa-chart-pie"
    },
    {
        id: 2,
        link: '/users',
        nav: 'Foydalanuvchilar',
        icon:"fa-solid fa-users"

    },
    {
        id: 3,
        link: '/accepted',
        nav: 'Mahsulot qabuli',
        icon:"fa-solid fa-check-double"
    },
    {
        id: 4,
        link: '/warehouse',
        nav: 'Ombor',
        icon:"fa-solid fa-warehouse"
    },
    {
        id: 5,
        link: '/bichuv',
        nav: 'Bichuv',
        icon:"fa-solid fa-chart-pie"
    },
    {
        id: 6,
        link: '/sewing',
        nav: 'Tikuv',
        icon:"fa-solid fa-chart-pie"
    },
    {
        id: 7,
        link: '/sales-warehouse',
        nav: 'Sotuv Ombori',
        icon:"fa-solid fa-warehouse"
    },
    {
        id: 8,
        link: '/workers',
        nav: 'Ishchilar',
        icon:"fa-solid fa-user-group"
    },
    {
        id: 9,
        link: '/debts',
        nav: 'Kirim chiqim',
        icon:"fa-solid fa-chart-bar"
    },
    {
        id: 10,
        link: '/credit',
        nav: 'Nasiya va Qarzlar',
        icon:"fa-solid fa-credit-card"
    },
    {
        id: 11,
        link: '/help',
        nav: 'Yordam',
        icon:"fa-solid fa-handshake-angle"
    },
]

export default function handler(req, res) {
    res.status(200).json(Menu)
}