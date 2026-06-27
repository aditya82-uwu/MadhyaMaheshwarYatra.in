interface Props {
  title: string;
  bgImage?: string;
}

export default function InnerBanner({ title, bgImage }: Props) {
  const style = bgImage
    ? ({ "--inner-banner-bg": `url('${bgImage}')` } as React.CSSProperties)
    : undefined;

  return (
    <div className="inner-wrapper" style={style}>
      <span className="banner-accent" aria-hidden="true" />
      <div className="container">
        <div className="inner-title">
          <h1>{title}</h1>
          <p id="breadcrumbs">
            <a href="/">Home</a>{" "}
            <span className="breadcrumb_last">» {title}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
