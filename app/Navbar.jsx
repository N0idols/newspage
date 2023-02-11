const links = [
  { id: 1, text: "Home", href: "/" },
  { id: 2, text: "New", href: "/" },
  { id: 3, text: "Popular", href: "/" },
  { id: 4, text: "Trending", href: "/" },
  { id: 5, text: "Categories", href: "/" },
];

export default function Navbar() {
  return (
    <nav className="max-w-6xl mx-auto flex list-none items-center justify-between py-12">
      <h1 className="text-6xl font-bold">W.</h1>

      <div className="flex w-1/3 justify-between ">
        {links.map((link) => {
          return (
            <li key={link.id}>
              <a href={link.href} className="text-gray-500 font-light">
                {link.text}
              </a>
            </li>
          );
        })}
      </div>
    </nav>
  );
}
