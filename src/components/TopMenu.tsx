import Link from "next/link";

export default function TopMenu({title, pageRef} : { title:string, pageRef:string}){
    return(
        <Link className="flex items-center justify-center text-base text-slate-600 h-full w-[120px] mt-auto mb-auto font-serif" href={pageRef}>
            {title}
        </Link>
    );
}