import Badge from "../../assets/MainTitle/Badge.png"
import UnderLineVector from "../../assets/MainTitle/UnderLineVector.png"

function MainTitle(): JSX.Element {
    return(
        <div className="mt-10 flex flex-col items-center justify-center gap-4">
            <img src={Badge} />
            <div className="flex w-[50%] gap-5 justify-center">
                <p className="text-4xl font-bold mb-2">Testimonials I've left</p>
                <div className="w-[6%] h-[34px] border border-gray-300 rounded-full flex items-center justify-center font-normal">
                    <p>47</p>
                </div>
            </div>
            <img src={UnderLineVector} />
        </div>
    )
}

export default MainTitle