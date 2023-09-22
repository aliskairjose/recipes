import reactLogo from "../assets/react.svg";
import gitHubLogo from "../assets/github.svg";
import viteLogo from "/vite.svg";

export default function Footer() {
  const date = new Date();
  return (
    <footer className="w-full z-40 fixed bottom-0 bg-white">
      <hr className="h-0.5 border-t-0  bg-neutral-100 opacity-100 dark:opacity-50 " />
      <div className="flex lg:flex-row flex-col items-center lg:p-6 p-4">
        <div className="flex lg:flex-1 flex-none text-left md:text-base text-sm">
          © {date.getFullYear()}. Desarrollada con
          <img src={reactLogo} className="ms-1 h-5" />
          <img src={viteLogo} className="h-5" />
          <img
            className="h-5 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt=""
          />
        </div>
        <div className="lg:flex-1 flex-none">
          <div className="border rounded w-fit float-right p-1">
            <a
              href="https://github.com/aliskairjose/recipes"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={gitHubLogo} alt="github" className="float-right h-5" />
              <span className="mx-2 text-sm">Source code</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
