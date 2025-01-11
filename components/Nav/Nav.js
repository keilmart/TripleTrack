import { useEffect, useState } from "react"; // Import necessary hooks
import Link from "next/link";
import { useAuth0 } from "@auth0/auth0-react";
import { useRouter } from "next/router";

import ThemeToggle from "./ThemeToggle";
import { CircleIcon } from "./NavIcons/Index";

const Nav = () => {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    setIsClient(true); // Set client flag to true once the component is mounted in the client
  }, []);

  useEffect(() => {
    // Ensure the component doesn't try to redirect while the authentication is in progress
    if (isAuthenticated && loading) {
      setLoading(false); // Set loading to false once authenticated
      router.push("/budget"); // Manually redirect to /budget if authenticated
    }
  }, [isAuthenticated, loading, router]);

  const redirectUrl = isClient ? `${window.location.origin}/budget` : "";
  console.log("Redirect URL:", redirectUrl);

  const NavItem = ({ item }) => {
    return (
      <Link key={item.name} href={item.href}>
        <a
          className={`text-sm py-1 hover:bg-gray-100 hover:border-b dark:hover:bg-transparent dark:hover:text-syncWave ${
            item.isActive
              ? "text-syncWave hover:text-syncWave  hover:border-syncWave dark:text-syncWave dark:hover:text-syncWave"
              : "text-secondary hover:text-primary hover:border-gray-700 dark:hover:border-white dark:text-slate-200"
          }`}>
          {item.name}
        </a>
      </Link>
    );
  };

  const navigation = [
    { name: "Home", href: "/#", isActive: router.pathname === "/" },
    { name: "Budget", href: "/budget", isActive: router.pathname === "/budget" },
  ];

  return (
    <nav
      className={`sticky top-0 z-30 bg-white dark:bg-darkModeDetail ${
        router.pathname === "/budget" ? "" : "border-b border-primary dark:border-b-0"
      }`}>
      <div className="relative">
        <div
          className={`flex items-center justify-between w-full px-2.5 py-3 mx-auto sm:px-4 transition-all duration-500 ease-in-out ${
            router.pathname === "/budget"
              ? "xl:px-12"
              : "container max-w-screen-xl lg:px-8 "
          }`}>
          {router.pathname === "/budget" && (
            <div className="absolute left-0 h-full w-96 bg-syncWave dark:bg-darkModeDetail"></div>
          )}
          {/* Logo Section */}
          <div className="z-10 flex flex-row items-center justify-center text-sm antialiased font-semibold leading-3 tracking-wide text-primary dark:text-slate-200">
            <Link href="/">
              <a className="flex">
                {router.pathname != "/budget" && <CircleIcon />}
                <div className="flex items-center justify-center pl-navX pt-navY">
                  <span
                    className={`text-base antialiased tracking-tight sm:text-lg font-montserrat tracking dark:tracking-normal ${
                      router.pathname === "/budget" ? "" : ""
                    }`}>
                    {router.pathname === "/budget" ? <>TripleTrack</> : <>TripleByte</>}
                  </span>
                </div>
              </a>
            </Link>
          </div>

          <div className="flex items-center">
            <div className="space-x-2.5 sm:space-x-5">
              {navigation.map((item) => (
                <NavItem item={item} key={item.name} />
              ))}
            </div>
            <div className="flex ml-3 sm:ml-5">
              <ThemeToggle />
            </div>

            <div className="ml-4">
              {!isAuthenticated && isClient && (
                <button
                  onClick={() => {
                    const redirectUrl = "http://localhost:3000/budget"; // Hardcoded for testing
                    console.log("Redirect URL:", redirectUrl); // Log the redirect URL
                    loginWithRedirect({ redirect_uri: redirectUrl }); // Call the login redirect
                  }}
                  className="btn-primary primary-grad">
                  Sign In
                </button>
              )}
              {isAuthenticated && (
                <button
                  onClick={() =>
                    logout({
                      logoutParams: {
                        returnTo: window.location.origin, // Redirect after logout
                      },
                    })
                  }
                  className="btn-primary primary-grad">
                  Sign Out
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
