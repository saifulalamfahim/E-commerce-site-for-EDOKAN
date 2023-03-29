import React from 'react';
import { useState } from 'react';

const FaqContainer = () => {

    const [selected, setSelected] = useState(null);

    const toggle = i => {
        if (selected == i) {
            return setSelected(null)
        }
        setSelected(i)
    }

    return (
        <div className='container mt-4 mb-4'>
           <div className='accordion'>
                {data.map((item, i) => (
                    <div className='item'>
                        <div className='title' onClick={() => toggle(i)}>
                            <h2>{item.question}</h2>
                            <span>{selected === i ? '-' : '+'}</span>
                        </div>
                        <div className={selected === i ? 'show' : 'content'}>
                            {item.answer}
                        </div>
                    </div>
                ))}
           </div>
        </div>
    );
};

const data =[
    {
        question: "Question 1",
        answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo sint exercitationem consectetur quibusdam perspiciatis minima illo, nam velit dolorum labore iusto. Unde ducimus placeat quo cum totam perferendis exercitationem pariatur vero quis deleniti eos doloribus quia, velit, ut repellat ad quam quas, voluptatibus corrupti veritatis blanditiis iusto corporis quasi ipsam."
    },
    {
        question: "Question 2",
        answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo sint exercitationem consectetur quibusdam perspiciatis minima illo, nam velit dolorum labore iusto. Unde ducimus placeat quo cum totam perferendis exercitationem pariatur vero quis deleniti eos doloribus quia, velit, ut repellat ad quam quas, voluptatibus corrupti veritatis blanditiis iusto corporis quasi ipsam."
    },
    {
        question: "Question 3",
        answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo sint exercitationem consectetur quibusdam perspiciatis minima illo, nam velit dolorum labore iusto. Unde ducimus placeat quo cum totam perferendis exercitationem pariatur vero quis deleniti eos doloribus quia, velit, ut repellat ad quam quas, voluptatibus corrupti veritatis blanditiis iusto corporis quasi ipsam."
    },
    {
        question: "Question 4",
        answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo sint exercitationem consectetur quibusdam perspiciatis minima illo, nam velit dolorum labore iusto. Unde ducimus placeat quo cum totam perferendis exercitationem pariatur vero quis deleniti eos doloribus quia, velit, ut repellat ad quam quas, voluptatibus corrupti veritatis blanditiis iusto corporis quasi ipsam."
    },
    {
        question: "Question 5",
        answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo sint exercitationem consectetur quibusdam perspiciatis minima illo, nam velit dolorum labore iusto. Unde ducimus placeat quo cum totam perferendis exercitationem pariatur vero quis deleniti eos doloribus quia, velit, ut repellat ad quam quas, voluptatibus corrupti veritatis blanditiis iusto corporis quasi ipsam."
    },
    {
        question: "Question 6",
        answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo sint exercitationem consectetur quibusdam perspiciatis minima illo, nam velit dolorum labore iusto. Unde ducimus placeat quo cum totam perferendis exercitationem pariatur vero quis deleniti eos doloribus quia, velit, ut repellat ad quam quas, voluptatibus corrupti veritatis blanditiis iusto corporis quasi ipsam."
    }
]

export default FaqContainer;