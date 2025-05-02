const NavbarSpacer = ({ isAnnouncementVisible }) => {
  const spacerHeight = isAnnouncementVisible
    ? 'h-[125px]'
    : 'h-[48px] sm:h-[56px] lg:h-[97px]'

  return <div className={`w-full ${spacerHeight}`}></div>
}

export default NavbarSpacer
