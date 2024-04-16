import { memo } from "react"

function DiscountSection({text,discount}) {
    return(
        <div className="h-20 w-1/2  flex flex-col text-white">
                <p className="text-sm bold text-center">{text}</p>
                <p className="text-center text-green-500">{discount}%</p>
        </div>
    )
}
export default memo(DiscountSection);
