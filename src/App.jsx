import { useState } from 'react'
import Sidebar from './assets/components/Sidebar'
import ProjectDetails from './assets/components/ProjectDetails'

const default_projects = [
    {
        id: 1,
        name: 'Learn React',
        description: `Learn React from the ground up. \n Start with the basics finish with advanced knowleadge.`,
        date: new Date().toString(),
        task: [
            {
                id: 2,
                task: 'Practice fundamentals',
            },
            {
                id: 1,
                task: 'Learn some advanced topics',
            },
        ],
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

function deepCopy(obj) {
    if (obj === null || typeof obj !== 'object') {
        // If obj is null or not an object, return obj
        return obj
    }

    let copy
    // Determine the type of obj (Array or Object)
    if (Array.isArray(obj)) {
        // If obj is an Array, create a new Array
        copy = []
        // Iterate through each element in the Array and deep copy it
        for (let i = 0; i < obj.length; i++) {
            copy[i] = deepCopy(obj[i])
        }
    } else {
        // If obj is an Object, create a new Object
        copy = {}
        // Iterate through each key-value pair in the Object and deep copy it
        for (let key in obj) {
            if (obj.hasOwnProperty(key)) {
                copy[key] = deepCopy(obj[key])
            }
        }
    }
    return copy
}

function App() {
    const [projects, set_projects] = useState(default_projects)

    const active_project = projects.filter(
        (project) => project.active
    )[0]

    const remove_task = (project_id, task_id) => {
        set_projects((prev_state) => {
            const copy = deepCopy(prev_state)

            copy.forEach((project) => {
                if ((project.id = project_id)) {
                    const { task: tasks = [] } = project
                    let remove_id = null
                    for (let i = 0; i < tasks.length; i++) {
                        if (tasks[i].id === task_id) {
                            remove_id = i
                        }
                    }

                    if (remove_id != null) {
                        tasks.splice(remove_id, 1)
                    }
                }
            })

            console.log({ copy })
            return copy
        })
    }

    return (
        <>
            <div className='grid grid-cols-[20%_80%] bg-gray-800'>
                <Sidebar
                    projects={projects}
                    update_projects={set_projects}
                />
                <ProjectDetails
                    project={active_project}
                    remove_task={remove_task}
                />
            </div>
        </>
    )
}

export default App
