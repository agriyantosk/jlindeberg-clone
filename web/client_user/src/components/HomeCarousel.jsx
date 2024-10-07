import { Carousel, Typography, Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

export default function HomeCarousel() {
  return (
    <>
      <Carousel>
        <div className="relative max-h-3/4 h-full w-full">
          <img
            src="https://cdn.shopify.com/s/files/1/0674/3336/5782/files/look7_4674_copy_0da158c2-7723-4144-829f-5cb238001cad.jpg?v=1683615518&width=1920"
            alt="image 1"
            className="max-h-full w-full object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full items-end bg-black/25">
            <div className="ml-4 w-3/4 text-center md:w-2/4">
              <Typography
                variant="h1"
                color="white"
                className="mb-4 text-5xl md:text-6xl lg:text-7xl"
              >
                NEW GOLF ARRIVALS
              </Typography>
              <div className="flex gap-2">
                <Link to={"/product"}>
                  <Button
                    size="lg"
                    color="white"
                    variant="text"
                    className="underline"
                  >
                    SHOP NOW
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="relative max-h-3/4 h-full w-full">
          <img
            src="https://cdn.shopify.com/s/files/1/0674/3336/5782/files/220914_JLINDEBERG_S02_113_copy_aa5ed547-41dd-4cca-b71f-a8d7f3d2076c.jpg?v=1684221422&width=1920"
            alt="image 2"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full items-end bg-black/25">
            <div className="ml-4 w-3/4 text-center md:w-2/4">
              <Typography
                variant="h1"
                color="white"
                className="mb-4 text-5xl md:text-6xl lg:text-7xl"
              >
                SUMMER HOLIDAY FASHION
              </Typography>
              <div className="flex gap-2">
                <Button
                  size="lg"
                  color="white"
                  variant="text"
                  className="underline"
                >
                  SHOP NOW
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="relative max-h-3/4 h-full w-full">
          <img
            src="https://trendygolfusa.imgix.net/uploads/asset_file/asset_file/501623/1680216800.4981318-JL-Home-Fifty-Fifty-Men.jpg?auto=compress%2Cformat&bg=fff&crop=faces&cs=tinysrgb&dpr=1.5&fit=crop&fm=pjpg&h=450&q=50&w=800"
            alt="image 3"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full items-end bg-black/25">
            <div className="ml-4 w-3/4 md:w-2/4">
              <Typography
                variant="h1"
                color="white"
                className="mb-4 text-5xl md:text-6xl lg:text-7xl"
              >
                JOIN THE TEAM
              </Typography>
              <div className="flex gap-2">
                <Button
                  size="lg"
                  color="white"
                  variant="text"
                  className="underline"
                >
                  SHOP NOW
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Carousel>
    </>
  );
}
