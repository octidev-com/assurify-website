const Container = ({ children, verticalPadding, paddingTop, horizontalPadding }) => {
  const style = {
    paddingTop: paddingTop ? paddingTop : undefined,
    paddingBottom: verticalPadding ? verticalPadding : undefined,
    paddingLeft: horizontalPadding ? horizontalPadding : undefined,
    paddingRight: horizontalPadding ? horizontalPadding : undefined,
  };
  return (
    <div className="max-w-[1170px] mx-auto px-[24px] xl:px-0" style={style}>
      {children}
    </div>
  );
};

export default Container;
