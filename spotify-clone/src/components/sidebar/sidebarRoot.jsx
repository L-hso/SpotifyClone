import './sidebar.scss';
import SidebarBottom from './sidebarBottom';
import SidebarTop from './sidebarTop';

function SidebarRoot() {
  return (
    <div id="sidebar">
      <SidebarTop />
      <SidebarBottom />
    </div>
  );
}

export default SidebarRoot