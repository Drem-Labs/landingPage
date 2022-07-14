import React from 'react';
import './index.css';
import MailchimpForm from '../Form/MailchimpForm';

export default class Hero extends React.Component {    

    // styling for the subscription form in Hero
    styling = {
        div: "",
        form: "flex flex-row my-8",
        input: "w-3/5 mr-2 bg-[#9498a4] bg-opacity-25 appearance-none rounded w-full py-2 px-3 text-white text-center focus:outline-none focus:shadow-outline placeholder:text-white placeholder:font-[montserrat]",
        button: "w-2/5 ml-2 bg-white hover:bg-white-700 text-black font-bold py-2 px-16 rounded-full focus:outline-none focus:shadow-outline"
    }

    render() {
        return (
            <section className="flex relative text-white text-center">

                {/* Hero content */}
                <div className="bg-hero bg-no-repeat bg-cover bg-center bg-fixed z-10">

                    {/* Section header */}
                    <div className="text-center mt-32 mb-96 h-full">
                        <h1 className="text-9xl md:text-6xl text-center font-extrabold drop-shadow-lg mb-4 mx-96" data-aos="zoom-y-out">Unleash Your Future</h1>
                    </div>
                </div>


                {/* Second Layer */}
                <div className="absolute inset-x-0 bottom-0 z-20">
                    <div className="bg-hero-toplayer bg-no-repeat bg-cover bg-center bottom-0">
                        <div className="flex flex-col max-w-3xl h-144 items-center justify-end mx-auto">

                            <div className="mb-16 drop-shadow-lg">
                                <div className="my-8">
                                    <p className="text-2xl font-bold mx-48" data-aos="zoom-y-out" data-aos-delay="150">Drem is your portal to the new internet economy</p>
                                </div>
                                <MailchimpForm styling={this.styling} />
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        )
    }
}