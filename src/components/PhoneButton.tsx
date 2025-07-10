import { useState } from "react";

interface IPhoneButtonProps {
  phoneNumber: string;
  bgColor?: string;
  label?: string;
  position?: string;
}

const PhoneButton = ({
  phoneNumber,
  bgColor = "dark:bg-green-500 dark:hover:bg-green-600 bg-green-600",
  label = "Contact now 📞",
  position = "bottom-40 right-5", 
}: IPhoneButtonProps) => {
  const [hovered, setHovered] = useState(false);
  const phoneLink = `tel:${phoneNumber}`;

  return (
    <div
      className={`fixed ${position} z-50 flex items-center gap-2 group`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className={`${hovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2"
          } transition-all duration-300 bg-white text-gray-800 px-3 py-2 rounded-lg shadow-lg text-sm max-w-[220px] pointer-events-none`}
      >
        <p>{label}</p>
      </div>
      <a
        href={phoneLink}
        className={`${bgColor} hover:brightness-110 transition-colors rounded-full p-3 shadow-lg`}
        aria-label="Gọi điện thoại"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="#ffffff"
          viewBox="0 0 24 24"
          width="24"
          height="24"
        >
          <path d="M6.62 10.79a15.91 15.91 0 006.59 6.59l2.2-2.2a1 1 0 011.05-.24 12.36 12.36 0 003.89.62 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 12.36 12.36 0 00.62 3.89 1 1 0 01-.24 1.05l-2.26 2.26z" />
        </svg>
      </a>
    </div>
  );
};

export default PhoneButton;
