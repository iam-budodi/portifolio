/* eslint-disable react/destructuring-assignment */
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
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
      <div id="projects" className="my-16 space-y-12 shadow rounded  border-t px-6 py-10">
        <div className="flex flex-col items-start">
          <p className="text-xl font-semibold leading-5 text-gray-800 pt-4">Some of my work</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="leading-5 text-gray-800 text-center">Explore my rich and diverse projects of different size and technologies</p>
        </div>
        <div className="flex-1 overflow-y-auto">
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
            <div className="image-container increase-size">
              <div className="flex items-center justify-between w-full">
                <div className="flex flex-col lg:flex-row mx-auto w-full lg:items-center rounded bg-white shadow-xl border-t h-full">
                  <div className="w-full lg:w-2/3 h-72 dark:bg-gray-800">
                    <img
                      alt="Real time weather app"
                      className="object-cover h-72"
                      src="/images/weather.jpeg"
                    />
                  </div>
                  <div className="w-full lg:w-1/3 h-24 dark:border-gray-700 lg:h-64 border-t lg:border-t-0 lg:border-r lg:border-l lg:rounded-r dark:bg-gray-700 bg-gray-100 px-4">
                    <div className="font-semibold text-gray-700 text-xl leading-loose">Weather App</div>
                    <div className="text-gray-900 text-base font-light ">Get real-time weather information</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="increase-size">
              <div className="flex items-center justify-between w-full">
                <div className="flex flex-col lg:flex-row mx-auto w-full lg:items-center rounded bg-white shadow-xl border-t">
                  <div className="w-full lg:w-2/3 h-72 dark:bg-gray-800" />
                  <div className="w-full lg:w-1/3 h-24 dark:border-gray-700 lg:h-64 border-t lg:border-t-0 lg:border-r lg:border-l lg:rounded-r dark:bg-gray-700 bg-gray-100 px-4">
                    <div className="font-semibold text-gray-700 text-xl leading-loose">My Portifolio Site</div>
                    <div className="text-gray-900 text-base font-light ">Introducing me to the world</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="image-container increase-size">
              <div className="flex items-center justify-between w-full">
                <div className="flex flex-col lg:flex-row mx-auto w-full lg:items-center rounded bg-white shadow-xl border-t">
                  <div className="w-full rounded overflow-hidden shadow-2xl dark:bg-gray-800">
                    <img
                      alt="Real time weather app"
                      src="/images/weather.jpeg"
                    />
                  </div>
                  <div className="w-full lg:w-1/3  dark:border-gray-700 border-t lg:border-t-0 lg:border-r lg:border-l lg:rounded-r dark:bg-gray-700 bg-gray-100 px-6 py-4">
                    <div className="font-semibold text-gray-700 text-xl leading-loose mb-2">Weather App</div>
                    <div className="text-gray-700 text-base font-light ">Get real-time weather information</div>
                  </div>
                  <div className="px-6 py-4">
                    <button type="button" className="bg-blue-800 py-2 px-2 rounded text-white">Go Somewhere</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-64 rounded overflow-hidden shadow-2xl">
              <img className="w-full" src="https://www.fillmurray.com/300/300" alt="Sunset in the mountains" />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Card Title</div>
                <p className="text-gray-700 text-base">
                  Some quick example text
                </p>
              </div>
              <div className="px-6 py-4">
                <button type="button" className="bg-blue-800 py-2 px-2 rounded text-white">Go Somewhere</button>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    );
  }
}

export default CarouselSlider;
