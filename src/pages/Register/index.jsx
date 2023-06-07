import { FormRegister } from "../../components/FormRegister"

export const Register = () => {
    return (
        <div className="grid  sm:grid-cols-1 md:grid-cols-12 gap-4 h-full">
            <div className="sm:col-span-1 md:col-span-5  flex justify-center items-center">
                <div className="text-center">
                    <h1 className="form-container">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi quo tempora, accusantium deleniti officiis, temporibus illum illo voluptates totam doloribus soluta, quasi veniam nulla cumque possimus. Sint autem ipsam minus.</h1>
                </div>
            </div>
            <div className="sm:col-span-1 md:col-span-7  flex justify-center items-center">
                <div className="text-center">
                    <FormRegister/>
                </div>
            </div>
        </div>
    )
}