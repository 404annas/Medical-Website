import { Facebook, Linkedin, Instagram, Twitter } from "lucide-react";

export const footerData = {
  brand: {
    name: "Eldiora",
    description:
      "Providing compassionate elder care with trusted specialists in health, nutrition, and wellness.",
  },
  contact: {
    address:
      "GSR Diagnostics & Clinics 5-8 Ground Floor, Safdar Mansion, Block # 16-D, Fazal-e-Haq Road, Adjacent Tabaq, Blue Area, Islamabad",
    phone: "+(92) 3305511662",
    email: "info@example.com",
  },
  quickLinks: [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ],
  utilityPages: [
    // { name: "Style guide", path: "#" },
    // { name: "License", path: "#" },
    // { name: "Changelog", path: "#" },
    // { name: "404", path: "#" },
    // { name: "Password protected", path: "#" },
  ],
  socialMedia: [
    { Icon: Facebook, url: "#" },
    { Icon: Linkedin, url: "#" },
    { Icon: Instagram, url: "#" },
  ],
  copyright: "© 2025 HHC. All Rights Reserved.",
};
