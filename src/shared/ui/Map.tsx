import Image from "next/image";

const Map = () => {
  return (
    <div className="relative w-full h-[400px] rounded-lg overflow-hidden soft-shadow">
      <Image
        src="https://imagedelivery.net/D7_5dYkkJ13ewclh1BY9Gg/clinic-map/public"
        alt="Anyeong Plant Dental Clinic Location"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background/10 to-transparent pointer-events-none" />
    </div>
  );
};

export default Map;
