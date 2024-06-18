type Props = {
    label: string;
    onCLick: () => void;
}

export const CustomButton = ({ label, onCLick }: Props) =>{
    return (
        <button onClick={onCLick} className="p-3 rounded-md text-white bg-blue-700">{label}</button>
    )
}


// "use client"
//
// const Page = () =>{
//     return (
//       <div className="w-screen h-screen flex justify-center items-center">
//
//       </div>
//     );
// }
//
// export default Page;