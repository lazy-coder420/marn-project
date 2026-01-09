    import Container from '../Components/Container'
    import Flex from '../Components/Flex'
    import { IoIosArrowForward } from "react-icons/io";
    import Slider from "react-slick";
    import "slick-carousel/slick/slick.css";
    import "slick-carousel/slick/slick-theme.css";
    import Ipad from '../assets/Iphone.jpg';

    const Banner = () => {

    const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,

  
  appendDots: dots => (
      <div
        style={{
         
          borderRadius: "10px",
          padding: "10px"
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: i => (
      <div className=' w-3 h-3 bg-gray-500 rounded-full' />

    )



  };
        
    return (
        <div className='border-t border-[#00000075] mb-41.5'>
        <Container>
            <Flex >
                <div className=' border-r pr-5.5 border-[#00000068]'>

                    <ul className='Banner-ui flex flex-col gap-y-4  mt-10'> 

                     <li className='flex justify-between items-center'>Woman’s Fashion <IoIosArrowForward className='text-2xl' /></li>
                     <li className='flex justify-between items-center'>Men’s Fashion <IoIosArrowForward className='text-2xl' /></li>
                     <li>Electronics</li>
                     <li>Home & Lifestyle</li>
                     <li>Medicine</li>
                     <li>Sports & Outdoor</li>
                     <li>Baby’s & Toys</li>
                     <li>Groceries &</li>
                     <li>Health & Beauty</li>

                    </ul>

                </div>
                <div className='w-full mt-10 pl-12.5'>
                    <Slider {...settings}>
                        <div>
                            <img src={Ipad} alt=""/>
                            
                        </div>
                                                <div>
                            <img src={Ipad} alt=""/>
                            
                        </div>
                                                <div>
                            <img src={Ipad} alt=""/>
                            
                        </div>

                    </Slider>
                </div>

            </Flex>
        </Container>

        </div>
    )
    }

    export default Banner
