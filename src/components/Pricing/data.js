import { GiCrystalBars } from 'react-icons/gi';
import { GiCutDiamond, GiRock } from 'react-icons/gi';

export const pricingData = [
    {
        id: 1,
        icon: <GiRock />,
        head: "Starter Pack",
        price: "$99.99",
        length: "per month",
        feature1: "100 New Users",
        feature2: "$10,000 Budget",
        feature3: "Retargeting analytics",
        button: "Choose Plan"
    },
    {
        id: 2,
        icon: <GiCrystalBars />,
        head: "Gold Rush",
        price: "$299.99",
        length: "per month",
        feature1: "1000 New Users",
        feature2: "$50,000 Budget",
        feature3: "Lead Gen analytics",
        button: "Choose Plan"
    },
    {
        id: 1,
        icon: <GiCutDiamond />,
        head: "Diamond Kings",
        price: "$999.99",
        length: "per month",
        feature1: "Unlimited Users",
        feature2: "Unlimited Budget",
        feature3: "24/7 Support",
        button: "Choose Plan"
    }
];