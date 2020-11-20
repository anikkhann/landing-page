import React, { useContext, useState } from 'react';
import { UserContext } from '../../../App';
import image from '../../../white.png';
import './Home.css';
import Header from '../Header/Header';
import Button from 'react-bootstrap/Button'
import ModalForm from '../ModalForm/ModalForm';
import {Resizable} from 're-resizable' 
import Draggable from 'react-draggable';
const Home = () => {
    const [text, setText] = useContext(UserContext);
    console.log(text);
    const [modalIsOpen, setIsOpen] = useState(false);
    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }



    return (
        <div className="background">
            <div>
                <Header></Header>
            </div>

            <div className="container" >
                <div className="row">
                    <div className='banner '>

                        <img src={image} alt="ops sorry!!" />
                                          
                        <Draggable >
                              
                            <div className='heading' >
                                   
                                {text.name}
                            </div>                                
                        </Draggable>
                                                

                    </div>
                                          
                                        
                </div>


            </div>
          
            <div className="text-center mt-3">
                <Button onClick={openModal} variant="outline-success">Add Text</Button>
                < ModalForm modalIsOpen={modalIsOpen} closeModal={closeModal}></ModalForm>
            </div>

        </div>
    );
};

export default Home;