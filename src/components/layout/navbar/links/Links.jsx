import Link from "next/link";

const Links = () => {
  const links = [
    { title: "About", path: "/about" },
    { title: "Service", path: "/services" },
    { title: "Blogs", path: "/blogs" },
    { title: "FAQ", path: "/faq" },
  ];

  return (
    <div className="linksContainer">
      {links.map((link) => (
        <Link href={link.path} key={link.title}>
          {link.title}
        </Link>
      ))}
    </div>
  );
};

export default Links;
