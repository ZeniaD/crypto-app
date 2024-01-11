import AddAssetModal from "@/components/AddAssetModal";

const Portfolio = () => {
  return (
    <div className="px-2 pb-14 pt-5 max-w-[1296px] w-full mx-auto">
      <div className="flex justify-between">
        <h1 className="text-2xl">Your Portfolio</h1>
        <AddAssetModal/>
      </div>
    </div>
  )
}

export default Portfolio;