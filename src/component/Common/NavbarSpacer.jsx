const NavbarSpacer = ({ isAnnouncementVisible }) => {
  const spacerHeight = isAnnouncementVisible
    ? 'h-[119px] sm:h-[145px] lg:h-[145px]'
    : 'h-[48px] sm:h-[56px] lg:h-[97px]'

  return <div className={`w-full ${spacerHeight}`}></div>
}

export default NavbarSpacer
