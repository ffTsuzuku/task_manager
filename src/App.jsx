import { useState } from 'react'
import Sidebar from './assets/components/Sidebar'

const default_projects = [
    {
        name: 'Learn React',
        active: 1,
    },
    {
        name: 'Learn Rust',
        active: 0,
    },
    {
        name: 'Learn Golang',
        active: 0,
    },
]

function App() {
    const [projects, set_projects] = useState(default_projects)

    return (
        <>
            <div id='add_proj'></div>
            <div className='grid grid-cols-[20%_80%] bg-gray-800'>
                <Sidebar
                    projects={projects}
                    update_projects={set_projects}
                />
            </div>
        </>
    )
}

export default App
