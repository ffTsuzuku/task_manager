import { useRef, useState } from 'react'
import ProjectNameDialog from './ProjectNameDialog'

const Sidebar = ({ projects, update_projects }) => {
    const [adding_project, set_adding_projects] = useState(false)

    const dialog_ref = useRef(null)

    const projects_jsx = projects.map((project) => {
        const active_project_css = project.active
            ? 'text-orange-300'
            : undefined
        return (
            <p
                className={`${active_project_css} cursor-pointer text-xl p-3 hover:bg-slate-800 overflow-ellipsis w-full overflow-hidden`}
            >
                {project.name}
            </p>
        )
    })

    const open_modal = () => {
        dialog_ref.current.open()
    }

    const add_project = (project_name) => {
        update_projects((project_list) => {
            const copy = [...project_list].map((project) => ({
                name: project.name,
                active: 0,
            }))
            copy.unshift({ name: project_name, active: 1 })
            return copy
        })
        dialog_ref.current.close()
    }

    return (
        <div className='bg-slate-900 h-screen w-full shadow-lg rounded-xl flex flex-col justify-start align-baseline px-10 py-20 text-slate-400'>
            <ProjectNameDialog
                ref={dialog_ref}
                add_project={(name) => add_project(name)}
            />
            <h1 className='text-xl font-bold uppercase'>
                Your Projects
            </h1>
            <div className='mt-10'>
                <button
                    className='p-3 bg-orange-400 rounded-md hover:bg-slate-700 text-white font-bold shadow-lg'
                    onClick={open_modal}
                >
                    + Add Project
                </button>
            </div>
            <div className='my-10 overflow-y-scroll overflow-x-hidden'>
                {projects_jsx}
            </div>
        </div>
    )
}

export default Sidebar
