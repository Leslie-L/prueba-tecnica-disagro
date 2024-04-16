export default function TitleSections({number, title}){
    return(
        <p className="flex font-bold my-2">
            <span className="h-8 w-8 rounded-full bg-green-500 grid place-content-center mx-2 text-white">
              {number}
            </span>
            {title}
          </p>
    )
}