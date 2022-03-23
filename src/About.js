import React from "react";
import "./About.css"

const About = () => {
    return (
        <section className="dark">
            <div className="container py-4">
                <h1 className="h1 text-center" id="pageHeaderTitle">Your hosts</h1>

                <article className="postcard">
                        <img className="postcard__img" src="https://picsum.photos/1000/1000" alt="Image Title" />
                    <div className="postcard__text">
                        <h1 className="postcard__title">Mike</h1>
                        <div className="postcard__bar"></div>
                        <div className="postcard__preview-txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, fugiat asperiores inventore beatae accusamus odit minima enim, commodi quia, doloribus eius! Ducimus nemo accusantium maiores velit corrupti tempora reiciendis molestiae repellat vero. Eveniet ipsam adipisci illo iusto quibusdam, sunt neque nulla unde ipsum dolores nobis enim quidem excepturi, illum quos!</div>
                        <ul className="postcard__tagbox">
                        <li className="tag__item">
                                <a href="#"><i className="fas fa-tag mr-2"></i>Facebook</a>
                            </li>
                            <li className="tag__item">
                                <a href="#"><i className="fas fa-clock mr-2"></i>Instagram</a>
                            </li>
                            <li className="tag__item">
                                <a href="#"><i className="fas fa-play mr-2"></i>Twitter</a>
                            </li>
                        </ul>
                    </div>
                </article>
                <article className="postcard">
                        <img className="postcard__img" src="https://picsum.photos/501/500" alt="Image Title" />
                    <div className="postcard__text">
                        <h1 className="postcard__title">Dave</h1>
                        <div className="postcard__bar"></div>
                        <div className="postcard__preview-txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, fugiat asperiores inventore beatae accusamus odit minima enim, commodi quia, doloribus eius! Ducimus nemo accusantium maiores velit corrupti tempora reiciendis molestiae repellat vero. Eveniet ipsam adipisci illo iusto quibusdam, sunt neque nulla unde ipsum dolores nobis enim quidem excepturi, illum quos!</div>
                        <ul className="postcard__tagbox">
                            <li className="tag__item">
                                <a href="#"><i className="fas fa-tag mr-2"></i>Facebook</a>
                            </li>
                            <li className="tag__item">
                                <a href="#"><i className="fas fa-clock mr-2"></i>Instagram</a>
                            </li>
                            <li className="tag__item">
                                <a href="#"><i className="fas fa-play mr-2"></i>Twitter</a>
                            </li>
                        </ul>
                    </div>
                </article>
            </div>
        </section>
    )
}

export default About