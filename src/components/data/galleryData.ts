import { Image } from "react-grid-gallery";
import { assets } from "../../assets/compressedAssets";

export interface CustomImage extends Image {
    original: string;
  }

export const photos:CustomImage[] = [
    {
      src: assets.Facial,
      width: 257,
      height: 320,
      original:assets.Facial,
      tags: [{ value: "Facial", title: "Skin Care" }],
    },
    {
      src: assets.Facial1,
      width: 257,
      height: 320,
      original:assets.Facial1,
      tags: [{ value: "Facial", title: "Skin Care" }],
    },
    {
      src: assets.Facial2,
      width: 320,
      height: 215,
      original:assets.Facial2,
      tags: [{ value: "Facial", title: "Skin Care" }],
    },
    {
      src: assets.Facial3,
      width: 320,
      height: 179,
      original:assets.Facial3,
      tags: [{ value: "Facial", title: "Skin Care" }],
    },
    {
      src: assets.Facial4,
      width: 320,
      height: 213,
      original:assets.Facial4,
      tags: [{ value: "Facial", title: "Skin Care" }],
    },
    {
      src: assets.Products6,
      width: 271,
      height: 320,
      original:assets.Products6,
      tags: [{ value: "Products", title: "Skin Care" }],
    },
    {
      src:assets.Products9,
      width: 320,
      height: 190,
      original:assets.Products9,
      tags: [{ value: "Products", title: "Skin Care" }],
    },
    {
      src: assets.Products11,
      width: 320,
      height: 174,
      original:assets.Products11,
      tags: [{ value: "Products", title: "Skin Care" }],
    },
    {
      src: assets.Products12,
      width: 271,
      height: 320,
      original:assets.Products12,
      tags: [{ value: "Products", title: "Skin Care" }],
    },
    {
      src: assets.Products13,
      width: 271,
      height: 320,
      original:assets.Products13,
      tags: [{ value: "Products", title: "Skin Care" }],
    },
    {
      src: assets.Products14,
      width: 271,
      height: 320,
      original:assets.Products14,
      tags: [{ value: "Products", title: "Skin Care" }],
    },
    {
      src: assets.Wellness,
      width: 271,
      height: 320,
      original:assets.Wellness,
      tags: [{ value: "Wellness", title: "Body Wellness" }],
    },
    {
      src: assets.Wellness1,
      width: 320,
      height: 213,
      original:assets.Wellness1,
      tags: [{ value: "Wellness", title: "Body Wellness" }],
    },
    {
      src: assets.Wellness2,
      width: 320,
      height: 213,
      original:assets.Wellness1,
      tags: [{ value: "Wellness", title: "Body Wellness" }],
    },
    {
      src: assets.Wellness3,
      width: 271,
      height: 320,
      original:assets.Wellness3,
      tags: [{ value: "Wellness", title: "Body Wellness" }],
    },
    {
      src: assets.Massage1,
      width: 271,
      height: 320,
      original:assets.Massage1,
      tags: [{ value: "Massage", title: "Body Massage" }],
    },
    {
      src: assets.Massage2,
      width: 320,
      height: 213,
      original:assets.Massage2,
      tags: [{ value: "Massage", title: "Body Massage" }],
    },
    {
      src: assets.Massage3,
      width: 320,
      height: 213,
      original:assets.Massage3,
      tags: [{ value: "Massage", title: "Body Massage" }],
    },
    {
      src: assets.Massage2,
      width: 271,
      height: 320,
      original:assets.Massage3,
      tags: [{ value: "Massage", title: "Body Massage" }],
    },
  ];
  