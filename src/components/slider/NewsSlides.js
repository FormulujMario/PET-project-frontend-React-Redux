export const SideSlide = ({ element }) => {
  return (
    <swiper-slide class="side-slide">
      <div className="swiper-slide-item">
        <div>
          <img src={element.img} alt={element.title} />
        </div>
        <div className="title">
          <p>{element.date}</p>
        </div>
        <h4>{element.title}</h4>
      </div>
    </swiper-slide>
  );
};

export const CentralSlide = ({ element }) => {
  return (
    <swiper-slide class="central-slide">
      <div className="swiper-slide-item">
        <div>
          <img src={element.bigImg} alt={element.title} />
        </div>
        <div className="title">
          <p>{element.date}</p>
        </div>
        <h4>{element.title}</h4>
      </div>
    </swiper-slide>
  );
};
