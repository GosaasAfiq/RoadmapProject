import { useEffect, useState } from 'react'
import axios from 'axios';
import NavBar from './Navbar';
import './style.css';  // Correct relative path to index.css
import { Outlet } from 'react-router-dom';
import { Roadmap } from '../models/roadmap';
import RoadmapDashboard from '../../features/Dashboard/RoadmapDashboard';


function App() {
  const [roadmaps, setRoadmaps] = useState<Roadmap[]>([]);

  useEffect(() => {
    axios.get<Roadmap[]>('http://localhost:5000/api/roadmaps')
      .then(response => {
        setRoadmaps(response.data)
      })
  }, [])

  return (
    <div>
      <NavBar/>
        <RoadmapDashboard roadmaps={roadmaps}/>
      <Outlet/>
    </div>
  )
}

export default App
