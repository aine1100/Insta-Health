interface CardProps{
    image?:string,
    title?:string,
    description?:string,
    classname?:string,
    titlestyle?:string,
    pstyle?:string
}

export default function Card({image, title, description,classname,titlestyle,pstyle}:CardProps){
    return(
        <div className={`${classname} flex flex-col items-center justify-center gap-5` }>
            <img src={image} alt={title} className="w-16 h-16" />
            <h2 className={` font-semibold text-2xl ${titlestyle}`}>{title}</h2>
            <p className={`text-gray-500 w-[300px] text-center ${pstyle}`}>{description}</p>
        </div>
    )
}