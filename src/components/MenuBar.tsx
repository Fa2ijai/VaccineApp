import Image from "next/image";
import TopMenu from "./TopMenu";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { Link } from "@mui/material";

export default async function MenuBar(){

    const session = await getServerSession(authOptions)
    return (
      <div className="h-[12vh] w-screen fixed top-0 left-0 right-0 z-20 flex flex-row-reverse bg-white border-b-2">
        <Image
          src="/img/vaccine-6592893_1280.png"
          alt="logo"
          height={0}
          width={0}
          sizes="100vh"
          className="h-full w-auto pr-5"
        />
        <TopMenu title="Booking" pageRef="/booking" />
        <div className="flex flex-row absolute left-2 h-full">
          {session ? (
            <Link
              className="h-full px2 flex items-center font-serif"
              href="api/auth/signout"
            >
              Sign-Out of {session.user?.name}{" "}
            </Link>
          ) : (
            <Link
              className=" h-full px2 flex items-center font-serif"
              href="api/auth/signin"
            >
              Sign-In
            </Link>
          )}
          <TopMenu title="My Booking" pageRef="/mybooking"></TopMenu>
        </div>
      </div>
    );
}