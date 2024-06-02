import React from 'react'
import clsx from "clsx";
import { IoMdAdd } from "react-icons/io";
import Button from '../components/Button';

const ProjectTitle = ({ label, className }) => {
  return (
    <div className='w-full h-10 md:h-12 px-2 md:px-4 rounded bg-white flex items-center justify-between'>
      <div className='flex gap-2 items-center'>
        <div className={clsx("w-4 h-4 rounded-full ", className)} />
        <p className='text-sm md:text-base text-gray-600'>{label}</p>
      </div>

      <Button className="hidden md:block">
        <IoMdAdd className="text-lg text-black" />
      </Button>
    </div>
  )
}

export default ProjectTitle;
