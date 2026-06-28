export const PHONE = "+917037398079";
export const PHONE_DISPLAY = "+91 70373 98079";
export const EMAIL = "contact@madhyamaheshwaryatra.in";
export const WHATSAPP_DEFAULT_MSG =
  "Namaste! I am interested in Madhyamaheshwar Yatra tour packages. Please share details.";

export const CALL_URL = `tel:${PHONE}`;

export function waUrl(msg = WHATSAPP_DEFAULT_MSG) {
  return `https://wa.me/${PHONE.replace("+", "")}?text=${encodeURIComponent(msg)}`;
}

export const WA_URL = waUrl();
