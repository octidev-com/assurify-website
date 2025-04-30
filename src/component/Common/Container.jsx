const Container = ({
  children,
  verticalPadding,
  paddingTop,
  horizontalPadding = "24px",
}) => {
  const style = {
    paddingTop: paddingTop ? paddingTop : undefined,
    paddingBottom: verticalPadding ? verticalPadding : undefined,
    paddingLeft: horizontalPadding ? horizontalPadding : undefined,
    paddingRight: horizontalPadding ? horizontalPadding : undefined,
  };
  return (
    <div
      className="max-w-[1170px] mx-auto xl:px-0"
      style={style}
    >
      {children}
    </div>
  );
};

export default Container;

