import Section from '../../components/Section';
import Judge from './Judge';


export default function Judges() {
    return (
        <Section title="Judges" id="judges">
            <div className="flex flex-wrap justify-center gap-10 sm:gap-16">
                <Judge name="Ashly Joseph" src="/judges/Ashly Joseph.jpg">
                    Software Engineer, Cisco Systems
                </Judge>
                <Judge name="Oren Yair" src="/judges/Oren Yair.jpeg">
                    Technical Program Manager, Google 
                </Judge>
                <Judge name="Jithu Paulose" src="/judges/Jithu Paulose.jpg">
                    Cisco Systems
                </Judge>
                <Judge name="Jean-Yves Bouguet" src="/judges/Jean-Yves Bouguet.jpeg">
                    Director of Perception, Cruise
                </Judge>
                <Judge name="Vincent Scheib" src="/judges/Vincent Scheib.jpg">
                    Software Engineering Manager, Google
                </Judge>
                <Judge name="Lawrence Chang" src="/judges/Lawrence Chang.jpeg">
                    Co-Founder, Exemplar.ai
                </Judge>
            </div>
        </Section>
    )
}
