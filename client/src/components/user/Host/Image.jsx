import { useState } from "react";
import { FaTrash } from "react-icons/fa";
import { useDropzone } from "react-dropzone";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
// import {IoImagesOutline} from 'react-icons/io'


function Image(){

    const [files, setFiles] = useState([]);

  const handleDelete = (fileIndex) => {
    setFiles((prevFiles) => prevFiles.filter((_, index) => index !== fileIndex));
  };

  const handleDrop = (acceptedFiles) => {
    setFiles((prevFiles) => [...prevFiles, ...acceptedFiles]);
  };

  const handleDragEnd = (result) => {
    if (!result.destination) return;

    const filesCopy = Array.from(files);
    const [reorderedFile] = filesCopy.splice(result.source.index, 1);
    filesCopy.splice(result.destination.index, 0, reorderedFile);

    setFiles(filesCopy);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop: handleDrop, accept: "image/*", minSize: 0, maxSize: 5242880, multiple: true });

  
    return (
        <div className=''>
         <div className='justify-center items-center flex flex-col my-12'>
            <div className='justify-center'>
                <h1 className='text-2xl md:text-3xl font-semibold font-sans'>
                Add some photos of your casa particular
                </h1>
                <h1 className='tex-lg md:text-lg text-gray-500'>
                You'll need 5 photos to get started. You can add more or make changes later.
                </h1>


                <div className="flex flex-col items-center justify-center h-screen mt-[-10px]">
      <div {...getRootProps()} className="w-[54rem] h-96 border-4 border-dashed rounded-lg p-4 flex flex-col items-center justify-center">
        <input {...getInputProps()} />
        {isDragActive ? (
          <p className="text-lg]0 font-medium">Drop the images here ...</p>
        ) : (
          <>
            {files.length > 0 ? (
              <DragDropContext onDragEnd={handleDragEnd}>
                <Droppable droppableId="images">
                  {(provided) => (
                    <ul {...provided.droppableProps} ref={provided.innerRef} className="grid grid-cols-3 gap-4">
                      {files.map((file, index) => (
                        <Draggable key={file.name} draggableId={file.name} index={index}>
                          {(provided) => (
                            <li {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef} className="relative">
                              <img src={URL.createObjectURL(file)} alt={file.name} className="h-[10rem] w-[16rem] object-contain mb-4" />
                              <button onClick={() => handleDelete(index)} className="absolute top-0 right-0 p-1 bg-red-500 text-white rounded-full">
                                <FaTrash />
                              </button>
                            </li>
                          )}
                        </Draggable>
                      ))}
                      {provided.placeholder}
                    </ul>
                  )}
                </Droppable>
              </DragDropContext>
            ) : (
             
              <p className="text-lg font-medium justify-center items-center"><h1 className='justify-center items-center text-3xl font-bold'>image</h1>
              Drag 'n' drop some files here, or click to select files</p>
            )}
          </>
        )}
      </div>
      {files.length >= 5 && (
        <p className="mt-4 text-red-500 font-medium">Maximum 5 files allowed</p>
      )}
    </div>





            </div>
      








         </div>

        </div>
    )
}

export default Image;