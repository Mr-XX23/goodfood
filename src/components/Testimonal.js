import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, EffectCoverflow, Pagination } from "swiper";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import "../index.css";

SwiperCore.use([Navigation, EffectCoverflow, Pagination]);

export function Testimonal() {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        navigation={true}
        pagination={true}
        className="mySwiper"
      >
        <SwiperSlide>
          <section className="section5">
            <div className="testimonal container">
              <div className="container py-4">
                <div className="row">
                  <div className="col-md-6 offset-md-3 mb-2">
                    <div className="lc-block text-center">
                      <h2 editable="inline" className="display-3 mb-3">
                        <b>Testimonial</b>
                      </h2>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6 offset-md-3">
                    <div className="lc-block text-center mb-4">
                      <img
                        alt=""
                        className="rounded-circle t-img"
                        src="https://images.unsplash.com/photo-1569779213435-ba3167dde7cc?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"
                        loading="lazy"
                      />
                    </div>
                    <div className="lc-block text-center">
                      <div editable="rich">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Vivamus leo nulla, suscipit non dapibus vitae,
                          dignissim id quam. Donec eget nulla tellus.&nbsp;
                        </p>
                      </div>

                      <div editable="rich">
                        <h5>
                          <strong>&nbsp;Eddie Valiant</strong>
                        </h5>
                      </div>

                      <small
                        editable="inline"
                        className="text-secondary t-text"
                      >
                        CEO of Acme Inc.&nbsp;
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </SwiperSlide>



        <SwiperSlide>
          <section className="section5">
            <div className="testimonal container">
              <div className="container py-4">
                <div className="row">
                  <div className="col-md-6 offset-md-3 mb-2">
                    <div className="lc-block text-center">
                      <h2 editable="inline" className="display-3 mb-3">
                        <b>Testimonial</b>
                      </h2>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6 offset-md-3">
                    <div className="lc-block text-center mb-4">
                      <img
                        alt=""
                        className="rounded-circle t-img"
                        src="https://images.unsplash.com/photo-1569779213435-ba3167dde7cc?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"
                        loading="lazy"
                      />
                    </div>
                    <div className="lc-block text-center">
                      <div editable="rich">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Vivamus leo nulla, suscipit non dapibus vitae,
                          dignissim id quam. Donec eget nulla tellus.&nbsp;
                        </p>
                      </div>

                      <div editable="rich">
                        <h5>
                          <strong>&nbsp;Eddie Valiant</strong>
                        </h5>
                      </div>

                      <small
                        editable="inline"
                        className="text-secondary t-text"
                      >
                        CEO of Acme Inc.&nbsp;
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </SwiperSlide>



        <SwiperSlide>
          <section className="section5">
            <div className="testimonal container">
              <div className="container py-4">
                <div className="row">
                  <div className="col-md-6 offset-md-3 mb-2">
                    <div className="lc-block text-center">
                      <h2 editable="inline" className="display-3 mb-3">
                        <b>Testimonial</b>
                      </h2>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6 offset-md-3">
                    <div className="lc-block text-center mb-4">
                      <img
                        alt=""
                        className="rounded-circle t-img"
                        src="https://images.unsplash.com/photo-1569779213435-ba3167dde7cc?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"
                        loading="lazy"
                      />
                    </div>
                    <div className="lc-block text-center">
                      <div editable="rich">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Vivamus leo nulla, suscipit non dapibus vitae,
                          dignissim id quam. Donec eget nulla tellus.&nbsp;
                        </p>
                      </div>

                      <div editable="rich">
                        <h5>
                          <strong>&nbsp;Eddie Valiant</strong>
                        </h5>
                      </div>

                      <small
                        editable="inline"
                        className="text-secondary t-text"
                      >
                        CEO of Acme Inc.&nbsp;
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </SwiperSlide>



        <SwiperSlide>
          <section className="section5">
            <div className="testimonal container">
              <div className="container py-4">
                <div className="row">
                  <div className="col-md-6 offset-md-3 mb-2">
                    <div className="lc-block text-center">
                      <h2 editable="inline" className="display-3 mb-3">
                        <b>Testimonial</b>
                      </h2>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6 offset-md-3">
                    <div className="lc-block text-center mb-4">
                      <img
                        alt=""
                        className="rounded-circle t-img"
                        src="https://images.unsplash.com/photo-1569779213435-ba3167dde7cc?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"
                        loading="lazy"
                      />
                    </div>
                    <div className="lc-block text-center">
                      <div editable="rich">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Vivamus leo nulla, suscipit non dapibus vitae,
                          dignissim id quam. Donec eget nulla tellus.&nbsp;
                        </p>
                      </div>

                      <div editable="rich">
                        <h5>
                          <strong>&nbsp;Eddie Valiant</strong>
                        </h5>
                      </div>

                      <small
                        editable="inline"
                        className="text-secondary t-text"
                      >
                        CEO of Acme Inc.&nbsp;
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </SwiperSlide>
        
      </Swiper>
    </>
  );
}

export default Testimonal;
