import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import SupportAgentRoundedIcon from "@mui/icons-material/SupportAgentRounded";
import EnhancedEncryptionOutlinedIcon from "@mui/icons-material/EnhancedEncryptionOutlined";
import InventoryOutlinedIcon from "@mui/icons-material/InventoryOutlined";

function Featured() {
  const featuredItems = [
    {
      logo: <LocalShippingOutlinedIcon className="text-lg  text-green-500" />,
      head: "Free Shipping",
      para: "Free shipping with discount",
    },
    {
      logo: <SupportAgentRoundedIcon sx={{ fontSize: 30, color: "#00e800" }} />,
      head: "Great Support 24/7",
      para: "Instant access to Contact",
    },
    {
      logo: (
        <EnhancedEncryptionOutlinedIcon
          sx={{ fontSize: 30, color: "#00e800" }}
        />
      ),
      head: "100% Sucure Payment",
      para: " We ensure your money is save",
    },
    {
      logo: <InventoryOutlinedIcon sx={{ fontSize: 25, color: "#00e800" }} />,
      head: "Money-Back Guarantee",
      para: "30 days money-back guarantee",
    },
  ];

  return (
    <>
      <div className="  relative top-24 w-full hidden md:block  ">
        <div className="container mx-auto  ">
          <div className="flex justify-center border border-solid  border-slate-800.[.1] rounded-lg ">
            {featuredItems.map((item, idx) => (
              <div
                key={idx}
                className="  border-r border-solid  border-slate-800.[.1] rounded hover:bg-[#00B207] 
            hover:text-white transition duration-200 ease-in-out w-full  flex flex-col  bg-white md:py-3 md:px-4 gap-3 "
              >
                <div className="h-16 w-16 rounded-full flex items-center justify-center  bg-white border border-slate-800.[.1]  ">
                  {item.logo}
                </div>
                <h2 className="font-bold   md:text-sm ">{item.head}</h2>
                <p className="font-normal md:text-xxs ">{item.para}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
export default Featured;
