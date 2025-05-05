const NavbarSpacer = ({ isAnnouncementVisible }) => {
  const spacerHeight = isAnnouncementVisible
    ? 'h-[90px] lg:h-[123px]'
    : 'h-[46px] lg:h-[97px]'

  return <div className={`w-full ${spacerHeight}`}></div>
}

export default NavbarSpacer
