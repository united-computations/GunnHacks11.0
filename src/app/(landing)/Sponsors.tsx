import Section from '../../components/Section';
import Sponsor from './Sponsor';


export default function Sponsors() {
    return (
        <Section title="Sponsors" id="sponsors">
            <p>
                To sponsor our event, email us at <a href="mailto:ghshacks@gmail.com">ghshacks@gmail.com</a>.
            </p>

            <div className="pt-8 pb-2 flex flex-wrap gap-x-5 gap-y-2 items-center justify-center">
                <Sponsor href="https://www.janestreet.com/" src="/sponsors/jane-street.png" alt="Jane Street" />
                <Sponsor href="https://www.brandingout.com/" src="/sponsors/brandingout.png" alt="Branding Out" />
                <Sponsor href="https://gen.xyz/" src="/sponsors/XYZ.svg" alt="XYZ" />
                <Sponsor href="https://www.mitchellparkteenservices.org/thinkfund" src="/sponsors/thinkfund.webp" alt="Think Fund" width="md" />
                <Sponsor href="https://www.cityofpaloalto.org/" src="/sponsors/city-of-palo-alto.png" alt="City of Palo Alto" />
                <Sponsor href="https://www.desmos.com/" src="/sponsors/DesmosLogo-B.svg" alt="Desmos" />
                <Sponsor href="https://stanfordresearchpark.com/" src="/sponsors/SRP_Lockup_Primary_Gold_RGB.png" alt="Stanford Research Park" />
                <Sponsor href="https://www.digipen.edu/" src="/sponsors/DigiPen.png" alt="DigiPen" />
                {/*<Sponsor href="https://www.applied-computing.org/" src="/sponsors/ACF.png" alt="Applied Computing Foundation" />
                
                <Sponsor href="https://www.hudsonrivertrading.com/" src="/sponsors/HRT.png" alt="Hudson River Trading" />
                <Sponsor href="https://www.wolfram.com" src="/sponsors/wolfram.png" alt="Wolfram" />
                <Sponsor href="https://mlh.io/" src="/sponsors/MLH.png" alt="MLH" width="sm" />

                <Sponsor href="https://www.wolfram.com" src="/sponsors/wolfram.svg" alt="Wolfram" />
                <Sponsor href="https://artofproblemsolving.com" src="/sponsors/aops.png" alt="AoPS" />
                <Sponsor href="https://mule.to/p3df" src="/sponsors/sticker-mule.png" alt="Sticker Mule" />
                
                <Sponsor href="https://linktr.ee/leadinglearners" src="/sponsors/leading-learners.png" alt="Leading Learners" />
                <Sponsor href="https://www.leangap.org/" src="/sponsors/leangap.svg" alt="Leangap" />
                <Sponsor href="https://gunn.paloaltopta.org/" src="/sponsors/ptsa.png" alt="Gunn PTSA" /> */}
            </div>

            {/* <h1 className='text-3xl font-bold border-b-2 border-current mb-4'>Partners</h1>
            <div className="pt-8 pb-2 flex flex-wrap gap-x-5 gap-y-2 items-center justify-center">
                
            </div> */}
        </Section>
    )
}
