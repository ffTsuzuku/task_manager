import { useState } from 'react'
import Sidebar from './assets/components/Sidebar'

const default_projects = [
    {
        name: 'Learn React',
        active: 0,
    },
    {
        name: 'Learn Rust',
        active: 0,
    },
    {
        name: 'Learn Golang',
        active: 1,
    },
]

function App() {
    const [projects, set_projects] = useState(default_projects)

    const add_project = (project_name) => {
        set_projects((project_list) => {
            const copy = [...project_list].map((project) => ({
                name: project.name,
                active: 0,
            }))
            copy.push({ name: project_name, active: 1 })
        })
    }
    return (
        <>
            <div id='add_proj'></div>
            <div className='grid grid-cols-[20%_80%] bg-gray-800'>
                <Sidebar
                    projects={projects}
                    on_proj_add={add_project}
                />
            </div>
        </>
    )
}

export default App
