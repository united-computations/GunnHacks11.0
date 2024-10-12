type JudgeProps = {name: string, children: string, src?: string}
export default function Judge(props: JudgeProps) {
    return (
        <div className="flex flex-col items-center">
            <img src={props.src ?? '/lambda.png'} alt={props.name} className="h-48 w-48 rounded-full mb-2" />
            <p className="font-bold text-lg">{props.name}</p>
            <p className="italic">{props.children}</p>
        </div>
    )
}
