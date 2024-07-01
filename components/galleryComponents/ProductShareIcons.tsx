import {
  EmailShareButton,
  FacebookShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  PinterestShareButton,
} from "react-share";
import {
  FaEnvelope,
  FaTwitter,
  FaFacebook,
  FaTelegram,
  FaPinterest,
} from "react-icons/fa";
import { FaWhatsapp, FaLink } from "react-icons/fa6";
import { useState } from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const ProductShareIcons = ({ url, title }:any) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(url).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000); // Reset after 2 seconds
    });
  };

  return (
    <div className="flex gap-2 justify-start flex-wrap items-start text-gray-700">
      <button onClick={handleCopyLink} aria-label="Copy Link">
        <FaLink
          size={40}
          className="bg-gray-600 text-white rounded-full p-1 flex justify-center items-center"
        />
      </button>
      <TelegramShareButton url={url} title={title}>
        <FaTelegram
          size={40}
          className="bg-blue-400 text-white rounded-full p-1 flex justify-center items-center"
        />
      </TelegramShareButton>
      <WhatsappShareButton url={url} title={title}>
        <FaWhatsapp
          size={40}
          className={
            "bg-green-400 text-white rounded-full p-1 flex justify-center items-center"
          }
        />
      </WhatsappShareButton>
      <TwitterShareButton url={url} title={title}>
        <FaTwitter
          size={40}
          className={
            "bg-blue-500 text-white rounded-full p-2 flex justify-center items-center"
          }
        />
      </TwitterShareButton>
      {/* <PinterestShareButton url={url} title={title}>
        <FaPinterest size={32} />
      </PinterestShareButton> */}
      <FacebookShareButton url={url} title={title}>
        <FaFacebook
          size={40}
          className="bg-blue-800 text-white rounded-full p-1 flex justify-center items-center"
        />
      </FacebookShareButton>
      {isCopied && <span className="text-green-500">تم نسخ الرابط</span>}
    </div>
  );
};

export default ProductShareIcons;
