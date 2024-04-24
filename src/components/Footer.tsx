import { footerLinks } from "@/constants";

const Footer = () => {
  return (
    <footer className="py-5 px-5 sm:px-10">
      <div className="screen-max-width">
        <div>
          <p className="font-semibold text-gray text-sm">
            More ways to shop:{" "}
            <span className="underline text-blue">Find an apple store </span>
            or <span className="underline text-blue">other retailer </span>
            near you.
          </p>
          <p className="font-semibold text-gray text-sm">
            Or call 000800-040-1966
          </p>
        </div>
        <div className="bg-neutral-700 my-5 h-[1px] w-full" />
        <div className="flex flex-col md:flex-row md:items-center justify-between">
          <p className="font-semibold text-gray text-sm">
            Copyright @ 2024 Apple Inc. All rights reserved.
          </p>
          <div className="mt-2 grid grid-cols-2 gap-2 sm:flex">
            {footerLinks.map((link, i) => (
              <p
                key={link}
                className="font-semibold text-gray text-sm cursor-pointer hover:text-white transition-all"
              >
                {link}{" "}
                {i !== footerLinks.length - 1 && (
                  <span className="hidden sm:inline-block mx-2">|</span>
                )}
              </p>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
