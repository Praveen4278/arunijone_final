const navLinks = [
  { label: "Home", active: true },
  { label: "About", active: false },
  { label: 'Explore', active: false },
  { label: "Blogs", active: false },
];

export const SiteNavigation = (): JSX.Element => {
  return (
    <nav className="flex w-full items-center justify-between rounded-[20.41px] bg-white px-6 py-3.5">
      {/* Logo */}
      <a
        href="/"
        aria-label="Arunijone home"
        className="flex h-[56px] w-[56px] shrink-0 items-center justify-center rounded-full bg-[#f6f7f9]"
      >
        <img
          className="h-[38px] w-[38px] object-contain"
          alt="Arunijone logo"
          src="/figmaAssets/gemini-generated-image-gyuxclgyuxclgyux-2.png"
        />
      </a>

      {/* Nav links */}
      <ul className="flex items-center gap-[72px]">
        {navLinks.map(({ label, active }) => (
          <li key={label}>
            <a
              href="#"
              className={`[font-family:'SF_Pro_Display-Regular',Helvetica] text-base font-normal leading-[22px] tracking-[0] transition-colors hover:text-[#0161fe] ${
                active ? "text-[#0161fe]" : "text-[#111111]"
              }`}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>

      {/* Contact CTA */}
      <a
        href="#"
        className="flex h-[54px] items-center justify-center rounded-[85px] bg-[#0161fe] px-[30px] [font-family:'SF_Pro_Display-Regular',Helvetica] text-base font-normal leading-[18px] text-white transition-colors hover:bg-[#0161fe]/90"
      >
        Contact
      </a>
    </nav>
  );
};
