export const responsive = {
    superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 1024 },
    items: 5,
    slidesToSlide: 1,
    },
    desktop: {
    breakpoint: { max: 1024, min: 800 },
    items: 1,
    },
    tablet: {
    breakpoint: { max: 800, min: 464 },
    items: 1,
    },
    mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    },
    };
    

    export const productData = [
        {
        id: 1,
        heading: "What our customer are saying",
        imageurl: "https://res.cloudinary.com/dr5u1rplx/image/upload/v1678538716/Rectangle_17_dsmumj.png",
        imageurl2: "https://res.cloudinary.com/dr5u1rplx/image/upload/v1678537764/Group_5_fwe9ay.png",
        name: "Edward Newgate",
        description: "Founder Circle",
        definiation: "“Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely”",     
       },

    //    {
    //     id: 1,
    //     heading: "What our customer are saying",
    //     imageurl: "https://res.cloudinary.com/dr5u1rplx/image/upload/v1678538716/Rectangle_17_dsmumj.png",
    //     imageurl2: "https://res.cloudinary.com/dr5u1rplx/image/upload/v1678537764/Group_5_fwe9ay.png",
    //     name: "Edward Newgate",
    //     description: "Founder Circle",
    //     definiation: "“Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely”",     
    //    },

    //    {
    //     id: 1,
    //     heading: "What our customer are saying",
    //     imageurl: "https://res.cloudinary.com/dr5u1rplx/image/upload/v1678538716/Rectangle_17_dsmumj.png",
    //     imageurl2: "https://res.cloudinary.com/dr5u1rplx/image/upload/v1678537764/Group_5_fwe9ay.png",
    //     name: "Edward Newgate",
    //     description: "Founder Circle",
    //     definiation: "“Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely”",     
    //    },


    ]        
    function Display() {
        const CustomLeftArrow = ({ onClick }) => {
          return (
            <button className="custom-arrow left" onClick={onClick}>
              <i class="bi bi-arrow-left" />
            </button>
          );
        };
      
        const CustomRightArrow = ({ onClick }) => {
          return (
            <button className="custom-arrow right" onClick={onClick}>
              <i class="bi bi-arrow-right" />
            </button>
          );
        };
      
        const CustomDot = ({ active }) => {
          return (
            <span className={`custom-dot ${active ? 'active' : ''}`}>
            </span>
          );
        };
    }

    