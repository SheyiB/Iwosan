import React, { useEffect } from 'react';
import './ToggleSwitch.css';

const ToggleSwitch = () => {

  const [isToggled, setToggle] = React.useState(false);

  useEffect(() => {
    document.body.classList.toggle("dark", isToggled);
  }, [isToggled]);

  return (
    <div className='toggle-home'>
    <div className="toggle-switch">
      <input
        type="checkbox"
        className="toggle-switch-checkbox"
        id="toggleSwitch"
        checked={isToggled}
        onChange={() => setToggle((prev) => !prev)}
      />
      <label className="toggle-switch-label" htmlFor="toggleSwitch">
        <span className={`toggle-switch-inner ${isToggled && 'toggled'}`} />
        <span className={`toggle-switch-switch ${isToggled && 'toggled'}`} />
      </label>
    </div>
    <span> {isToggled ? 'Apply Light Theme' : 'Apply Dark Theme' } </span>
    </div>
    
  );
}

export default ToggleSwitch;

