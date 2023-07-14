import { Typography } from "@material-tailwind/react";

export default function TennisCollection() {
    return (
        <>
            <div>
                <div className="sticky top-0">
                    <p className="text-center text-8xl font-semibold pt-64">
                        TENNIS COLLECTION
                    </p>
                </div>
                <>
                    <img
                        src="https://cdn.shopify.com/s/files/1/0674/3336/5782/files/0a7e6348a12a16bc6723e711a598cd21_003_jpg.webp?v=1683202804&width=1920"
                        alt="Tennis Collection Photos"
                        className="mx-auto max-h-full max-w-lg mb-4"
                    />
                    <img
                        src="https://cdn.shopify.com/s/files/1/0674/3336/5782/files/2fac77f1da057efe6aecb88c3a6992e3_006_jpg.webp?v=1683202806&width=1920"
                        alt="Tennis Collection Photos"
                        className="mx-auto max-h-full max-w-lg mb-4"
                    />
                    <img
                        src="https://cdn.shopify.com/s/files/1/0674/3336/5782/files/0bbdd7704e5cd5224ab66dfcd4891bd3_004_jpg.webp?v=1683204043&width=1920"
                        alt="Tennis Collection Photos"
                        className="mx-auto max-h-full max-w-lg mb-4"
                    />
                    <img
                        src="https://cdn.shopify.com/s/files/1/0674/3336/5782/files/932b5c0be0b68395cdae77fe240c8d9f_006_jpg.webp?v=1683202805&width=1920"
                        alt="Tennis Collection Photos"
                        className="mx-auto max-h-full max-w-lg mb-4"
                    />
                </>
            </div>
            <Typography
                variant="h3"
                color="black"
                className="text-5xl md:text-6xl lg:text-7xl underline font-medium ml-4 mb-32"
            >
                EXPLORE NOW
            </Typography>
        </>
    );
}
