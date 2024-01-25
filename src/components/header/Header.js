import arcowebp from "../../images/arco.webp";
import arcojpg from "../../images/arco.jpg";
import cv from './cv-christian-2024.pdf';

const Header = () => {
  return (
    <header className="header">
      <div className="box-header im-info">
        <h2 className="title">
          Hola mi nombre es <br /> <span>Christian Acosta 👋 </span>
        </h2>
        <p className="description">
          Soy Desarrollador Web
          <span> frontend 💻</span>
        </p>
        <a
          className="btn-global"
          href={cv}
          download=""
          rel="noopener noreferrer"
        >
          Descarga mi currículum
        </a>
      </div>
      <div className="box-header photo">
        <picture>
          <source srcSet={arcowebp} type="image/webp"></source>
          <source srcSet={arcojpg} type="image/jpg"></source>
          <img src={arcowebp} alt="Imagen del sitio web" />
        </picture>
      </div>
    </header>
  );
};
export default Header;
  