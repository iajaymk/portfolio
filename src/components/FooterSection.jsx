const { socials } = require("@/constants/socials")

const FooterSection = () => {
    return (
        <div className="max-w-[1440px] my-8 px-4 flex justify-between items-end">
            <div className="">
            <div className="font-bold text-xl text-[var(--color-secondary)]">
                SOCIAL
            </div>
            <div className="flex gap-3">
            {socials.map((item,index)=>(
                <div className="uppercase hover:text-[var(--color-secondary)]" key={index}>
                    {item.name}
                </div>
            ))}
            </div>
            </div>
            <div className="text-[var(--color-secondary)]">© AJAY KUMAR 2025</div>
        </div>
    )
}

export default FooterSection;
