/* eslint-disable react/destructuring-assignment */
import React from 'react';
import Image from 'next/image';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ActiveLink from '../ActiveLink/ActiveLink';
import Button from '../Button/Button';

const responsive = {
  desktop: {
    // you can add 3 items on the screen
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

class CarouselSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = { additionalTransfrom: 0 };
  }

  render() {
    const CustomSlider = ({ carouselState }) => {
      let value = 0;
      let carouselItemWidth = 0;
      if (this.Carousel) {
        carouselItemWidth = this.Carousel.state.itemWidth;
        const maxTranslateX = Math.round(
          // so that we don't over-slide
          carouselItemWidth
          * (this.Carousel.state.totalItems - this.Carousel.state.slidesToShow) + 150
        );
        value = maxTranslateX / 100; // calculate the unit of transform for the slider
      }
      const { transform } = carouselState;
      return (
        <div className="custom-slider">
          <input
            type="range"
            value={Math.round(Math.abs(transform) / value)}
            max={
              (carouselItemWidth * (carouselState.totalItems - carouselState.slidesToShow)
              + (this.state.additionalTransfrom === 150 ? 0 : 150))
              / value
            }
            onChange={(e) => {
              if (this.Carousel.isAnimationAllowed) {
                this.Carousel.isAnimationAllowed = false;
              }
              const nextTransform = e.target.value * value;
              const nextSlide = Math.round(nextTransform / carouselItemWidth);
              if (e.target.value === 0 && this.state.additionalTransfrom === 150) {
                this.Carousel.isAnimationAllowed = true;
                this.setState({ additionalTransfrom: 0 });
              }
              this.Carousel.setState({
                transform: -nextTransform, // padding 20px and 5 items.
                currentSlide: nextSlide,
              });
            }}
            className="custom-slider__input"
          />
        </div>
      );
    };
    return (
      <div id="projects" className="my-14 space-y-12 rounded p-6 lg:p-12">
        <div className="flex flex-col items-start pt-4">
          <p className="text-xl font-semibold leading-5 text-gray-800 lg:text-3xl">Some of my work</p>
        </div>
        <div className="lg:w-8/12 space-y-6 lg:mx-auto">
          <div className="flex flex-col items-center">
            <p className="leading-5 text-gray-800 text-center">Explore my rich and diverse projects of different size and technologies</p>
          </div>
          <div className="flex-1 lg:space-x-12  overflow-y-auto">
            <Carousel
              ssr={false}
            // eslint-disable-next-line no-return-assign
              ref={(el) => (this.Carousel = el)}
              partialVisbile={false}
              customButtonGroup={<CustomSlider />}
              itemClass="slider-image-item"
              responsive={responsive}
              containerClass="carousel-container-with-scrollbar"
              additionalTransfrom={-this.state.additionalTransfrom}
              beforeChange={(nextSlide) => {
                if (nextSlide !== 0 && this.state.additionalTransfrom !== 5) {
                  this.setState({ additionalTransfrom: 0 });
                }
                if (nextSlide === 0 && this.state.additionalTransfrom === 0) {
                  this.setState({ additionalTransfrom: 0 });
                }
              }}
            >
              <div className="p-3">
                <div className="w-11/12 m-auto rounded overflow-hidden shadow-2xl">
                  <Image
                    src="/images/weather.jpeg"
                    alt="Real time weather app"
                    layout="responsive"
                    height={250}
                    width={250}
                    className="w-full"
                  />
                  <div className="px-6 py-4">
                    <div className="font-semibold text-gray-800 text-xl mb-2">Weather App</div>
                    <p className="text-gray-700 text-base">
                      Get real-time weather information of any place.
                    </p>
                  </div>
                  <div className="p-6">
                    <ActiveLink href=" https://gads-weathers.web.app">
                      <Button />
                    </ActiveLink>
                  </div>
                </div>
              </div>
              <div className="p-3">
                <div className="w-11/12 m-auto rounded overflow-hidden shadow-2xl">
                  <Image
                    src="/images/avatar.jpg"
                    alt="Meet me"
                    layout="responsive"
                    height={250}
                    width={250}
                    className="w-full"
                  />
                  <div className="px-6 py-4">
                    <div className="font-semibold text-gray-800 text-xl mb-2">My Portifolio Site</div>
                    <p className="text-gray-700 text-base">
                      Get brief introduction about me, my work and experties..
                    </p>
                  </div>
                  <div className="p-6">
                    <ActiveLink href=" https://japhet.vercel.app">
                      <Button />
                    </ActiveLink>
                  </div>
                </div>
              </div>
              <div className="p-3">
                <div className="w-11/12 m-auto rounded overflow-hidden shadow-2xl">
                  <Image
                    src="/images/avatar.jpg"
                    alt="Meet me"
                    layout="responsive"
                    height={250}
                    width={250}
                    className="w-full"
                  />
                  <div className="px-6 py-4">
                    <div className="font-semibold text-gray-800 text-xl mb-2">My Portifolio Site</div>
                    <p className="text-gray-700 text-base">
                      Get brief introduction about me, my work and experties..
                    </p>
                  </div>
                  <div className="p-6">
                    <ActiveLink href=" https://japhet.vercel.app">
                      <Button />
                    </ActiveLink>
                  </div>
                </div>
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    );
  }
}

export default CarouselSlider;
