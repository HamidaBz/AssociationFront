import '../style/navigation-desktop.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavigationDesktopMenuTop from './NavigationDesktopMenuTop';
import NavigationDesktopMenuBottom from './NavigationDesktopMenuBottom';


function NavigationDesktop() {
  return (
    <header  id="header-navigation-desktop" className="navigation-desktop">
      <NavigationDesktopMenuTop/>
      <NavigationDesktopMenuBottom/>

    </header>
  );
}
export default NavigationDesktop;