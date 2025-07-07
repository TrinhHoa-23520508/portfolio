import { useState } from "react";

interface IMessengerButtonProps {
  facebookPageId: string;
  bgColor?: string;
  label?: string;
  position?: string;
}

const MessengerButton = ({
  facebookPageId,
  bgColor = "dark:bg-pink-500 dark:hover:bg-pink-600 bg-[#0084FF]",
  label = "Mình có thể giúp gì được cho bạn 😊",
  position = "bottom-20 right-5",
}: IMessengerButtonProps) => {
  const [hovered, setHovered] = useState(false);

  const messengerLink = `https://m.me/${facebookPageId}`;

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
        <p>What's up bro?</p>
        {label}
      </div>
      <a
        href={messengerLink}
        target="_blank"
        rel="noopener noreferrer"
        className={`${bgColor} hover:brightness-110 transition-colors rounded-full p-3 shadow-lg`}
        aria-label="Nhắn tin Facebook"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="#ffffff"
          viewBox="0 0 24 24"
          width="24"
          height="24"
        >
          <path d="M12 2C6.475 2 2 6.025 2 11c0 2.285.975 4.36 2.575 5.895v3.105l3.195-1.765c1.045.29 2.155.445 3.23.445 5.525 0 10-4.025 10-9s-4.475-9-10-9zm.47 11.29-2.38-2.55-4.26 2.55 5.715-6.045 2.38 2.55 4.26-2.55-5.715 6.045z" />
        </svg>
      </a>
    </div>
  );
};

export default MessengerButton;

