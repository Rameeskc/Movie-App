import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { MovieValidation } from '../../utils/MovieValidation';

const MovieForm = ({ initialValues, onSubmit, buttonLabel }) => {
  
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={MovieValidation}
      onSubmit={onSubmit}
    >
      {() => (
        <div className='w-full h-full flex items-center justify-center'>
          <Form className='w-[400px] h-[500px] my-4 border-4 rounded-xl flex flex-col justify-center items-center'>
            <div className='flex flex-col items-center h-[80px] w-full'>
              <label htmlFor="title">Movie Title</label>
              <Field type="text" name="title" className='text-black border w-60 h-7 px-2' />
              <ErrorMessage name="title" component="div" className="text-red-500" />
            </div>

            <div className='flex flex-col items-center h-[80px] w-full'>
              <label htmlFor="language">Language</label>
              <Field as="select" name="language" className="w-60 h-7">
                <option value="">Select Language</option>
                <option value="English">English</option>
                <option value="Hindi">Hindi</option>
                <option value="Tamil">Tamil</option>
                <option value="Malayalam">Malayalam</option>
              </Field>
              <ErrorMessage name="language" component="div" className="text-red-500" />
            </div>

            <div className='flex flex-col items-center h-[80px] w-full'>
              <label htmlFor="description">Movie Description</label>
              <Field type="text" name="description" className='text-black border w-60 h-7 px-2' />
              <ErrorMessage name="description" component="div" className="text-red-500" />
            </div>

            <div className='flex flex-col items-center h-[80px] w-full'>
              <label htmlFor="trailer">Trailer</label>
              <Field type="text" name="trailer" placeholder="Trailer Link" className='text-black border w-60 h-7 px-2' />
              <ErrorMessage name="trailer" component="div" className="text-red-500" />
            </div>

            <div className='flex flex-col items-center h-[80px] w-full'>
              <label htmlFor="image">Image</label>
              <Field type="text" name="image" placeholder="Image Link" className='text-black border w-60 h-7 px-2' />
              <ErrorMessage name="image" component="div" className="text-red-500" />
            </div>

            <button type="submit" className='w-20 h-8 bg-green-600 rounded-lg'>
              {buttonLabel}
            </button>
          </Form>
        </div>
      )}
    </Formik>
  );
};

export default MovieForm;
