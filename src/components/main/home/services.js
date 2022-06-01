import React from 'react';
import "../../../styles/Services/services.scss"
import {media} from "../../media";


const Services = () => {
    return (
        <section id="services">
            <div className="container">
                <h3>Байланышуу учун</h3>
                <div className="services__general">
                    <div className="services__general--contact">
                        <a href="https://kashkasuu@bk.ru"><span style={{fontSize: media(15, 20)}}><i className="fa-solid fa-envelope"/>kashkasuu@bk.ru</span></a>
                        <a href="https://t.me/996770300022"><span style={{fontSize: media(15, 20)}}><i className="fa-brands fa-telegram"/>0 770 300 022</span></a>
                        <a href="tel:0770300022"><span style={{fontSize: media(15, 20)}}><i className="fa-solid fa-phone"/>0 770 300 022</span></a>
                        <a href="#"><span style={{fontSize: media(15, 20)}}><i className="fa-solid fa-location-dot"/>Чоң-Алай району.
                            <br/><br/>Чулук айылы</span></a>
                    </div>
                    <div className="services__general--map">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16578.222995202537!2d76.07322352332807!3d42.73243630332299!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389b6948ef728991%3A0x24b4afe9018d8a62!2z0KjQsNCx0LTQsNC9INC-0YDRgtC-INC80LXQutGC0LXQsdC4!5e0!3m2!1sru!2skg!4v1654072958379!5m2!1sru!2skg" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
                            style={{border: "none", height: media(280, 450), width: media(300, 600)}} allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;