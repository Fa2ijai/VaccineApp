import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import getUserProfile from "@/libs/getUserProfile";
import { getServerSession } from "next-auth";
import Hospital from "@/db/models/Hospital";
import { dbConnect } from "@/db/dbConnect";
import { revalidatePath} from 'next/cache'


export default async function AddHospitalForm(){
    const addHospital = async (AddHospitalForm:FormData) => {
     "use server"
    const name = AddHospitalForm.get("hospitalName")
    const address = AddHospitalForm.get("hospitalAddress")
    const district = AddHospitalForm.get("hospitalDistrict")
    const province = AddHospitalForm.get("hospitalProvince")
    const postalcode = AddHospitalForm.get("hospitalPostalCode")
    const tel = AddHospitalForm.get("hospitalTel")
    const picture = AddHospitalForm.get("hospitalImage")

        try{
            await dbConnect()
            const hospital = await Hospital.create({
                "name" : name,
                "address" : address,
                "district" : district,
                "province" : province,
                "postalcode" : postalcode,
                "tel" : tel,
                "picture" : picture
            })
        }catch(error){
            console.log(error)
        }   
    }
    revalidatePath("/hospital");
    const session = await getServerSession(authOptions);
    if (!session || !session.user.token) return null;
    const profile = await getUserProfile(session.user.token);
    if (profile.data.role != "admin") return null;


    return (
        
      <form className="w-[700px]" action={addHospital}>
        <div className="flex flex-col gap-4">
          <div className="text-2xl font-semibold">Add Hospital</div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="hospitalName">Name</label>
            <input
              type="text"
              name="hospitalName"
              id="hospitalName"
              className="border border-gray-300 rounded-md p-2"
              placeholder="Hospital Name"
            ></input>
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="hospitalAddress">Address</label>
            <input
              type="text"
              name="hospitalAddress"
              id="hospitalAddress"
              className="border border-gray-300 rounded-md p-2"
              placeholder="Hospital Address"
            ></input>
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="hospitalDistrict">District</label>
            <input
              type="text"
              name="hospitalDistrict"
              id="hospitalDistrict"
              className="border border-gray-300 rounded-md p-2"
              placeholder="Hospital District"
            ></input>
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="hospitalProvince">Province</label>
            <input
              type="text"
              name="hospitalProvince"
              id="hospitalProvince"
              className="border border-gray-300 rounded-md p-2"
              placeholder="Hospital Province"
            ></input>
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="hospitalPostalCode">Postal Code</label>
            <input
              type="text"
              name="hospitalPostalCode"
              id="hospitalPostalCode"
              className="border border-gray-300 rounded-md p-2"
              placeholder="Hospital Postal Code"
            ></input>
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="hospitalTel">Tel</label>
            <input
              type="text"
              name="hospitalTel"
              id="hospitalTel"
              className="border border-gray-300 rounded-md p-2"
              placeholder="Hospital Tel"
            ></input>
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="hospitalImage">Image</label>
            <input
              type="text"
              name="hospitalImage"
              id="hospitalImage"
              className="border border-gray-300 rounded-md p-2"
              placeholder="Hospital Image URL"
            ></input>
          </div>
          <button className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2 shadow-sm text-white">
            Add Hospital
          </button>
        </div>
      </form>
    );
}