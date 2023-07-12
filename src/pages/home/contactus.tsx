import React, { FormEvent, useCallback } from "react";
import { useRef } from "react";
import {ImLocation2} from "react-icons/im";
import {BsFillTelephoneOutboundFill} from "react-icons/bs";
import {FiMail} from "react-icons/fi";
import { IconType } from 'react-icons';
import Input from "../../components/input";
import {inputData} from "../../components/data/input";


const ContactUs = () => {
    const name = useRef<HTMLInputElement>(null); 
    const email = useRef<HTMLInputElement>(null); 
    const subject = useRef<HTMLInputElement>(null);
    const message = useRef<HTMLTextAreaElement>(null);
    const itemRef = [name,email,subject ]
    

    const resetInput = useCallback(()=>{
        name.current!.value = "";
        email.current!.value = "";
        subject.current!.value = "";
        message.current!.value = "";
    }, [name,email,subject,message])

    const handleSubmit = (e:FormEvent)=>{
        e.preventDefault();
        if(subject && email && message && name){
            const body = `Name: ${name.current?.value}\nEmail: ${email.current?.value}\nMessage: ${message.current?.value}`;
            const mailtoLink = `mailto:esb@gmail.com?subject=${encodeURIComponent(subject.current!.value)}&body=${encodeURIComponent(body)}`;
            resetInput();
            // navigate(mailtoLink);
            // Open the default email client with the populated email fields
            window.location.href = mailtoLink;
            //reset input fields

        }
    }
  


    return ( <>
        <section className="pt-36 mx-5 md:mx-16 mb-10 ">
            <h1 className="font-pacifico text-5xl text-primary pb-3 font-extralight text-center">Hurry</h1>
            <h2 className="text-2xl uppercase text-primary text-center  pb-16">Contact Us</h2>
            <div className="card-products grid md:grid-cols-5  gap-32 place-content-center shadow-xl  ">
                <div className="contact-field  md:col-span-3 text-primary">
                    <form className="p-5 px-16" onSubmit={(e)=>handleSubmit(e)}>
                        {                           
                            inputData.map((item:{id:number,type:string,label:string,required:boolean},k:number)=>{
                            if(item.type === "text" || item.type ==="email") return <Input refI={itemRef[k]} type={item.type} label={item.label} required={item.required} id={item.id} key={k} />
                            if(item.type === "textarea") return <Input refT={message} type={item.type} label={item.label} required={item.required} id={item.id} key={k} />})
                        }
                        <div className="grid place-content-center md:place-content-start"><button  className="px-4 py-2 ring ring-primary/50 rounded-md bg-primaryLight my-8 w-28 text-gray-100">Send</button></div>
                    </form>
                </div>
                <div className="store bg-primaryLight/80  md:col-span-2   grid place-content-center gap-10 px-10 mx-10 md:mx-0 py-10 text-secondaryLight w-fit">
                    <h2 className="text-2xl font-bold">Contact</h2>
                    <p>Welcome to ESB luxury spa, where tranquility and rejuvenation await you. Immerse yourself in a world of relaxation and pampering, designed to nurture your body and uplift your spirit. Allow us to take you on a journey of ultimate bliss and enhance your body's feel-good factor while helping you look your best. Reach out on the following means below or shoot us a mail</p>
                    <div className="grid gap-10">
                        <Card icon={ImLocation2} text={["ESB Beauty Spa, Four Points by Sheraton, Ikot Ekpene."]}/>
                        <Card icon={BsFillTelephoneOutboundFill} text={["+23490000000000","+23480000000000"]}/>
                        <Card icon={FiMail} text={["esb@gmail.com","esb@protonmail.com"]}/>
                    </div>
                </div>
            </div>

        </section>
    </> );
}

const Card = (props:{icon:IconType,text:string[]})=>{
    return <div className="flex gap-5">
       <span className="grid place-content-center h-10 w-10 ring-2  px-5 ring-secondaryLight rounded-full ">{React.createElement(props.icon)}</span>
       <div className="text-wrap">
        {
            props.text.map((t:string,k:number)=><p key={k}>{t}</p>)
        }
       </div>
    </div>
}
 
export default ContactUs;

