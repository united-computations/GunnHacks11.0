export default function Sponsor(props: {href: string, src: string, alt: string, width?:string}) {
    const {href, src, alt} = props;
    return (
        <a target="_blank" rel="noopener noreferrer" href={href}>
            <img
                src={src}
                alt={alt}
                className={"px-4 py-2 " + (props.width === "md" ? `w-[15rem]` : props.width === "sm" ? `w-[12rem]` : props.width === "lg" ? `w-[25rem]` : "max-h-[6rem]")}
            />
        </a>
    )
}
