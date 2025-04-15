import MenuItem from '../MenuItem';

import { Flag } from 'react-feather';
import { Trello } from 'react-feather';
import { Briefcase } from 'react-feather';
import { Calendar } from 'react-feather';
import { FileText } from 'react-feather';
import { Bell } from 'react-feather';

function Menu() {
  return (
    <div className="flex flex-col gap-3">
      <MenuItem className="text-primary" icon={Trello}>
        Overview
      </MenuItem>
      <MenuItem icon={Flag}>Campanhas</MenuItem>
      <MenuItem icon={Briefcase}> Demandas</MenuItem>
      <MenuItem icon={Calendar}> Calendario</MenuItem>
      <MenuItem icon={FileText}>Eventos</MenuItem>
      <MenuItem icon={Bell}>Notificações</MenuItem>
    </div>
  );
}

export default Menu;
