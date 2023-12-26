import { Link } from "react-router-dom";

const navItems = [
  { name: "Home", path: "/", icon: "home" },
  { name: "Teams", path: "/teams", icon: "group_add" },
  { name: "Hackathons", path: "/hackathons", icon: "emoji_events" },
  { name: "Profile", path: "/profile", icon: "account_circle" },
];

const Header = () => {
  return (
    <>
      <header className="lg:fixed lg:left-0 lg:right-0 lg:flex lg:justify-around lg:z-10 lg:bg-slate-50 shadow-sm">
        <Link href="/">
          <h1
            className="text-4xl leading-tight font-bold p-2 text-black lg:text-5xl"
            style={{
              fontFamily: "Poppins,Ariel,sans-serif",
              letterSpacing: "0.4px",
            }}
          >
            Connect
          </h1>
        </Link>
        <nav className="lg:flex">
          <ul
            className="navigation-items flex items-center justify-evenly bottom-0 left-0 lg:pb-0 pb-1 fixed w-screen pt-1 shadow-sm border lg:w-1/5 lg:relative lg:right-0 lg:left-40 lg:shadow-none lg:border-none sm:fixed bg-slate-50"
            style={{ zIndex: "100" }}
          >
            {navItems.map((item) => (
              <li
                key={item.name}
                className="text-md px-4 lg:flex lg:flex-col-none"
              >
                <Link
                  to={item.path}
                  className="sm:flex-col items-center justify-center lg:flex lg:justify-evenly lg:p-2 hover:text-blue-600"
                >
                  <div className="text-center lg:inline-block">
                    <span className="material-icons">{item.icon}</span>
                  </div>
                  <span
                    className="text-center font-light lg:text-lg"
                    style={{ fontFamily: "Poppins,Ariel,serif" }}
                  >
                    {item.name}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
