
export const Menu = [
    {
        id: 1,
        link: '/',
        nav_ru: 'домой',
        nav_en: 'Home'
    },
    {
        id: 2,
        link: '/about',
        nav_ru: 'о нас',
        nav_en: 'About'

    },
    {
        id: 3,
        link: '/projects',
        nav_ru: 'Проекты',
        nav_en: 'Projects'
    },
    {
        id: 4,
        link: '/services',
        nav_ru: 'Услуги',
        nav_en: 'Services'
    },
    {
        id: 5,
        link: '/contact',
        nav_ru: 'контакты',
        nav_en: 'Contact'
    },
]

export default function handler(req, res) {
    res.status(200).json(Menu)
}