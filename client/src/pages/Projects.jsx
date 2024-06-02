import React, { useEffect, useState } from 'react';
import { FaList } from 'react-icons/fa';
import { IoMdAdd } from 'react-icons/io';
import { MdGridView } from 'react-icons/md';
import { useParams } from 'react-router-dom';
import BoardView from '../components/BoardView';
import Button from '../components/Button';
import Loading from '../components/Loader';
import ProjectTitle from '../components/ProjectTitle';
import Tabs from '../components/Tabs';
import Title from '../components/Title';
import AddProject from '../components/project/AddProject';
import Table from '../components/project/Table';
import { useGetAllProjectQuery } from '../redux/slices/api/projectApiSlice';

const TABS = [
  { title: "Board View", icon: <MdGridView /> },
  { title: "List View", icon: <FaList /> },
];

const PROJECT_TYPE = {
  todo: "bg-blue-600",
  "in progress": "bg-yellow-600",
  completed: "bg-green-600",
};


const Projects = () => {
  const param = useParams()

  const [selected, setSelected] = useState(0);
  const [open, setOpen] = useState(false);

  const status = param?.status || "";

  const {data, isLoading} = useGetAllProjectQuery({
    strQuery: status,
    isTrashed: "", 
    search: "",
  });

  return isLoading ? (
    <div className='py-10'>
      <Loading />
    </div>
  ) : (
    <div className='w-full'>
      <div className='flex items-center justify-between mb-4'>
        <Title title={status ? `${status} Projects` : "Projects"} />
        {!status && (
          <Button
            onClick={() => setOpen(true)}
            label="Create Project"
            icon={<IoMdAdd className='text-lg' />}
            className='flex flex-row-reverse gap-1 items-center bg-blue-600 text-white rounded-md py-2 2xl:py-2.5'
          />
        )}
      </div>

      <Tabs tabs={TABS} setSelected={setSelected}>
        {!status && (
          <div className=" w-full flex justify-between gap-4 md:gap-x-12 py-4">
            <ProjectTitle label="To Do" className={PROJECT_TYPE.todo} />
            <ProjectTitle label="In Progress" className={PROJECT_TYPE["in progress"]} />
            <ProjectTitle label="Completed" className={PROJECT_TYPE.completed} />
          </div>
        )}

        {selected !== 1 ? (
          <BoardView tasks={data?.tasks} />
        ) : (
          <div className='w-full'>
            <Table tasks={data?.tasks} />
          </div>
        )}
      </Tabs>

        <AddProject open = {open} setOpen = {setOpen} />
    </div>
  );
};

export default Projects;
