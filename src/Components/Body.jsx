import Carousel from "react-bootstrap/Carousel";

function DarkVariantExample() {
  return (
    // <Carousel data-bs-theme="dark" className="carousal-container">
    //   <Carousel.Item>
    //     <img
    //       className="d-block w-100 img"
    //       src="./src/assets/male-7275449_1920.jpg"
    //       alt="First slide"
    //     />
    //     <Carousel.Caption >
    //       <h5>First slide label</h5>
    //       <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    //     </Carousel.Caption>
    //   </Carousel.Item>
    //   <Carousel.Item>
    //     <img
    //       className="d-block w-100 img"
    //       src="./src/assets/woman-3040029_1920.jpg"
    //       alt="Second slide"
    //     />
    //     <Carousel.Caption>
    //       <h5>Second slide label</h5>
    //       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    //     </Carousel.Caption>
    //   </Carousel.Item>
    //   <Carousel.Item>
    //     <img
    //       className="d-block w-100 img"
    //       src="./src/assets/shoes-4345656_1920.jpg"
    //       alt="Third slide"
    //     />
    //     <Carousel.Caption>
    //       <h5>Third slide label</h5>
    //       <p>
    //         Praesent commodo cursus magna, vel scelerisque nisl consectetur.
    //       </p>
    //     </Carousel.Caption>
    //   </Carousel.Item>
    // </Carousel>

    <>
      <Carousel data-bs-theme="dark" className="container main-container">
        <Carousel.Item className="edit">
          <img
            className="d-block w-100 shoe-img"
            src="https://cdn.pixabay.com/photo/2019/07/13/10/25/payment-4334491_1280.jpg"
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
            src="https://cdn.pixabay.com/photo/2024/05/09/08/43/women-8750279_1280.png"
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
            src=" https://images.pexels.com/photos/5650023/pexels-photo-5650023.jpeg?auto=compress&cs=tinysrgb&w=600"
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
