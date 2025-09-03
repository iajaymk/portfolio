import { WORK } from "@/constants/experience";

const WorkExperience = () => {
    return (
        <div className=" max-w-[1440px] h-[100vh] flex flex-col justify-center items-center m-auto">
            <h2 className="text-center text-4xl uppercase font-[600]">Work Experience</h2>
            <div className="mt-4">
            {WORK.map((item,index) => (
                <div className="my-4" key={index}>
                    <div className="font-[800] text-lg text-[var(--color-secondary)]">{item.companyName}</div>
                    <div className="font-[600] text-md text-[var(--color-secondary)]">{item.position}</div>
                    <div className="">{item.time}</div>
                </div>
            ))}
            </div>
        </div>
    )
}

export default WorkExperience;
