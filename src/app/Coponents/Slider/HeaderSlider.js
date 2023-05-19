import React, { Fragment } from "react";
import { Button, Carousel } from "react-bootstrap";
import "./HeaderSlider.css";
function HeaderSlider() {
  return (
    <Fragment>
      <Carousel variant="dark" style={{ maxHeihgt: "550px" }}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ height: "100vh", objectFit: "cover" }}
            src="../img/slider/2.jpg"
            alt="pure pu ladies bag"
          />
          <Carousel.Caption className="bg-white">
            <h5>Summer Collection Pure PU Ladies Shoulder Bag </h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            <div className="mb-3">
              <Button variant="dark">Shop Now</Button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ height: "80vh", objectFit: "cover" }}
            src="../img/slider/3.jpg"
            alt="pure mustard oil"
          />
          <Carousel.Caption className="bg-white">
            <h5>100% Cotton Men Black Refere</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            <div className="mb-3">
              <Button variant="dark">Shop Now</Button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ height: "80vh", objectFit: "cover" }}
            src="../img/slider/1.jpg"
            alt="smart blender home appliance"
          />
          <Carousel.Caption className="bg-white">
            <h5>Decorate Your Smart Kitchen</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            <div className="mb-3">
              <Button variant="dark">Shop Now</Button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Fragment>
  );
}

export default HeaderSlider;
