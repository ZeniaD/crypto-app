
import Image from "next/image";
import Link from "next/link";
import MarketVolumeBar from "@/components/MarketVolumeBar";
import PriceChange from "@/components/PriceChange";
import CurrencyIcon from "@/components/CurrencyIcon";
import CoinPriceChart from "@/components/CoinPriceChart";
import { Coin } from "@/types";
import formatNumber from "@/utils/formatNumber";
import getPercentage from "@/utils/getPercentage";
import getFormattedPrice from "@/utils/getFormattedPrice";

const RowItem = ({coin, currency}: {coin: Coin, currency: string}) => {
  const priceChange1h: number = getFormattedPrice(coin.price_change_percentage_1h_in_currency);
  const priceChange24h: number = getFormattedPrice(coin.price_change_percentage_24h_in_currency);
  const priceChange7d: number = getFormattedPrice(coin.price_change_percentage_7d_in_currency);

  return (
    <Link href={`/coin/${coin.id}`} className="dark:bg-blackberry bg-white mb-2 p-5 rounded-lg flex items-center text-sm">
      <span className="mr-2 w-[3%] text-center">{coin.market_cap_rank}</span>
      <span className="px-1 w-[5%] ">
        <Image src={coin.image} alt={coin.name} width={30} height={30}/>
      </span>
      <span className="w-[13%] px-1">{coin.name} ({coin.symbol})</span>
      <span className="w-[7%] px-1 flex items-center">
        <CurrencyIcon currency={currency} inverted={false}/>
        <span className="ml-1">{formatNumber(coin.current_price)}</span>
      </span>
      <span className="w-[7%] px-1">
        <PriceChange price={priceChange1h} />
      </span>
      <span className="w-[7%] px-1">
        <PriceChange price={priceChange24h} />
      </span>
      <span className="w-[7%] px-1">
        <PriceChange price={priceChange7d} />
      </span>
      <div className="w-full max-w-[18%] px-1">
        <div className="flex justify-between text-xs">
          <span className="text-grape">{formatNumber(coin.total_volume)}</span>
          <span>{formatNumber(coin.market_cap)}</span>
        </div>
        <MarketVolumeBar fill="bg-grape" percentage={getPercentage(coin.total_volume, coin.market_cap)}/>
      </div>
      <div className="w-full max-w-[18%] px-1">
        <div className="flex justify-between text-xs">
          <span className="text-apricot">{formatNumber(coin.circulating_supply)}</span>
          <span>{formatNumber(coin.total_supply)}</span>
        </div>
        <MarketVolumeBar fill="bg-apricot" percentage={getPercentage(coin.circulating_supply, coin.total_supply)}/>
      </div>
      <div className="w-full max-w-[14%] pl-3 text-center h-[50px]">
        <CoinPriceChart prices={coin.sparkline_in_7d.price} priceChange={priceChange7d} showDefaultColor={false} reduceBy={6}/>
      </div>
    </Link>
  )
}

export default RowItem;