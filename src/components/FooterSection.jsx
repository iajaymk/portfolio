const { socials } = require("@/constants/socials")

const FooterSection = () => {
    return (
        <div className="max-w-[1440px] my-8 px-4 flex justify-between items-end">
            <div className="">
            <div className="font-bold text-xl">
                SOCIAL
            </div>
            <div className="flex gap-3">
            {socials.map((item,index)=>(
                <a href={item.url} className="uppercase text-[var(--color-secondary)] hover:text-[var(--color-onPrimary)]" key={index}>
                    {item.name}
                </a>
            ))}
            </div>
            </div>
            <div className="text-[var(--color-secondary)]">© AJAY KUMAR 2025</div>
        </div>
    )
}

export default FooterSection;
