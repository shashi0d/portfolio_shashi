export default function ImgPlaceholder({ tag, label, dark = false, className = '', style = {} }) {
  return (
    <div className={`cs-img${dark ? ' dark' : ''}${className ? ' ' + className : ''}`} style={style} role="img" aria-label={label}>
      {tag && <span className="placeholder-tag">{tag}</span>}
      <span className="placeholder-label">{label}</span>
    </div>
  );
}
