import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Navbar({
  scroll,
  aboutmeRef,
  contactRef,
  skillsRef,
  projectsRef,
  homeRef,
}) {
  const navigation = [
    // { name: 'Home', ref: homeRef },
    { name: "About me", ref: aboutmeRef, current: false },
    { name: "Skills", ref: skillsRef, current: false },
    { name: "Projects", ref: projectsRef, current: false },
    { name: "Leave a Message", ref: contactRef, current: false },
  ];

  return (
    <Disclosure ref={homeRef} as="nav" className="relative z-10 ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          {/* Left section: Logo */}
          <div className="flex items-center">
            <div className="shrink-0 ">
              <a className=" text-custom-blue rounded-md px-3 py-2 text-xl font-extrabold font-jak">
                <span className="text-white">Med</span>nas
              </a>
            </div>
          </div>
          {/* this button that drop when device shrink */}
          <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white sm:hidden">
            <span className="absolute -inset-0.5" />
            <span className="sr-only">menu</span>
            <Bars3Icon
              aria-hidden="true"
              className="block size-6 group-data-[open]:hidden"
            />
            <XMarkIcon
              aria-hidden="true"
              className="hidden size-6 group-data-[open]:block"
            />
          </DisclosureButton>

          {/* Right section: Navigation items */}
          <div className="hidden sm:block font-jak ">
            <div className="flex space-x-4">
              {navigation.map((item) => (
                <a
                  onClick={() => scroll(item.ref)}
                  key={item.name}
                  ref={item.ref}
                  aria-current={item.current ? "page" : undefined}
                  className="text-gray-300 hover:underline hover:text-custom-blue hover:underline-offset-2 px-3 py-2 text-sm font-medium"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => (
            <DisclosureButton
              onClick={() => scroll(item.ref)}
              key={item.name}
              as="a"
              aria-current={item.current ? "page" : undefined}
              className="text-gray-300 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
