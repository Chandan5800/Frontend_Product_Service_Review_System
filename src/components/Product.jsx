import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import image1 from "./images/img7.png";
import image2 from "./images/img8.webp";
import image3 from "./images/img9.webp";
import image4 from "./images/img10.webp";
import image5 from "./images/img11.webp";
import image6 from "./images/img12.webp";
import image7 from "./images/img13.webp";
import image8 from "./images/img14.webp";
import image9 from "./images/img15.webp";
import image10 from "./images/img16.webp";
import image11 from "./images/img17.webp";
import image12 from "./images/img18.webp";

const productListing = [
  {
    id: 1,
    name: "Asus Vivobook",
    image: image1,
    details: `ASUS Vivobook 15X (2023) Intel Core i5 13th Gen 1315U - (16 GB/512 GB SSD/Windows 11 Home) K3504VAB-NJ541WS Thin and Light Laptop  (15.6 Inch, Indie Black, 1.60 Kg, With MS Office)`,
    rating: 4.5,
    price: `65,990`
  },
  {
    id: 2,
    name: "Apple 14 pro max",
    image: image2,
    details: `1 TB ROM
    17.02 cm(6.7 inch)  Super Retina XDR Display
    48MP + 12MP + 12MP | 12MP Front Camera
    A16 Bionic Chip 6 Core Processor Processor`,
    rating: 4.0,
    price: `1,77,999`
  },
  {
    id: 3,
    name: "SONY Alpha Camera",
    image: image3,
    details: `SONY Alpha ZV-E10L Mirrorless Camera Body with 1650 mm Zoom Lens Vlog Camera | Made for Creators, APS-C Sensor, Advanced Autofocus, Clear Audio|  (Black)`,
    rating: 4.4,
    price: `61,449`
  },
  {
    id: 4,
    name: "Women Kurta ",
    image: image4,
    details: `Fabric - Pure Cotton
    Type - Kurta and Dupatta Set
    Sales Package - 1 Kurti, 1 Dupatta
    Style Code - KanganChicken
    Top type - Kurta
    Pattern - Embroidered
    Color - White`,
    rating: 3.9,
    price: `759`
  },
  {
    id: 5,
    name: "Electric Cycle",
    image: image5,
    details: `Battery Type: Lithium-ion (Li-ion)
    Battery Voltage: 36 V | Charging Time: 4 hrs
    Motor: 250
    Maximum Speed: 25 km/hr
    Gear: Single Speed
    Tire Size: 27.5 inches| Frame Size: 16 inch`,
    rating: 4.4,
    price: `24,990`
  },
  {
    id: 6,
    name: "Puma Sneakers For Men ",
    image: image6,
    details: `Color - White
    Outer material - Synthetic Leather
    Model name - X-Ray 2 Square PACK
    Sole material - Rubber
    Closure - Lace-Up`,
    rating: 4.3,
    price: `3,525`
  },
  {
    id: 7,
    name: "CROCS ",
    image: image7,
    details: `Type - Clogs|
    Upper Pattern - Laser Cut|
    Closure - Slip on|
    Color - Blue|
    Sole Material - Croslite`,
    rating: 4.2,
    price: `2,739`
  },
  {
    id: 8,
    name: "Buddha Statue",
    image: image8,
    details: `Royalbox Meditating Buddha Statue For Home Decor Idol/Showpiece Decorative Showpiece - 17 cm  (Polyresin, Gold)`,
    rating: 4.2,
    price: `239`
  },
  {
    id: 9,
    name: "Acoustic Guitar",
    image: image9,
    details: `Brand-intern|
    Model Number-INT-38C-BK|
    Type-Acoustic Guitar|
    Number of Strings-6|
    Body Material-Linden Wood|
    Color-Black|
    Model Name-Intern 38 Inchs Acoustic Guitar Kit
    Back Material
    Linden Wood`,
    rating: 4.1,
    price: `2,099`
  },
  {
    id: 10,
    name: "Liquid Lipstick",
    image: image10,
    details: `Form-Liquid|
    Skin Type-All Skin Types|
    Finish-Matte|
    Duration-Above 15 hrs|
    Color-Red|
    Net Quantity
    15 ml`,
    rating: 4,
    price: `239`
  },
  {
    id: 11,
    name: `Roadster 
    Men Washed Jacket`,
    image: image11,
    details: `Color
    Blue
    Fabric
    Pure Cotton
    Pattern
    Washed
    Style code
    12288660
    Ideal for
    Men
    Sleeve
    Full Sleeve
    Closure
    Button`,
    rating: 4.5,
    price: `65,990`
  },
  {
    id: 12,
    name: "Nescafe Classic CoffeePowder",
    image: image12,
    details: `
    Brand
    Nescafe
    Model Name
    Classic CoffeePowder, 100% Pure
    Quantity
    90 g
    Container Type
    Mason Jar
    Coffee Type
    Instant Coffee
    Flavor
    Plain
    Maximum Shelf Life
    24 Months
    Organic
    No
    Ingredients
    Coffee beans
    Nutrient Content
    NA
    Net Quantity
    90 g`,
    rating: 4.5,
    price: `346`
  },
  {
    id: 13,
    name: "Asus Vivobook",
    image: image1,
    details: `ASUS Vivobook 15X (2023) Intel Core i5 13th Gen 1315U - (16 GB/512 GB SSD/Windows 11 Home) K3504VAB-NJ541WS Thin and Light Laptop  (15.6 Inch, Indie Black, 1.60 Kg, With MS Office)`,
    rating: 4.5,
    price: `65,990`
  },
  {
    id: 14,
    name: "Asus Vivobook",
    image: image1,
    details: `ASUS Vivobook 15X (2023) Intel Core i5 13th Gen 1315U - (16 GB/512 GB SSD/Windows 11 Home) K3504VAB-NJ541WS Thin and Light Laptop  (15.6 Inch, Indie Black, 1.60 Kg, With MS Office)`,
    rating: 4.5,
    price: `65,990`
  },
  {
    id: 15,
    name: "Asus Vivobook",
    image: image1,
    details: `ASUS Vivobook 15X (2023) Intel Core i5 13th Gen 1315U - (16 GB/512 GB SSD/Windows 11 Home) K3504VAB-NJ541WS Thin and Light Laptop  (15.6 Inch, Indie Black, 1.60 Kg, With MS Office)`,
    rating: 4.5,
    price: `65,990`
  },
];

const Product = () => {
  return (
    <div>
      <Navbar />
      <div className="mx-4 my-3">
        <div className="row row-gap-2">
          {productListing.map((product) => (
            <div key={product.id} className="col-md-2">
              <div className="card mb-2 h-100">
                <img src={product.image} className="card-img-top opacity-100" style={{ width: "100%", height: "260px", objectFit: "fill" }} alt="Img not found" />
                <div className="card-body d-flex flex-column justify-content-between">
                  <div>
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text" style={{ fontSize: "small" }}>{product.details}</p>
                    <p style={{ fontSize: "small" }}>Rating: {product.rating}</p>
                    <p style={{ fontSize: "small" }}>Price: ₹{product.price}</p>
                  </div>
                  <a href="/productdetails" className="btn btn-primary mt-auto">Rate this product</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};


export default Product;
