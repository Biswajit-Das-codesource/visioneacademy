import { motion } from "framer-motion";

const items = [
  {
    src: "https://cdn.guidely.in/images/courses/161492365233.png",
    name: "RBI Office Attendant",
  },
  {
    src: "https://cdnbbsr.s3waas.gov.in/s37bc1ec1d9c3426357e69acd5bf320061/uploads/2022/02/2022022149.png",
    name: "NEET",
  },
  {
    src: "https://cdn.guidely.in/images/courses/162620226920.png",
    name: "LIC AAO",
  },
  {
    src: "https://cdn.guidely.in/images/courses/1614923918100.png",
    name: "SBI Clerk",
  },
  {
    src: "https://cdn.guidely.in/images/courses/162620226920.png",
    name: "LIC AAO Clerk",
  },
  {
    src: "https://cdn.guidely.in/images/courses/161492190544.png",
    name: "IBPS RRB Clerk",
  },
  {
    src: "https://cdn.guidely.in/images/courses/1614923918100.png",
    name: "SBI",
  },
  {
    src: "https://cdn.guidely.in/images/courses/162886647738.png",
    name: "SSC",
  },
  {
    src: "https://cdn.guidely.in/images/courses/162620226920.png",
    name: "LIC AAO",
  },
  {
    src: "https://cdn.guidely.in/images/courses/161492190544.png",
    name: "IBPS",
  },
];

const InfiniteScrollCarousel = () => {
  const fullItems = [...items, ...items]; // duplicate for seamless scroll

  return (
    <div className="relative w-full overflow-hidden py-4 px-10 mt-6">
      {/* Gradient Blur at edges */}
      <div className="absolute left-0 top-0 w-24 h-full bg-gradient-to-r from-green-100 to-transparent z-10" />
      <div className="absolute right-0 top-0 w-24 h-full bg-gradient-to-l from-green-100 to-transparent z-30" />

      <motion.div
        className="flex w-max gap-6"
        initial={{ x: 0 }}
        animate={{ x: "-50%" }}
        transition={{
          ease: "linear",
          duration: 30,
          repeat: Infinity,
        }}
      >
        {fullItems.map((item, index) => (
          <div
            key={index}
            className="p-4 rounded-xl min-w-[120px] flex flex-col justify-center items-center text-center"
          >
            <img
              src={item.src}
              className="h-14 w-auto object-contain mb-2"
              alt={`img-${index}`}
            />
            <p className="text-sm text-gray-700">{item.name}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default InfiniteScrollCarousel;
