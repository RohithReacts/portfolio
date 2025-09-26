import { Box } from "@radix-ui/themes";
import Image from "next/image";

export default function Hero() {
  return (
    <Box id="home">
      <Image
        src="/images/office.jpg"
        alt="travel"
        width={1300}
        height={400}
        priority
        className="object-cover rounded-xl"
      />
    </Box>
  );
}
