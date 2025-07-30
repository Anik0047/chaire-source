import Image from "next/image";

interface Product {
  product_slug: string;
  thumbnail_image: string;
  additional_images: {
    additional_image: string;
  }[];
  product_quantity: number;
  product_name: string;
  product_price: number;
  product_discount_price: number;
}

interface CommonProductCardProps {
  product: Product;
  handleProductDetailsPage: (slug: string) => void;
}

const CommonProductCard = ({
  product,
  handleProductDetailsPage,
}: CommonProductCardProps) => {
  return (
    <div
      onClick={() => handleProductDetailsPage(product?.product_slug)}
      className="cursor-pointer"
    >
      <div className="group relative overflow-visible sm:w-full">
        <Image
          src={product?.thumbnail_image}
          alt=""
          width={222}
          height={222}
          className="h-full w-full object-cover opacity-100 transition-opacity duration-200 group-hover:opacity-0"
        />
        <Image
          src={product?.additional_images?.[0]?.additional_image}
          alt=""
          width={222}
          height={222}
          className="absolute top-0 left-0 h-full w-full object-cover opacity-0 transition-opacity duration-200 group-hover:opacity-100"
        />
        {product?.product_quantity > 0 ? (
          <span className="absolute top-2 right-2 rounded bg-black px-3 py-1 text-xs text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100">
            Quick Shop
          </span>
        ) : (
          <span className="absolute top-0 right-0 bg-black px-4 py-1 text-sm text-white">
            Sold out
          </span>
        )}
      </div>
      <div className="mt-5 space-y-1.5">
        <p className="text-[17px] sm:text-xl">{product?.product_name}</p>
        <p className="space-x-2 text-sm sm:space-x-3 sm:text-base">
          <span className="line-through">Tk {product?.product_price}</span>
          <span>from TK</span>
          {product?.product_discount_price}
        </p>
        <p></p>
      </div>
    </div>
  );
};

export default CommonProductCard;
