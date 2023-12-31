import CaretIcon from "@/public/caret.svg";

const PriceChange = ({price} : {price : number}) => {
  const isPositive: boolean = price >= 0;

  return (
    <div className="flex items-center">
      <CaretIcon className={`w-[12px] h-[6px] ${isPositive ? "fill-[#00B1A7]" : "fill-[#FE2264] rotate-180"}`}/>
      <span className={`ml-1 ${isPositive ? "text-[#00B1A7]" : "text-[#FE2264]"}`}>{price}%</span>
    </div>
  )
}

export default PriceChange;