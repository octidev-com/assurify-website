const NavbarSpacer = ({ isAnnouncementVisible }) => {
  const spacerHeight = isAnnouncementVisible
    ? 'h-[82px] lg:h-[123px]' // Navbar + Topbar heights
    : 'h-[56px] lg:h-[97px]' // Navbar height only

  return <div className={`w-full ${spacerHeight}`}></div>
}

export default NavbarSpacer
