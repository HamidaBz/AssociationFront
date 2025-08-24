import '../style/navigation-desktop-menu-top.css'
function NavigationDesktopMenuTop() {
  return (
    <nav className="navigation-desktop_menu-top">
      <ul className="navigation-desktop_menu-top-items">
        <li className="navigation-desktop_menu-top-item"> 
            <i className="bi bi-megaphone-fill " ></i> Actualités 
        </li>
        <li className="navigation-desktop_menu-top-item">
            <i className="bi bi-pin-fill" ></i> Nos adresses 
        </li>
      </ul>
    </nav>
  );
}
export default NavigationDesktopMenuTop;
