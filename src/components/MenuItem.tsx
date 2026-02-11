import Image from "next/image";

interface MenuItemProps {
  name: string;
  description: string;
  image?: string;
}

export default function MenuItem({ name, description, image }: MenuItemProps) {
  return (
    <div className="flex items-center gap-6">
      {/* Product image */}
      <div className="w-[207px] h-[251px] relative flex-shrink-0 overflow-hidden rounded-md">
        {image ? (
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover"
          />
        ) : (
          <div className="w-full h-full bg-zinc-800 rounded-md" />
        )}
      </div>

      {/* Product info */}
      <div>
        <h3 className="font-display font-black text-[24px] leading-[28px] text-kokkiri-yellow">
          {name}
        </h3>
        <p className="font-display font-bold text-[20px] leading-[24px] text-white mt-2">
          {description}
        </p>
      </div>
    </div>
  );
}
