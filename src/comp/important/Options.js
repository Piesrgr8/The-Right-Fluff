import img1 from '../../assets/img/bday.jpg'
import img2 from '../../assets/img/corporatephoto.jpg'
import img3 from '../../assets/img/neighborhoodfestival.jpg'
import img4 from '../../assets/img/weddingreception.jpg'

const flavors = [
    {
        id: 1,
        name: 'Strawberry',
        desc: 'A strawberry is a small red fruit which is soft and juicy and has tiny yellow seeds on its skin.',
        basecolor: '#fc5a8d'
    },
    {
        id: 2,
        name: 'Marshmallow',
        desc: 'A sweet, refreshing taste. Its distinct flavors come from the individual ingredients. Sarsaparilla root and sassafras, which are its primary ingredients, provide a distinctive sweet, minty, and bitter taste. In order to bypass the bitter taste, sweeteners are added.',
        basecolor: '#f9f5ec'
    },
    {
        id: 3,
        name: 'Pineapple',
        desc: 'A distinct sweet vanilla flavoring. Vanilla flavoring can be added to marshmallows by using vanilla extract, or you can infuse vanilla beans into the sugar syrup. Vanilla beans give a ton of flavor to marshmallows.',
        basecolor: '#e6ae25'
    },
    {
        id: 4,
        name: 'Champagne',
        desc: 'A sweet taste with a bit of acid. They are not overly sweet fruits, and unripe blueberries will taste sour. They are small but juicy and will release juice when you bite down. Wild blueberries are smaller than cultivated ones and often have a more floral taste.',
        basecolor: '#F7E7CE'
    },
    {
        id: 5,
        name: 'Root Beer',
        desc: 'A sweet taste with a bit of acid. They are not overly sweet fruits, and unripe blueberries will taste sour. They are small but juicy and will release juice when you bite down. Wild blueberries are smaller than cultivated ones and often have a more floral taste.',
        basecolor: '#290e05'
    },
    {
        id: 6,
        name: 'Lemonade',
        desc: 'A sweet taste with a bit of acid. They are not overly sweet fruits, and unripe blueberries will taste sour. They are small but juicy and will release juice when you bite down. Wild blueberries are smaller than cultivated ones and often have a more floral taste.',
        basecolor: '#f0e79d'
    },
    {
        id: 7,
        name: 'Peppermint',
        desc: 'A sweet taste with a bit of acid. They are not overly sweet fruits, and unripe blueberries will taste sour. They are small but juicy and will release juice when you bite down. Wild blueberries are smaller than cultivated ones and often have a more floral taste.',
        basecolor: '#c5eada'
    },
    {
        id: 8,
        name: 'Blueberry',
        desc: 'A sweet taste with a bit of acid. They are not overly sweet fruits, and unripe blueberries will taste sour. They are small but juicy and will release juice when you bite down. Wild blueberries are smaller than cultivated ones and often have a more floral taste.',
        basecolor: '#4f86f7'
    },
    {
        id: 9,
        name: 'Cappuccino',
        desc: 'A sweet taste with a bit of acid. They are not overly sweet fruits, and unripe blueberries will taste sour. They are small but juicy and will release juice when you bite down. Wild blueberries are smaller than cultivated ones and often have a more floral taste.',
        basecolor: '#b39f7a'
    },
    {
        id: 10,
        name: 'Banana',
        desc: 'A sweet taste with a bit of acid. They are not overly sweet fruits, and unripe blueberries will taste sour. They are small but juicy and will release juice when you bite down. Wild blueberries are smaller than cultivated ones and often have a more floral taste.',
        basecolor: '#ffe135'
    },
    {
        id: 11,
        name: 'Pumpkin Spice',
        desc: 'A sweet taste with a bit of acid. They are not overly sweet fruits, and unripe blueberries will taste sour. They are small but juicy and will release juice when you bite down. Wild blueberries are smaller than cultivated ones and often have a more floral taste.',
        basecolor: '#e0b094'
    },
    // {
    //     id: 10,
    //     name: 'Maple',
    //     desc: 'A sweet taste with a bit of acid. They are not overly sweet fruits, and unripe blueberries will taste sour. They are small but juicy and will release juice when you bite down. Wild blueberries are smaller than cultivated ones and often have a more floral taste.',
    //     basecolor: '#bb9351'
    // }
];

const partyType = [
    {
        id: 1,
        name: 'Birthday Party',
        shortname: 'bday',
        banner: img1,
    },
    {
        id: 2,
        name: 'Wedding Reception',
        shortname: 'wedding',
        banner: img4,
    },
    {
        id: 3,
        name: 'Neighborhood Festival',
        shortname: 'festival',
        banner: img3,
    },
    {
        id: 4,
        name: 'Corporate Event',
        shortname: 'corporate',
        banner: img2,
    },
    {
        id: 5,
        name: 'Graduation',
        shortname: 'graduation',
        banner: '',
    },
    {
        id: 6,
        name: 'Fund Raiser',
        shortname: 'fundraiser',
        banner: '',
    }
]

export {flavors, partyType};