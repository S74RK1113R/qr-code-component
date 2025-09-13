export default function DefaultTemplate({children}) {
    return(
        <>
            <main className="w-full h-full flex flex-col items-center justify-center bg-slate-300 pt-8 font-[outfit]">
                {children}

                <div class="attribution p-12 ">
                    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
                    Coded by <a href="#">S74RK1113R</a>.
                </div>
            </main>
        </>
    )
}         