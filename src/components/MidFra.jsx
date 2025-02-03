import React from 'react'

const MidFra = ({titulo , texto}) => {
    return (
        <>
            <section className='flex flex-col md:flex-row  pt-10 pl-5  font-medium md:pt-32 md:pb-3pt-32 '>
                <div className=' w-48 md:mr-3  md:mt-20'>{titulo}</div>
                <div className=' 
                
                md:w-midTx 
                p-7
                md:pr-20 
                
                text-xl 
                md:text-4xl 
                mr-5
                text-center 
                md:m-20
                
                text-black'>
                   {texto}
                </div>

                <div className=' w-48  mr-3'></div>
            </section>
        </>
    )
}

export default MidFra