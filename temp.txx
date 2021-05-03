  const [isOpen, setIsOpen] = useState(false);

  const toggleNavMenu = () => {
    setIsOpen(!isOpen);
  };

  let menuIcon;
  if (isOpen) {
    menuIcon = (
      <path
        fillRule="evenodd"
        d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
      />
    );
  } else {
    menuIcon = (
      <path
        fillRule="evenodd"
        d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
      />
    );
  }

  return (
    <header className="bg-gray-800 sm:flex sm:justify-between sm:px-4 sm:py-3 sm:items-center">
      <header className="flex items-center justify-between px-4 py-3 sm:p-0">
        <div className="flex-shrink-0 px-4 sm:px-8 lg:px-8">
          <img className="h-8 w-8" src="/images/japhet.png" alt="avatar" />
        </div>
        <div className="sm:hidden">
          <button
            onClick={toggleNavMenu}
            type="button"
            className="text-gray-500 hover:text-white focus:text-white focus:outline-none"
          >
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              {menuIcon}
            </svg>
          </button>
        </div>
      </header>

      <div className={isOpen ? 'px-4 pt-2 pb-4 block' : 'px-2 pt-2 pb-4 hidden sm:flex'}>
        <div className="flex px-6 sm:px-8 lg:px-8 items-baseline space-x-4">
          <a
            href="#"
            className="mt-1 block text-white text-sm font-medium rounded-md px-3 py-2 hover:bg-gray-700 sm:mt-0 sm:ml-2"
          >
            Home
          </a>
          <a
            href="#"
            className="mt-1 block text-white text-sm font-medium rounded-md px-3 py-2 hover:bg-gray-700 sm:mt-0 sm:ml-2"
          >
            About
          </a>
          <a
            href="#"
            className="mt-1 block text-white text-sm font-medium rounded-md px-3 py-2 hover:bg-gray-700 sm:mt-0 sm:ml-2"
          >
            Contacts
          </a>
        </div>
      </div>
    </header>
  );