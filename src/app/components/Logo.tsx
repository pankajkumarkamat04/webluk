import Image from "next/image";

export default function Logo() {
  return (
    <>
      <Image
        src="/logo-dark.png"
        alt="CAEBLUK Solutions"
        width={180}
        height={56}
        className="logo-dark h-12 sm:h-14 w-auto transition-opacity duration-200"
        priority
      />
      <Image
        src="/logo-white.png"
        alt="CAEBLUK Solutions"
        width={180}
        height={56}
        className="logo-white h-12 sm:h-14 w-auto transition-opacity duration-200"
        priority
      />
    </>
  );
}

