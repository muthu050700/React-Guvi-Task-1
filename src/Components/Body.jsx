import Carousel from "react-bootstrap/Carousel";
function DarkVariantExample() {
  return (
    <>
      <Carousel data-bs-theme="dark" className="container main-container">
        <Carousel.Item className="edit">
          <img
            className="d-block w-100"
            src="./public/male-7275449_1920.jpg"
            alt="First slide"
          />
          <Carousel.Caption className="caption">
            <h2>ShopSmart: Where Every Click Counts</h2>
            <h6>
              Discover a smarter way to shop with curated selections where each
              click leads to quality finds, making every purchase count.
            </h6>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="edit">
          <img
            className="d-block w-100"
            src="./src/assets/feet-1840619_1920.jpg"
            alt="Second slide"
          />
          <Carousel.Caption className="caption">
            <h2>Browse, Click, Buy: Welcome to Your Shopping Haven</h2>
            <h6>
              Welcome to Your Shopping Haven! Browse our curated collection,
              click to explore, and buy with ease. Experience convenience and
              satisfaction with every purchase.
            </h6>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="edit">
          <img
            className="d-block w-100"
            src="./src/assets/woman-3040029_1920.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h2>TreasureTroves: Discover, Shop, Smile</h2>
            <h6>
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
