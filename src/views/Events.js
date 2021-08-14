import React from 'react';
import EventInstance from '../components/EventInstance.js';
import { Info } from '../components/Info.js';
 


function Events()
{
 return(

    <>


    <div className="text-wrapper">

        <Info header = "Events" paragraph = ""  />

        {/*DAD! Add events below this lin by copying the format. */}
        <EventInstance linkURL = "http://www.shoffpromotions.com/" name = "Comic Logic Comic Show" date = "Jul 11, 2021 12-5PM" address = "44031 Ashburn Plaza Shopping Center #281 Ashburn, VA 20147"/>
        <EventInstance linkURL = "http://www.shoffpromotions.com/" name = "Frederick, MD, Comic Show" date = "Jul 18, 2021 10AM-3PM" address = "5400 Holiday Dr 21703"/>
                        
                    
 
        

    </div>

    </>



 );
 
} 


export default Events;