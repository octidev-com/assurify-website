const NavbarSpacer = ({ isAnnouncementVisible }) => {
  // Adjust height based on announcement visibility
  const spacerHeight = isAnnouncementVisible
    ? 'h-[96px] lg:h-[145px]' // Taller height when Topbar is visible
    : 'h-[48px] lg:h-[97px]' // Default height when Topbar is hidden

  return <div className={`w-full ${spacerHeight}`}></div>
}

export default NavbarSpacer
