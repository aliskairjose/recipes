import reactLogo from "../assets/react.svg";
import gitHubLogo from "../assets/github.svg";
import viteLogo from "/vite.svg";

export default function Footer() {
  const date = new Date();
  return (
    // <footer className="absolute inset-x-0">
    <footer className="w-full">
      <hr className="h-0.5 border-t-0  bg-neutral-100 opacity-100 dark:opacity-50 " />
      <div className="flex lg:flex-row flex-col lg:p-6 p-4">
        <div className="flex lg:flex-1 flex-none text-left">
          © {date.getFullYear()}. Desarrollada con
          <img src={reactLogo} className="ms-1 h-6" /> +
          <img src={viteLogo} className="h-6" /> +
          <img
            className="h-6 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt=""
          />
        </div>
        <div className="lg:flex-1 flex-none text-right">
          <a
            href="https://github.com/aliskairjose/recipes"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="mx-2">Kervin Gonzalez</span>
            <img src={gitHubLogo} alt="github" className="float-right" />
          </a>
        </div>
      </div>
    </footer>
  );
}
