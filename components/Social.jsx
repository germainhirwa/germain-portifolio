import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaInstagram, FaTwitter } from "react-icons/fa";

const socials = [
    { icon: <FaGithub />, path: "https://github.com/germainhirwa" },
    { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/germain-hirwa-5b07041b3/" },
    { icon: <FaInstagram />, path: "https://www.instagram.com/germainhirwa?igsh=MXJoc2FjeTI3aXBuMQ%3D%3D&utm_source=qr" },
    { icon: <FaTwitter />, path: "https://twitter.com/your-username" },
];

const Social = ({ containerStyles, iconStyles }) => {
    return (
        <div className={containerStyles}>
            {socials.map((item, index) => {
                return (
                    <Link key={index} href={item.path} className={iconStyles} target="_blank" rel="noopener noreferrer">
                        {item.icon}
                    </Link>
                );
            })}
        </div>
    );
};

export default Social;