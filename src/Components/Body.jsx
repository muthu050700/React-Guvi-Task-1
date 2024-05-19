import Carousel from "react-bootstrap/Carousel";

function DarkVariantExample() {
  return (
    <>
      <Carousel data-bs-theme="dark" className="container main-container">
        <Carousel.Item className="edit  object-cover object-bottom">
          <div>
            <img
              className="d-block w-100  h-[400px] sm:h-[600px] lg:h-[700px] blur-[1px]"
              src="https://cdn.pixabay.com/photo/2016/11/19/18/06/feet-1840619_640.jpg"
              alt="First slide"
            />
            <div className="bg-black absolute top-0 bottom-0 w-full h-full  opacity-[0.4]"></div>
          </div>

          <Carousel.Caption className="caption">
            <h2 className="font-bold text-lg py-2 text-white sm:text-xl lg:text-2xl">
              ShopSmart: Where Every Click Counts
            </h2>
            <h6 className="text-white sm:text-lg lg:text-xl">
              Discover a smarter way to shop with curated selections where each
              click leads to quality finds, making every purchase count.
            </h6>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item className="edit">
          <div>
            <img
              className="d-block w-100  h-[400px] sm:h-[600px] lg:h-[700px] blur-[1px]"
              src="https://cdn.pixabay.com/photo/2017/12/26/09/15/woman-3040029_1280.jpg"
              alt="Second slide"
            />
            <div className="bg-black absolute top-0 bottom-0 w-full h-full  opacity-[0.4]"></div>
          </div>

          <Carousel.Caption className="caption text-stone-600">
            <h2 className="font-bold text-lg py-2 text-white sm:text-xl lg:text-2xl">
              Browse, Click, Buy: Welcome to Your Shopping Haven
            </h2>
            <h6 className=" text-white sm:text-lg lg:text-xl">
              Welcome to Your Shopping Haven! Browse our curated collection,
              click to explore, and buy with ease.
            </h6>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="edit">
          <div>
            <img
              className="d-block w-100  h-[400px] sm:h-[600px] lg:h-[700px] blur-[1px]"
              src="https://cdn.pixabay.com/photo/2024/02/26/14/13/shopping-8598070_1280.jpg"
              alt="Third slide"
            />
            <div className="bg-black absolute top-0 bottom-0 w-full h-full blur-[1px] opacity-[0.4]"></div>
          </div>

          <Carousel.Caption>
            <h2 className="font-bold text-lg py-2 text-white sm:text-xl lg:text-2xl">
              TreasureTroves: Discover, Shop, Smile
            </h2>
            <h6 className="text-white sm:text-lg lg:text-xl">
              TreasureTroves: Your destination for discovering delightful finds.
              Shop with us and leave with a smile!
            </h6>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default DarkVariantExample;
