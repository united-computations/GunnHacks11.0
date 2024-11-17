import Section from './Section';


export default function Footer() {
    const previousYears = ['10.0', '9.0', '8.0', '7.0', '6.0', '5.0', '4.0', '3.0', '2.0', '1.0'];

    return (
        <Section red>
            <div className="flex items-center text-xl gap-8">
                {/* TODO: Abel doesn't have a `font-medium` variant; is it better without bold? */}
                <h3 className="font-bold">Previous Years:</h3>
                <div className="flex flex-wrap gap-x-6 gap-y-2">
                    {previousYears.map(year => (
                        <a target="_blank" rel="noopener noreferrer" href={`https://${year}.gunnhacks.com`} key={year}>
                            {year}
                        </a>
                    ))}
                </div>
            </div>
        </Section>
    )
}
