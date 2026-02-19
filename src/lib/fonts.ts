import localFont from "next/font/local";

export const garamond = localFont({
  src: "../../fonts/itc-garamond-lt-cond.ttf",
  variable: "--font-garamond",
  display: "swap",
  weight: "300",
});

export const robotoMono = localFont({
  src: "../../fonts/RobotoMono-Regular.ttf",
  variable: "--font-roboto-mono",
  display: "swap",
  weight: "400",
});
