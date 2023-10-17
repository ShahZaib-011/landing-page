import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SimpleSlider() {
    const sliderSettings = {
        slidesToShow: 2,
        dots: true,
        slidesToScroll: 1,
        infinite: false,
    };

    return (
        <Slider {...sliderSettings} className="gap-5">
            <div className="cursor-pointer pr-5">
                <img src="/images/simpleresumetemplate.png" alt="simpleresumetemplate" />
            </div>
            <div className="pl-5 cursor-pointer">
                <img src="/images/creativeresumetemplate.png" alt="createresumetemplate" />
            </div>
            <div className="px-5 cursor-pointer">
                <img src="/images/modernresumetemplate.png" alt="modernresumetemplate" />
            </div>
            <div className="cursor-pointer">
                <img src="/images/executiveresumetemplate.webp" alt="executiveresumetemplate" />
            </div>
            <div className="cursor-pointer">
                <img src="/images/collegeresumetemplate.png" alt="collegeresumetemplate" />
            </div>
            <div className="cursor-pointer">
                <img src="/images/basicresumetemplate.png" alt="basicresumetemplate" />
            </div>
        </Slider>
    );
}
