import qrImage from '../assets/image-qr-code.png'

export default function QrComponent() {
    return(
        <>
            <div className='bg-white flex flex-col w-[375px] items-center justify-center rounded-2xl space-y-8 shadow-slate-500 shadow-2xl'>
                
                <div className='p-8 pb-0 w-full'>
                    <img className=' rounded-xl object-cover' src={qrImage} alt="Qr image" />
                </div>
                
                <h1 className='w-full font-bold text-2xl text-center text-slate-900 px-9'>
                    Improve your front-end skills by building projects
                </h1>
                <p className='w-full text-[15px] text-slate-500 text-center pb-10'>
                    Scan the QR code for to visit Frontend <br/>Mentor and take your coding skills to <br/>the next level
                </p>
            </div> 
        </>
    )
}