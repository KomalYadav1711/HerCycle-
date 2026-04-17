import React from 'react'

export default function SymptomsPage(){

    return(
        <div className='min-h-screen bg-pink-50 flex flex-col items-center p-6'>
            <h1 className='text-3xl font-bold text-pink-600 mb-20'>HerCycle + </h1>

            <div className='bg-white p-6 rounded-2xl shadow-md w-full max-w-md'>
                <h2 className='text-lg font-semibold mb-4'>
                    Select your symptoms 
                </h2>

                <div>
                    l    
                </div>
                <h3 className='mt-6 font-semibold'>
                    Add custom symptoms
                </h3>
                <input
                type='text'
                placeholder='e.g. burning sensation, mild pain'
                ></input>

                <button>Analyze</button>
            </div>
        </div>
    )
}
