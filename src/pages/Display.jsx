import "./display.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Product from "./Product";
import { productData, responsive } from "./data";
function Display() {
const product = productData.map((item) => (
<Product
heading={item.heading}
url={item.imageurl}
url2={item.imageurl2}
name={item.name}
description={item.description}
definition={item.definiation}
/>
));
return (
<div className="App">

<Carousel showDots={true} responsive={responsive} autoPlay autoPlaySpeed={3000} infinite={true}>
{product}
</Carousel>

</div>
);
}
export default Display
