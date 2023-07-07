import { Image } from "react-grid-gallery";



import Facial from "../../assets/facial.jpg"
import Facial1 from "../../assets/facial1.jpg"
import Facial2 from "../../assets/facial2.jpg"
import Facial3 from "../../assets/facial3.jpg"
import Facial4 from "../../assets/facial4.jpg"
import Product from "../../assets/products.jpg";
import Product1 from "../../assets/products1.jpg";
import Product2 from "../../assets/products2.jpg";
import Product3 from "../../assets/products3.jpg";
import Massage from "../../assets/massage.jpg";
import Massage1 from "../../assets/massage1.jpg";
import Massage2 from "../../assets/massage2.jpg";
import Massage3 from "../../assets/massage3.jpg";
import Wellness from "../../assets/wellness.jpg";
import Wellness1 from "../../assets/wellness1.jpg";
import Wellness2 from "../../assets/wellness2.jpg";

export interface CustomImage extends Image {
    original: string;
  }

export const photos:CustomImage[] = [
    {
      src: Facial,
      width: 257,
      height: 320,
      original:Facial,
      tags: [{ value: "Facial", title: "Skin Care" }],
    },
    {
      src: Facial1,
      width: 257,
      height: 320,
      original:Facial1,
      tags: [{ value: "Facial", title: "Skin Care" }],
    },
    {
      src: Facial2,
      width: 320,
      height: 215,
      original:Facial2,
      tags: [{ value: "Facial", title: "Skin Care" }],
    },
    {
      src: Facial3,
      width: 320,
      height: 179,
      original:Facial3,
      tags: [{ value: "Facial", title: "Skin Care" }],
    },
    {
      src: Facial4,
      width: 320,
      height: 213,
      original:Facial4,
      tags: [{ value: "Facial", title: "Skin Care" }],
    },
    {
      src: Product,
      width: 271,
      height: 320,
      original:Product,
      tags: [{ value: "Products", title: "Skin Care" }],
    },
    {
      src:Product1,
      width: 320,
      height: 190,
      original:Product1,
      tags: [{ value: "Products", title: "Skin Care" }],
    },
    {
      src: Product2,
      width: 320,
      height: 174,
      original:Product2,
      tags: [{ value: "Products", title: "Skin Care" }],
    },
    {
      src: Product3,
      width: 271,
      height: 320,
      original:Product3,
      tags: [{ value: "Products", title: "Skin Care" }],
    },
    {
      src: Wellness,
      width: 271,
      height: 320,
      original:Wellness,
      tags: [{ value: "Wellness", title: "Body Wellness" }],
    },
    {
      src: Wellness1,
      width: 320,
      height: 213,
      original:Wellness1,
      tags: [{ value: "Wellness", title: "Body Wellness" }],
    },
    {
      src: Wellness2,
      width: 320,
      height: 213,
      original:Wellness1,
      tags: [{ value: "Wellness", title: "Body Wellness" }],
    },
    {
      src: Massage3,
      width: 271,
      height: 320,
      original:Massage3,
      tags: [{ value: "Massage", title: "Body Massage" }],
    },
    {
      src: Massage,
      width: 320,
      height: 213,
      original:Massage3,
      tags: [{ value: "Massage", title: "Body Massage" }],
    },
    {
      src: Massage1,
      width: 320,
      height: 213,
      original:Massage3,
      tags: [{ value: "Massage", title: "Body Massage" }],
    },
    {
      src: Massage2,
      width: 271,
      height: 320,
      original:Massage3,
      tags: [{ value: "Massage", title: "Body Massage" }],
    },
  ];
  