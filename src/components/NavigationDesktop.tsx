import '../style/navigation-desktop.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavigationDesktopMenuTop from './navigationDesktopMenuTop';
import NavigationDesktopMenuBottom from './NavigationDesktopMenuBottom';


function NavigationDesktop() {
  return (
    <div className="navigation-desktop">
      <NavigationDesktopMenuTop/>
      <NavigationDesktopMenuBottom/>

    </div>
  );
}
export default NavigationDesktop;