const NavbarSpacer = ({ isAnnouncementVisible }) => {
  const spacerHeight = isAnnouncementVisible
    ? 'h-[125px]  sm:h-[135px] lg:h-[153px]'
    : 'h-[48px] sm:h-[56px] lg:h-[97px]'

  return <div className={`w-full ${spacerHeight}`}></div>
}

export default NavbarSpacer
