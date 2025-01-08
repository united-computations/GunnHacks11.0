import {ReactNode} from 'react';
import Section from '../../components/Section';


const mainPrizes = [{
    name: 'Top 3 Prizes', 
    value: 
    [
        'Black Headphones',
        'Echo Dot',
        'Speaker',
    ]
},
{
    name: 'Category Awards',
    value: [
        'Gaming Mouse',
        'Power Bank',
        'Cube Power Stripe',
        '512GB USB Flash Drive',
    ]
},
/* {
    name: 'Other Awards',
    value: [
        'Massive Enter Keys',
        'Discord Nitro',
        'Stylus Pens',
        'LED Desk Lamps'
    ]
},
{
    name: 'Sponsored Awards',
    value: [
        'Free .xyz Domains (For All Participants)',
        'Desmos Merchandise',
        'WolframAlpha Pro'
    ]
} */
];

const miniEventPrizes = [{
    name: 'Mini Event Awards',
    value: [
        'Big Enter',
        'Axolotl Plush',
        'Mooshroom Cow',
        'Stress Toy',
        'Cup Keychains'
    ]
}];

/* export default function Prizes() {
    return (
        <Section red title="Prizes" id="prizes">
            <div className="flex justify-center items-center h-64">
                <h2 className="text-3xl font-bold text-white-600">Coming Soon</h2>
            </div>
        </Section>
    );
} */

export default function Prizes() {
    return (
        <Section red title="Prizes" id="prizes">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {mainPrizes.map(prize => (
                    <div key={prize.name}>
                        <h3 className="text-xl font-bold mb-3">{prize.name}</h3>
                        <ul>
                            {prize.value.map(item => (
                                <Prize key={item}>{item}</Prize>
                            ))}
                        </ul>
                    </div>
                ))}

                <div>
                    <h3 className="text-xl font-bold mb-3">Mini Event Awards</h3>
                    <ul>
                        {miniEventPrizes[0].value.map(item => (
                            <Prize key={item}>{item}</Prize>
                        ))}
                    </ul>
                </div>
            </div>
        </Section>
    );
} 

function Prize(props: {children: ReactNode}) {
    return (
        <li className="p-4 bg-white rounded-lg mb-2.5 rounded-md text-black">
            {props.children}
        </li>
    )
}
