export default function Benefit() {
    const offers = [
        {
            title: "For Patients",
            offerCard: [
                {
                    title: "Offers",
                    description: "Convenience of remote consultations",
                    description2: "Access to top healthcare proffesionals",
                    description3: "Reduced trave time and costs",
                    buttontext: "Learn More",
                }
            ],
            offerInfo: [
                {
                    image: "/patient.png",
                    content: "We get unlocked stability and happiness of working and helping patients for them to be cured and get well with their work which enable them to have a good and longlasting living without problems of any sickness and hence make them connect with proffesional healthcares"
                }
            ]
        }
    ]
    return (
        <div className="mx-auto container flex flex-col gap-10 py-10 px-20">
            <h1 className="text-2xl font-semibold text-center text-[#0086AD]">Benefits of Working With us</h1>
            <div className="flex flex-col gap-10">
                <div className="flex justify-between">
                    {
                        offers.map((item,index)=>(
                            <div className="flex justify-between text-white" key={index}>
                                <h1 className="text-[#0086AD] text-xl font-semibold">{item.title}</h1>

                            </div>

                        ))
                    }

                </div>

            </div>


        </div>
    )
}