import React, { useState } from "react";
import box from "../images/illustration-box-desktop.svg";
import Question from "./Question";

const data = [
  {
    id: "faq1",
    topLine: "How many team members can I invite?",
    bottomLine: `You can invite up to 2 additional users on the Free plan. There is no limit on 
    team members for the Premium plan.`,
  },
  {
    id: "faq2",
    topLine: "What is the maximum file upload size?",
    bottomLine: `No more than 2GB. All files in your account must fit your allotted storage space.`,
  },
  {
    id: "faq3",
    topLine: "How do I reset my password?",
    bottomLine: `Click “Forgot password” from the login page or “Change password” from your profile page.
    A reset link will be emailed to you.`,
  },
  {
    id: "faq4",
    topLine: "Can I cancel my subscription?",
    bottomLine: `Yes! Send us a message and we’ll process your request no questions asked.`,
  },
  {
    id: "faq5",
    topLine: "Do you provide additional support?",
    bottomLine: `Chat and email support is available 24/7. Phone lines are open during normal business hours.`,
  },
];

export default function FAQ() {
  const [open, setOpen] = useState("");
  let questions = data.map((data) => (
    <Question open={open} setOpen={setOpen} data={data} key={data.id}/>
  ));
  return (
    <div className='faq-container'>
      <div className='img-container'>
        <img src={box} alt='' />
      </div>
      <div className='faq-list'>
        <h1>FAQ</h1>
        <ul>{questions}</ul>
      </div>
    </div>
  );
}
