import Image from "next/image";
import { useState, useEffect } from "react";
import { StarIcon } from "@heroicons/react/24/solid";
import { addToBasket } from "../slices/basketSlice";
import { useDispatch } from "react-redux";

const MAX_RATING = 5;
const MIN_RATING = 1;

function Product({ id, title, price, description, category, image }) {
  // const [rating] = useState(Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING);

  const dispatch = useDispatch();

  const [rating, setRating] = useState(10);
  const [hasPrime, setPrime] = useState(0.3);

  useEffect(() => {
    setRating(
      Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
    );
    setPrime(Math.random() < 0.5);
  }, []);

  const addItemToBasket = () => {
    const product = {
      id,
      title,
      price,
      rating,
      description,
      category,
      image,
      hasPrime,
    };

    //Sending the productt as an actoin to the redux store----the basket slice
    dispatch(addToBasket(product));
  };

  return (
    <div className="relative flex flex-col  m-5 bg-white z-30 p-10">
      <p className="absolute top-2 right-2 text-xs italic text-gray-400">
        {category}
      </p>
      {/* <div className="flex justify-center w-auto h-48">
        <Image
          src={image}
          width={200}
          height={200}
          style={{
            objectFit: "contain",
          }}
        />
      </div> */}
      {/*  justify-center objectFit="contain" width={200}
          height={200}
          style={{
          objectFit: "cover",
        }} */}

      <div className="relative w-auto h-48">
        <Image
          src={image}
          fill
          style={{
            objectFit: "contain",
          }}
        />
      </div>

      <h4 className="my-3">{title}</h4>

      <div className="flex">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <StarIcon className="h-5 text-yellow-500" />
          ))}
      </div>

      <p className="text-xs my-2 line-clamp-2">{description}</p>

      <div className="mb-5">${price}</div>

      {hasPrime && (
        <div className="flex items-center space-x-2 -mt-5">
          <img className="w-12" src="/Prime-Logo.png" alt="Prime" />
          {/* <img src="/prime-A.png" alt="" /> */}
          <p className="text-xs text-gray-500">FREE Dedelivery</p>
        </div>
      )}

      <button onClick={addItemToBasket} className="mt-auto button">
        Add to Basket
      </button>
    </div>
  );
}

export default Product;
